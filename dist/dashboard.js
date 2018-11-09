!function(e){function t(t){for(var i,o,s=t[0],c=t[1],u=t[2],d=0,f=[];d<s.length;d++)o=s[d],r[o]&&f.push(r[o][0]),r[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);for(l&&l(t);f.length;)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(i=!1)}i&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var i={},r={4:0},a=[];function o(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;a.push([37,0,1]),n()}({0:function(e,t,n){"use strict";async function i(e){const t=await fetch(e);if(t.ok)return await t.json();throw new Error(t.status)}async function r(e,t){const n=await fetch(e,{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});if(n.ok)return await n.json();throw new Error(n.status)}n.d(t,"a",function(){return i}),n.d(t,"b",function(){return r})},12:function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"b",function(){return u});var i=n(14),r=n(15),a=n(9);let o=[];function s(){o.length=0}function c(e){e=e?e.replace(" ","-").toLowerCase():"unknown";const t=document.querySelector(".form-question-body"),n=document.createElement("div");n.classList="character character-loader class-"+e,t.appendChild(n)}async function u(){const e=document.querySelector(".form-wow-answer");if(!e)return;const t=e.querySelector(".form-question-body"),n=function(){if(!document.querySelector(".form-wow-answer"))return;const e=document.querySelector(".m_appform"),t=document.querySelector(".v2_system_dashboard");if(e){const t=e.querySelector('input[type="hidden"]');if(t&&t.value)return JSON.parse(t.value)}else if(t){const e=t.querySelector(".character_list");if(e&&e.dataset.cfg)return JSON.parse(JSON.parse(e.dataset.cfg).value)}return null}();if(!n||0===n.length)return;const i=[];for(const e in n)o.includes(e)||(c(n[e].type),o.push(e),i.push(new r.a(n[e])));Promise.all(i.map(e=>e.getData())).then(()=>{document.querySelectorAll(".character-loader").forEach(e=>{e.classList.add("leaving"),window.setTimeout(()=>e.remove(),350)}),t.insertAdjacentHTML("beforeend",i.map(e=>e.characterElement).join("")),setTimeout(a.a,500)})}window.appRemoveCallback=function(e){const t=e.dataset.hash,n=document.querySelector('.character[data-char="'+t+'"]'),r=document.querySelector('.character[data-hash="'+t+'"]'),a=new i.MDCSnackbar(document.querySelector(".mdc-snackbar"));return n&&n.querySelector(".remove a").click(),r&&(r.remove(),o=o.filter(e=>e!==t)),a.show({message:"Character destroyed, that was mean.",actionText:"Neat",actionHandler:!1}),!1}},13:function(e,t,n){var i;e.exports=function e(t,n,r){function a(s,c){if(!n[s]){if(!t[s]){var u="function"==typeof i&&i;if(!c&&u)return i(s,!0);if(o)return o(s,!0);var l=new Error("Cannot find module '"+s+"'");throw l.code="MODULE_NOT_FOUND",l}var d=n[s]={exports:{}};t[s][0].call(d.exports,function(e){return a(t[s][1][e]||e)},d,d.exports,e,t,n,r)}return n[s].exports}for(var o="function"==typeof i&&i,s=0;s<r.length;s++)a(r[s]);return a}({1:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=function(e,t){var n=e.children;return 1===n.length&&n[0].tagName===t},r=n.visible=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};n.create=function(e,t){t=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return!1!==(e=Object.assign({},e)).closable&&(e.closable=!0),"function"==typeof e.className&&(e.className=e.className()),"string"!=typeof e.className&&(e.className=null),"function"!=typeof e.beforeShow&&(e.beforeShow=function(){}),"function"!=typeof e.afterShow&&(e.afterShow=function(){}),"function"!=typeof e.beforeClose&&(e.beforeClose=function(){}),"function"!=typeof e.afterClose&&(e.afterClose=function(){}),"function"==typeof e.beforePlaceholder&&(e.beforePlaceholder=e.beforePlaceholder()),"string"!=typeof e.beforePlaceholder&&(e.beforePlaceholder=""),"function"==typeof e.afterPlaceholder&&(e.afterPlaceholder=e.afterPlaceholder()),"string"!=typeof e.afterPlaceholder&&(e.afterPlaceholder=""),e}(t);var n=function(){var e,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",n=arguments[1],r=document.createElement("div");r.classList.add("basicLightbox"),null!=n.className&&(e=r.classList).add.apply(e,function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(n.className.split(" "))),r.innerHTML="\n\t\t"+n.beforePlaceholder+'\n\t\t<div class="basicLightbox__placeholder" role="dialog">\n\t\t\t'+t+"\n\t\t</div>\n\t\t"+n.afterPlaceholder+"\n\t";var a=r.querySelector(".basicLightbox__placeholder"),o=i(a,"IMG"),s=i(a,"VIDEO"),c=i(a,"IFRAME");return!0===o&&r.classList.add("basicLightbox--img"),!0===s&&r.classList.add("basicLightbox--video"),!0===c&&r.classList.add("basicLightbox--iframe"),r}(e,t),a=function(e){return!1!==t.beforeClose(o)&&(a=function(){if(t.afterClose(o),"function"==typeof e)return e(o)},(i=n).classList.remove("basicLightbox--visible"),setTimeout(function(){return!1===r(i)||i.parentElement.removeChild(i),a()},410),!0);var i,a};!0===t.closable&&(n.onclick=function(e){var t;e.target===this&&(a(),"function"==typeof(t=e).stopPropagation&&t.stopPropagation(),"function"==typeof t.preventDefault&&t.preventDefault())});var o={element:function(){return n},visible:function(){return r(n)},show:function(e){return!1!==t.beforeShow(o)&&(i=n,r=function(){if(t.afterShow(o),"function"==typeof e)return e(o)},document.body.appendChild(i),setTimeout(function(){requestAnimationFrame(function(){return i.classList.add("basicLightbox--visible"),r()})},10),!0);var i,r},close:a};return o}},{}]},{},[1])(1)},14:function(e,t,n){
/*!
 Material Components for the Web
 Copyright (c) 2018 Google Inc.
 License: MIT
*/
!function(t,n){e.exports=n()}(0,function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=137)}({0:function(e,t,n){"use strict";var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();
/**
         * @license
         * Copyright 2016 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */
var r=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.adapter_=t}return i(e,null,[{key:"cssClasses",get:function(){return{}}},{key:"strings",get:function(){return{}}},{key:"numbers",get:function(){return{}}},{key:"defaultAdapter",get:function(){return{}}}]),i(e,[{key:"init",value:function(){}},{key:"destroy",value:function(){}}]),e}();t.a=r},1:function(e,t,n){"use strict";var i=n(0),r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();
/**
         * @license
         * Copyright 2016 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */
var a=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.root_=t;for(var i=arguments.length,r=Array(i>2?i-2:0),a=2;a<i;a++)r[a-2]=arguments[a];this.initialize.apply(this,r),this.foundation_=void 0===n?this.getDefaultFoundation():n,this.foundation_.init(),this.initialSyncWithDOM()}return r(e,null,[{key:"attachTo",value:function(t){return new e(t,new i.a)}}]),r(e,[{key:"initialize",value:function(){}},{key:"getDefaultFoundation",value:function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")}},{key:"initialSyncWithDOM",value:function(){}},{key:"destroy",value:function(){this.foundation_.destroy()}},{key:"listen",value:function(e,t){this.root_.addEventListener(e,t)}},{key:"unlisten",value:function(e,t){this.root_.removeEventListener(e,t)}},{key:"emit",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=void 0;"function"==typeof CustomEvent?i=new CustomEvent(e,{detail:t,bubbles:n}):(i=document.createEvent("CustomEvent")).initCustomEvent(e,n,!1,t),this.root_.dispatchEvent(i)}}]),e}();t.a=a},10:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"transformStyleProperties",function(){return o}),n.d(t,"getCorrectEventName",function(){return s}),n.d(t,"getCorrectPropertyName",function(){return c});
/**
         * @license
         * Copyright 2016 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */
var i={animationstart:{noPrefix:"animationstart",webkitPrefix:"webkitAnimationStart",styleProperty:"animation"},animationend:{noPrefix:"animationend",webkitPrefix:"webkitAnimationEnd",styleProperty:"animation"},animationiteration:{noPrefix:"animationiteration",webkitPrefix:"webkitAnimationIteration",styleProperty:"animation"},transitionend:{noPrefix:"transitionend",webkitPrefix:"webkitTransitionEnd",styleProperty:"transition"}},r={animation:{noPrefix:"animation",webkitPrefix:"-webkit-animation"},transform:{noPrefix:"transform",webkitPrefix:"-webkit-transform"},transition:{noPrefix:"transition",webkitPrefix:"-webkit-transition"}};function a(e,t){if(!function(e){return void 0!==e.document&&"function"==typeof e.document.createElement}(e)||!function(e){return e in i||e in r}(t))return t;var n=t in i?i:r,a=e.document.createElement("div");return n===i?function(e,t,n){return t[e].styleProperty in n.style?t[e].noPrefix:t[e].webkitPrefix}(t,n,a):n[t].noPrefix in a.style?n[t].noPrefix:n[t].webkitPrefix}var o=["transform","WebkitTransform","MozTransform","OTransform","MSTransform"];function s(e,t){return a(e,t)}function c(e,t){return a(e,t)}},137:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"MDCSnackbar",function(){return s});var i=n(7),r=n(138),a=n(10);n.d(t,"MDCSnackbarFoundation",function(){return r.a});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();
/**
         * @license
         * Copyright 2016 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */
var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i["MDCComponent"]),o(t,[{key:"show",value:function(e){this.foundation_.show(e)}},{key:"getDefaultFoundation",value:function(){var e=this,t=r.a.strings,n=t.TEXT_SELECTOR,i=t.ACTION_BUTTON_SELECTOR,o=function(){return e.root_.querySelector(i)};return new r.a({addClass:function(t){return e.root_.classList.add(t)},removeClass:function(t){return e.root_.classList.remove(t)},setAriaHidden:function(){return e.root_.setAttribute("aria-hidden","true")},unsetAriaHidden:function(){return e.root_.removeAttribute("aria-hidden")},setActionAriaHidden:function(){return o().setAttribute("aria-hidden","true")},unsetActionAriaHidden:function(){return o().removeAttribute("aria-hidden")},setActionText:function(e){o().textContent=e},setMessageText:function(t){e.root_.querySelector(n).textContent=t},setFocus:function(){return o().focus()},isFocused:function(){return document.activeElement===o()},visibilityIsHidden:function(){return document.hidden},registerCapturedBlurHandler:function(e){return o().addEventListener("blur",e,!0)},deregisterCapturedBlurHandler:function(e){return o().removeEventListener("blur",e,!0)},registerVisibilityChangeHandler:function(e){return document.addEventListener("visibilitychange",e)},deregisterVisibilityChangeHandler:function(e){return document.removeEventListener("visibilitychange",e)},registerCapturedInteractionHandler:function(e,t){return document.body.addEventListener(e,t,!0)},deregisterCapturedInteractionHandler:function(e,t){return document.body.removeEventListener(e,t,!0)},registerActionClickHandler:function(e){return o().addEventListener("click",e)},deregisterActionClickHandler:function(e){return o().removeEventListener("click",e)},registerTransitionEndHandler:function(t){return e.root_.addEventListener(Object(a.getCorrectEventName)(window,"transitionend"),t)},deregisterTransitionEndHandler:function(t){return e.root_.removeEventListener(Object(a.getCorrectEventName)(window,"transitionend"),t)},notifyShow:function(){return e.emit(r.a.strings.SHOW_EVENT)},notifyHide:function(){return e.emit(r.a.strings.HIDE_EVENT)}})}},{key:"dismissesOnAction",get:function(){return this.foundation_.dismissesOnAction()},set:function(e){this.foundation_.setDismissOnAction(e)}}],[{key:"attachTo",value:function(e){return new t(e)}}]),t}()},138:function(e,t,n){"use strict";var i=n(7),r=n(139),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();
/**
         * @license
         * Copyright 2016 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */
var s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,a(t.defaultAdapter,e)));return n.active_=!1,n.actionWasClicked_=!1,n.dismissOnAction_=!0,n.firstFocus_=!0,n.pointerDownRecognized_=!1,n.snackbarHasFocus_=!1,n.snackbarData_=null,n.queue_=[],n.actionClickHandler_=function(){n.actionWasClicked_=!0,n.invokeAction_()},n.visibilitychangeHandler_=function(){clearTimeout(n.timeoutId_),n.snackbarHasFocus_=!0,n.adapter_.visibilityIsHidden()||setTimeout(n.cleanup_.bind(n),n.snackbarData_.timeout||r.b.MESSAGE_TIMEOUT)},n.interactionHandler_=function(e){("focus"!==e.type||n.adapter_.isFocused())&&("touchstart"!==e.type&&"mousedown"!==e.type||(n.pointerDownRecognized_=!0),n.handlePossibleTabKeyboardFocus_(e),"focus"===e.type&&(n.pointerDownRecognized_=!1))},n.blurHandler_=function(){clearTimeout(n.timeoutId_),n.snackbarHasFocus_=!1,n.timeoutId_=setTimeout(n.cleanup_.bind(n),n.snackbarData_.timeout||r.b.MESSAGE_TIMEOUT)},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i["MDCFoundation"]),o(t,[{key:"active",get:function(){return this.active_}}],[{key:"cssClasses",get:function(){return r.a}},{key:"strings",get:function(){return r.c}},{key:"defaultAdapter",get:function(){return{addClass:function(){},removeClass:function(){},setAriaHidden:function(){},unsetAriaHidden:function(){},setActionAriaHidden:function(){},unsetActionAriaHidden:function(){},setActionText:function(){},setMessageText:function(){},setFocus:function(){},isFocused:function(){return!1},visibilityIsHidden:function(){return!1},registerCapturedBlurHandler:function(){},deregisterCapturedBlurHandler:function(){},registerVisibilityChangeHandler:function(){},deregisterVisibilityChangeHandler:function(){},registerCapturedInteractionHandler:function(){},deregisterCapturedInteractionHandler:function(){},registerActionClickHandler:function(){},deregisterActionClickHandler:function(){},registerTransitionEndHandler:function(){},deregisterTransitionEndHandler:function(){},notifyShow:function(){},notifyHide:function(){}}}}]),o(t,[{key:"init",value:function(){this.adapter_.registerActionClickHandler(this.actionClickHandler_),this.adapter_.setAriaHidden(),this.adapter_.setActionAriaHidden()}},{key:"destroy",value:function(){var e=this;this.adapter_.deregisterActionClickHandler(this.actionClickHandler_),this.adapter_.deregisterCapturedBlurHandler(this.blurHandler_),this.adapter_.deregisterVisibilityChangeHandler(this.visibilitychangeHandler_),["touchstart","mousedown","focus"].forEach(function(t){e.adapter_.deregisterCapturedInteractionHandler(t,e.interactionHandler_)})}},{key:"dismissesOnAction",value:function(){return this.dismissOnAction_}},{key:"setDismissOnAction",value:function(e){this.dismissOnAction_=!!e}},{key:"show",value:function(e){var t=this;if(!e)throw new Error("Please provide a data object with at least a message to display.");if(!e.message)throw new Error("Please provide a message to be displayed.");if(e.actionHandler&&!e.actionText)throw new Error("Please provide action text with the handler.");if(this.active)this.queue_.push(e);else{clearTimeout(this.timeoutId_),this.snackbarData_=e,this.firstFocus_=!0,this.adapter_.registerVisibilityChangeHandler(this.visibilitychangeHandler_),this.adapter_.registerCapturedBlurHandler(this.blurHandler_),["touchstart","mousedown","focus"].forEach(function(e){t.adapter_.registerCapturedInteractionHandler(e,t.interactionHandler_)});var n=r.a.ACTIVE,i=r.a.MULTILINE,a=r.a.ACTION_ON_BOTTOM;this.adapter_.setMessageText(this.snackbarData_.message),this.snackbarData_.multiline&&(this.adapter_.addClass(i),this.snackbarData_.actionOnBottom&&this.adapter_.addClass(a)),this.snackbarData_.actionHandler?(this.adapter_.setActionText(this.snackbarData_.actionText),this.actionHandler_=this.snackbarData_.actionHandler,this.setActionHidden_(!1)):(this.setActionHidden_(!0),this.actionHandler_=null,this.adapter_.setActionText(null)),this.active_=!0,this.adapter_.addClass(n),this.adapter_.unsetAriaHidden(),this.adapter_.notifyShow(),this.timeoutId_=setTimeout(this.cleanup_.bind(this),this.snackbarData_.timeout||r.b.MESSAGE_TIMEOUT)}}},{key:"handlePossibleTabKeyboardFocus_",value:function(){this.firstFocus_&&!this.pointerDownRecognized_&&this.setFocusOnAction_(),this.firstFocus_=!1}},{key:"setFocusOnAction_",value:function(){this.adapter_.setFocus(),this.snackbarHasFocus_=!0,this.firstFocus_=!1}},{key:"invokeAction_",value:function(){try{if(!this.actionHandler_)return;this.actionHandler_()}finally{this.dismissOnAction_&&this.cleanup_()}}},{key:"cleanup_",value:function(){var e=this;if(!this.snackbarHasFocus_||this.actionWasClicked_){var t=r.a.ACTIVE,n=r.a.MULTILINE,i=r.a.ACTION_ON_BOTTOM;this.adapter_.removeClass(t);this.adapter_.registerTransitionEndHandler(function t(){clearTimeout(e.timeoutId_),e.adapter_.deregisterTransitionEndHandler(t),e.adapter_.removeClass(n),e.adapter_.removeClass(i),e.setActionHidden_(!0),e.adapter_.setAriaHidden(),e.active_=!1,e.snackbarHasFocus_=!1,e.adapter_.notifyHide(),e.showNext_()})}}},{key:"showNext_",value:function(){this.queue_.length&&this.show(this.queue_.shift())}},{key:"setActionHidden_",value:function(e){e?this.adapter_.setActionAriaHidden():this.adapter_.unsetActionAriaHidden()}}]),t}();t.a=s},139:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"c",function(){return r}),n.d(t,"b",function(){return a});
/**
         * @license
         * Copyright 2016 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */
