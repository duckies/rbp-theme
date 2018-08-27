const apiKey = 'e82qmvhf6egvsqdmpemmps2dskp62teu';
const thumbnail = 'https://render-us.worldofwarcraft.com/character/';
const defaultAvatar = 'themes/core/images/game/generic/avatar/default.jpg';
const genericAvatar = 'https://s3.amazonaws.com/files.enjin.com/1604436/images/unknown.jpg';
const slots = [
  'head',
  'neck',
  'shoulder',
  'back',
  'chest',
  'shirt',
  'wrist',
  'hands',
  'waist',
  'legs',
  'feet',
  'finger1',
  'finger2',
  'trinket1',
  'trinket2',
  'mainHand',
  'offHand',
];
const errorMap = {
  'BlizzardOutage': 'Blizzard reports this character is temporarily unavailable on the API.',
  'NoBoth': 'Character was not found on the armory or RaiderIO.',
  'NoBlizzardYesRaiderIO': 'Character may have transferred. Character is not found on the armory, but is on RaiderIO.',
  'NoRaiderIO': 'Character was not found on RaiderIO.',
  'None': '',
};

/**
 * @class
 * @classdesc World of Warcraft character.
 * */
export default class Character {
  /**
   * Constructs Character object.
   * @param {Object} data
   */
  constructor(data) {
    this.hash = data.hash;
    this.name = data.name;
    this.region = data.region;
    this.realm = data.realm;
    this.class = data.type;
    this.race = data.race;
    this.level = data.level;
    this.avatar = data.avatar_url.replace(defaultAvatar, genericAvatar);
    this.isRemovable = (document.querySelector('.m_appform')) ? true : false;
  }

  /**
   * Short circuitable class.
   */
  get characterClass() {
    if (this.class) {
      return this.class;
    } else if (this.raiderIO && this.raiderIO.class) {
      return this.raiderIO.class;
    }
    return 'Unknown';
  }

  /**
   * Gets Blizzard character API url.
   */
  get blizzardApi() {
    return 'https://' + this.region + '.api.battle.net/wow/character/' + this.realm + '/' + this.name + '?fields=items,talents&locale=en_US&apikey=' + apiKey;
  }

  /**
   * Gets Raider.io character API url.
   */
  get raiderIOApi() {
    return 'https://raider.io/api/v1/characters/profile?region=' + this.region + '&realm=' + this.realm + '&name=' + this.name + '&fields=gear,raid_progression,mythic_plus_scores,previous_mythic_plus_scores';
  }

  /**
   * Detects if the raiderIO profile url is available or creates it.
   */
  get raiderIOProfile() {
    return (this.raiderIO.profile_url) ? this.raiderIO.profile_url :
      `https://raider.io/characters/${this.region}/${this.formattedRealm}/${this.name}`;
  }

  /**
   * Removes spacing and capitalization of a class for styling.
   */
  get formattedClass() {
    return this.characterClass.replace(' ', '-').toLowerCase();
  }

  /**
   * Strips characters which may cause lookup issues with funky realms.
   */
  get formattedRealm() {
    return this.realm.replace(' ', '-');
  }

  /**
   * Creates the character element DOM from object data.
   */
  get characterElement() {
    if (!this.blizzard || this.blizzard.message || this.blizzard.status) {
      if (this.raiderIO && !this.raiderIO.statusCode) {
        if (this.blizzard.reason === 'Character unavailable') {
          this.error = 'BlizzardOutage';
        } else {
          this.error = 'NoBlizzardYesRaiderIO';
        }
        return this.raiderIOOnlyElement;
      }
      this.error = 'NoBoth';
      return this.blizzardAPIFailureElement;
    } else if (!this.raiderIO || this.raiderIO.statusCode) {
      this.error = 'NoRaiderIO';
      return this.raiderIOFailureElement;
    } else {
      this.error = 'None';
      return this.apiSuccessElement;
    }
  }

