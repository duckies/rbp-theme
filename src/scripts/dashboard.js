import {MDCRipple} from '@material/ripple';
import {MDCSnackbar} from '@material/snackbar';
import {animateProgressBars} from './helpers/material';
import * as basicLightbox from 'basiclightbox';
import Character from './helpers/blizzard';

let characterHashes = [];

/**
 * Finds and parses character data.
 * @return {Object} Character Info.
 */
function getCharacterData() {
  const question = document.querySelector('.form-wow-answer');

  if (!question) {
    console.warn('[Application]: Character question not found.');
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
async function getWoWCharacters() {
  const answerParent = document.querySelector('.form-wow-answer');
  const answerBody = answerParent.querySelector('.form-question-body');
  const chars = getCharacterData();

  if (!chars || chars.length === 0) {
    return;
  }

  let characters = [];
  for (const hash in chars) {
    if (!characterHashes.includes(hash)) {
      characterHashes.push(hash);
      characters.push(new Character(chars[hash]));
    }
  }

  Promise.all(characters.map((character) => character.getData()))
    .then(() => {
      answerBody.insertAdjacentHTML('beforeend',
        characters.map((character) => character.characterElement).join(''));

      setTimeout(animateProgressBars, 500);
  });
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
 * Forces bbcode links to open in a new tab.
 */
function peskyLinks() {
  document.querySelectorAll('.bbcode_url')
    .forEach((url) => url.setAttribute('target', '_blank'));
}

/**
 * Initializes MDCRipple and removes trashcan.
 */
function cleanupMenu() {
  const trash = document.querySelector('.fa.fa-trash');
  const header = document.querySelector('.app_header');

  if (trash && header && !header.classList.contains('app_header_initialized')) {
    trash.parentNode.insertAdjacentText('beforeend', 'Trash');
    trash.remove();

    document.querySelector('.app_header')
      .classList.add('app_header_initialized');
  }

  document.querySelectorAll('.menu_link, .app_sidebar_block')
  .forEach((menu) => MDCRipple.attachTo(menu));
}

/**
 * Initializes Dashboard
 */
export default function init() {
  const dashboard = document.querySelector('.v2_system_dashboard');
  const application = document.querySelector('.m_appform');

  if (dashboard) {
    mutationCallback();
    createMutationObserver(dashboard);
  } else if (application) {
    createMutationObserver(application);
  }
}

/**
 * Function called on dashboard mutation events to check for
 * content that needs to be edited.
 */
function mutationCallback() {
  getWoWCharacters();
  imageReplacement();
  createLightboxes();
  peskyLinks();
}

/**
 * Creates a MutationObserver to monitor if Ajax calls are made.
 * Primarily used to see if new applications are selected.
 * @param {Node} target
 */
function createMutationObserver(target) {
  const observer = new MutationObserver((mutations) => {
    if (target.classList.contains('m_appform')) {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.classList && node.classList.value == 'character') {
            mutationCallback();
          }
        });
      });
    } else if (target.classList.contains('v2_system_dashboard')) {
      cleanupMenu();
      mutations.forEach((mutation) => {
        mutation.removedNodes.forEach((node) => {
          if (node.classList && node.classList.value == 'app_inner_area m_system-dashboard') {
            characterHashes.length = 0;
            console.info('[Application]: Application removed: ', characterHashes);
          }
        });

        mutation.addedNodes.forEach((node) => {
          if (node.classList && node.contains(node.querySelector('.character_list'))) {
            console.info('[Application]: Application added: ', characterHashes);
            mutationCallback();
          }
        });
      });
    }
  });

  observer.observe(target, {
    childList: true,
    subtree: true,
  });
}

/**
 * Replaces smaller enjin images and thumbnails with their larger counterparts.
 */
function imageReplacement() {
  document.querySelectorAll('img[src^="https://assets-cloud.enjin.com/users/"],img[src^="https://resources.enjin.com/profile/images/"],img[src$="site_logo/small.png"]')
    .forEach((img) => img.src = img.src.replace('small', 'medium'));

  document.querySelectorAll('img[src*="/module_appform/thumb"]')
    .forEach((img) => img.src = img.src.replace('thumb', 'full'));
}

/**
 * Creates basicLightboxes out of images uploaded to the application.
 */
function createLightboxes() {
  document.querySelectorAll('.images a').forEach(function(elem) {
    elem.onclick = function(e) {
      e.preventDefault();
      basicLightbox.create(`<img src='${elem.getAttribute('href')}'>`).show();
    };
  });
}
