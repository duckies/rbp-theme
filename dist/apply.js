!function(e){function t(t){for(var a,n,o=t[0],c=t[1],d=t[2],h=0,u=[];h<o.length;h++)n=o[h],i[n]&&u.push(i[n][0]),i[n]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);for(l&&l(t);u.length;)u.shift()();return s.push.apply(s,d||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],a=!0,o=1;o<r.length;o++){var c=r[o];0!==i[c]&&(a=!1)}a&&(s.splice(t--,1),e=n(n.s=r[0]))}return e}var a={},i={2:0},s=[];function n(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=a,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="";var o=window.webpackJsonp=window.webpackJsonp||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var d=0;d<o.length;d++)t(o[d]);var l=c;s.push([52,0]),r()}({1:function(e,t,r){"use strict";async function a(e){const t=await fetch(e);if(t.ok)return await t.json();throw new Error(t.status)}async function i(e,t){const r=await fetch(e,{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});if(r.ok)return await r.json();throw new Error(r.status)}r.d(t,"a",function(){return a}),r.d(t,"b",function(){return i})},13:function(e,t,r){"use strict";r.d(t,"b",function(){return n}),r.d(t,"a",function(){return o});const a={animationstart:{noPrefix:"animationstart",webkitPrefix:"webkitAnimationStart",styleProperty:"animation"},animationend:{noPrefix:"animationend",webkitPrefix:"webkitAnimationEnd",styleProperty:"animation"},animationiteration:{noPrefix:"animationiteration",webkitPrefix:"webkitAnimationIteration",styleProperty:"animation"},transitionend:{noPrefix:"transitionend",webkitPrefix:"webkitTransitionEnd",styleProperty:"transition"}},i={animation:{noPrefix:"animation",webkitPrefix:"-webkit-animation"},transform:{noPrefix:"transform",webkitPrefix:"-webkit-transform"},transition:{noPrefix:"transition",webkitPrefix:"-webkit-transition"}};function s(e,t){if(!function(e){return void 0!==e.document&&"function"==typeof e.document.createElement}(e)||!function(e){return e in a||e in i}(t))return t;const r=t in a?a:i,s=e.document.createElement("div");let n="";return n=r===a?function(e,t,r){return t[e].styleProperty in r.style?t[e].noPrefix:t[e].webkitPrefix}(t,r,s):r[t].noPrefix in s.style?r[t].noPrefix:r[t].webkitPrefix}const n=["transform","WebkitTransform","MozTransform","OTransform","MSTransform"];function o(e,t){return s(e,t)}},17:function(e,t,r){"use strict";var a=r(7),i=r(13);const s={CLOSED_CLASS:"mdc-linear-progress--closed",INDETERMINATE_CLASS:"mdc-linear-progress--indeterminate",REVERSED_CLASS:"mdc-linear-progress--reversed"},n={PRIMARY_BAR_SELECTOR:".mdc-linear-progress__primary-bar",BUFFER_SELECTOR:".mdc-linear-progress__buffer"};class o extends a.b{static get cssClasses(){return s}static get strings(){return n}static get defaultAdapter(){return{addClass:()=>{},getPrimaryBar:()=>{},getBuffer:()=>{},hasClass:()=>!1,removeClass:()=>{},setStyle:()=>{}}}constructor(e){super(Object.assign(o.defaultAdapter,e))}init(){this.determinate_=!this.adapter_.hasClass(s.INDETERMINATE_CLASS),this.reverse_=this.adapter_.hasClass(s.REVERSED_CLASS),this.progress_=0}setDeterminate(e){this.determinate_=e,this.determinate_?(this.adapter_.removeClass(s.INDETERMINATE_CLASS),this.setScale_(this.adapter_.getPrimaryBar(),this.progress_)):(this.adapter_.addClass(s.INDETERMINATE_CLASS),this.setScale_(this.adapter_.getPrimaryBar(),1),this.setScale_(this.adapter_.getBuffer(),1))}setProgress(e){this.progress_=e,this.determinate_&&this.setScale_(this.adapter_.getPrimaryBar(),e)}setBuffer(e){this.determinate_&&this.setScale_(this.adapter_.getBuffer(),e)}setReverse(e){this.reverse_=e,this.reverse_?this.adapter_.addClass(s.REVERSED_CLASS):this.adapter_.removeClass(s.REVERSED_CLASS)}open(){this.adapter_.removeClass(s.CLOSED_CLASS)}close(){this.adapter_.addClass(s.CLOSED_CLASS)}setScale_(e,t){const r="scaleX("+t+")";i.b.forEach(t=>{this.adapter_.setStyle(e,t,r)})}}r.d(t,"a",function(){return c});class c extends a.a{static attachTo(e){return new c(e)}set determinate(e){this.foundation_.setDeterminate(e)}set progress(e){this.foundation_.setProgress(e)}set buffer(e){this.foundation_.setBuffer(e)}set reverse(e){this.foundation_.setReverse(e)}open(){this.foundation_.open()}close(){this.foundation_.close()}getDefaultFoundation(){return new o({addClass:e=>this.root_.classList.add(e),getPrimaryBar:()=>this.root_.querySelector(o.strings.PRIMARY_BAR_SELECTOR),getBuffer:()=>this.root_.querySelector(o.strings.BUFFER_SELECTOR),hasClass:e=>this.root_.classList.contains(e),removeClass:e=>this.root_.classList.remove(e),setStyle:(e,t,r)=>e.style[t]=r})}}},2:function(e){e.exports={blizzard:{key:"e82qmvhf6egvsqdmpemmps2dskp62teu",guild:"Really Bad Players",realm:"Blackrock",avatar_base:"https://render-us.worldofwarcraft.com/character/",avatar_generic:"https://s3.amazonaws.com/files.enjin.com/632721/material/images/avatar/generic_bloodelf.jpg",enjin_generic_avatar:"themes/core/images/game/generic/avatar/default.jpg"},raiderIO:{api:"https://raider.io/api/v1/guilds/profile?region=us&realm=blackrock&name=Really%20Bad%20Players&fields=raid_rankings,raid_progression"},character:{slots:["head","neck","shoulder","back","chest","shirt","wrist","hands","waist","legs","feet","finger1","finger2","trinket1","trinket2","mainHand","offHand"],races:{36:"Mag'har Orc"}},raid_difficulties:{M:"Mythic",H:"Heroic",N:"Normal"},raids:{"Battle for Azeroth":{"battle-of-dazaralor":"Battle of Dazar'Alor",uldir:"Uldir"},Legion:{"antorus-the-burning-throne":"Antorus, the Burning Throne","tomb-of-sargeras":"Tomb of Sargeras","the-nighthold":"The Nighthold","trial-of-valor":"Trial of Valor","the-emerald-nightmare":"The Emerald Nightmare"}},progress:["antorus-the-burning-throne","uldir","battle-of-dazaralor"]}},20:function(e,t,r){"use strict";r.d(t,"a",function(){return i});var a=r(17);function i(){document.querySelectorAll(".mdc-linear-progress").forEach(e=>{const t=e.getAttribute("data-scale");new a.a(e).progress=t})}},23:function(e,t,r){"use strict";r.d(t,"a",function(){return o}),r.d(t,"b",function(){return d});var a=r(25),i=r(24),s=r(20);let n=[];function o(){n.length=0}function c(e){e=e?e.replace(" ","-").toLowerCase():"unknown";const t=document.querySelector(".form-question-body"),r=document.createElement("div");r.classList="character character-loader class-"+e,t.appendChild(r)}async function d(){const e=document.querySelector(".form-wow-answer");if(!e)return;const t=e.querySelector(".form-question-body"),r=function(){if(!document.querySelector(".form-wow-answer"))return;const e=document.querySelector(".m_appform"),t=document.querySelector(".v2_system_dashboard");if(e){const t=e.querySelector('input[type="hidden"]');if(t&&t.value)return JSON.parse(t.value)}else if(t){const e=t.querySelector(".character_list");if(e&&e.dataset.cfg)return JSON.parse(JSON.parse(e.dataset.cfg).value)}return null}();if(!r||0===r.length)return;const a=[];for(const e in r)n.includes(e)||(c(r[e].type),n.push(e),a.push(new i.a(r[e])));Promise.all(a.map(e=>e.getData())).then(()=>{document.querySelectorAll(".character-loader").forEach(e=>e.remove()),t.insertAdjacentHTML("beforeend",a.map(e=>e.characterElement).join("")),setTimeout(s.a,500)})}window.appRemoveCallback=function(e){const t=e.dataset.hash,r=document.querySelector('.character[data-char="'+t+'"]'),i=document.querySelector('.character[data-hash="'+t+'"]'),s=new a.a(document.querySelector(".mdc-snackbar"));return r&&r.querySelector(".remove a").click(),i&&(i.remove(),n=n.filter(e=>e!==t)),s.show({message:"Character destroyed, that was mean.",actionText:"Neat",actionHandler:!1}),!1}},24:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return Character});var _config__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),_config__WEBPACK_IMPORTED_MODULE_0___namespace=__webpack_require__.t(2,1);class Character{constructor(e){this.hash=e.hash,this.name=e.name,this.region=e.region,this.realm=e.realm,this.class=e.type,this.race=e.race,this.level=e.level,this.avatar=e.avatar_url,this.isRemovable=!!document.querySelector(".m_appform"),this.blizzard=null,this.raiderIO=null,this.error=null}get characterClass(){return this.class?this.class:this.raiderIO&&this.raiderIO.class?this.raiderIO.class:"Unknown"}get characterAvatar(){return this.blizzard&&this.blizzard.thumbnail?_config__WEBPACK_IMPORTED_MODULE_0__.blizzard.avatar_base+this.blizzard.thumbnail:this.raiderIO&&this.raiderIO.thumbnail_url?this.raiderIO.thumbnail_url:this.avatar?this.avatar.replace(_config__WEBPACK_IMPORTED_MODULE_0__.blizzard.enjin_generic_avatar,_config__WEBPACK_IMPORTED_MODULE_0__.blizzard.avatar_generic):_config__WEBPACK_IMPORTED_MODULE_0__.blizzard.avatar_generic}get characterRace(){return this.race?this.race:this.raiderIO&&this.raiderIO.race?this.raiderIO.race:this.blizzard&&this.blizzard.race?"NYI_RACE_TABLE":"Unknown"}get cssCharacterClass(){return this.characterClass.replace(" ","-").toLowerCase()}get blizzardApi(){return`https://api.duckie.cc/character/${this.realm}/${this.name}?fields=items,talents`}get raiderIOApi(){return"https://raider.io/api/v1/characters/profile?region="+this.region+"&realm="+this.realm+"&name="+this.name+"&fields=gear,raid_progression,mythic_plus_scores,previous_mythic_plus_scores"}get formattedRealm(){return this.realm.replace(" ","-").replace("'","")}get characterWarcraftURL(){return`https://www.worldofwarcraft.com/en-${this.region}/character/${this.formattedRealm}/${this.name}`}get characterRaiderIOURL(){return this.raiderIO.profile_url?this.raiderIO.profile_url:`https://raider.io/characters/${this.region}/${this.formattedRealm}/${this.name}`}get characterWCLURL(){return`https://www.warcraftlogs.com/character/${this.region}/${this.formattedRealm}/${this.name}`}get characterElement(){return this.characterTemplate}get characterDisplay(){const e=document.createElement("div");e.className="character class-"+this.formattedClass,e.setAttribute("data-hash",this.hash),e.setAttribute("data-access",this.error);const t=document.createElement("div");t.className="flex-row",e.appendChild(t);const r=document.createElement("div");r.className="character-info col-12 col-md-2",t.appendChild(r);const a=document.createElement("div");a.className="character-portrait",r.appendChild(a);const i=document.createElement("img");i.className="character-portrait__img",i.src=this.avatar,a.appendChild(i);const s=document.createElement("div");s.className="character-text",r.appendChild(s);const n=document.createElement("div");n.className="character-name col-12",n.innerText=this.name,s.appendChild(n);const o=document.createElement("div");o.className="col-12",o.innerText=this.characterRace+" "+this.characterClass,s.appendChild(o);const c=document.createElement("ul");c.className="character-links",r.appendChild(c);const d=document.createElement("li"),l=document.createElement("a");l.href="https://www.worldofwarcraft.com/en-"+this.region+"/character/"+this.formattedRealm+"/"+this.name,l.target="_blank";const h=document.createElement("li"),u=document.createElement("li");return c.appendChild(d),c.appendChild(h),c.appendChild(u),e}get characterCurrentScores(){return this.raiderIO&&this.raiderIO.mythic_plus_scores?Math.round(this.raiderIO.mythic_plus_scores.all):0}get previousMythicPlusScores(){return this.raiderIO&&this.raiderIO.previous_mythic_plus_scores?Math.round(this.raiderIO.previous_mythic_plus_scores.all):0}get characterTemplate(){return`\n      <div class="character class-${this.cssCharacterClass}" data-hash="${this.hash}">\n        <div class="character-info-block character-info">\n          <div class="character-info__wrapper">\n            <div class="character-portrait">\n              <img class="character-portrait__img" src="${this.characterAvatar}">\n            </div>\n            <div class="character-text">\n              <div class="character-text__name">${this.name}</div>\n              <div class="character-text__info">${this.characterRace} ${this.characterClass}</div>\n            </div>\n            <ul class="character-links">\n              <li>\n                <a href="${this.characterWarcraftURL}" target="_blank"><img class="character-links__img" width="24" height="24" src="https://s3.amazonaws.com/files.enjin.com/632721/material/images/icons/WoW.png"></a>\n              </li>\n              <li>\n                <a href="${this.characterRaiderIOURL}" target="_blank"><img class="character-links__img" width="24" height="24" src="https://s3.amazonaws.com/files.enjin.com/632721/material/images/icons/raiderio.png"></a>\n              </li>\n              <li>\n                <a href="${this.characterWCLURL}" target="_blank"><img class="character-links__img" width="24" height="24" src="https://s3.amazonaws.com/files.enjin.com/632721/material/images/icons/warcraftlogs.png"></a>\n              </li>\n            </ul>\n            <div class="remove-button">\n              ${this.removeButton}\n            </div>\n          </div>\n        </div>\n        <div class="character-info-block character-progression">\n          ${this.characterRaidProgression}\n        </div>\n        <div class="character-info-block character-group">\n          <div class="character-dungeons">\n            <div class="character-header">RaiderIO Season Score</div>\n            <div class="character-dungeons--wrapper">\n              <div class="character-dungeons--score">\n                <div class="character-dungeons--score__wrapper">\n                  <span class="character-dungeons--score__current-score">${this.characterCurrentScores}</span>\n                </div>\n                <div class="character-dungeons--score__wrapper">\n                  <span class="character-dungeons--score__current-score">${this.previousMythicPlusScores}</span>\n                </div>\n                <div class="character-dungeons--score__title">Mythic+ Score<br>Current Season</div>\n                <div class="character-dungeons--score__title">Mythic+ Score<br>Last Season</div>\n              </div>\n            </div>\n          </div>\n          <div class="character-talents">\n            <div class="character-header">Talents</div>\n            ${this.characterTalents}\n          </div>\n        </div>\n        <div class="character-info-block character-gear">\n          <div class="character-header">${this.characterEquipped} Equipped Item Level</div>\n          <div class="character-gear__amulet">${this.characterAmulet}</div>\n          ${this.characterGear}\n        </div>\n      </div>\n    `}get characterRaidProgression(){if(!this.raiderIO||!this.raiderIO.raid_progression)return'<span class="character-error">Character progression data missing.</span>';let elements="";window.config=_config__WEBPACK_IMPORTED_MODULE_0__,window.raids=this.raiderIO.raid_progression;for(const expansion in _config__WEBPACK_IMPORTED_MODULE_0__.raids){elements+=`<div class="character-header">${expansion} Progression</div>\n      <div class="character-progression-raids">`;for(const raid in _config__WEBPACK_IMPORTED_MODULE_0__.raids[expansion])console.log(expansion,_config__WEBPACK_IMPORTED_MODULE_0__.raids[expansion][raid]),elements+=`<div class="character-progression__raid" data-raid="${raid}">\n          <div class="character-progression__title">\n            <span class='character-progression__raid-title'>${_config__WEBPACK_IMPORTED_MODULE_0__.raids[expansion][raid]}</span>\n            <span class='character-progression__raid-summary'>${this.raiderIO.raid_progression[raid].summary}</span>\n          </div>\n          <div role='progressbar' class='mdc-linear-progress' data-scale="${eval(this.raiderIO.raid_progression[raid].summary.slice(0,-2))}">\n            <div class='mdc-linear-progress__buffering-dots'></div>\n            <div class='mdc-linear-progress__buffer'></div>\n            <div class='mdc-linear-progress__bar mdc-linear-progress__primary-bar'>\n              <span class='mdc-linear-progress__bar-inner'></span>\n            </div>\n          </div>\n        </div>`;elements+="</div>"}return elements}get characterTalents(){if(!this.blizzard||!this.blizzard.talents)return'<span class="character-error">Talent information not available.</span>';let e='<div class="character-talents__talents">';return this.blizzard.talents.find(e=>!0===e.selected).talents.forEach(t=>{t&&(e+=`\n          <a style='order: ${t.tier}' class='character-talents-link' href='https://www.wowhead.com/spell=${t.spell.id}'>\n            <img class='character-talents-img' src='https://render-us.worldofwarcraft.com/icons/56/${t.spell.icon}.jpg'>\n          </a>`)}),e+"</div>"}get characterEquipped(){return this.blizzard&&this.blizzard.items?this.blizzard.items.averageItemLevel:this.raiderIO&&this.raiderIO.gear?this.raiderIO.gear.item_level_equipped:"Unknown"}get characterAmulet(){if(this.blizzard&&this.blizzard.items&&this.blizzard.items.neck&&this.blizzard.items.neck.azeriteItem){const e=this.blizzard.items.neck.azeriteItem;return`<p>Heart of Azeroth level ${e.azeriteLevel} and ${Math.floor(e.azeriteExperience/e.azeriteExperienceRemaining*100)}%</p>`}return""}get characterGear(){if(console.log(this),!this.blizzard)return'<div class="character-error">Blizzard is not responding to our website, talk about rude.</div>';if(this.blizzard.items){const e=this.blizzard.items;let t='<div class="character-gear-items">';for(const r of _config__WEBPACK_IMPORTED_MODULE_0__.character.slots)if(e[r]){let a="ilvl="+e[r].itemLevel+"&amp;";e[r].tooltipParams.set&&(a+="pcs="+e[r].tooltipParams.set.join(":")+"&amp;"),e[r].tooltipParams.enchant&&(a+="ench="+e[r].tooltipParams.enchant+"&amp;"),e[r].tooltipParams.gem0&&(a+="gems="+e[r].tooltipParams.gem0+"&amp;"),t+=`<a class='character-gear-items-item' href='https://www.wowhead.com/item=${e[r].id}' data-wowhead='${a}' target='_blank'>\n            <img class='character-gear-items-item__img quality-border-${e[r].quality}' src='https://render-us.worldofwarcraft.com/icons/56/${e[r].icon}.jpg'>\n        </a>`}return t+"</div>"}return this.blizzard.status?"Character not found."===this.blizzard.reason?'<div class="character-error">This character does not exist.<br>They have likely transferred to a new home.</div>':"Character unavailable"===this.blizzard.reason?'<div class="character-error">The armory is under seige by void lords.<br>Heroes have been dispatched.</div>':`<div class="character-error">${this.blizzard.reason}</div>`:'<div class="character-error">Unknown API error, please contact Duckies.</div>'}get removeButton(){return this.isRemovable?`<div class="col-12">\n        <button class="appform-remove mdc-button mdc-button--raised" data-hash="${this.hash}" onclick="appRemoveCallback(this)" type="button">\n          Remove\n        </button>\n      </div>`:""}async getData(){const e=await Promise.all([fetch(this.blizzardApi).then(e=>e.json()),fetch(this.raiderIOApi).then(e=>e.json())].map(e=>e.catch(e=>e)));this.blizzard=e[0],this.raiderIO=e[1]}}},25:function(e,t,r){"use strict";var a=r(7);const i={ROOT:"mdc-snackbar",TEXT:"mdc-snackbar__text",ACTION_WRAPPER:"mdc-snackbar__action-wrapper",ACTION_BUTTON:"mdc-snackbar__action-button",ACTIVE:"mdc-snackbar--active",MULTILINE:"mdc-snackbar--multiline",ACTION_ON_BOTTOM:"mdc-snackbar--action-on-bottom"},s={TEXT_SELECTOR:".mdc-snackbar__text",ACTION_WRAPPER_SELECTOR:".mdc-snackbar__action-wrapper",ACTION_BUTTON_SELECTOR:".mdc-snackbar__action-button",SHOW_EVENT:"MDCSnackbar:show",HIDE_EVENT:"MDCSnackbar:hide"},n={MESSAGE_TIMEOUT:2750};class o extends a.b{static get cssClasses(){return i}static get strings(){return s}static get defaultAdapter(){return{addClass:()=>{},removeClass:()=>{},setAriaHidden:()=>{},unsetAriaHidden:()=>{},setActionAriaHidden:()=>{},unsetActionAriaHidden:()=>{},setActionText:()=>{},setMessageText:()=>{},setFocus:()=>{},isFocused:()=>!1,visibilityIsHidden:()=>!1,registerCapturedBlurHandler:()=>{},deregisterCapturedBlurHandler:()=>{},registerVisibilityChangeHandler:()=>{},deregisterVisibilityChangeHandler:()=>{},registerCapturedInteractionHandler:()=>{},deregisterCapturedInteractionHandler:()=>{},registerActionClickHandler:()=>{},deregisterActionClickHandler:()=>{},registerTransitionEndHandler:()=>{},deregisterTransitionEndHandler:()=>{},notifyShow:()=>{},notifyHide:()=>{}}}get active(){return this.active_}constructor(e){super(Object.assign(o.defaultAdapter,e)),this.active_=!1,this.actionWasClicked_=!1,this.dismissOnAction_=!0,this.firstFocus_=!0,this.pointerDownRecognized_=!1,this.snackbarHasFocus_=!1,this.snackbarData_=null,this.queue_=[],this.actionClickHandler_=(()=>{this.actionWasClicked_=!0,this.invokeAction_()}),this.visibilitychangeHandler_=(()=>{clearTimeout(this.timeoutId_),this.snackbarHasFocus_=!0,this.adapter_.visibilityIsHidden()||setTimeout(this.cleanup_.bind(this),this.snackbarData_.timeout||n.MESSAGE_TIMEOUT)}),this.interactionHandler_=(e=>{("focus"!==e.type||this.adapter_.isFocused())&&("touchstart"!==e.type&&"mousedown"!==e.type||(this.pointerDownRecognized_=!0),this.handlePossibleTabKeyboardFocus_(e),"focus"===e.type&&(this.pointerDownRecognized_=!1))}),this.blurHandler_=(()=>{clearTimeout(this.timeoutId_),this.snackbarHasFocus_=!1,this.timeoutId_=setTimeout(this.cleanup_.bind(this),this.snackbarData_.timeout||n.MESSAGE_TIMEOUT)})}init(){this.adapter_.registerActionClickHandler(this.actionClickHandler_),this.adapter_.setAriaHidden(),this.adapter_.setActionAriaHidden()}destroy(){this.adapter_.deregisterActionClickHandler(this.actionClickHandler_),this.adapter_.deregisterCapturedBlurHandler(this.blurHandler_),this.adapter_.deregisterVisibilityChangeHandler(this.visibilitychangeHandler_),["touchstart","mousedown","focus"].forEach(e=>{this.adapter_.deregisterCapturedInteractionHandler(e,this.interactionHandler_)})}dismissesOnAction(){return this.dismissOnAction_}setDismissOnAction(e){this.dismissOnAction_=!!e}show(e){if(!e)throw new Error("Please provide a data object with at least a message to display.");if(!e.message)throw new Error("Please provide a message to be displayed.");if(e.actionHandler&&!e.actionText)throw new Error("Please provide action text with the handler.");if(this.active)return void this.queue_.push(e);clearTimeout(this.timeoutId_),this.snackbarData_=e,this.firstFocus_=!0,this.adapter_.registerVisibilityChangeHandler(this.visibilitychangeHandler_),this.adapter_.registerCapturedBlurHandler(this.blurHandler_),["touchstart","mousedown","focus"].forEach(e=>{this.adapter_.registerCapturedInteractionHandler(e,this.interactionHandler_)});const{ACTIVE:t,MULTILINE:r,ACTION_ON_BOTTOM:a}=i;this.adapter_.setMessageText(this.snackbarData_.message),this.snackbarData_.multiline&&(this.adapter_.addClass(r),this.snackbarData_.actionOnBottom&&this.adapter_.addClass(a)),this.snackbarData_.actionHandler?(this.adapter_.setActionText(this.snackbarData_.actionText),this.actionHandler_=this.snackbarData_.actionHandler,this.setActionHidden_(!1)):(this.setActionHidden_(!0),this.actionHandler_=null,this.adapter_.setActionText(null)),this.active_=!0,this.adapter_.addClass(t),this.adapter_.unsetAriaHidden(),this.adapter_.notifyShow(),this.timeoutId_=setTimeout(this.cleanup_.bind(this),this.snackbarData_.timeout||n.MESSAGE_TIMEOUT)}handlePossibleTabKeyboardFocus_(){this.firstFocus_&&!this.pointerDownRecognized_&&this.setFocusOnAction_(),this.firstFocus_=!1}setFocusOnAction_(){this.adapter_.setFocus(),this.snackbarHasFocus_=!0,this.firstFocus_=!1}invokeAction_(){try{if(!this.actionHandler_)return;this.actionHandler_()}finally{this.dismissOnAction_&&this.cleanup_()}}cleanup_(){if(!this.snackbarHasFocus_||this.actionWasClicked_){const{ACTIVE:e,MULTILINE:t,ACTION_ON_BOTTOM:r}=i;this.adapter_.removeClass(e);const a=()=>{clearTimeout(this.timeoutId_),this.adapter_.deregisterTransitionEndHandler(a),this.adapter_.removeClass(t),this.adapter_.removeClass(r),this.setActionHidden_(!0),this.adapter_.setAriaHidden(),this.active_=!1,this.snackbarHasFocus_=!1,this.adapter_.notifyHide(),this.showNext_()};this.adapter_.registerTransitionEndHandler(a)}}showNext_(){this.queue_.length&&this.show(this.queue_.shift())}setActionHidden_(e){e?this.adapter_.setActionAriaHidden():this.adapter_.unsetActionAriaHidden()}}var c=r(13);r.d(t,"a",function(){return d});class d extends a.a{static attachTo(e){return new d(e)}show(e){this.foundation_.show(e)}getDefaultFoundation(){const{TEXT_SELECTOR:e,ACTION_BUTTON_SELECTOR:t}=o.strings,r=()=>this.root_.querySelector(e),a=()=>this.root_.querySelector(t);return new o({addClass:e=>this.root_.classList.add(e),removeClass:e=>this.root_.classList.remove(e),setAriaHidden:()=>this.root_.setAttribute("aria-hidden","true"),unsetAriaHidden:()=>this.root_.removeAttribute("aria-hidden"),setActionAriaHidden:()=>a().setAttribute("aria-hidden","true"),unsetActionAriaHidden:()=>a().removeAttribute("aria-hidden"),setActionText:e=>{a().textContent=e},setMessageText:e=>{r().textContent=e},setFocus:()=>a().focus(),isFocused:()=>document.activeElement===a(),visibilityIsHidden:()=>document.hidden,registerCapturedBlurHandler:e=>a().addEventListener("blur",e,!0),deregisterCapturedBlurHandler:e=>a().removeEventListener("blur",e,!0),registerVisibilityChangeHandler:e=>document.addEventListener("visibilitychange",e),deregisterVisibilityChangeHandler:e=>document.removeEventListener("visibilitychange",e),registerCapturedInteractionHandler:(e,t)=>document.body.addEventListener(e,t,!0),deregisterCapturedInteractionHandler:(e,t)=>document.body.removeEventListener(e,t,!0),registerActionClickHandler:e=>a().addEventListener("click",e),deregisterActionClickHandler:e=>a().removeEventListener("click",e),registerTransitionEndHandler:e=>this.root_.addEventListener(Object(c.a)(window,"transitionend"),e),deregisterTransitionEndHandler:e=>this.root_.removeEventListener(Object(c.a)(window,"transitionend"),e),notifyShow:()=>this.emit(o.strings.SHOW_EVENT),notifyHide:()=>this.emit(o.strings.HIDE_EVENT)})}get dismissesOnAction(){return this.foundation_.dismissesOnAction()}set dismissesOnAction(e){this.foundation_.setDismissOnAction(e)}}},52:function(e,t,r){"use strict";r.r(t);var a=r(3),i=r(9),s=r(23);document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".m_appform_view"),t=document.querySelector(".m_appform");if(Object(i.a)(),t&&function(e){new MutationObserver(t=>{e.classList.contains("m_appform")&&t.forEach(e=>{e.addedNodes.forEach(e=>{e.classList&&"character"==e.classList.value&&Object(s.b)()})})}).observe(e,{childList:!0,subtree:!0})}(t),e){!function(e){const t=document.querySelector(".cannot-submit"),r=document.querySelector(".join-site");t&&(r?e.insertAdjacentHTML("beforeend",'<div class="register-warning">\n        <div class="register-warning--info">\n          <h2 class="application-info--header">Join our Website</h2>\n          <p>You are logged in, but your account has to join our site before you can submit an application. <a href="" onclick="Enjin_Core.joinWebsiteRegular(event);return false;" rel="nofollow">Join our website.</a></p>\n        </div>\n       </div>'):e.insertAdjacentHTML("beforeend",'<div class="register-warning">\n        <div class="register-warning--info">\n          <h2 class="application-info--header">Registration Required</h2>\n          <p>You\'re required to <a href="/login/do/register\'">register</a> or <a href="/login">login</a> to our website before you can view our application, for the sake of intergalactic plumbing, of course.<br><br>The email you use to register with will also be used to notify you of any updates to your application.</p>\n        </div>\n       </div>'),document.querySelectorAll(".register-warning__loader").forEach(e=>a.a.attachTo(e)))}(e),e.querySelector(".submitted")&&function(e){e.insertAdjacentHTML("afterend",'<div class="submission-info">\n      <h2 class="submission-info--header">Application Submitted</h2>\n      <p>Thank you for spending the time to fill out our application. You may view your application <a href="/dashboard/applications/mine">here</a>.</p>\n      <p><br>At the bottom of your application is a comment section where you may ask the status of your application, or reply to any comments or questions we may ask. Please be curtious and give us 24 hours before asking for an update.</p>\n    </div>')}(e)}})},9:function(e,t,r){"use strict";var a=r(3),i=r(14),s=r(12),n=r(16),o=r(8),c=r(10),d=r(1);const l=document.querySelector(".mdc-drawer"),h=document.querySelector(".mdc-top-app-bar"),u=document.querySelector(".mdc-tab-bar");function m(){!async function(){const e=document.getElementById("user-button");try{const t=await Object(d.b)("/api/v1/api.php",{jsonrpc:"2.0",id:Math.round(899999*Math.random()+1e5),method:"User.get"}),r=t.result.logged_in?"#registered-menu":"#guest-menu",n=document.querySelector(r),o=new i.a(n),c=document.getElementById("user-button");if(t.result.logged_in){Sentry&&Sentry.configureScope(e=>{e.setUser({username:t.result.username,raw:t.result})});const r=document.querySelector(".join-site");if(e.innerHTML=`<div class='user-menu__avatar user-menu__slide'>\n          <img class='user-menu__img' src='${t.result.avatar_medium}'>\n        </div>`,r){const e=n.querySelector(".mdc-list");e.insertAdjacentHTML("beforeend","<li class='mdc-list-item' role='menuitem' tabindex='0'>\n            <a class='join-us' href='#' onclick='Enjin_Core.joinWebsiteRegular(event);return false;' rel='nofollow'>Join Website</a>\n          </li>"),new link.MDCLink(e).singleSelection=!0}(t.result.admin_access.full||t.result.admin_access.limited)&&n.setAttribute("data-admin","True"),n.querySelectorAll(".mdc-list-item").forEach(e=>{a.a.attachTo(e)}),s.a.attachTo(document.querySelector(".mdc-menu-surface")),o.setAnchorMargin({top:50}),a.a.attachTo(document.querySelector(".user-menu__avatar"));const i=[`Hello ${t.result.username}, you sultry snail.`,`Hello ${t.result.username}, you beautiful, rule-breaking moth.`,`Hello ${t.result.username}, you powerful musk ox.`,`Make way for ${t.result.username}, the worthy sperm.`,`Is it ${t.result.username} or is it just hot in here?`,`Stay safe out there ${t.result.username}.`,`Hello, <${t.result.username} the Irreplaceable>`,`Suffer well, ${t.result.username}.`,`Oh, hello ${t.result.username}. Have you heard the story of the hozen and the buttercream pie?`],c=document.querySelector(".mdc-drawer__subtitle");if(c){const e=Math.floor(Math.random()*i.length);c.innerText=i[e]}}else e.innerHTML='Hello, Guest <i class="material-icons">keyboard_arrow_down</i>';c.addEventListener("click",()=>o.open=!o.open)}catch(e){console.error("User menu error: "+e)}}(),function(){const e=n.a.attachTo(l),t=o.a.attachTo(h),r=document.querySelector("#enjin-tray");c.a.attachTo(u),t.listen("MDCTopAppBar:nav",()=>{e.open=!e.open}),r&&o.a.attachTo(r)}(),function(){const e=document.querySelector(".window_header .window_page");e&&(e.innerHTML='<i class="material-icons">settings</i>',document.addEventListener("click",e=>{const t=document.querySelector(".button_click.active");!t||e.target.closest(".button_window")||e.target.closest(".button_click.active")||t.click()}))}()}function _(e,t){const r=document.createElement("div"),a=document.createElement("div"),i=document.createElement("div");return i.classList.add("discord-widget__members"),r.classList.add("discord-widget__channel"),r.setAttribute("data-id",t),a.classList.add("discord-widget__channel__name"),a.innerHTML=e,r.appendChild(a),r.appendChild(i),r}function p(e,t,r){const a=document.createElement("div"),i=document.createElement("div"),s=document.createElement("img"),n=document.createElement("span");if(a.classList.add("discord-widget-member"),i.classList.add("discord-widget-member__avatar"),s.src=t,n.innerHTML=e,n.classList.add("discord-widget-member__name"),i.appendChild(s),a.appendChild(i),a.appendChild(n),r){const e=document.createElement("span");e.classList.add("discord-widget-member__game"),e.innerHTML=r.name,a.appendChild(e)}return a}function f(){!async function(){const e=document.querySelector(".discord-parent");let t=0;if(e)try{const r=await Object(d.a)("https://discordapp.com/api/servers/142372929961721856/embed.json"),a=r.channels.sort((e,t)=>e.position-t.position),i=document.createElement("div");i.classList.add("discord-widget");for(const e of a)i.appendChild(_(e.name,e.id));i.appendChild(_("Online Users",0));for(const e of r.members){e.channel_id&&i.querySelector('div[data-id="'+e.channel_id+'"]').appendChild(p(e.username,e.avatar_url));const r=i.querySelector('div[data-id="0"] .discord-widget__members');"online"===e.status&&(t++,r.appendChild(p(e.username,e.avatar_url,e.game)))}const s=document.querySelector("#discord-box .discord__description");if(s){const e=`${t} Members Currently Online`;s.innerHTML=e}e.appendChild(i)}catch(e){console.error("Discord widget failure "+e)}}()}function g(){Sentry?Sentry.init({dsn:"https://26c15a32dfc6457cae94b98a9876c8e3@sentry.io/199271"}):console.warn("Sentry was not found."),document.querySelector('meta[name="viewport"]')&&(document.querySelectorAll('head link[rel="icon"]').forEach(e=>e.remove()),document.querySelector("head").insertAdjacentHTML("beforeend",'<meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <link rel="icon" href="https://s3.amazonaws.com/files.enjin.com/632721/material/images/favicon.png" sizes="32x32" type="image/png">')),m(),f()}r.d(t,"a",function(){return g})}});
//# sourceMappingURL=apply.js.map