  /**
   * HTML returned when the Blizzard API call fails.
   */
  get blizzardAPIFailureElement() {
    return `
      <div class="character class-${this.formattedClass}" data-hash="${this.hash}" data-error="${this.error}">
        <div class="flex-row">
          <div class="character-info col-12 col-md-2">
            <div class="character-portrait">
                <img class="character-portrait__img" src="${this.avatar}">
            </div>
            <div class="character-text">
                <div class="character-name col-12">${this.name}</div>
                <div class="col-12">${this.race} ${this.characterClass}</div>
            </div>
            <ul class="character-links">
                <li><a href="https://www.worldofwarcraft.com/en-${this.region}/character/${this.formattedRealm}/${this.name}" target="_blank"><img class="character-links__img" width="24" height="24" src="https://s3.amazonaws.com/files.enjin.com/632721/material/images/icons/WoW.png"></a></li>
                <li><a href="${this.raiderIOProfile}" target="_blank"><img class="character-links__img" width="24" height="24" src="https://s3.amazonaws.com/files.enjin.com/632721/material/images/icons/raiderio.png"></a></li>
                <li><a href="https://www.warcraftlogs.com/character/${this.region}/${this.formattedRealm}/${this.name}" target="_blank"><img class="character-links__img" width="24" height="24" src="https://s3.amazonaws.com/files.enjin.com/632721/material/images/icons/warcraftlogs.png"></a></li>
            </ul>
            <div class="remove-button">
              ${this.removeButton}
            </div>
          </div>
          <div class="character-info-block col-12 col-md">
            <div class="character-header">Missing Data Warning</div>
            <div class="character-error">${errorMap[this.error]}</div>
          </div>
        </div>
      </div>`;
  }

  /**
   * HTML returned if Blizzard API fails, but RaiderIO comes in clutch.
   */
  get raiderIOOnlyElement() {
    return `
    <div class="character class-${this.formattedClass}" data-hash="${this.hash}" data-error="${this.error}">
      <div class="flex-row">
        <div class="character-info col-12 col-md-2">
            <div class="character-portrait">
                <img class="character-portrait__img" src="${this.raiderIO.thumbnail_url}">
            </div>
            <div class="character-text">
                <div class="character-name col-12">${this.name}</div>
                <div class="col-12">${this.raiderIO.active_spec_name} ${this.characterClass}</div>
            </div>
            <ul class="character-links">
                <li><a href="https://www.worldofwarcraft.com/en-${this.region}/character/${this.formattedRealm}/${this.name}" target="_blank"><img class="character-links__img" width="24" height="24" src="https://s3.amazonaws.com/files.enjin.com/632721/material/images/icons/WoW.png"></a></li>
                <li><a href="${this.raiderIOProfile}" target="_blank"><img class="character-links__img" width="24" height="24" src="https://s3.amazonaws.com/files.enjin.com/632721/material/images/raiderio_square_xl.png"></a></li>
                <li><a href="https://www.warcraftlogs.com/character/${this.region}/${this.formattedRealm}/${this.name}" target="_blank"><img class="character-links__img" width="24" height="24" src="https://s3.amazonaws.com/files.enjin.com/632721/material/images/icons/warcraftlogs.png"></a></li>
            </ul>
            <div class="remove-button">
              ${this.removeButton}
            </div>
        </div>
        <div class="character-info-block character-progression col-12 col-md">
            <div class="character-header">
                Recent Progression
            </div>
            <div class="character-progression-raids" data-region="${this.region}" data-realm="${this.realm}" data-name="${this.name}">
                ${parseProgression(this.raiderIO.raid_progression)}
            </div>
        </div>
        <div class="character-group character-info-block col-12 col-md">
          <div class="flex-row">
            <div class="character-raiderio col-12">
              <div class="character-raiderio__score flex-row">
                <div class="character-header col-12">
                  RaiderIO Season Score
                </div>
                <div class="character-raiderio-score col">
                  <span class="character-raiderio-score__current">
                    <span class="character-raiderio-score__current-score">
                      ${Math.round(this.raiderIO.mythic_plus_scores.all)}
                    </span>
                  </span>
                  <span class="character-raiderio-score__title">Mythic+ Score<br>Current Season</span>
                </div>
                <div class="character-raiderio-score col">
                  <span class="character-raiderio-score__current">
                    <span class="character-raiderio-score__current-score">
                      ${Math.round(this.raiderIO.mythic_plus_scores.all)}
                    </span>
                  </span>
                  <span class="character-raiderio-score__title">Mythic+ Score<br>Last Season</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="character-info-block col-12 col-md">
          <div class="character-header">Missing Data Warning</div>
          <div class="character-error">${errorMap[this.error]}</div>
        </div>
      </div>
    </div>`;
  }

