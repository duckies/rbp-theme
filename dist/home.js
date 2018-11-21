!function(e){function r(r){for(var n,s,i=r[0],c=r[1],l=r[2],u=0,_=[];u<i.length;u++)s=i[u],o[s]&&_.push(o[s][0]),o[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(d&&d(r);_.length;)_.shift()();return a.push.apply(a,l||[]),t()}function t(){for(var e,r=0;r<a.length;r++){for(var t=a[r],n=!0,i=1;i<t.length;i++){var c=t[i];0!==o[c]&&(n=!1)}n&&(a.splice(r--,1),e=s(s.s=t[0]))}return e}var n={},o={5:0},a=[];function s(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=e,s.c=n,s.d=function(e,r,t){s.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,r){if(1&r&&(e=s(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)s.d(t,n,function(r){return e[r]}.bind(null,n));return t},s.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(r,"a",r),r},s.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},s.p="";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=r,i=i.slice();for(var l=0;l<i.length;l++)r(i[l]);var d=c;a.push([35,0,8]),t()}({1:function(e,r,t){"use strict";async function n(e){const r=await fetch(e);if(r.ok)return await r.json();throw new Error(r.status)}async function o(e,r){const t=await fetch(e,{method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json"}});if(t.ok)return await t.json();throw new Error(t.status)}t.d(r,"a",function(){return n}),t.d(r,"b",function(){return o})},19:function(e,r,t){"use strict";t.d(r,"a",function(){return o});var n=t(16);function o(){document.querySelectorAll(".mdc-linear-progress").forEach(e=>{const r=e.getAttribute("data-scale");new n.a(e).progress=r})}},35:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _material_linear_progress_index__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(16),_helpers_material__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(19),flickity_bg_lazyload__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(33),flickity_bg_lazyload__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(flickity_bg_lazyload__WEBPACK_IMPORTED_MODULE_2__),_helpers_network__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1),_global_global__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(8);const difficulties={M:"Mythic",H:"Heroic",N:"Normal"};function carousel(){const e=document.querySelector(".carousel");e&&new flickity_bg_lazyload__WEBPACK_IMPORTED_MODULE_2___default.a(e,{autoPlay:5e3,wrapAround:!0,bgLazyLoad:1,prevNextButtons:!1,pageDots:!1})}async function createRaiderIOElements(){const e=["antorus-the-burning-throne","uldir"];try{const r=await Object(_helpers_network__WEBPACK_IMPORTED_MODULE_3__.a)("https://raider.io/api/v1/guilds/profile?region=us&realm=blackrock&name=Really%20Bad%20Players&fields=raid_rankings,raid_progression"),t=document.getElementById("guild-progress"),n=document.querySelector(".guild-progress__loaders"),o=Object.entries(r.raid_progression).filter(r=>e.includes(r[0])),a=Object.entries(r.raid_rankings).pop()[1];t.insertAdjacentHTML("afterbegin",createProgressionElements(o)),n.remove(),setTimeout(_helpers_material__WEBPACK_IMPORTED_MODULE_1__.a,500);let s="";s=0!==a.mythic.world?"mythic":0!==a.heroic.world?"heroic":"normal",Object.entries(a[s]).map(([e,r])=>{const t=document.querySelector("[data-guild-rank="+e+"]");t?t.insertAdjacentHTML("afterbegin",r):console.warn("Element for region "+e+" was not found.")})}catch(e){console.error("RaiderIO error: ",e)}}function createGroupPayModule(){const e=document.querySelector(".m_grouppay"),r=document.querySelector("#grouppay");if(!e)return void(r&&r.remove());const t=e.querySelector(".element_progressbar .current"),n=r.querySelector(".mdc-linear-progress"),o=_material_linear_progress_index__WEBPACK_IMPORTED_MODULE_0__.a.attachTo(n),a=t.style.width.slice(0,-1)/100,s=e.querySelector(".items");n.insertAdjacentHTML("beforeend",`<div class="grouppay__days">${document.querySelector(".element_progressbar .clabel").innerHTML}</div>`),s&&r.querySelector(".grouppay__recent").insertAdjacentHTML("beforeend",s.innerHTML),o.progress=a,r.querySelector("a").addEventListener("click",r=>{r.preventDefault(),e.querySelector(".add_days_button").click()})}function createProgressionElements(raids){return raids.map(([instance,progress])=>`\n    <div class="col-12 raid-progress mdc-elevation--z2" data-raid="${instance}">\n      <div class="flex-row">\n        <div class="col-12 raid-progress__summary">\n            <span class="raid-progress__summary-text">${progress.summary}</span>\n        </div>\n        <div class="col-12 raid-info">\n            <span class="raid-difficulty">${difficulties[progress.summary.slice(-1)]}</span>\n            <span class="raid-name">${instance.replace(/-/g," ")}</span>\n        </div>\n        <div role="progressbar" class="col-12 progressbar mdc-linear-progress" data-scale="${eval(progress.summary.slice(0,-2))}">\n          <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar">\n              <span class="mdc-linear-progress__bar-linear"></span>\n          </div>\n        </div>\n      </div>\n    </div>`).reverse().join("")}async function setupNewsModule(){const e=document.getElementById("news-api-wrapper"),r=document.querySelector(".news--loader");if(!e)return;const t=await Object(_helpers_network__WEBPACK_IMPORTED_MODULE_3__.b)("/api/v1/api.php",{jsonrpc:"2.0",id:Math.round(899999*Math.random()+1e5),method:"News.getNews",params:{api_key:"1cda2ce03bfa7f559e6b083ca73e514325664ad1982a9bf8",preset_id:"47505231",page:1,items:6}});e.insertAdjacentHTML("beforeend",createNewsElements(t.result)),r.remove()}function createNewsElements(e){return e.map(e=>{const r=document.createElement("div");r.innerHTML=e.content;const t=r.innerText;return`\n    <div class='article col-12 mdc-elevation--z2'>\n      <div class='article__bg' style='background-image: url(${r.querySelectorAll("img")[0].src})'></div>\n      <div class='news-info'>\n        <h2 class='news-title'>${e.title}</h2>\n        <p class='news-snippet'>${t}</p>\n      </div>\n    </div>`}).join("")}document.addEventListener("DOMContentLoaded",()=>{Object(_global_global__WEBPACK_IMPORTED_MODULE_4__.a)(),carousel(),createRaiderIOElements(),createGroupPayModule(),setupNewsModule()})},8:function(e,r,t){"use strict";var n=t(2),o=t(13),a=t(11),s=t(15),i=t(7),c=t(9),l=t(1);const d=document.querySelector(".mdc-drawer"),u=document.querySelector(".mdc-top-app-bar"),_=document.querySelector(".mdc-tab-bar");function m(){!async function(){const e=document.getElementById("user-button");try{const r=await Object(l.b)("/api/v1/api.php",{jsonrpc:"2.0",id:Math.round(899999*Math.random()+1e5),method:"User.get"}),t=r.result.logged_in?"#registered-menu":"#guest-menu",s=document.querySelector(t),i=new o.a(s),c=document.getElementById("user-button");if(r.result.logged_in){Sentry&&Sentry.configureScope(e=>{e.setUser({username:r.result.username,raw:r.result})});const t=document.querySelector(".join-site");if(e.innerHTML=`<div class='user-menu__avatar user-menu__slide'>\n          <img class='user-menu__img' src='${r.result.avatar_medium}'>\n        </div>`,t){const e=s.querySelector(".mdc-list");e.insertAdjacentHTML("beforeend","<li class='mdc-list-item' role='menuitem' tabindex='0'>\n              <a class='join-us' href='#' onclick='Enjin_Core.joinWebsiteRegular(event);return false;' rel='nofollow'>Join Website</a>\n            </li>"),new link.MDCLink(e).singleSelection=!0}(r.result.admin_access.full||r.result.admin_access.limited)&&s.setAttribute("data-admin","True"),s.querySelectorAll(".mdc-list-item").forEach(e=>{n.a.attachTo(e)}),a.a.attachTo(document.querySelector(".mdc-menu-surface")),i.setAnchorMargin({top:50}),n.a.attachTo(document.querySelector(".user-menu__avatar"));const o=[`Hello ${r.result.username}, you sultry snail.`,`Hello ${r.result.username}, you beautiful, rule-breaking moth.`,`Hello ${r.result.username}, you powerful musk ox.`,`Make way for ${r.result.username}, the worthy sperm.`,`Is it ${r.result.username} or is it just hot in here?`,`Stay safe out there ${r.result.username}.`,`Hello, <${r.result.username} the Irreplaceable>`,`Suffer well, ${r.result.username}.`,`Oh, hello ${r.result.username}. Have you heard the story of the hozen and the buttercream pie?`],c=document.querySelector(".mdc-drawer__subtitle");if(c){const e=Math.floor(Math.random()*o.length);c.innerText=o[e]}}else e.innerHTML='Hello, Guest <i class="material-icons">keyboard_arrow_down</i>';c.addEventListener("click",()=>i.open=!i.open)}catch(e){console.error("User menu error: "+e)}}(),function(){const e=s.a.attachTo(d),r=i.a.attachTo(u),t=document.querySelector("#enjin-tray");c.a.attachTo(_),r.listen("MDCTopAppBar:nav",()=>{e.open=!e.open}),t&&i.a.attachTo(t)}(),function(){const e=document.querySelector(".window_header .window_page");e&&(e.innerHTML='<i class="material-icons">settings</i>',document.addEventListener("click",e=>{const r=document.querySelector(".button_click.active");!r||e.target.closest(".button_window")||e.target.closest(".button_click.active")||r.click()}))}()}function p(e,r){const t=document.createElement("div"),n=document.createElement("div"),o=document.createElement("div");return o.classList.add("discord-widget__members"),t.classList.add("discord-widget__channel"),t.setAttribute("data-id",r),n.classList.add("discord-widget__channel__name"),n.innerHTML=e,t.appendChild(n),t.appendChild(o),t}function f(e,r,t){const n=document.createElement("div"),o=document.createElement("div"),a=document.createElement("img"),s=document.createElement("span");if(n.classList.add("discord-widget-member"),o.classList.add("discord-widget-member__avatar"),a.src=r,s.innerHTML=e,s.classList.add("discord-widget-member__name"),o.appendChild(a),n.appendChild(o),n.appendChild(s),t){const e=document.createElement("span");e.classList.add("discord-widget-member__game"),e.innerHTML=t.name,n.appendChild(e)}return n}function g(){13020514===current_page_id&&document.querySelector("#section-footer .section").insertAdjacentHTML("beforeend",'\n    <footer class="footer">\n        <div class="flex-container">\n            <div class="footer__background">\n                <div class="footer__top">\n                    <div class="footer-block footer-block--padded">\n                        <div class="footer__logo">\n                            <img src="https://s3.amazonaws.com/files.enjin.com/632721/material/images/logo_medium.png">\n                        </div>\n                        <div class="footer__description">\n                            <span class="footer__description--guild">Really Bad Players</span>\n                            <span class="footer__description--info">US / Blackrock / Horde</span>\n                        </div>\n                    </div>\n                    <div class="footer-block footer-block--padded">\n                        <div class="footer-block--title">Navigation</div>\n                        <ul class="footer-list">\n                            <li><a href="/">Home</a></li>\n                            <li><a href="/about">About Us</a></li>\n                            <li><a href="/apply">Application</a></li>\n                            <li><a href="/forum">Forum</a></li>\n                            <li><a href="/roster">Roster</a></li>\n                            <li><a href="https://www.warcraftlogs.com/guild/id/5825">Logs</a></li>\n                        </ul>\n                    </div>\n                    <div class="footer-block footer-block--padded">\n                        <div class="footer-block--title">About</div>\n                        <ul class="footer-list">\n                            <li><a href="/about#guild">Guild History</a></li>\n                            <li><a href="/about#ranks">Ranking Structure</a></li>\n                            <li><a href="/about#loot">Loot Distribution</a></li>\n                            <li><a href="/about#addons">Required Addons</a></li>\n                        </ul>\n                    </div>\n                    <div class="footer-block footer-block--padded">\n                        <div class="footer-block--title">Resources</div>\n                        <ul class="footer-list">\n                            <li><a href="https://www.warcraftlogs.com/guild/id/5825">WarcraftLogs</a></li>\n                            <li><a href="https://www.wowprogress.com/guild/us/blackrock/Really+Bad+Players">Wowprogress</a></li>\n                            <li><a href="https://raider.io/guilds/us/blackrock/Really%20Bad%20Players">Raider.IO</a></li>\n                            <li><a href="https://www.raidbots.com/simbot">Raidbots</a></li>\n                        </ul>\n                    </div>\n                    <div class="footer-block">\n                        <div class="discord-parent">\n                            <div class="discord-title">Discord</div>\n                        </div>\n                    </div>\n                </div>\n                <div class="footer__bottom">\n                    <div class="footer__bottom--left">\n                        <span class="copyright-info">Copyright © Really Bad Players. All rights reserved.</span>\n                    </div>\n                    <div class="footer__bottom--right">\n                        <span class="footer-links">Designed by <a href="https://worldofwarcraft.com/en-us/character/blackrock/duckie">Duckie</a> Powered by <a href="https://www.enjin.com/">Enjin</a></span>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </footer>'),async function(){const e=document.querySelector(".discord-parent");let r=0;if(e)try{const t=await Object(l.a)("https://discordapp.com/api/servers/142372929961721856/embed.json"),n=t.channels.sort((e,r)=>e.position-r.position),o=document.createElement("div");o.classList.add("discord-widget");for(let e of n)o.appendChild(p(e.name,e.id));o.appendChild(p("Online Users",0));for(const e of t.members){e.channel_id&&o.querySelector('div[data-id="'+e.channel_id+'"]').appendChild(f(e.username,e.avatar_url));const t=o.querySelector('div[data-id="0"] .discord-widget__members');"online"===e.status&&(r++,t.appendChild(f(e.username,e.avatar_url,e.game)))}const a=document.querySelector("#discord-box .discord__description");if(a){const e=`${r} Members Currently Online`;a.innerHTML=e}e.appendChild(o)}catch(e){console.error("Discord widget failure "+e)}}()}function b(){Sentry?Sentry.init({dsn:"https://26c15a32dfc6457cae94b98a9876c8e3@sentry.io/199271"}):console.warn("Sentry was not found."),document.querySelector('meta[name="viewport"]')&&(document.querySelectorAll('head link[rel="icon"]').forEach(e=>e.remove()),document.querySelector("head").insertAdjacentHTML("beforeend",'<meta name="viewport" content="width=device-width, initial-scale=1.0">\n      <link rel="icon" href="https://s3.amazonaws.com/files.enjin.com/632721/material/images/favicon.png" sizes="32x32" type="image/png">')),m(),g()}t.d(r,"a",function(){return b})}});
//# sourceMappingURL=home.js.map