var i={ROOT:"mdc-snackbar",TEXT:"mdc-snackbar__text",ACTION_WRAPPER:"mdc-snackbar__action-wrapper",ACTION_BUTTON:"mdc-snackbar__action-button",ACTIVE:"mdc-snackbar--active",MULTILINE:"mdc-snackbar--multiline",ACTION_ON_BOTTOM:"mdc-snackbar--action-on-bottom"},r={TEXT_SELECTOR:".mdc-snackbar__text",ACTION_WRAPPER_SELECTOR:".mdc-snackbar__action-wrapper",ACTION_BUTTON_SELECTOR:".mdc-snackbar__action-button",SHOW_EVENT:"MDCSnackbar:show",HIDE_EVENT:"MDCSnackbar:hide"},a={MESSAGE_TIMEOUT:2750}},7:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),r=n(1);n.d(t,"MDCFoundation",function(){return i.a}),n.d(t,"MDCComponent",function(){return r.a})}})})},15:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return Character});const apiKey="e82qmvhf6egvsqdmpemmps2dskp62teu",thumbnail="https://render-us.worldofwarcraft.com/character/",defaultAvatar="themes/core/images/game/generic/avatar/default.jpg",genericAvatar="https://s3.amazonaws.com/files.enjin.com/1604436/images/unknown.jpg",slots=["head","neck","shoulder","back","chest","shirt","wrist","hands","waist","legs","feet","finger1","finger2","trinket1","trinket2","mainHand","offHand"],errorMap={BlizzardOutage:"Blizzard reports this character is temporarily unavailable on the API.",NoBoth:"Character was not found on the armory or RaiderIO. It's likely they transferred.",NoBlizzardYesRaiderIO:"Character may have transferred. Character is not found on the armory, but is on RaiderIO.",NoRaiderIO:"Character was not found on RaiderIO.",None:""};class Character{constructor(e){this.hash=e.hash,this.name=e.name,this.region=e.region,this.realm=e.realm,this.class=e.type,this.race=e.race,this.level=e.level,this.avatar=e.avatar_url.replace(defaultAvatar,genericAvatar),this.isRemovable=!!document.querySelector(".m_appform"),this.raiderIO=null,this.error=null}get characterClass(){return this.class?this.class:this.raiderIO&&this.raiderIO.class?this.raiderIO.class:"Unknown"}get characterAvatar(){return this.blizzard&&this.blizzard.thumbnail?thumbnail+this.blizzard.thumbnail:this.raiderIO&&this.raiderIO.thumbnail_url?this.raiderIO.thumbnail_url:this.avatar?this.avatar.replace(defaultAvatar,genericAvatar):genericAvatar}get cssCharacterClass(){return this.characterClass.replace(" ","-").toLowerCase()}get blizzardApi(){return"https://"+this.region+".api.battle.net/wow/character/"+this.realm+"/"+this.name+"?fields=items,talents&locale=en_US&apikey="+apiKey}get raiderIOApi(){return"https://raider.io/api/v1/characters/profile?region="+this.region+"&realm="+this.realm+"&name="+this.name+"&fields=gear,raid_progression,mythic_plus_scores,previous_mythic_plus_scores"}get formattedRealm(){return this.realm.replace(" ","-").replace("'","")}get characterWarcraftURL(){return`https://www.worldofwarcraft.com/en-${this.region}/character/${this.formattedRealm}/${this.name}`}get characterRaiderIOURL(){return this.raiderIO.profile_url?this.raiderIO.profile_url:`https://raider.io/characters/${this.region}/${this.formattedRealm}/${this.name}`}get characterWCLURL(){return`https://www.warcraftlogs.com/character/${this.region}/${this.formattedRealm}/${this.name}`}get characterElement(){return this.characterTemplate}get characterDisplay(){const e=document.createElement("div");e.className="character class-"+this.formattedClass,e.setAttribute("data-hash",this.hash),e.setAttribute("data-access",this.error);const t=document.createElement("div");t.className="flex-row",e.appendChild(t);const n=document.createElement("div");n.className="character-info col-12 col-md-2",t.appendChild(n);const i=document.createElement("div");i.className="character-portrait",n.appendChild(i);const r=document.createElement("img");r.className="character-portrait__img",r.src=this.avatar,i.appendChild(r);const a=document.createElement("div");a.className="character-text",n.appendChild(a);const o=document.createElement("div");o.className="character-name col-12",o.innerText=this.name,a.appendChild(o);const s=document.createElement("div");s.className="col-12",s.innerText=this.race+" "+this.characterClass,a.appendChild(s);const c=document.createElement("ul");c.className="character-links",n.appendChild(c);const u=document.createElement("li"),l=document.createElement("a");l.href="https://www.worldofwarcraft.com/en-"+this.region+"/character/"+this.formattedRealm+"/"+this.name,l.target="_blank";const d=document.createElement("li"),f=document.createElement("li");return c.appendChild(u),c.appendChild(d),c.appendChild(f),e}get characterCurrentScores(){return this.raiderIO&&this.raiderIO.mythic_plus_scores?Math.round(this.raiderIO.mythic_plus_scores.all):0}get previousMythicPlusScores(){return this.raiderIO&&this.raiderIO.previous_mythic_plus_scores?Math.round(this.raiderIO.previous_mythic_plus_scores.all):0}get characterTemplate(){return`\n      <div class="character class-${this.cssCharacterClass}" data-hash="${this.hash}">\n        <div class="character-info-block character-info">\n          <div class="character-info__wrapper">\n            <div class="character-portrait">\n              <img class="character-portrait__img" src="${this.characterAvatar}">\n            </div>\n            <div class="character-text">\n              <div class="character-text__name">${this.name}</div>\n              <div class="character-text__info">${this.race} ${this.characterClass}</div>\n            </div>\n            <ul class="character-links">\n              <li>\n                <a href="${this.characterWarcraftURL}" target="_blank"><img class="character-links__img" width="24" height="24" src="https://s3.amazonaws.com/files.enjin.com/632721/material/images/icons/WoW.png"></a>\n              </li>\n              <li>\n                <a href="${this.characterRaiderIOURL}" target="_blank"><img class="character-links__img" width="24" height="24" src="https://s3.amazonaws.com/files.enjin.com/632721/material/images/icons/raiderio.png"></a>\n              </li>\n              <li>\n                <a href="${this.characterWCLURL}" target="_blank"><img class="character-links__img" width="24" height="24" src="https://s3.amazonaws.com/files.enjin.com/632721/material/images/icons/warcraftlogs.png"></a>\n              </li>\n            </ul>\n            <div class="remove-button">\n              ${this.removeButton}\n            </div>\n          </div>\n        </div>\n        <div class="character-info-block character-progression">\n          <div class="character-header">Recent Progression</div>\n          <div class="character-progression-raids" data-region="${this.region}" data-realm="${this.realm}" data-name="${this.name}">\n            ${this.characterRaidProgression}\n          </div>\n        </div>\n        <div class="character-info-block character-group">\n          <div class="character-dungeons">\n            <div class="character-header">RaiderIO Season Score</div>\n            <div class="character-dungeons--wrapper">\n              <div class="character-dungeons--score">\n                <div class="character-dungeons--score__wrapper">\n                  <span class="character-dungeons--score__current-score">${this.characterCurrentScores}</span>\n                </div>\n                <div class="character-dungeons--score__wrapper">\n                  <span class="character-dungeons--score__current-score">${this.previousMythicPlusScores}</span>\n                </div>\n                <div class="character-dungeons--score__title">Mythic+ Score<br>Current Season</div>\n                <div class="character-dungeons--score__title">Mythic+ Score<br>Last Season</div>\n              </div>\n            </div>\n          </div>\n          <div class="character-talents">\n            <div class="character-header">Talents</div>\n            ${this.characterTalents}\n          </div>\n        </div>\n        <div class="character-info-block character-gear">\n          <div class="character-header">${this.characterEquipped} Equipped Item Level</div>\n          <div class="character-gear__amulet">${this.characterAmulet}</div>\n          ${this.characterGear}\n        </div>\n      </div>\n    `}get characterRaidProgression(){if(!this.raiderIO||!this.raiderIO.raid_progression)return'<span class="character-error">Character progression not found.</span>';let elements="";return Object.keys(this.raiderIO.raid_progression).forEach(raid=>{elements+=`\n      <div class="character-progression__raid" data-raid="${raid}">\n        <div class="character-progression__title">\n          <span class='character-progression__raid-title'>${raid.replace(/-/g," ")}</span>\n          <span class='character-progression__raid-summary'>${this.raiderIO.raid_progression[raid].summary}</span>\n        </div>\n        <div role='progressbar' class='mdc-linear-progress' data-scale="${eval(this.raiderIO.raid_progression[raid].summary.slice(0,-2))}">\n          <div class='mdc-linear-progress__buffering-dots'></div>\n          <div class='mdc-linear-progress__buffer'></div>\n          <div class='mdc-linear-progress__bar mdc-linear-progress__primary-bar'>\n            <span class='mdc-linear-progress__bar-inner'></span>\n          </div>\n        </div>\n      </div>`}),elements}get characterTalents(){if(!this.blizzard||!this.blizzard.talents)return'<span class="character-error">Talent information not available.</span>';let e='<div class="character-talents__talents">';return this.blizzard.talents.find(e=>!0===e.selected).talents.forEach(t=>{t&&(e+=`\n          <a style='order: ${t.tier}' class='character-talents-link' href='https://www.wowhead.com/spell=${t.spell.id}'>\n            <img class='character-talents-img' src='https://render-us.worldofwarcraft.com/icons/56/${t.spell.icon}.jpg'>\n          </a>`)}),e+"</div>"}get characterEquipped(){return this.blizzard&&this.blizzard.items?this.blizzard.items.averageItemLevel:this.raiderIO&&this.raiderIO.gear?this.raiderIO.gear.item_level_equipped:"Unknown"}get characterAmulet(){if(this.blizzard&&this.blizzard.items&&this.blizzard.items.neck&&this.blizzard.items.neck.azeriteItem){const e=this.blizzard.items.neck.azeriteItem;return`<p>Heart of Azeroth level ${e.azeriteLevel} and ${Math.floor(e.azeriteExperience/e.azeriteExperienceRemaining*100)}%</p>`}return""}get characterGear(){if(this.blizzard&&this.blizzard.items){const e=this.blizzard.items;let t='<div class="character-gear-items">';for(const n of slots)if(e[n]){let i="ilvl="+e[n].itemLevel+"&amp;";e[n].tooltipParams.set&&(i+="pcs="+e[n].tooltipParams.set.join(":")+"&amp;"),e[n].tooltipParams.enchant&&(i+="ench="+e[n].tooltipParams.enchant+"&amp;"),e[n].tooltipParams.gem0&&(i+="gems="+e[n].tooltipParams.gem0+"&amp;"),t+=`<a class='character-gear-items-item' href='https://www.wowhead.com/item=${e[n].id}' data-wowhead='${i}' target='_blank'>\n            <img class='character-gear-items-item__img quality-border-${e[n].quality}' src='https://render-us.worldofwarcraft.com/icons/56/${e[n].icon}.jpg'>\n        </a>`}return t+"</div>"}return'<div class="character-error">Character gear is not available.<br>The character probably transferred.</div>'}get removeButton(){return this.isRemovable?`<div class="col-12">\n        <button class="appform-remove mdc-button mdc-button--raised" data-hash="${this.hash}" onclick="appRemoveCallback(this)" type="button">\n          Remove\n        </button>\n      </div>`:""}async getData(){const e=await Promise.all([fetch(this.blizzardApi).then(e=>e.json()),fetch(this.raiderIOApi).then(e=>e.json())].map(e=>e.catch(e=>e)));this.blizzard=e[0],this.raiderIO=e[1]}}},2:function(e,t,n){"use strict";var i=n(1),r=n(4),a=n(5),o=n(6),s=n(7),c=n(3),u=n(0);const l=document.querySelector(".mdc-drawer"),d=document.querySelector(".mdc-top-app-bar"),f=document.querySelector(".mdc-tab-bar");function h(){!async function(){const e=document.getElementById("user-button"),t={jsonrpc:"2.0",id:Math.round(899999*Math.random()+1e5),method:"User.get"};try{const n=await Object(u.b)("/api/v1/api.php",t),o=n.result.logged_in?"#registered-menu":"#guest-menu",s=document.querySelector(o),c=new r.MDCMenu(s),l=document.getElementById("user-button");if(n.result.logged_in){const t=document.querySelector(".join-site");if(e.innerHTML=`<div class='user-menu__avatar user-menu__slide'>\n          <img class='user-menu__img' src='${n.result.avatar_medium}'>\n        </div>`,t){const e=s.querySelector(".mdc-list");e.insertAdjacentHTML("beforeend","<li class='mdc-list-item' role='menuitem' tabindex='0'>\n            <a class='join-us' href='#' onclick='Enjin_Core.joinWebsiteRegular(event);return false;' rel='nofollow'>Join Website</a>\n          </li>"),new link.MDCLink(e).singleSelection=!0}(n.result.admin_access.full||n.result.admin_access.limited)&&s.setAttribute("data-admin","True"),s.querySelectorAll(".mdc-list-item").forEach(e=>{i.MDCRipple.attachTo(e)}),a.MDCMenuSurface.attachTo(document.querySelector(".mdc-menu-surface")),c.setAnchorMargin({top:50}),i.MDCRipple.attachTo(document.querySelector(".user-menu__avatar"));const r=[`Hello ${n.result.username}, you sultry snail.`,`Hello ${n.result.username}, you beautiful, rule-breaking moth.`,`Hello ${n.result.username}, you powerful musk ox.`,`Make way for ${n.result.username}, the worthy sperm.`,`Is it ${n.result.username} or is it just hot in here?`,`Stay safe out there ${n.result.username}.`,`Hello, <${n.result.username} the Irreplaceable>`,`Suffer well, ${n.result.username}.`,`Oh, hello ${n.result.username}. Have you heard the story of the hozen and the buttercream pie?`],o=document.querySelector(".mdc-drawer__subtitle");if(o){const e=Math.floor(Math.random()*r.length);o.innerText=r[e]}}else e.innerHTML='Hello, Guest <i class="material-icons">keyboard_arrow_down</i>';l.addEventListener("click",()=>c.open=!c.open)}catch(e){console.error("User menu error: "+e)}}(),function(){const e=o.MDCDrawer.attachTo(l),t=s.MDCTopAppBar.attachTo(d);c.MDCTabBar.attachTo(f),t.listen("MDCTopAppBar:nav",()=>{e.open=!e.open})}(),function(){const e=document.querySelector(".window_header .window_page");e&&(e.innerHTML='<i class="material-icons">settings</i>',document.addEventListener("click",e=>{let t=document.querySelector(".button_click.active");!t||e.target.closest(".button_window")||e.target.closest(".button_click.active")||t.click()}))}(),function(){const e=document.getElementById("enjin-tray");let t=0,n=!1;window.addEventListener("scroll",function(){t=window.scrollY,n||(window.requestAnimationFrame(()=>{!function(e,t){t>0?e.classList.add("user_tray__scrolled"):e.classList.remove("user_tray__scrolled")}(e,t),n=!1}),n=!0)})}()}function _(e,t){const n=document.createElement("div"),i=document.createElement("div"),r=document.createElement("div");return r.classList.add("discord-widget__members"),n.classList.add("discord-widget__channel"),n.setAttribute("data-id",t),i.classList.add("discord-widget__channel__name"),i.innerHTML=e,n.appendChild(i),n.appendChild(r),n}function p(e,t,n){const i=document.createElement("div"),r=document.createElement("div"),a=document.createElement("img"),o=document.createElement("span");if(i.classList.add("discord-widget-member"),r.classList.add("discord-widget-member__avatar"),a.src=t,o.innerHTML=e,o.classList.add("discord-widget-member__name"),r.appendChild(a),i.appendChild(r),i.appendChild(o),n){const e=document.createElement("span");e.classList.add("discord-widget-member__game"),e.innerHTML=n.name,i.appendChild(e)}return i}function v(){13020514===current_page_id&&document.querySelector("#section-footer .section").insertAdjacentHTML("beforeend",'\n    <footer class="footer">\n        <div class="flex-container">\n            <div class="footer__background">\n                <div class="footer__top">\n                    <div class="footer-block footer-block--padded">\n                        <div class="footer__logo">\n                            <img src="https://s3.amazonaws.com/files.enjin.com/632721/material/images/logo_medium.png">\n                        </div>\n                        <div class="footer__description">\n                            <span class="footer__description--guild">Really Bad Players</span>\n                            <span class="footer__description--info">US / Blackrock / Horde</span>\n                        </div>\n                    </div>\n                    <div class="footer-block footer-block--padded">\n                        <div class="footer-block--title">Navigation</div>\n                        <ul class="footer-list">\n                            <li><a href="/">Home</a></li>\n                            <li><a href="/about">About Us</a></li>\n                            <li><a href="/apply">Application</a></li>\n                            <li><a href="/forum">Forum</a></li>\n                            <li><a href="/roster">Roster</a></li>\n                            <li><a href="https://www.warcraftlogs.com/guild/id/5825">Logs</a></li>\n                        </ul>\n                    </div>\n                    <div class="footer-block footer-block--padded">\n                        <div class="footer-block--title">About</div>\n                        <ul class="footer-list">\n                            <li><a href="/about#guild">Guild History</a></li>\n                            <li><a href="/about#ranks">Ranking Structure</a></li>\n                            <li><a href="/about#loot">Loot Distribution</a></li>\n                            <li><a href="/about#addons">Required Addons</a></li>\n                        </ul>\n                    </div>\n                    <div class="footer-block footer-block--padded">\n                        <div class="footer-block--title">Resources</div>\n                        <ul class="footer-list">\n                            <li><a href="https://www.warcraftlogs.com/guild/id/5825">WarcraftLogs</a></li>\n                            <li><a href="https://www.wowprogress.com/guild/us/blackrock/Really+Bad+Players">Wowprogress</a></li>\n                            <li><a href="https://raider.io/guilds/us/blackrock/Really%20Bad%20Players">Raider.IO</a></li>\n                            <li><a href="https://www.raidbots.com/simbot">Raidbots</a></li>\n                        </ul>\n                    </div>\n                    <div class="footer-block">\n                        <div class="discord-parent">\n                            <div class="discord-title">Discord</div>\n                        </div>\n                    </div>\n                </div>\n                <div class="footer__bottom">\n                    <div class="footer__bottom--left">\n                        <span class="copyright-info">Copyright © Really Bad Players. All rights reserved.</span>\n                    </div>\n                    <div class="footer__bottom--right">\n                        <span class="footer-links">Designed by <a href="https://worldofwarcraft.com/en-us/character/blackrock/duckie">Duckie</a> Powered by <a href="https://www.enjin.com/">Enjin</a></span>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </footer>'),async function(){const e=document.querySelector(".discord-parent");let t=0;if(e)try{const n=await Object(u.a)("https://discordapp.com/api/servers/142372929961721856/embed.json"),i=n.channels.sort((e,t)=>e.position-t.position),r=document.createElement("div");r.classList.add("discord-widget");for(let e of i)r.appendChild(_(e.name,e.id));r.appendChild(_("Online Users",0));for(const e of n.members){e.channel_id&&r.querySelector('div[data-id="'+e.channel_id+'"]').appendChild(p(e.username,e.avatar_url));const n=r.querySelector('div[data-id="0"] .discord-widget__members');"online"===e.status&&(t++,n.appendChild(p(e.username,e.avatar_url,e.game)))}const a=document.querySelector("#discord-box .discord__description");if(a){const e=`${t} Members Currently Online`;a.innerHTML=e}e.appendChild(r)}catch(e){console.error("Discord widget failure "+e)}}()}function m(){document.querySelector('meta[name="viewport"]')&&(document.querySelectorAll('head link[rel="icon"]').forEach(e=>e.remove()),document.querySelector("head").insertAdjacentHTML("beforeend",'<meta name="viewport" content="width=device-width, initial-scale=1.0">\n      <link rel="icon" href="https://s3.amazonaws.com/files.enjin.com/632721/material/images/favicon.png" sizes="32x32" type="image/png">')),h(),v(),console.info("[RBP]: Global page features constructed.")}n.d(t,"a",function(){return m})},21:function(e,t,n){
/*!
 Material Components for the Web
 Copyright (c) 2018 Google Inc.
 License: MIT
*/
!function(t,n){e.exports=n()}(0,function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=129)}([function(e,t,n){"use strict";var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();
/**
       * @license
       * Copyright 2016 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */
var r=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.adapter_=t}return i(e,null,[{key:"cssClasses",get:function(){return{}}},{key:"strings",get:function(){return{}}},{key:"numbers",get:function(){return{}}},{key:"defaultAdapter",get:function(){return{}}}]),i(e,[{key:"init",value:function(){}},{key:"destroy",value:function(){}}]),e}();t.a=r},function(e,t,n){"use strict";var i=n(0),r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();
/**
       * @license
       * Copyright 2016 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */
var a=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.root_=t;for(var i=arguments.length,r=Array(i>2?i-2:0),a=2;a<i;a++)r[a-2]=arguments[a];this.initialize.apply(this,r),this.foundation_=void 0===n?this.getDefaultFoundation():n,this.foundation_.init(),this.initialSyncWithDOM()}return r(e,null,[{key:"attachTo",value:function(t){return new e(t,new i.a)}}]),r(e,[{key:"initialize",value:function(){}},{key:"getDefaultFoundation",value:function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")}},{key:"initialSyncWithDOM",value:function(){}},{key:"destroy",value:function(){this.foundation_.destroy()}},{key:"listen",value:function(e,t){this.root_.addEventListener(e,t)}},{key:"unlisten",value:function(e,t){this.root_.removeEventListener(e,t)}},{key:"emit",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=void 0;"function"==typeof CustomEvent?i=new CustomEvent(e,{detail:t,bubbles:n}):(i=document.createEvent("CustomEvent")).initCustomEvent(e,n,!1,t),this.root_.dispatchEvent(i)}}]),e}();t.a=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"supportsCssVariables",function(){return a}),n.d(t,"applyPassive",function(){return o}),n.d(t,"getMatchesProperty",function(){return s}),n.d(t,"getNormalizedEventCoords",function(){return c});
/**
       * @license
       * Copyright 2016 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */
var i=void 0,r=void 0;function a(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=i;if("boolean"==typeof i&&!t)return n;if(e.CSS&&"function"==typeof e.CSS.supports){var r=e.CSS.supports("--css-vars","yes"),a=e.CSS.supports("(--css-vars: yes)")&&e.CSS.supports("color","#00000000");return n=!(!r&&!a)&&!function(e){var t=e.document,n=t.createElement("div");n.className="mdc-ripple-surface--test-edge-var-bug",t.body.appendChild(n);var i=e.getComputedStyle(n),r=null!==i&&"solid"===i.borderTopStyle;return n.remove(),r}(e),t||(i=n),n}}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(void 0===r||t){var n=!1;try{e.document.addEventListener("test",null,{get passive(){return n=!0}})}catch(e){}r=n}return!!r&&{passive:!0}}function s(e){for(var t=["matches","webkitMatchesSelector","msMatchesSelector"],n="matches",i=0;i<t.length;i++){var r=t[i];if(r in e){n=r;break}}return n}function c(e,t,n){var i=t.x,r=t.y,a=i+n.left,o=r+n.top,s=void 0,c=void 0;return"touchstart"===e.type?(s=(e=e).changedTouches[0].pageX-a,c=e.changedTouches[0].pageY-o):(s=(e=e).pageX-a,c=e.pageY-o),{x:s,y:c}}},function(e,t,n){"use strict";var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();
/**
       * @license
       * Copyright 2016 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */
!function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}i(e,[{key:"browserSupportsCssVars",value:function(){}},{key:"isUnbounded",value:function(){}},{key:"isSurfaceActive",value:function(){}},{key:"isSurfaceDisabled",value:function(){}},{key:"addClass",value:function(e){}},{key:"removeClass",value:function(e){}},{key:"containsEventTarget",value:function(e){}},{key:"registerInteractionHandler",value:function(e,t){}},{key:"deregisterInteractionHandler",value:function(e,t){}},{key:"registerDocumentInteractionHandler",value:function(e,t){}},{key:"deregisterDocumentInteractionHandler",value:function(e,t){}},{key:"registerResizeHandler",value:function(e){}},{key:"deregisterResizeHandler",value:function(e){}},{key:"updateCssVariable",value:function(e,t){}},{key:"computeBoundingRect",value:function(){}},{key:"getWindowPageOffset",value:function(){}}])}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"MDCRipple",function(){return c}),n.d(t,"RippleCapableSurface",function(){return u});var i=n(1),r=(n(3),n(5)),a=n(2);n.d(t,"MDCRippleFoundation",function(){return r.a}),n.d(t,"util",function(){return a});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}
/**
       * @license
       * Copyright 2016 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */
var c=function(e){function t(){var e;s(this,t);for(var n=arguments.length,i=Array(n),r=0;r<n;r++)i[r]=arguments[r];var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i)));return a.disabled=!1,a.unbounded_,a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i["a"]),o(t,[{key:"setUnbounded_",value:function(){this.foundation_.setUnbounded(this.unbounded_)}},{key:"activate",value:function(){this.foundation_.activate()}},{key:"deactivate",value:function(){this.foundation_.deactivate()}},{key:"layout",value:function(){this.foundation_.layout()}},{key:"getDefaultFoundation",value:function(){return new r.a(t.createAdapter(this))}},{key:"initialSyncWithDOM",value:function(){this.unbounded="mdcRippleIsUnbounded"in this.root_.dataset}},{key:"unbounded",get:function(){return this.unbounded_},set:function(e){this.unbounded_=Boolean(e),this.setUnbounded_()}}],[{key:"attachTo",value:function(e){var n=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).isUnbounded,i=void 0===n?void 0:n,r=new t(e);return void 0!==i&&(r.unbounded=i),r}},{key:"createAdapter",value:function(e){var t=a.getMatchesProperty(HTMLElement.prototype);return{browserSupportsCssVars:function(){return a.supportsCssVariables(window)},isUnbounded:function(){return e.unbounded},isSurfaceActive:function(){return e.root_[t](":active")},isSurfaceDisabled:function(){return e.disabled},addClass:function(t){return e.root_.classList.add(t)},removeClass:function(t){return e.root_.classList.remove(t)},containsEventTarget:function(t){return e.root_.contains(t)},registerInteractionHandler:function(t,n){return e.root_.addEventListener(t,n,a.applyPassive())},deregisterInteractionHandler:function(t,n){return e.root_.removeEventListener(t,n,a.applyPassive())},registerDocumentInteractionHandler:function(e,t){return document.documentElement.addEventListener(e,t,a.applyPassive())},deregisterDocumentInteractionHandler:function(e,t){return document.documentElement.removeEventListener(e,t,a.applyPassive())},registerResizeHandler:function(e){return window.addEventListener("resize",e)},deregisterResizeHandler:function(e){return window.removeEventListener("resize",e)},updateCssVariable:function(t,n){return e.root_.style.setProperty(t,n)},computeBoundingRect:function(){return e.root_.getBoundingClientRect()},getWindowPageOffset:function(){return{x:window.pageXOffset,y:window.pageYOffset}}}}}]),t}(),u=function e(){s(this,e)};u.prototype.root_,u.prototype.unbounded,u.prototype.disabled},function(e,t,n){"use strict";var i=n(0),r=(n(3),n(6)),a=n(2),o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();
/**
       * @license
       * Copyright 2016 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */
var c=["touchstart","pointerdown","mousedown","keydown"],u=["touchend","pointerup","mouseup","contextmenu"],l=[],d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,o(t.defaultAdapter,e)));return n.layoutFrame_=0,n.frame_={width:0,height:0},n.activationState_=n.defaultActivationState_(),n.initialSize_=0,n.maxRadius_=0,n.activateHandler_=function(e){return n.activate_(e)},n.deactivateHandler_=function(){return n.deactivate_()},n.focusHandler_=function(){return n.handleFocus()},n.blurHandler_=function(){return n.handleBlur()},n.resizeHandler_=function(){return n.layout()},n.unboundedCoords_={left:0,top:0},n.fgScale_=0,n.activationTimer_=0,n.fgDeactivationRemovalTimer_=0,n.activationAnimationHasEnded_=!1,n.activationTimerCallback_=function(){n.activationAnimationHasEnded_=!0,n.runDeactivationUXLogicIfReady_()},n.previousActivationEvent_,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i["a"]),s(t,null,[{key:"cssClasses",get:function(){return r.a}},{key:"strings",get:function(){return r.c}},{key:"numbers",get:function(){return r.b}},{key:"defaultAdapter",get:function(){return{browserSupportsCssVars:function(){},isUnbounded:function(){},isSurfaceActive:function(){},isSurfaceDisabled:function(){},addClass:function(){},removeClass:function(){},containsEventTarget:function(){},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){},registerDocumentInteractionHandler:function(){},deregisterDocumentInteractionHandler:function(){},registerResizeHandler:function(){},deregisterResizeHandler:function(){},updateCssVariable:function(){},computeBoundingRect:function(){},getWindowPageOffset:function(){}}}}]),s(t,[{key:"supportsPressRipple_",value:function(){return this.adapter_.browserSupportsCssVars()}},{key:"defaultActivationState_",value:function(){return{isActivated:!1,hasDeactivationUXRun:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1,activationEvent:void 0,isProgrammatic:!1}}},{key:"init",value:function(){var e=this,n=this.supportsPressRipple_();if(this.registerRootHandlers_(n),n){var i=t.cssClasses,r=i.ROOT,a=i.UNBOUNDED;requestAnimationFrame(function(){e.adapter_.addClass(r),e.adapter_.isUnbounded()&&(e.adapter_.addClass(a),e.layoutInternal_())})}}},{key:"destroy",value:function(){var e=this;if(this.supportsPressRipple_()){this.activationTimer_&&(clearTimeout(this.activationTimer_),this.activationTimer_=0,this.adapter_.removeClass(t.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer_&&(clearTimeout(this.fgDeactivationRemovalTimer_),this.fgDeactivationRemovalTimer_=0,this.adapter_.removeClass(t.cssClasses.FG_DEACTIVATION));var n=t.cssClasses,i=n.ROOT,r=n.UNBOUNDED;requestAnimationFrame(function(){e.adapter_.removeClass(i),e.adapter_.removeClass(r),e.removeCssVars_()})}this.deregisterRootHandlers_(),this.deregisterDeactivationHandlers_()}},{key:"registerRootHandlers_",value:function(e){var t=this;e&&(c.forEach(function(e){t.adapter_.registerInteractionHandler(e,t.activateHandler_)}),this.adapter_.isUnbounded()&&this.adapter_.registerResizeHandler(this.resizeHandler_)),this.adapter_.registerInteractionHandler("focus",this.focusHandler_),this.adapter_.registerInteractionHandler("blur",this.blurHandler_)}},{key:"registerDeactivationHandlers_",value:function(e){var t=this;"keydown"===e.type?this.adapter_.registerInteractionHandler("keyup",this.deactivateHandler_):u.forEach(function(e){t.adapter_.registerDocumentInteractionHandler(e,t.deactivateHandler_)})}},{key:"deregisterRootHandlers_",value:function(){var e=this;c.forEach(function(t){e.adapter_.deregisterInteractionHandler(t,e.activateHandler_)}),this.adapter_.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter_.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter_.isUnbounded()&&this.adapter_.deregisterResizeHandler(this.resizeHandler_)}},{key:"deregisterDeactivationHandlers_",value:function(){var e=this;this.adapter_.deregisterInteractionHandler("keyup",this.deactivateHandler_),u.forEach(function(t){e.adapter_.deregisterDocumentInteractionHandler(t,e.deactivateHandler_)})}},{key:"removeCssVars_",value:function(){var e=this,n=t.strings;Object.keys(n).forEach(function(t){0===t.indexOf("VAR_")&&e.adapter_.updateCssVariable(n[t],null)})}},{key:"activate_",value:function(e){var t=this;if(!this.adapter_.isSurfaceDisabled()){var n=this.activationState_;if(!n.isActivated){var i=this.previousActivationEvent_;if(!(i&&void 0!==e&&i.type!==e.type))n.isActivated=!0,n.isProgrammatic=void 0===e,n.activationEvent=e,n.wasActivatedByPointer=!n.isProgrammatic&&(void 0!==e&&("mousedown"===e.type||"touchstart"===e.type||"pointerdown"===e.type)),void 0!==e&&l.length>0&&l.some(function(e){return t.adapter_.containsEventTarget(e)})?this.resetActivationState_():(void 0!==e&&(l.push(e.target),this.registerDeactivationHandlers_(e)),n.wasElementMadeActive=this.checkElementMadeActive_(e),n.wasElementMadeActive&&this.animateActivation_(),requestAnimationFrame(function(){l=[],n.wasElementMadeActive||void 0===e||" "!==e.key&&32!==e.keyCode||(n.wasElementMadeActive=t.checkElementMadeActive_(e),n.wasElementMadeActive&&t.animateActivation_()),n.wasElementMadeActive||(t.activationState_=t.defaultActivationState_())}))}}}},{key:"checkElementMadeActive_",value:function(e){return void 0===e||"keydown"!==e.type||this.adapter_.isSurfaceActive()}},{key:"activate",value:function(e){this.activate_(e)}},{key:"animateActivation_",value:function(){var e=this,n=t.strings,i=n.VAR_FG_TRANSLATE_START,r=n.VAR_FG_TRANSLATE_END,a=t.cssClasses,o=a.FG_DEACTIVATION,s=a.FG_ACTIVATION,c=t.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal_();var u="",l="";if(!this.adapter_.isUnbounded()){var d=this.getFgTranslationCoordinates_(),f=d.startPoint,h=d.endPoint;u=f.x+"px, "+f.y+"px",l=h.x+"px, "+h.y+"px"}this.adapter_.updateCssVariable(i,u),this.adapter_.updateCssVariable(r,l),clearTimeout(this.activationTimer_),clearTimeout(this.fgDeactivationRemovalTimer_),this.rmBoundedActivationClasses_(),this.adapter_.removeClass(o),this.adapter_.computeBoundingRect(),this.adapter_.addClass(s),this.activationTimer_=setTimeout(function(){return e.activationTimerCallback_()},c)}},{key:"getFgTranslationCoordinates_",value:function(){var e=this.activationState_,t=e.activationEvent,n=void 0;return{startPoint:n={x:(n=e.wasActivatedByPointer?Object(a.getNormalizedEventCoords)(t,this.adapter_.getWindowPageOffset(),this.adapter_.computeBoundingRect()):{x:this.frame_.width/2,y:this.frame_.height/2}).x-this.initialSize_/2,y:n.y-this.initialSize_/2},endPoint:{x:this.frame_.width/2-this.initialSize_/2,y:this.frame_.height/2-this.initialSize_/2}}}},{key:"runDeactivationUXLogicIfReady_",value:function(){var e=this,n=t.cssClasses.FG_DEACTIVATION,i=this.activationState_,a=i.hasDeactivationUXRun,o=i.isActivated;(a||!o)&&this.activationAnimationHasEnded_&&(this.rmBoundedActivationClasses_(),this.adapter_.addClass(n),this.fgDeactivationRemovalTimer_=setTimeout(function(){e.adapter_.removeClass(n)},r.b.FG_DEACTIVATION_MS))}},{key:"rmBoundedActivationClasses_",value:function(){var e=t.cssClasses.FG_ACTIVATION;this.adapter_.removeClass(e),this.activationAnimationHasEnded_=!1,this.adapter_.computeBoundingRect()}},{key:"resetActivationState_",value:function(){var e=this;this.previousActivationEvent_=this.activationState_.activationEvent,this.activationState_=this.defaultActivationState_(),setTimeout(function(){return e.previousActivationEvent_=void 0},t.numbers.TAP_DELAY_MS)}},{key:"deactivate_",value:function(){var e=this,t=this.activationState_;if(t.isActivated){var n=o({},t);t.isProgrammatic?(requestAnimationFrame(function(){return e.animateDeactivation_(n)}),this.resetActivationState_()):(this.deregisterDeactivationHandlers_(),requestAnimationFrame(function(){e.activationState_.hasDeactivationUXRun=!0,e.animateDeactivation_(n),e.resetActivationState_()}))}}},{key:"deactivate",value:function(){this.deactivate_()}},{key:"animateDeactivation_",value:function(e){var t=e.wasActivatedByPointer,n=e.wasElementMadeActive;(t||n)&&this.runDeactivationUXLogicIfReady_()}},{key:"layout",value:function(){var e=this;this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame(function(){e.layoutInternal_(),e.layoutFrame_=0})}},{key:"layoutInternal_",value:function(){var e=this;this.frame_=this.adapter_.computeBoundingRect();var n=Math.max(this.frame_.height,this.frame_.width);this.maxRadius_=this.adapter_.isUnbounded()?n:Math.sqrt(Math.pow(e.frame_.width,2)+Math.pow(e.frame_.height,2))+t.numbers.PADDING,this.initialSize_=Math.floor(n*t.numbers.INITIAL_ORIGIN_SCALE),this.fgScale_=this.maxRadius_/this.initialSize_,this.updateLayoutCssVars_()}},{key:"updateLayoutCssVars_",value:function(){var e=t.strings,n=e.VAR_FG_SIZE,i=e.VAR_LEFT,r=e.VAR_TOP,a=e.VAR_FG_SCALE;this.adapter_.updateCssVariable(n,this.initialSize_+"px"),this.adapter_.updateCssVariable(a,this.fgScale_),this.adapter_.isUnbounded()&&(this.unboundedCoords_={left:Math.round(this.frame_.width/2-this.initialSize_/2),top:Math.round(this.frame_.height/2-this.initialSize_/2)},this.adapter_.updateCssVariable(i,this.unboundedCoords_.left+"px"),this.adapter_.updateCssVariable(r,this.unboundedCoords_.top+"px"))}},{key:"setUnbounded",value:function(e){var n=t.cssClasses.UNBOUNDED;e?this.adapter_.addClass(n):this.adapter_.removeClass(n)}},{key:"handleFocus",value:function(){var e=this;requestAnimationFrame(function(){return e.adapter_.addClass(t.cssClasses.BG_FOCUSED)})}},{key:"handleBlur",value:function(){var e=this;requestAnimationFrame(function(){return e.adapter_.removeClass(t.cssClasses.BG_FOCUSED)})}}]),t}();t.a=d},function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"c",function(){return r}),n.d(t,"b",function(){return a});
/**
       * @license
       * Copyright 2016 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */
var i={ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded",BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation"},r={VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end"},a={PADDING:10,INITIAL_ORIGIN_SCALE:.6,DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,TAP_DELAY_MS:300}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),r=n(1);n.d(t,"MDCFoundation",function(){return i.a}),n.d(t,"MDCComponent",function(){return r.a})},,,,function(e,t,n){"use strict";
/**
       * @license
       * Copyright 2018 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */
function i(e,t){if(e.closest)return e.closest(t);for(var n=e;n;){if(r(n,t))return n;n=n.parentElement}return null}function r(e,t){return(e.matches||e.webkitMatchesSelector||e.msMatchesSelector).call(e,t)}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"closest",function(){return i}),n.d(t,"matches",function(){return r})},function(e,t,n){"use strict";var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();
/**
       * @license
       * Copyright 2018 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */
!function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}i(e,[{key:"getListItemCount",value:function(){}},{key:"getFocusedElementIndex",value:function(){}},{key:"setAttributeForElementIndex",value:function(e,t,n){}},{key:"removeAttributeForElementIndex",value:function(e,t){}},{key:"addClassForElementIndex",value:function(e,t){}},{key:"removeClassForElementIndex",value:function(e,t){}},{key:"focusItemAtIndex",value:function(e){}},{key:"setTabIndexForListItemChildren",value:function(e,t){}},{key:"followHref",value:function(e){}},{key:"toggleCheckbox",value:function(e){}}])}()},function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return i});
/**
       * @license
       * Copyright 2018 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */
var i={ROOT:"mdc-list",LIST_ITEM_CLASS:"mdc-list-item",LIST_ITEM_SELECTED_CLASS:"mdc-list-item--selected",LIST_ITEM_ACTIVATED_CLASS:"mdc-list-item--activated"},r={ARIA_ORIENTATION:"aria-orientation",ARIA_ORIENTATION_HORIZONTAL:"horizontal",ARIA_SELECTED:"aria-selected",CHECKBOX_RADIO_SELECTOR:'input[type="checkbox"]:not(:disabled), input[type="radio"]:not(:disabled)',CHILD_ELEMENTS_TO_TOGGLE_TABINDEX:"."+i.LIST_ITEM_CLASS+" button:not(:disabled),\n  ."+i.LIST_ITEM_CLASS+" a",FOCUSABLE_CHILD_ELEMENTS:"."+i.LIST_ITEM_CLASS+" button:not(:disabled), ."+i.LIST_ITEM_CLASS+" a,\n  ."+i.LIST_ITEM_CLASS+' input[type="radio"]:not(:disabled),\n  .'+i.LIST_ITEM_CLASS+' input[type="checkbox"]:not(:disabled)',ENABLED_ITEMS_SELECTOR:".mdc-list-item:not(.mdc-list-item--disabled)"}},,function(e,t,n){"use strict";var i=n(0),r=(n(12),n(13)),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();
/**
       * @license
       * Copyright 2018 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */
var s=["input","button","textarea","select"],c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,a(t.defaultAdapter,e)));return n.wrapFocus_=!1,n.isVertical_=!0,n.isSingleSelectionList_=!1,n.selectedIndex_=-1,n.useActivatedClass_=!1,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i["a"]),o(t,null,[{key:"strings",get:function(){return r.b}},{key:"cssClasses",get:function(){return r.a}},{key:"defaultAdapter",get:function(){return{getListItemCount:function(){},getFocusedElementIndex:function(){},setAttributeForElementIndex:function(){},removeAttributeForElementIndex:function(){},addClassForElementIndex:function(){},removeClassForElementIndex:function(){},focusItemAtIndex:function(){},setTabIndexForListItemChildren:function(){},followHref:function(){},toggleCheckbox:function(){}}}}]),o(t,[{key:"setWrapFocus",value:function(e){this.wrapFocus_=e}},{key:"setVerticalOrientation",value:function(e){this.isVertical_=e}},{key:"setSingleSelection",value:function(e){this.isSingleSelectionList_=e}},{key:"setUseActivatedClass",value:function(e){this.useActivatedClass_=e}},{key:"setSelectedIndex",value:function(e){if(e!==this.selectedIndex_){var t=this.useActivatedClass_?r.a.LIST_ITEM_ACTIVATED_CLASS:r.a.LIST_ITEM_SELECTED_CLASS;this.selectedIndex_>=0&&(this.adapter_.removeAttributeForElementIndex(this.selectedIndex_,r.b.ARIA_SELECTED),this.adapter_.removeClassForElementIndex(this.selectedIndex_,t),this.adapter_.setAttributeForElementIndex(this.selectedIndex_,"tabindex",-1)),e>=0&&this.adapter_.getListItemCount()>e&&(this.selectedIndex_=e,this.adapter_.setAttributeForElementIndex(this.selectedIndex_,r.b.ARIA_SELECTED,!0),this.adapter_.addClassForElementIndex(this.selectedIndex_,t),this.adapter_.setAttributeForElementIndex(this.selectedIndex_,"tabindex",0),0!==this.selectedIndex_&&this.adapter_.setAttributeForElementIndex(0,"tabindex",-1))}}},{key:"handleFocusIn",value:function(e,t){t>=0&&this.adapter_.setTabIndexForListItemChildren(t,0)}},{key:"handleFocusOut",value:function(e,t){t>=0&&this.adapter_.setTabIndexForListItemChildren(t,-1)}},{key:"handleKeydown",value:function(e,t,n){var i="ArrowLeft"===e.key||37===e.keyCode,r="ArrowUp"===e.key||38===e.keyCode,a="ArrowRight"===e.key||39===e.keyCode,o="ArrowDown"===e.key||40===e.keyCode,s="Home"===e.key||36===e.keyCode,c="End"===e.key||35===e.keyCode,u="Enter"===e.key||13===e.keyCode,l="Space"===e.key||32===e.keyCode,d=this.adapter_.getFocusedElementIndex();if(!(-1===d&&(d=n)<0))if(this.isVertical_&&o||!this.isVertical_&&a)this.preventDefaultEvent_(e),this.focusNextElement(d);else if(this.isVertical_&&r||!this.isVertical_&&i)this.preventDefaultEvent_(e),this.focusPrevElement(d);else if(s)this.preventDefaultEvent_(e),this.focusFirstElement();else if(c)this.preventDefaultEvent_(e),this.focusLastElement();else if(u||l){t&&(this.isSingleSelectionList_&&(this.setSelectedIndex(d),this.preventDefaultEvent_(e)),this.adapter_.followHref(d)),this.adapter_.toggleCheckbox(n)&&this.preventDefaultEvent_(e)}}},{key:"handleClick",value:function(e,t){-1!==e&&(t&&this.adapter_.toggleCheckbox(e),this.isSingleSelectionList_&&this.setSelectedIndex(e))}},{key:"preventDefaultEvent_",value:function(e){var t=(""+e.target.tagName).toLowerCase();-1===s.indexOf(t)&&e.preventDefault()}},{key:"focusNextElement",value:function(e){var t=e+1;if(t>=this.adapter_.getListItemCount()){if(!this.wrapFocus_)return;t=0}this.adapter_.focusItemAtIndex(t)}},{key:"focusPrevElement",value:function(e){var t=e-1;if(t<0){if(!this.wrapFocus_)return;t=this.adapter_.getListItemCount()-1}this.adapter_.focusItemAtIndex(t)}},{key:"focusFirstElement",value:function(){this.adapter_.getListItemCount()>0&&this.adapter_.focusItemAtIndex(0)}},{key:"focusLastElement",value:function(){var e=this.adapter_.getListItemCount()-1;e>=0&&this.adapter_.focusItemAtIndex(e)}}]),t}();t.a=c},function(e,t,n){"use strict";n.d(t,"b",function(){return u}),n.d(t,"a",function(){return c});var i=n(0),r=(n(21),n(17)),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}
/**
       * @license
       * Copyright 2018 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */
