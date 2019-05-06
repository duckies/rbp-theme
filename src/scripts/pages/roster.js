import {MDCRipple} from '@material/ripple/index';
import {getRequest} from '../helpers/network';
import config from '../config';
import initializePage from '../global/global';

const ignoredRanks = [2, 6, 7];
const rankMap = {
  '0': 'Guild Master',
  '1': 'Officers',
  '2': 'Officer Alt',
  '3': 'Gorb 2.0',
  '4': 'Raider',
  '5': 'Recruit',
  '6': 'Fan',
  '7': 'Player Alts',
};

const classMap = {
  1: 'warrior',
  2: 'paladin',
  3: 'hunter',
  4: 'unknown',
  5: 'priest',
  6: 'death-knight',
  7: 'shaman',
  8: 'mage',
  9: 'warlock',
  10: 'monk',
  11: 'druid',
  12: 'demon-hunter',
};

/**
 * Uses sorted JSON data to create character elements.
 * @param {JSON} JSON
 * @return {String}
 * style="background-image: url(${config.blizzard.avatar_base + member.character.thumbnail.replace('avatar', 'main')})"
 */
function createCharacterElements(JSON) {
  return JSON.members.map((member) => {
    const specIcon = member.character.spec ?
      'https://render-us.worldofwarcraft.com/icons/56/' + member.character.spec.icon + '.jpg' :
      'https://s3.amazonaws.com/files.enjin.com/632721/material/images/icons/questionmark.jpg';
    return `
      <div class="roster--character mdc-ripple-target class-${classMap[member.character.class]} mdc-elevation--z2">
        <div class="roster--bg">
          <img class="roster--bg__img" src="${config.blizzard.avatar_base + member.character.thumbnail.replace('avatar', 'main')}">
          <div class="roster--bg__gradient"></div>
        </div>
        <div class="roster-grid">
          <img class="roster--avatar" src="${config.blizzard.avatar_base + member.character.thumbnail}" onerror="window.avatarError(this);">
          <img class="roster--spec" src="${specIcon}">
          <div class="roster--info">
            <div class="roster--info__name">${member.character.name}</div>
            <div class="roster--info__rank">${rankMap[member.rank]}</div>
            <div class="roster--info__armory">
              <a href='https://www.worldofwarcraft.com/en-us/character/blackrock/${member.character.name}' target='_blank'>
                <img class='character-links__img' width='24' height='24' src='https://s3.amazonaws.com/files.enjin.com/632721/material/images/icons/WoW.png'>
              </a>
              <a href='https://raider.io/characters/us/blackrock/${member.character.name}' target='_blank'>
                <img class='character-links__img' width='24' height='24' src='https://s3.amazonaws.com/files.enjin.com/632721/material/images/icons/raiderio.png'>
              </a>
              <a href='https://www.warcraftlogs.com/character/us/blackrock/${member.character.name}' target='_blank'>
                <img class='character-links__img' width='24' height='24' src='https://s3.amazonaws.com/files.enjin.com/632721/material/images/icons/warcraftlogs.png'>
              </a>
            </div>
          </div>
        </div>
      </div>`;
  }).join('');
}

window.avatarError = (avatar) => {
  avatar.src = config.blizzard.avatar_generic;
  avatar.onerror = '';
};

/**
 * Uses the Blizzard API to get guild characters.
 */
async function getRosterData() {
  const pageElem = document.querySelector('#page-roster .roster');

  try {
    const json = await getRequest(`https://api.duckie.cc/guild/${config.blizzard.realm}/${config.blizzard.guild}?fields=members`);

    sortRoster(json);
    filterRanks(json);

    pageElem.innerHTML = '';
    pageElem.insertAdjacentHTML('beforeend', createCharacterElements(json));

    document.querySelectorAll('.roster--bg__img').forEach((img) => {
      img.addEventListener('load', img.classList.add('roster--bg__img--loaded'));
    });

    pageElem.querySelectorAll('.mdc-ripple-target').forEach((ripple) => {
      MDCRipple.attachTo(ripple);
    });
  } catch (error) {
    console.error('Blizzard API network error: ' + error);
  }
}

/**
 * Sorts the roster data with guild master first.
 * @param {JSON} data
 */
function sortRoster(data) {
  data.members = data.members.sort((a, b) => {
    return a.rank - b.rank;
  });
}

/**
 * Eliminates guild members of ranks we don't care about.
 * @param {JSON} data
 */
function filterRanks(data) {
  data.members = data.members.filter((member) => {
    return !ignoredRanks.includes(member.rank);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initializePage();
  getRosterData();
});