  /**
   * HTML returned if only Raider.IO call fails.
   */
  get raiderIOFailureElement() {
    return `
    <div class="character class-${this.formattedClass}" data-hash="${this.hash}" data-error="${this.error}">
      <div class="flex-row">
        <div class="character-info col-12 col-md-2">
          <div class="character-portrait">
              <img class="character-portrait__img" src="${thumbnail + this.blizzard.thumbnail}">
          </div>
          <div class="character-text">
              <div class="character-name col-12">${this.name}</div>
              <div class="col-12">${this.race} ${this.characterClass}</div>
          </div>
          <ul class="character-links">
              <li><a href="https://www.worldofwarcraft.com/en-${this.region}/character/${this.formattedRealm}/${this.name}" target="_blank"><img class="character-links__img" width="24" height="24" src="https://s3.amazonaws.com/files.enjin.com/632721/material/images/icons/WoW.png"></a></li>
              <li><a href="${this.raiderIOProfile}" target="_blank"><img class="character-links__img" width="24" height="24" src="https://s3.amazonaws.com/files.enjin.com/632721/material/images/raiderio_square_xl.png"></a></li>
              <li><a href="https://www.warcraftlogs.com/character/${this.region}/${this.formattedRealm}/${this.name}" target="_blank"><img class="character-links__img" width="24" height="24" src="https://s3.amazonaws.com/files.enjin.com/632721/material/images/icons/warcraftlogs.png"></a></li>
          </ul>
          <div class="remove-button">
            ${this.removeButton}
          </div>
        </div>
        <div class="character-group character-info-block col-12 col-md">
            <div class="flex-row">
            <div class="character-raiderio col-12">
              <div class="character-raiderio__score flex-row">
                  <div class="character-header col-12">
                      RaiderIO Season Score
                  </div>
                  <div class="character-raiderio-score col">
                      <span class="character-raiderio-score__current">
                          <span class="character-raiderio-score__current-score">
                              Unknown
                          </span>
                      </span>
                      <span class="character-raiderio-score__title">Mythic+ Score<br>Current Season</span>
                  </div>
                  <div class="character-raiderio-score col">
                      <span class="character-raiderio-score__current">
                          <span class="character-raiderio-score__current-score">
                              Unknown
                          </span>
                      </span>
                      <span class="character-raiderio-score__title">Mythic+ Score<br>Last Season</span>
                  </div>
                </div>
              </div>
                <div class="character-talent-info col-12">
                    <div class="character-header col-12">
                        Talents
                    </div>
                    <div class="character-talents">
                        ${parseTalents(this.blizzard.talents)}
                    </div>
                </div>
            </div>
        </div>
        <div class="character-info-block character-gear col-12 col-md">
          <div class="character-header">Character Gear <span class="character-gear-header__ilvl">
            ${this.blizzard.items.averageItemLevelEquipped} eq.</span>
          </div>
          <div class="character-gear-items">
            ${getItemTooltips(this.blizzard.items)}
          </div>
        </div>
        <div class="character-info-block col-12 col-md">
          <div class="character-header">Missing Data Warning</div>
          <div class="character-error">${errorMap[this.error]}</div>
        </div>
      </div>
    </div>
    `;
  }