var c=void 0,u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,a(t.defaultAdapter,e)));return n.isOpen_=!1,n.openAnimationEndTimerId_=0,n.closeAnimationEndTimerId_=0,n.animationRequestId_=0,n.dimensions_,n.anchorCorner_=r.a.TOP_START,n.anchorMargin_={top:0,right:0,bottom:0,left:0},n.measures_=null,n.quickOpen_=!1,n.hoistedElement_=!1,n.isFixedPosition_=!1,n.position_={x:0,y:0},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i["a"]),o(t,null,[{key:"cssClasses",get:function(){return r.c}},{key:"strings",get:function(){return r.e}},{key:"numbers",get:function(){return r.d}},{key:"Corner",get:function(){return r.a}},{key:"defaultAdapter",get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},hasAnchor:function(){return!1},notifyClose:function(){},notifyOpen:function(){},isElementInContainer:function(){return!1},isRtl:function(){return!1},setTransformOrigin:function(){},isFocused:function(){return!1},saveFocus:function(){},restoreFocus:function(){},isFirstElementFocused:function(){},isLastElementFocused:function(){},focusFirstElement:function(){},focusLastElement:function(){},getInnerDimensions:function(){return{}},getAnchorDimensions:function(){return{}},getWindowDimensions:function(){return{}},getBodyDimensions:function(){return{}},getWindowScroll:function(){return{}},setPosition:function(){},setMaxHeight:function(){}}}}]),o(t,[{key:"init",value:function(){var e=t.cssClasses,n=e.ROOT,i=e.OPEN;if(!this.adapter_.hasClass(n))throw new Error(n+" class required in root element.");this.adapter_.hasClass(i)&&(this.isOpen_=!0)}},{key:"destroy",value:function(){clearTimeout(this.openAnimationEndTimerId_),clearTimeout(this.closeAnimationEndTimerId_),cancelAnimationFrame(this.animationRequestId_)}},{key:"setAnchorCorner",value:function(e){this.anchorCorner_=e}},{key:"setAnchorMargin",value:function(e){this.anchorMargin_.top="number"==typeof e.top?e.top:0,this.anchorMargin_.right="number"==typeof e.right?e.right:0,this.anchorMargin_.bottom="number"==typeof e.bottom?e.bottom:0,this.anchorMargin_.left="number"==typeof e.left?e.left:0}},{key:"setIsHoisted",value:function(e){this.hoistedElement_=e}},{key:"setFixedPosition",value:function(e){this.isFixedPosition_=e}},{key:"setAbsolutePosition",value:function(e,t){this.position_.x=this.typeCheckisFinite_(e)?e:0,this.position_.y=this.typeCheckisFinite_(t)?t:0}},{key:"setQuickOpen",value:function(e){this.quickOpen_=e}},{key:"handleBodyClick",value:function(e){var t=e.target;this.adapter_.isElementInContainer(t)||this.close()}},{key:"handleKeydown",value:function(e){var t=e.keyCode,n=e.key,i=e.shiftKey,r="Tab"===n||9===t;"Escape"===n||27===t?this.close():r&&(this.adapter_.isLastElementFocused()&&!i?(this.adapter_.focusFirstElement(),e.preventDefault()):this.adapter_.isFirstElementFocused()&&i&&(this.adapter_.focusLastElement(),e.preventDefault()))}},{key:"getAutoLayoutMeasurements_",value:function(){var e=this.adapter_.getAnchorDimensions(),t=this.adapter_.getWindowDimensions(),n=this.adapter_.getBodyDimensions(),i=this.adapter_.getWindowScroll();return e||(e={x:this.position_.x,y:this.position_.y,top:this.position_.y,bottom:this.position_.y,left:this.position_.x,right:this.position_.x,height:0,width:0}),{viewport:t,bodyDimensions:n,windowScroll:i,viewportDistance:{top:e.top,right:t.width-e.right,left:e.left,bottom:t.height-e.bottom},anchorHeight:e.height,anchorWidth:e.width,surfaceHeight:this.dimensions_.height,surfaceWidth:this.dimensions_.width}}},{key:"getOriginCorner_",value:function(){var e=r.a.TOP_LEFT,t=this.measures_,n=t.viewportDistance,i=t.anchorHeight,a=t.anchorWidth,o=t.surfaceHeight,s=t.surfaceWidth,c=Boolean(this.anchorCorner_&r.b.BOTTOM),u=c?n.top+i+this.anchorMargin_.bottom:n.top+this.anchorMargin_.top,l=o-(c?n.bottom-this.anchorMargin_.bottom:n.bottom+i-this.anchorMargin_.top);l>0&&o-u<l&&(e|=r.b.BOTTOM);var d=this.adapter_.isRtl(),f=Boolean(this.anchorCorner_&r.b.FLIP_RTL),h=Boolean(this.anchorCorner_&r.b.RIGHT),_=h&&!d||!h&&f&&d,p=s-(_?n.left+a+this.anchorMargin_.right:n.left+this.anchorMargin_.left),v=s-(_?n.right-this.anchorMargin_.right:n.right+a-this.anchorMargin_.left);return(p<0&&_&&d||h&&!_&&p<0||v>0&&p<v)&&(e|=r.b.RIGHT),e}},{key:"getHorizontalOriginOffset_",value:function(e){var t=this.measures_.anchorWidth,n=Boolean(e&r.b.RIGHT),i=Boolean(this.anchorCorner_&r.b.RIGHT);if(n){var a=i?t-this.anchorMargin_.left:this.anchorMargin_.right;return this.hoistedElement_||this.isFixedPosition_?a-(this.measures_.viewport.width-this.measures_.bodyDimensions.width):a}return i?t-this.anchorMargin_.right:this.anchorMargin_.left}},{key:"getVerticalOriginOffset_",value:function(e){var t=this.measures_.anchorHeight,n=Boolean(e&r.b.BOTTOM),i=Boolean(this.anchorCorner_&r.b.BOTTOM);return n?i?t-this.anchorMargin_.top:-this.anchorMargin_.bottom:i?t+this.anchorMargin_.bottom:this.anchorMargin_.top}},{key:"getMenuSurfaceMaxHeight_",value:function(e){var n=0,i=this.measures_.viewportDistance,a=Boolean(e&r.b.BOTTOM),o=t.numbers.MARGIN_TO_EDGE;return a?(n=i.top+this.anchorMargin_.top-o,this.anchorCorner_&r.b.BOTTOM||(n+=this.measures_.anchorHeight)):(n=i.bottom-this.anchorMargin_.bottom+this.measures_.anchorHeight-o,this.anchorCorner_&r.b.BOTTOM&&(n-=this.measures_.anchorHeight)),n}},{key:"autoPosition_",value:function(){var e;this.measures_=this.getAutoLayoutMeasurements_();var t=this.getOriginCorner_(),n=this.getMenuSurfaceMaxHeight_(t),i=t&r.b.BOTTOM?"bottom":"top",a=t&r.b.RIGHT?"right":"left",o=this.getHorizontalOriginOffset_(t),c=this.getVerticalOriginOffset_(t),u=(s(e={},a,o||"0"),s(e,i,c||"0"),e),l=this.measures_,d=l.anchorWidth,f=l.surfaceWidth;for(var h in d/f>r.d.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO&&(a="center"),(this.hoistedElement_||this.isFixedPosition_)&&(u=this.adjustPositionForHoistedElement_(u)),u)u.hasOwnProperty(h)&&"0"!==u[h]&&(u[h]=parseInt(u[h],10)+"px");this.adapter_.setTransformOrigin(a+" "+i),this.adapter_.setPosition(u),this.adapter_.setMaxHeight(n?n+"px":""),this.measures_=null}},{key:"adjustPositionForHoistedElement_",value:function(e){var t=this.measures_,n=t.windowScroll,i=t.viewportDistance;for(var r in e)e.hasOwnProperty(r)&&(i.hasOwnProperty(r)&&(e[r]=parseInt(e[r],10)+i[r]),this.isFixedPosition_||("top"===r?e[r]=parseInt(e[r],10)+n.y:"bottom"===r?e[r]=parseInt(e[r],10)-n.y:"left"===r?e[r]=parseInt(e[r],10)+n.x:"right"===r&&(e[r]=parseInt(e[r],10)-n.x)));return e}},{key:"open",value:function(){var e=this;this.adapter_.saveFocus(),this.quickOpen_||this.adapter_.addClass(t.cssClasses.ANIMATING_OPEN),this.animationRequestId_=requestAnimationFrame(function(){e.adapter_.addClass(t.cssClasses.OPEN),e.dimensions_=e.adapter_.getInnerDimensions(),e.autoPosition_(),e.quickOpen_?e.adapter_.notifyOpen():e.openAnimationEndTimerId_=setTimeout(function(){e.openAnimationEndTimerId_=0,e.adapter_.removeClass(t.cssClasses.ANIMATING_OPEN),e.adapter_.notifyOpen()},r.d.TRANSITION_OPEN_DURATION)}),this.isOpen_=!0}},{key:"close",value:function(){var e=this;this.quickOpen_||this.adapter_.addClass(t.cssClasses.ANIMATING_CLOSED),requestAnimationFrame(function(){e.adapter_.removeClass(t.cssClasses.OPEN),e.quickOpen_?e.adapter_.notifyClose():e.closeAnimationEndTimerId_=setTimeout(function(){e.closeAnimationEndTimerId_=0,e.adapter_.removeClass(t.cssClasses.ANIMATING_CLOSED),e.adapter_.notifyClose()},r.d.TRANSITION_CLOSE_DURATION)}),this.isOpen_=!1,this.maybeRestoreFocus_()}},{key:"maybeRestoreFocus_",value:function(){(this.adapter_.isFocused()||this.adapter_.isElementInContainer(document.activeElement))&&this.adapter_.restoreFocus()}},{key:"isOpen",value:function(){return this.isOpen_}},{key:"typeCheckisFinite_",value:function(e){return"number"==typeof e&&isFinite(e)}}]),t}()},function(e,t,n){"use strict";n.d(t,"c",function(){return i}),n.d(t,"e",function(){return r}),n.d(t,"d",function(){return a}),n.d(t,"b",function(){return o}),n.d(t,"a",function(){return s});
/**
       * @license
       * Copyright 2018 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */
var i={ANCHOR:"mdc-menu-surface--anchor",ANIMATING_CLOSED:"mdc-menu-surface--animating-closed",ANIMATING_OPEN:"mdc-menu-surface--animating-open",FIXED:"mdc-menu-surface--fixed",OPEN:"mdc-menu-surface--open",ROOT:"mdc-menu-surface"},r={CLOSED_EVENT:"MDCMenuSurface:closed",OPENED_EVENT:"MDCMenuSurface:opened",FOCUSABLE_ELEMENTS:'button:not(:disabled), [href]:not([aria-disabled="true"]), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'},a={TRANSITION_OPEN_DURATION:120,TRANSITION_CLOSE_DURATION:75,MARGIN_TO_EDGE:32,ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO:.67},o={BOTTOM:1,CENTER:2,RIGHT:4,FLIP_RTL:8},s={TOP_LEFT:0,TOP_RIGHT:o.RIGHT,BOTTOM_LEFT:o.BOTTOM,BOTTOM_RIGHT:o.BOTTOM|o.RIGHT,TOP_START:o.FLIP_RTL,TOP_END:o.FLIP_RTL|o.RIGHT,BOTTOM_START:o.BOTTOM|o.FLIP_RTL,BOTTOM_END:o.BOTTOM|o.RIGHT|o.FLIP_RTL}},,function(e,t,n){"use strict";var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();
/**
       * @license
       * Copyright 2017 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */
!function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}i(e,[{key:"addClass",value:function(e){}},{key:"removeClass",value:function(e){}},{key:"getWidth",value:function(){}},{key:"registerInteractionHandler",value:function(e,t){}},{key:"deregisterInteractionHandler",value:function(e,t){}}])}()},function(e,t,n){"use strict";var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();
/**
       * @license
       * Copyright 2018 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */
!function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}i(e,[{key:"addClass",value:function(e){}},{key:"removeClass",value:function(e){}},{key:"hasClass",value:function(e){}},{key:"setStyle",value:function(e,t){}},{key:"registerEventHandler",value:function(e,t){}},{key:"deregisterEventHandler",value:function(e,t){}}])}()},function(e,t,n){"use strict";var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();
/**
       * @license
       * Copyright 2018 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */
!function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}i(e,[{key:"addClass",value:function(e){}},{key:"removeClass",value:function(e){}},{key:"hasClass",value:function(e){}},{key:"hasAnchor",value:function(){}},{key:"notifyClose",value:function(){}},{key:"notifyOpen",value:function(){}},{key:"isElementInContainer",value:function(e){}},{key:"isRtl",value:function(){}},{key:"setTransformOrigin",value:function(e){}},{key:"isFocused",value:function(){}},{key:"saveFocus",value:function(){}},{key:"restoreFocus",value:function(){}},{key:"isFirstElementFocused",value:function(){}},{key:"isLastElementFocused",value:function(){}},{key:"focusFirstElement",value:function(){}},{key:"focusLastElement",value:function(){}},{key:"getInnerDimensions",value:function(){}},{key:"getAnchorDimensions",value:function(){}},{key:"getWindowDimensions",value:function(){}},{key:"getBodyDimensions",value:function(){}},{key:"getWindowScroll",value:function(){}},{key:"setPosition",value:function(e){}},{key:"setMaxHeight",value:function(e){}}])}()},function(e,t,n){"use strict";var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();
/**
       * @license
       * Copyright 2017 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */
!function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}i(e,[{key:"getWidth",value:function(){}},{key:"getHeight",value:function(){}},{key:"addClass",value:function(e){}},{key:"removeClass",value:function(e){}},{key:"setOutlinePathAttr",value:function(e){}},{key:"getIdleOutlineStyleValue",value:function(e){}}])}()},function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"c",function(){return i}),n.d(t,"b",function(){return a});
/**
       * @license
       * Copyright 2018 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */
var i={PATH_SELECTOR:".mdc-notched-outline__path",IDLE_OUTLINE_SELECTOR:".mdc-notched-outline__idle"},r={OUTLINE_NOTCHED:"mdc-notched-outline--notched"},a={NOTCH_GUTTER_SIZE:4,MIN_LEADING_STROKE_EDGE_POSITION:12}},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"MDCList",function(){return u});var i=n(1),r=n(15),a=(n(12),n(11)),o=n(13);n.d(t,"MDCListFoundation",function(){return r.a});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();
/**
       * @license
       * Copyright 2018 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */
var u=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,i=Array(n),r=0;r<n;r++)i[r]=arguments[r];var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i)));return a.handleKeydown_,a.handleClick_,a.focusInEventListener_,a.focusOutEventListener_,a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i["a"]),c(t,[{key:"destroy",value:function(){this.root_.removeEventListener("keydown",this.handleKeydown_),this.root_.removeEventListener("click",this.handleClick_),this.root_.removeEventListener("focusin",this.focusInEventListener_),this.root_.removeEventListener("focusout",this.focusOutEventListener_)}},{key:"initialSyncWithDOM",value:function(){this.handleClick_=this.handleClickEvent_.bind(this),this.handleKeydown_=this.handleKeydownEvent_.bind(this),this.focusInEventListener_=this.handleFocusInEvent_.bind(this),this.focusOutEventListener_=this.handleFocusOutEvent_.bind(this),this.root_.addEventListener("keydown",this.handleKeydown_),this.root_.addEventListener("focusin",this.focusInEventListener_),this.root_.addEventListener("focusout",this.focusOutEventListener_),this.root_.addEventListener("click",this.handleClick_),this.layout(),this.initializeListType()}},{key:"layout",value:function(){var e=this.root_.getAttribute(o.b.ARIA_ORIENTATION);this.vertical=e!==o.b.ARIA_ORIENTATION_HORIZONTAL,[].slice.call(this.root_.querySelectorAll(".mdc-list-item:not([tabindex])")).forEach(function(e){e.setAttribute("tabindex",-1)}),[].slice.call(this.root_.querySelectorAll(o.b.FOCUSABLE_CHILD_ELEMENTS)).forEach(function(e){return e.setAttribute("tabindex",-1)})}},{key:"getListItemIndex_",value:function(e){for(var t=e.target,n=-1;!t.classList.contains(o.a.LIST_ITEM_CLASS)&&!t.classList.contains(o.a.ROOT);)t=t.parentElement;return t.classList.contains(o.a.LIST_ITEM_CLASS)&&(n=this.listElements.indexOf(t)),n}},{key:"handleFocusInEvent_",value:function(e){var t=this.getListItemIndex_(e);this.foundation_.handleFocusIn(e,t)}},{key:"handleFocusOutEvent_",value:function(e){var t=this.getListItemIndex_(e);this.foundation_.handleFocusOut(e,t)}},{key:"handleKeydownEvent_",value:function(e){var t=this.getListItemIndex_(e);t>=0&&this.foundation_.handleKeydown(e,e.target.classList.contains(o.a.LIST_ITEM_CLASS),t)}},{key:"handleClickEvent_",value:function(e){var t=this.getListItemIndex_(e),n=!Object(a.matches)(e.target,o.b.CHECKBOX_RADIO_SELECTOR);this.foundation_.handleClick(t,n)}},{key:"initializeListType",value:function(){var e=this.root_.querySelector("."+o.a.LIST_ITEM_ACTIVATED_CLASS+", ."+o.a.LIST_ITEM_SELECTED_CLASS);e&&(e.classList.contains(o.a.LIST_ITEM_ACTIVATED_CLASS)&&this.foundation_.setUseActivatedClass(!0),this.singleSelection=!0,this.selectedIndex=this.listElements.indexOf(e))}},{key:"getDefaultFoundation",value:function(){var e=this;return new r.a(s({getListItemCount:function(){return e.listElements.length},getFocusedElementIndex:function(){return e.listElements.indexOf(document.activeElement)},setAttributeForElementIndex:function(t,n,i){var r=e.listElements[t];r&&r.setAttribute(n,i)},removeAttributeForElementIndex:function(t,n){var i=e.listElements[t];i&&i.removeAttribute(n)},addClassForElementIndex:function(t,n){var i=e.listElements[t];i&&i.classList.add(n)},removeClassForElementIndex:function(t,n){var i=e.listElements[t];i&&i.classList.remove(n)},focusItemAtIndex:function(t){var n=e.listElements[t];n&&n.focus()},setTabIndexForListItemChildren:function(t,n){var i=e.listElements[t];[].slice.call(i.querySelectorAll(o.b.CHILD_ELEMENTS_TO_TOGGLE_TABINDEX)).forEach(function(e){return e.setAttribute("tabindex",n)})},followHref:function(t){var n=e.listElements[t];n&&n.href&&n.click()},toggleCheckbox:function(t){var n=!1,i=e.listElements[t];return[].slice.call(i.querySelectorAll(o.b.CHECKBOX_RADIO_SELECTOR)).forEach(function(e){var t=document.createEvent("Event");t.initEvent("change",!0,!0),e.checked&&"radio"===e.type||(e.checked=!e.checked,e.dispatchEvent(t)),n=!0}),n}}))}},{key:"vertical",set:function(e){this.foundation_.setVerticalOrientation(e)}},{key:"listElements",get:function(){return[].slice.call(this.root_.querySelectorAll(o.b.ENABLED_ITEMS_SELECTOR))}},{key:"wrapFocus",set:function(e){this.foundation_.setWrapFocus(e)}},{key:"singleSelection",set:function(e){this.foundation_.setSingleSelection(e)}},{key:"selectedIndex",set:function(e){this.foundation_.setSelectedIndex(e)}}],[{key:"attachTo",value:function(e){return new t(e)}}]),t}()},,function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return r});
/**
       * @license
       * Copyright 2018 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */
var i={ROOT:"mdc-menu",MENU_SELECTED_LIST_ITEM:"mdc-menu-item--selected",MENU_SELECTION_GROUP:"mdc-menu__selection-group"},r={SELECTED_EVENT:"MDCMenu:selected",ARIA_SELECTED_ATTR:"aria-selected",LIST_SELECTOR:".mdc-list",CHECKBOX_SELECTOR:'input[type="checkbox"]'}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"MDCFloatingLabel",function(){return o});var i=n(1),r=(n(19),n(29));n.d(t,"MDCFloatingLabelFoundation",function(){return r.a});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();
/**
       * @license
       * Copyright 2016 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */
var o=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i["a"]),a(t,[{key:"shake",value:function(e){this.foundation_.shake(e)}},{key:"float",value:function(e){this.foundation_.float(e)}},{key:"getWidth",value:function(){return this.foundation_.getWidth()}},{key:"getDefaultFoundation",value:function(){var e=this;return new r.a({addClass:function(t){return e.root_.classList.add(t)},removeClass:function(t){return e.root_.classList.remove(t)},getWidth:function(){return e.root_.offsetWidth},registerInteractionHandler:function(t,n){return e.root_.addEventListener(t,n)},deregisterInteractionHandler:function(t,n){return e.root_.removeEventListener(t,n)}})}}],[{key:"attachTo",value:function(e){return new t(e)}}]),t}()},function(e,t,n){"use strict";var i=n(0),r=(n(19),n(30)),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();
/**
       * @license
       * Copyright 2016 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */
var s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,a(t.defaultAdapter,e)));return n.shakeAnimationEndHandler_=function(){return n.handleShakeAnimationEnd_()},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i["a"]),o(t,null,[{key:"cssClasses",get:function(){return r.a}},{key:"defaultAdapter",get:function(){return{addClass:function(){},removeClass:function(){},getWidth:function(){},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){}}}}]),o(t,[{key:"init",value:function(){this.adapter_.registerInteractionHandler("animationend",this.shakeAnimationEndHandler_)}},{key:"destroy",value:function(){this.adapter_.deregisterInteractionHandler("animationend",this.shakeAnimationEndHandler_)}},{key:"getWidth",value:function(){return this.adapter_.getWidth()}},{key:"shake",value:function(e){var n=t.cssClasses.LABEL_SHAKE;e?this.adapter_.addClass(n):this.adapter_.removeClass(n)}},{key:"float",value:function(e){var n=t.cssClasses,i=n.LABEL_FLOAT_ABOVE,r=n.LABEL_SHAKE;e?this.adapter_.addClass(i):(this.adapter_.removeClass(i),this.adapter_.removeClass(r))}},{key:"handleShakeAnimationEnd_",value:function(){var e=t.cssClasses.LABEL_SHAKE;this.adapter_.removeClass(e)}}]),t}();t.a=s},function(e,t,n){"use strict";n.d(t,"a",function(){return i});
/**
       * @license
       * Copyright 2016 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */
var i={LABEL_FLOAT_ABOVE:"mdc-floating-label--float-above",LABEL_SHAKE:"mdc-floating-label--shake"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"MDCLineRipple",function(){return s});var i=n(1),r=(n(20),n(32));n.d(t,"MDCLineRippleFoundation",function(){return r.a});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();
/**
       * @license
       * Copyright 2018 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */
var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i["a"]),o(t,[{key:"activate",value:function(){this.foundation_.activate()}},{key:"deactivate",value:function(){this.foundation_.deactivate()}},{key:"setRippleCenter",value:function(e){this.foundation_.setRippleCenter(e)}},{key:"getDefaultFoundation",value:function(){var e=this;return new r.a(a({addClass:function(t){return e.root_.classList.add(t)},removeClass:function(t){return e.root_.classList.remove(t)},hasClass:function(t){return e.root_.classList.contains(t)},setStyle:function(t,n){return e.root_.style[t]=n},registerEventHandler:function(t,n){return e.root_.addEventListener(t,n)},deregisterEventHandler:function(t,n){return e.root_.removeEventListener(t,n)}}))}}],[{key:"attachTo",value:function(e){return new t(e)}}]),t}()},function(e,t,n){"use strict";var i=n(0),r=(n(20),n(33)),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();
/**
       * @license
       * Copyright 2018 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */
var s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,a(t.defaultAdapter,e)));return n.transitionEndHandler_=function(e){return n.handleTransitionEnd(e)},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i["a"]),o(t,null,[{key:"cssClasses",get:function(){return r.a}},{key:"defaultAdapter",get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){},setStyle:function(){},registerEventHandler:function(){},deregisterEventHandler:function(){}}}}]),o(t,[{key:"init",value:function(){this.adapter_.registerEventHandler("transitionend",this.transitionEndHandler_)}},{key:"destroy",value:function(){this.adapter_.deregisterEventHandler("transitionend",this.transitionEndHandler_)}},{key:"activate",value:function(){this.adapter_.removeClass(r.a.LINE_RIPPLE_DEACTIVATING),this.adapter_.addClass(r.a.LINE_RIPPLE_ACTIVE)}},{key:"setRippleCenter",value:function(e){this.adapter_.setStyle("transform-origin",e+"px center")}},{key:"deactivate",value:function(){this.adapter_.addClass(r.a.LINE_RIPPLE_DEACTIVATING)}},{key:"handleTransitionEnd",value:function(e){var t=this.adapter_.hasClass(r.a.LINE_RIPPLE_DEACTIVATING);"opacity"===e.propertyName&&t&&(this.adapter_.removeClass(r.a.LINE_RIPPLE_ACTIVE),this.adapter_.removeClass(r.a.LINE_RIPPLE_DEACTIVATING))}}]),t}();t.a=s},function(e,t,n){"use strict";n.d(t,"a",function(){return i});
/**
       * @license
       * Copyright 2018 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */
var i={LINE_RIPPLE_ACTIVE:"mdc-line-ripple--active",LINE_RIPPLE_DEACTIVATING:"mdc-line-ripple--deactivating"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"MDCMenuSurface",function(){return u});var i=n(1),r=n(35),a=n(16),o=(n(21),n(17));n.d(t,"MDCMenuSurfaceFoundation",function(){return a.b}),n.d(t,"AnchorMargin",function(){return a.a}),n.d(t,"Corner",function(){return o.a}),n.d(t,"CornerBit",function(){return o.b}),n.d(t,"util",function(){return r});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();
/**
       * @license
       * Copyright 2018 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */
var u=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,i=Array(n),r=0;r<n;r++)i[r]=arguments[r];var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i)));return a.previousFocus_,a.anchorElement,a.firstFocusableElement_,a.lastFocusableElement_,a.handleKeydown_,a.handleBodyClick_,a.registerBodyClickListener_,a.deregisterBodyClickListener_,a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i["a"]),c(t,[{key:"initialSyncWithDOM",value:function(){var e=this;this.root_.parentElement&&this.root_.parentElement.classList.contains(o.c.ANCHOR)&&(this.anchorElement=this.root_.parentElement),this.root_.classList.contains(o.c.FIXED)&&this.setFixedPosition(!0),this.handleKeydown_=function(t){return e.foundation_.handleKeydown(t)},this.handleBodyClick_=function(t){return e.foundation_.handleBodyClick(t)},this.registerBodyClickListener_=function(){return document.body.addEventListener("click",e.handleBodyClick_)},this.deregisterBodyClickListener_=function(){return document.body.removeEventListener("click",e.handleBodyClick_)},this.root_.addEventListener("keydown",this.handleKeydown_),this.root_.addEventListener(o.e.OPENED_EVENT,this.registerBodyClickListener_),this.root_.addEventListener(o.e.CLOSED_EVENT,this.deregisterBodyClickListener_)}},{key:"destroy",value:function(){this.root_.removeEventListener("keydown",this.handleKeydown_),this.root_.removeEventListener(o.e.OPENED_EVENT,this.registerBodyClickListener_),this.root_.removeEventListener(o.e.CLOSED_EVENT,this.deregisterBodyClickListener_),function e(t,n,i){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var a=Object.getPrototypeOf(t);return null===a?void 0:e(a,n,i)}if("value"in r)return r.value;var o=r.get;return void 0!==o?o.call(i):void 0}(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this)}},{key:"hoistMenuToBody",value:function(){document.body.appendChild(this.root_.parentElement.removeChild(this.root_)),this.setIsHoisted(!0)}},{key:"setIsHoisted",value:function(e){this.foundation_.setIsHoisted(e)}},{key:"setMenuSurfaceAnchorElement",value:function(e){this.anchorElement=e}},{key:"setFixedPosition",value:function(e){e?this.root_.classList.add(o.c.FIXED):this.root_.classList.remove(o.c.FIXED),this.foundation_.setFixedPosition(e)}},{key:"setAbsolutePosition",value:function(e,t){this.foundation_.setAbsolutePosition(e,t),this.setIsHoisted(!0)}},{key:"setAnchorCorner",value:function(e){this.foundation_.setAnchorCorner(e)}},{key:"setAnchorMargin",value:function(e){this.foundation_.setAnchorMargin(e)}},{key:"getDefaultFoundation",value:function(){var e=this;return new a.b(s({addClass:function(t){return e.root_.classList.add(t)},removeClass:function(t){return e.root_.classList.remove(t)},hasClass:function(t){return e.root_.classList.contains(t)},hasAnchor:function(){return!!e.anchorElement},notifyClose:function(){return e.emit(a.b.strings.CLOSED_EVENT,{})},notifyOpen:function(){return e.emit(a.b.strings.OPENED_EVENT,{})},isElementInContainer:function(t){return e.root_===t||e.root_.contains(t)},isRtl:function(){return"rtl"===getComputedStyle(e.root_).getPropertyValue("direction")},setTransformOrigin:function(t){e.root_.style[r.getTransformPropertyName(window)+"-origin"]=t}},this.getFocusAdapterMethods_(),this.getDimensionAdapterMethods_()))}},{key:"getFocusAdapterMethods_",value:function(){var e=this;return{isFocused:function(){return document.activeElement===e.root_},saveFocus:function(){e.previousFocus_=document.activeElement},restoreFocus:function(){e.root_.contains(document.activeElement)&&e.previousFocus_&&e.previousFocus_.focus&&e.previousFocus_.focus()},isFirstElementFocused:function(){return e.firstFocusableElement_&&e.firstFocusableElement_===document.activeElement},isLastElementFocused:function(){return e.lastFocusableElement_&&e.lastFocusableElement_===document.activeElement},focusFirstElement:function(){return e.firstFocusableElement_&&e.firstFocusableElement_.focus&&e.firstFocusableElement_.focus()},focusLastElement:function(){return e.lastFocusableElement_&&e.lastFocusableElement_.focus&&e.lastFocusableElement_.focus()}}}},{key:"getDimensionAdapterMethods_",value:function(){var e=this;return{getInnerDimensions:function(){return{width:e.root_.offsetWidth,height:e.root_.offsetHeight}},getAnchorDimensions:function(){return e.anchorElement&&e.anchorElement.getBoundingClientRect()},getWindowDimensions:function(){return{width:window.innerWidth,height:window.innerHeight}},getBodyDimensions:function(){return{width:document.body.clientWidth,height:document.body.clientHeight}},getWindowScroll:function(){return{x:window.pageXOffset,y:window.pageYOffset}},setPosition:function(t){e.root_.style.left="left"in t?t.left:null,e.root_.style.right="right"in t?t.right:null,e.root_.style.top="top"in t?t.top:null,e.root_.style.bottom="bottom"in t?t.bottom:null},setMaxHeight:function(t){e.root_.style.maxHeight=t}}}},{key:"open",get:function(){return this.foundation_.isOpen()},set:function(e){if(e){var t=this.root_.querySelectorAll(o.e.FOCUSABLE_ELEMENTS);this.firstFocusableElement_=t.length>0?t[0]:null,this.lastFocusableElement_=t.length>0?t[t.length-1]:null,this.foundation_.open()}else this.foundation_.close()}},{key:"quickOpen",set:function(e){this.foundation_.setQuickOpen(e)}}],[{key:"attachTo",value:function(e){return new t(e)}}]),t}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"getTransformPropertyName",function(){return r});
/**
       * @license
       * Copyright 2018 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */
var i=void 0;function r(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(void 0===i||t){var n="transform"in e.document.createElement("div").style?"transform":"webkitTransform";i=n}return i}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"MDCNotchedOutline",function(){return s});var i=n(1),r=(n(22),n(37)),a=n(23);n.d(t,"MDCNotchedOutlineFoundation",function(){return r.a});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();
/**
       * @license
       * Copyright 2017 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */
var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i["a"]),o(t,[{key:"notch",value:function(e,t){this.foundation_.notch(e,t)}},{key:"closeNotch",value:function(){this.foundation_.closeNotch()}},{key:"getDefaultFoundation",value:function(){var e=this;return new r.a({getWidth:function(){return e.root_.offsetWidth},getHeight:function(){return e.root_.offsetHeight},addClass:function(t){return e.root_.classList.add(t)},removeClass:function(t){return e.root_.classList.remove(t)},setOutlinePathAttr:function(t){e.root_.querySelector(a.c.PATH_SELECTOR).setAttribute("d",t)},getIdleOutlineStyleValue:function(t){var n=e.root_.parentNode.querySelector(a.c.IDLE_OUTLINE_SELECTOR);return window.getComputedStyle(n).getPropertyValue(t)}})}}],[{key:"attachTo",value:function(e){return new t(e)}}]),t}()},function(e,t,n){"use strict";var i=n(0),r=(n(22),n(23)),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();
/**
       * @license
       * Copyright 2017 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */
var s=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,a(t.defaultAdapter,e)))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i["a"]),o(t,null,[{key:"strings",get:function(){return r.c}},{key:"cssClasses",get:function(){return r.a}},{key:"numbers",get:function(){return r.b}},{key:"defaultAdapter",get:function(){return{getWidth:function(){},getHeight:function(){},addClass:function(){},removeClass:function(){},setOutlinePathAttr:function(){},getIdleOutlineStyleValue:function(){}}}}]),o(t,[{key:"notch",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=t.cssClasses.OUTLINE_NOTCHED;this.adapter_.addClass(i),this.updateSvgPath_(e,n)}},{key:"closeNotch",value:function(){var e=t.cssClasses.OUTLINE_NOTCHED;this.adapter_.removeClass(e)}},{key:"updateSvgPath_",value:function(e,t){var n=this.adapter_.getIdleOutlineStyleValue("border-radius")||this.adapter_.getIdleOutlineStyleValue("border-top-left-radius"),i=parseFloat(n),a=this.adapter_.getWidth(),o=this.adapter_.getHeight(),s=i+1.2,c=Math.max(0,r.b.MIN_LEADING_STROKE_EDGE_POSITION-i-1.2),u=0;e>0&&(u=e+2*r.b.NOTCH_GUTTER_SIZE);var l="a"+i+","+i+" 0 0 1 "+i+","+i+"v"+(o-2*s)+"a"+i+","+i+" 0 0 1 "+-i+","+i+"h"+(2*s-a)+"a"+i+","+i+" 0 0 1 "+-i+","+-i+"v"+(2*s-o)+"a"+i+","+i+" 0 0 1 "+i+","+-i,d=void 0;d=t?"M"+(a-s-c)+",1h"+c+l+"h"+(a-2*s-u-c):"M"+(s+c+u)+",1h"+(a-2*s-u-c)+l+"h"+c,this.adapter_.setOutlinePathAttr(d)}}]),t}();t.a=s},,,,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"MDCMenu",function(){return l});var i=n(1),r=n(49),a=n(27),o=n(34),s=n(16),c=n(25);n.d(t,"MDCMenuFoundation",function(){return r.a}),n.d(t,"AnchorMargin",function(){return s.a}),n.d(t,"Corner",function(){return o.Corner});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();
/**
       * @license
       * Copyright 2018 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */
var l=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,i=Array(n),r=0;r<n;r++)i[r]=arguments[r];var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i)));return a.menuSurface_,a.list_,a.handleKeydown_,a.handleClick_,a.afterOpenedCallback_,a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i["a"]),u(t,[{key:"initialize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return new o.MDCMenuSurface(e)},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e){return new c.MDCList(e)};this.menuSurface_=e(this.root_);var n=this.root_.querySelector(a.b.LIST_SELECTOR);n&&(this.list_=t(n),this.list_.wrapFocus=!0)}},{key:"initialSyncWithDOM",value:function(){var e=this;this.afterOpenedCallback_=function(){return e.handleAfterOpened_()},this.handleKeydown_=function(t){return e.foundation_.handleKeydown(t)},this.handleClick_=function(t){return e.foundation_.handleClick(t)},this.menuSurface_.listen(s.b.strings.OPENED_EVENT,this.afterOpenedCallback_),this.listen("keydown",this.handleKeydown_),this.listen("click",this.handleClick_)}},{key:"destroy",value:function(){this.list_&&this.list_.destroy(),this.menuSurface_.destroy(),this.menuSurface_.unlisten(s.b.strings.OPENED_EVENT,this.afterOpenedCallback_),this.unlisten("keydown",this.handleKeydown_),this.unlisten("click",this.handleClick_),function e(t,n,i){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var a=Object.getPrototypeOf(t);return null===a?void 0:e(a,n,i)}if("value"in r)return r.value;var o=r.get;return void 0!==o?o.call(i):void 0}(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this)}},{key:"setAnchorCorner",value:function(e){this.menuSurface_.setAnchorCorner(e)}},{key:"setAnchorMargin",value:function(e){this.menuSurface_.setAnchorMargin(e)}},{key:"getOptionByIndex",value:function(e){return e<this.items.length?this.items[e]:null}},{key:"setFixedPosition",value:function(e){this.menuSurface_.setFixedPosition(e)}},{key:"hoistMenuToBody",value:function(){this.menuSurface_.hoistMenuToBody()}},{key:"setIsHoisted",value:function(e){this.menuSurface_.setIsHoisted(e)}},{key:"setAbsolutePosition",value:function(e,t){this.menuSurface_.setAbsolutePosition(e,t)}},{key:"setAnchorElement",value:function(e){this.menuSurface_.anchorElement=e}},{key:"handleAfterOpened_",value:function(){var e=this.items;e.length>0&&e[0].focus()}},{key:"getDefaultFoundation",value:function(){var e=this;return new r.a({addClassToElementAtIndex:function(t,n){e.items[t].classList.add(n)},removeClassFromElementAtIndex:function(t,n){e.items[t].classList.remove(n)},addAttributeToElementAtIndex:function(t,n,i){e.items[t].setAttribute(n,i)},removeAttributeFromElementAtIndex:function(t,n){e.items[t].removeAttribute(n)},elementContainsClass:function(e,t){return e.classList.contains(t)},closeSurface:function(){return e.open=!1},getElementIndex:function(t){return e.items.indexOf(t)},getParentElement:function(e){return e.parentElement},getSelectedElementIndex:function(t){return e.items.indexOf(t.querySelector("."+a.a.MENU_SELECTED_LIST_ITEM))},notifySelected:function(t){return e.emit(a.b.SELECTED_EVENT,{index:t.index,item:e.items[t.index]})}})}},{key:"open",get:function(){return this.menuSurface_.open},set:function(e){this.menuSurface_.open=e}},{key:"items",get:function(){return this.list_.listElements}},{key:"quickOpen",set:function(e){this.menuSurface_.quickOpen=e}}],[{key:"attachTo",value:function(e){return new t(e)}}]),t}()},function(e,t,n){"use strict";n.d(t,"a",function(){return l});var i=n(0),r=(n(50),n(27)),a=n(16),o=n(15),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();
/**
       * @license
       * Copyright 2018 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */
var u=["input","button","textarea","select","a"],l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,s(t.defaultAdapter,e)));return n.closeAnimationEndTimerId_=0,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i["a"]),c(t,null,[{key:"cssClasses",get:function(){return r.a}},{key:"strings",get:function(){return r.b}},{key:"defaultAdapter",get:function(){return{addClassToElementAtIndex:function(){},removeClassFromElementAtIndex:function(){},addAttributeToElementAtIndex:function(){},removeAttributeFromElementAtIndex:function(){},elementContainsClass:function(){},closeSurface:function(){},getElementIndex:function(){},getParentElement:function(){},getSelectedElementIndex:function(){},notifySelected:function(){}}}}]),c(t,[{key:"destroy",value:function(){this.closeAnimationEndTimerId_&&clearTimeout(this.closeAnimationEndTimerId_),this.adapter_.closeSurface()}},{key:"handleKeydown",value:function(e){var t=e.key,n=e.keyCode,i="Tab"===t||9===n;"Space"===t||32===n||("Enter"===t||13===n)?this.handleAction_(e):i&&this.adapter_.closeSurface()}},{key:"handleClick",value:function(e){this.handleAction_(e)}},{key:"handleAction_",value:function(e){var t=this.getListItem_(e.target);t&&(this.handleSelection(t),this.preventDefaultEvent_(e))}},{key:"handleSelection",value:function(e){var t=this,n=this.adapter_.getElementIndex(e);n<0||(this.adapter_.notifySelected({index:n}),this.adapter_.closeSurface(),this.closeAnimationEndTimerId_=setTimeout(function(){var i=t.getSelectionGroup_(e);null!==i&&t.handleSelectionGroup_(i,n)},a.b.numbers.TRANSITION_CLOSE_DURATION))}},{key:"handleSelectionGroup_",value:function(e,t){var n=this.adapter_.getSelectedElementIndex(e);n>=0&&(this.adapter_.removeAttributeFromElementAtIndex(n,r.b.ARIA_SELECTED_ATTR),this.adapter_.removeClassFromElementAtIndex(n,r.a.MENU_SELECTED_LIST_ITEM)),this.adapter_.addClassToElementAtIndex(t,r.a.MENU_SELECTED_LIST_ITEM),this.adapter_.addAttributeToElementAtIndex(t,r.b.ARIA_SELECTED_ATTR,"true")}},{key:"getSelectionGroup_",value:function(e){for(var t=this.adapter_.getParentElement(e),n=this.adapter_.elementContainsClass(t,r.a.MENU_SELECTION_GROUP);!n&&!this.adapter_.elementContainsClass(t,o.a.cssClasses.ROOT);)t=this.adapter_.getParentElement(t),n=this.adapter_.elementContainsClass(t,r.a.MENU_SELECTION_GROUP);return n?t:null}},{key:"getListItem_",value:function(e){for(var t=this.adapter_.elementContainsClass(e,o.a.cssClasses.LIST_ITEM_CLASS);!t;){if(!(e=this.adapter_.getParentElement(e)))return null;t=this.adapter_.elementContainsClass(e,o.a.cssClasses.LIST_ITEM_CLASS)}return e}},{key:"preventDefaultEvent_",value:function(e){var t=(""+e.target.tagName).toLowerCase();-1===u.indexOf(t)&&e.preventDefault()}}]),t}()},function(e,t,n){"use strict";var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();
/**
       * @license
       * Copyright 2018 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */
!function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}i(e,[{key:"addClassToElementAtIndex",value:function(e,t){}},{key:"removeClassFromElementAtIndex",value:function(e,t){}},{key:"addAttributeToElementAtIndex",value:function(e,t,n){}},{key:"removeAttributeFromElementAtIndex",value:function(e,t){}},{key:"elementContainsClass",value:function(e,t){}},{key:"closeSurface",value:function(){}},{key:"getElementIndex",value:function(e){}},{key:"getParentElement",value:function(e){}},{key:"getSelectedElementIndex",value:function(e){}},{key:"notifySelected",value:function(e){}}])}()},function(e,t,n){"use strict";n.d(t,"a",function(){return s});var i=n(1),r=(n(73),n(131)),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();
/**
       * @license
       * Copyright 2018 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */
var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i["a"]),o(t,[{key:"getDefaultFoundation",value:function(){var e=this;return new r.a(a({getAttr:function(t){return e.root_.getAttribute(t)},setAttr:function(t,n){return e.root_.setAttribute(t,n)},removeAttr:function(t){return e.root_.removeAttribute(t)},setContent:function(t){e.root_.textContent=t},registerInteractionHandler:function(t,n){return e.root_.addEventListener(t,n)},deregisterInteractionHandler:function(t,n){return e.root_.removeEventListener(t,n)},notifyIconAction:function(){return e.emit(r.a.strings.ICON_EVENT,{},!0)}}))}},{key:"foundation",get:function(){return this.foundation_}}],[{key:"attachTo",value:function(e){return new t(e)}}]),t}()},function(e,t,n){"use strict";n.d(t,"a",function(){return s});var i=n(1),r=(n(74),n(133)),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();
/**
       * @license
       * Copyright 2018 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */
var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i["a"]),o(t,[{key:"getDefaultFoundation",value:function(){var e=this;return new r.a(a({addClass:function(t){return e.root_.classList.add(t)},removeClass:function(t){return e.root_.classList.remove(t)},hasClass:function(t){return e.root_.classList.contains(t)},setAttr:function(t,n){return e.root_.setAttribute(t,n)},removeAttr:function(t){return e.root_.removeAttribute(t)},setContent:function(t){e.root_.textContent=t}}))}},{key:"foundation",get:function(){return this.foundation_}}],[{key:"attachTo",value:function(e){return new t(e)}}]),t}()},,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n(51),n(52);var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();
/**
       * @license
       * Copyright 2018 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */
!function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}i(e,[{key:"addClass",value:function(e){}},{key:"removeClass",value:function(e){}},{key:"hasClass",value:function(e){}},{key:"activateBottomLine",value:function(){}},{key:"deactivateBottomLine",value:function(){}},{key:"setValue",value:function(e){}},{key:"getValue",value:function(){}},{key:"isRtl",value:function(){}},{key:"floatLabel",value:function(e){}},{key:"getLabelWidth",value:function(){}},{key:"hasOutline",value:function(){}},{key:"notchOutline",value:function(e,t){}},{key:"closeOutline",value:function(){}},{key:"openMenu",value:function(){}},{key:"closeMenu",value:function(){}},{key:"isMenuOpen",value:function(){}},{key:"setSelectedIndex",value:function(e){}},{key:"setDisabled",value:function(e){}},{key:"setRippleCenter",value:function(e){}},{key:"notifyChange",value:function(e){}},{key:"checkValidity",value:function(){}},{key:"setValid",value:function(e){}}])}()},function(e,t,n){"use strict";var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();
/**
       * @license
       * Copyright 2018 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */
!function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}i(e,[{key:"getAttr",value:function(e){}},{key:"setAttr",value:function(e,t){}},{key:"removeAttr",value:function(e){}},{key:"setContent",value:function(e){}},{key:"registerInteractionHandler",value:function(e,t){}},{key:"deregisterInteractionHandler",value:function(e,t){}},{key:"notifyIconAction",value:function(){}}])}()},function(e,t,n){"use strict";var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();
/**
       * @license
       * Copyright 2018 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */
!function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}i(e,[{key:"addClass",value:function(e){}},{key:"removeClass",value:function(e){}},{key:"hasClass",value:function(e){}},{key:"setAttr",value:function(e,t){}},{key:"removeAttr",value:function(e){}},{key:"setContent",value:function(e){}}])}()},function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"c",function(){return r}),n.d(t,"b",function(){return a});
/**
       * @license
       * Copyright 2016 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */
var i={DISABLED:"mdc-select--disabled",ROOT:"mdc-select",OUTLINED:"mdc-select--outlined",FOCUSED:"mdc-select--focused",SELECTED_ITEM_CLASS:"mdc-list-item--selected",WITH_LEADING_ICON:"mdc-select--with-leading-icon",INVALID:"mdc-select--invalid",REQUIRED:"mdc-select--required"},r={ARIA_CONTROLS:"aria-controls",CHANGE_EVENT:"MDCSelect:change",SELECTED_ITEM_SELECTOR:"."+i.SELECTED_ITEM_CLASS,LEADING_ICON_SELECTOR:".mdc-select__icon",SELECTED_TEXT_SELECTOR:".mdc-select__selected-text",HIDDEN_INPUT_SELECTOR:'input[type="hidden"]',MENU_SELECTOR:".mdc-select__menu",LINE_RIPPLE_SELECTOR:".mdc-line-ripple",LABEL_SELECTOR:".mdc-floating-label",NATIVE_CONTROL_SELECTOR:".mdc-select__native-control",OUTLINE_SELECTOR:".mdc-notched-outline",ENHANCED_VALUE_ATTR:"data-value",ARIA_SELECTED_ATTR:"aria-selected"},a={LABEL_SCALE:.75}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"MDCSelect",function(){return y});var i=n(7),r=n(28),a=n(31),o=n(48),s=n(4),c=n(36),u=n(130),l=n(75),d=(n(72),n(51)),f=n(52),h=n(17),_=n(27);n.d(t,"MDCSelectFoundation",function(){return u.a});var p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},v=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();
/**
       * @license
       * Copyright 2016 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */
