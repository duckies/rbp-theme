import config from '../config';

const defaultAvatar = 'themes/core/images/game/generic/avatar/default.jpg';

/**
 * @class
 * @classdesc World of Warcraft character.
 * */
export default class Character {
  /**
   * World of Warcraft character.
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
    this.avatar = data.avatar_url.replace(defaultAvatar, config.blizzard.avatar_generic);
    this.isRemovable = (document.querySelector('.m_appform')) ? true : false;
    this.blizzard = null;
    this.raiderIO = null;
    this.error = null;
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
   * Short circuitable avatar.
   */
  get characterAvatar() {
    if (this.blizzard && this.blizzard.thumbnail) {
      return config.blizzard.avatar_base + this.blizzard.thumbnail;
    } else if (this.raiderIO && this.raiderIO.thumbnail_url) {
      return this.raiderIO.thumbnail_url;
    } else if (this.avatar) {
      return this.avatar.replace(defaultAvatar, genericAvatar);
    } else {
      return config.blizzard.avatar_generic;
    }
  }

  /**
   * Removes spacing and capitalization of a class for stylesheets.
   */
  get cssCharacterClass() {
    return this.characterClass.replace(' ', '-').toLowerCase();
  }

  /**
   * Gets Blizzard character API url.
   */
  get blizzardApi() {
    return 'https://' + this.region + '.api.battle.net/wow/character/' + this.realm + '/' +
      this.name + '?fields=items,talents&locale=en_US&apikey=' + config.blizzard.key;
  }

  /**
   * Gets Raider.io character API url.
   */
  get raiderIOApi() {
    return 'https://raider.io/api/v1/characters/profile?region=' + this.region + '&realm=' + this.realm + '&name=' + this.name + '&fields=gear,raid_progression,mythic_plus_scores,previous_mythic_plus_scores';
  }

  /**
   * Strips characters which may cause lookup issues with funky realms.
   */
  get formattedRealm() {
    return this.realm.replace(' ', '-').replace('\'', '');
  }

  /**
   * Gets character armory url.
   */
  get characterWarcraftURL() {
    return `https://www.worldofwarcraft.com/en-${this.region}/character/${this.formattedRealm}/${this.name}`;
  }

  /**
   * Detects if the raiderIO profile url is available or creates it.
   */
  get characterRaiderIOURL() {
    return (this.raiderIO.profile_url) ? this.raiderIO.profile_url :
      `https://raider.io/characters/${this.region}/${this.formattedRealm}/${this.name}`;
  }

  /**
   * Gets WarcraftLogs character url.
   */
  get characterWCLURL() {
    return `https://www.warcraftlogs.com/character/${this.region}/${this.formattedRealm}/${this.name}`;
  }

  /**
   * Creates the character element DOM from object data.
   */
  get characterElement() {
    return this.characterTemplate;
  }

  /**
   * Constructs HTML for the World of Warcraft character.
   * This is pretty terse but structurally pleasing and efficient,
   * unlike my upbringing and current life situations.
   * @return {Node} panel
   */
  get characterDisplay() {
    const pane = document.createElement('div');
    pane.className = 'character class-' + this.formattedClass;
    pane.setAttribute('data-hash', this.hash);
    pane.setAttribute('data-access', this.error);

    const flex = document.createElement('div');
    flex.className = 'flex-row';
    pane.appendChild(flex);

    const info = document.createElement('div');
    info.className = 'character-info col-12 col-md-2';
    flex.appendChild(info);

    const portrait = document.createElement('div');
    portrait.className = 'character-portrait';
    info.appendChild(portrait);

    const img = document.createElement('img');
    img.className = 'character-portrait__img';
    img.src = this.avatar;
    portrait.appendChild(img);

    const text = document.createElement('div');
    text.className = 'character-text';
    info.appendChild(text);

    const name = document.createElement('div');
    name.className = 'character-name col-12';
    name.innerText = this.name;
    text.appendChild(name);

    const desc = document.createElement('div');
    desc.className = 'col-12';
    desc.innerText = this.race + ' ' + this.characterClass;
    text.appendChild(desc);

    const links = document.createElement('ul');
    links.className = 'character-links';
    info.appendChild(links);

    const liFirst = document.createElement('li');
    const firstHref = document.createElement('a');
    firstHref.href = 'https://www.worldofwarcraft.com/en-' + this.region + '/character/' + this.formattedRealm + '/' + this.name;
    firstHref.target = '_blank';
    const liSecond = document.createElement('li');
    const liThird = document.createElement('li');
    links.appendChild(liFirst);
    links.appendChild(liSecond);
    links.appendChild(liThird);

    return pane;
  }

