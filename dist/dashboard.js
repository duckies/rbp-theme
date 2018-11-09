!function(e){function t(t){for(var r,i,c=t[0],o=t[1],l=t[2],u=0,h=[];u<c.length;u++)i=c[u],s[i]&&h.push(s[i][0]),s[i]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);for(d&&d(t);h.length;)h.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],r=!0,c=1;c<a.length;c++){var o=a[c];0!==s[o]&&(r=!1)}r&&(n.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},s={5:0},n=[];function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window.webpackJsonp=window.webpackJsonp||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=o;n.push([51,0,6]),a()}({18:function(e,t,a){"use strict";a.d(t,"a",function(){return s});var r=a(13);function s(){document.querySelectorAll(".mdc-linear-progress").forEach(e=>{const t=e.getAttribute("data-scale");new r.a(e).progress=t})}},20:function(e,t,a){"use strict";a.d(t,"a",function(){return c}),a.d(t,"b",function(){return l});var r=a(23),s=a(22),n=a(18);let i=[];function c(){i.length=0}function o(e){e=e?e.replace(" ","-").toLowerCase():"unknown";const t=document.querySelector(".form-question-body"),a=document.createElement("div");a.classList="character character-loader class-"+e,t.appendChild(a)}async function l(){const e=document.querySelector(".form-wow-answer");if(!e)return;const t=e.querySelector(".form-question-body"),a=function(){if(!document.querySelector(".form-wow-answer"))return;const e=document.querySelector(".m_appform"),t=document.querySelector(".v2_system_dashboard");if(e){const t=e.querySelector('input[type="hidden"]');if(t&&t.value)return JSON.parse(t.value)}else if(t){const e=t.querySelector(".character_list");if(e&&e.dataset.cfg)return JSON.parse(JSON.parse(e.dataset.cfg).value)}return null}();if(!a||0===a.length)return;const r=[];for(const e in a)i.includes(e)||(o(a[e].type),i.push(e),r.push(new s.a(a[e])));Promise.all(r.map(e=>e.getData())).then(()=>{document.querySelectorAll(".character-loader").forEach(e=>{e.classList.add("leaving"),window.setTimeout(()=>e.remove(),350)}),t.insertAdjacentHTML("beforeend",r.map(e=>e.characterElement).join("")),setTimeout(n.a,500)})}window.appRemoveCallback=function(e){const t=e.dataset.hash,a=document.querySelector('.character[data-char="'+t+'"]'),s=document.querySelector('.character[data-hash="'+t+'"]'),n=new r.a(document.querySelector(".mdc-snackbar"));return a&&a.querySelector(".remove a").click(),s&&(s.remove(),i=i.filter(e=>e!==t)),n.show({message:"Character destroyed, that was mean.",actionText:"Neat",actionHandler:!1}),!1}},22:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return Character});const apiKey="e82qmvhf6egvsqdmpemmps2dskp62teu",thumbnail="https://render-us.worldofwarcraft.com/character/",defaultAvatar="themes/core/images/game/generic/avatar/default.jpg",genericAvatar="https://s3.amazonaws.com/files.enjin.com/1604436/images/unknown.jpg",slots=["head","neck","shoulder","back","chest","shirt","wrist","hands","waist","legs","feet","finger1","finger2","trinket1","trinket2","mainHand","offHand"],errorMap={BlizzardOutage:"Blizzard reports this character is temporarily unavailable on the API.",NoBoth:"Character was not found on the armory or RaiderIO. It's likely they transferred.",NoBlizzardYesRaiderIO:"Character may have transferred. Character is not found on the armory, but is on RaiderIO.",NoRaiderIO:"Character was not found on RaiderIO.",None:""};class Character{constructor(e){this.hash=e.hash,this.name=e.name,this.region=e.region,this.realm=e.realm,this.class=e.type,this.race=e.race,this.level=e.level,this.avatar=e.avatar_url.replace(defaultAvatar,genericAvatar),this.isRemovable=!!document.querySelector(".m_appform"),this.raiderIO=null,this.error=null}get characterClass(){return this.class?this.class:this.raiderIO&&this.raiderIO.class?this.raiderIO.class:"Unknown"}get characterAvatar(){return this.blizzard&&this.blizzard.thumbnail?thumbnail+this.blizzard.thumbnail:this.raiderIO&&this.raiderIO.thumbnail_url?this.raiderIO.thumbnail_url:this.avatar?this.avatar.replace(defaultAvatar,genericAvatar):genericAvatar}get cssCharacterClass(){return this.characterClass.replace(" ","-").toLowerCase()}get blizzardApi(){return"https://"+this.region+".api.battle.net/wow/character/"+this.realm+"/"+this.name+"?fields=items,talents&locale=en_US&apikey="+apiKey}get raiderIOApi(){return"https://raider.io/api/v1/characters/profile?region="+this.region+"&realm="+this.realm+"&name="+this.name+"&fields=gear,raid_progression,mythic_plus_scores,previous_mythic_plus_scores"}get formattedRealm(){return this.realm.replace(" ","-").replace("'","")}get characterWarcraftURL(){return`https://www.worldofwarcraft.com/en-${this.region}/character/${this.formattedRealm}/${this.name}`}get characterRaiderIOURL(){return this.raiderIO.profile_url?this.raiderIO.profile_url:`https://raider.io/characters/${this.region}/${this.formattedRealm}/${this.name}`}get characterWCLURL(){return`https://www.warcraftlogs.com/character/${this.region}/${this.formattedRealm}/${this.name}`}get characterElement(){return this.characterTemplate}get characterDisplay(){const e=document.createElement("div");e.className="character class-"+this.formattedClass,e.setAttribute("data-hash",this.hash),e.setAttribute("data-access",this.error);const t=document.createElement("div");t.className="flex-row",e.appendChild(t);const a=document.createElement("div");a.className="character-info col-12 col-md-2",t.appendChild(a);const r=document.createElement("div");r.className="character-portrait",a.appendChild(r);const s=document.createElement("img");s.className="character-portrait__img",s.src=this.avatar,r.appendChild(s);const n=document.createElement("div");n.className="character-text",a.appendChild(n);const i=document.createElement("div");i.className="character-name col-12",i.innerText=this.name,n.appendChild(i);const c=document.createElement("div");c.className="col-12",c.innerText=this.race+" "+this.characterClass,n.appendChild(c);const o=document.createElement("ul");o.className="character-links",a.appendChild(o);const l=document.createElement("li"),d=document.createElement("a");d.href="https://www.worldofwarcraft.com/en-"+this.region+"/character/"+this.formattedRealm+"/"+this.name,d.target="_blank";const u=document.createElement("li"),h=document.createElement("li");return o.appendChild(l),o.appendChild(u),o.appendChild(h),e}get characterCurrentScores(){return this.raiderIO&&this.raiderIO.mythic_plus_scores?Math.round(this.raiderIO.mythic_plus_scores.all):0}get previousMythicPlusScores(){return this.raiderIO&&this.raiderIO.previous_mythic_plus_scores?Math.round(this.raiderIO.previous_mythic_plus_scores.all):0}get characterTemplate(){return`\n      <div class="character class-${this.cssCharacterClass}" data-hash="${this.hash}">\n        <div class="character-info-block character-info">\n          <div class="character-info__wrapper">\n            <div class="character-portrait">\n              <img class="character-portrait__img" src="${this.characterAvatar}">\n            </div>\n            <div class="character-text">\n              <div class="character-text__name">${this.name}</div>\n              <div class="character-text__info">${this.race} ${this.characterClass}</div>\n            </div>\n            <ul class="character-links">\n              <li>\n                <a href="${this.characterWarcraftURL}" target="_blank"><img class="character-links__img" width="24" height="24" src="https://s3.amazonaws.com/files.enjin.com/632721/material/images/icons/WoW.png"></a>\n              </li>\n              <li>\n                <a href="${this.characterRaiderIOURL}" target="_blank"><img class="character-links__img" width="24" height="24" src="https://s3.amazonaws.com/files.enjin.com/632721/material/images/icons/raiderio.png"></a>\n              </li>\n              <li>\n                <a href="${this.characterWCLURL}" target="_blank"><img class="character-links__img" width="24" height="24" src="https://s3.amazonaws.com/files.enjin.com/632721/material/images/icons/warcraftlogs.png"></a>\n              </li>\n            </ul>\n            <div class="remove-button">\n              ${this.removeButton}\n            </div>\n          </div>\n        </div>\n        <div class="character-info-block character-progression">\n          <div class="character-header">Recent Progression</div>\n          <div class="character-progression-raids" data-region="${this.region}" data-realm="${this.realm}" data-name="${this.name}">\n            ${this.characterRaidProgression}\n          </div>\n        </div>\n        <div class="character-info-block character-group">\n          <div class="character-dungeons">\n            <div class="character-header">RaiderIO Season Score</div>\n            <div class="character-dungeons--wrapper">\n              <div class="character-dungeons--score">\n                <div class="character-dungeons--score__wrapper">\n                  <span class="character-dungeons--score__current-score">${this.characterCurrentScores}</span>\n                </div>\n                <div class="character-dungeons--score__wrapper">\n                  <span class="character-dungeons--score__current-score">${this.previousMythicPlusScores}</span>\n                </div>\n                <div class="character-dungeons--score__title">Mythic+ Score<br>Current Season</div>\n                <div class="character-dungeons--score__title">Mythic+ Score<br>Last Season</div>\n              </div>\n            </div>\n          </div>\n          <div class="character-talents">\n            <div class="character-header">Talents</div>\n            ${this.characterTalents}\n          </div>\n        </div>\n        <div class="character-info-block character-gear">\n          <div class="character-header">${this.characterEquipped} Equipped Item Level</div>\n          <div class="character-gear__amulet">${this.characterAmulet}</div>\n          ${this.characterGear}\n        </div>\n      </div>\n    `}get characterRaidProgression(){if(!this.raiderIO||!this.raiderIO.raid_progression)return'<span class="character-error">Character progression not found.</span>';let elements="";return Object.keys(this.raiderIO.raid_progression).forEach(raid=>{elements+=`\n      <div class="character-progression__raid" data-raid="${raid}">\n        <div class="character-progression__title">\n          <span class='character-progression__raid-title'>${raid.replace(/-/g," ")}</span>\n          <span class='character-progression__raid-summary'>${this.raiderIO.raid_progression[raid].summary}</span>\n        </div>\n        <div role='progressbar' class='mdc-linear-progress' data-scale="${eval(this.raiderIO.raid_progression[raid].summary.slice(0,-2))}">\n          <div class='mdc-linear-progress__buffering-dots'></div>\n          <div class='mdc-linear-progress__buffer'></div>\n          <div class='mdc-linear-progress__bar mdc-linear-progress__primary-bar'>\n            <span class='mdc-linear-progress__bar-inner'></span>\n          </div>\n        </div>\n      </div>`}),elements}get characterTalents(){if(!this.blizzard||!this.blizzard.talents)return'<span class="character-error">Talent information not available.</span>';let e='<div class="character-talents__talents">';return this.blizzard.talents.find(e=>!0===e.selected).talents.forEach(t=>{t&&(e+=`\n          <a style='order: ${t.tier}' class='character-talents-link' href='https://www.wowhead.com/spell=${t.spell.id}'>\n            <img class='character-talents-img' src='https://render-us.worldofwarcraft.com/icons/56/${t.spell.icon}.jpg'>\n          </a>`)}),e+"</div>"}get characterEquipped(){return this.blizzard&&this.blizzard.items?this.blizzard.items.averageItemLevel:this.raiderIO&&this.raiderIO.gear?this.raiderIO.gear.item_level_equipped:"Unknown"}get characterAmulet(){if(this.blizzard&&this.blizzard.items&&this.blizzard.items.neck&&this.blizzard.items.neck.azeriteItem){const e=this.blizzard.items.neck.azeriteItem;return`<p>Heart of Azeroth level ${e.azeriteLevel} and ${Math.floor(e.azeriteExperience/e.azeriteExperienceRemaining*100)}%</p>`}return""}get characterGear(){if(this.blizzard&&this.blizzard.items){const e=this.blizzard.items;let t='<div class="character-gear-items">';for(const a of slots)if(e[a]){let r="ilvl="+e[a].itemLevel+"&amp;";e[a].tooltipParams.set&&(r+="pcs="+e[a].tooltipParams.set.join(":")+"&amp;"),e[a].tooltipParams.enchant&&(r+="ench="+e[a].tooltipParams.enchant+"&amp;"),e[a].tooltipParams.gem0&&(r+="gems="+e[a].tooltipParams.gem0+"&amp;"),t+=`<a class='character-gear-items-item' href='https://www.wowhead.com/item=${e[a].id}' data-wowhead='${r}' target='_blank'>\n            <img class='character-gear-items-item__img quality-border-${e[a].quality}' src='https://render-us.worldofwarcraft.com/icons/56/${e[a].icon}.jpg'>\n        </a>`}return t+"</div>"}return'<div class="character-error">Character gear is not available.<br>The character probably transferred.</div>'}get removeButton(){return this.isRemovable?`<div class="col-12">\n        <button class="appform-remove mdc-button mdc-button--raised" data-hash="${this.hash}" onclick="appRemoveCallback(this)" type="button">\n          Remove\n        </button>\n      </div>`:""}async getData(){const e=await Promise.all([fetch(this.blizzardApi).then(e=>e.json()),fetch(this.raiderIOApi).then(e=>e.json())].map(e=>e.catch(e=>e)));this.blizzard=e[0],this.raiderIO=e[1]}}},3:function(e,t,a){"use strict";async function r(e){const t=await fetch(e);if(t.ok)return await t.json();throw new Error(t.status)}async function s(e,t){const a=await fetch(e,{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});if(a.ok)return await a.json();throw new Error(a.status)}a.d(t,"a",function(){return r}),a.d(t,"b",function(){return s})},51:function(e,t,a){"use strict";a.r(t);var r=a(1),s=a(33),n=(a(12),a(21)),i=a(7),c=a(10),o=a(20);a(8);const l=new Audio("https://s3.amazonaws.com/files.enjin.com/632721/material/audio/dont-blame-you.mp3");function d(){document.querySelectorAll(".bbcode_url").forEach(e=>e.setAttribute("target","_blank"))}function u(){const e=document.querySelector('.app_inner_action_approve[data-msg~="reject"]');e&&e.addEventListener("click",()=>l.play())}function h(e){new MutationObserver(t=>{e.classList.contains("v2_system_dashboard")&&(!function(){const e=document.querySelector(".fa.fa-trash"),t=document.querySelector(".app_header"),a=document.querySelector(".app_sidebar_meta");if(a&&!a.classList.contains("meta-initialized")){a.insertAdjacentHTML("afterbegin",'\n<div class="mdc-select demo-width-class">\n    <input type="hidden" name="enhanced-select">\n    <i class="mdc-select__dropdown-icon"></i>\n    <div class="mdc-select__selected-text"></div>\n    <div class="mdc-select__menu mdc-menu mdc-menu-surface demo-width-class">\n        <ul class="mdc-list">\n            <li class="mdc-list-item mdc-list-item--selected" data-value="" aria-selected="true">\n            </li>\n            <li class="mdc-list-item" data-value="grains">\n                Bread, Cereal, Rice, and Pasta\n            </li>\n            <li class="mdc-list-item" data-value="vegetables">\n                Vegetables\n            </li>\n            <li class="mdc-list-item" data-value="fruit">\n                Fruit\n            </li>\n        </ul>\n    </div>\n    <span class="mdc-floating-label">Pick a Food Group</span>\n    <div class="mdc-line-ripple"></div>\n</div>\n    \x3c!--<div class="sidebar-meta">\n      <div class="mdc-select">\n        <i class="mdc-select__dropdown-icon"></i>\n        <select class="mdc-select__native-control">\n          <option value="/dashboard/applications">\n            Open\n          </option>\n          <option value="/dashboard/applications/general">\n            General\n          </option>\n          <option value="/dashboard/applications/approved">\n            Approved\n          </option>\n          <option value="/dashboard/applications/rejected">\n            Rejected\n          </option>\n          <option value="/dashboard/applications/archive">\n            Archived\n          </option>\n          <option value="/dashboard/applications/trash">\n            Trash\n          </option>\n        </select>\n        <div class="mdc-line-ripple"></div>\n      </div>\n      <div class="mdc-button mdc-button--raised">\n        My Application\n      </div>\n    </div>--\x3e\n    '),a.classList.add("meta-initialized");const e=a.querySelector(".mdc-select");console.log(e);const t=new s.a(e);activeHeader&&activeHeader.href,t.listen("change",()=>{$.fn.systemDashboardLoadPage(t.value)}),new r.a(buttonElem),buttonElem.addEventListener("click",()=>{$.fn.systemDashboardLoadPage("/dashboard/applications/mine")})}e&&t&&!t.classList.contains("app_header_initialized")&&(e.parentNode.insertAdjacentText("beforeend","Trash"),e.remove(),document.querySelector(".app_header").classList.add("app_header_initialized")),document.querySelectorAll(".menu_link, .app_sidebar_block").forEach(e=>r.a.attachTo(e))}(),t.forEach(e=>{e.removedNodes.forEach(e=>{!e.classList||"app_inner_area m_system-dashboard"!=e.classList.value&&"applications"!=e.classList.value||Object(o.a)()}),e.addedNodes.forEach(e=>{e.classList&&e.contains(e.querySelector(".character_list"))&&(u(),Object(o.b)(),m(),p(),d())})}))}).observe(e,{childList:!0,subtree:!0})}function m(){document.querySelectorAll('img[src^="https://assets-cloud.enjin.com/users/"],img[src^="https://resources.enjin.com/profile/images/"],img[src$="site_logo/small.png"]').forEach(e=>e.src=e.src.replace("small","medium")),document.querySelectorAll('img[src*="/module_appform/thumb"]').forEach(e=>e.src=e.src.replace("thumb","full"))}function p(){document.querySelectorAll(".images a").forEach(function(e){e.onclick=function(t){t.preventDefault(),n.create(`<img src='${e.getAttribute("href")}'>`).show()}})}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".v2_system_dashboard");Object(i.a)(),function(e){const t=document.querySelector(".dashboard-navbar"),a=t.querySelector(".mdc-tab-bar"),r=new c.a(a),s=window.location.pathname.split("/")[2],n=document.querySelector('.mdc-tab[href*="'+s+'"]'),i=document.querySelector(".hero");i&&i.classList.add("hero-nudge"),n&&(n.classList.add("mdc-tab--active"),n.querySelector(".mdc-tab-indicator").classList.add("mdc-tab-indicator--active"));e&&(t.classList.add("show"),document.querySelector('.menu_link[href="/dashboard/website/create"]')&&a.querySelector('[href="/dashboard/website"]').remove(),r.getTabElements_().forEach(e=>{const t=e.getAttribute("href");e.addEventListener("click",e=>{e.preventDefault(),$.fn.systemDashboardLoadPage(t)})}))}(e),u(),Object(o.b)(),m(),p(),d(),h(e)})},7:function(e,t,a){"use strict";var r=a(1),s=a(12),n=a(8),i=a(15),c=a(14),o=a(10),l=a(3);const d=document.querySelector(".mdc-drawer"),u=document.querySelector(".mdc-top-app-bar"),h=document.querySelector(".mdc-tab-bar");function m(){!async function(){const e=document.getElementById("user-button"),t={jsonrpc:"2.0",id:Math.round(899999*Math.random()+1e5),method:"User.get"};try{const a=await Object(l.b)("/api/v1/api.php",t),i=a.result.logged_in?"#registered-menu":"#guest-menu",c=document.querySelector(i),o=new s.a(c),d=document.getElementById("user-button");if(a.result.logged_in){const t=document.querySelector(".join-site");if(e.innerHTML=`<div class='user-menu__avatar user-menu__slide'>\n          <img class='user-menu__img' src='${a.result.avatar_medium}'>\n        </div>`,t){const e=c.querySelector(".mdc-list");e.insertAdjacentHTML("beforeend","<li class='mdc-list-item' role='menuitem' tabindex='0'>\n            <a class='join-us' href='#' onclick='Enjin_Core.joinWebsiteRegular(event);return false;' rel='nofollow'>Join Website</a>\n          </li>"),new link.MDCLink(e).singleSelection=!0}(a.result.admin_access.full||a.result.admin_access.limited)&&c.setAttribute("data-admin","True"),c.querySelectorAll(".mdc-list-item").forEach(e=>{r.a.attachTo(e)}),n.a.attachTo(document.querySelector(".mdc-menu-surface")),o.setAnchorMargin({top:50}),r.a.attachTo(document.querySelector(".user-menu__avatar"));const s=[`Hello ${a.result.username}, you sultry snail.`,`Hello ${a.result.username}, you beautiful, rule-breaking moth.`,`Hello ${a.result.username}, you powerful musk ox.`,`Make way for ${a.result.username}, the worthy sperm.`,`Is it ${a.result.username} or is it just hot in here?`,`Stay safe out there ${a.result.username}.`,`Hello, <${a.result.username} the Irreplaceable>`,`Suffer well, ${a.result.username}.`,`Oh, hello ${a.result.username}. Have you heard the story of the hozen and the buttercream pie?`],i=document.querySelector(".mdc-drawer__subtitle");if(i){const e=Math.floor(Math.random()*s.length);i.innerText=s[e]}}else e.innerHTML='Hello, Guest <i class="material-icons">keyboard_arrow_down</i>';d.addEventListener("click",()=>o.open=!o.open)}catch(e){console.error("User menu error: "+e)}}(),function(){const e=i.a.attachTo(d),t=c.a.attachTo(u);o.a.attachTo(h),t.listen("MDCTopAppBar:nav",()=>{e.open=!e.open})}(),function(){const e=document.querySelector(".window_header .window_page");e&&(e.innerHTML='<i class="material-icons">settings</i>',document.addEventListener("click",e=>{let t=document.querySelector(".button_click.active");!t||e.target.closest(".button_window")||e.target.closest(".button_click.active")||t.click()}))}(),function(){const e=document.getElementById("enjin-tray");let t=0,a=!1;window.addEventListener("scroll",function(){t=window.scrollY,a||(window.requestAnimationFrame(()=>{!function(e,t){t>0?e.classList.add("user_tray__scrolled"):e.classList.remove("user_tray__scrolled")}(e,t),a=!1}),a=!0)})}()}function p(e,t){const a=document.createElement("div"),r=document.createElement("div"),s=document.createElement("div");return s.classList.add("discord-widget__members"),a.classList.add("discord-widget__channel"),a.setAttribute("data-id",t),r.classList.add("discord-widget__channel__name"),r.innerHTML=e,a.appendChild(r),a.appendChild(s),a}function f(e,t,a){const r=document.createElement("div"),s=document.createElement("div"),n=document.createElement("img"),i=document.createElement("span");if(r.classList.add("discord-widget-member"),s.classList.add("discord-widget-member__avatar"),n.src=t,i.innerHTML=e,i.classList.add("discord-widget-member__name"),s.appendChild(n),r.appendChild(s),r.appendChild(i),a){const e=document.createElement("span");e.classList.add("discord-widget-member__game"),e.innerHTML=a.name,r.appendChild(e)}return r}function v(){13020514===current_page_id&&document.querySelector("#section-footer .section").insertAdjacentHTML("beforeend",'\n    <footer class="footer">\n        <div class="flex-container">\n            <div class="footer__background">\n                <div class="footer__top">\n                    <div class="footer-block footer-block--padded">\n                        <div class="footer__logo">\n                            <img src="https://s3.amazonaws.com/files.enjin.com/632721/material/images/logo_medium.png">\n                        </div>\n                        <div class="footer__description">\n                            <span class="footer__description--guild">Really Bad Players</span>\n                            <span class="footer__description--info">US / Blackrock / Horde</span>\n                        </div>\n                    </div>\n                    <div class="footer-block footer-block--padded">\n                        <div class="footer-block--title">Navigation</div>\n                        <ul class="footer-list">\n                            <li><a href="/">Home</a></li>\n                            <li><a href="/about">About Us</a></li>\n                            <li><a href="/apply">Application</a></li>\n                            <li><a href="/forum">Forum</a></li>\n                            <li><a href="/roster">Roster</a></li>\n                            <li><a href="https://www.warcraftlogs.com/guild/id/5825">Logs</a></li>\n                        </ul>\n                    </div>\n                    <div class="footer-block footer-block--padded">\n                        <div class="footer-block--title">About</div>\n                        <ul class="footer-list">\n                            <li><a href="/about#guild">Guild History</a></li>\n                            <li><a href="/about#ranks">Ranking Structure</a></li>\n                            <li><a href="/about#loot">Loot Distribution</a></li>\n                            <li><a href="/about#addons">Required Addons</a></li>\n                        </ul>\n                    </div>\n                    <div class="footer-block footer-block--padded">\n                        <div class="footer-block--title">Resources</div>\n                        <ul class="footer-list">\n                            <li><a href="https://www.warcraftlogs.com/guild/id/5825">WarcraftLogs</a></li>\n                            <li><a href="https://www.wowprogress.com/guild/us/blackrock/Really+Bad+Players">Wowprogress</a></li>\n                            <li><a href="https://raider.io/guilds/us/blackrock/Really%20Bad%20Players">Raider.IO</a></li>\n                            <li><a href="https://www.raidbots.com/simbot">Raidbots</a></li>\n                        </ul>\n                    </div>\n                    <div class="footer-block">\n                        <div class="discord-parent">\n                            <div class="discord-title">Discord</div>\n                        </div>\n                    </div>\n                </div>\n                <div class="footer__bottom">\n                    <div class="footer__bottom--left">\n                        <span class="copyright-info">Copyright © Really Bad Players. All rights reserved.</span>\n                    </div>\n                    <div class="footer__bottom--right">\n                        <span class="footer-links">Designed by <a href="https://worldofwarcraft.com/en-us/character/blackrock/duckie">Duckie</a> Powered by <a href="https://www.enjin.com/">Enjin</a></span>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </footer>'),async function(){const e=document.querySelector(".discord-parent");let t=0;if(e)try{const a=await Object(l.a)("https://discordapp.com/api/servers/142372929961721856/embed.json"),r=a.channels.sort((e,t)=>e.position-t.position),s=document.createElement("div");s.classList.add("discord-widget");for(let e of r)s.appendChild(p(e.name,e.id));s.appendChild(p("Online Users",0));for(const e of a.members){e.channel_id&&s.querySelector('div[data-id="'+e.channel_id+'"]').appendChild(f(e.username,e.avatar_url));const a=s.querySelector('div[data-id="0"] .discord-widget__members');"online"===e.status&&(t++,a.appendChild(f(e.username,e.avatar_url,e.game)))}const n=document.querySelector("#discord-box .discord__description");if(n){const e=`${t} Members Currently Online`;n.innerHTML=e}e.appendChild(s)}catch(e){console.error("Discord widget failure "+e)}}()}function g(){document.querySelector('meta[name="viewport"]')&&(document.querySelectorAll('head link[rel="icon"]').forEach(e=>e.remove()),document.querySelector("head").insertAdjacentHTML("beforeend",'<meta name="viewport" content="width=device-width, initial-scale=1.0">\n      <link rel="icon" href="https://s3.amazonaws.com/files.enjin.com/632721/material/images/favicon.png" sizes="32x32" type="image/png">')),m(),v(),console.info("[RBP]: Global page features constructed.")}a.d(t,"a",function(){return g})}});