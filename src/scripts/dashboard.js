import { MDCTabBar } from "@material/tabs";
import { MDCTextField } from "@material/textfield";
import { MDCLineRipple } from '@material/line-ripple';
import * as basicLightbox from 'basiclightbox';

const api_key = "e82qmvhf6egvsqdmpemmps2dskp62teu";
const wcl_key = "6dfe043fbb2217edc837899252dd063b";
const dashboard = $(".v2_system_dashboard");
const thumbnail_base = "https://render-us.worldofwarcraft.com/character/";
const slot_order = [
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
    'offHand'
];

class Character {
    constructor(data) {
        this.name = data.name;
        this.region = data.region;
        this.realm = data.realm;
        this.class = data.type;
        this.race = data.race;
        this.level = data.level;
        this.avatar = data.avatar_url;
    }

    get blizzardApi() {
        return "https://" + this.region + ".api.battle.net/wow/character/" + this.realm + "/" + this.name + "?fields=items,talents&locale=en_US&apikey=" + api_key;
    }

    get raiderIOApi() {
        return "https://raider.io/api/v1/characters/profile?region=" + this.region + "&realm=" + this.realm + "&name=" + this.name + "&fields=gear,raid_progression,mythic_plus_scores,previous_mythic_plus_scores";
    }

    get formattedClass() {
        return this.class.replace(" ", "-").toLowerCase();
    }

    get characterElement() {
        if (!this.blizzard || this.blizzard.message || this.blizzard.status) {
            let error = this.blizzard.status ? this.blizzard.status.reason : "Unable to connect to Blizzard API, it may be under maintenance.";
            // Blizzard failed us.
            return `<div class="character class-${this.formattedClass}">
                        <div class="flex-row">
                            <div class="character-images col-2">
                                <div class="character-portrait">
                                    <img class="character-portrait__img" src="${this.avatar}">
                                </div>
                            </div>
                            <div class="character-info col-10">
                                <div class="character-name col-12">${this.name}</div>
                                <div class="col-12">${this.race} ${this.class}</div>
                            </div>
                            <span class="character__api-error">${error}</span>
                        </div>
                    </div>`;
        } else {
            if (this.raiderIO) {
                return `<div class="character class-${this.formattedClass}">
                            <div class="flex-row">
                                <div class="character-info col-1">
                                    <div class="character-portrait">
                                        <img class="character-portrait__img" src="${thumbnail_base + this.blizzard.thumbnail}">
                                    </div>
                                    <div class="character-text">
                                        <div class="character-name col-12">${this.name}</div>
                                        <div class="col-12">${this.raiderIO.active_spec_name} ${this.class}</div>
                                    </div>
                                    <ul class="character-links">
                                        <li><a href="https://www.worldofwarcraft.com/en-${this.region}/character/${this.realm}/${this.name}" target="_blank"><img class="character-links__img" width="24" height="24" src="https://i.imgur.com/to79vH8.png"></a></li>
                                        <li><a href="${this.raiderIO.profile_url}" target="_blank"><img class="character-links__img" width="24" height="24" src="https://www.warcraftlogs.com/img/warcraft/raiderio_square_xl.png"></a></li>
                                        <li><a href="https://www.warcraftlogs.com/character/${this.region}/${this.realm}/${this.name}" target="_blank"><img class="character-links__img" width="24" height="24" src="https://i.imgur.com/OnvI24y.png"></a></li>
                                    </ul>
                                </div>
                                <div class="character-info-block character-progression col">
                                    <div class="character-header">
                                        Recent Progression
                                    </div>
                                    <div class="character-progression-raids" data-region="${this.region}" data-realm="${this.realm}" data-name="${this.name}">
                                        ${parseProgression(this.raiderIO.raid_progression)}
                                    </div>
                                </div>
                                <div class="character-group character-info-block col">
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
                                <div class="character-info-block character-gear col">
                                    <div class="character-header">Character Gear <span class="character-gear-header__ilvl">
                                        ${this.blizzard.items.averageItemLevelEquipped} eq.</span>
                                    </div>
                                    <div class="character-gear-items">
                                        ${getItemTooltips(this.blizzard.items)}                                    
                                    </div>
                                </div>
                            </div>
                        </div>`;
            } else {
                return "Fish";
            }
        }
    }

    getData() {
        return Promise.all([
            fetch(this.blizzardApi).then((response) => response.json()),
            fetch(this.raiderIOApi).then((response) => response.json())
        ].map(p => p.catch(e => e)))
            .then(data => {
                this.blizzard = data[0];
                this.raiderIO = data[1];
                console.log(this);
            });
    }
}

