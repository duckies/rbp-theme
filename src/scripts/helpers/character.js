import {MDCSnackbar} from '@material/snackbar/index';
import Character from './blizzard';
import {animateProgressBars} from '../helpers/material';

let characterHashes = [];

/**
 * Removes known characters.
 */
export function cleanCharacterHashes() {
  characterHashes.length = 0;
}

/**
 * Handler for remove button in application.
 * @param {button} button
 * @return {false}
 */
function appRemoveCallback(button) {
  const hash = button.dataset.hash;
  const elem = document.querySelector('.character[data-char="' + hash + '"]');
  const mask = document.querySelector('.character[data-hash="' + hash + '"]');
  const snackbar = new MDCSnackbar(document.querySelector('.mdc-snackbar'));

  if (elem) {
    elem.querySelector('.remove a').click();
  }

  if (mask) {
    mask.remove();
    characterHashes = characterHashes.filter((e) => e !== hash);
  }

  const snackObj = {
    message: 'Character destroyed, that was mean.',
    actionText: 'Neat',
    actionHandler: false,
  };

  snackbar.show(snackObj);

  return false;
}

window.appRemoveCallback = appRemoveCallback;

/**
 * Adds a loader for the classes found.
 * @param{string} className
 */
function injectCharacterLoader(className) {
  if (className) {
    className = className.replace(' ', '-').toLowerCase();
  } else {
    className = 'unknown';
  }

  const characterHolder = document.querySelector('.form-question-body');

  const loader = document.createElement('div');
  loader.classList = 'character character-loader class-' + className;

  characterHolder.appendChild(loader);
}

/**
 * Finds and parses character data.
 * @return {Object} Character Info.
 */
function getCharacterData() {
  const question = document.querySelector('.form-wow-answer');

  if (!question) {
    return;
  }

  const isForm = document.querySelector('.m_appform');
  const isApp = document.querySelector('.v2_system_dashboard');

  if (isForm) {
    const dataElem = isForm.querySelector('input[type="hidden"]');

    if (dataElem && dataElem.value) {
      return JSON.parse(dataElem.value);
    }
  } else if (isApp) {
    const dataElem = isApp.querySelector('.character_list');

    if (dataElem && dataElem.dataset.cfg) {
      return JSON.parse(JSON.parse(dataElem.dataset.cfg).value);
    }
  }

  return null;
}

/**
 * Uses data found on the application page to create
 * character objects, and gets their data.
 */
export async function getWoWCharacters() {
  const answerParent = document.querySelector('.form-wow-answer');

  if (!answerParent) {
    return;
  }

  const answerBody = answerParent.querySelector('.form-question-body');
  const chars = getCharacterData();

  if (!chars || chars.length === 0) {
    return;
  }

  const characters = [];
  for (const hash in chars) {
    if (!characterHashes.includes(hash)) {
      injectCharacterLoader(chars[hash].type);
      characterHashes.push(hash);
      characters.push(new Character(chars[hash]));
    }
  }

  Promise.all(characters.map((character) => character.getData()))
    .then(() => {
      document.querySelectorAll('.character-loader').forEach((el) => {
        el.classList.add('leaving');
        window.setTimeout(() => el.remove(), 350);
      });

      answerBody.insertAdjacentHTML('beforeend',
        characters.map((character) => character.characterElement).join(''));

      setTimeout(animateProgressBars, 500);
    });
}