  /**
   * Short-circuiting current scores.
   */
  get characterCurrentScores() {
    if (this.raiderIO && this.raiderIO.mythic_plus_scores) {
      return Math.round(this.raiderIO.mythic_plus_scores.all);
    }

    return 0;
  }

  /**
   * Short-circuiting mythic+ data.
   */
  get previousMythicPlusScores() {
    if (this.raiderIO && this.raiderIO.previous_mythic_plus_scores) {
      return Math.round(this.raiderIO.previous_mythic_plus_scores.all);
    }

    return 0;
  }

  /**
   * Constructs the character display using available data.
   */
  get characterTemplate() {
    return `
      <div class="character class-${this.cssCharacterClass}" data-hash="${this.hash}">
        <div class="character-info-block character-info">
          <div class="character-info__wrapper">
            <div class="character-portrait">
              <img class="character-portrait__img" src="${this.characterAvatar}">
            </div>
            <div class="character-text">
              <div class="character-text__name">${this.name}</div>
              <div class="character-text__info">${this.race} ${this.characterClass}</div>
            </div>
            <ul class="character-links">
              <li>
                <a href="${this.characterWarcraftURL}" target="_blank"><img class="character-links__img" width="24" height="24" src="https://s3.amazonaws.com/files.enjin.com/632721/material/images/icons/WoW.png"></a>
              </li>
              <li>
                <a href="${this.characterRaiderIOURL}" target="_blank"><img class="character-links__img" width="24" height="24" src="https://s3.amazonaws.com/files.enjin.com/632721/material/images/icons/raiderio.png"></a>
              </li>
              <li>
                <a href="${this.characterWCLURL}" target="_blank"><img class="character-links__img" width="24" height="24" src="https://s3.amazonaws.com/files.enjin.com/632721/material/images/icons/warcraftlogs.png"></a>
              </li>
            </ul>
            <div class="remove-button">
              ${this.removeButton}
            </div>
          </div>
        </div>
        <div class="character-info-block character-progression">
          <div class="character-header">Recent Progression</div>
          <div class="character-progression-raids" data-region="${this.region}" data-realm="${this.realm}" data-name="${this.name}">
            ${this.characterRaidProgression}
          </div>
        </div>
        <div class="character-info-block character-group">
          <div class="character-dungeons">
            <div class="character-header">RaiderIO Season Score</div>
            <div class="character-dungeons--wrapper">
              <div class="character-dungeons--score">
                <div class="character-dungeons--score__wrapper">
                  <span class="character-dungeons--score__current-score">${this.characterCurrentScores}</span>
                </div>
                <div class="character-dungeons--score__wrapper">
                  <span class="character-dungeons--score__current-score">${this.previousMythicPlusScores}</span>
                </div>
                <div class="character-dungeons--score__title">Mythic+ Score<br>Current Season</div>
                <div class="character-dungeons--score__title">Mythic+ Score<br>Last Season</div>
              </div>
            </div>
          </div>
          <div class="character-talents">
            <div class="character-header">Talents</div>
            ${this.characterTalents}
          </div>
        </div>
        <div class="character-info-block character-gear">
          <div class="character-header">${this.characterEquipped} Equipped Item Level</div>
          <div class="character-gear__amulet">${this.characterAmulet}</div>
          ${this.characterGear}
        </div>
      </div>
    `;
  }