var m=["required","aria-required"],y=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,i=Array(n),r=0;r<n;r++)i[r]=arguments[r];var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i)));return a.nativeControl_,a.selectedText_,a.hiddenInput_,a.leadingIcon_,a.helperText_,a.menuElement_,a.menu_,a.ripple,a.lineRipple_,a.label_,a.outline_,a.handleChange_,a.handleFocus_,a.handleBlur_,a.handleClick_,a.handleKeydown_,a.handleMenuOpened_,a.handleMenuClosed_,a.handleMenuSelected_,a.menuOpened_=!1,a.validationObserver_,a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i["MDCComponent"]),v(t,[{key:"layout",value:function(){this.foundation_.layout()}},{key:"initialize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return new r.MDCFloatingLabel(e)},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e){return new a.MDCLineRipple(e)},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){return new c.MDCNotchedOutline(e)},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(e){return new o.MDCMenu(e)},s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:function(e){return new d.a(e)},u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:function(e){return new f.a(e)};this.nativeControl_=this.root_.querySelector(l.c.NATIVE_CONTROL_SELECTOR),this.selectedText_=this.root_.querySelector(l.c.SELECTED_TEXT_SELECTOR),this.selectedText_&&this.enhancedSelectSetup_(i);var h=this.root_.querySelector(l.c.LABEL_SELECTOR);h&&(this.label_=e(h));var _=this.root_.querySelector(l.c.LINE_RIPPLE_SELECTOR);_&&(this.lineRipple_=t(_));var p=this.root_.querySelector(l.c.OUTLINE_SELECTOR);p&&(this.outline_=n(p));var v=this.root_.querySelector(l.c.LEADING_ICON_SELECTOR);v&&(this.root_.classList.add(l.a.WITH_LEADING_ICON),this.leadingIcon_=s(v),this.menuElement_&&this.menuElement_.classList.add(l.a.WITH_LEADING_ICON));var m=this.nativeControl_?this.nativeControl_:this.selectedText_;if(m.hasAttribute(l.c.ARIA_CONTROLS)){var y=document.getElementById(m.getAttribute(l.c.ARIA_CONTROLS));y&&(this.helperText_=u(y))}this.root_.classList.contains(l.a.OUTLINED)||(this.ripple=this.initRipple_()),this.initialSyncRequiredState_(),this.addMutationObserverForRequired_()}},{key:"enhancedSelectSetup_",value:function(e){var t=this.root_.classList.contains(l.a.DISABLED);this.selectedText_.setAttribute("tabindex",t?"-1":"0"),this.hiddenInput_=this.root_.querySelector(l.c.HIDDEN_INPUT_SELECTOR),this.menuElement_=this.root_.querySelector(l.c.MENU_SELECTOR),this.menu_=e(this.menuElement_),this.menu_.hoistMenuToBody(),this.menu_.setAnchorElement(this.root_),this.menu_.setAnchorCorner(h.a.BOTTOM_START)}},{key:"initRipple_",value:function(){var e=this.nativeControl_?this.nativeControl_:this.selectedText_,t=p(s.MDCRipple.createAdapter(this),{registerInteractionHandler:function(t,n){return e.addEventListener(t,n)},deregisterInteractionHandler:function(t,n){return e.removeEventListener(t,n)}}),n=new s.MDCRippleFoundation(t);return new s.MDCRipple(this.root_,n)}},{key:"initialSyncWithDOM",value:function(){var e=this;this.handleChange_=function(){return e.foundation_.handleChange(!0)},this.handleFocus_=function(){return e.foundation_.handleFocus()},this.handleBlur_=function(){return e.foundation_.handleBlur()},this.handleClick_=function(t){e.selectedText_&&e.selectedText_.focus(),e.foundation_.handleClick(e.getNormalizedXCoordinate_(t))},this.handleKeydown_=function(t){return e.foundation_.handleKeydown(t)},this.handleMenuSelected_=function(t){return e.selectedIndex=t.detail.index},this.handleMenuOpened_=function(){e.selectedIndex>=0&&e.menu_.items[e.selectedIndex].focus()},this.handleMenuClosed_=function(){e.menuOpened_=!1,e.selectedText_.removeAttribute("aria-expanded"),document.activeElement!==e.selectedText_&&e.foundation_.handleBlur()};var t=this.nativeControl_?this.nativeControl_:this.selectedText_;if(t.addEventListener("change",this.handleChange_),t.addEventListener("focus",this.handleFocus_),t.addEventListener("blur",this.handleBlur_),["mousedown","touchstart"].forEach(function(n){t.addEventListener(n,e.handleClick_)}),this.menuElement_)if(this.selectedText_.addEventListener("keydown",this.handleKeydown_),this.menu_.listen(h.e.CLOSED_EVENT,this.handleMenuClosed_),this.menu_.listen(h.e.OPENED_EVENT,this.handleMenuOpened_),this.menu_.listen(_.b.SELECTED_EVENT,this.handleMenuSelected_),this.hiddenInput_&&this.hiddenInput_.value)this.getEnhancedSelectAdapterMethods_().setValue(this.hiddenInput_.value);else if(this.menuElement_.querySelector(l.c.SELECTED_ITEM_SELECTOR)){var n=this.getEnhancedSelectAdapterMethods_();n.setValue(n.getValue())}this.foundation_.handleChange(!1),(this.root_.classList.contains(l.a.DISABLED)||this.nativeControl_&&this.nativeControl_.disabled)&&(this.disabled=!0)}},{key:"destroy",value:function(){var e=this,n=this.nativeControl_?this.nativeControl_:this.selectedText_;n.removeEventListener("change",this.handleChange_),n.removeEventListener("focus",this.handleFocus_),n.removeEventListener("blur",this.handleBlur_),n.removeEventListener("keydown",this.handleKeydown_),["mousedown","touchstart"].forEach(function(t){n.removeEventListener(t,e.handleClick_)}),this.menu_&&(this.menu_.unlisten(h.e.CLOSED_EVENT,this.handleMenuClosed_),this.menu_.unlisten(h.e.OPENED_EVENT,this.handleMenuOpened_),this.menu_.unlisten(_.b.SELECTED_EVENT,this.handleMenuSelected_),this.menu_.destroy()),this.ripple&&this.ripple.destroy(),this.outline_&&this.outline_.destroy(),this.leadingIcon_&&this.leadingIcon_.destroy(),this.helperText_&&this.helperText_.destroy(),this.validationObserver_&&this.validationObserver_.disconnect(),function e(t,n,i){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var a=Object.getPrototypeOf(t);return null===a?void 0:e(a,n,i)}if("value"in r)return r.value;var o=r.get;return void 0!==o?o.call(i):void 0}(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this)}},{key:"getDefaultFoundation",value:function(){return new u.a(p(this.nativeControl_?this.getNativeSelectAdapterMethods_():this.getEnhancedSelectAdapterMethods_(),this.getCommonAdapterMethods_(),this.getOutlineAdapterMethods_(),this.getLabelAdapterMethods_()),this.getFoundationMap_())}},{key:"getNativeSelectAdapterMethods_",value:function(){var e=this;return{getValue:function(){return e.nativeControl_.value},setValue:function(t){return e.nativeControl_.value=t},openMenu:function(){},closeMenu:function(){},isMenuOpen:function(){return!1},setSelectedIndex:function(t){e.nativeControl_.selectedIndex=t},setDisabled:function(t){return e.nativeControl_.disabled=t},setValid:function(t){t?e.root_.classList.remove(l.a.INVALID):e.root_.classList.add(l.a.INVALID)},checkValidity:function(){return e.nativeControl_.checkValidity()}}}},{key:"getEnhancedSelectAdapterMethods_",value:function(){var e=this;return{getValue:function(){var t=e.menuElement_.querySelector(l.c.SELECTED_ITEM_SELECTOR);return t&&t.hasAttribute(l.c.ENHANCED_VALUE_ATTR)?t.getAttribute(l.c.ENHANCED_VALUE_ATTR):""},setValue:function(t){var n=e.menuElement_.querySelector("["+l.c.ENHANCED_VALUE_ATTR+'="'+t+'"]');e.setEnhancedSelectedIndex_(n?e.menu_.items.indexOf(n):-1)},openMenu:function(){e.menu_&&!e.menu_.open&&(e.menu_.open=!0,e.menuOpened_=!0,e.selectedText_.setAttribute("aria-expanded","true"))},closeMenu:function(){e.menu_&&e.menu_.open&&(e.menu_.open=!1)},isMenuOpen:function(){return e.menu_&&e.menuOpened_},setSelectedIndex:function(t){e.setEnhancedSelectedIndex_(t)},setDisabled:function(t){e.selectedText_.setAttribute("tabindex",t?"-1":"0"),e.selectedText_.setAttribute("aria-disabled",t.toString()),e.hiddenInput_&&(e.hiddenInput_.disabled=t)},checkValidity:function(){var t=e.root_.classList;return!(t.contains(l.a.REQUIRED)&&!t.contains(l.a.DISABLED))||-1!==e.selectedIndex&&(0!==e.selectedIndex||e.value)},setValid:function(t){e.selectedText_.setAttribute("aria-invalid",(!t).toString()),t?e.root_.classList.remove(l.a.INVALID):e.root_.classList.add(l.a.INVALID)}}}},{key:"getCommonAdapterMethods_",value:function(){var e=this;return{addClass:function(t){return e.root_.classList.add(t)},removeClass:function(t){return e.root_.classList.remove(t)},hasClass:function(t){return e.root_.classList.contains(t)},isRtl:function(){return"rtl"===window.getComputedStyle(e.root_).getPropertyValue("direction")},setRippleCenter:function(t){return e.lineRipple_&&e.lineRipple_.setRippleCenter(t)},activateBottomLine:function(){return e.lineRipple_&&e.lineRipple_.activate()},deactivateBottomLine:function(){return e.lineRipple_&&e.lineRipple_.deactivate()},notifyChange:function(t){var n=e.selectedIndex;e.emit(l.c.CHANGE_EVENT,{value:t,index:n},!0)}}}},{key:"getOutlineAdapterMethods_",value:function(){var e=this;return{hasOutline:function(){return!!e.outline_},notchOutline:function(t,n){e.outline_&&e.outline_.notch(t,n)},closeOutline:function(){e.outline_&&e.outline_.closeNotch()}}}},{key:"getLabelAdapterMethods_",value:function(){var e=this;return{floatLabel:function(t){e.label_&&e.label_.float(t)},getLabelWidth:function(){return e.label_?e.label_.getWidth():0}}}},{key:"getNormalizedXCoordinate_",value:function(e){var t=e.target.getBoundingClientRect();return e.clientX-t.left}},{key:"getFoundationMap_",value:function(){return{leadingIcon:this.leadingIcon_?this.leadingIcon_.foundation:void 0,helperText:this.helperText_?this.helperText_.foundation:void 0}}},{key:"setEnhancedSelectedIndex_",value:function(e){var t=this.menu_.items[e];this.selectedText_.textContent=t?t.textContent.trim():"";var n=this.menuElement_.querySelector(l.c.SELECTED_ITEM_SELECTOR);n&&(n.classList.remove(l.a.SELECTED_ITEM_CLASS),n.removeAttribute(l.c.ARIA_SELECTED_ATTR)),t&&(t.classList.add(l.a.SELECTED_ITEM_CLASS),t.setAttribute(l.c.ARIA_SELECTED_ATTR,"true")),this.hiddenInput_&&(this.hiddenInput_.value=t&&t.getAttribute(l.c.ENHANCED_VALUE_ATTR)||""),this.layout()}},{key:"initialSyncRequiredState_",value:function(){var e=this.nativeControl_?this.nativeControl_:this.selectedText_;(e.required||"true"===e.getAttribute("aria-required")||this.root_.classList.contains(l.a.REQUIRED))&&(this.nativeControl_?this.nativeControl_.required=!0:this.selectedText_.setAttribute("aria-required","true"),this.root_.classList.add(l.a.REQUIRED))}},{key:"addMutationObserverForRequired_",value:function(){var e=this,t=new MutationObserver(function(t){return function(t){t.some(function(t){if(m.indexOf(t)>-1)return e.selectedText_?"true"===e.selectedText_.getAttribute("aria-required")?e.root_.classList.add(l.a.REQUIRED):e.root_.classList.remove(l.a.REQUIRED):e.nativeControl_.required?e.root_.classList.add(l.a.REQUIRED):e.root_.classList.remove(l.a.REQUIRED),!0})}(function(e){return e.map(function(e){return e.attributeName})}(t))}),n=this.nativeControl_?this.nativeControl_:this.selectedText_;t.observe(n,{attributes:!0}),this.validationObserver_=t}},{key:"value",get:function(){return this.foundation_.getValue()},set:function(e){this.foundation_.setValue(e)}},{key:"selectedIndex",get:function(){var e=void 0;if(this.menuElement_){var t=this.menuElement_.querySelector(l.c.SELECTED_ITEM_SELECTOR);e=this.menu_.items.indexOf(t)}else e=this.nativeControl_.selectedIndex;return e},set:function(e){this.foundation_.setSelectedIndex(e)}},{key:"disabled",get:function(){return this.root_.classList.contains(l.a.DISABLED)||!!this.nativeControl_&&this.nativeControl_.disabled},set:function(e){this.foundation_.setDisabled(e)}},{key:"leadingIconAriaLabel",set:function(e){this.foundation_.setLeadingIconAriaLabel(e)}},{key:"leadingIconContent",set:function(e){this.foundation_.setLeadingIconContent(e)}},{key:"helperTextContent",set:function(e){this.foundation_.setHelperTextContent(e)}},{key:"valid",set:function(e){this.foundation_.setValid(e)},get:function(){return this.foundation_.isValid()}},{key:"required",set:function(e){this.nativeControl_?this.nativeControl_.required=e:e?this.selectedText_.setAttribute("aria-required",e.toString()):this.selectedText_.removeAttribute("aria-required")},get:function(){return this.nativeControl_?this.nativeControl_.required:"true"===this.selectedText_.getAttribute("aria-required")}}],[{key:"attachTo",value:function(e){return new t(e)}}]),t}()},function(e,t,n){"use strict";var i=n(7),r=(n(72),n(51),n(52),n(75)),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();
/**
       * @license
       * Copyright 2016 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */
var s=function(e){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,a(t.defaultAdapter,e)));return i.leadingIcon_=n.leadingIcon,i.helperText_=n.helperText,i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i["MDCFoundation"]),o(t,null,[{key:"cssClasses",get:function(){return r.a}},{key:"numbers",get:function(){return r.b}},{key:"strings",get:function(){return r.c}},{key:"defaultAdapter",get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},activateBottomLine:function(){},deactivateBottomLine:function(){},setValue:function(){},getValue:function(){},isRtl:function(){return!1},floatLabel:function(){},getLabelWidth:function(){},hasOutline:function(){return!1},notchOutline:function(){},closeOutline:function(){},openMenu:function(){},closeMenu:function(){},isMenuOpen:function(){},setSelectedIndex:function(){},setDisabled:function(){},setRippleCenter:function(){},notifyChange:function(){},checkValidity:function(){},setValid:function(){}}}}]),o(t,[{key:"setSelectedIndex",value:function(e){this.adapter_.setSelectedIndex(e),this.adapter_.closeMenu();this.handleChange(!0)}},{key:"setValue",value:function(e){this.adapter_.setValue(e);this.handleChange(!0)}},{key:"getValue",value:function(){return this.adapter_.getValue()}},{key:"setDisabled",value:function(e){e?this.adapter_.addClass(r.a.DISABLED):this.adapter_.removeClass(r.a.DISABLED),this.adapter_.setDisabled(e),this.adapter_.closeMenu(),this.leadingIcon_&&this.leadingIcon_.setDisabled(e)}},{key:"setHelperTextContent",value:function(e){this.helperText_&&this.helperText_.setContent(e)}},{key:"layout",value:function(){var e=this.getValue().length>0;this.notchOutline(e)}},{key:"handleChange",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=this.getValue(),n=t.length>0,i=this.adapter_.hasClass(r.a.REQUIRED);this.notchOutline(n),this.adapter_.hasClass(r.a.FOCUSED)||this.adapter_.floatLabel(n),e&&(this.adapter_.notifyChange(t),i&&(this.setValid(this.isValid()),this.helperText_&&this.helperText_.setValidity(this.isValid())))}},{key:"handleFocus",value:function(){this.adapter_.addClass(r.a.FOCUSED),this.adapter_.floatLabel(!0),this.notchOutline(!0),this.adapter_.activateBottomLine(),this.helperText_&&this.helperText_.showToScreenReader()}},{key:"handleBlur",value:function(){this.adapter_.isMenuOpen()||(this.adapter_.removeClass(r.a.FOCUSED),this.handleChange(!1),this.adapter_.deactivateBottomLine(),this.adapter_.hasClass(r.a.REQUIRED)&&(this.setValid(this.isValid()),this.helperText_&&this.helperText_.setValidity(this.isValid())))}},{key:"handleClick",value:function(e){this.adapter_.isMenuOpen()||(this.adapter_.setRippleCenter(e),this.adapter_.openMenu())}},{key:"handleKeydown",value:function(e){if(!this.adapter_.isMenuOpen()){var t="Enter"===e.key||13===e.keyCode,n="Space"===e.key||32===e.keyCode,i="ArrowUp"===e.key||38===e.keyCode,a="ArrowDown"===e.key||40===e.keyCode;this.adapter_.hasClass(r.a.FOCUSED)&&(t||n||i||a)&&(this.adapter_.openMenu(),e.preventDefault())}}},{key:"notchOutline",value:function(e){if(this.adapter_.hasOutline()){var t=this.adapter_.hasClass(r.a.FOCUSED);if(e){var n=r.b.LABEL_SCALE,i=this.adapter_.getLabelWidth()*n,a=this.adapter_.isRtl();this.adapter_.notchOutline(i,a)}else t||this.adapter_.closeOutline()}}},{key:"setLeadingIconAriaLabel",value:function(e){this.leadingIcon_&&this.leadingIcon_.setAriaLabel(e)}},{key:"setLeadingIconContent",value:function(e){this.leadingIcon_&&this.leadingIcon_.setContent(e)}},{key:"setValid",value:function(e){this.adapter_.setValid(e)}},{key:"isValid",value:function(){return this.adapter_.checkValidity()}}]),t}();t.a=s},function(e,t,n){"use strict";var i=n(0),r=(n(73),n(132)),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();
/**
       * @license
       * Copyright 2018 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */
var s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,a(t.defaultAdapter,e)));return n.savedTabIndex_=null,n.interactionHandler_=function(e){return n.handleInteraction(e)},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i["a"]),o(t,null,[{key:"strings",get:function(){return r.a}},{key:"defaultAdapter",get:function(){return{getAttr:function(){},setAttr:function(){},removeAttr:function(){},setContent:function(){},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){},notifyIconAction:function(){}}}}]),o(t,[{key:"init",value:function(){var e=this;this.savedTabIndex_=this.adapter_.getAttr("tabindex"),["click","keydown"].forEach(function(t){e.adapter_.registerInteractionHandler(t,e.interactionHandler_)})}},{key:"destroy",value:function(){var e=this;["click","keydown"].forEach(function(t){e.adapter_.deregisterInteractionHandler(t,e.interactionHandler_)})}},{key:"setDisabled",value:function(e){this.savedTabIndex_&&(e?(this.adapter_.setAttr("tabindex","-1"),this.adapter_.removeAttr("role")):(this.adapter_.setAttr("tabindex",this.savedTabIndex_),this.adapter_.setAttr("role",r.a.ICON_ROLE)))}},{key:"setAriaLabel",value:function(e){this.adapter_.setAttr("aria-label",e)}},{key:"setContent",value:function(e){this.adapter_.setContent(e)}},{key:"handleInteraction",value:function(e){"click"!==e.type&&"Enter"!==e.key&&13!==e.keyCode||this.adapter_.notifyIconAction()}}]),t}();t.a=s},function(e,t,n){"use strict";n.d(t,"a",function(){return i});
/**
       * @license
       * Copyright 2018 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */
var i={ICON_EVENT:"MDCSelect:icon",ICON_ROLE:"button"}},function(e,t,n){"use strict";var i=n(0),r=(n(74),n(134)),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();
/**
       * @license
       * Copyright 2018 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */
var s=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,a(t.defaultAdapter,e)))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i["a"]),o(t,null,[{key:"cssClasses",get:function(){return r.a}},{key:"strings",get:function(){return r.b}},{key:"defaultAdapter",get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){},setAttr:function(){},removeAttr:function(){},setContent:function(){}}}}]),o(t,[{key:"setContent",value:function(e){this.adapter_.setContent(e)}},{key:"setPersistent",value:function(e){e?this.adapter_.addClass(r.a.HELPER_TEXT_PERSISTENT):this.adapter_.removeClass(r.a.HELPER_TEXT_PERSISTENT)}},{key:"setValidation",value:function(e){e?this.adapter_.addClass(r.a.HELPER_TEXT_VALIDATION_MSG):this.adapter_.removeClass(r.a.HELPER_TEXT_VALIDATION_MSG)}},{key:"showToScreenReader",value:function(){this.adapter_.removeAttr(r.b.ARIA_HIDDEN)}},{key:"setValidity",value:function(e){var t=this.adapter_.hasClass(r.a.HELPER_TEXT_PERSISTENT),n=this.adapter_.hasClass(r.a.HELPER_TEXT_VALIDATION_MSG)&&!e;n?this.adapter_.setAttr(r.b.ROLE,"alert"):this.adapter_.removeAttr(r.b.ROLE),t||n||this.hide_()}},{key:"hide_",value:function(){this.adapter_.setAttr(r.b.ARIA_HIDDEN,"true")}}]),t}();t.a=s},function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"a",function(){return r});
/**
       * @license
       * Copyright 2018 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */
var i={ARIA_HIDDEN:"aria-hidden",ROLE:"role"},r={HELPER_TEXT_PERSISTENT:"mdc-select-helper-text--persistent",HELPER_TEXT_VALIDATION_MSG:"mdc-select-helper-text--validation-msg"}}])})},37:function(e,t,n){"use strict";n.r(t);var i=n(1),r=n(21),a=(n(4),n(13)),o=n(2),s=n(3),c=n(12);n(5);const u=new Audio("https://s3.amazonaws.com/files.enjin.com/632721/material/audio/dont-blame-you.mp3");function l(){document.querySelectorAll(".bbcode_url").forEach(e=>e.setAttribute("target","_blank"))}function d(){const e=document.querySelector('.app_inner_action_approve[data-msg~="reject"]');e&&e.addEventListener("click",()=>u.play())}function f(e){new MutationObserver(t=>{e.classList.contains("v2_system_dashboard")&&(!function(){const e=document.querySelector(".fa.fa-trash"),t=document.querySelector(".app_header"),n=document.querySelector(".app_sidebar_meta");if(n&&!n.classList.contains("meta-initialized")){n.insertAdjacentHTML("afterbegin",'\n<div class="mdc-select demo-width-class">\n    <input type="hidden" name="enhanced-select">\n    <i class="mdc-select__dropdown-icon"></i>\n    <div class="mdc-select__selected-text"></div>\n    <div class="mdc-select__menu mdc-menu mdc-menu-surface demo-width-class">\n        <ul class="mdc-list">\n            <li class="mdc-list-item mdc-list-item--selected" data-value="" aria-selected="true">\n            </li>\n            <li class="mdc-list-item" data-value="grains">\n                Bread, Cereal, Rice, and Pasta\n            </li>\n            <li class="mdc-list-item" data-value="vegetables">\n                Vegetables\n            </li>\n            <li class="mdc-list-item" data-value="fruit">\n                Fruit\n            </li>\n        </ul>\n    </div>\n    <span class="mdc-floating-label">Pick a Food Group</span>\n    <div class="mdc-line-ripple"></div>\n</div>\n    \x3c!--<div class="sidebar-meta">\n      <div class="mdc-select">\n        <i class="mdc-select__dropdown-icon"></i>\n        <select class="mdc-select__native-control">\n          <option value="/dashboard/applications">\n            Open\n          </option>\n          <option value="/dashboard/applications/general">\n            General\n          </option>\n          <option value="/dashboard/applications/approved">\n            Approved\n          </option>\n          <option value="/dashboard/applications/rejected">\n            Rejected\n          </option>\n          <option value="/dashboard/applications/archive">\n            Archived\n          </option>\n          <option value="/dashboard/applications/trash">\n            Trash\n          </option>\n        </select>\n        <div class="mdc-line-ripple"></div>\n      </div>\n      <div class="mdc-button mdc-button--raised">\n        My Application\n      </div>\n    </div>--\x3e\n    '),n.classList.add("meta-initialized");const e=n.querySelector(".mdc-select");console.log(e);const t=new r.MDCSelect(e);activeHeader&&activeHeader.href,t.listen("change",()=>{$.fn.systemDashboardLoadPage(t.value)}),new i.MDCRipple(buttonElem),buttonElem.addEventListener("click",()=>{$.fn.systemDashboardLoadPage("/dashboard/applications/mine")})}e&&t&&!t.classList.contains("app_header_initialized")&&(e.parentNode.insertAdjacentText("beforeend","Trash"),e.remove(),document.querySelector(".app_header").classList.add("app_header_initialized")),document.querySelectorAll(".menu_link, .app_sidebar_block").forEach(e=>i.MDCRipple.attachTo(e))}(),t.forEach(e=>{e.removedNodes.forEach(e=>{!e.classList||"app_inner_area m_system-dashboard"!=e.classList.value&&"applications"!=e.classList.value||Object(c.a)()}),e.addedNodes.forEach(e=>{e.classList&&e.contains(e.querySelector(".character_list"))&&(d(),Object(c.b)(),h(),_(),l())})}))}).observe(e,{childList:!0,subtree:!0})}function h(){document.querySelectorAll('img[src^="https://assets-cloud.enjin.com/users/"],img[src^="https://resources.enjin.com/profile/images/"],img[src$="site_logo/small.png"]').forEach(e=>e.src=e.src.replace("small","medium")),document.querySelectorAll('img[src*="/module_appform/thumb"]').forEach(e=>e.src=e.src.replace("thumb","full"))}function _(){document.querySelectorAll(".images a").forEach(function(e){e.onclick=function(t){t.preventDefault(),a.create(`<img src='${e.getAttribute("href")}'>`).show()}})}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".v2_system_dashboard");Object(o.a)(),function(e){const t=document.querySelector(".dashboard-navbar"),n=t.querySelector(".mdc-tab-bar"),i=new s.MDCTabBar(n),r=window.location.pathname.split("/")[2],a=document.querySelector('.mdc-tab[href*="'+r+'"]'),o=document.querySelector(".hero");o&&o.classList.add("hero-nudge"),a&&(a.classList.add("mdc-tab--active"),a.querySelector(".mdc-tab-indicator").classList.add("mdc-tab-indicator--active"));e&&(t.classList.add("show"),document.querySelector('.menu_link[href="/dashboard/website/create"]')&&n.querySelector('[href="/dashboard/website"]').remove(),i.getTabElements_().forEach(e=>{const t=e.getAttribute("href");e.addEventListener("click",e=>{e.preventDefault(),$.fn.systemDashboardLoadPage(t)})}))}(e),d(),Object(c.b)(),h(),_(),l(),f(e)})},9:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var i=n(10);function r(){document.querySelectorAll(".mdc-linear-progress").forEach(e=>{const t=e.getAttribute("data-scale");new i.MDCLinearProgress(e).progress=t})}}});