async function getWoWCharacters() {
    const character_list = $('.character_list')

    if (!$(character_list).length) {
        console.log("Characters not found, aborting.");
        return;
    };

    const charData = JSON.parse($('.character_list').data('cfg').value);

    const characterPanels = $(`<div class="character-panels"></div>`);    

    let characters = []
    for (const char in charData) {
        let character = new Character(charData[char]);
        characters.push(character);
    }

    Promise.all(characters.map(character => {
        return character.getData();
    })).then(() => {
        characterPanels.append(characters.map(character => { return character.characterElement }));
        $('.form-wow-answer').append(characterPanels);
    });
}

function parseTalents(specializations) {
    let elements = "";

    let specialization = specializations.find(id => id.selected === true);
    specialization.talents.forEach(talent => {
        elements += `<a style="order: ${talent.tier}" class="character-talents-link" href="https://www.wowhead.com/spell=${talent.spell.id}"><img class="character-talents-img" src="https://render-us.worldofwarcraft.com/icons/56/${talent.spell.icon}.jpg"></a>`
    });

    return elements;
}

function parseRaiderIORuns(runs) {
    let elements = "";

    Object.keys(runs).forEach(run => {
        elements += `
        <div class="character-raiderio-runs__run">
            ${runs[run].short_name} ${runs[run].mythic_level}
        </div>
        `;
    });

    return elements;
}

function parseProgression(raids) {
    let elements = "";

    Object.keys(raids).forEach(raid => {
        elements += `
        <div class="character-progression__raid flex-row">
            <div class="col-12">
                <span class="character-progression__raid-title">${raid.replace(/-/g, " ")}</span>
                <span class="character-progression__raid-summary">${raids[raid].summary}</span> 
            </div>
            <div role="progressbar" class="mdc-linear-progress col-12">
                <div class="mdc-linear-progress__buffering-dots"></div>
                <div class="mdc-linear-progress__buffer"></div>
                <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar" style="transform: scaleX(${eval(raids[raid].summary.slice(0, -2))})">
                    <span class="mdc-linear-progress__bar-inner"></span>
                </div>
            </div>
        </div>`;
    });

    return elements;
}

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

function getItemTooltips(items) {
    let elements = "";

    for (const slot of slot_order) {
        if (items[slot]) {
            let wowhead_args = "ilvl=" + items[slot].itemLevel + "&amp;";

            if (items[slot].tooltipParams.set) {
                wowhead_args += "pcs=" + items[slot].tooltipParams.set.join(':') + "&amp;";
            }

            if (items[slot].tooltipParams.enchant) {
                wowhead_args += "ench=" + items[slot].tooltipParams.enchant + "&amp;";
            }

            if (items[slot].tooltipParams.gem0) {
                wowhead_args += "gems=" + items[slot].tooltipParams.gem0 + "&amp;";
            }

            elements +=
                `<a class="character-gear-items-item" href="https://www.wowhead.com/item=${items[slot].id}" data-wowhead="${wowhead_args}" target="_blank">
                    <!--<span class="character-gear-items-item__level quality-color-${items[slot].quality}">${items[slot].itemLevel}</span>-->
                    <img class="character-gear-items-item__img quality-border-${items[slot].quality}" src="https://render-us.worldofwarcraft.com/icons/56/${items[slot].icon}.jpg">
                </a>`
        }
    }

    return elements;
}

function getCharacterInset(portrait) {
    return portrait.split("?")[0].replace("avatar", "inset");
}

function imageReplacement() {
    $('img[src^="https://assets-cloud.enjin.com/users/"], img[src^="https://resources.enjin.com/profile/images/"]').each(function () {
        $(this).attr('src', $(this).attr('src').replace('small', 'medium'));
    });

    $('img[src*="/module_appform/thumb"]').each(function () {
        $(this).attr('src', $(this).attr('src').replace('thumb', 'full'));
    });
}

function createLightboxes() {
    document.querySelectorAll('.images a').forEach(function (elem) {
        elem.onclick = function (e) {
            e.preventDefault();
            const instance = basicLightbox.create(`<img src="${elem.getAttribute('href')}">`).show();
        }
    });
}

function reconstructSearchBoxes() {
    // $('.message_sidebar_search .input-text').each(function () {
    //     $(this).addClass('mdc-text-field');
    //     $(this).find('input').addClass('mdc-text-field__input');
    //     $(this).append('<div class="mdc-line-ripple"></div>');
    // });

    // const textField = new MDCTextField(document.querySelector('.mdc-text-field'));
    // console.log(textField);
}

export function initDashboard() {
    if (!dashboard.length) { return };

    // Handle non-Ajax called page load.
    if ($(".form-wow-answer").length) {
        getWoWCharacters();
        imageReplacement();
        createLightboxes();
    }

    if ($('.message_sidebar_search').length) {
        reconstructSearchBoxes();
    }

    const observerss = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if (mutation.addedNodes.length) {
                getWoWCharacters();
                imageReplacement();
                createLightboxes();
            }
        });
    });

    const ajaxElems = document.querySelector('.middle');
    observerss.observe(ajaxElems, {
        childList: true
    });
}