  /**
   * Parses character progression.
   */
  get characterRaidProgression() {
    if (!this.raiderIO || !this.raiderIO.raid_progression) {
      return `<span class="character-error">Character progression not found.</span>`;
    }

    let elements = '';

    Object.keys(this.raiderIO.raid_progression).forEach((raid) => {
      elements += `
      <div class="character-progression__raid" data-raid="${raid}">
        <div class="character-progression__title">
          <span class='character-progression__raid-title'>${raid.replace(/-/g, ' ')}</span>
          <span class='character-progression__raid-summary'>${this.raiderIO.raid_progression[raid].summary}</span>
        </div>
        <div role='progressbar' class='mdc-linear-progress' data-scale="${eval(this.raiderIO.raid_progression[raid].summary.slice(0, -2))}">
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
   * Parses character talents.
   */
  get characterTalents() {
    if (!this.blizzard || !this.blizzard.talents) {
      return '<span class="character-error">Talent information not available.</span>';
    }

    let elements = '<div class="character-talents__talents">';
    const specialization = this.blizzard.talents
        .find((id) => id.selected === true);
    specialization.talents.forEach((talent) => {
      if (talent) {
        elements += `
          <a style='order: ${talent.tier}' class='character-talents-link' href='https://www.wowhead.com/spell=${talent.spell.id}'>
            <img class='character-talents-img' src='https://render-us.worldofwarcraft.com/icons/56/${talent.spell.icon}.jpg'>
          </a>`;
      }
    });

    return elements + '</div>';
  }

  /**
   * Parses character amulet.
   */
  get characterEquipped() {
    if (this.blizzard && this.blizzard.items) {
      return this.blizzard.items.averageItemLevel;
    } else if (this.raiderIO && this.raiderIO.gear) {
      return this.raiderIO.gear.item_level_equipped;
    } else {
      return 'Unknown';
    }
  }

  /**
   * Parses character amulet.
   */
  get characterAmulet() {
    if (this.blizzard && this.blizzard.items
      && this.blizzard.items.neck && this.blizzard.items.neck.azeriteItem) {
      const amulet = this.blizzard.items.neck.azeriteItem;

      return `<p>Heart of Azeroth level ${amulet.azeriteLevel} and ${Math.floor(amulet.azeriteExperience / amulet.azeriteExperienceRemaining * 100)}%</p>`;
    }

    return '';
  }

  /**
   * Parses character gear.
   */
  get characterGear() {
    console.log(this);

    if (!this.blizzard) {
      return '<div class="character-error>Blizzard is not responding to our website, talk about rude.</div>';
    }

    if (this.blizzard.items) {
      const items = this.blizzard.items;
      let elements = '<div class="character-gear-items">';

      for (const slot of config.character.slots) {
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

      return elements + '</div>';
    }

    if (this.blizzard.status) {
      if (this.blizzard.reason === 'Character not found.') {
        return '<div class="character-error">This character does not exist.<br>They have likely transferred to a new home.</div>';
      } else if (this.blizzard.reason === 'Character unavailable') {
        return '<div class="character-error">The armory is under seige by void lords.<br>Heroes have been dispatched.</div>';
      } else {
        return `<div class="character-error">${this.blizzard.reason}</div>`;
      }
    } else {
      return '<div class="character-error">Uknown API error, please contact Duckies.</div>';
    }
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
   * Asyncronmously waits for all data promises to resolve and links data.
   * @return {Promise}
   */
  async getData() {
    const data = await Promise.all([
      fetch(this.blizzardApi).then((response) => response.json()),
      fetch(this.raiderIOApi).then((response) => response.json()),
    ].map((p) => p.catch((e) => e)));

    this.blizzard = data[0];
    this.raiderIO = data[1];
  }
}
