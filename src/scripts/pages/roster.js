import {MDCRipple} from '@material/ripple';
import {getRequest} from '../helpers/network';
import {BlizzardAPI} from '../config/config';

const ignoredRanks = [2, 7, 8];
const rankMap = {
  '0': 'Guild Master',
  '1': 'Officers',
  '2': 'Officer Alt',
  '3': 'Gorb 2.0',
  '4': 'Raider Rank 2',
  '5': 'Raider Rank 1',
  '6': 'Recruit',
  '7': 'Fan',
  '8': 'Player Alts',
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
 */
function createCharacterElements(JSON) {
  return JSON.members.map((member) => {
    return `
      <div class="roster--character mdc-ripple-target">
        <div class="roster--bg">
          <div class="roster--avatar">
            <img class="roster--avatar__img" src="${BlizzardAPI.AVATAR_BASE + member.character.thumbnail}">
          </div>
          <div class="roster--info">
            <div class="roster--info__name class-${classMap[member.character.class]}">${member.character.name}</div>
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

/**
 * Uses the Blizzard API to get guild characters.
 * @param {Node} pageElem
 */
async function pullRosterData(pageElem) {
  try {
    const json = await getRequest(BlizzardAPI.rosterURL());

    sortRoster(json);
    filterRanks(json);
    pageElem.innerHTML = '';
    pageElem.insertAdjacentHTML('beforeend', createCharacterElements(json));

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

/**
 * Initializes roster functionality.
 */
export default function initRoster() {
  const pageElem = document.querySelector('#page-roster .roster');

  if (!pageElem) {
    return;
  }

  pullRosterData(pageElem);
}