  /**
   * HTML returned when the Blizzard and Raider.io calls succeed.
   */
  get apiSuccessElement() {
    return `
    <div class="character class-${this.formattedClass}" data-hash="${this.hash}">
      <div class="flex-row">
        <div class="character-info col-12 col-md-2">
            <div class="character-portrait">
                <img class="character-portrait__img" src="${thumbnail + this.blizzard.thumbnail}">
            </div>
            <div class="character-text">
                <div class="character-name col-12">${this.name}</div>
                <div class="col-12">${this.raiderIO.active_spec_name} ${this.characterClass}</div>
            </div>
            <ul class="character-links">
                <li><a href="https://www.worldofwarcraft.com/en-${this.region}/character/${this.formattedRealm}/${this.name}" target="_blank"><img class="character-links__img" width="24" height="24" src="https://s3.amazonaws.com/files.enjin.com/632721/material/images/icons/WoW.png"></a></li>
                <li><a href="${this.raiderIOProfile}" target="_blank"><img class="character-links__img" width="24" height="24" src="https://s3.amazonaws.com/files.enjin.com/632721/material/images/raiderio_square_xl.png"></a></li>
                <li><a href="https://www.warcraftlogs.com/character/${this.region}/${this.formattedRealm}/${this.name}" target="_blank"><img class="character-links__img" width="24" height="24" src="https://s3.amazonaws.com/files.enjin.com/632721/material/images/icons/warcraftlogs.png"></a></li>
            </ul>
            <div class="remove-button">
              ${this.removeButton}
            </div>
        </div>
        <div class="character-info-block character-progression col-12 col-md">
            <div class="character-header">
                Recent Progression
            </div>
            <div class="character-progression-raids" data-region="${this.region}" data-realm="${this.realm}" data-name="${this.name}">
                ${parseProgression(this.raiderIO.raid_progression)}
            </div>
        </div>
        <div class="character-group character-info-block col-12 col-md">
            <div class="flex-row">
                <div class="character-raiderio col-12">
                    <div class="character-raiderio__score flex-row">
                        <div class="character-header col-12">
                            RaiderIO Season Score
                        </div>
                        <div class="character-raiderio-score col">
                            <span class="character-raiderio-score__current">
                                <span class="character-raiderio-score__current-score">
                                    ${Math.round(this.raiderIO.mythic_plus_scores.all)}
                                </span>
                            </span>
                            <span class="character-raiderio-score__title">Mythic+ Score<br>Current Season</span>
                        </div>
                        <div class="character-raiderio-score col">
                            <span class="character-raiderio-score__current">
                                <span class="character-raiderio-score__current-score">
                                    ${Math.round(this.raiderIO.previous_mythic_plus_scores.all)}
                                </span>
                            </span>
                            <span class="character-raiderio-score__title">Mythic+ Score<br>Last Season</span>
                        </div>
                    </div>
                </div>
                <div class="character-talent-info col-12">
                    <div class="character-header col-12">
                        Talents
                    </div>
                    <div class="character-talents">
                        ${parseTalents(this.blizzard.talents)}
                    </div>
                </div>
            </div>
        </div>
        <div class="character-info-block character-gear col-12 col-md">
            <div class="character-header">Character Gear: <span class="character-gear-header__ilvl">
                ${this.blizzard.items.averageItemLevelEquipped} Equipped</span>
            </div>
            <div class="character-gear__amulet">${parseAmulet(this.blizzard.items.neck)}</div>
            <div class="character-gear-items">
              ${getItemTooltips(this.blizzard.items)}
            </div>
        </div>
      </div>
    </div>`;
  }

  /**
   * Returns a string DOM element remove button for the appform.
   */
  get removeButton() {
    return (this.isRemovable) ?
      `<div class="col-12">
        <button class="appform-remove mdc-button mdc-button--raised" data-hash="${this.hash}" onclick="appRemoveCallback(this)" type="button">
          Remove
        </button>
      </div>` : '';
  }

  /**
   * Waits for all data promises to resolve and returns associated data.
   * @return {Promise}
   */
  getData() {
    return Promise.all([
      fetch(this.blizzardApi).then((response) => response.json()),
      fetch(this.raiderIOApi).then((response) => response.json()),
    ].map((p) => p.catch((e) => e)))
      .then((data) => {
        console.log(data);
        this.blizzard = data[0];
        this.raiderIO = data[1];
      });
  }
}

/**
 * Gets the amulet information if possible.
 * @param {JSON} amulet
 * @return {HMTL} amulet
 */
function parseAmulet(amulet) {
  if (amulet && amulet.azeriteItem) {
    return `<p>Heart of Azeroth level ${amulet.azeriteItem.azeriteLevel} and ${Math.floor(amulet.azeriteItem.azeriteExperience / amulet.azeriteItem.azeriteExperienceRemaining * 100)}%.</p>`;
  }

  return '';
}

/**
 * Finds the selected specialization then creates talent links.
 * @param {Object} specializations
 * @return {string} talents
 */
export function parseTalents(specializations) {
  let elements = '';
  let specialization = specializations.find((id) => id.selected === true);

  specialization.talents.forEach((talent) => {
    if (talent) {
      elements += `<a style='order: ${talent.tier}' class='character-talents-link' href='https://www.wowhead.com/spell=${talent.spell.id}'><img class='character-talents-img' src='https://render-us.worldofwarcraft.com/icons/56/${talent.spell.icon}.jpg'></a>`;
    }
  });

  return elements;
}

/**
 * Creates a table of character progression from Raider.io data.
 * @param {Object} raids
 * @return {String} progression table
 */
function parseProgression(raids) {
  let elements = '';

  Object.keys(raids).forEach((raid) => {
    elements += `
        <div class='character-progression__raid flex-row'>
            <div class='col-12'>
                <span class='character-progression__raid-title'>${raid.replace(/-/g, ' ')}</span>
                <span class='character-progression__raid-summary'>${raids[raid].summary}</span>
            </div>
            <div role='progressbar' class='mdc-linear-progress col-12' data-scale="${eval(raids[raid].summary.slice(0, -2))}">
                <div class='mdc-linear-progress__buffering-dots'></div>
                <div class='mdc-linear-progress__buffer'></div>
                <div class='mdc-linear-progress__bar mdc-linear-progress__primary-bar'>
                    <span class='mdc-linear-progress__bar-inner'></span>
                </div>
            </div>
        </div>`;
  });

  return elements;
}

/**
 * Inject enough Wowhead relevant information for accurate tooltips.
 * @param {Object} items
 * @return {String} tooltip link
 */
function getItemTooltips(items) {
  let elements = '';

  for (const slot of slots) {
    if (items[slot]) {
      let args = 'ilvl=' + items[slot].itemLevel + '&amp;';

      if (items[slot].tooltipParams.set) {
        args += 'pcs=' + items[slot].tooltipParams.set.join(':') + '&amp;';
      }

      if (items[slot].tooltipParams.enchant) {
        args += 'ench=' + items[slot].tooltipParams.enchant + '&amp;';
      }

      if (items[slot].tooltipParams.gem0) {
        args += 'gems=' + items[slot].tooltipParams.gem0 + '&amp;';
      }

      elements +=
        `<a class='character-gear-items-item' href='https://www.wowhead.com/item=${items[slot].id}' data-wowhead='${args}' target='_blank'>
            <img class='character-gear-items-item__img quality-border-${items[slot].quality}' src='https://render-us.worldofwarcraft.com/icons/56/${items[slot].icon}.jpg'>
        </a>`;
    }
  }

  return elements;
}
