(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{"00ee":function(e,t,n){var i=n("b622"),r=i("toStringTag"),s={};s[r]="z",e.exports="[object z]"===String(s)},"01b4":function(e,t){var n=function(){this.head=null,this.tail=null};n.prototype={add:function(e){var t={item:e,next:null};this.head?this.tail.next=t:this.head=t,this.tail=t},get:function(){var e=this.head;if(e)return this.head=e.next,this.tail===e&&(this.tail=null),e.item}},e.exports=n},"0366":function(e,t,n){var i=n("e330"),r=n("59ed"),s=n("40d5"),o=i(i.bind);e.exports=function(e,t){return r(e),void 0===t?e:s?o(e,t):function(){return e.apply(t,arguments)}}},"06cf":function(e,t,n){var i=n("83ab"),r=n("c65b"),s=n("d1e7"),o=n("5c6c"),a=n("fc6a"),c=n("a04b"),l=n("1a2d"),u=n("0cfb"),h=Object.getOwnPropertyDescriptor;t.f=i?h:function(e,t){if(e=a(e),t=c(t),u)try{return h(e,t)}catch(n){}if(l(e,t))return o(!r(s.f,e,t),e[t])}},"07fa":function(e,t,n){var i=n("50c4");e.exports=function(e){return i(e.length)}},"0b42":function(e,t,n){var i=n("da84"),r=n("e8b5"),s=n("68ee"),o=n("861d"),a=n("b622"),c=a("species"),l=i.Array;e.exports=function(e){var t;return r(e)&&(t=e.constructor,s(t)&&(t===l||r(t.prototype))?t=void 0:o(t)&&(t=t[c],null===t&&(t=void 0))),void 0===t?l:t}},"0cfb":function(e,t,n){var i=n("83ab"),r=n("d039"),s=n("cc12");e.exports=!i&&!r((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},"0d51":function(e,t,n){var i=n("da84"),r=i.String;e.exports=function(e){try{return r(e)}catch(t){return"Object"}}},"0deb":function(e,t,n){
/*!
  * Bootstrap v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(t,n){e.exports=n()}(0,(function(){"use strict";const e="transitionend",t=e=>{let t=e.getAttribute("data-bs-target");if(!t||"#"===t){let n=e.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n="#"+n.split("#")[1]),t=n&&"#"!==n?n.trim():null}return t},n=e=>{const n=t(e);return n&&document.querySelector(n)?n:null},i=e=>{const n=t(e);return n?document.querySelector(n):null},r=t=>{t.dispatchEvent(new Event(e))},s=e=>!(!e||"object"!=typeof e)&&(void 0!==e.jquery&&(e=e[0]),void 0!==e.nodeType),o=e=>s(e)?e.jquery?e[0]:e:"string"==typeof e&&e.length>0?document.querySelector(e):null,a=(e,t,n)=>{Object.keys(n).forEach(i=>{const r=n[i],o=t[i],a=o&&s(o)?"element":null==(c=o)?""+c:{}.toString.call(c).match(/\s([a-z]+)/i)[1].toLowerCase();var c;if(!new RegExp(r).test(a))throw new TypeError(`${e.toUpperCase()}: Option "${i}" provided type "${a}" but expected type "${r}".`)})},c=e=>!(!s(e)||0===e.getClientRects().length)&&"visible"===getComputedStyle(e).getPropertyValue("visibility"),l=e=>!e||e.nodeType!==Node.ELEMENT_NODE||!!e.classList.contains("disabled")||(void 0!==e.disabled?e.disabled:e.hasAttribute("disabled")&&"false"!==e.getAttribute("disabled")),u=e=>{if(!document.documentElement.attachShadow)return null;if("function"==typeof e.getRootNode){const t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?u(e.parentNode):null},h=()=>{},d=e=>{e.offsetHeight},f=()=>{const{jQuery:e}=window;return e&&!document.body.hasAttribute("data-bs-no-jquery")?e:null},p=[],m=()=>"rtl"===document.documentElement.dir,g=e=>{var t;t=()=>{const t=f();if(t){const n=e.NAME,i=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=i,e.jQueryInterface)}},"loading"===document.readyState?(p.length||document.addEventListener("DOMContentLoaded",()=>{p.forEach(e=>e())}),p.push(t)):t()},_=e=>{"function"==typeof e&&e()},v=(t,n,i=!0)=>{if(!i)return void _(t);const s=(e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);const i=Number.parseFloat(t),r=Number.parseFloat(n);return i||r?(t=t.split(",")[0],n=n.split(",")[0],1e3*(Number.parseFloat(t)+Number.parseFloat(n))):0})(n)+5;let o=!1;const a=({target:i})=>{i===n&&(o=!0,n.removeEventListener(e,a),_(t))};n.addEventListener(e,a),setTimeout(()=>{o||r(n)},s)},b=(e,t,n,i)=>{let r=e.indexOf(t);if(-1===r)return e[!n&&i?e.length-1:0];const s=e.length;return r+=n?1:-1,i&&(r=(r+s)%s),e[Math.max(0,Math.min(r,s-1))]},y=/[^.]*(?=\..*)\.|.*/,w=/\..*/,O=/::\d+$/,C={};let E=1;const T={mouseenter:"mouseover",mouseleave:"mouseout"},I=/^(mouseenter|mouseleave)/i,k=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function S(e,t){return t&&`${t}::${E++}`||e.uidEvent||E++}function x(e){const t=S(e);return e.uidEvent=t,C[t]=C[t]||{},C[t]}function j(e,t,n=null){const i=Object.keys(e);for(let r=0,s=i.length;r<s;r++){const s=e[i[r]];if(s.originalHandler===t&&s.delegationSelector===n)return s}return null}function N(e,t,n){const i="string"==typeof t,r=i?n:t;let s=R(e);return k.has(s)||(s=e),[i,r,s]}function A(e,t,n,i,r){if("string"!=typeof t||!e)return;if(n||(n=i,i=null),I.test(t)){const e=e=>function(t){if(!t.relatedTarget||t.relatedTarget!==t.delegateTarget&&!t.delegateTarget.contains(t.relatedTarget))return e.call(this,t)};i?i=e(i):n=e(n)}const[s,o,a]=N(t,n,i),c=x(e),l=c[a]||(c[a]={}),u=j(l,o,s?n:null);if(u)return void(u.oneOff=u.oneOff&&r);const h=S(o,t.replace(y,"")),d=s?function(e,t,n){return function i(r){const s=e.querySelectorAll(t);for(let{target:o}=r;o&&o!==this;o=o.parentNode)for(let a=s.length;a--;)if(s[a]===o)return r.delegateTarget=o,i.oneOff&&L.off(e,r.type,t,n),n.apply(o,[r]);return null}}(e,n,i):function(e,t){return function n(i){return i.delegateTarget=e,n.oneOff&&L.off(e,i.type,t),t.apply(e,[i])}}(e,n);d.delegationSelector=s?n:null,d.originalHandler=o,d.oneOff=r,d.uidEvent=h,l[h]=d,e.addEventListener(a,d,s)}function P(e,t,n,i,r){const s=j(t[n],i,r);s&&(e.removeEventListener(n,s,Boolean(r)),delete t[n][s.uidEvent])}function R(e){return e=e.replace(w,""),T[e]||e}const L={on(e,t,n,i){A(e,t,n,i,!1)},one(e,t,n,i){A(e,t,n,i,!0)},off(e,t,n,i){if("string"!=typeof t||!e)return;const[r,s,o]=N(t,n,i),a=o!==t,c=x(e),l=t.startsWith(".");if(void 0!==s){if(!c||!c[o])return;return void P(e,c,o,s,r?n:null)}l&&Object.keys(c).forEach(n=>{!function(e,t,n,i){const r=t[n]||{};Object.keys(r).forEach(s=>{if(s.includes(i)){const i=r[s];P(e,t,n,i.originalHandler,i.delegationSelector)}})}(e,c,n,t.slice(1))});const u=c[o]||{};Object.keys(u).forEach(n=>{const i=n.replace(O,"");if(!a||t.includes(i)){const t=u[n];P(e,c,o,t.originalHandler,t.delegationSelector)}})},trigger(e,t,n){if("string"!=typeof t||!e)return null;const i=f(),r=R(t),s=t!==r,o=k.has(r);let a,c=!0,l=!0,u=!1,h=null;return s&&i&&(a=i.Event(t,n),i(e).trigger(a),c=!a.isPropagationStopped(),l=!a.isImmediatePropagationStopped(),u=a.isDefaultPrevented()),o?(h=document.createEvent("HTMLEvents"),h.initEvent(r,c,!0)):h=new CustomEvent(t,{bubbles:c,cancelable:!0}),void 0!==n&&Object.keys(n).forEach(e=>{Object.defineProperty(h,e,{get:()=>n[e]})}),u&&h.preventDefault(),l&&e.dispatchEvent(h),h.defaultPrevented&&void 0!==a&&a.preventDefault(),h}},D=new Map,M={set(e,t,n){D.has(e)||D.set(e,new Map);const i=D.get(e);i.has(t)||0===i.size?i.set(t,n):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`)},get:(e,t)=>D.has(e)&&D.get(e).get(t)||null,remove(e,t){if(!D.has(e))return;const n=D.get(e);n.delete(t),0===n.size&&D.delete(e)}};class F{constructor(e){(e=o(e))&&(this._element=e,M.set(this._element,this.constructor.DATA_KEY,this))}dispose(){M.remove(this._element,this.constructor.DATA_KEY),L.off(this._element,this.constructor.EVENT_KEY),Object.getOwnPropertyNames(this).forEach(e=>{this[e]=null})}_queueCallback(e,t,n=!0){v(e,t,n)}static getInstance(e){return M.get(o(e),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,"object"==typeof t?t:null)}static get VERSION(){return"5.1.3"}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}static get DATA_KEY(){return"bs."+this.NAME}static get EVENT_KEY(){return"."+this.DATA_KEY}}const U=(e,t="hide")=>{const n="click.dismiss"+e.EVENT_KEY,r=e.NAME;L.on(document,n,`[data-bs-dismiss="${r}"]`,(function(n){if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),l(this))return;const s=i(this)||this.closest("."+r);e.getOrCreateInstance(s)[t]()}))};class q extends F{static get NAME(){return"alert"}close(){if(L.trigger(this._element,"close.bs.alert").defaultPrevented)return;this._element.classList.remove("show");const e=this._element.classList.contains("fade");this._queueCallback(()=>this._destroyElement(),this._element,e)}_destroyElement(){this._element.remove(),L.trigger(this._element,"closed.bs.alert"),this.dispose()}static jQueryInterface(e){return this.each((function(){const t=q.getOrCreateInstance(this);if("string"==typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}U(q,"close"),g(q);const H='[data-bs-toggle="button"]';class W extends F{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(e){return this.each((function(){const t=W.getOrCreateInstance(this);"toggle"===e&&t[e]()}))}}function V(e){return"true"===e||"false"!==e&&(e===Number(e).toString()?Number(e):""===e||"null"===e?null:e)}function B(e){return e.replace(/[A-Z]/g,e=>"-"+e.toLowerCase())}L.on(document,"click.bs.button.data-api",H,e=>{e.preventDefault();const t=e.target.closest(H);W.getOrCreateInstance(t).toggle()}),g(W);const z={setDataAttribute(e,t,n){e.setAttribute("data-bs-"+B(t),n)},removeDataAttribute(e,t){e.removeAttribute("data-bs-"+B(t))},getDataAttributes(e){if(!e)return{};const t={};return Object.keys(e.dataset).filter(e=>e.startsWith("bs")).forEach(n=>{let i=n.replace(/^bs/,"");i=i.charAt(0).toLowerCase()+i.slice(1,i.length),t[i]=V(e.dataset[n])}),t},getDataAttribute:(e,t)=>V(e.getAttribute("data-bs-"+B(t))),offset(e){const t=e.getBoundingClientRect();return{top:t.top+window.pageYOffset,left:t.left+window.pageXOffset}},position:e=>({top:e.offsetTop,left:e.offsetLeft})},$={find:(e,t=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(t,e)),findOne:(e,t=document.documentElement)=>Element.prototype.querySelector.call(t,e),children:(e,t)=>[].concat(...e.children).filter(e=>e.matches(t)),parents(e,t){const n=[];let i=e.parentNode;for(;i&&i.nodeType===Node.ELEMENT_NODE&&3!==i.nodeType;)i.matches(t)&&n.push(i),i=i.parentNode;return n},prev(e,t){let n=e.previousElementSibling;for(;n;){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling;for(;n;){if(n.matches(t))return[n];n=n.nextElementSibling}return[]},focusableChildren(e){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(e=>e+':not([tabindex^="-"])').join(", ");return this.find(t,e).filter(e=>!l(e)&&c(e))}},G="carousel",K={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},Y={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},J="next",Q="prev",X="left",Z="right",ee={ArrowLeft:Z,ArrowRight:X},te="slid.bs.carousel",ne="active",ie=".active.carousel-item";class re extends F{constructor(e,t){super(e),this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(t),this._indicatorsElement=$.findOne(".carousel-indicators",this._element),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=Boolean(window.PointerEvent),this._addEventListeners()}static get Default(){return K}static get NAME(){return G}next(){this._slide(J)}nextWhenVisible(){!document.hidden&&c(this._element)&&this.next()}prev(){this._slide(Q)}pause(e){e||(this._isPaused=!0),$.findOne(".carousel-item-next, .carousel-item-prev",this._element)&&(r(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null}cycle(e){e||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config&&this._config.interval&&!this._isPaused&&(this._updateInterval(),this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))}to(e){this._activeElement=$.findOne(ie,this._element);const t=this._getItemIndex(this._activeElement);if(e>this._items.length-1||e<0)return;if(this._isSliding)return void L.one(this._element,te,()=>this.to(e));if(t===e)return this.pause(),void this.cycle();const n=e>t?J:Q;this._slide(n,this._items[e])}_getConfig(e){return e={...K,...z.getDataAttributes(this._element),..."object"==typeof e?e:{}},a(G,e,Y),e}_handleSwipe(){const e=Math.abs(this.touchDeltaX);if(e<=40)return;const t=e/this.touchDeltaX;this.touchDeltaX=0,t&&this._slide(t>0?Z:X)}_addEventListeners(){this._config.keyboard&&L.on(this._element,"keydown.bs.carousel",e=>this._keydown(e)),"hover"===this._config.pause&&(L.on(this._element,"mouseenter.bs.carousel",e=>this.pause(e)),L.on(this._element,"mouseleave.bs.carousel",e=>this.cycle(e))),this._config.touch&&this._touchSupported&&this._addTouchEventListeners()}_addTouchEventListeners(){const e=e=>this._pointerEvent&&("pen"===e.pointerType||"touch"===e.pointerType),t=t=>{e(t)?this.touchStartX=t.clientX:this._pointerEvent||(this.touchStartX=t.touches[0].clientX)},n=e=>{this.touchDeltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this.touchStartX},i=t=>{e(t)&&(this.touchDeltaX=t.clientX-this.touchStartX),this._handleSwipe(),"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(e=>this.cycle(e),500+this._config.interval))};$.find(".carousel-item img",this._element).forEach(e=>{L.on(e,"dragstart.bs.carousel",e=>e.preventDefault())}),this._pointerEvent?(L.on(this._element,"pointerdown.bs.carousel",e=>t(e)),L.on(this._element,"pointerup.bs.carousel",e=>i(e)),this._element.classList.add("pointer-event")):(L.on(this._element,"touchstart.bs.carousel",e=>t(e)),L.on(this._element,"touchmove.bs.carousel",e=>n(e)),L.on(this._element,"touchend.bs.carousel",e=>i(e)))}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;const t=ee[e.key];t&&(e.preventDefault(),this._slide(t))}_getItemIndex(e){return this._items=e&&e.parentNode?$.find(".carousel-item",e.parentNode):[],this._items.indexOf(e)}_getItemByOrder(e,t){const n=e===J;return b(this._items,t,n,this._config.wrap)}_triggerSlideEvent(e,t){const n=this._getItemIndex(e),i=this._getItemIndex($.findOne(ie,this._element));return L.trigger(this._element,"slide.bs.carousel",{relatedTarget:e,direction:t,from:i,to:n})}_setActiveIndicatorElement(e){if(this._indicatorsElement){const t=$.findOne(".active",this._indicatorsElement);t.classList.remove(ne),t.removeAttribute("aria-current");const n=$.find("[data-bs-target]",this._indicatorsElement);for(let i=0;i<n.length;i++)if(Number.parseInt(n[i].getAttribute("data-bs-slide-to"),10)===this._getItemIndex(e)){n[i].classList.add(ne),n[i].setAttribute("aria-current","true");break}}}_updateInterval(){const e=this._activeElement||$.findOne(ie,this._element);if(!e)return;const t=Number.parseInt(e.getAttribute("data-bs-interval"),10);t?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=t):this._config.interval=this._config.defaultInterval||this._config.interval}_slide(e,t){const n=this._directionToOrder(e),i=$.findOne(ie,this._element),r=this._getItemIndex(i),s=t||this._getItemByOrder(n,i),o=this._getItemIndex(s),a=Boolean(this._interval),c=n===J,l=c?"carousel-item-start":"carousel-item-end",u=c?"carousel-item-next":"carousel-item-prev",h=this._orderToDirection(n);if(s&&s.classList.contains(ne))return void(this._isSliding=!1);if(this._isSliding)return;if(this._triggerSlideEvent(s,h).defaultPrevented)return;if(!i||!s)return;this._isSliding=!0,a&&this.pause(),this._setActiveIndicatorElement(s),this._activeElement=s;const f=()=>{L.trigger(this._element,te,{relatedTarget:s,direction:h,from:r,to:o})};if(this._element.classList.contains("slide")){s.classList.add(u),d(s),i.classList.add(l),s.classList.add(l);const e=()=>{s.classList.remove(l,u),s.classList.add(ne),i.classList.remove(ne,u,l),this._isSliding=!1,setTimeout(f,0)};this._queueCallback(e,i,!0)}else i.classList.remove(ne),s.classList.add(ne),this._isSliding=!1,f();a&&this.cycle()}_directionToOrder(e){return[Z,X].includes(e)?m()?e===X?Q:J:e===X?J:Q:e}_orderToDirection(e){return[J,Q].includes(e)?m()?e===Q?X:Z:e===Q?Z:X:e}static carouselInterface(e,t){const n=re.getOrCreateInstance(e,t);let{_config:i}=n;"object"==typeof t&&(i={...i,...t});const r="string"==typeof t?t:i.slide;if("number"==typeof t)n.to(t);else if("string"==typeof r){if(void 0===n[r])throw new TypeError(`No method named "${r}"`);n[r]()}else i.interval&&i.ride&&(n.pause(),n.cycle())}static jQueryInterface(e){return this.each((function(){re.carouselInterface(this,e)}))}static dataApiClickHandler(e){const t=i(this);if(!t||!t.classList.contains("carousel"))return;const n={...z.getDataAttributes(t),...z.getDataAttributes(this)},r=this.getAttribute("data-bs-slide-to");r&&(n.interval=!1),re.carouselInterface(t,n),r&&re.getInstance(t).to(r),e.preventDefault()}}L.on(document,"click.bs.carousel.data-api","[data-bs-slide], [data-bs-slide-to]",re.dataApiClickHandler),L.on(window,"load.bs.carousel.data-api",()=>{const e=$.find('[data-bs-ride="carousel"]');for(let t=0,n=e.length;t<n;t++)re.carouselInterface(e[t],re.getInstance(e[t]))}),g(re);const se="collapse",oe={toggle:!0,parent:null},ae={toggle:"boolean",parent:"(null|element)"},ce="show",le="collapse",ue="collapsing",he="collapsed",de=":scope .collapse .collapse",fe='[data-bs-toggle="collapse"]';class pe extends F{constructor(e,t){super(e),this._isTransitioning=!1,this._config=this._getConfig(t),this._triggerArray=[];const i=$.find(fe);for(let r=0,s=i.length;r<s;r++){const e=i[r],t=n(e),s=$.find(t).filter(e=>e===this._element);null!==t&&s.length&&(this._selector=t,this._triggerArray.push(e))}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return oe}static get NAME(){return se}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e,t=[];if(this._config.parent){const e=$.find(de,this._config.parent);t=$.find(".collapse.show, .collapse.collapsing",this._config.parent).filter(t=>!e.includes(t))}const n=$.findOne(this._selector);if(t.length){const i=t.find(e=>n!==e);if(e=i?pe.getInstance(i):null,e&&e._isTransitioning)return}if(L.trigger(this._element,"show.bs.collapse").defaultPrevented)return;t.forEach(t=>{n!==t&&pe.getOrCreateInstance(t,{toggle:!1}).hide(),e||M.set(t,"bs.collapse",null)});const i=this._getDimension();this._element.classList.remove(le),this._element.classList.add(ue),this._element.style[i]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const r="scroll"+(i[0].toUpperCase()+i.slice(1));this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(ue),this._element.classList.add(le,ce),this._element.style[i]="",L.trigger(this._element,"shown.bs.collapse")},this._element,!0),this._element.style[i]=this._element[r]+"px"}hide(){if(this._isTransitioning||!this._isShown())return;if(L.trigger(this._element,"hide.bs.collapse").defaultPrevented)return;const e=this._getDimension();this._element.style[e]=this._element.getBoundingClientRect()[e]+"px",d(this._element),this._element.classList.add(ue),this._element.classList.remove(le,ce);const t=this._triggerArray.length;for(let n=0;n<t;n++){const e=this._triggerArray[n],t=i(e);t&&!this._isShown(t)&&this._addAriaAndCollapsedClass([e],!1)}this._isTransitioning=!0,this._element.style[e]="",this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(ue),this._element.classList.add(le),L.trigger(this._element,"hidden.bs.collapse")},this._element,!0)}_isShown(e=this._element){return e.classList.contains(ce)}_getConfig(e){return(e={...oe,...z.getDataAttributes(this._element),...e}).toggle=Boolean(e.toggle),e.parent=o(e.parent),a(se,e,ae),e}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const e=$.find(de,this._config.parent);$.find(fe,this._config.parent).filter(t=>!e.includes(t)).forEach(e=>{const t=i(e);t&&this._addAriaAndCollapsedClass([e],this._isShown(t))})}_addAriaAndCollapsedClass(e,t){e.length&&e.forEach(e=>{t?e.classList.remove(he):e.classList.add(he),e.setAttribute("aria-expanded",t)})}static jQueryInterface(e){return this.each((function(){const t={};"string"==typeof e&&/show|hide/.test(e)&&(t.toggle=!1);const n=pe.getOrCreateInstance(this,t);if("string"==typeof e){if(void 0===n[e])throw new TypeError(`No method named "${e}"`);n[e]()}}))}}L.on(document,"click.bs.collapse.data-api",fe,(function(e){("A"===e.target.tagName||e.delegateTarget&&"A"===e.delegateTarget.tagName)&&e.preventDefault();const t=n(this);$.find(t).forEach(e=>{pe.getOrCreateInstance(e,{toggle:!1}).toggle()})})),g(pe);var me="top",ge="bottom",_e="right",ve="left",be="auto",ye=[me,ge,_e,ve],we="start",Oe="end",Ce="clippingParents",Ee="viewport",Te="popper",Ie="reference",ke=ye.reduce((function(e,t){return e.concat([t+"-"+we,t+"-"+Oe])}),[]),Se=[].concat(ye,[be]).reduce((function(e,t){return e.concat([t,t+"-"+we,t+"-"+Oe])}),[]),xe="beforeRead",je="read",Ne="afterRead",Ae="beforeMain",Pe="main",Re="afterMain",Le="beforeWrite",De="write",Me="afterWrite",Fe=[xe,je,Ne,Ae,Pe,Re,Le,De,Me];function Ue(e){return e?(e.nodeName||"").toLowerCase():null}function qe(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function He(e){return e instanceof qe(e).Element||e instanceof Element}function We(e){return e instanceof qe(e).HTMLElement||e instanceof HTMLElement}function Ve(e){return"undefined"!=typeof ShadowRoot&&(e instanceof qe(e).ShadowRoot||e instanceof ShadowRoot)}const Be={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},i=t.attributes[e]||{},r=t.elements[e];We(r)&&Ue(r)&&(Object.assign(r.style,n),Object.keys(i).forEach((function(e){var t=i[e];!1===t?r.removeAttribute(e):r.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var i=t.elements[e],r=t.attributes[e]||{},s=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});We(i)&&Ue(i)&&(Object.assign(i.style,s),Object.keys(r).forEach((function(e){i.removeAttribute(e)})))}))}},requires:["computeStyles"]};function ze(e){return e.split("-")[0]}function $e(e,t){var n=e.getBoundingClientRect();return{width:n.width/1,height:n.height/1,top:n.top/1,right:n.right/1,bottom:n.bottom/1,left:n.left/1,x:n.left/1,y:n.top/1}}function Ge(e){var t=$e(e),n=e.offsetWidth,i=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-i)<=1&&(i=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:i}}function Ke(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&Ve(n)){var i=t;do{if(i&&e.isSameNode(i))return!0;i=i.parentNode||i.host}while(i)}return!1}function Ye(e){return qe(e).getComputedStyle(e)}function Je(e){return["table","td","th"].indexOf(Ue(e))>=0}function Qe(e){return((He(e)?e.ownerDocument:e.document)||window.document).documentElement}function Xe(e){return"html"===Ue(e)?e:e.assignedSlot||e.parentNode||(Ve(e)?e.host:null)||Qe(e)}function Ze(e){return We(e)&&"fixed"!==Ye(e).position?e.offsetParent:null}function et(e){for(var t=qe(e),n=Ze(e);n&&Je(n)&&"static"===Ye(n).position;)n=Ze(n);return n&&("html"===Ue(n)||"body"===Ue(n)&&"static"===Ye(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&We(e)&&"fixed"===Ye(e).position)return null;for(var n=Xe(e);We(n)&&["html","body"].indexOf(Ue(n))<0;){var i=Ye(n);if("none"!==i.transform||"none"!==i.perspective||"paint"===i.contain||-1!==["transform","perspective"].indexOf(i.willChange)||t&&"filter"===i.willChange||t&&i.filter&&"none"!==i.filter)return n;n=n.parentNode}return null}(e)||t}function tt(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}var nt=Math.max,it=Math.min,rt=Math.round;function st(e,t,n){return nt(e,it(t,n))}function ot(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function at(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}const ct={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,i=e.name,r=e.options,s=n.elements.arrow,o=n.modifiersData.popperOffsets,a=ze(n.placement),c=tt(a),l=[ve,_e].indexOf(a)>=0?"height":"width";if(s&&o){var u=function(e,t){return ot("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:at(e,ye))}(r.padding,n),h=Ge(s),d="y"===c?me:ve,f="y"===c?ge:_e,p=n.rects.reference[l]+n.rects.reference[c]-o[c]-n.rects.popper[l],m=o[c]-n.rects.reference[c],g=et(s),_=g?"y"===c?g.clientHeight||0:g.clientWidth||0:0,v=p/2-m/2,b=u[d],y=_-h[l]-u[f],w=_/2-h[l]/2+v,O=st(b,w,y),C=c;n.modifiersData[i]=((t={})[C]=O,t.centerOffset=O-w,t)}},effect:function(e){var t=e.state,n=e.options.element,i=void 0===n?"[data-popper-arrow]":n;null!=i&&("string"!=typeof i||(i=t.elements.popper.querySelector(i)))&&Ke(t.elements.popper,i)&&(t.elements.arrow=i)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function lt(e){return e.split("-")[1]}var ut={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ht(e){var t,n=e.popper,i=e.popperRect,r=e.placement,s=e.variation,o=e.offsets,a=e.position,c=e.gpuAcceleration,l=e.adaptive,u=e.roundOffsets,h=!0===u?function(e){var t=e.x,n=e.y,i=window.devicePixelRatio||1;return{x:rt(rt(t*i)/i)||0,y:rt(rt(n*i)/i)||0}}(o):"function"==typeof u?u(o):o,d=h.x,f=void 0===d?0:d,p=h.y,m=void 0===p?0:p,g=o.hasOwnProperty("x"),_=o.hasOwnProperty("y"),v=ve,b=me,y=window;if(l){var w=et(n),O="clientHeight",C="clientWidth";w===qe(n)&&"static"!==Ye(w=Qe(n)).position&&"absolute"===a&&(O="scrollHeight",C="scrollWidth"),w=w,r!==me&&(r!==ve&&r!==_e||s!==Oe)||(b=ge,m-=w[O]-i.height,m*=c?1:-1),r!==ve&&(r!==me&&r!==ge||s!==Oe)||(v=_e,f-=w[C]-i.width,f*=c?1:-1)}var E,T=Object.assign({position:a},l&&ut);return c?Object.assign({},T,((E={})[b]=_?"0":"",E[v]=g?"0":"",E.transform=(y.devicePixelRatio||1)<=1?"translate("+f+"px, "+m+"px)":"translate3d("+f+"px, "+m+"px, 0)",E)):Object.assign({},T,((t={})[b]=_?m+"px":"",t[v]=g?f+"px":"",t.transform="",t))}const dt={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,i=n.gpuAcceleration,r=void 0===i||i,s=n.adaptive,o=void 0===s||s,a=n.roundOffsets,c=void 0===a||a,l={placement:ze(t.placement),variation:lt(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:r};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,ht(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:o,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,ht(Object.assign({},l,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}};var ft={passive:!0};const pt={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,i=e.options,r=i.scroll,s=void 0===r||r,o=i.resize,a=void 0===o||o,c=qe(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return s&&l.forEach((function(e){e.addEventListener("scroll",n.update,ft)})),a&&c.addEventListener("resize",n.update,ft),function(){s&&l.forEach((function(e){e.removeEventListener("scroll",n.update,ft)})),a&&c.removeEventListener("resize",n.update,ft)}},data:{}};var mt={left:"right",right:"left",bottom:"top",top:"bottom"};function gt(e){return e.replace(/left|right|bottom|top/g,(function(e){return mt[e]}))}var _t={start:"end",end:"start"};function vt(e){return e.replace(/start|end/g,(function(e){return _t[e]}))}function bt(e){var t=qe(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function yt(e){return $e(Qe(e)).left+bt(e).scrollLeft}function wt(e){var t=Ye(e),n=t.overflow,i=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+r+i)}function Ot(e){return["html","body","#document"].indexOf(Ue(e))>=0?e.ownerDocument.body:We(e)&&wt(e)?e:Ot(Xe(e))}function Ct(e,t){var n;void 0===t&&(t=[]);var i=Ot(e),r=i===(null==(n=e.ownerDocument)?void 0:n.body),s=qe(i),o=r?[s].concat(s.visualViewport||[],wt(i)?i:[]):i,a=t.concat(o);return r?a:a.concat(Ct(Xe(o)))}function Et(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Tt(e,t){return t===Ee?Et(function(e){var t=qe(e),n=Qe(e),i=t.visualViewport,r=n.clientWidth,s=n.clientHeight,o=0,a=0;return i&&(r=i.width,s=i.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(o=i.offsetLeft,a=i.offsetTop)),{width:r,height:s,x:o+yt(e),y:a}}(e)):We(t)?function(e){var t=$e(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):Et(function(e){var t,n=Qe(e),i=bt(e),r=null==(t=e.ownerDocument)?void 0:t.body,s=nt(n.scrollWidth,n.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),o=nt(n.scrollHeight,n.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),a=-i.scrollLeft+yt(e),c=-i.scrollTop;return"rtl"===Ye(r||n).direction&&(a+=nt(n.clientWidth,r?r.clientWidth:0)-s),{width:s,height:o,x:a,y:c}}(Qe(e)))}function It(e){var t,n=e.reference,i=e.element,r=e.placement,s=r?ze(r):null,o=r?lt(r):null,a=n.x+n.width/2-i.width/2,c=n.y+n.height/2-i.height/2;switch(s){case me:t={x:a,y:n.y-i.height};break;case ge:t={x:a,y:n.y+n.height};break;case _e:t={x:n.x+n.width,y:c};break;case ve:t={x:n.x-i.width,y:c};break;default:t={x:n.x,y:n.y}}var l=s?tt(s):null;if(null!=l){var u="y"===l?"height":"width";switch(o){case we:t[l]=t[l]-(n[u]/2-i[u]/2);break;case Oe:t[l]=t[l]+(n[u]/2-i[u]/2)}}return t}function kt(e,t){void 0===t&&(t={});var n=t,i=n.placement,r=void 0===i?e.placement:i,s=n.boundary,o=void 0===s?Ce:s,a=n.rootBoundary,c=void 0===a?Ee:a,l=n.elementContext,u=void 0===l?Te:l,h=n.altBoundary,d=void 0!==h&&h,f=n.padding,p=void 0===f?0:f,m=ot("number"!=typeof p?p:at(p,ye)),g=u===Te?Ie:Te,_=e.rects.popper,v=e.elements[d?g:u],b=function(e,t,n){var i="clippingParents"===t?function(e){var t=Ct(Xe(e)),n=["absolute","fixed"].indexOf(Ye(e).position)>=0&&We(e)?et(e):e;return He(n)?t.filter((function(e){return He(e)&&Ke(e,n)&&"body"!==Ue(e)})):[]}(e):[].concat(t),r=[].concat(i,[n]),s=r[0],o=r.reduce((function(t,n){var i=Tt(e,n);return t.top=nt(i.top,t.top),t.right=it(i.right,t.right),t.bottom=it(i.bottom,t.bottom),t.left=nt(i.left,t.left),t}),Tt(e,s));return o.width=o.right-o.left,o.height=o.bottom-o.top,o.x=o.left,o.y=o.top,o}(He(v)?v:v.contextElement||Qe(e.elements.popper),o,c),y=$e(e.elements.reference),w=It({reference:y,element:_,strategy:"absolute",placement:r}),O=Et(Object.assign({},_,w)),C=u===Te?O:y,E={top:b.top-C.top+m.top,bottom:C.bottom-b.bottom+m.bottom,left:b.left-C.left+m.left,right:C.right-b.right+m.right},T=e.modifiersData.offset;if(u===Te&&T){var I=T[r];Object.keys(E).forEach((function(e){var t=[_e,ge].indexOf(e)>=0?1:-1,n=[me,ge].indexOf(e)>=0?"y":"x";E[e]+=I[n]*t}))}return E}function St(e,t){void 0===t&&(t={});var n=t,i=n.placement,r=n.boundary,s=n.rootBoundary,o=n.padding,a=n.flipVariations,c=n.allowedAutoPlacements,l=void 0===c?Se:c,u=lt(i),h=u?a?ke:ke.filter((function(e){return lt(e)===u})):ye,d=h.filter((function(e){return l.indexOf(e)>=0}));0===d.length&&(d=h);var f=d.reduce((function(t,n){return t[n]=kt(e,{placement:n,boundary:r,rootBoundary:s,padding:o})[ze(n)],t}),{});return Object.keys(f).sort((function(e,t){return f[e]-f[t]}))}const xt={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,i=e.name;if(!t.modifiersData[i]._skip){for(var r=n.mainAxis,s=void 0===r||r,o=n.altAxis,a=void 0===o||o,c=n.fallbackPlacements,l=n.padding,u=n.boundary,h=n.rootBoundary,d=n.altBoundary,f=n.flipVariations,p=void 0===f||f,m=n.allowedAutoPlacements,g=t.options.placement,_=ze(g),v=c||(_!==g&&p?function(e){if(ze(e)===be)return[];var t=gt(e);return[vt(e),t,vt(t)]}(g):[gt(g)]),b=[g].concat(v).reduce((function(e,n){return e.concat(ze(n)===be?St(t,{placement:n,boundary:u,rootBoundary:h,padding:l,flipVariations:p,allowedAutoPlacements:m}):n)}),[]),y=t.rects.reference,w=t.rects.popper,O=new Map,C=!0,E=b[0],T=0;T<b.length;T++){var I=b[T],k=ze(I),S=lt(I)===we,x=[me,ge].indexOf(k)>=0,j=x?"width":"height",N=kt(t,{placement:I,boundary:u,rootBoundary:h,altBoundary:d,padding:l}),A=x?S?_e:ve:S?ge:me;y[j]>w[j]&&(A=gt(A));var P=gt(A),R=[];if(s&&R.push(N[k]<=0),a&&R.push(N[A]<=0,N[P]<=0),R.every((function(e){return e}))){E=I,C=!1;break}O.set(I,R)}if(C)for(var L=function(e){var t=b.find((function(t){var n=O.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return E=t,"break"},D=p?3:1;D>0&&"break"!==L(D);D--);t.placement!==E&&(t.modifiersData[i]._skip=!0,t.placement=E,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function jt(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function Nt(e){return[me,_e,ge,ve].some((function(t){return e[t]>=0}))}const At={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,i=t.rects.reference,r=t.rects.popper,s=t.modifiersData.preventOverflow,o=kt(t,{elementContext:"reference"}),a=kt(t,{altBoundary:!0}),c=jt(o,i),l=jt(a,r,s),u=Nt(c),h=Nt(l);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:l,isReferenceHidden:u,hasPopperEscaped:h},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":h})}},Pt={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,i=e.name,r=n.offset,s=void 0===r?[0,0]:r,o=Se.reduce((function(e,n){return e[n]=function(e,t,n){var i=ze(e),r=[ve,me].indexOf(i)>=0?-1:1,s="function"==typeof n?n(Object.assign({},t,{placement:e})):n,o=s[0],a=s[1];return o=o||0,a=(a||0)*r,[ve,_e].indexOf(i)>=0?{x:a,y:o}:{x:o,y:a}}(n,t.rects,s),e}),{}),a=o[t.placement],c=a.x,l=a.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=l),t.modifiersData[i]=o}},Rt={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=It({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},Lt={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,i=e.name,r=n.mainAxis,s=void 0===r||r,o=n.altAxis,a=void 0!==o&&o,c=n.boundary,l=n.rootBoundary,u=n.altBoundary,h=n.padding,d=n.tether,f=void 0===d||d,p=n.tetherOffset,m=void 0===p?0:p,g=kt(t,{boundary:c,rootBoundary:l,padding:h,altBoundary:u}),_=ze(t.placement),v=lt(t.placement),b=!v,y=tt(_),w="x"===y?"y":"x",O=t.modifiersData.popperOffsets,C=t.rects.reference,E=t.rects.popper,T="function"==typeof m?m(Object.assign({},t.rects,{placement:t.placement})):m,I={x:0,y:0};if(O){if(s||a){var k="y"===y?me:ve,S="y"===y?ge:_e,x="y"===y?"height":"width",j=O[y],N=O[y]+g[k],A=O[y]-g[S],P=f?-E[x]/2:0,R=v===we?C[x]:E[x],L=v===we?-E[x]:-C[x],D=t.elements.arrow,M=f&&D?Ge(D):{width:0,height:0},F=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},U=F[k],q=F[S],H=st(0,C[x],M[x]),W=b?C[x]/2-P-H-U-T:R-H-U-T,V=b?-C[x]/2+P+H+q+T:L+H+q+T,B=t.elements.arrow&&et(t.elements.arrow),z=B?"y"===y?B.clientTop||0:B.clientLeft||0:0,$=t.modifiersData.offset?t.modifiersData.offset[t.placement][y]:0,G=O[y]+W-$-z,K=O[y]+V-$;if(s){var Y=st(f?it(N,G):N,j,f?nt(A,K):A);O[y]=Y,I[y]=Y-j}if(a){var J="x"===y?me:ve,Q="x"===y?ge:_e,X=O[w],Z=X+g[J],ee=X-g[Q],te=st(f?it(Z,G):Z,X,f?nt(ee,K):ee);O[w]=te,I[w]=te-X}}t.modifiersData[i]=I}},requiresIfExists:["offset"]};function Dt(e,t,n){void 0===n&&(n=!1);var i=We(t);We(t)&&function(e){var t=e.getBoundingClientRect();t.width,e.offsetWidth,t.height,e.offsetHeight}(t);var r,s,o=Qe(t),a=$e(e),c={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(i||!i&&!n)&&(("body"!==Ue(t)||wt(o))&&(c=(r=t)!==qe(r)&&We(r)?{scrollLeft:(s=r).scrollLeft,scrollTop:s.scrollTop}:bt(r)),We(t)?((l=$e(t)).x+=t.clientLeft,l.y+=t.clientTop):o&&(l.x=yt(o))),{x:a.left+c.scrollLeft-l.x,y:a.top+c.scrollTop-l.y,width:a.width,height:a.height}}function Mt(e){var t=new Map,n=new Set,i=[];function r(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var i=t.get(e);i&&r(i)}})),i.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||r(e)})),i}var Ft={placement:"bottom",modifiers:[],strategy:"absolute"};function Ut(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function qt(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,i=void 0===n?[]:n,r=t.defaultOptions,s=void 0===r?Ft:r;return function(e,t,n){void 0===n&&(n=s);var r,o,a={placement:"bottom",orderedModifiers:[],options:Object.assign({},Ft,s),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},c=[],l=!1,u={state:a,setOptions:function(n){var r="function"==typeof n?n(a.options):n;h(),a.options=Object.assign({},s,a.options,r),a.scrollParents={reference:He(e)?Ct(e):e.contextElement?Ct(e.contextElement):[],popper:Ct(t)};var o,l,d=function(e){var t=Mt(e);return Fe.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}((o=[].concat(i,a.options.modifiers),l=o.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{}),Object.keys(l).map((function(e){return l[e]}))));return a.orderedModifiers=d.filter((function(e){return e.enabled})),a.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,i=void 0===n?{}:n,r=e.effect;if("function"==typeof r){var s=r({state:a,name:t,instance:u,options:i});c.push(s||function(){})}})),u.update()},forceUpdate:function(){if(!l){var e=a.elements,t=e.reference,n=e.popper;if(Ut(t,n)){a.rects={reference:Dt(t,et(n),"fixed"===a.options.strategy),popper:Ge(n)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach((function(e){return a.modifiersData[e.name]=Object.assign({},e.data)}));for(var i=0;i<a.orderedModifiers.length;i++)if(!0!==a.reset){var r=a.orderedModifiers[i],s=r.fn,o=r.options,c=void 0===o?{}:o,h=r.name;"function"==typeof s&&(a=s({state:a,options:c,name:h,instance:u})||a)}else a.reset=!1,i=-1}}},update:(r=function(){return new Promise((function(e){u.forceUpdate(),e(a)}))},function(){return o||(o=new Promise((function(e){Promise.resolve().then((function(){o=void 0,e(r())}))}))),o}),destroy:function(){h(),l=!0}};if(!Ut(e,t))return u;function h(){c.forEach((function(e){return e()})),c=[]}return u.setOptions(n).then((function(e){!l&&n.onFirstUpdate&&n.onFirstUpdate(e)})),u}}var Ht=qt(),Wt=qt({defaultModifiers:[pt,Rt,dt,Be]}),Vt=qt({defaultModifiers:[pt,Rt,dt,Be,Pt,xt,Lt,ct,At]});const Bt=Object.freeze({__proto__:null,popperGenerator:qt,detectOverflow:kt,createPopperBase:Ht,createPopper:Vt,createPopperLite:Wt,top:me,bottom:ge,right:_e,left:ve,auto:be,basePlacements:ye,start:we,end:Oe,clippingParents:Ce,viewport:Ee,popper:Te,reference:Ie,variationPlacements:ke,placements:Se,beforeRead:xe,read:je,afterRead:Ne,beforeMain:Ae,main:Pe,afterMain:Re,beforeWrite:Le,write:De,afterWrite:Me,modifierPhases:Fe,applyStyles:Be,arrow:ct,computeStyles:dt,eventListeners:pt,flip:xt,hide:At,offset:Pt,popperOffsets:Rt,preventOverflow:Lt}),zt="dropdown",$t="Escape",Gt="Space",Kt="ArrowUp",Yt="ArrowDown",Jt=new RegExp("ArrowUp|ArrowDown|Escape"),Qt="click.bs.dropdown.data-api",Xt="keydown.bs.dropdown.data-api",Zt="show",en='[data-bs-toggle="dropdown"]',tn=".dropdown-menu",nn=m()?"top-end":"top-start",rn=m()?"top-start":"top-end",sn=m()?"bottom-end":"bottom-start",on=m()?"bottom-start":"bottom-end",an=m()?"left-start":"right-start",cn=m()?"right-start":"left-start",ln={offset:[0,2],boundary:"clippingParents",reference:"toggle",display:"dynamic",popperConfig:null,autoClose:!0},un={offset:"(array|string|function)",boundary:"(string|element)",reference:"(string|element|object)",display:"string",popperConfig:"(null|object|function)",autoClose:"(boolean|string)"};class hn extends F{constructor(e,t){super(e),this._popper=null,this._config=this._getConfig(t),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar()}static get Default(){return ln}static get DefaultType(){return un}static get NAME(){return zt}toggle(){return this._isShown()?this.hide():this.show()}show(){if(l(this._element)||this._isShown(this._menu))return;const e={relatedTarget:this._element};if(L.trigger(this._element,"show.bs.dropdown",e).defaultPrevented)return;const t=hn.getParentFromElement(this._element);this._inNavbar?z.setDataAttribute(this._menu,"popper","none"):this._createPopper(t),"ontouchstart"in document.documentElement&&!t.closest(".navbar-nav")&&[].concat(...document.body.children).forEach(e=>L.on(e,"mouseover",h)),this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Zt),this._element.classList.add(Zt),L.trigger(this._element,"shown.bs.dropdown",e)}hide(){if(l(this._element)||!this._isShown(this._menu))return;const e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(e){L.trigger(this._element,"hide.bs.dropdown",e).defaultPrevented||("ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach(e=>L.off(e,"mouseover",h)),this._popper&&this._popper.destroy(),this._menu.classList.remove(Zt),this._element.classList.remove(Zt),this._element.setAttribute("aria-expanded","false"),z.removeDataAttribute(this._menu,"popper"),L.trigger(this._element,"hidden.bs.dropdown",e))}_getConfig(e){if(e={...this.constructor.Default,...z.getDataAttributes(this._element),...e},a(zt,e,this.constructor.DefaultType),"object"==typeof e.reference&&!s(e.reference)&&"function"!=typeof e.reference.getBoundingClientRect)throw new TypeError(zt.toUpperCase()+': Option "reference" provided type "object" without a required "getBoundingClientRect" method.');return e}_createPopper(e){if(void 0===Bt)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let t=this._element;"parent"===this._config.reference?t=e:s(this._config.reference)?t=o(this._config.reference):"object"==typeof this._config.reference&&(t=this._config.reference);const n=this._getPopperConfig(),i=n.modifiers.find(e=>"applyStyles"===e.name&&!1===e.enabled);this._popper=Vt(t,this._menu,n),i&&z.setDataAttribute(this._menu,"popper","static")}_isShown(e=this._element){return e.classList.contains(Zt)}_getMenuElement(){return $.next(this._element,tn)[0]}_getPlacement(){const e=this._element.parentNode;if(e.classList.contains("dropend"))return an;if(e.classList.contains("dropstart"))return cn;const t="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return e.classList.contains("dropup")?t?rn:nn:t?on:sn}_detectNavbar(){return null!==this._element.closest(".navbar")}_getOffset(){const{offset:e}=this._config;return"string"==typeof e?e.split(",").map(e=>Number.parseInt(e,10)):"function"==typeof e?t=>e(t,this._element):e}_getPopperConfig(){const e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return"static"===this._config.display&&(e.modifiers=[{name:"applyStyles",enabled:!1}]),{...e,..."function"==typeof this._config.popperConfig?this._config.popperConfig(e):this._config.popperConfig}}_selectMenuItem({key:e,target:t}){const n=$.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter(c);n.length&&b(n,t,e===Yt,!n.includes(t)).focus()}static jQueryInterface(e){return this.each((function(){const t=hn.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}static clearMenus(e){if(e&&(2===e.button||"keyup"===e.type&&"Tab"!==e.key))return;const t=$.find(en);for(let n=0,i=t.length;n<i;n++){const i=hn.getInstance(t[n]);if(!i||!1===i._config.autoClose)continue;if(!i._isShown())continue;const r={relatedTarget:i._element};if(e){const t=e.composedPath(),n=t.includes(i._menu);if(t.includes(i._element)||"inside"===i._config.autoClose&&!n||"outside"===i._config.autoClose&&n)continue;if(i._menu.contains(e.target)&&("keyup"===e.type&&"Tab"===e.key||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;"click"===e.type&&(r.clickEvent=e)}i._completeHide(r)}}static getParentFromElement(e){return i(e)||e.parentNode}static dataApiKeydownHandler(e){if(/input|textarea/i.test(e.target.tagName)?e.key===Gt||e.key!==$t&&(e.key!==Yt&&e.key!==Kt||e.target.closest(tn)):!Jt.test(e.key))return;const t=this.classList.contains(Zt);if(!t&&e.key===$t)return;if(e.preventDefault(),e.stopPropagation(),l(this))return;const n=this.matches(en)?this:$.prev(this,en)[0],i=hn.getOrCreateInstance(n);if(e.key!==$t)return e.key===Kt||e.key===Yt?(t||i.show(),void i._selectMenuItem(e)):void(t&&e.key!==Gt||hn.clearMenus());i.hide()}}L.on(document,Xt,en,hn.dataApiKeydownHandler),L.on(document,Xt,tn,hn.dataApiKeydownHandler),L.on(document,Qt,hn.clearMenus),L.on(document,"keyup.bs.dropdown.data-api",hn.clearMenus),L.on(document,Qt,en,(function(e){e.preventDefault(),hn.getOrCreateInstance(this).toggle()})),g(hn);const dn=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",fn=".sticky-top";class pn{constructor(){this._element=document.body}getWidth(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){const e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,"paddingRight",t=>t+e),this._setElementAttributes(dn,"paddingRight",t=>t+e),this._setElementAttributes(fn,"marginRight",t=>t-e)}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(e,t,n){const i=this.getWidth();this._applyManipulationCallback(e,e=>{if(e!==this._element&&window.innerWidth>e.clientWidth+i)return;this._saveInitialAttribute(e,t);const r=window.getComputedStyle(e)[t];e.style[t]=n(Number.parseFloat(r))+"px"})}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,"paddingRight"),this._resetElementAttributes(dn,"paddingRight"),this._resetElementAttributes(fn,"marginRight")}_saveInitialAttribute(e,t){const n=e.style[t];n&&z.setDataAttribute(e,t,n)}_resetElementAttributes(e,t){this._applyManipulationCallback(e,e=>{const n=z.getDataAttribute(e,t);void 0===n?e.style.removeProperty(t):(z.removeDataAttribute(e,t),e.style[t]=n)})}_applyManipulationCallback(e,t){s(e)?t(e):$.find(e,this._element).forEach(t)}isOverflowing(){return this.getWidth()>0}}const mn={className:"modal-backdrop",isVisible:!0,isAnimated:!1,rootElement:"body",clickCallback:null},gn={className:"string",isVisible:"boolean",isAnimated:"boolean",rootElement:"(element|string)",clickCallback:"(function|null)"},_n="show",vn="mousedown.bs.backdrop";class bn{constructor(e){this._config=this._getConfig(e),this._isAppended=!1,this._element=null}show(e){this._config.isVisible?(this._append(),this._config.isAnimated&&d(this._getElement()),this._getElement().classList.add(_n),this._emulateAnimation(()=>{_(e)})):_(e)}hide(e){this._config.isVisible?(this._getElement().classList.remove(_n),this._emulateAnimation(()=>{this.dispose(),_(e)})):_(e)}_getElement(){if(!this._element){const e=document.createElement("div");e.className=this._config.className,this._config.isAnimated&&e.classList.add("fade"),this._element=e}return this._element}_getConfig(e){return(e={...mn,..."object"==typeof e?e:{}}).rootElement=o(e.rootElement),a("backdrop",e,gn),e}_append(){this._isAppended||(this._config.rootElement.append(this._getElement()),L.on(this._getElement(),vn,()=>{_(this._config.clickCallback)}),this._isAppended=!0)}dispose(){this._isAppended&&(L.off(this._element,vn),this._element.remove(),this._isAppended=!1)}_emulateAnimation(e){v(e,this._getElement(),this._config.isAnimated)}}const yn={trapElement:null,autofocus:!0},wn={trapElement:"element",autofocus:"boolean"},On=".bs.focustrap",Cn="backward";class En{constructor(e){this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}activate(){const{trapElement:e,autofocus:t}=this._config;this._isActive||(t&&e.focus(),L.off(document,On),L.on(document,"focusin.bs.focustrap",e=>this._handleFocusin(e)),L.on(document,"keydown.tab.bs.focustrap",e=>this._handleKeydown(e)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,L.off(document,On))}_handleFocusin(e){const{target:t}=e,{trapElement:n}=this._config;if(t===document||t===n||n.contains(t))return;const i=$.focusableChildren(n);0===i.length?n.focus():this._lastTabNavDirection===Cn?i[i.length-1].focus():i[0].focus()}_handleKeydown(e){"Tab"===e.key&&(this._lastTabNavDirection=e.shiftKey?Cn:"forward")}_getConfig(e){return e={...yn,..."object"==typeof e?e:{}},a("focustrap",e,wn),e}}const Tn="modal",In="Escape",kn={backdrop:!0,keyboard:!0,focus:!0},Sn={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean"},xn="hidden.bs.modal",jn="show.bs.modal",Nn="resize.bs.modal",An="click.dismiss.bs.modal",Pn="keydown.dismiss.bs.modal",Rn="mousedown.dismiss.bs.modal",Ln="modal-open",Dn="show",Mn="modal-static";class Fn extends F{constructor(e,t){super(e),this._config=this._getConfig(t),this._dialog=$.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollBar=new pn}static get Default(){return kn}static get NAME(){return Tn}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){this._isShown||this._isTransitioning||L.trigger(this._element,jn,{relatedTarget:e}).defaultPrevented||(this._isShown=!0,this._isAnimated()&&(this._isTransitioning=!0),this._scrollBar.hide(),document.body.classList.add(Ln),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),L.on(this._dialog,Rn,()=>{L.one(this._element,"mouseup.dismiss.bs.modal",e=>{e.target===this._element&&(this._ignoreBackdropClick=!0)})}),this._showBackdrop(()=>this._showElement(e)))}hide(){if(!this._isShown||this._isTransitioning)return;if(L.trigger(this._element,"hide.bs.modal").defaultPrevented)return;this._isShown=!1;const e=this._isAnimated();e&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),this._focustrap.deactivate(),this._element.classList.remove(Dn),L.off(this._element,An),L.off(this._dialog,Rn),this._queueCallback(()=>this._hideModal(),this._element,e)}dispose(){[window,this._dialog].forEach(e=>L.off(e,".bs.modal")),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new bn({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new En({trapElement:this._element})}_getConfig(e){return e={...kn,...z.getDataAttributes(this._element),..."object"==typeof e?e:{}},a(Tn,e,Sn),e}_showElement(e){const t=this._isAnimated(),n=$.findOne(".modal-body",this._dialog);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0,n&&(n.scrollTop=0),t&&d(this._element),this._element.classList.add(Dn),this._queueCallback(()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,L.trigger(this._element,"shown.bs.modal",{relatedTarget:e})},this._dialog,t)}_setEscapeEvent(){this._isShown?L.on(this._element,Pn,e=>{this._config.keyboard&&e.key===In?(e.preventDefault(),this.hide()):this._config.keyboard||e.key!==In||this._triggerBackdropTransition()}):L.off(this._element,Pn)}_setResizeEvent(){this._isShown?L.on(window,Nn,()=>this._adjustDialog()):L.off(window,Nn)}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(Ln),this._resetAdjustments(),this._scrollBar.reset(),L.trigger(this._element,xn)})}_showBackdrop(e){L.on(this._element,An,e=>{this._ignoreBackdropClick?this._ignoreBackdropClick=!1:e.target===e.currentTarget&&(!0===this._config.backdrop?this.hide():"static"===this._config.backdrop&&this._triggerBackdropTransition())}),this._backdrop.show(e)}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(L.trigger(this._element,"hidePrevented.bs.modal").defaultPrevented)return;const{classList:e,scrollHeight:t,style:n}=this._element,i=t>document.documentElement.clientHeight;!i&&"hidden"===n.overflowY||e.contains(Mn)||(i||(n.overflowY="hidden"),e.add(Mn),this._queueCallback(()=>{e.remove(Mn),i||this._queueCallback(()=>{n.overflowY=""},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const e=this._element.scrollHeight>document.documentElement.clientHeight,t=this._scrollBar.getWidth(),n=t>0;(!n&&e&&!m()||n&&!e&&m())&&(this._element.style.paddingLeft=t+"px"),(n&&!e&&!m()||!n&&e&&m())&&(this._element.style.paddingRight=t+"px")}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(e,t){return this.each((function(){const n=Fn.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===n[e])throw new TypeError(`No method named "${e}"`);n[e](t)}}))}}L.on(document,"click.bs.modal.data-api",'[data-bs-toggle="modal"]',(function(e){const t=i(this);["A","AREA"].includes(this.tagName)&&e.preventDefault(),L.one(t,jn,e=>{e.defaultPrevented||L.one(t,xn,()=>{c(this)&&this.focus()})});const n=$.findOne(".modal.show");n&&Fn.getInstance(n).hide(),Fn.getOrCreateInstance(t).toggle(this)})),U(Fn),g(Fn);const Un="offcanvas",qn={backdrop:!0,keyboard:!0,scroll:!1},Hn={backdrop:"boolean",keyboard:"boolean",scroll:"boolean"},Wn="show",Vn=".offcanvas.show",Bn="hidden.bs.offcanvas";class zn extends F{constructor(e,t){super(e),this._config=this._getConfig(t),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get NAME(){return Un}static get Default(){return qn}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){this._isShown||L.trigger(this._element,"show.bs.offcanvas",{relatedTarget:e}).defaultPrevented||(this._isShown=!0,this._element.style.visibility="visible",this._backdrop.show(),this._config.scroll||(new pn).hide(),this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Wn),this._queueCallback(()=>{this._config.scroll||this._focustrap.activate(),L.trigger(this._element,"shown.bs.offcanvas",{relatedTarget:e})},this._element,!0))}hide(){this._isShown&&(L.trigger(this._element,"hide.bs.offcanvas").defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.remove(Wn),this._backdrop.hide(),this._queueCallback(()=>{this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._element.style.visibility="hidden",this._config.scroll||(new pn).reset(),L.trigger(this._element,Bn)},this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_getConfig(e){return e={...qn,...z.getDataAttributes(this._element),..."object"==typeof e?e:{}},a(Un,e,Hn),e}_initializeBackDrop(){return new bn({className:"offcanvas-backdrop",isVisible:this._config.backdrop,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:()=>this.hide()})}_initializeFocusTrap(){return new En({trapElement:this._element})}_addEventListeners(){L.on(this._element,"keydown.dismiss.bs.offcanvas",e=>{this._config.keyboard&&"Escape"===e.key&&this.hide()})}static jQueryInterface(e){return this.each((function(){const t=zn.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}L.on(document,"click.bs.offcanvas.data-api",'[data-bs-toggle="offcanvas"]',(function(e){const t=i(this);if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),l(this))return;L.one(t,Bn,()=>{c(this)&&this.focus()});const n=$.findOne(Vn);n&&n!==t&&zn.getInstance(n).hide(),zn.getOrCreateInstance(t).toggle(this)})),L.on(window,"load.bs.offcanvas.data-api",()=>$.find(Vn).forEach(e=>zn.getOrCreateInstance(e).show())),U(zn),g(zn);const $n=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Gn=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,Kn=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,Yn=(e,t)=>{const n=e.nodeName.toLowerCase();if(t.includes(n))return!$n.has(n)||Boolean(Gn.test(e.nodeValue)||Kn.test(e.nodeValue));const i=t.filter(e=>e instanceof RegExp);for(let r=0,s=i.length;r<s;r++)if(i[r].test(n))return!0;return!1};function Jn(e,t,n){if(!e.length)return e;if(n&&"function"==typeof n)return n(e);const i=(new window.DOMParser).parseFromString(e,"text/html"),r=[].concat(...i.body.querySelectorAll("*"));for(let s=0,o=r.length;s<o;s++){const e=r[s],n=e.nodeName.toLowerCase();if(!Object.keys(t).includes(n)){e.remove();continue}const i=[].concat(...e.attributes),o=[].concat(t["*"]||[],t[n]||[]);i.forEach(t=>{Yn(t,o)||e.removeAttribute(t.nodeName)})}return i.body.innerHTML}const Qn="tooltip",Xn=new Set(["sanitize","allowList","sanitizeFn"]),Zn={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(array|string|function)",container:"(string|element|boolean)",fallbackPlacements:"array",boundary:"(string|element)",customClass:"(string|function)",sanitize:"boolean",sanitizeFn:"(null|function)",allowList:"object",popperConfig:"(null|object|function)"},ei={AUTO:"auto",TOP:"top",RIGHT:m()?"left":"right",BOTTOM:"bottom",LEFT:m()?"right":"left"},ti={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:[0,0],container:!1,fallbackPlacements:["top","right","bottom","left"],boundary:"clippingParents",customClass:"",sanitize:!0,sanitizeFn:null,allowList:{"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},popperConfig:null},ni={HIDE:"hide.bs.tooltip",HIDDEN:"hidden.bs.tooltip",SHOW:"show.bs.tooltip",SHOWN:"shown.bs.tooltip",INSERTED:"inserted.bs.tooltip",CLICK:"click.bs.tooltip",FOCUSIN:"focusin.bs.tooltip",FOCUSOUT:"focusout.bs.tooltip",MOUSEENTER:"mouseenter.bs.tooltip",MOUSELEAVE:"mouseleave.bs.tooltip"},ii="fade",ri="show",si="show",oi="out",ai=".tooltip-inner",ci=".modal",li="hide.bs.modal",ui="hover",hi="focus";class di extends F{constructor(e,t){if(void 0===Bt)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(e),this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this._config=this._getConfig(t),this.tip=null,this._setListeners()}static get Default(){return ti}static get NAME(){return Qn}static get Event(){return ni}static get DefaultType(){return Zn}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(e){if(this._isEnabled)if(e){const t=this._initializeOnDelegatedTarget(e);t._activeTrigger.click=!t._activeTrigger.click,t._isWithActiveTrigger()?t._enter(null,t):t._leave(null,t)}else{if(this.getTipElement().classList.contains(ri))return void this._leave(null,this);this._enter(null,this)}}dispose(){clearTimeout(this._timeout),L.off(this._element.closest(ci),li,this._hideModalHandler),this.tip&&this.tip.remove(),this._disposePopper(),super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this.isWithContent()||!this._isEnabled)return;const e=L.trigger(this._element,this.constructor.Event.SHOW),t=u(this._element),n=null===t?this._element.ownerDocument.documentElement.contains(this._element):t.contains(this._element);if(e.defaultPrevented||!n)return;"tooltip"===this.constructor.NAME&&this.tip&&this.getTitle()!==this.tip.querySelector(ai).innerHTML&&(this._disposePopper(),this.tip.remove(),this.tip=null);const i=this.getTipElement(),r=(e=>{do{e+=Math.floor(1e6*Math.random())}while(document.getElementById(e));return e})(this.constructor.NAME);i.setAttribute("id",r),this._element.setAttribute("aria-describedby",r),this._config.animation&&i.classList.add(ii);const s="function"==typeof this._config.placement?this._config.placement.call(this,i,this._element):this._config.placement,o=this._getAttachment(s);this._addAttachmentClass(o);const{container:a}=this._config;M.set(i,this.constructor.DATA_KEY,this),this._element.ownerDocument.documentElement.contains(this.tip)||(a.append(i),L.trigger(this._element,this.constructor.Event.INSERTED)),this._popper?this._popper.update():this._popper=Vt(this._element,i,this._getPopperConfig(o)),i.classList.add(ri);const c=this._resolvePossibleFunction(this._config.customClass);c&&i.classList.add(...c.split(" ")),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach(e=>{L.on(e,"mouseover",h)});const l=this.tip.classList.contains(ii);this._queueCallback(()=>{const e=this._hoverState;this._hoverState=null,L.trigger(this._element,this.constructor.Event.SHOWN),e===oi&&this._leave(null,this)},this.tip,l)}hide(){if(!this._popper)return;const e=this.getTipElement();if(L.trigger(this._element,this.constructor.Event.HIDE).defaultPrevented)return;e.classList.remove(ri),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach(e=>L.off(e,"mouseover",h)),this._activeTrigger.click=!1,this._activeTrigger.focus=!1,this._activeTrigger.hover=!1;const t=this.tip.classList.contains(ii);this._queueCallback(()=>{this._isWithActiveTrigger()||(this._hoverState!==si&&e.remove(),this._cleanTipClass(),this._element.removeAttribute("aria-describedby"),L.trigger(this._element,this.constructor.Event.HIDDEN),this._disposePopper())},this.tip,t),this._hoverState=""}update(){null!==this._popper&&this._popper.update()}isWithContent(){return Boolean(this.getTitle())}getTipElement(){if(this.tip)return this.tip;const e=document.createElement("div");e.innerHTML=this._config.template;const t=e.children[0];return this.setContent(t),t.classList.remove(ii,ri),this.tip=t,this.tip}setContent(e){this._sanitizeAndSetContent(e,this.getTitle(),ai)}_sanitizeAndSetContent(e,t,n){const i=$.findOne(n,e);t||!i?this.setElementContent(i,t):i.remove()}setElementContent(e,t){if(null!==e)return s(t)?(t=o(t),void(this._config.html?t.parentNode!==e&&(e.innerHTML="",e.append(t)):e.textContent=t.textContent)):void(this._config.html?(this._config.sanitize&&(t=Jn(t,this._config.allowList,this._config.sanitizeFn)),e.innerHTML=t):e.textContent=t)}getTitle(){const e=this._element.getAttribute("data-bs-original-title")||this._config.title;return this._resolvePossibleFunction(e)}updateAttachment(e){return"right"===e?"end":"left"===e?"start":e}_initializeOnDelegatedTarget(e,t){return t||this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig())}_getOffset(){const{offset:e}=this._config;return"string"==typeof e?e.split(",").map(e=>Number.parseInt(e,10)):"function"==typeof e?t=>e(t,this._element):e}_resolvePossibleFunction(e){return"function"==typeof e?e.call(this._element):e}_getPopperConfig(e){const t={placement:e,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"onChange",enabled:!0,phase:"afterWrite",fn:e=>this._handlePopperPlacementChange(e)}],onFirstUpdate:e=>{e.options.placement!==e.placement&&this._handlePopperPlacementChange(e)}};return{...t,..."function"==typeof this._config.popperConfig?this._config.popperConfig(t):this._config.popperConfig}}_addAttachmentClass(e){this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(e)}`)}_getAttachment(e){return ei[e.toUpperCase()]}_setListeners(){this._config.trigger.split(" ").forEach(e=>{if("click"===e)L.on(this._element,this.constructor.Event.CLICK,this._config.selector,e=>this.toggle(e));else if("manual"!==e){const t=e===ui?this.constructor.Event.MOUSEENTER:this.constructor.Event.FOCUSIN,n=e===ui?this.constructor.Event.MOUSELEAVE:this.constructor.Event.FOCUSOUT;L.on(this._element,t,this._config.selector,e=>this._enter(e)),L.on(this._element,n,this._config.selector,e=>this._leave(e))}}),this._hideModalHandler=()=>{this._element&&this.hide()},L.on(this._element.closest(ci),li,this._hideModalHandler),this._config.selector?this._config={...this._config,trigger:"manual",selector:""}:this._fixTitle()}_fixTitle(){const e=this._element.getAttribute("title"),t=typeof this._element.getAttribute("data-bs-original-title");(e||"string"!==t)&&(this._element.setAttribute("data-bs-original-title",e||""),!e||this._element.getAttribute("aria-label")||this._element.textContent||this._element.setAttribute("aria-label",e),this._element.setAttribute("title",""))}_enter(e,t){t=this._initializeOnDelegatedTarget(e,t),e&&(t._activeTrigger["focusin"===e.type?hi:ui]=!0),t.getTipElement().classList.contains(ri)||t._hoverState===si?t._hoverState=si:(clearTimeout(t._timeout),t._hoverState=si,t._config.delay&&t._config.delay.show?t._timeout=setTimeout(()=>{t._hoverState===si&&t.show()},t._config.delay.show):t.show())}_leave(e,t){t=this._initializeOnDelegatedTarget(e,t),e&&(t._activeTrigger["focusout"===e.type?hi:ui]=t._element.contains(e.relatedTarget)),t._isWithActiveTrigger()||(clearTimeout(t._timeout),t._hoverState=oi,t._config.delay&&t._config.delay.hide?t._timeout=setTimeout(()=>{t._hoverState===oi&&t.hide()},t._config.delay.hide):t.hide())}_isWithActiveTrigger(){for(const e in this._activeTrigger)if(this._activeTrigger[e])return!0;return!1}_getConfig(e){const t=z.getDataAttributes(this._element);return Object.keys(t).forEach(e=>{Xn.has(e)&&delete t[e]}),(e={...this.constructor.Default,...t,..."object"==typeof e&&e?e:{}}).container=!1===e.container?document.body:o(e.container),"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),"number"==typeof e.title&&(e.title=e.title.toString()),"number"==typeof e.content&&(e.content=e.content.toString()),a(Qn,e,this.constructor.DefaultType),e.sanitize&&(e.template=Jn(e.template,e.allowList,e.sanitizeFn)),e}_getDelegateConfig(){const e={};for(const t in this._config)this.constructor.Default[t]!==this._config[t]&&(e[t]=this._config[t]);return e}_cleanTipClass(){const e=this.getTipElement(),t=new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`,"g"),n=e.getAttribute("class").match(t);null!==n&&n.length>0&&n.map(e=>e.trim()).forEach(t=>e.classList.remove(t))}_getBasicClassPrefix(){return"bs-tooltip"}_handlePopperPlacementChange(e){const{state:t}=e;t&&(this.tip=t.elements.popper,this._cleanTipClass(),this._addAttachmentClass(this._getAttachment(t.placement)))}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null)}static jQueryInterface(e){return this.each((function(){const t=di.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}g(di);const fi={...di.Default,placement:"right",offset:[0,8],trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'},pi={...di.DefaultType,content:"(string|element|function)"},mi={HIDE:"hide.bs.popover",HIDDEN:"hidden.bs.popover",SHOW:"show.bs.popover",SHOWN:"shown.bs.popover",INSERTED:"inserted.bs.popover",CLICK:"click.bs.popover",FOCUSIN:"focusin.bs.popover",FOCUSOUT:"focusout.bs.popover",MOUSEENTER:"mouseenter.bs.popover",MOUSELEAVE:"mouseleave.bs.popover"};class gi extends di{static get Default(){return fi}static get NAME(){return"popover"}static get Event(){return mi}static get DefaultType(){return pi}isWithContent(){return this.getTitle()||this._getContent()}setContent(e){this._sanitizeAndSetContent(e,this.getTitle(),".popover-header"),this._sanitizeAndSetContent(e,this._getContent(),".popover-body")}_getContent(){return this._resolvePossibleFunction(this._config.content)}_getBasicClassPrefix(){return"bs-popover"}static jQueryInterface(e){return this.each((function(){const t=gi.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}g(gi);const _i="scrollspy",vi={offset:10,method:"auto",target:""},bi={offset:"number",method:"string",target:"(string|element)"},yi="active",wi=".nav-link, .list-group-item, .dropdown-item",Oi="position";class Ci extends F{constructor(e,t){super(e),this._scrollElement="BODY"===this._element.tagName?window:this._element,this._config=this._getConfig(t),this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,L.on(this._scrollElement,"scroll.bs.scrollspy",()=>this._process()),this.refresh(),this._process()}static get Default(){return vi}static get NAME(){return _i}refresh(){const e=this._scrollElement===this._scrollElement.window?"offset":Oi,t="auto"===this._config.method?e:this._config.method,i=t===Oi?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),$.find(wi,this._config.target).map(e=>{const r=n(e),s=r?$.findOne(r):null;if(s){const e=s.getBoundingClientRect();if(e.width||e.height)return[z[t](s).top+i,r]}return null}).filter(e=>e).sort((e,t)=>e[0]-t[0]).forEach(e=>{this._offsets.push(e[0]),this._targets.push(e[1])})}dispose(){L.off(this._scrollElement,".bs.scrollspy"),super.dispose()}_getConfig(e){return(e={...vi,...z.getDataAttributes(this._element),..."object"==typeof e&&e?e:{}}).target=o(e.target)||document.documentElement,a(_i,e,bi),e}_getScrollTop(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop}_getScrollHeight(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}_getOffsetHeight(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height}_process(){const e=this._getScrollTop()+this._config.offset,t=this._getScrollHeight(),n=this._config.offset+t-this._getOffsetHeight();if(this._scrollHeight!==t&&this.refresh(),e>=n){const e=this._targets[this._targets.length-1];this._activeTarget!==e&&this._activate(e)}else{if(this._activeTarget&&e<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(let t=this._offsets.length;t--;)this._activeTarget!==this._targets[t]&&e>=this._offsets[t]&&(void 0===this._offsets[t+1]||e<this._offsets[t+1])&&this._activate(this._targets[t])}}_activate(e){this._activeTarget=e,this._clear();const t=wi.split(",").map(t=>`${t}[data-bs-target="${e}"],${t}[href="${e}"]`),n=$.findOne(t.join(","),this._config.target);n.classList.add(yi),n.classList.contains("dropdown-item")?$.findOne(".dropdown-toggle",n.closest(".dropdown")).classList.add(yi):$.parents(n,".nav, .list-group").forEach(e=>{$.prev(e,".nav-link, .list-group-item").forEach(e=>e.classList.add(yi)),$.prev(e,".nav-item").forEach(e=>{$.children(e,".nav-link").forEach(e=>e.classList.add(yi))})}),L.trigger(this._scrollElement,"activate.bs.scrollspy",{relatedTarget:e})}_clear(){$.find(wi,this._config.target).filter(e=>e.classList.contains(yi)).forEach(e=>e.classList.remove(yi))}static jQueryInterface(e){return this.each((function(){const t=Ci.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}L.on(window,"load.bs.scrollspy.data-api",()=>{$.find('[data-bs-spy="scroll"]').forEach(e=>new Ci(e))}),g(Ci);const Ei="active",Ti="fade",Ii="show",ki=".active",Si=":scope > li > .active";class xi extends F{static get NAME(){return"tab"}show(){if(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&this._element.classList.contains(Ei))return;let e;const t=i(this._element),n=this._element.closest(".nav, .list-group");if(n){const t="UL"===n.nodeName||"OL"===n.nodeName?Si:ki;e=$.find(t,n),e=e[e.length-1]}const r=e?L.trigger(e,"hide.bs.tab",{relatedTarget:this._element}):null;if(L.trigger(this._element,"show.bs.tab",{relatedTarget:e}).defaultPrevented||null!==r&&r.defaultPrevented)return;this._activate(this._element,n);const s=()=>{L.trigger(e,"hidden.bs.tab",{relatedTarget:this._element}),L.trigger(this._element,"shown.bs.tab",{relatedTarget:e})};t?this._activate(t,t.parentNode,s):s()}_activate(e,t,n){const i=(!t||"UL"!==t.nodeName&&"OL"!==t.nodeName?$.children(t,ki):$.find(Si,t))[0],r=n&&i&&i.classList.contains(Ti),s=()=>this._transitionComplete(e,i,n);i&&r?(i.classList.remove(Ii),this._queueCallback(s,e,!0)):s()}_transitionComplete(e,t,n){if(t){t.classList.remove(Ei);const e=$.findOne(":scope > .dropdown-menu .active",t.parentNode);e&&e.classList.remove(Ei),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!1)}e.classList.add(Ei),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!0),d(e),e.classList.contains(Ti)&&e.classList.add(Ii);let i=e.parentNode;if(i&&"LI"===i.nodeName&&(i=i.parentNode),i&&i.classList.contains("dropdown-menu")){const t=e.closest(".dropdown");t&&$.find(".dropdown-toggle",t).forEach(e=>e.classList.add(Ei)),e.setAttribute("aria-expanded",!0)}n&&n()}static jQueryInterface(e){return this.each((function(){const t=xi.getOrCreateInstance(this);if("string"==typeof e){if(void 0===t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}L.on(document,"click.bs.tab.data-api",'[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',(function(e){["A","AREA"].includes(this.tagName)&&e.preventDefault(),l(this)||xi.getOrCreateInstance(this).show()})),g(xi);const ji="toast",Ni="hide",Ai="show",Pi="showing",Ri={animation:"boolean",autohide:"boolean",delay:"number"},Li={animation:!0,autohide:!0,delay:5e3};class Di extends F{constructor(e,t){super(e),this._config=this._getConfig(t),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get DefaultType(){return Ri}static get Default(){return Li}static get NAME(){return ji}show(){L.trigger(this._element,"show.bs.toast").defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove(Ni),d(this._element),this._element.classList.add(Ai),this._element.classList.add(Pi),this._queueCallback(()=>{this._element.classList.remove(Pi),L.trigger(this._element,"shown.bs.toast"),this._maybeScheduleHide()},this._element,this._config.animation))}hide(){this._element.classList.contains(Ai)&&(L.trigger(this._element,"hide.bs.toast").defaultPrevented||(this._element.classList.add(Pi),this._queueCallback(()=>{this._element.classList.add(Ni),this._element.classList.remove(Pi),this._element.classList.remove(Ai),L.trigger(this._element,"hidden.bs.toast")},this._element,this._config.animation)))}dispose(){this._clearTimeout(),this._element.classList.contains(Ai)&&this._element.classList.remove(Ai),super.dispose()}_getConfig(e){return e={...Li,...z.getDataAttributes(this._element),..."object"==typeof e&&e?e:{}},a(ji,e,this.constructor.DefaultType),e}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(e,t){switch(e.type){case"mouseover":case"mouseout":this._hasMouseInteraction=t;break;case"focusin":case"focusout":this._hasKeyboardInteraction=t}if(t)return void this._clearTimeout();const n=e.relatedTarget;this._element===n||this._element.contains(n)||this._maybeScheduleHide()}_setListeners(){L.on(this._element,"mouseover.bs.toast",e=>this._onInteraction(e,!0)),L.on(this._element,"mouseout.bs.toast",e=>this._onInteraction(e,!1)),L.on(this._element,"focusin.bs.toast",e=>this._onInteraction(e,!0)),L.on(this._element,"focusout.bs.toast",e=>this._onInteraction(e,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each((function(){const t=Di.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e])throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}return U(Di),g(Di),{Alert:q,Button:W,Carousel:re,Collapse:pe,Dropdown:hn,Modal:Fn,Offcanvas:zn,Popover:gi,ScrollSpy:Ci,Tab:xi,Toast:Di,Tooltip:di}}))},"159b":function(e,t,n){var i=n("da84"),r=n("fdbc"),s=n("785a"),o=n("17c2"),a=n("9112"),c=function(e){if(e&&e.forEach!==o)try{a(e,"forEach",o)}catch(t){e.forEach=o}};for(var l in r)r[l]&&c(i[l]&&i[l].prototype);c(s)},1626:function(e,t){e.exports=function(e){return"function"==typeof e}},"17c2":function(e,t,n){"use strict";var i=n("b727").forEach,r=n("a640"),s=r("forEach");e.exports=s?[].forEach:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}},"19aa":function(e,t,n){var i=n("da84"),r=n("3a9b"),s=i.TypeError;e.exports=function(e,t){if(r(t,e))return e;throw s("Incorrect invocation")}},"1a2d":function(e,t,n){var i=n("e330"),r=n("7b0b"),s=i({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return s(r(e),t)}},"1be4":function(e,t,n){var i=n("d066");e.exports=i("document","documentElement")},"1c7e":function(e,t,n){var i=n("b622"),r=i("iterator"),s=!1;try{var o=0,a={next:function(){return{done:!!o++}},return:function(){s=!0}};a[r]=function(){return this},Array.from(a,(function(){throw 2}))}catch(c){}e.exports=function(e,t){if(!t&&!s)return!1;var n=!1;try{var i={};i[r]=function(){return{next:function(){return{done:n=!0}}}},e(i)}catch(c){}return n}},"1cdc":function(e,t,n){var i=n("342f");e.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(i)},"1d80":function(e,t,n){var i=n("da84"),r=i.TypeError;e.exports=function(e){if(void 0==e)throw r("Can't call method on "+e);return e}},"1dde":function(e,t,n){var i=n("d039"),r=n("b622"),s=n("2d00"),o=r("species");e.exports=function(e){return s>=51||!i((function(){var t=[],n=t.constructor={};return n[o]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"1fd5":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return T})),n.d(t,"c",(function(){return E})),n.d(t,"d",(function(){return W})),n.d(t,"e",(function(){return r})),n.d(t,"f",(function(){return s})),n.d(t,"g",(function(){return c})),n.d(t,"h",(function(){return h})),n.d(t,"i",(function(){return l})),n.d(t,"j",(function(){return P})),n.d(t,"k",(function(){return g})),n.d(t,"l",(function(){return V})),n.d(t,"m",(function(){return d})),n.d(t,"n",(function(){return M})),n.d(t,"o",(function(){return G})),n.d(t,"p",(function(){return H})),n.d(t,"q",(function(){return J})),n.d(t,"r",(function(){return _})),n.d(t,"s",(function(){return A})),n.d(t,"t",(function(){return b})),n.d(t,"u",(function(){return L})),n.d(t,"v",(function(){return w})),n.d(t,"w",(function(){return v})),n.d(t,"x",(function(){return O})),n.d(t,"y",(function(){return y})),n.d(t,"z",(function(){return N})),n.d(t,"A",(function(){return S})),n.d(t,"B",(function(){return D})),n.d(t,"C",(function(){return U})),n.d(t,"D",(function(){return q})),n.d(t,"E",(function(){return R})),n.d(t,"F",(function(){return Y})),n.d(t,"G",(function(){return K})),n.d(t,"H",(function(){return x}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},r=function(e,t){if(!e)throw s(t)},s=function(e){return new Error("Firebase Database ("+i.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},o=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296===(64512&r)&&i+1<e.length&&56320===(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},a=function(e){const t=[];let n=0,i=0;while(n<e.length){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=e[n++],o=e[n++],a=e[n++],c=((7&r)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[i++]=String.fromCharCode(55296+(c>>10)),t[i++]=String.fromCharCode(56320+(1023&c))}else{const s=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return t.join("")},c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<e.length;r+=3){const t=e[r],s=r+1<e.length,o=s?e[r+1]:0,a=r+2<e.length,c=a?e[r+2]:0,l=t>>2,u=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),i.push(n[l],n[u],n[h],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(o(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):a(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<e.length;){const t=n[e.charAt(r++)],s=r<e.length,o=s?n[e.charAt(r)]:0;++r;const a=r<e.length,c=a?n[e.charAt(r)]:64;++r;const l=r<e.length,u=l?n[e.charAt(r)]:64;if(++r,null==t||null==o||null==c||null==u)throw Error();const h=t<<2|o>>4;if(i.push(h),64!==c){const e=o<<4&240|c>>2;if(i.push(e),64!==u){const e=c<<6&192|u;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},l=function(e){const t=o(e);return c.encodeByteArray(t,!0)},u=function(e){return l(e).replace(/\./g,"")},h=function(e){try{return c.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function d(e){return f(void 0,e)}function f(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&p(n)&&(e[n]=f(e[n],t[n]));return e}function p(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=t||"demo-project",r=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:"https://securetoken.google.com/"+i,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[u(JSON.stringify(n)),u(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function v(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_())}function b(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function y(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function w(){const e=_();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function O(){return!0===i.NODE_CLIENT||!0===i.NODE_ADMIN}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const C="FirebaseError";class E extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=C,Object.setPrototypeOf(this,E.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,T.prototype.create)}}class T{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],s=r?I(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`,a=new E(i,o,n);return a}}function I(e,t){return e.replace(k,(e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`})}const k=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(e){return JSON.parse(e)}function x(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j=function(e){let t={},n={},i={},r="";try{const s=e.split(".");t=S(h(s[0])||""),n=S(h(s[1])||""),r=s[2],i=n["d"]||{},delete n["d"]}catch(s){}return{header:t,claims:n,data:i,signature:r}},N=function(e){const t=j(e),n=t.claims;return!!n&&"object"===typeof n&&n.hasOwnProperty("iat")},A=function(e){const t=j(e).claims;return"object"===typeof t&&!0===t["admin"]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function P(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function R(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function L(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function D(e,t,n){const i={};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=t.call(n,e[r],r,e));return i}function M(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const n=e[r],s=t[r];if(F(n)&&F(s)){if(!M(n,s))return!1}else if(n!==s)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function F(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function q(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach(e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}}),t}function H(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"===typeof e)for(let u=0;u<16;u++)n[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)n[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){const e=n[u-3]^n[u-8]^n[u-14]^n[u-16];n[u]=4294967295&(e<<1|e>>>31)}let i,r,s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],c=this.chain_[3],l=this.chain_[4];for(let u=0;u<80;u++){u<40?u<20?(i=c^o&(a^c),r=1518500249):(i=o^a^c,r=1859775393):u<60?(i=o&a|c&(o|a),r=2400959708):(i=o^a^c,r=3395469782);const e=(s<<5|s>>>27)+i+l+r+n[u]&4294967295;l=c,c=a,a=4294967295&(o<<30|o>>>2),o=s,s=e}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let i=0;const r=this.buf_;let s=this.inbuf_;while(i<t){if(0===s)while(i<=n)this.compress_(e,i),i+=this.blockSize;if("string"===typeof e){while(i<t)if(r[s]=e.charCodeAt(i),++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}else while(i<t)if(r[s]=e[i],++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let i=0;i<5;i++)for(let t=24;t>=0;t-=8)e[n]=this.chain_[i]>>t&255,++n;return e}}function V(e,t){const n=new B(e,t);return n.subscribe.bind(n)}class B{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=z(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=$),void 0===i.error&&(i.error=$),void 0===i.complete&&(i.complete=$);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}}),this.observers.push(i),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function z(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function $(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(e,t){return`${e} failed: ${t} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const K=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);if(s>=55296&&s<=56319){const t=s-55296;i++,r(i<e.length,"Surrogate pair missing trail surrogate.");const n=e.charCodeAt(i)-56320;s=65536+(t<<10)+n}s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):s<65536?(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},Y=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function J(e){return e&&e._delegate?e._delegate:e}}).call(this,n("c8ba"))},2266:function(e,t,n){var i=n("da84"),r=n("0366"),s=n("c65b"),o=n("825a"),a=n("0d51"),c=n("e95a"),l=n("07fa"),u=n("3a9b"),h=n("9a1f"),d=n("35a1"),f=n("2a62"),p=i.TypeError,m=function(e,t){this.stopped=e,this.result=t},g=m.prototype;e.exports=function(e,t,n){var i,_,v,b,y,w,O,C=n&&n.that,E=!(!n||!n.AS_ENTRIES),T=!(!n||!n.IS_ITERATOR),I=!(!n||!n.INTERRUPTED),k=r(t,C),S=function(e){return i&&f(i,"normal",e),new m(!0,e)},x=function(e){return E?(o(e),I?k(e[0],e[1],S):k(e[0],e[1])):I?k(e,S):k(e)};if(T)i=e;else{if(_=d(e),!_)throw p(a(e)+" is not iterable");if(c(_)){for(v=0,b=l(e);b>v;v++)if(y=x(e[v]),y&&u(g,y))return y;return new m(!1)}i=h(e,_)}w=i.next;while(!(O=s(w,i)).done){try{y=x(O.value)}catch(j){f(i,"throw",j)}if("object"==typeof y&&y&&u(g,y))return y}return new m(!1)}},"22e5":function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return l}));var i=n("1fd5");class r{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new i["a"];if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),i=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(i)return null;throw r}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:i});n.resolve(e)}catch(t){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[r,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(r);n===e&&s.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(i){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(i){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===s?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},"23cb":function(e,t,n){var i=n("5926"),r=Math.max,s=Math.min;e.exports=function(e,t){var n=i(e);return n<0?r(n+t,0):s(n,t)}},"23e7":function(e,t,n){var i=n("da84"),r=n("06cf").f,s=n("9112"),o=n("6eeb"),a=n("ce4e"),c=n("e893"),l=n("94ca");e.exports=function(e,t){var n,u,h,d,f,p,m=e.target,g=e.global,_=e.stat;if(u=g?i:_?i[m]||a(m,{}):(i[m]||{}).prototype,u)for(h in t){if(f=t[h],e.noTargetGet?(p=r(u,h),d=p&&p.value):d=u[h],n=l(g?h:m+(_?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(e.sham||d&&d.sham)&&s(f,"sham",!0),o(u,h,f,e)}}},"241c":function(e,t,n){var i=n("ca84"),r=n("7839"),s=r.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return i(e,s)}},"260b":function(e,t,n){"use strict";var i=n("589b");n.d(t,"a",(function(){return i["e"]}));var r="firebase",s="9.6.6";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object(i["f"])(r,s,"app")},2626:function(e,t,n){"use strict";var i=n("d066"),r=n("9bf2"),s=n("b622"),o=n("83ab"),a=s("species");e.exports=function(e){var t=i(e),n=r.f;o&&t&&!t[a]&&n(t,a,{configurable:!0,get:function(){return this}})}},"2a62":function(e,t,n){var i=n("c65b"),r=n("825a"),s=n("dc4a");e.exports=function(e,t,n){var o,a;r(e);try{if(o=s(e,"return"),!o){if("throw"===t)throw n;return n}o=i(o,e)}catch(c){a=!0,o=c}if("throw"===t)throw n;if(a)throw o;return r(o),n}},"2ba4":function(e,t,n){var i=n("40d5"),r=Function.prototype,s=r.apply,o=r.call;e.exports="object"==typeof Reflect&&Reflect.apply||(i?o.bind(s):function(){return o.apply(s,arguments)})},"2cf4":function(e,t,n){var i,r,s,o,a=n("da84"),c=n("2ba4"),l=n("0366"),u=n("1626"),h=n("1a2d"),d=n("d039"),f=n("1be4"),p=n("f36a"),m=n("cc12"),g=n("1cdc"),_=n("605d"),v=a.setImmediate,b=a.clearImmediate,y=a.process,w=a.Dispatch,O=a.Function,C=a.MessageChannel,E=a.String,T=0,I={},k="onreadystatechange";try{i=a.location}catch(A){}var S=function(e){if(h(I,e)){var t=I[e];delete I[e],t()}},x=function(e){return function(){S(e)}},j=function(e){S(e.data)},N=function(e){a.postMessage(E(e),i.protocol+"//"+i.host)};v&&b||(v=function(e){var t=p(arguments,1);return I[++T]=function(){c(u(e)?e:O(e),void 0,t)},r(T),T},b=function(e){delete I[e]},_?r=function(e){y.nextTick(x(e))}:w&&w.now?r=function(e){w.now(x(e))}:C&&!g?(s=new C,o=s.port2,s.port1.onmessage=j,r=l(o.postMessage,o)):a.addEventListener&&u(a.postMessage)&&!a.importScripts&&i&&"file:"!==i.protocol&&!d(N)?(r=N,a.addEventListener("message",j,!1)):r=k in m("script")?function(e){f.appendChild(m("script"))[k]=function(){f.removeChild(this),S(e)}}:function(e){setTimeout(x(e),0)}),e.exports={set:v,clear:b}},"2d00":function(e,t,n){var i,r,s=n("da84"),o=n("342f"),a=s.process,c=s.Deno,l=a&&a.versions||c&&c.version,u=l&&l.v8;u&&(i=u.split("."),r=i[0]>0&&i[0]<4?1:+(i[0]+i[1])),!r&&o&&(i=o.match(/Edge\/(\d+)/),(!i||i[1]>=74)&&(i=o.match(/Chrome\/(\d+)/),i&&(r=+i[1]))),e.exports=r},"342f":function(e,t,n){var i=n("d066");e.exports=i("navigator","userAgent")||""},"35a1":function(e,t,n){var i=n("f5df"),r=n("dc4a"),s=n("3f8c"),o=n("b622"),a=o("iterator");e.exports=function(e){if(void 0!=e)return r(e,a)||r(e,"@@iterator")||s[i(e)]}},"37e8":function(e,t,n){var i=n("83ab"),r=n("aed9"),s=n("9bf2"),o=n("825a"),a=n("fc6a"),c=n("df75");t.f=i&&!r?Object.defineProperties:function(e,t){o(e);var n,i=a(t),r=c(t),l=r.length,u=0;while(l>u)s.f(e,n=r[u++],i[n]);return e}},"3a9b":function(e,t,n){var i=n("e330");e.exports=i({}.isPrototypeOf)},"3bbe":function(e,t,n){var i=n("da84"),r=n("1626"),s=i.String,o=i.TypeError;e.exports=function(e){if("object"==typeof e||r(e))return e;throw o("Can't set "+s(e)+" as a prototype")}},"3f4e":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n("abc5");const r="devtools-plugin:setup",s="plugin:settings:set";class o{constructor(e,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=t;const n={};if(e.settings)for(const s in e.settings){const t=e.settings[s];n[s]=t.defaultValue}const i="__vue-devtools-plugin-settings__"+e.id;let r=Object.assign({},n);try{const e=localStorage.getItem(i),t=JSON.parse(e);Object.assign(r,t)}catch(o){}this.fallbacks={getSettings(){return r},setSettings(e){try{localStorage.setItem(i,JSON.stringify(e))}catch(o){}r=e}},t&&t.on(s,(e,t)=>{e===this.plugin.id&&this.fallbacks.setSettings(t)}),this.proxiedOn=new Proxy({},{get:(e,t)=>this.target?this.target.on[t]:(...e)=>{this.onQueue.push({method:t,args:e})}}),this.proxiedTarget=new Proxy({},{get:(e,t)=>this.target?this.target[t]:"on"===t?this.proxiedOn:Object.keys(this.fallbacks).includes(t)?(...e)=>(this.targetQueue.push({method:t,args:e,resolve:()=>{}}),this.fallbacks[t](...e)):(...e)=>new Promise(n=>{this.targetQueue.push({method:t,args:e,resolve:n})})})}async setRealTarget(e){this.target=e;for(const t of this.onQueue)this.target.on[t.method](...t.args);for(const t of this.targetQueue)t.resolve(await this.target[t.method](...t.args))}}function a(e,t){const n=Object(i["b"])(),s=Object(i["a"])(),a=i["c"]&&e.enableEarlyProxy;if(!s||!n.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&a){const i=a?new o(e,s):null,r=n.__VUE_DEVTOOLS_PLUGINS__=n.__VUE_DEVTOOLS_PLUGINS__||[];r.push({pluginDescriptor:e,setupFn:t,proxy:i}),i&&t(i.proxiedTarget)}else s.emit(r,e,t)}},"3f8c":function(e,t){e.exports={}},"40d5":function(e,t,n){var i=n("d039");e.exports=!i((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},4362:function(e,t,n){t.nextTick=function(e){var t=Array.prototype.slice.call(arguments);t.shift(),setTimeout((function(){e.apply(null,t)}),0)},t.platform=t.arch=t.execPath=t.title="browser",t.pid=1,t.browser=!0,t.env={},t.argv=[],t.binding=function(e){throw new Error("No such module. (Possibly not yet loaded)")},function(){var e,i="/";t.cwd=function(){return i},t.chdir=function(t){e||(e=n("df7c")),i=e.resolve(t,i)}}(),t.exit=t.kill=t.umask=t.dlopen=t.uptime=t.memoryUsage=t.uvCounters=function(){},t.features={}},"44ad":function(e,t,n){var i=n("da84"),r=n("e330"),s=n("d039"),o=n("c6b6"),a=i.Object,c=r("".split);e.exports=s((function(){return!a("z").propertyIsEnumerable(0)}))?function(e){return"String"==o(e)?c(e,""):a(e)}:a},"44d2":function(e,t,n){var i=n("b622"),r=n("7c73"),s=n("9bf2"),o=i("unscopables"),a=Array.prototype;void 0==a[o]&&s.f(a,o,{configurable:!0,value:r(null)}),e.exports=function(e){a[o][e]=!0}},"44de":function(e,t,n){var i=n("da84");e.exports=function(e,t){var n=i.console;n&&n.error&&(1==arguments.length?n.error(e):n.error(e,t))}},4840:function(e,t,n){var i=n("825a"),r=n("5087"),s=n("b622"),o=s("species");e.exports=function(e,t){var n,s=i(e).constructor;return void 0===s||void 0==(n=i(s)[o])?t:r(n)}},"485a":function(e,t,n){var i=n("da84"),r=n("c65b"),s=n("1626"),o=n("861d"),a=i.TypeError;e.exports=function(e,t){var n,i;if("string"===t&&s(n=e.toString)&&!o(i=r(n,e)))return i;if(s(n=e.valueOf)&&!o(i=r(n,e)))return i;if("string"!==t&&s(n=e.toString)&&!o(i=r(n,e)))return i;throw a("Can't convert object to primitive value")}},4930:function(e,t,n){var i=n("2d00"),r=n("d039");e.exports=!!Object.getOwnPropertySymbols&&!r((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&i&&i<41}))},"4d64":function(e,t,n){var i=n("fc6a"),r=n("23cb"),s=n("07fa"),o=function(e){return function(t,n,o){var a,c=i(t),l=s(c),u=r(o,l);if(e&&n!=n){while(l>u)if(a=c[u++],a!=a)return!0}else for(;l>u;u++)if((e||u in c)&&c[u]===n)return e||u||0;return!e&&-1}};e.exports={includes:o(!0),indexOf:o(!1)}},5087:function(e,t,n){var i=n("da84"),r=n("68ee"),s=n("0d51"),o=i.TypeError;e.exports=function(e){if(r(e))return e;throw o(s(e)+" is not a constructor")}},"50c4":function(e,t,n){var i=n("5926"),r=Math.min;e.exports=function(e){return e>0?r(i(e),9007199254740991):0}},"51b0":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return Go})),n.d(t,"b",(function(){return Uo})),n.d(t,"c",(function(){return Ro}));var i=n("589b"),r=n("22e5"),s=n("1fd5"),o=n("e691");const a="@firebase/database",c="0.12.5";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let l="";function u(e){l=e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Object(s["H"])(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:Object(s["A"])(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return Object(s["j"])(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f=function(e){try{if("undefined"!==typeof window&&"undefined"!==typeof window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new h(t)}}catch(t){}return new d},p=f("localStorage"),m=f("sessionStorage"),g=new o["b"]("@firebase/database"),_=function(){let e=1;return function(){return e++}}(),v=function(e){const t=Object(s["G"])(e),n=new s["d"];n.update(t);const i=n.digest();return s["g"].encodeByteArray(i)},b=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"===typeof i&&"number"===typeof i.length?t+=b.apply(null,i):t+="object"===typeof i?Object(s["H"])(i):i,t+=" "}return t};let y=null,w=!0;const O=function(e,t){Object(s["e"])(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(g.logLevel=o["a"].VERBOSE,y=g.log.bind(g),t&&m.set("logging_enabled",!0)):"function"===typeof e?y=e:(y=null,m.remove("logging_enabled"))},C=function(...e){if(!0===w&&(w=!1,null===y&&!0===m.get("logging_enabled")&&O(!0)),y){const t=b.apply(null,e);y(t)}},E=function(e){return function(...t){C(e,...t)}},T=function(...e){const t="FIREBASE INTERNAL ERROR: "+b(...e);g.error(t)},I=function(...e){const t="FIREBASE FATAL ERROR: "+b(...e);throw g.error(t),new Error(t)},k=function(...e){const t="FIREBASE WARNING: "+b(...e);g.warn(t)},S=function(){"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&k("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},x=function(e){return"number"===typeof e&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},j=function(e){if(Object(s["x"])()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{"complete"===document.readyState&&n()}),window.attachEvent("onload",n))}},N="[MIN_NAME]",A="[MAX_NAME]",P=function(e,t){if(e===t)return 0;if(e===N||t===A)return-1;if(t===N||e===A)return 1;{const n=$(e),i=$(t);return null!==n?null!==i?n-i===0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},R=function(e,t){return e===t?0:e<t?-1:1},L=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+Object(s["H"])(t))},D=function(e){if("object"!==typeof e||null===e)return Object(s["H"])(e);const t=[];for(const i in e)t.push(i);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=Object(s["H"])(t[i]),n+=":",n+=D(e[t[i]]);return n+="}",n},M=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let r=0;r<n;r+=t)r+t>n?i.push(e.substring(r,n)):i.push(e.substring(r,r+t));return i};function F(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const U=function(e){Object(s["e"])(!x(e),"Invalid JSON number");const t=11,n=52,i=(1<<t-1)-1;let r,o,a,c,l;0===e?(o=0,a=0,r=1/e===-1/0?1:0):(r=e<0,e=Math.abs(e),e>=Math.pow(2,1-i)?(c=Math.min(Math.floor(Math.log(e)/Math.LN2),i),o=c+i,a=Math.round(e*Math.pow(2,n-c)-Math.pow(2,n))):(o=0,a=Math.round(e/Math.pow(2,1-i-n))));const u=[];for(l=n;l;l-=1)u.push(a%2?1:0),a=Math.floor(a/2);for(l=t;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);u.push(r?1:0),u.reverse();const h=u.join("");let d="";for(l=0;l<64;l+=8){let e=parseInt(h.substr(l,8),2).toString(16);1===e.length&&(e="0"+e),d+=e}return d.toLowerCase()},q=function(){return!("object"!==typeof window||!window["chrome"]||!window["chrome"]["extension"]||/^chrome/.test(window.location.href))},H=function(){return"object"===typeof Windows&&"object"===typeof Windows.UI};function W(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const i=new Error(e+" at "+t._path.toString()+": "+n);return i.code=e.toUpperCase(),i}const V=new RegExp("^-?(0*)\\d{1,10}$"),B=-2147483648,z=2147483647,$=function(e){if(V.test(e)){const t=Number(e);if(t>=B&&t<=z)return t}return null},G=function(e){try{e()}catch(t){setTimeout(()=>{const e=t.stack||"";throw k("Exception was thrown by user callback.",e),t},Math.floor(0))}},K=function(){const e="object"===typeof window&&window["navigator"]&&window["navigator"]["userAgent"]||"";return e.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Y=function(e,t){const n=setTimeout(e,t);return"object"===typeof n&&n["unref"]&&n["unref"](),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class J{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null===t||void 0===t?void 0:t.getImmediate({optional:!0}),this.appCheck||null===t||void 0===t||t.get().then(e=>this.appCheck=e)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,n)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){k(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit(e=>this.auth_=e)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(e=>e&&"auth/token-not-initialized"===e.code?(C("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e)):new Promise((t,n)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',k(e)}}class X{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}X.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Z="5",ee="v",te="s",ne="r",ie="f",re=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,se="ls",oe="p",ae="ac",ce="websocket",le="long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ue{constructor(e,t,n,i,r=!1,s="",o=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=p.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&p.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?"?ns="+this.namespace:"";return`${e}${this.host}/${t}`}}function he(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function de(e,t,n){let i;if(Object(s["e"])("string"===typeof t,"typeof type must == string"),Object(s["e"])("object"===typeof n,"typeof params must == object"),t===ce)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==le)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}he(e)&&(n["ns"]=e.namespace);const r=[];return F(n,(e,t)=>{r.push(e+"="+t)}),i+r.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(){this.counters_={}}incrementCounter(e,t=1){Object(s["j"])(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Object(s["m"])(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe={},me={};function ge(e){const t=e.toString();return pe[t]||(pe[t]=new fe),pe[t]}function _e(e,t){const n=e.toString();return me[n]||(me[n]=t()),me[n]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){this.pendingResponses[e]=t;while(this.pendingResponses[this.currentResponseNum]){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&G(()=>{this.onMessage_(e[t])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const be="start",ye="close",we="pLPCommand",Oe="pRTLPCB",Ce="id",Ee="pw",Te="ser",Ie="cb",ke="seg",Se="ts",xe="d",je="dframe",Ne=1870,Ae=30,Pe=Ne-Ae,Re=25e3,Le=3e4;class De{constructor(e,t,n,i,r,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=E(e),this.stats_=ge(t),this.urlFn=e=>(this.appCheckToken&&(e[ae]=this.appCheckToken),de(t,le,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new ve(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Le)),j(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Me((...e)=>{const[t,n,i,r,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===be)this.id=n,this.password=i;else{if(t!==ye)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,()=>{this.onClosed_()})):this.onClosed_()}},(...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)},()=>{this.onClosed_()},this.urlFn);const e={};e[be]="t",e[Te]=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e[Ie]=this.scriptTagHolder.uniqueCallbackIdentifier),e[ee]=Z,this.transportSessionId&&(e[te]=this.transportSessionId),this.lastSessionId&&(e[se]=this.lastSessionId),this.applicationId&&(e[oe]=this.applicationId),this.appCheckToken&&(e[ae]=this.appCheckToken),"undefined"!==typeof location&&location.hostname&&re.test(location.hostname)&&(e[ne]=ie);const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){De.forceAllow_=!0}static forceDisallow(){De.forceDisallow_=!0}static isAvailable(){return!Object(s["x"])()&&(!!De.forceAllow_||!De.forceDisallow_&&"undefined"!==typeof document&&null!=document.createElement&&!q()&&!H())}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Object(s["H"])(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Object(s["i"])(t),i=M(n,Pe);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(Object(s["x"])())return;this.myDisconnFrame=document.createElement("iframe");const n={};n[je]="t",n[Ce]=e,n[Ee]=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Object(s["H"])(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Me{constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,Object(s["x"])())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=_(),window[we+this.uniqueCallbackIdentifier]=e,window[Oe+this.uniqueCallbackIdentifier]=t,this.myIFrame=Me.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)){const e=document.domain;n='<script>document.domain="'+e+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(r){C("frame writing exception"),r.stack&&C(r.stack),C(r)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{const t=e.contentWindow.document;t||C("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){this.myID=e,this.myPW=t,this.alive=!0;while(this.newRequest_());}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ce]=this.myID,e[Ee]=this.myPW,e[Te]=this.currentSerial;let t=this.urlFn(e),n="",i=0;while(this.pendingSegs.length>0){const e=this.pendingSegs[0];if(!(e.d.length+Ae+n.length<=Ne))break;{const e=this.pendingSegs.shift();n=n+"&"+ke+i+"="+e.seg+"&"+Se+i+"="+e.ts+"&"+xe+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(Re)),r=()=>{clearTimeout(i),n()};this.addTag(e,r)}addTag(e,t){Object(s["x"])()?this.doNodeLongPoll(e,t):setTimeout(()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{C("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(n){}},Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fe=16384,Ue=45e3;let qe=null;"undefined"!==typeof MozWebSocket?qe=MozWebSocket:"undefined"!==typeof WebSocket&&(qe=WebSocket);class He{constructor(e,t,n,i,r,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=E(this.connId),this.stats_=ge(t),this.connURL=He.connectionURL_(t,s,o,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,i){const r={};return r[ee]=Z,!Object(s["x"])()&&"undefined"!==typeof location&&location.hostname&&re.test(location.hostname)&&(r[ne]=ie),t&&(r[te]=t),n&&(r[se]=n),i&&(r[ae]=i),de(e,ce,r)}open(t,n){this.onDisconnect=n,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,p.set("previous_websocket_failure",!0);try{if(Object(s["x"])()){const t=this.nodeAdmin?"AdminNode":"Node",n={headers:{"User-Agent":`Firebase/${Z}/${l}/${e.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}};this.authToken&&(n.headers["Authorization"]="Bearer "+this.authToken),this.appCheckToken&&(n.headers["X-Firebase-AppCheck"]=this.appCheckToken);const i=Object({NODE_ENV:"production",BASE_URL:"/"}),r=0===this.connURL.indexOf("wss://")?i["HTTPS_PROXY"]||i["https_proxy"]:i["HTTP_PROXY"]||i["http_proxy"];r&&(n["proxy"]={origin:r}),this.mySock=new qe(this.connURL,[],n)}else{const e={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new qe(this.connURL,[],e)}}catch(i){this.log_("Error instantiating WebSocket.");const e=i.message||i.data;return e&&this.log_(e),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){He.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!==typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==qe&&!He.forceDisallow_}static previouslyFailed(){return p.isInMemoryStorage||!0===p.get("previous_websocket_failure")}markConnectionHealthy(){p.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=Object(s["A"])(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(Object(s["e"])(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e["data"];if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=Object(s["H"])(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=M(t,Fe);n.length>1&&this.sendString_(String(n.length));for(let i=0;i<n.length;i++)this.sendString_(n[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Ue))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}He.responsesRequiredToBeHealthy=2,He.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class We{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[De,He]}initTransports_(e){const t=He&&He["isAvailable"]();let n=t&&!He.previouslyFailed();if(e.webSocketOnly&&(t||k("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[He];else{const e=this.transports_=[];for(const t of We.ALL_TRANSPORTS)t&&t["isAvailable"]()&&e.push(t)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ve=6e4,Be=5e3,ze=10240,$e=102400,Ge="t",Ke="d",Ye="s",Je="r",Qe="e",Xe="o",Ze="a",et="n",tt="p",nt="h";class it{constructor(e,t,n,i,r,s,o,a,c,l){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=l,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=E("c:"+this.id+":"),this.transportManager_=new We(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,n)},Math.floor(0));const i=e["healthyTimeout"]||0;i>0&&(this.healthyTimeout_=Y(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>$e?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>ze?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ge in e){const t=e[Ge];t===Ze?this.upgradeIfSecondaryHealthy_():t===Je?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):t===Xe&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=L("t",e),n=L("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:tt,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ze,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:et,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=L("t",e),n=L("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=L(Ge,e);if(Ke in e){const n=e[Ke];if(t===nt)this.onHandshake_(n);else if(t===et){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Ye?this.onConnectionShutdown_(n):t===Je?this.onReset_(n):t===Qe?T("Server Error: "+n):t===Xe?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):T("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Z!==n&&k("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Y(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Ve))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Y(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Be))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:tt,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(p.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.allowedEvents_=e,this.listeners_={},Object(s["e"])(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!n||n===i[r].context))return void i.splice(r,1)}validateEventType_(e){Object(s["e"])(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot extends st{constructor(){super(["online"]),this.online_=!0,"undefined"===typeof window||"undefined"===typeof window.addEventListener||Object(s["w"])()||(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ot}getInitialEvent(e){return Object(s["e"])("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at=32,ct=768;class lt{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function ut(){return new lt("")}function ht(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function dt(e){return e.pieces_.length-e.pieceNum_}function ft(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new lt(e.pieces_,t)}function pt(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function mt(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function gt(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function _t(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new lt(t,0)}function vt(e,t){const n=[];for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);if(t instanceof lt)for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new lt(n,0)}function bt(e){return e.pieceNum_>=e.pieces_.length}function yt(e,t){const n=ht(e),i=ht(t);if(null===n)return t;if(n===i)return yt(ft(e),ft(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function wt(e,t){if(dt(e)!==dt(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function Ot(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(dt(e)>dt(t))return!1;while(n<e.pieces_.length){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class Ct{constructor(e,t){this.errorPrefix_=t,this.parts_=gt(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=Object(s["F"])(this.parts_[n]);It(this)}}function Et(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=Object(s["F"])(t),It(e)}function Tt(e){const t=e.parts_.pop();e.byteLength_-=Object(s["F"])(t),e.parts_.length>0&&(e.byteLength_-=1)}function It(e){if(e.byteLength_>ct)throw new Error(e.errorPrefix_+"has a key path longer than "+ct+" bytes ("+e.byteLength_+").");if(e.parts_.length>at)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+at+") or object contains a cycle "+kt(e))}function kt(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends st{constructor(){let e,t;super(["visible"]),"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document["hidden"]?(t="visibilitychange",e="hidden"):"undefined"!==typeof document["mozHidden"]?(t="mozvisibilitychange",e="mozHidden"):"undefined"!==typeof document["msHidden"]?(t="msvisibilitychange",e="msHidden"):"undefined"!==typeof document["webkitHidden"]&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))},!1)}static getInstance(){return new St}getInitialEvent(e){return Object(s["e"])("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt=1e3,jt=3e5,Nt=3e3,At=3e4,Pt=1.3,Rt=3e4,Lt="server_kill",Dt=3;class Mt extends rt{constructor(e,t,n,i,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Mt.nextPersistentConnectionId_++,this.log_=E("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=xt,this.maxReconnectDelay_=jt,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!Object(s["x"])())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");St.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&ot.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(Object(s["H"])(r)),Object(s["e"])(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new s["a"],n={p:e._path.toString(),q:e._queryObject},i={action:"g",request:n,onComplete:e=>{const i=e["d"];"ok"===e["s"]?(this.onDataUpdate_(n["p"],i,!1,null),t.resolve(i)):t.reject(i)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const e=this.outstandingGets_[r];void 0!==e&&i===e&&(delete this.outstandingGets_[r],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),this.log_("get "+r+" timed out on connection"),t.reject(new Error("Client is offline.")))},Nt),this.connected_&&this.sendGet_(r),t.promise}listen(e,t,n,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),Object(s["e"])(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Object(s["e"])(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)})}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const r={p:n},s="q";e.tag&&(r["q"]=t._queryObject,r["t"]=e.tag),r["h"]=e.hashFn(),this.sendRequest(s,r,r=>{const s=r["d"],o=r["s"];Mt.warnOnListenWarnings_(s,t);const a=this.listens.get(n)&&this.listens.get(n).get(i);a===e&&(this.log_("listen response",r),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,s))})}static warnOnListenWarnings_(e,t){if(e&&"object"===typeof e&&Object(s["j"])(e,"w")){const n=Object(s["E"])(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();k(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at `+n+" to your security rules for better performance.")}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){const t=e&&40===e.length;(t||Object(s["s"])(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=At)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Object(s["z"])(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n["noauth"]=!0:"object"===typeof this.authOverride_&&(n["authvar"]=this.authOverride_),this.sendRequest(t,n,t=>{const n=t["s"],i=t["d"]||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e["s"],n=e["d"]||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)})}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),Object(s["e"])(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");const r=this.removeListen_(n,i);r&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},s="n";i&&(r["q"]=n,r["t"]=i),this.sendRequest(s,r)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const r={p:t,d:n};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,e=>{i&&setTimeout(()=>{i(e["s"],e["d"])},Math.floor(0))})}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,r){this.initConnection_();const s={p:t,d:n};void 0!==r&&(s["h"]=r),this.outstandingPuts_.push({action:e,request:s,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n["s"],n["d"])})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,e=>{const t=e["s"];if("ok"!==t){const t=e["d"];this.log_("reportStats","Error sending stats: "+t)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Object(s["H"])(e));const t=e["r"],n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e["b"]))}else{if("error"in e)throw"A server-side error has occurred: "+e["error"];"a"in e&&this.onDataPush_(e["a"],e["b"])}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t["p"],t["d"],!1,t["t"]):"m"===e?this.onDataUpdate_(t["p"],t["d"],!0,t["t"]):"c"===e?this.onListenRevoked_(t["p"],t["q"]):"ac"===e?this.onAuthRevoked_(t["s"],t["d"]):"apc"===e?this.onAppCheckRevoked_(t["s"],t["d"]):"sd"===e?this.onSecurityDebugPacket_(t):T("Unrecognized action received from server: "+Object(s["H"])(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){Object(s["e"])(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=xt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=xt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){const e=(new Date).getTime()-this.lastConnectionEstablishedTime_;e>Rt&&(this.reconnectDelay_=xt),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Pt)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Mt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,n())},l=function(e){Object(s["e"])(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(e)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[s,c]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?C("getToken() completed but was canceled"):(C("getToken() completed. Creating connection."),this.authToken_=s&&s.accessToken,this.appCheckToken_=c&&c.token,a=new it(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,e=>{k(e+" ("+this.repoInfo_.toString()+")"),this.interrupt(Lt)},r))}catch(T){this.log_("Failed to get token: "+T),o||(this.repoInfo_.nodeAdmin&&k(T),c())}}}interrupt(e){C("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){C("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Object(s["u"])(this.interruptReasons_)&&(this.reconnectDelay_=xt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map(e=>D(e)).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new lt(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){C("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Dt&&(this.reconnectDelay_=At,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){C("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Dt&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e["msg"].replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);while(this.onDisconnectRequestQueue_.length){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";Object(s["x"])()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+l.replace(/\./g,"-")]=1,Object(s["w"])()?e["framework.cordova"]=1:Object(s["y"])()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ot.getInstance().currentlyOnline();return Object(s["u"])(this.interruptReasons_)&&e}}Mt.nextPersistentConnectionId_=0,Mt.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ft{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Ft(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Ft(N,e),i=new Ft(N,t);return 0!==this.compare(n,i)}minPost(){return Ft.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qt;class Ht extends Ut{static get __EMPTY_NODE(){return qt}static set __EMPTY_NODE(e){qt=e}compare(e,t){return P(e.name,t.name)}isDefinedOn(e){throw Object(s["f"])("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Ft.MIN}maxPost(){return new Ft(A,qt)}makePost(e,t){return Object(s["e"])("string"===typeof e,"KeyIndex indexValue must always be a string."),new Ft(e,qt)}toString(){return".key"}}const Wt=new Ht;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e,t,n,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let s=1;while(!e.isEmpty())if(e=e,s=t?n(e.key,t):1,i&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else{if(0===s){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_){t=t.left;while(!t.isEmpty())this.nodeStack_.push(t),t=t.right}else{t=t.right;while(!t.isEmpty())this.nodeStack_.push(t),t=t.left}return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Bt{constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:Bt.RED,this.left=null!=i?i:$t.EMPTY_NODE,this.right=null!=r?r:$t.EMPTY_NODE}copy(e,t,n,i,r){return new Bt(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const r=n(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return $t.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return $t.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Bt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Bt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Bt.RED=!0,Bt.BLACK=!1;class zt{copy(e,t,n,i,r){return this}insert(e,t,n){return new Bt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class $t{constructor(e,t=$t.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new $t(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Bt.BLACK,null,null))}remove(e){return new $t(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Bt.BLACK,null,null))}get(e){let t,n=this.root_;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;n=n.left;while(!n.right.isEmpty())n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Vt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Vt(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Vt(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Vt(this.root_,null,this.comparator_,!0,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Gt(e,t){return P(e.name,t.name)}function Kt(e,t){return P(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yt;function Jt(e){Yt=e}$t.EMPTY_NODE=new zt;const Qt=function(e){return"number"===typeof e?"number:"+U(e):"string:"+e},Xt=function(e){if(e.isLeafNode()){const t=e.val();Object(s["e"])("string"===typeof t||"number"===typeof t||"object"===typeof t&&Object(s["j"])(t,".sv"),"Priority must be a string or number.")}else Object(s["e"])(e===Yt||e.isEmpty(),"priority of unexpected type.");Object(s["e"])(e===Yt||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Zt,en,tn;class nn{constructor(e,t=nn.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,Object(s["e"])(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Xt(this.priorityNode_)}static set __childrenNodeConstructor(e){Zt=e}static get __childrenNodeConstructor(){return Zt}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new nn(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:nn.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return bt(e)?this:".priority"===ht(e)?this.priorityNode_:nn.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:nn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=ht(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(Object(s["e"])(".priority"!==n||1===dt(e),".priority must be the last token in a path"),this.updateImmediateChild(n,nn.__childrenNodeConstructor.EMPTY_NODE.updateChild(ft(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Qt(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?U(this.value_):this.value_,this.lazyHash_=v(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===nn.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof nn.__childrenNodeConstructor?-1:(Object(s["e"])(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=nn.VALUE_TYPE_ORDER.indexOf(t),r=nn.VALUE_TYPE_ORDER.indexOf(n);return Object(s["e"])(i>=0,"Unknown leaf type: "+t),Object(s["e"])(r>=0,"Unknown leaf type: "+n),i===r?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}function rn(e){en=e}function sn(e){tn=e}nn.VALUE_TYPE_ORDER=["object","boolean","number","string"];class on extends Ut{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),r=n.compareTo(i);return 0===r?P(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Ft.MIN}maxPost(){return new Ft(A,new nn("[PRIORITY-POST]",tn))}makePost(e,t){const n=en(e);return new Ft(t,new nn("[PRIORITY-POST]",n))}toString(){return".priority"}}const an=new on,cn=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e){const t=e=>parseInt(Math.log(e)/cn,10),n=e=>parseInt(Array(e+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=n(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const un=function(e,t,n,i){e.sort(t);const r=function(t,i){const s=i-t;let o,a;if(0===s)return null;if(1===s)return o=e[t],a=n?n(o):o,new Bt(a,o.node,Bt.BLACK,null,null);{const c=parseInt(s/2,10)+t,l=r(t,c),u=r(c+1,i);return o=e[c],a=n?n(o):o,new Bt(a,o.node,Bt.BLACK,l,u)}},s=function(t){let i=null,s=null,o=e.length;const a=function(t,i){const s=o-t,a=o;o-=t;const l=r(s+1,a),u=e[s],h=n?n(u):u;c(new Bt(h,u.node,i,null,l))},c=function(e){i?(i.left=e,i=e):(s=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,Bt.BLACK):(a(i,Bt.BLACK),a(i,Bt.RED))}return s},o=new ln(e.length),a=s(o);return new $t(i||t,a)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hn;const dn={};class fn{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return Object(s["e"])(dn&&an,"ChildrenNode.ts has not been loaded"),hn=hn||new fn({".priority":dn},{".priority":an}),hn}get(e){const t=Object(s["E"])(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof $t?t:null}hasIndex(e){return Object(s["j"])(this.indexSet_,e.toString())}addIndex(e,t){Object(s["e"])(e!==Wt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const r=t.getIterator(Ft.Wrap);let o,a=r.getNext();while(a)i=i||e.isDefinedOn(a.node),n.push(a),a=r.getNext();o=i?un(n,e.getCompare()):dn;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const u=Object.assign({},this.indexes_);return u[c]=o,new fn(u,l)}addToIndexes(e,t){const n=Object(s["B"])(this.indexes_,(n,i)=>{const r=Object(s["E"])(this.indexSet_,i);if(Object(s["e"])(r,"Missing index implementation for "+i),n===dn){if(r.isDefinedOn(e.node)){const n=[],i=t.getIterator(Ft.Wrap);let s=i.getNext();while(s)s.name!==e.name&&n.push(s),s=i.getNext();return n.push(e),un(n,r.getCompare())}return dn}{const i=t.get(e.name);let r=n;return i&&(r=r.remove(new Ft(e.name,i))),r.insert(e,e.node)}});return new fn(n,this.indexSet_)}removeFromIndexes(e,t){const n=Object(s["B"])(this.indexes_,n=>{if(n===dn)return n;{const i=t.get(e.name);return i?n.remove(new Ft(e.name,i)):n}});return new fn(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pn;class mn{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Xt(this.priorityNode_),this.children_.isEmpty()&&Object(s["e"])(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return pn||(pn=new mn(new $t(Kt),null,fn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||pn}updatePriority(e){return this.children_.isEmpty()?this:new mn(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?pn:t}}getChild(e){const t=ht(e);return null===t?this:this.getImmediateChild(t).getChild(ft(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(Object(s["e"])(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new Ft(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(n,this.children_));const s=i.isEmpty()?pn:this.priorityNode_;return new mn(i,s,r)}}updateChild(e,t){const n=ht(e);if(null===n)return t;{Object(s["e"])(".priority"!==ht(e)||1===dt(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(ft(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,r=!0;if(this.forEachChild(an,(s,o)=>{t[s]=o.val(e),n++,r&&mn.INTEGER_REGEXP_.test(s)?i=Math.max(i,Number(s)):r=!1}),!e&&r&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Qt(this.getPriority().val())+":"),this.forEachChild(an,(t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)}),this.lazyHash_=""===e?"":v(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new Ft(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Ft(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Ft(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal(e=>t(e.name,e.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,e=>e);{const n=this.children_.getIteratorFrom(e.name,Ft.Wrap);let i=n.peek();while(null!=i&&t.compare(i,e)<0)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,e=>e);{const n=this.children_.getReverseIteratorFrom(e.name,Ft.Wrap);let i=n.peek();while(null!=i&&t.compare(i,e)>0)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===_n?-1:0}withIndex(e){if(e===Wt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new mn(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Wt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(an),n=t.getIterator(an);let i=e.getNext(),r=n.getNext();while(i&&r){if(i.name!==r.name||!i.node.equals(r.node))return!1;i=e.getNext(),r=n.getNext()}return null===i&&null===r}return!1}return!1}}resolveIndex_(e){return e===Wt?null:this.indexMap_.get(e.toString())}}mn.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class gn extends mn{constructor(){super(new $t(Kt),mn.EMPTY_NODE,fn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return mn.EMPTY_NODE}isEmpty(){return!1}}const _n=new gn;Object.defineProperties(Ft,{MIN:{value:new Ft(N,mn.EMPTY_NODE)},MAX:{value:new Ft(A,_n)}}),Ht.__EMPTY_NODE=mn.EMPTY_NODE,nn.__childrenNodeConstructor=mn,Jt(_n),sn(_n);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const vn=!0;function bn(e,t=null){if(null===e)return mn.EMPTY_NODE;if("object"===typeof e&&".priority"in e&&(t=e[".priority"]),Object(s["e"])(null===t||"string"===typeof t||"number"===typeof t||"object"===typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"===typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!==typeof e||".sv"in e){const n=e;return new nn(n,bn(t))}if(e instanceof Array||!vn){let n=mn.EMPTY_NODE;return F(e,(t,i)=>{if(Object(s["j"])(e,t)&&"."!==t.substring(0,1)){const e=bn(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}}),n.updatePriority(bn(t))}{const n=[];let i=!1;const r=e;if(F(r,(e,t)=>{if("."!==e.substring(0,1)){const r=bn(t);r.isEmpty()||(i=i||!r.getPriority().isEmpty(),n.push(new Ft(e,r)))}}),0===n.length)return mn.EMPTY_NODE;const s=un(n,Gt,e=>e.name,Kt);if(i){const e=un(n,an.getCompare());return new mn(s,bn(t),new fn({".priority":e},{".priority":an}))}return new mn(s,bn(t),fn.Default)}}rn(bn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yn extends Ut{constructor(e){super(),this.indexPath_=e,Object(s["e"])(!bt(e)&&".priority"!==ht(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),r=n.compareTo(i);return 0===r?P(e.name,t.name):r}makePost(e,t){const n=bn(e),i=mn.EMPTY_NODE.updateChild(this.indexPath_,n);return new Ft(t,i)}maxPost(){const e=mn.EMPTY_NODE.updateChild(this.indexPath_,_n);return new Ft(A,e)}toString(){return gt(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends Ut{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?P(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Ft.MIN}maxPost(){return Ft.MAX}makePost(e,t){const n=bn(e);return new Ft(t,n)}toString(){return".value"}}const On=new wn,Cn="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){let e=0;const t=[]})();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function En(e){return{type:"value",snapshotNode:e}}function Tn(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function In(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function kn(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function Sn(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e){this.index_=e}updateChild(e,t,n,i,r,o){Object(s["e"])(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(n.getChild(i))&&a.isEmpty()===n.isEmpty()?e:(null!=o&&(n.isEmpty()?e.hasChild(t)?o.trackChildChange(In(t,a)):Object(s["e"])(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Tn(t,n)):o.trackChildChange(kn(t,n,a))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(an,(e,i)=>{t.hasChild(e)||n.trackChildChange(In(e,i))}),t.isLeafNode()||t.forEachChild(an,(t,i)=>{if(e.hasChild(t)){const r=e.getImmediateChild(t);r.equals(i)||n.trackChildChange(kn(t,i,r))}else n.trackChildChange(Tn(t,i))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?mn.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e){this.indexedFilter_=new xn(e.getIndex()),this.index_=e.getIndex(),this.startPost_=jn.getStartPost_(e),this.endPost_=jn.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,n,i,r,s){return this.matches(new Ft(t,n))||(n=mn.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,i,r,s)}updateFullNode(e,t,n){t.isLeafNode()&&(t=mn.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(mn.EMPTY_NODE);const r=this;return t.forEachChild(an,(e,t)=>{r.matches(new Ft(e,t))||(i=i.updateImmediateChild(e,mn.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e){this.rangedFilter_=new jn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,n,i,r,s){return this.rangedFilter_.matches(new Ft(t,n))||(n=mn.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,i,r,s):this.fullLimitUpdateChild_(e,t,n,r,s)}updateFullNode(e,t,n){let i;if(t.isLeafNode()||t.isEmpty())i=mn.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;i=mn.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;while(e.hasNext()&&n<this.limit_){const t=e.getNext();let r;if(r=this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),t)<=0:this.index_.compare(t,this.rangedFilter_.getEndPost())<=0,!r)break;i=i.updateImmediateChild(t.name,t.node),n++}}else{let e,n,r,s;if(i=t.withIndex(this.index_),i=i.updatePriority(mn.EMPTY_NODE),this.reverse_){s=i.getReverseIterator(this.index_),e=this.rangedFilter_.getEndPost(),n=this.rangedFilter_.getStartPost();const t=this.index_.getCompare();r=(e,n)=>t(n,e)}else s=i.getIterator(this.index_),e=this.rangedFilter_.getStartPost(),n=this.rangedFilter_.getEndPost(),r=this.index_.getCompare();let o=0,a=!1;while(s.hasNext()){const t=s.getNext();!a&&r(e,t)<=0&&(a=!0);const c=a&&o<this.limit_&&r(t,n)<=0;c?o++:i=i.updateImmediateChild(t.name,mn.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,i,r){let o;if(this.reverse_){const e=this.index_.getCompare();o=(t,n)=>e(n,t)}else o=this.index_.getCompare();const a=e;Object(s["e"])(a.numChildren()===this.limit_,"");const c=new Ft(t,n),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(c);if(a.hasChild(t)){const e=a.getImmediateChild(t);let s=i.getChildAfterChild(this.index_,l,this.reverse_);while(null!=s&&(s.name===t||a.hasChild(s.name)))s=i.getChildAfterChild(this.index_,s,this.reverse_);const h=null==s?1:o(s,c),d=u&&!n.isEmpty()&&h>=0;if(d)return null!=r&&r.trackChildChange(kn(t,n,e)),a.updateImmediateChild(t,n);{null!=r&&r.trackChildChange(In(t,e));const n=a.updateImmediateChild(t,mn.EMPTY_NODE),i=null!=s&&this.rangedFilter_.matches(s);return i?(null!=r&&r.trackChildChange(Tn(s.name,s.node)),n.updateImmediateChild(s.name,s.node)):n}}return n.isEmpty()?e:u&&o(l,c)>=0?(null!=r&&(r.trackChildChange(In(l.name,l.node)),r.trackChildChange(Tn(t,n))),a.updateImmediateChild(t,n).updateImmediateChild(l.name,mn.EMPTY_NODE)):e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=an}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return Object(s["e"])(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Object(s["e"])(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:N}hasEnd(){return this.endSet_}getIndexEndValue(){return Object(s["e"])(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Object(s["e"])(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:A}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return Object(s["e"])(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===an}copy(){const e=new An;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Pn(e){return e.loadsAllData()?new xn(e.getIndex()):e.hasLimit()?new Nn(e):new jn(e)}function Rn(e){const t={};if(e.isDefault())return t;let n;return e.index_===an?n="$priority":e.index_===On?n="$value":e.index_===Wt?n="$key":(Object(s["e"])(e.index_ instanceof yn,"Unrecognized index type!"),n=e.index_.toString()),t["orderBy"]=Object(s["H"])(n),e.startSet_&&(t["startAt"]=Object(s["H"])(e.indexStartValue_),e.startNameSet_&&(t["startAt"]+=","+Object(s["H"])(e.indexStartName_))),e.endSet_&&(t["endAt"]=Object(s["H"])(e.indexEndValue_),e.endNameSet_&&(t["endAt"]+=","+Object(s["H"])(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?t["limitToFirst"]=e.limit_:t["limitToLast"]=e.limit_),t}function Ln(e){const t={};if(e.startSet_&&(t["sp"]=e.indexStartValue_,e.startNameSet_&&(t["sn"]=e.indexStartName_)),e.endSet_&&(t["ep"]=e.indexEndValue_,e.endNameSet_&&(t["en"]=e.indexEndName_)),e.limitSet_){t["l"]=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t["vf"]=n}return e.index_!==an&&(t["i"]=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn extends rt{constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=E("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(Object(s["e"])(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Dn.getListenId_(e,n),a={};this.listens_[o]=a;const c=Rn(e._queryParams);this.restRequest_(r+".json",c,(e,t)=>{let c=t;if(404===e&&(c=null,e=null),null===e&&this.onDataUpdate_(r,c,!1,n),Object(s["E"])(this.listens_,o)===a){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}})}unlisten(e,t){const n=Dn.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Rn(e._queryParams),n=e._path.toString(),i=new s["a"];return this.restRequest_(n+".json",t,(e,t)=>{let r=t;404===e&&(r=null,e=null),null===e?(this.onDataUpdate_(n,r,!1,null),i.resolve(r)):i.reject(new Error(r))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t["format"]="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t["auth"]=i.accessToken),r&&r.token&&(t["ac"]=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Object(s["C"])(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(n&&4===a.readyState){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let t=null;if(a.status>=200&&a.status<300){try{t=Object(s["A"])(a.responseText)}catch(e){k("Failed to parse JSON response for "+o+": "+a.responseText)}n(null,t)}else 401!==a.status&&404!==a.status&&k("Got unsuccessful REST response for "+o+" Status: "+a.status),n(a.status);n=null}},a.open("GET",o,!0),a.send()})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(){this.rootNode_=mn.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(){return{value:null,children:new Map}}function Un(e,t,n){if(bt(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=ht(t);e.children.has(i)||e.children.set(i,Fn());const r=e.children.get(i);t=ft(t),Un(r,t,n)}}function qn(e,t,n){null!==e.value?n(t,e.value):Hn(e,(e,i)=>{const r=new lt(t.toString()+"/"+e);qn(i,r,n)})}function Hn(e,t){e.children.forEach((e,n)=>{t(n,e)})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&F(this.last_,(e,n)=>{t[e]=t[e]-n}),this.last_=e,t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn=1e4,Bn=3e4,zn=3e5;class $n{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Wn(e);const n=Vn+(Bn-Vn)*Math.random();Y(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;F(e,(e,i)=>{i>0&&Object(s["j"])(this.statsToReport_,e)&&(t[e]=i,n=!0)}),n&&this.server_.reportStats(t),Y(this.reportStats_.bind(this),Math.floor(2*Math.random()*zn))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Gn;function Kn(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Yn(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Jn(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e[e["OVERWRITE"]=0]="OVERWRITE",e[e["MERGE"]=1]="MERGE",e[e["ACK_USER_WRITE"]=2]="ACK_USER_WRITE",e[e["LISTEN_COMPLETE"]=3]="LISTEN_COMPLETE"})(Gn||(Gn={}));class Qn{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Gn.ACK_USER_WRITE,this.source=Kn()}operationForChild(e){if(bt(this.path)){if(null!=this.affectedTree.value)return Object(s["e"])(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new lt(e));return new Qn(ut(),t,this.revert)}}return Object(s["e"])(ht(this.path)===e,"operationForChild called for unrelated child."),new Qn(ft(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,t){this.source=e,this.path=t,this.type=Gn.LISTEN_COMPLETE}operationForChild(e){return bt(this.path)?new Xn(this.source,ut()):new Xn(this.source,ft(this.path))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Gn.OVERWRITE}operationForChild(e){return bt(this.path)?new Zn(this.source,ut(),this.snap.getImmediateChild(e)):new Zn(this.source,ft(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Gn.MERGE}operationForChild(e){if(bt(this.path)){const t=this.children.subtree(new lt(e));return t.isEmpty()?null:t.value?new Zn(this.source,ut(),t.value):new ei(this.source,ut(),t)}return Object(s["e"])(ht(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ei(this.source,ft(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(bt(e))return this.isFullyInitialized()&&!this.filtered_;const t=ht(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function ii(e,t,n,i){const r=[],s=[];return t.forEach(t=>{"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&s.push(Sn(t.childName,t.snapshotNode))}),ri(e,r,"child_removed",t,i,n),ri(e,r,"child_added",t,i,n),ri(e,r,"child_moved",s,i,n),ri(e,r,"child_changed",t,i,n),ri(e,r,"value",t,i,n),r}function ri(e,t,n,i,r,s){const o=i.filter(e=>e.type===n);o.sort((t,n)=>oi(e,t,n)),o.forEach(n=>{const i=si(e,n,s);r.forEach(r=>{r.respondsTo(n.type)&&t.push(r.createEvent(i,e.query_))})})}function si(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function oi(e,t,n){if(null==t.childName||null==n.childName)throw Object(s["f"])("Should only compare child_ events.");const i=new Ft(t.childName,t.snapshotNode),r=new Ft(n.childName,n.snapshotNode);return e.index_.compare(i,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(e,t){return{eventCache:e,serverCache:t}}function ci(e,t,n,i){return ai(new ti(t,n,i),e.serverCache)}function li(e,t,n,i){return ai(e.eventCache,new ti(t,n,i))}function ui(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function hi(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let di;const fi=()=>(di||(di=new $t(R)),di);class pi{constructor(e,t=fi()){this.value=e,this.children=t}static fromObject(e){let t=new pi(null);return F(e,(e,n)=>{t=t.set(new lt(e),n)}),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:ut(),value:this.value};if(bt(e))return null;{const n=ht(e),i=this.children.get(n);if(null!==i){const r=i.findRootMostMatchingPathAndValue(ft(e),t);if(null!=r){const e=vt(new lt(n),r.path);return{path:e,value:r.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(bt(e))return this;{const t=ht(e),n=this.children.get(t);return null!==n?n.subtree(ft(e)):new pi(null)}}set(e,t){if(bt(e))return new pi(t,this.children);{const n=ht(e),i=this.children.get(n)||new pi(null),r=i.set(ft(e),t),s=this.children.insert(n,r);return new pi(this.value,s)}}remove(e){if(bt(e))return this.children.isEmpty()?new pi(null):new pi(null,this.children);{const t=ht(e),n=this.children.get(t);if(n){const i=n.remove(ft(e));let r;return r=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&r.isEmpty()?new pi(null):new pi(this.value,r)}return this}}get(e){if(bt(e))return this.value;{const t=ht(e),n=this.children.get(t);return n?n.get(ft(e)):null}}setTree(e,t){if(bt(e))return t;{const n=ht(e),i=this.children.get(n)||new pi(null),r=i.setTree(ft(e),t);let s;return s=r.isEmpty()?this.children.remove(n):this.children.insert(n,r),new pi(this.value,s)}}fold(e){return this.fold_(ut(),e)}fold_(e,t){const n={};return this.children.inorderTraversal((i,r)=>{n[i]=r.fold_(vt(e,i),t)}),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,ut(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(bt(e))return null;{const i=ht(e),r=this.children.get(i);return r?r.findOnPath_(ft(e),vt(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ut(),t)}foreachOnPath_(e,t,n){if(bt(e))return this;{this.value&&n(t,this.value);const i=ht(e),r=this.children.get(i);return r?r.foreachOnPath_(ft(e),vt(t,i),n):new pi(null)}}foreach(e){this.foreach_(ut(),e)}foreach_(e,t){this.children.inorderTraversal((n,i)=>{i.foreach_(vt(e,n),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,n)=>{n.value&&e(t,n.value)})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e){this.writeTree_=e}static empty(){return new mi(new pi(null))}}function gi(e,t,n){if(bt(t))return new mi(new pi(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const r=i.path;let s=i.value;const o=yt(r,t);return s=s.updateChild(o,n),new mi(e.writeTree_.set(r,s))}{const i=new pi(n),r=e.writeTree_.setTree(t,i);return new mi(r)}}}function _i(e,t,n){let i=e;return F(n,(e,n)=>{i=gi(i,vt(t,e),n)}),i}function vi(e,t){if(bt(t))return mi.empty();{const n=e.writeTree_.setTree(t,new pi(null));return new mi(n)}}function bi(e,t){return null!=yi(e,t)}function yi(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(yt(n.path,t)):null}function wi(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(an,(e,n)=>{t.push(new Ft(e,n))}):e.writeTree_.children.inorderTraversal((e,n)=>{null!=n.value&&t.push(new Ft(e,n.value))}),t}function Oi(e,t){if(bt(t))return e;{const n=yi(e,t);return new mi(null!=n?new pi(n):e.writeTree_.subtree(t))}}function Ci(e){return e.writeTree_.isEmpty()}function Ei(e,t){return Ti(ut(),e.writeTree_,t)}function Ti(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal((t,r)=>{".priority"===t?(Object(s["e"])(null!==r.value,"Priority writes must always be leaf nodes"),i=r.value):n=Ti(vt(e,t),r,n)}),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(vt(e,".priority"),i)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ii(e,t){return Ki(t,e)}function ki(e,t,n,i,r){Object(s["e"])(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===r&&(r=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:r}),r&&(e.visibleWrites=gi(e.visibleWrites,t,n)),e.lastWriteId=i}function Si(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}function xi(e,t){const n=e.allWrites.findIndex(e=>e.writeId===t);Object(s["e"])(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let r=i.visible,o=!1,a=e.allWrites.length-1;while(r&&a>=0){const t=e.allWrites[a];t.visible&&(a>=n&&ji(t,i.path)?r=!1:Ot(i.path,t.path)&&(o=!0)),a--}if(r){if(o)return Ni(e),!0;if(i.snap)e.visibleWrites=vi(e.visibleWrites,i.path);else{const t=i.children;F(t,t=>{e.visibleWrites=vi(e.visibleWrites,vt(i.path,t))})}return!0}return!1}function ji(e,t){if(e.snap)return Ot(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Ot(vt(e.path,n),t))return!0;return!1}function Ni(e){e.visibleWrites=Pi(e.allWrites,Ai,ut()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function Ai(e){return e.visible}function Pi(e,t,n){let i=mi.empty();for(let r=0;r<e.length;++r){const o=e[r];if(t(o)){const e=o.path;let t;if(o.snap)Ot(n,e)?(t=yt(n,e),i=gi(i,t,o.snap)):Ot(e,n)&&(t=yt(e,n),i=gi(i,ut(),o.snap.getChild(t)));else{if(!o.children)throw Object(s["f"])("WriteRecord should have .snap or .children");if(Ot(n,e))t=yt(n,e),i=_i(i,t,o.children);else if(Ot(e,n))if(t=yt(e,n),bt(t))i=_i(i,ut(),o.children);else{const e=Object(s["E"])(o.children,ht(t));if(e){const n=e.getChild(ft(t));i=gi(i,ut(),n)}}}}}return i}function Ri(e,t,n,i,r){if(i||r){const s=Oi(e.visibleWrites,t);if(!r&&Ci(s))return n;if(r||null!=n||bi(s,ut())){const s=function(e){return(e.visible||r)&&(!i||!~i.indexOf(e.writeId))&&(Ot(e.path,t)||Ot(t,e.path))},o=Pi(e.allWrites,s,t),a=n||mn.EMPTY_NODE;return Ei(o,a)}return null}{const i=yi(e.visibleWrites,t);if(null!=i)return i;{const i=Oi(e.visibleWrites,t);if(Ci(i))return n;if(null!=n||bi(i,ut())){const e=n||mn.EMPTY_NODE;return Ei(i,e)}return null}}}function Li(e,t,n){let i=mn.EMPTY_NODE;const r=yi(e.visibleWrites,t);if(r)return r.isLeafNode()||r.forEachChild(an,(e,t)=>{i=i.updateImmediateChild(e,t)}),i;if(n){const r=Oi(e.visibleWrites,t);return n.forEachChild(an,(e,t)=>{const n=Ei(Oi(r,new lt(e)),t);i=i.updateImmediateChild(e,n)}),wi(r).forEach(e=>{i=i.updateImmediateChild(e.name,e.node)}),i}{const n=Oi(e.visibleWrites,t);return wi(n).forEach(e=>{i=i.updateImmediateChild(e.name,e.node)}),i}}function Di(e,t,n,i,r){Object(s["e"])(i||r,"Either existingEventSnap or existingServerSnap must exist");const o=vt(t,n);if(bi(e.visibleWrites,o))return null;{const t=Oi(e.visibleWrites,o);return Ci(t)?r.getChild(n):Ei(t,r.getChild(n))}}function Mi(e,t,n,i){const r=vt(t,n),s=yi(e.visibleWrites,r);if(null!=s)return s;if(i.isCompleteForChild(n)){const t=Oi(e.visibleWrites,r);return Ei(t,i.getNode().getImmediateChild(n))}return null}function Fi(e,t){return yi(e.visibleWrites,t)}function Ui(e,t,n,i,r,s,o){let a;const c=Oi(e.visibleWrites,t),l=yi(c,ut());if(null!=l)a=l;else{if(null==n)return[];a=Ei(c,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let c=n.getNext();while(c&&e.length<r)0!==t(c,i)&&e.push(c),c=n.getNext();return e}}function qi(){return{visibleWrites:mi.empty(),allWrites:[],lastWriteId:-1}}function Hi(e,t,n,i){return Ri(e.writeTree,e.treePath,t,n,i)}function Wi(e,t){return Li(e.writeTree,e.treePath,t)}function Vi(e,t,n,i){return Di(e.writeTree,e.treePath,t,n,i)}function Bi(e,t){return Fi(e.writeTree,vt(e.treePath,t))}function zi(e,t,n,i,r,s){return Ui(e.writeTree,e.treePath,t,n,i,r,s)}function $i(e,t,n){return Mi(e.writeTree,e.treePath,t,n)}function Gi(e,t){return Ki(vt(e.treePath,t),e.writeTree)}function Ki(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;Object(s["e"])("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),Object(s["e"])(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const r=i.type;if("child_added"===t&&"child_removed"===r)this.changeMap.set(n,kn(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===r)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===r)this.changeMap.set(n,In(n,i.oldSnap));else if("child_changed"===t&&"child_added"===r)this.changeMap.set(n,Tn(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==r)throw Object(s["f"])("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,kn(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}}const Qi=new Ji;class Xi{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new ti(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return $i(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:hi(this.viewCache_),r=zi(this.writes_,i,t,1,n,e);return 0===r.length?null:r[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(e){return{filter:e}}function er(e,t){Object(s["e"])(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),Object(s["e"])(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function tr(e,t,n,i,r){const o=new Yi;let a,c;if(n.type===Gn.OVERWRITE){const l=n;l.source.fromUser?a=sr(e,t,l.path,l.snap,i,r,o):(Object(s["e"])(l.source.fromServer,"Unknown source."),c=l.source.tagged||t.serverCache.isFiltered()&&!bt(l.path),a=rr(e,t,l.path,l.snap,i,r,c,o))}else if(n.type===Gn.MERGE){const l=n;l.source.fromUser?a=ar(e,t,l.path,l.children,i,r,o):(Object(s["e"])(l.source.fromServer,"Unknown source."),c=l.source.tagged||t.serverCache.isFiltered(),a=lr(e,t,l.path,l.children,i,r,c,o))}else if(n.type===Gn.ACK_USER_WRITE){const s=n;a=s.revert?dr(e,t,s.path,i,r,o):ur(e,t,s.path,s.affectedTree,i,r,o)}else{if(n.type!==Gn.LISTEN_COMPLETE)throw Object(s["f"])("Unknown operation type: "+n.type);a=hr(e,t,n.path,i,o)}const l=o.getChanges();return nr(t,a,l),{viewCache:a,changes:l}}function nr(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=ui(e);(n.length>0||!e.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(En(ui(t)))}}function ir(e,t,n,i,r,o){const a=t.eventCache;if(null!=Bi(i,n))return t;{let c,l;if(bt(n))if(Object(s["e"])(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=hi(t),r=n instanceof mn?n:mn.EMPTY_NODE,s=Wi(i,r);c=e.filter.updateFullNode(t.eventCache.getNode(),s,o)}else{const n=Hi(i,hi(t));c=e.filter.updateFullNode(t.eventCache.getNode(),n,o)}else{const u=ht(n);if(".priority"===u){Object(s["e"])(1===dt(n),"Can't have a priority with additional path components");const r=a.getNode();l=t.serverCache.getNode();const o=Vi(i,n,r,l);c=null!=o?e.filter.updatePriority(r,o):a.getNode()}else{const s=ft(n);let h;if(a.isCompleteForChild(u)){l=t.serverCache.getNode();const e=Vi(i,n,a.getNode(),l);h=null!=e?a.getNode().getImmediateChild(u).updateChild(s,e):a.getNode().getImmediateChild(u)}else h=$i(i,u,t.serverCache);c=null!=h?e.filter.updateChild(a.getNode(),u,h,s,r,o):a.getNode()}}return ci(t,c,a.isFullyInitialized()||bt(n),e.filter.filtersNodes())}}function rr(e,t,n,i,r,s,o,a){const c=t.serverCache;let l;const u=o?e.filter:e.filter.getIndexedFilter();if(bt(n))l=u.updateFullNode(c.getNode(),i,null);else if(u.filtersNodes()&&!c.isFiltered()){const e=c.getNode().updateChild(n,i);l=u.updateFullNode(c.getNode(),e,null)}else{const e=ht(n);if(!c.isCompleteForPath(n)&&dt(n)>1)return t;const r=ft(n),s=c.getNode().getImmediateChild(e),o=s.updateChild(r,i);l=".priority"===e?u.updatePriority(c.getNode(),o):u.updateChild(c.getNode(),e,o,r,Qi,null)}const h=li(t,l,c.isFullyInitialized()||bt(n),u.filtersNodes()),d=new Xi(r,h,s);return ir(e,h,n,r,d,a)}function sr(e,t,n,i,r,s,o){const a=t.eventCache;let c,l;const u=new Xi(r,t,s);if(bt(n))l=e.filter.updateFullNode(t.eventCache.getNode(),i,o),c=ci(t,l,!0,e.filter.filtersNodes());else{const r=ht(n);if(".priority"===r)l=e.filter.updatePriority(t.eventCache.getNode(),i),c=ci(t,l,a.isFullyInitialized(),a.isFiltered());else{const s=ft(n),l=a.getNode().getImmediateChild(r);let h;if(bt(s))h=i;else{const e=u.getCompleteChild(r);h=null!=e?".priority"===pt(s)&&e.getChild(_t(s)).isEmpty()?e:e.updateChild(s,i):mn.EMPTY_NODE}if(l.equals(h))c=t;else{const n=e.filter.updateChild(a.getNode(),r,h,s,u,o);c=ci(t,n,a.isFullyInitialized(),e.filter.filtersNodes())}}}return c}function or(e,t){return e.eventCache.isCompleteForChild(t)}function ar(e,t,n,i,r,s,o){let a=t;return i.foreach((i,c)=>{const l=vt(n,i);or(t,ht(l))&&(a=sr(e,a,l,c,r,s,o))}),i.foreach((i,c)=>{const l=vt(n,i);or(t,ht(l))||(a=sr(e,a,l,c,r,s,o))}),a}function cr(e,t,n){return n.foreach((e,n)=>{t=t.updateChild(e,n)}),t}function lr(e,t,n,i,r,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let c,l=t;c=bt(n)?i:new pi(null).setTree(n,i);const u=t.serverCache.getNode();return c.children.inorderTraversal((n,i)=>{if(u.hasChild(n)){const c=t.serverCache.getNode().getImmediateChild(n),u=cr(e,c,i);l=rr(e,l,new lt(n),u,r,s,o,a)}}),c.children.inorderTraversal((n,i)=>{const c=!t.serverCache.isCompleteForChild(n)&&void 0===i.value;if(!u.hasChild(n)&&!c){const c=t.serverCache.getNode().getImmediateChild(n),u=cr(e,c,i);l=rr(e,l,new lt(n),u,r,s,o,a)}}),l}function ur(e,t,n,i,r,s,o){if(null!=Bi(r,n))return t;const a=t.serverCache.isFiltered(),c=t.serverCache;if(null!=i.value){if(bt(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return rr(e,t,n,c.getNode().getChild(n),r,s,a,o);if(bt(n)){let i=new pi(null);return c.getNode().forEachChild(Wt,(e,t)=>{i=i.set(new lt(e),t)}),lr(e,t,n,i,r,s,a,o)}return t}{let l=new pi(null);return i.foreach((e,t)=>{const i=vt(n,e);c.isCompleteForPath(i)&&(l=l.set(e,c.getNode().getChild(i)))}),lr(e,t,n,l,r,s,a,o)}}function hr(e,t,n,i,r){const s=t.serverCache,o=li(t,s.getNode(),s.isFullyInitialized()||bt(n),s.isFiltered());return ir(e,o,n,i,Qi,r)}function dr(e,t,n,i,r,o){let a;if(null!=Bi(i,n))return t;{const c=new Xi(i,t,r),l=t.eventCache.getNode();let u;if(bt(n)||".priority"===ht(n)){let n;if(t.serverCache.isFullyInitialized())n=Hi(i,hi(t));else{const e=t.serverCache.getNode();Object(s["e"])(e instanceof mn,"serverChildren would be complete if leaf node"),n=Wi(i,e)}n=n,u=e.filter.updateFullNode(l,n,o)}else{const r=ht(n);let s=$i(i,r,t.serverCache);null==s&&t.serverCache.isCompleteForChild(r)&&(s=l.getImmediateChild(r)),u=null!=s?e.filter.updateChild(l,r,s,ft(n),c,o):t.eventCache.getNode().hasChild(r)?e.filter.updateChild(l,r,mn.EMPTY_NODE,ft(n),c,o):l,u.isEmpty()&&t.serverCache.isFullyInitialized()&&(a=Hi(i,hi(t)),a.isLeafNode()&&(u=e.filter.updateFullNode(u,a,o)))}return a=t.serverCache.isFullyInitialized()||null!=Bi(i,ut()),ci(t,u,a,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,i=new xn(n.getIndex()),r=Pn(n);this.processor_=Zi(r);const s=t.serverCache,o=t.eventCache,a=i.updateFullNode(mn.EMPTY_NODE,s.getNode(),null),c=r.updateFullNode(mn.EMPTY_NODE,o.getNode(),null),l=new ti(a,s.isFullyInitialized(),i.filtersNodes()),u=new ti(c,o.isFullyInitialized(),r.filtersNodes());this.viewCache_=ai(u,l),this.eventGenerator_=new ni(this.query_)}get query(){return this.query_}}function pr(e){return e.viewCache_.serverCache.getNode()}function mr(e,t){const n=hi(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!bt(t)&&!n.getImmediateChild(ht(t)).isEmpty())?n.getChild(t):null}function gr(e){return 0===e.eventRegistrations_.length}function _r(e,t){e.eventRegistrations_.push(t)}function vr(e,t,n){const i=[];if(n){Object(s["e"])(null==t,"A cancel should cancel all event registrations.");const r=e.query._path;e.eventRegistrations_.forEach(e=>{const t=e.createCancelEvent(n,r);t&&i.push(t)})}if(t){let n=[];for(let i=0;i<e.eventRegistrations_.length;++i){const r=e.eventRegistrations_[i];if(r.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(i+1));break}}else n.push(r)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return i}function br(e,t,n,i){t.type===Gn.MERGE&&null!==t.source.queryId&&(Object(s["e"])(hi(e.viewCache_),"We should always have a full cache before handling merges"),Object(s["e"])(ui(e.viewCache_),"Missing event cache, even though we have a server cache"));const r=e.viewCache_,o=tr(e.processor_,r,t,n,i);return er(e.processor_,o.viewCache),Object(s["e"])(o.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=o.viewCache,wr(e,o.changes,o.viewCache.eventCache.getNode(),null)}function yr(e,t){const n=e.viewCache_.eventCache,i=[];if(!n.getNode().isLeafNode()){const e=n.getNode();e.forEachChild(an,(e,t)=>{i.push(Tn(e,t))})}return n.isFullyInitialized()&&i.push(En(n.getNode())),wr(e,i,n.getNode(),t)}function wr(e,t,n,i){const r=i?[i]:e.eventRegistrations_;return ii(e.eventGenerator_,t,n,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Or,Cr;class Er{constructor(){this.views=new Map}}function Tr(e){Object(s["e"])(!Or,"__referenceConstructor has already been defined"),Or=e}function Ir(){return Object(s["e"])(Or,"Reference.ts has not been loaded"),Or}function kr(e){return 0===e.views.size}function Sr(e,t,n,i){const r=t.source.queryId;if(null!==r){const o=e.views.get(r);return Object(s["e"])(null!=o,"SyncTree gave us an op for an invalid query."),br(o,t,n,i)}{let r=[];for(const s of e.views.values())r=r.concat(br(s,t,n,i));return r}}function xr(e,t,n,i,r){const s=t._queryIdentifier,o=e.views.get(s);if(!o){let e=Hi(n,r?i:null),s=!1;e?s=!0:i instanceof mn?(e=Wi(n,i),s=!1):(e=mn.EMPTY_NODE,s=!1);const o=ai(new ti(e,s,!1),new ti(i,r,!1));return new fr(t,o)}return o}function jr(e,t,n,i,r,s){const o=xr(e,t,i,r,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),_r(o,n),yr(o,n)}function Nr(e,t,n,i){const r=t._queryIdentifier,s=[];let o=[];const a=Dr(e);if("default"===r)for(const[c,l]of e.views.entries())o=o.concat(vr(l,n,i)),gr(l)&&(e.views.delete(c),l.query._queryParams.loadsAllData()||s.push(l.query));else{const t=e.views.get(r);t&&(o=o.concat(vr(t,n,i)),gr(t)&&(e.views.delete(r),t.query._queryParams.loadsAllData()||s.push(t.query)))}return a&&!Dr(e)&&s.push(new(Ir())(t._repo,t._path)),{removed:s,events:o}}function Ar(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function Pr(e,t){let n=null;for(const i of e.views.values())n=n||mr(i,t);return n}function Rr(e,t){const n=t._queryParams;if(n.loadsAllData())return Mr(e);{const n=t._queryIdentifier;return e.views.get(n)}}function Lr(e,t){return null!=Rr(e,t)}function Dr(e){return null!=Mr(e)}function Mr(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(e){Object(s["e"])(!Cr,"__referenceConstructor has already been defined"),Cr=e}function Ur(){return Object(s["e"])(Cr,"Reference.ts has not been loaded"),Cr}let qr=1;class Hr{constructor(e){this.listenProvider_=e,this.syncPointTree_=new pi(null),this.pendingWriteTree_=qi(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Wr(e,t,n,i,r){return ki(e.pendingWriteTree_,t,n,i,r),r?Zr(e,new Zn(Kn(),t,n)):[]}function Vr(e,t,n=!1){const i=Si(e.pendingWriteTree_,t),r=xi(e.pendingWriteTree_,t);if(r){let t=new pi(null);return null!=i.snap?t=t.set(ut(),!0):F(i.children,e=>{t=t.set(new lt(e),!0)}),Zr(e,new Qn(i.path,t,n))}return[]}function Br(e,t,n){return Zr(e,new Zn(Yn(),t,n))}function zr(e,t,n){const i=pi.fromObject(n);return Zr(e,new ei(Yn(),t,i))}function $r(e,t){return Zr(e,new Xn(Yn(),t))}function Gr(e,t,n){const i=ss(e,n);if(i){const n=os(i),r=n.path,s=n.queryId,o=yt(r,t),a=new Xn(Jn(s),o);return as(e,r,a)}return[]}function Kr(e,t,n,i){const r=t._path,s=e.syncPointTree_.get(r);let o=[];if(s&&("default"===t._queryIdentifier||Lr(s,t))){const a=Nr(s,t,n,i);kr(s)&&(e.syncPointTree_=e.syncPointTree_.remove(r));const c=a.removed;o=a.events;const l=-1!==c.findIndex(e=>e._queryParams.loadsAllData()),u=e.syncPointTree_.findOnPath(r,(e,t)=>Dr(t));if(l&&!u){const t=e.syncPointTree_.subtree(r);if(!t.isEmpty()){const n=cs(t);for(let t=0;t<n.length;++t){const i=n[t],r=i.query,s=ns(e,i);e.listenProvider_.startListening(ls(r),is(e,r),s.hashFn,s.onComplete)}}}if(!u&&c.length>0&&!i)if(l){const n=null;e.listenProvider_.stopListening(ls(t),n)}else c.forEach(t=>{const n=e.queryToTagMap.get(rs(t));e.listenProvider_.stopListening(ls(t),n)});us(e,c)}return o}function Yr(e,t,n,i){const r=ss(e,i);if(null!=r){const i=os(r),s=i.path,o=i.queryId,a=yt(s,t),c=new Zn(Jn(o),a,n);return as(e,s,c)}return[]}function Jr(e,t,n,i){const r=ss(e,i);if(r){const i=os(r),s=i.path,o=i.queryId,a=yt(s,t),c=pi.fromObject(n),l=new ei(Jn(o),a,c);return as(e,s,l)}return[]}function Qr(e,t,n){const i=t._path;let r=null,o=!1;e.syncPointTree_.foreachOnPath(i,(e,t)=>{const n=yt(e,i);r=r||Pr(t,n),o=o||Dr(t)});let a,c=e.syncPointTree_.get(i);if(c?(o=o||Dr(c),r=r||Pr(c,ut())):(c=new Er,e.syncPointTree_=e.syncPointTree_.set(i,c)),null!=r)a=!0;else{a=!1,r=mn.EMPTY_NODE;const t=e.syncPointTree_.subtree(i);t.foreachChild((e,t)=>{const n=Pr(t,ut());n&&(r=r.updateImmediateChild(e,n))})}const l=Lr(c,t);if(!l&&!t._queryParams.loadsAllData()){const n=rs(t);Object(s["e"])(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const i=hs();e.queryToTagMap.set(n,i),e.tagToQueryMap.set(i,n)}const u=Ii(e.pendingWriteTree_,i);let h=jr(c,t,n,u,r,a);if(!l&&!o){const n=Rr(c,t);h=h.concat(ds(e,t,n))}return h}function Xr(e,t,n){const i=!0,r=e.pendingWriteTree_,s=e.syncPointTree_.findOnPath(t,(e,n)=>{const i=yt(e,t),r=Pr(n,i);if(r)return r});return Ri(r,t,s,n,i)}function Zr(e,t){return es(t,e.syncPointTree_,null,Ii(e.pendingWriteTree_,ut()))}function es(e,t,n,i){if(bt(e.path))return ts(e,t,n,i);{const r=t.get(ut());null==n&&null!=r&&(n=Pr(r,ut()));let s=[];const o=ht(e.path),a=e.operationForChild(o),c=t.children.get(o);if(c&&a){const e=n?n.getImmediateChild(o):null,t=Gi(i,o);s=s.concat(es(a,c,e,t))}return r&&(s=s.concat(Sr(r,e,i,n))),s}}function ts(e,t,n,i){const r=t.get(ut());null==n&&null!=r&&(n=Pr(r,ut()));let s=[];return t.children.inorderTraversal((t,r)=>{const o=n?n.getImmediateChild(t):null,a=Gi(i,t),c=e.operationForChild(t);c&&(s=s.concat(ts(c,r,o,a)))}),r&&(s=s.concat(Sr(r,e,i,n))),s}function ns(e,t){const n=t.query,i=is(e,n);return{hashFn:()=>{const e=pr(t)||mn.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return i?Gr(e,n._path,i):$r(e,n._path);{const i=W(t,n);return Kr(e,n,null,i)}}}}function is(e,t){const n=rs(t);return e.queryToTagMap.get(n)}function rs(e){return e._path.toString()+"$"+e._queryIdentifier}function ss(e,t){return e.tagToQueryMap.get(t)}function os(e){const t=e.indexOf("$");return Object(s["e"])(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new lt(e.substr(0,t))}}function as(e,t,n){const i=e.syncPointTree_.get(t);Object(s["e"])(i,"Missing sync point for query tag that we're tracking");const r=Ii(e.pendingWriteTree_,t);return Sr(i,n,r,null)}function cs(e){return e.fold((e,t,n)=>{if(t&&Dr(t)){const e=Mr(t);return[e]}{let e=[];return t&&(e=Ar(t)),F(n,(t,n)=>{e=e.concat(n)}),e}})}function ls(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(Ur())(e._repo,e._path):e}function us(e,t){for(let n=0;n<t.length;++n){const i=t[n];if(!i._queryParams.loadsAllData()){const t=rs(i),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}function hs(){return qr++}function ds(e,t,n){const i=t._path,r=is(e,t),o=ns(e,n),a=e.listenProvider_.startListening(ls(t),r,o.hashFn,o.onComplete),c=e.syncPointTree_.subtree(i);if(r)Object(s["e"])(!Dr(c.value),"If we're adding a query, it shouldn't be shadowed");else{const t=c.fold((e,t,n)=>{if(!bt(e)&&t&&Dr(t))return[Mr(t).query];{let e=[];return t&&(e=e.concat(Ar(t).map(e=>e.query))),F(n,(t,n)=>{e=e.concat(n)}),e}});for(let n=0;n<t.length;++n){const i=t[n];e.listenProvider_.stopListening(ls(i),is(e,i))}}return a}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new fs(t)}node(){return this.node_}}class ps{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=vt(this.path_,e);return new ps(this.syncTree_,t)}node(){return Xr(this.syncTree_,this.path_)}}const ms=function(e){return e=e||{},e["timestamp"]=e["timestamp"]||(new Date).getTime(),e},gs=function(e,t,n){return e&&"object"===typeof e?(Object(s["e"])(".sv"in e,"Unexpected leaf node or priority contents"),"string"===typeof e[".sv"]?_s(e[".sv"],t,n):"object"===typeof e[".sv"]?vs(e[".sv"],t):void Object(s["e"])(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},_s=function(e,t,n){switch(e){case"timestamp":return n["timestamp"];default:Object(s["e"])(!1,"Unexpected server value: "+e)}},vs=function(e,t,n){e.hasOwnProperty("increment")||Object(s["e"])(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e["increment"];"number"!==typeof i&&Object(s["e"])(!1,"Unexpected increment value: "+i);const r=t.node();if(Object(s["e"])(null!==r&&"undefined"!==typeof r,"Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const o=r,a=o.getValue();return"number"!==typeof a?i:a+i},bs=function(e,t,n,i){return ws(t,new ps(n,e),i)},ys=function(e,t,n){return ws(e,new fs(t),n)};function ws(e,t,n){const i=e.getPriority().val(),r=gs(i,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const i=e,s=gs(i.getValue(),t,n);return s!==i.getValue()||r!==i.getPriority().val()?new nn(s,bn(r)):e}{const i=e;return s=i,r!==i.getPriority().val()&&(s=s.updatePriority(new nn(r))),i.forEachChild(an,(e,i)=>{const r=ws(i,t.getImmediateChild(e),n);r!==i&&(s=s.updateImmediateChild(e,r))}),s}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Cs(e,t){let n=t instanceof lt?t:new lt(t),i=e,r=ht(n);while(null!==r){const e=Object(s["E"])(i.node.children,r)||{children:{},childCount:0};i=new Os(r,i,e),n=ft(n),r=ht(n)}return i}function Es(e){return e.node.value}function Ts(e,t){e.node.value=t,As(e)}function Is(e){return e.node.childCount>0}function ks(e){return void 0===Es(e)&&!Is(e)}function Ss(e,t){F(e.node.children,(n,i)=>{t(new Os(n,e,i))})}function xs(e,t,n,i){n&&!i&&t(e),Ss(e,e=>{xs(e,t,!0,i)}),n&&i&&t(e)}function js(e,t,n){let i=n?e:e.parent;while(null!==i){if(t(i))return!0;i=i.parent}return!1}function Ns(e){return new lt(null===e.parent?e.name:Ns(e.parent)+"/"+e.name)}function As(e){null!==e.parent&&Ps(e.parent,e.name,e)}function Ps(e,t,n){const i=ks(n),r=Object(s["j"])(e.node.children,t);i&&r?(delete e.node.children[t],e.node.childCount--,As(e)):i||r||(e.node.children[t]=n.node,e.node.childCount++,As(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs=/[\[\].#$\/\u0000-\u001F\u007F]/,Ls=/[\[\].#$\u0000-\u001F\u007F]/,Ds=10485760,Ms=function(e){return"string"===typeof e&&0!==e.length&&!Rs.test(e)},Fs=function(e){return"string"===typeof e&&0!==e.length&&!Ls.test(e)},Us=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Fs(e)},qs=function(e,t,n){const i=n instanceof lt?new Ct(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+kt(i));if("function"===typeof t)throw new Error(e+"contains a function "+kt(i)+" with contents = "+t.toString());if(x(t))throw new Error(e+"contains "+t.toString()+" "+kt(i));if("string"===typeof t&&t.length>Ds/3&&Object(s["F"])(t)>Ds)throw new Error(e+"contains a string greater than "+Ds+" utf8 bytes "+kt(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"===typeof t){let n=!1,r=!1;if(F(t,(t,s)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(r=!0,!Ms(t)))throw new Error(e+" contains an invalid key ("+t+") "+kt(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');Et(i,t),qs(e,s,i),Tt(i)}),n&&r)throw new Error(e+' contains ".value" child '+kt(i)+" in addition to actual children.")}},Hs=function(e,t,n,i){if((!i||void 0!==n)&&!Fs(n))throw new Error(Object(s["o"])(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Ws=function(e,t,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Hs(e,t,n,i)},Vs=function(e,t){const n=t.path.toString();if("string"!==typeof t.repoInfo.host||0===t.repoInfo.host.length||!Ms(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!Us(n))throw new Error(Object(s["o"])(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bs{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function zs(e,t){let n=null;for(let i=0;i<t.length;i++){const r=t[i],s=r.getPath();null===n||wt(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(r)}n&&e.eventLists_.push(n)}function $s(e,t,n){zs(e,n),Ks(e,e=>wt(e,t))}function Gs(e,t,n){zs(e,n),Ks(e,e=>Ot(e,t)||Ot(t,e))}function Ks(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const r=e.eventLists_[i];if(r){const s=r.path;t(s)?(Ys(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function Ys(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();y&&C("event: "+n.toString()),G(i)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js="repo_interrupt",Qs=25;class Xs{constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Bs,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Fn(),this.transactionQueueTree_=new Os,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Zs(e,t,n){if(e.stats_=ge(e.repoInfo_),e.forceRestClient_||K())e.server_=new Dn(e.repoInfo_,(t,n,i,r)=>{no(e,t,n,i,r)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>io(e,!0),0);else{if("undefined"!==typeof n&&null!==n){if("object"!==typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Object(s["H"])(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}e.persistentConnection_=new Mt(e.repoInfo_,t,(t,n,i,r)=>{no(e,t,n,i,r)},t=>{io(e,t)},t=>{ro(e,t)},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(t=>{e.server_.refreshAuthToken(t)}),e.appCheckProvider_.addTokenChangeListener(t=>{e.server_.refreshAppCheckToken(t.token)}),e.statsReporter_=_e(e.repoInfo_,()=>new $n(e.stats_,e.server_)),e.infoData_=new Mn,e.infoSyncTree_=new Hr({startListening:(t,n,i,r)=>{let s=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=Br(e.infoSyncTree_,t._path,o),setTimeout(()=>{r("ok")},0)),s},stopListening:()=>{}}),so(e,"connected",!1),e.serverSyncTree_=new Hr({startListening:(t,n,i,r)=>(e.server_.listen(t,i,n,(n,i)=>{const s=r(n,i);Gs(e.eventQueue_,t._path,s)}),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function eo(e){const t=e.infoData_.getNode(new lt(".info/serverTimeOffset")),n=t.val()||0;return(new Date).getTime()+n}function to(e){return ms({timestamp:eo(e)})}function no(e,t,n,i,r){e.dataUpdateCount++;const o=new lt(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let a=[];if(r)if(i){const t=Object(s["B"])(n,e=>bn(e));a=Jr(e.serverSyncTree_,o,t,r)}else{const t=bn(n);a=Yr(e.serverSyncTree_,o,t,r)}else if(i){const t=Object(s["B"])(n,e=>bn(e));a=zr(e.serverSyncTree_,o,t)}else{const t=bn(n);a=Br(e.serverSyncTree_,o,t)}let c=o;a.length>0&&(c=go(e,o)),Gs(e.eventQueue_,c,a)}function io(e,t){so(e,"connected",t),!1===t&&ao(e)}function ro(e,t){F(t,(t,n)=>{so(e,t,n)})}function so(e,t,n){const i=new lt("/.info/"+t),r=bn(n);e.infoData_.updateSnapshot(i,r);const s=Br(e.infoSyncTree_,i,r);Gs(e.eventQueue_,i,s)}function oo(e){return e.nextWriteId_++}function ao(e){ho(e,"onDisconnectEvents");const t=to(e),n=Fn();qn(e.onDisconnect_,ut(),(i,r)=>{const s=bs(i,r,e.serverSyncTree_,t);Un(n,i,s)});let i=[];qn(n,ut(),(t,n)=>{i=i.concat(Br(e.serverSyncTree_,t,n));const r=Oo(e,t);go(e,r)}),e.onDisconnect_=Fn(),Gs(e.eventQueue_,ut(),i)}function co(e,t,n){let i;i=".info"===ht(t._path)?Qr(e.infoSyncTree_,t,n):Qr(e.serverSyncTree_,t,n),$s(e.eventQueue_,t._path,i)}function lo(e,t,n){let i;i=".info"===ht(t._path)?Kr(e.infoSyncTree_,t,n):Kr(e.serverSyncTree_,t,n),$s(e.eventQueue_,t._path,i)}function uo(e){e.persistentConnection_&&e.persistentConnection_.interrupt(Js)}function ho(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),C(n,...t)}function fo(e,t,n){return Xr(e.serverSyncTree_,t,n)||mn.EMPTY_NODE}function po(e,t=e.transactionQueueTree_){if(t||wo(e,t),Es(t)){const n=bo(e,t);Object(s["e"])(n.length>0,"Sending zero length transaction queue");const i=n.every(e=>0===e.status);i&&mo(e,Ns(t),n)}else Is(t)&&Ss(t,t=>{po(e,t)})}function mo(e,t,n){const i=n.map(e=>e.currentWriteId),r=fo(e,t,i);let o=r;const a=r.hash();for(let u=0;u<n.length;u++){const e=n[u];Object(s["e"])(0===e.status,"tryToSendTransactionQueue_: items in queue should all be run."),e.status=1,e.retryCount++;const i=yt(t,e.path);o=o.updateChild(i,e.currentOutputSnapshotRaw)}const c=o.val(!0),l=t;e.server_.put(l.toString(),c,i=>{ho(e,"transaction put response",{path:l.toString(),status:i});let r=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,r=r.concat(Vr(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push(()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved)),n[t].unwatcher();wo(e,Cs(e.transactionQueueTree_,t)),po(e,e.transactionQueueTree_),Gs(e.eventQueue_,t,r);for(let e=0;e<i.length;e++)G(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{k("transaction at "+l.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}go(e,t)}},a)}function go(e,t){const n=vo(e,t),i=Ns(n),r=bo(e,n);return _o(e,r,i),i}function _o(e,t,n){if(0===t.length)return;const i=[];let r=[];const o=t.filter(e=>0===e.status),a=o.map(e=>e.currentWriteId);for(let c=0;c<t.length;c++){const o=t[c],l=yt(n,o.path);let u,h=!1;if(Object(s["e"])(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null."),4===o.status)h=!0,u=o.abortReason,r=r.concat(Vr(e.serverSyncTree_,o.currentWriteId,!0));else if(0===o.status)if(o.retryCount>=Qs)h=!0,u="maxretry",r=r.concat(Vr(e.serverSyncTree_,o.currentWriteId,!0));else{const n=fo(e,o.path,a);o.currentInputSnapshot=n;const i=t[c].update(n.val());if(void 0!==i){qs("transaction failed: Data returned ",i,o.path);let t=bn(i);const c="object"===typeof i&&null!=i&&Object(s["j"])(i,".priority");c||(t=t.updatePriority(n.getPriority()));const l=o.currentWriteId,u=to(e),h=ys(t,n,u);o.currentOutputSnapshotRaw=t,o.currentOutputSnapshotResolved=h,o.currentWriteId=oo(e),a.splice(a.indexOf(l),1),r=r.concat(Wr(e.serverSyncTree_,o.path,h,o.currentWriteId,o.applyLocally)),r=r.concat(Vr(e.serverSyncTree_,l,!0))}else h=!0,u="nodata",r=r.concat(Vr(e.serverSyncTree_,o.currentWriteId,!0))}Gs(e.eventQueue_,n,r),r=[],h&&(t[c].status=2,function(e){setTimeout(e,Math.floor(0))}(t[c].unwatcher),t[c].onComplete&&("nodata"===u?i.push(()=>t[c].onComplete(null,!1,t[c].currentInputSnapshot)):i.push(()=>t[c].onComplete(new Error(u),!1,null))))}wo(e,e.transactionQueueTree_);for(let s=0;s<i.length;s++)G(i[s]);po(e,e.transactionQueueTree_)}function vo(e,t){let n,i=e.transactionQueueTree_;n=ht(t);while(null!==n&&void 0===Es(i))i=Cs(i,n),t=ft(t),n=ht(t);return i}function bo(e,t){const n=[];return yo(e,t,n),n.sort((e,t)=>e.order-t.order),n}function yo(e,t,n){const i=Es(t);if(i)for(let r=0;r<i.length;r++)n.push(i[r]);Ss(t,t=>{yo(e,t,n)})}function wo(e,t){const n=Es(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,Ts(t,n.length>0?n:void 0)}Ss(t,t=>{wo(e,t)})}function Oo(e,t){const n=Ns(vo(e,t)),i=Cs(e.transactionQueueTree_,t);return js(i,t=>{Co(e,t)}),Co(e,i),xs(i,t=>{Co(e,t)}),n}function Co(e,t){const n=Es(t);if(n){const i=[];let r=[],o=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(Object(s["e"])(o===t-1,"All SENT items should be at beginning of queue."),o=t,n[t].status=3,n[t].abortReason="set"):(Object(s["e"])(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),r=r.concat(Vr(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===o?Ts(t,void 0):n.length=o+1,Gs(e.eventQueue_,Ns(t),r);for(let e=0;e<i.length;e++)G(i[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(e){let t="";const n=e.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let e=n[r];try{e=decodeURIComponent(e.replace(/\+/g," "))}catch(i){}t+="/"+e}return t}function To(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):k(`Invalid query segment '${n}' in query '${e}'`)}return t}const Io=function(e,t){const n=ko(e),i=n.namespace;"firebase.com"===n.domain&&I(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||I("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||S();const r="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new ue(n.host,n.secure,i,t,r,"",i!==n.subdomain),path:new lt(n.pathString)}},ko=function(e){let t="",n="",i="",r="",s="",o=!0,a="https",c=443;if("string"===typeof e){let l=e.indexOf("//");l>=0&&(a=e.substring(0,l-1),e=e.substring(l+2));let u=e.indexOf("/");-1===u&&(u=e.length);let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(u,h)),u<h&&(r=Eo(e.substring(u,h)));const d=To(e.substring(Math.min(e.length,h)));l=t.indexOf(":"),l>=0?(o="https"===a||"wss"===a,c=parseInt(t.substring(l+1),10)):l=t.length;const f=t.slice(0,l);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=i}"ns"in d&&(s=d["ns"])}return{host:t,port:c,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class So{constructor(e,t,n,i){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=i}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Object(s["H"])(this.snapshot.exportVal())}}class xo{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return Object(s["e"])(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class No{constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}get key(){return bt(this._path)?null:pt(this._path)}get ref(){return new Ao(this._repo,this._path)}get _queryIdentifier(){const e=Ln(this._queryParams),t=D(e);return"{}"===t?"default":t}get _queryObject(){return Ln(this._queryParams)}isEqual(e){if(e=Object(s["q"])(e),!(e instanceof No))return!1;const t=this._repo===e._repo,n=wt(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+mt(this._path)}}class Ao extends No{constructor(e,t){super(e,t,new An,!1)}get parent(){const e=_t(this._path);return null===e?null:new Ao(this._repo,e)}get root(){let e=this;while(null!==e.parent)e=e.parent;return e}}class Po{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new lt(e),n=Lo(this.ref,e);return new Po(this._node.getChild(t),n,an)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;const t=this._node;return!!t.forEachChild(this._index,(t,n)=>e(new Po(n,Lo(this.ref,t),an)))}hasChild(e){const t=new lt(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ro(e,t){return e=Object(s["q"])(e),e._checkNotDeleted("ref"),void 0!==t?Lo(e._root,t):e._root}function Lo(e,t){return e=Object(s["q"])(e),null===ht(e._path)?Ws("child","path",t,!1):Hs("child","path",t,!1),new Ao(e._repo,vt(e._path,t))}class Do{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new So("value",this,new Po(e.snapshotNode,new Ao(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new xo(this,e,t):null}matches(e){return e instanceof Do&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class Mo{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new xo(this,e,t):null}createEvent(e,t){Object(s["e"])(null!=e.childName,"Child events should have a childName.");const n=Lo(new Ao(t._repo,t._path),e.childName),i=t._queryParams.getIndex();return new So(e.type,this,new Po(e.snapshotNode,n,i),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Mo&&(this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}}function Fo(e,t,n,i,r){let s;if("object"===typeof i&&(s=void 0,r=i),"function"===typeof i&&(s=i),r&&r.onlyOnce){const t=n,i=(n,i)=>{lo(e._repo,e,a),t(n,i)};i.userCallback=n.userCallback,i.context=n.context,n=i}const o=new jo(n,s||void 0),a="value"===t?new Do(o):new Mo(t,o);return co(e._repo,e,a),()=>lo(e._repo,e,a)}function Uo(e,t,n,i){return Fo(e,"value",t,n,i)}Tr(Ao),Fr(Ao);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const qo="FIREBASE_DATABASE_EMULATOR_HOST",Ho={};let Wo=!1;function Vo(t,n,i,r,s){let o=r||t.options.databaseURL;void 0===o&&(t.options.projectId||I("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),C("Using default host for project ",t.options.projectId),o=t.options.projectId+"-default-rtdb.firebaseio.com");let a,c=Io(o,s),l=c.repoInfo,u=void 0;"undefined"!==typeof e&&(u=Object({NODE_ENV:"production",BASE_URL:"/"})[qo]),u?(a=!0,o=`http://${u}?ns=${l.namespace}`,c=Io(o,s),l=c.repoInfo):a=!c.repoInfo.secure;const h=s&&a?new X(X.OWNER):new Q(t.name,t.options,n);Vs("Invalid Firebase Database URL",c),bt(c.path)||I("Database URL must point to the root of a Firebase Database (not including a child path).");const d=zo(l,t,h,new J(t.name,i));return new $o(d,t)}function Bo(e,t){const n=Ho[t];n&&n[e.key]===e||I(`Database ${t}(${e.repoInfo_}) has already been deleted.`),uo(e),delete n[e.key]}function zo(e,t,n,i){let r=Ho[t.name];r||(r={},Ho[t.name]=r);let s=r[e.toURLString()];return s&&I("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new Xs(e,Wo,n,i),r[e.toURLString()]=s,s}class $o{constructor(e,t){this._repoInternal=e,this.app=t,this["type"]="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Zs(this._repoInternal,this.app.options.appId,this.app.options["databaseAuthVariableOverride"]),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ao(this._repo,ut())),this._rootInternal}_delete(){return null!==this._rootInternal&&(Bo(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&I("Cannot call "+e+" on a deleted database.")}}function Go(e=Object(i["d"])(),t){return Object(i["b"])(e,"database").getImmediate({identifier:t})}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ko(e){u(i["a"]),Object(i["c"])(new r["a"]("database",(e,{instanceIdentifier:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Vo(n,i,r,t)},"PUBLIC").setMultipleInstances(!0)),Object(i["f"])(a,c,e),Object(i["f"])(a,c,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mt.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Mt.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};Ko()}).call(this,n("4362"))},5502:function(e,t,n){"use strict";n.d(t,"a",(function(){return Y}));var i=n("7a23"),r=n("3f4e"),s="store";function o(e,t){Object.keys(e).forEach((function(n){return t(e[n],n)}))}function a(e){return null!==e&&"object"===typeof e}function c(e){return e&&"function"===typeof e.then}function l(e,t){if(!e)throw new Error("[vuex] "+t)}function u(e,t){return function(){return e(t)}}function h(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function d(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;p(e,n,[],e._modules.root,!0),f(e,n,t)}function f(e,t,n){var r=e._state;e.getters={},e._makeLocalGettersCache=Object.create(null);var s=e._wrappedGetters,a={};o(s,(function(t,n){a[n]=u(t,e),Object.defineProperty(e.getters,n,{get:function(){return a[n]()},enumerable:!0})})),e._state=Object(i["y"])({data:t}),e.strict&&y(e),r&&n&&e._withCommit((function(){r.data=null}))}function p(e,t,n,i,r){var s=!n.length,o=e._modules.getNamespace(n);if(i.namespaced&&(e._modulesNamespaceMap[o]&&console.error("[vuex] duplicate namespace "+o+" for the namespaced module "+n.join("/")),e._modulesNamespaceMap[o]=i),!s&&!r){var a=w(t,n.slice(0,-1)),c=n[n.length-1];e._withCommit((function(){c in a&&console.warn('[vuex] state field "'+c+'" was overridden by a module with the same name at "'+n.join(".")+'"'),a[c]=i.state}))}var l=i.context=m(e,o,n);i.forEachMutation((function(t,n){var i=o+n;_(e,i,t,l)})),i.forEachAction((function(t,n){var i=t.root?n:o+n,r=t.handler||t;v(e,i,r,l)})),i.forEachGetter((function(t,n){var i=o+n;b(e,i,t,l)})),i.forEachChild((function(i,s){p(e,t,n.concat(s),i,r)}))}function m(e,t,n){var i=""===t,r={dispatch:i?e.dispatch:function(n,i,r){var s=O(n,i,r),o=s.payload,a=s.options,c=s.type;if(a&&a.root||(c=t+c,e._actions[c]))return e.dispatch(c,o);console.error("[vuex] unknown local action type: "+s.type+", global type: "+c)},commit:i?e.commit:function(n,i,r){var s=O(n,i,r),o=s.payload,a=s.options,c=s.type;a&&a.root||(c=t+c,e._mutations[c])?e.commit(c,o,a):console.error("[vuex] unknown local mutation type: "+s.type+", global type: "+c)}};return Object.defineProperties(r,{getters:{get:i?function(){return e.getters}:function(){return g(e,t)}},state:{get:function(){return w(e.state,n)}}}),r}function g(e,t){if(!e._makeLocalGettersCache[t]){var n={},i=t.length;Object.keys(e.getters).forEach((function(r){if(r.slice(0,i)===t){var s=r.slice(i);Object.defineProperty(n,s,{get:function(){return e.getters[r]},enumerable:!0})}})),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function _(e,t,n,i){var r=e._mutations[t]||(e._mutations[t]=[]);r.push((function(t){n.call(e,i.state,t)}))}function v(e,t,n,i){var r=e._actions[t]||(e._actions[t]=[]);r.push((function(t){var r=n.call(e,{dispatch:i.dispatch,commit:i.commit,getters:i.getters,state:i.state,rootGetters:e.getters,rootState:e.state},t);return c(r)||(r=Promise.resolve(r)),e._devtoolHook?r.catch((function(t){throw e._devtoolHook.emit("vuex:error",t),t})):r}))}function b(e,t,n,i){e._wrappedGetters[t]?console.error("[vuex] duplicate getter key: "+t):e._wrappedGetters[t]=function(e){return n(i.state,i.getters,e.state,e.getters)}}function y(e){Object(i["H"])((function(){return e._state.data}),(function(){l(e._committing,"do not mutate vuex store state outside mutation handlers.")}),{deep:!0,flush:"sync"})}function w(e,t){return t.reduce((function(e,t){return e[t]}),e)}function O(e,t,n){return a(e)&&e.type&&(n=t,t=e,e=e.type),l("string"===typeof e,"expects string as the type, but found "+typeof e+"."),{type:e,payload:t,options:n}}var C="vuex bindings",E="vuex:mutations",T="vuex:actions",I="vuex",k=0;function S(e,t){Object(r["a"])({id:"org.vuejs.vuex",app:e,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[C]},(function(n){n.addTimelineLayer({id:E,label:"Vuex Mutations",color:x}),n.addTimelineLayer({id:T,label:"Vuex Actions",color:x}),n.addInspector({id:I,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree((function(n){if(n.app===e&&n.inspectorId===I)if(n.filter){var i=[];L(i,t._modules.root,n.filter,""),n.rootNodes=i}else n.rootNodes=[R(t._modules.root,"")]})),n.on.getInspectorState((function(n){if(n.app===e&&n.inspectorId===I){var i=n.nodeId;g(t,i),n.state=D(F(t._modules,i),"root"===i?t.getters:t._makeLocalGettersCache,i)}})),n.on.editInspectorState((function(n){if(n.app===e&&n.inspectorId===I){var i=n.nodeId,r=n.path;"root"!==i&&(r=i.split("/").filter(Boolean).concat(r)),t._withCommit((function(){n.set(t._state.data,r,n.state.value)}))}})),t.subscribe((function(e,t){var i={};e.payload&&(i.payload=e.payload),i.state=t,n.notifyComponentUpdate(),n.sendInspectorTree(I),n.sendInspectorState(I),n.addTimelineEvent({layerId:E,event:{time:Date.now(),title:e.type,data:i}})})),t.subscribeAction({before:function(e,t){var i={};e.payload&&(i.payload=e.payload),e._id=k++,e._time=Date.now(),i.state=t,n.addTimelineEvent({layerId:T,event:{time:e._time,title:e.type,groupId:e._id,subtitle:"start",data:i}})},after:function(e,t){var i={},r=Date.now()-e._time;i.duration={_custom:{type:"duration",display:r+"ms",tooltip:"Action duration",value:r}},e.payload&&(i.payload=e.payload),i.state=t,n.addTimelineEvent({layerId:T,event:{time:Date.now(),title:e.type,groupId:e._id,subtitle:"end",data:i}})}})}))}var x=8702998,j=6710886,N=16777215,A={label:"namespaced",textColor:N,backgroundColor:j};function P(e){return e&&"root"!==e?e.split("/").slice(-2,-1)[0]:"Root"}function R(e,t){return{id:t||"root",label:P(t),tags:e.namespaced?[A]:[],children:Object.keys(e._children).map((function(n){return R(e._children[n],t+n+"/")}))}}function L(e,t,n,i){i.includes(n)&&e.push({id:i||"root",label:i.endsWith("/")?i.slice(0,i.length-1):i||"Root",tags:t.namespaced?[A]:[]}),Object.keys(t._children).forEach((function(r){L(e,t._children[r],n,i+r+"/")}))}function D(e,t,n){t="root"===n?t:t[n];var i=Object.keys(t),r={state:Object.keys(e.state).map((function(t){return{key:t,editable:!0,value:e.state[t]}}))};if(i.length){var s=M(t);r.getters=Object.keys(s).map((function(e){return{key:e.endsWith("/")?P(e):e,editable:!1,value:U((function(){return s[e]}))}}))}return r}function M(e){var t={};return Object.keys(e).forEach((function(n){var i=n.split("/");if(i.length>1){var r=t,s=i.pop();i.forEach((function(e){r[e]||(r[e]={_custom:{value:{},display:e,tooltip:"Module",abstract:!0}}),r=r[e]._custom.value})),r[s]=U((function(){return e[n]}))}else t[n]=U((function(){return e[n]}))})),t}function F(e,t){var n=t.split("/").filter((function(e){return e}));return n.reduce((function(e,i,r){var s=e[i];if(!s)throw new Error('Missing module "'+i+'" for path "'+t+'".');return r===n.length-1?s:s._children}),"root"===t?e:e.root._children)}function U(e){try{return e()}catch(t){return t}}var q=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var n=e.state;this.state=("function"===typeof n?n():n)||{}},H={namespaced:{configurable:!0}};H.namespaced.get=function(){return!!this._rawModule.namespaced},q.prototype.addChild=function(e,t){this._children[e]=t},q.prototype.removeChild=function(e){delete this._children[e]},q.prototype.getChild=function(e){return this._children[e]},q.prototype.hasChild=function(e){return e in this._children},q.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},q.prototype.forEachChild=function(e){o(this._children,e)},q.prototype.forEachGetter=function(e){this._rawModule.getters&&o(this._rawModule.getters,e)},q.prototype.forEachAction=function(e){this._rawModule.actions&&o(this._rawModule.actions,e)},q.prototype.forEachMutation=function(e){this._rawModule.mutations&&o(this._rawModule.mutations,e)},Object.defineProperties(q.prototype,H);var W=function(e){this.register([],e,!1)};function V(e,t,n){if(G(e,n),t.update(n),n.modules)for(var i in n.modules){if(!t.getChild(i))return void console.warn("[vuex] trying to add a new module '"+i+"' on hot reloading, manual reload is needed");V(e.concat(i),t.getChild(i),n.modules[i])}}W.prototype.get=function(e){return e.reduce((function(e,t){return e.getChild(t)}),this.root)},W.prototype.getNamespace=function(e){var t=this.root;return e.reduce((function(e,n){return t=t.getChild(n),e+(t.namespaced?n+"/":"")}),"")},W.prototype.update=function(e){V([],this.root,e)},W.prototype.register=function(e,t,n){var i=this;void 0===n&&(n=!0),G(e,t);var r=new q(t,n);if(0===e.length)this.root=r;else{var s=this.get(e.slice(0,-1));s.addChild(e[e.length-1],r)}t.modules&&o(t.modules,(function(t,r){i.register(e.concat(r),t,n)}))},W.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1],i=t.getChild(n);i?i.runtime&&t.removeChild(n):console.warn("[vuex] trying to unregister module '"+n+"', which is not registered")},W.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1];return!!t&&t.hasChild(n)};var B={assert:function(e){return"function"===typeof e},expected:"function"},z={assert:function(e){return"function"===typeof e||"object"===typeof e&&"function"===typeof e.handler},expected:'function or object with "handler" function'},$={getters:B,mutations:B,actions:z};function G(e,t){Object.keys($).forEach((function(n){if(t[n]){var i=$[n];o(t[n],(function(t,r){l(i.assert(t),K(e,n,r,t,i.expected))}))}}))}function K(e,t,n,i,r){var s=t+" should be "+r+' but "'+t+"."+n+'"';return e.length>0&&(s+=' in module "'+e.join(".")+'"'),s+=" is "+JSON.stringify(i)+".",s}function Y(e){return new J(e)}var J=function e(t){var n=this;void 0===t&&(t={}),l("undefined"!==typeof Promise,"vuex requires a Promise polyfill in this browser."),l(this instanceof e,"store must be called with the new operator.");var i=t.plugins;void 0===i&&(i=[]);var r=t.strict;void 0===r&&(r=!1);var s=t.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new W(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=s;var o=this,a=this,c=a.dispatch,u=a.commit;this.dispatch=function(e,t){return c.call(o,e,t)},this.commit=function(e,t,n){return u.call(o,e,t,n)},this.strict=r;var h=this._modules.root.state;p(this,h,[],this._modules.root),f(this,h),i.forEach((function(e){return e(n)}))},Q={state:{configurable:!0}};J.prototype.install=function(e,t){e.provide(t||s,this),e.config.globalProperties.$store=this;var n=void 0===this._devtools||this._devtools;n&&S(e,this)},Q.state.get=function(){return this._state.data},Q.state.set=function(e){l(!1,"use store.replaceState() to explicit replace store state.")},J.prototype.commit=function(e,t,n){var i=this,r=O(e,t,n),s=r.type,o=r.payload,a=r.options,c={type:s,payload:o},l=this._mutations[s];l?(this._withCommit((function(){l.forEach((function(e){e(o)}))})),this._subscribers.slice().forEach((function(e){return e(c,i.state)})),a&&a.silent&&console.warn("[vuex] mutation type: "+s+". Silent option has been removed. Use the filter functionality in the vue-devtools")):console.error("[vuex] unknown mutation type: "+s)},J.prototype.dispatch=function(e,t){var n=this,i=O(e,t),r=i.type,s=i.payload,o={type:r,payload:s},a=this._actions[r];if(a){try{this._actionSubscribers.slice().filter((function(e){return e.before})).forEach((function(e){return e.before(o,n.state)}))}catch(l){console.warn("[vuex] error in before action subscribers: "),console.error(l)}var c=a.length>1?Promise.all(a.map((function(e){return e(s)}))):a[0](s);return new Promise((function(e,t){c.then((function(t){try{n._actionSubscribers.filter((function(e){return e.after})).forEach((function(e){return e.after(o,n.state)}))}catch(l){console.warn("[vuex] error in after action subscribers: "),console.error(l)}e(t)}),(function(e){try{n._actionSubscribers.filter((function(e){return e.error})).forEach((function(t){return t.error(o,n.state,e)}))}catch(l){console.warn("[vuex] error in error action subscribers: "),console.error(l)}t(e)}))}))}console.error("[vuex] unknown action type: "+r)},J.prototype.subscribe=function(e,t){return h(e,this._subscribers,t)},J.prototype.subscribeAction=function(e,t){var n="function"===typeof e?{before:e}:e;return h(n,this._actionSubscribers,t)},J.prototype.watch=function(e,t,n){var r=this;return l("function"===typeof e,"store.watch only accepts a function."),Object(i["H"])((function(){return e(r.state,r.getters)}),t,Object.assign({},n))},J.prototype.replaceState=function(e){var t=this;this._withCommit((function(){t._state.data=e}))},J.prototype.registerModule=function(e,t,n){void 0===n&&(n={}),"string"===typeof e&&(e=[e]),l(Array.isArray(e),"module path must be a string or an Array."),l(e.length>0,"cannot register the root module by using registerModule."),this._modules.register(e,t),p(this,this.state,e,this._modules.get(e),n.preserveState),f(this,this.state)},J.prototype.unregisterModule=function(e){var t=this;"string"===typeof e&&(e=[e]),l(Array.isArray(e),"module path must be a string or an Array."),this._modules.unregister(e),this._withCommit((function(){var n=w(t.state,e.slice(0,-1));delete n[e[e.length-1]]})),d(this)},J.prototype.hasModule=function(e){return"string"===typeof e&&(e=[e]),l(Array.isArray(e),"module path must be a string or an Array."),this._modules.isRegistered(e)},J.prototype.hotUpdate=function(e){this._modules.update(e),d(this,!0)},J.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t},Object.defineProperties(J.prototype,Q);ee((function(e,t){var n={};return Z(t)||console.error("[vuex] mapState: mapper parameter must be either an Array or an Object"),X(t).forEach((function(t){var i=t.key,r=t.val;n[i]=function(){var t=this.$store.state,n=this.$store.getters;if(e){var i=te(this.$store,"mapState",e);if(!i)return;t=i.context.state,n=i.context.getters}return"function"===typeof r?r.call(this,t,n):t[r]},n[i].vuex=!0})),n})),ee((function(e,t){var n={};return Z(t)||console.error("[vuex] mapMutations: mapper parameter must be either an Array or an Object"),X(t).forEach((function(t){var i=t.key,r=t.val;n[i]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var i=this.$store.commit;if(e){var s=te(this.$store,"mapMutations",e);if(!s)return;i=s.context.commit}return"function"===typeof r?r.apply(this,[i].concat(t)):i.apply(this.$store,[r].concat(t))}})),n})),ee((function(e,t){var n={};return Z(t)||console.error("[vuex] mapGetters: mapper parameter must be either an Array or an Object"),X(t).forEach((function(t){var i=t.key,r=t.val;r=e+r,n[i]=function(){if(!e||te(this.$store,"mapGetters",e)){if(r in this.$store.getters)return this.$store.getters[r];console.error("[vuex] unknown getter: "+r)}},n[i].vuex=!0})),n})),ee((function(e,t){var n={};return Z(t)||console.error("[vuex] mapActions: mapper parameter must be either an Array or an Object"),X(t).forEach((function(t){var i=t.key,r=t.val;n[i]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var i=this.$store.dispatch;if(e){var s=te(this.$store,"mapActions",e);if(!s)return;i=s.context.dispatch}return"function"===typeof r?r.apply(this,[i].concat(t)):i.apply(this.$store,[r].concat(t))}})),n}));function X(e){return Z(e)?Array.isArray(e)?e.map((function(e){return{key:e,val:e}})):Object.keys(e).map((function(t){return{key:t,val:e[t]}})):[]}function Z(e){return Array.isArray(e)||a(e)}function ee(e){return function(t,n){return"string"!==typeof t?(n=t,t=""):"/"!==t.charAt(t.length-1)&&(t+="/"),e(t,n)}}function te(e,t,n){var i=e._modulesNamespaceMap[n];return i||console.error("[vuex] module namespace not found in "+t+"(): "+n),i}},5692:function(e,t,n){var i=n("c430"),r=n("c6cd");(e.exports=function(e,t){return r[e]||(r[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.20.3",mode:i?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.20.3/LICENSE",source:"https://github.com/zloirock/core-js"})},"56ef":function(e,t,n){var i=n("d066"),r=n("e330"),s=n("241c"),o=n("7418"),a=n("825a"),c=r([].concat);e.exports=i("Reflect","ownKeys")||function(e){var t=s.f(a(e)),n=o.f;return n?c(t,n(e)):t}},"589b":function(e,t,n){"use strict";n.d(t,"a",(function(){return $})),n.d(t,"b",(function(){return W})),n.d(t,"c",(function(){return H})),n.d(t,"d",(function(){return K})),n.d(t,"e",(function(){return G})),n.d(t,"f",(function(){return Y}));var i=n("22e5"),r=n("e691"),s=n("1fd5");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class o{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map(e=>{if(a(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}function a(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const c="@firebase/app",l="0.7.16",u=new r["b"]("@firebase/app"),h="@firebase/app-compat",d="@firebase/analytics-compat",f="@firebase/analytics",p="@firebase/app-check-compat",m="@firebase/app-check",g="@firebase/auth",_="@firebase/auth-compat",v="@firebase/database",b="@firebase/database-compat",y="@firebase/functions",w="@firebase/functions-compat",O="@firebase/installations",C="@firebase/installations-compat",E="@firebase/messaging",T="@firebase/messaging-compat",I="@firebase/performance",k="@firebase/performance-compat",S="@firebase/remote-config",x="@firebase/remote-config-compat",j="@firebase/storage",N="@firebase/storage-compat",A="@firebase/firestore",P="@firebase/firestore-compat",R="firebase",L="9.6.6",D="[DEFAULT]",M={[c]:"fire-core",[h]:"fire-core-compat",[f]:"fire-analytics",[d]:"fire-analytics-compat",[m]:"fire-app-check",[p]:"fire-app-check-compat",[g]:"fire-auth",[_]:"fire-auth-compat",[v]:"fire-rtdb",[b]:"fire-rtdb-compat",[y]:"fire-fn",[w]:"fire-fn-compat",[O]:"fire-iid",[C]:"fire-iid-compat",[E]:"fire-fcm",[T]:"fire-fcm-compat",[I]:"fire-perf",[k]:"fire-perf-compat",[S]:"fire-rc",[x]:"fire-rc-compat",[j]:"fire-gcs",[N]:"fire-gcs-compat",[A]:"fire-fst",[P]:"fire-fst-compat","fire-js":"fire-js",[R]:"fire-js-all"},F=new Map,U=new Map;function q(e,t){try{e.container.addComponent(t)}catch(n){u.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function H(e){const t=e.name;if(U.has(t))return u.debug(`There were multiple attempts to register component ${t}.`),!1;U.set(t,e);for(const n of F.values())q(n,e);return!0}function W(e,t){return e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const V={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},B=new s["b"]("app","Firebase",V);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class z{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new i["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw B.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $=L;function G(e,t={}){if("object"!==typeof t){const e=t;t={name:e}}const n=Object.assign({name:D,automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!==typeof r||!r)throw B.create("bad-app-name",{appName:String(r)});const o=F.get(r);if(o){if(Object(s["n"])(e,o.options)&&Object(s["n"])(n,o.config))return o;throw B.create("duplicate-app",{appName:r})}const a=new i["b"](r);for(const i of U.values())a.addComponent(i);const c=new z(e,n,a);return F.set(r,c),c}function K(e=D){const t=F.get(e);if(!t)throw B.create("no-app",{appName:e});return t}function Y(e,t,n){var r;let s=null!==(r=M[e])&&void 0!==r?r:e;n&&(s+="-"+n);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void u.warn(e.join(" "))}H(new i["a"](s+"-version",()=>({library:s,version:t}),"VERSION"))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function J(e){H(new i["a"]("platform-logger",e=>new o(e),"PRIVATE")),Y(c,l,e),Y(c,l,"esm2017"),Y("fire-js","")}J("")},5926:function(e,t){var n=Math.ceil,i=Math.floor;e.exports=function(e){var t=+e;return t!==t||0===t?0:(t>0?i:n)(t)}},"59ed":function(e,t,n){var i=n("da84"),r=n("1626"),s=n("0d51"),o=i.TypeError;e.exports=function(e){if(r(e))return e;throw o(s(e)+" is not a function")}},"5c6c":function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},"5e77":function(e,t,n){var i=n("83ab"),r=n("1a2d"),s=Function.prototype,o=i&&Object.getOwnPropertyDescriptor,a=r(s,"name"),c=a&&"something"===function(){}.name,l=a&&(!i||i&&o(s,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:l}},"605d":function(e,t,n){var i=n("c6b6"),r=n("da84");e.exports="process"==i(r.process)},6069:function(e,t){e.exports="object"==typeof window},"60da":function(e,t,n){"use strict";var i=n("83ab"),r=n("e330"),s=n("c65b"),o=n("d039"),a=n("df75"),c=n("7418"),l=n("d1e7"),u=n("7b0b"),h=n("44ad"),d=Object.assign,f=Object.defineProperty,p=r([].concat);e.exports=!d||o((function(){if(i&&1!==d({b:1},d(f({},"a",{enumerable:!0,get:function(){f(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},t={},n=Symbol(),r="abcdefghijklmnopqrst";return e[n]=7,r.split("").forEach((function(e){t[e]=e})),7!=d({},e)[n]||a(d({},t)).join("")!=r}))?function(e,t){var n=u(e),r=arguments.length,o=1,d=c.f,f=l.f;while(r>o){var m,g=h(arguments[o++]),_=d?p(a(g),d(g)):a(g),v=_.length,b=0;while(v>b)m=_[b++],i&&!s(f,g,m)||(n[m]=g[m])}return n}:d},"65f0":function(e,t,n){var i=n("0b42");e.exports=function(e,t){return new(i(e))(0===t?0:t)}},"66ce":function(e,t,n){"use strict";var i=n("51b0");n.d(t,"a",(function(){return i["a"]})),n.d(t,"b",(function(){return i["b"]})),n.d(t,"c",(function(){return i["c"]}))},"68ee":function(e,t,n){var i=n("e330"),r=n("d039"),s=n("1626"),o=n("f5df"),a=n("d066"),c=n("8925"),l=function(){},u=[],h=a("Reflect","construct"),d=/^\s*(?:class|function)\b/,f=i(d.exec),p=!d.exec(l),m=function(e){if(!s(e))return!1;try{return h(l,u,e),!0}catch(t){return!1}},g=function(e){if(!s(e))return!1;switch(o(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return p||!!f(d,c(e))}catch(t){return!0}};g.sham=!0,e.exports=!h||r((function(){var e;return m(m.call)||!m(Object)||!m((function(){e=!0}))||e}))?g:m},"69f3":function(e,t,n){var i,r,s,o=n("7f9a"),a=n("da84"),c=n("e330"),l=n("861d"),u=n("9112"),h=n("1a2d"),d=n("c6cd"),f=n("f772"),p=n("d012"),m="Object already initialized",g=a.TypeError,_=a.WeakMap,v=function(e){return s(e)?r(e):i(e,{})},b=function(e){return function(t){var n;if(!l(t)||(n=r(t)).type!==e)throw g("Incompatible receiver, "+e+" required");return n}};if(o||d.state){var y=d.state||(d.state=new _),w=c(y.get),O=c(y.has),C=c(y.set);i=function(e,t){if(O(y,e))throw new g(m);return t.facade=e,C(y,e,t),t},r=function(e){return w(y,e)||{}},s=function(e){return O(y,e)}}else{var E=f("state");p[E]=!0,i=function(e,t){if(h(e,E))throw new g(m);return t.facade=e,u(e,E,t),t},r=function(e){return h(e,E)?e[E]:{}},s=function(e){return h(e,E)}}e.exports={set:i,get:r,has:s,enforce:v,getterFor:b}},"6b0d":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e,t)=>{const n=e.__vccOpts||e;for(const[i,r]of t)n[i]=r;return n}},"6c02":function(e,t,n){"use strict";n.d(t,"a",(function(){return Ze})),n.d(t,"b",(function(){return B}));var i=n("7a23");n("3f4e");
/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */
const r="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag,s=e=>r?Symbol(e):"_vr_"+e,o=s("rvlm"),a=s("rvd"),c=s("r"),l=s("rl"),u=s("rvl"),h="undefined"!==typeof window;function d(e){return e.__esModule||r&&"Module"===e[Symbol.toStringTag]}const f=Object.assign;function p(e,t){const n={};for(const i in t){const r=t[i];n[i]=Array.isArray(r)?r.map(e):e(r)}return n}const m=()=>{};const g=/\/$/,_=e=>e.replace(g,"");function v(e,t,n="/"){let i,r={},s="",o="";const a=t.indexOf("?"),c=t.indexOf("#",a>-1?a:0);return a>-1&&(i=t.slice(0,a),s=t.slice(a+1,c>-1?c:t.length),r=e(s)),c>-1&&(i=i||t.slice(0,c),o=t.slice(c,t.length)),i=I(null!=i?i:t,n),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:o}}function b(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function y(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function w(e,t,n){const i=t.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&O(t.matched[i],n.matched[r])&&C(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function O(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function C(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!E(e[n],t[n]))return!1;return!0}function E(e,t){return Array.isArray(e)?T(e,t):Array.isArray(t)?T(t,e):e===t}function T(e,t){return Array.isArray(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):1===e.length&&e[0]===t}function I(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),i=e.split("/");let r,s,o=n.length-1;for(r=0;r<i.length;r++)if(s=i[r],1!==o&&"."!==s){if(".."!==s)break;o--}return n.slice(0,o).join("/")+"/"+i.slice(r-(r===i.length?1:0)).join("/")}var k,S;(function(e){e["pop"]="pop",e["push"]="push"})(k||(k={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(S||(S={}));function x(e){if(!e)if(h){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),_(e)}const j=/^[^#]+#/;function N(e,t){return e.replace(j,"#")+t}function A(e,t){const n=document.documentElement.getBoundingClientRect(),i=e.getBoundingClientRect();return{behavior:t.behavior,left:i.left-n.left-(t.left||0),top:i.top-n.top-(t.top||0)}}const P=()=>({left:window.pageXOffset,top:window.pageYOffset});function R(e){let t;if("el"in e){const n=e.el,i="string"===typeof n&&n.startsWith("#");0;const r="string"===typeof n?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=A(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function L(e,t){const n=history.state?history.state.position-t:-1;return n+e}const D=new Map;function M(e,t){D.set(e,t)}function F(e){const t=D.get(e);return D.delete(e),t}let U=()=>location.protocol+"//"+location.host;function q(e,t){const{pathname:n,search:i,hash:r}=t,s=e.indexOf("#");if(s>-1){let t=r.includes(e.slice(s))?e.slice(s).length:1,n=r.slice(t);return"/"!==n[0]&&(n="/"+n),y(n,"")}const o=y(n,e);return o+i+r}function H(e,t,n,i){let r=[],s=[],o=null;const a=({state:s})=>{const a=q(e,location),c=n.value,l=t.value;let u=0;if(s){if(n.value=a,t.value=s,o&&o===c)return void(o=null);u=l?s.position-l.position:0}else i(a);r.forEach(e=>{e(n.value,c,{delta:u,type:k.pop,direction:u?u>0?S.forward:S.back:S.unknown})})};function c(){o=n.value}function l(e){r.push(e);const t=()=>{const t=r.indexOf(e);t>-1&&r.splice(t,1)};return s.push(t),t}function u(){const{history:e}=window;e.state&&e.replaceState(f({},e.state,{scroll:P()}),"")}function h(){for(const e of s)e();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function W(e,t,n,i=!1,r=!1){return{back:e,current:t,forward:n,replaced:i,position:window.history.length,scroll:r?P():null}}function V(e){const{history:t,location:n}=window,i={value:q(e,n)},r={value:t.state};function s(i,s,o){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+i:U()+e+i;try{t[o?"replaceState":"pushState"](s,"",c),r.value=s}catch(l){console.error(l),n[o?"replace":"assign"](c)}}function o(e,n){const o=f({},t.state,W(r.value.back,e,r.value.forward,!0),n,{position:r.value.position});s(e,o,!0),i.value=e}function a(e,n){const o=f({},r.value,t.state,{forward:e,scroll:P()});s(o.current,o,!0);const a=f({},W(i.value,e,null),{position:o.position+1},n);s(e,a,!1),i.value=e}return r.value||s(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:i,state:r,push:a,replace:o}}function B(e){e=x(e);const t=V(e),n=H(e,t.state,t.location,t.replace);function i(e,t=!0){t||n.pauseListeners(),history.go(e)}const r=f({location:"",base:e,go:i,createHref:N.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function z(e){return"string"===typeof e||e&&"object"===typeof e}function $(e){return"string"===typeof e||"symbol"===typeof e}const G={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},K=s("nf");var Y;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(Y||(Y={}));function J(e,t){return f(new Error,{type:e,[K]:!0},t)}function Q(e,t){return e instanceof Error&&K in e&&(null==t||!!(e.type&t))}const X="[^/]+?",Z={sensitive:!1,strict:!1,start:!0,end:!0},ee=/[.+*?^${}()[\]/\\]/g;function te(e,t){const n=f({},Z,t),i=[];let r=n.start?"^":"";const s=[];for(const u of e){const e=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let t=0;t<u.length;t++){const i=u[t];let o=40+(n.sensitive?.25:0);if(0===i.type)t||(r+="/"),r+=i.value.replace(ee,"\\$&"),o+=40;else if(1===i.type){const{value:e,repeatable:n,optional:a,regexp:c}=i;s.push({name:e,repeatable:n,optional:a});const h=c||X;if(h!==X){o+=10;try{new RegExp(`(${h})`)}catch(l){throw new Error(`Invalid custom RegExp for param "${e}" (${h}): `+l.message)}}let d=n?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;t||(d=a&&u.length<2?`(?:/${d})`:"/"+d),a&&(d+="?"),r+=d,o+=20,a&&(o+=-8),n&&(o+=-20),".*"===h&&(o+=-50)}e.push(o)}i.push(e)}if(n.strict&&n.end){const e=i.length-1;i[e][i[e].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(e){const t=e.match(o),n={};if(!t)return null;for(let i=1;i<t.length;i++){const e=t[i]||"",r=s[i-1];n[r.name]=e&&r.repeatable?e.split("/"):e}return n}function c(t){let n="",i=!1;for(const r of e){i&&n.endsWith("/")||(n+="/"),i=!1;for(const e of r)if(0===e.type)n+=e.value;else if(1===e.type){const{value:s,repeatable:o,optional:a}=e,c=s in t?t[s]:"";if(Array.isArray(c)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const l=Array.isArray(c)?c.join("/"):c;if(!l){if(!a)throw new Error(`Missing required param "${s}"`);r.length<2&&(n.endsWith("/")?n=n.slice(0,-1):i=!0)}n+=l}}return n}return{re:o,score:i,keys:s,parse:a,stringify:c}}function ne(e,t){let n=0;while(n<e.length&&n<t.length){const i=t[n]-e[n];if(i)return i;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function ie(e,t){let n=0;const i=e.score,r=t.score;while(n<i.length&&n<r.length){const e=ne(i[n],r[n]);if(e)return e;n++}return r.length-i.length}const re={type:0,value:""},se=/[a-zA-Z0-9_]/;function oe(e){if(!e)return[[]];if("/"===e)return[[re]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${l}": ${e}`)}let n=0,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a,c=0,l="",u="";function h(){l&&(0===n?s.push({type:0,value:l}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),l="")}function d(){l+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(l&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=i;break;case 1:"("===a?n=2:se.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==u[u.length-1]?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,u="";break;default:t("Unknown state");break}else i=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function ae(e,t,n){const i=te(oe(e.path),n);const r=f(i,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf===!t.record.aliasOf&&t.children.push(r),r}function ce(e,t){const n=[],i=new Map;function r(e){return i.get(e)}function s(e,n,i){const r=!i,a=ue(e);a.aliasOf=i&&i.record;const l=pe(t,e),u=[a];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)u.push(f({},a,{components:i?i.record.components:a.components,path:e,aliasOf:i?i.record:a}))}let h,d;for(const t of u){const{path:u}=t;if(n&&"/"!==u[0]){const e=n.record.path,i="/"===e[e.length-1]?"":"/";t.path=n.record.path+(u&&i+u)}if(h=ae(t,n,l),i?i.alias.push(h):(d=d||h,d!==h&&d.alias.push(h),r&&e.name&&!de(h)&&o(e.name)),"children"in a){const e=a.children;for(let t=0;t<e.length;t++)s(e[t],h,i&&i.children[t])}i=i||h,c(h)}return d?()=>{o(d)}:m}function o(e){if($(e)){const t=i.get(e);t&&(i.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&i.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function a(){return n}function c(e){let t=0;while(t<n.length&&ie(e,n[t])>=0)t++;n.splice(t,0,e),e.record.name&&!de(e)&&i.set(e.record.name,e)}function l(e,t){let r,s,o,a={};if("name"in e&&e.name){if(r=i.get(e.name),!r)throw J(1,{location:e});o=r.record.name,a=f(le(t.params,r.keys.filter(e=>!e.optional).map(e=>e.name)),e.params),s=r.stringify(a)}else if("path"in e)s=e.path,r=n.find(e=>e.re.test(s)),r&&(a=r.parse(s),o=r.record.name);else{if(r=t.name?i.get(t.name):n.find(e=>e.re.test(t.path)),!r)throw J(1,{location:e,currentLocation:t});o=r.record.name,a=f({},t.params,e.params),s=r.stringify(a)}const c=[];let l=r;while(l)c.unshift(l.record),l=l.parent;return{name:o,path:s,params:a,matched:c,meta:fe(c)}}return t=pe({strict:!1,end:!0,sensitive:!1},t),e.forEach(e=>s(e)),{addRoute:s,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function le(e,t){const n={};for(const i of t)i in e&&(n[i]=e[i]);return n}function ue(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:he(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function he(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const i in e.components)t[i]="boolean"===typeof n?n:n[i];return t}function de(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function fe(e){return e.reduce((e,t)=>f(e,t.meta),{})}function pe(e,t){const n={};for(const i in e)n[i]=i in t?t[i]:e[i];return n}const me=/#/g,ge=/&/g,_e=/\//g,ve=/=/g,be=/\?/g,ye=/\+/g,we=/%5B/g,Oe=/%5D/g,Ce=/%5E/g,Ee=/%60/g,Te=/%7B/g,Ie=/%7C/g,ke=/%7D/g,Se=/%20/g;function xe(e){return encodeURI(""+e).replace(Ie,"|").replace(we,"[").replace(Oe,"]")}function je(e){return xe(e).replace(Te,"{").replace(ke,"}").replace(Ce,"^")}function Ne(e){return xe(e).replace(ye,"%2B").replace(Se,"+").replace(me,"%23").replace(ge,"%26").replace(Ee,"`").replace(Te,"{").replace(ke,"}").replace(Ce,"^")}function Ae(e){return Ne(e).replace(ve,"%3D")}function Pe(e){return xe(e).replace(me,"%23").replace(be,"%3F")}function Re(e){return null==e?"":Pe(e).replace(_e,"%2F")}function Le(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function De(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],i=(n?e.slice(1):e).split("&");for(let r=0;r<i.length;++r){const e=i[r].replace(ye," "),n=e.indexOf("="),s=Le(n<0?e:e.slice(0,n)),o=n<0?null:Le(e.slice(n+1));if(s in t){let e=t[s];Array.isArray(e)||(e=t[s]=[e]),e.push(o)}else t[s]=o}return t}function Me(e){let t="";for(let n in e){const i=e[n];if(n=Ae(n),null==i){void 0!==i&&(t+=(t.length?"&":"")+n);continue}const r=Array.isArray(i)?i.map(e=>e&&Ne(e)):[i&&Ne(i)];r.forEach(e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))})}return t}function Fe(e){const t={};for(const n in e){const i=e[n];void 0!==i&&(t[n]=Array.isArray(i)?i.map(e=>null==e?null:""+e):null==i?i:""+i)}return t}function Ue(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function qe(e,t,n,i,r){const s=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=e=>{!1===e?a(J(4,{from:n,to:t})):e instanceof Error?a(e):z(e)?a(J(2,{from:t,to:e})):(s&&i.enterCallbacks[r]===s&&"function"===typeof e&&s.push(e),o())},l=e.call(i&&i.instances[r],t,n,c);let u=Promise.resolve(l);e.length<3&&(u=u.then(c)),u.catch(e=>a(e))})}function He(e,t,n,i){const r=[];for(const s of e)for(const e in s.components){let o=s.components[e];if("beforeRouteEnter"===t||s.instances[e])if(We(o)){const a=o.__vccOpts||o,c=a[t];c&&r.push(qe(c,n,i,s,e))}else{let a=o();0,r.push(()=>a.then(r=>{if(!r)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${s.path}"`));const o=d(r)?r.default:r;s.components[e]=o;const a=o.__vccOpts||o,c=a[t];return c&&qe(c,n,i,s,e)()}))}}return r}function We(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function Ve(e){const t=Object(i["n"])(c),n=Object(i["n"])(l),r=Object(i["c"])(()=>t.resolve(Object(i["F"])(e.to))),s=Object(i["c"])(()=>{const{matched:e}=r.value,{length:t}=e,i=e[t-1],s=n.matched;if(!i||!s.length)return-1;const o=s.findIndex(O.bind(null,i));if(o>-1)return o;const a=Ke(e[t-2]);return t>1&&Ke(i)===a&&s[s.length-1].path!==a?s.findIndex(O.bind(null,e[t-2])):o}),o=Object(i["c"])(()=>s.value>-1&&Ge(n.params,r.value.params)),a=Object(i["c"])(()=>s.value>-1&&s.value===n.matched.length-1&&C(n.params,r.value.params));function u(n={}){return $e(n)?t[Object(i["F"])(e.replace)?"replace":"push"](Object(i["F"])(e.to)).catch(m):Promise.resolve()}return{route:r,href:Object(i["c"])(()=>r.value.href),isActive:o,isExactActive:a,navigate:u}}const Be=Object(i["k"])({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ve,setup(e,{slots:t}){const n=Object(i["y"])(Ve(e)),{options:r}=Object(i["n"])(c),s=Object(i["c"])(()=>({[Ye(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ye(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=t.default&&t.default(n);return e.custom?r:Object(i["m"])("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),ze=Be;function $e(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ge(e,t){for(const n in t){const i=t[n],r=e[n];if("string"===typeof i){if(i!==r)return!1}else if(!Array.isArray(r)||r.length!==i.length||i.some((e,t)=>e!==r[t]))return!1}return!0}function Ke(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ye=(e,t,n)=>null!=e?e:null!=t?t:n,Je=Object(i["k"])({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const r=Object(i["n"])(u),s=Object(i["c"])(()=>e.route||r.value),c=Object(i["n"])(a,0),l=Object(i["c"])(()=>s.value.matched[c]);Object(i["w"])(a,c+1),Object(i["w"])(o,l),Object(i["w"])(u,s);const h=Object(i["z"])();return Object(i["H"])(()=>[h.value,l.value,e.name],([e,t,n],[i,r,s])=>{t&&(t.instances[n]=e,r&&r!==t&&e&&e===i&&(t.leaveGuards.size||(t.leaveGuards=r.leaveGuards),t.updateGuards.size||(t.updateGuards=r.updateGuards))),!e||!t||r&&O(t,r)&&i||(t.enterCallbacks[n]||[]).forEach(t=>t(e))},{flush:"post"}),()=>{const r=s.value,o=l.value,a=o&&o.components[e.name],c=e.name;if(!a)return Qe(n.default,{Component:a,route:r});const u=o.props[e.name],d=u?!0===u?r.params:"function"===typeof u?u(r):u:null,p=e=>{e.component.isUnmounted&&(o.instances[c]=null)},m=Object(i["m"])(a,f({},d,t,{onVnodeUnmounted:p,ref:h}));return Qe(n.default,{Component:m,route:r})||m}}});function Qe(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const Xe=Je;function Ze(e){const t=ce(e.routes,e),n=e.parseQuery||De,r=e.stringifyQuery||Me,s=e.history;const o=Ue(),a=Ue(),d=Ue(),g=Object(i["D"])(G);let _=G;h&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const y=p.bind(null,e=>""+e),O=p.bind(null,Re),C=p.bind(null,Le);function E(e,n){let i,r;return $(e)?(i=t.getRecordMatcher(e),r=n):r=e,t.addRoute(r,i)}function T(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function I(){return t.getRoutes().map(e=>e.record)}function S(e){return!!t.getRecordMatcher(e)}function x(e,i){if(i=f({},i||g.value),"string"===typeof e){const r=v(n,e,i.path),o=t.resolve({path:r.path},i),a=s.createHref(r.fullPath);return f(r,o,{params:C(o.params),hash:Le(r.hash),redirectedFrom:void 0,href:a})}let o;if("path"in e)o=f({},e,{path:v(n,e.path,i.path).path});else{const t=f({},e.params);for(const e in t)null==t[e]&&delete t[e];o=f({},e,{params:O(e.params)}),i.params=O(i.params)}const a=t.resolve(o,i),c=e.hash||"";a.params=y(C(a.params));const l=b(r,f({},e,{hash:je(c),path:a.path})),u=s.createHref(l);return f({fullPath:l,hash:c,query:r===Me?Fe(e.query):e.query||{}},a,{redirectedFrom:void 0,href:u})}function j(e){return"string"===typeof e?v(n,e,g.value.path):f({},e)}function N(e,t){if(_!==e)return J(8,{from:t,to:e})}function A(e){return q(e)}function D(e){return A(f(j(e),{replace:!0}))}function U(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let i="function"===typeof n?n(e):n;return"string"===typeof i&&(i=i.includes("?")||i.includes("#")?i=j(i):{path:i},i.params={}),f({query:e.query,hash:e.hash,params:e.params},i)}}function q(e,t){const n=_=x(e),i=g.value,s=e.state,o=e.force,a=!0===e.replace,c=U(n);if(c)return q(f(j(c),{state:s,force:o,replace:a}),t||n);const l=n;let u;return l.redirectedFrom=t,!o&&w(r,i,n)&&(u=J(16,{to:l,from:i}),ie(i,i,!0,!1)),(u?Promise.resolve(u):W(l,i)).catch(e=>Q(e)?e:ee(e,l,i)).then(e=>{if(e){if(Q(e,2))return q(f(j(e.to),{state:s,force:o,replace:a}),t||l)}else e=B(l,i,!0,a,s);return V(l,i,e),e})}function H(e,t){const n=N(e,t);return n?Promise.reject(n):Promise.resolve()}function W(e,t){let n;const[i,r,s]=tt(e,t);n=He(i.reverse(),"beforeRouteLeave",e,t);for(const o of i)o.leaveGuards.forEach(i=>{n.push(qe(i,e,t))});const c=H.bind(null,e,t);return n.push(c),et(n).then(()=>{n=[];for(const i of o.list())n.push(qe(i,e,t));return n.push(c),et(n)}).then(()=>{n=He(r,"beforeRouteUpdate",e,t);for(const i of r)i.updateGuards.forEach(i=>{n.push(qe(i,e,t))});return n.push(c),et(n)}).then(()=>{n=[];for(const i of e.matched)if(i.beforeEnter&&!t.matched.includes(i))if(Array.isArray(i.beforeEnter))for(const r of i.beforeEnter)n.push(qe(r,e,t));else n.push(qe(i.beforeEnter,e,t));return n.push(c),et(n)}).then(()=>(e.matched.forEach(e=>e.enterCallbacks={}),n=He(s,"beforeRouteEnter",e,t),n.push(c),et(n))).then(()=>{n=[];for(const i of a.list())n.push(qe(i,e,t));return n.push(c),et(n)}).catch(e=>Q(e,8)?e:Promise.reject(e))}function V(e,t,n){for(const i of d.list())i(e,t,n)}function B(e,t,n,i,r){const o=N(e,t);if(o)return o;const a=t===G,c=h?history.state:{};n&&(i||a?s.replace(e.fullPath,f({scroll:a&&c&&c.scroll},r)):s.push(e.fullPath,r)),g.value=e,ie(e,t,n,a),ne()}let z;function K(){z=s.listen((e,t,n)=>{const i=x(e),r=U(i);if(r)return void q(f(r,{replace:!0}),i).catch(m);_=i;const o=g.value;h&&M(L(o.fullPath,n.delta),P()),W(i,o).catch(e=>Q(e,12)?e:Q(e,2)?(q(e.to,i).then(e=>{Q(e,20)&&!n.delta&&n.type===k.pop&&s.go(-1,!1)}).catch(m),Promise.reject()):(n.delta&&s.go(-n.delta,!1),ee(e,i,o))).then(e=>{e=e||B(i,o,!1),e&&(n.delta?s.go(-n.delta,!1):n.type===k.pop&&Q(e,20)&&s.go(-1,!1)),V(i,o,e)}).catch(m)})}let Y,X=Ue(),Z=Ue();function ee(e,t,n){ne(e);const i=Z.list();return i.length?i.forEach(i=>i(e,t,n)):console.error(e),Promise.reject(e)}function te(){return Y&&g.value!==G?Promise.resolve():new Promise((e,t)=>{X.add([e,t])})}function ne(e){Y||(Y=!0,K(),X.list().forEach(([t,n])=>e?n(e):t()),X.reset())}function ie(t,n,r,s){const{scrollBehavior:o}=e;if(!h||!o)return Promise.resolve();const a=!r&&F(L(t.fullPath,0))||(s||!r)&&history.state&&history.state.scroll||null;return Object(i["o"])().then(()=>o(t,n,a)).then(e=>e&&R(e)).catch(e=>ee(e,t,n))}const re=e=>s.go(e);let se;const oe=new Set,ae={currentRoute:g,addRoute:E,removeRoute:T,hasRoute:S,getRoutes:I,resolve:x,options:e,push:A,replace:D,go:re,back:()=>re(-1),forward:()=>re(1),beforeEach:o.add,beforeResolve:a.add,afterEach:d.add,onError:Z.add,isReady:te,install(e){const t=this;e.component("RouterLink",ze),e.component("RouterView",Xe),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>Object(i["F"])(g)}),h&&!se&&g.value===G&&(se=!0,A(s.location).catch(e=>{0}));const n={};for(const s in G)n[s]=Object(i["c"])(()=>g.value[s]);e.provide(c,t),e.provide(l,Object(i["y"])(n)),e.provide(u,g);const r=e.unmount;oe.add(e),e.unmount=function(){oe.delete(e),oe.size<1&&(_=G,z&&z(),g.value=G,se=!1,Y=!1),r()}}};return ae}function et(e){return e.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function tt(e,t){const n=[],i=[],r=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const s=t.matched[o];s&&(e.matched.find(e=>O(e,s))?i.push(s):n.push(s));const a=e.matched[o];a&&(t.matched.find(e=>O(e,a))||r.push(a))}return[n,i,r]}},"6eeb":function(e,t,n){var i=n("da84"),r=n("1626"),s=n("1a2d"),o=n("9112"),a=n("ce4e"),c=n("8925"),l=n("69f3"),u=n("5e77").CONFIGURABLE,h=l.get,d=l.enforce,f=String(String).split("String");(e.exports=function(e,t,n,c){var l,h=!!c&&!!c.unsafe,p=!!c&&!!c.enumerable,m=!!c&&!!c.noTargetGet,g=c&&void 0!==c.name?c.name:t;r(n)&&("Symbol("===String(g).slice(0,7)&&(g="["+String(g).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!s(n,"name")||u&&n.name!==g)&&o(n,"name",g),l=d(n),l.source||(l.source=f.join("string"==typeof g?g:""))),e!==i?(h?!m&&e[t]&&(p=!0):delete e[t],p?e[t]=n:o(e,t,n)):p?e[t]=n:a(t,n)})(Function.prototype,"toString",(function(){return r(this)&&h(this).source||c(this)}))},7418:function(e,t){t.f=Object.getOwnPropertySymbols},7839:function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"785a":function(e,t,n){var i=n("cc12"),r=i("span").classList,s=r&&r.constructor&&r.constructor.prototype;e.exports=s===Object.prototype?void 0:s},"7a23":function(e,t,n){"use strict";n.d(t,"y",(function(){return Ce})),n.d(t,"z",(function(){return Me})),n.d(t,"D",(function(){return Fe})),n.d(t,"F",(function(){return He})),n.d(t,"p",(function(){return i["I"]})),n.d(t,"q",(function(){return i["J"]})),n.d(t,"E",(function(){return i["L"]})),n.d(t,"a",(function(){return yi})),n.d(t,"c",(function(){return Cr})),n.d(t,"e",(function(){return Ai})),n.d(t,"f",(function(){return zi})),n.d(t,"g",(function(){return Ni})),n.d(t,"h",(function(){return Fi})),n.d(t,"i",(function(){return Bi})),n.d(t,"j",(function(){return Ui})),n.d(t,"k",(function(){return nn})),n.d(t,"l",(function(){return ar})),n.d(t,"m",(function(){return Er})),n.d(t,"n",(function(){return Ut})),n.d(t,"o",(function(){return lt})),n.d(t,"r",(function(){return an})),n.d(t,"s",(function(){return cn})),n.d(t,"t",(function(){return yn})),n.d(t,"u",(function(){return Ii})),n.d(t,"v",(function(){return St})),n.d(t,"w",(function(){return Ft})),n.d(t,"x",(function(){return kt})),n.d(t,"A",(function(){return Qi})),n.d(t,"B",(function(){return Xi})),n.d(t,"C",(function(){return gi})),n.d(t,"H",(function(){return Ht})),n.d(t,"I",(function(){return xt})),n.d(t,"J",(function(){return ti})),n.d(t,"b",(function(){return rs})),n.d(t,"d",(function(){return js})),n.d(t,"G",(function(){return ws})),n.d(t,"K",(function(){return Is}));var i=n("9ff4");let r;const s=[];class o{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&r&&(this.parent=r,this.index=(r.scopes||(r.scopes=[])).push(this)-1)}run(e){if(this.active)try{return this.on(),e()}finally{this.off()}else 0}on(){this.active&&(s.push(this),r=this)}off(){this.active&&(s.pop(),r=s[s.length-1])}stop(e){if(this.active){if(this.effects.forEach(e=>e.stop()),this.cleanups.forEach(e=>e()),this.scopes&&this.scopes.forEach(e=>e.stop(!0)),this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.active=!1}}}function a(e,t){t=t||r,t&&t.active&&t.effects.push(e)}const c=e=>{const t=new Set(e);return t.w=0,t.n=0,t},l=e=>(e.w&m)>0,u=e=>(e.n&m)>0,h=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=m},d=e=>{const{deps:t}=e;if(t.length){let n=0;for(let i=0;i<t.length;i++){const r=t[i];l(r)&&!u(r)?r.delete(e):t[n++]=r,r.w&=~m,r.n&=~m}t.length=n}},f=new WeakMap;let p=0,m=1;const g=30,_=[];let v;const b=Symbol(""),y=Symbol("");class w{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],a(this,n)}run(){if(!this.active)return this.fn();if(!_.includes(this))try{return _.push(v=this),I(),m=1<<++p,p<=g?h(this):O(this),this.fn()}finally{p<=g&&d(this),m=1<<--p,k(),_.pop();const e=_.length;v=e>0?_[e-1]:void 0}}stop(){this.active&&(O(this),this.onStop&&this.onStop(),this.active=!1)}}function O(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let C=!0;const E=[];function T(){E.push(C),C=!1}function I(){E.push(C),C=!0}function k(){const e=E.pop();C=void 0===e||e}function S(e,t,n){if(!x())return;let i=f.get(e);i||f.set(e,i=new Map);let r=i.get(n);r||i.set(n,r=c());const s=void 0;j(r,s)}function x(){return C&&void 0!==v}function j(e,t){let n=!1;p<=g?u(e)||(e.n|=m,n=!l(e)):n=!e.has(v),n&&(e.add(v),v.deps.push(e))}function N(e,t,n,r,s,o){const a=f.get(e);if(!a)return;let l=[];if("clear"===t)l=[...a.values()];else if("length"===n&&Object(i["o"])(e))a.forEach((e,t)=>{("length"===t||t>=r)&&l.push(e)});else switch(void 0!==n&&l.push(a.get(n)),t){case"add":Object(i["o"])(e)?Object(i["s"])(n)&&l.push(a.get("length")):(l.push(a.get(b)),Object(i["t"])(e)&&l.push(a.get(y)));break;case"delete":Object(i["o"])(e)||(l.push(a.get(b)),Object(i["t"])(e)&&l.push(a.get(y)));break;case"set":Object(i["t"])(e)&&l.push(a.get(b));break}if(1===l.length)l[0]&&A(l[0]);else{const e=[];for(const t of l)t&&e.push(...t);A(c(e))}}function A(e,t){for(const n of Object(i["o"])(e)?e:[...e])(n!==v||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const P=Object(i["H"])("__proto__,__v_isRef,__isVue"),R=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(i["E"])),L=q(),D=q(!1,!0),M=q(!0),F=U();function U(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...e){const n=je(this);for(let t=0,r=this.length;t<r;t++)S(n,"get",t+"");const i=n[t](...e);return-1===i||!1===i?n[t](...e.map(je)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...e){T();const n=je(this)[t].apply(this,e);return k(),n}}),e}function q(e=!1,t=!1){return function(n,r,s){if("__v_isReactive"===r)return!e;if("__v_isReadonly"===r)return e;if("__v_raw"===r&&s===(e?t?ye:be:t?ve:_e).get(n))return n;const o=Object(i["o"])(n);if(!e&&o&&Object(i["k"])(F,r))return Reflect.get(F,r,s);const a=Reflect.get(n,r,s);if(Object(i["E"])(r)?R.has(r):P(r))return a;if(e||S(n,"get",r),t)return a;if(De(a)){const e=!o||!Object(i["s"])(r);return e?a.value:a}return Object(i["v"])(a)?e?Te(a):Ce(a):a}}const H=V(),W=V(!0);function V(e=!1){return function(t,n,r,s){let o=t[n];if(!e&&!Se(r)&&(r=je(r),o=je(o),!Object(i["o"])(t)&&De(o)&&!De(r)))return o.value=r,!0;const a=Object(i["o"])(t)&&Object(i["s"])(n)?Number(n)<t.length:Object(i["k"])(t,n),c=Reflect.set(t,n,r,s);return t===je(s)&&(a?Object(i["j"])(r,o)&&N(t,"set",n,r,o):N(t,"add",n,r)),c}}function B(e,t){const n=Object(i["k"])(e,t),r=e[t],s=Reflect.deleteProperty(e,t);return s&&n&&N(e,"delete",t,void 0,r),s}function z(e,t){const n=Reflect.has(e,t);return Object(i["E"])(t)&&R.has(t)||S(e,"has",t),n}function $(e){return S(e,"iterate",Object(i["o"])(e)?"length":b),Reflect.ownKeys(e)}const G={get:L,set:H,deleteProperty:B,has:z,ownKeys:$},K={get:M,set(e,t){return!0},deleteProperty(e,t){return!0}},Y=Object(i["h"])({},G,{get:D,set:W}),J=e=>e,Q=e=>Reflect.getPrototypeOf(e);function X(e,t,n=!1,i=!1){e=e["__v_raw"];const r=je(e),s=je(t);t!==s&&!n&&S(r,"get",t),!n&&S(r,"get",s);const{has:o}=Q(r),a=i?J:n?Pe:Ae;return o.call(r,t)?a(e.get(t)):o.call(r,s)?a(e.get(s)):void(e!==r&&e.get(t))}function Z(e,t=!1){const n=this["__v_raw"],i=je(n),r=je(e);return e!==r&&!t&&S(i,"has",e),!t&&S(i,"has",r),e===r?n.has(e):n.has(e)||n.has(r)}function ee(e,t=!1){return e=e["__v_raw"],!t&&S(je(e),"iterate",b),Reflect.get(e,"size",e)}function te(e){e=je(e);const t=je(this),n=Q(t),i=n.has.call(t,e);return i||(t.add(e),N(t,"add",e,e)),this}function ne(e,t){t=je(t);const n=je(this),{has:r,get:s}=Q(n);let o=r.call(n,e);o||(e=je(e),o=r.call(n,e));const a=s.call(n,e);return n.set(e,t),o?Object(i["j"])(t,a)&&N(n,"set",e,t,a):N(n,"add",e,t),this}function ie(e){const t=je(this),{has:n,get:i}=Q(t);let r=n.call(t,e);r||(e=je(e),r=n.call(t,e));const s=i?i.call(t,e):void 0,o=t.delete(e);return r&&N(t,"delete",e,void 0,s),o}function re(){const e=je(this),t=0!==e.size,n=void 0,i=e.clear();return t&&N(e,"clear",void 0,void 0,n),i}function se(e,t){return function(n,i){const r=this,s=r["__v_raw"],o=je(s),a=t?J:e?Pe:Ae;return!e&&S(o,"iterate",b),s.forEach((e,t)=>n.call(i,a(e),a(t),r))}}function oe(e,t,n){return function(...r){const s=this["__v_raw"],o=je(s),a=Object(i["t"])(o),c="entries"===e||e===Symbol.iterator&&a,l="keys"===e&&a,u=s[e](...r),h=n?J:t?Pe:Ae;return!t&&S(o,"iterate",l?y:b),{next(){const{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:c?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function ae(e){return function(...t){return"delete"!==e&&this}}function ce(){const e={get(e){return X(this,e)},get size(){return ee(this)},has:Z,add:te,set:ne,delete:ie,clear:re,forEach:se(!1,!1)},t={get(e){return X(this,e,!1,!0)},get size(){return ee(this)},has:Z,add:te,set:ne,delete:ie,clear:re,forEach:se(!1,!0)},n={get(e){return X(this,e,!0)},get size(){return ee(this,!0)},has(e){return Z.call(this,e,!0)},add:ae("add"),set:ae("set"),delete:ae("delete"),clear:ae("clear"),forEach:se(!0,!1)},i={get(e){return X(this,e,!0,!0)},get size(){return ee(this,!0)},has(e){return Z.call(this,e,!0)},add:ae("add"),set:ae("set"),delete:ae("delete"),clear:ae("clear"),forEach:se(!0,!0)},r=["keys","values","entries",Symbol.iterator];return r.forEach(r=>{e[r]=oe(r,!1,!1),n[r]=oe(r,!0,!1),t[r]=oe(r,!1,!0),i[r]=oe(r,!0,!0)}),[e,n,t,i]}const[le,ue,he,de]=ce();function fe(e,t){const n=t?e?de:he:e?ue:le;return(t,r,s)=>"__v_isReactive"===r?!e:"__v_isReadonly"===r?e:"__v_raw"===r?t:Reflect.get(Object(i["k"])(n,r)&&r in t?n:t,r,s)}const pe={get:fe(!1,!1)},me={get:fe(!1,!0)},ge={get:fe(!0,!1)};const _e=new WeakMap,ve=new WeakMap,be=new WeakMap,ye=new WeakMap;function we(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Oe(e){return e["__v_skip"]||!Object.isExtensible(e)?0:we(Object(i["O"])(e))}function Ce(e){return e&&e["__v_isReadonly"]?e:Ie(e,!1,G,pe,_e)}function Ee(e){return Ie(e,!1,Y,me,ve)}function Te(e){return Ie(e,!0,K,ge,be)}function Ie(e,t,n,r,s){if(!Object(i["v"])(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const o=s.get(e);if(o)return o;const a=Oe(e);if(0===a)return e;const c=new Proxy(e,2===a?r:n);return s.set(e,c),c}function ke(e){return Se(e)?ke(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function Se(e){return!(!e||!e["__v_isReadonly"])}function xe(e){return ke(e)||Se(e)}function je(e){const t=e&&e["__v_raw"];return t?je(t):e}function Ne(e){return Object(i["g"])(e,"__v_skip",!0),e}const Ae=e=>Object(i["v"])(e)?Ce(e):e,Pe=e=>Object(i["v"])(e)?Te(e):e;function Re(e){x()&&(e=je(e),e.dep||(e.dep=c()),j(e.dep))}function Le(e,t){e=je(e),e.dep&&A(e.dep)}function De(e){return Boolean(e&&!0===e.__v_isRef)}function Me(e){return Ue(e,!1)}function Fe(e){return Ue(e,!0)}function Ue(e,t){return De(e)?e:new qe(e,t)}class qe{constructor(e,t){this._shallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:je(e),this._value=t?e:Ae(e)}get value(){return Re(this),this._value}set value(e){e=this._shallow?e:je(e),Object(i["j"])(e,this._rawValue)&&(this._rawValue=e,this._value=this._shallow?e:Ae(e),Le(this,e))}}function He(e){return De(e)?e.value:e}const We={get:(e,t,n)=>He(Reflect.get(e,t,n)),set:(e,t,n,i)=>{const r=e[t];return De(r)&&!De(n)?(r.value=n,!0):Reflect.set(e,t,n,i)}};function Ve(e){return ke(e)?e:new Proxy(e,We)}class Be{constructor(e,t,n,i){this._setter=t,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new w(e,()=>{this._dirty||(this._dirty=!0,Le(this))}),this.effect.active=!i,this["__v_isReadonly"]=n}get value(){const e=je(this);return Re(e),e._dirty&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function ze(e,t,n=!1){let r,s;const o=Object(i["p"])(e);o?(r=e,s=i["d"]):(r=e.get,s=e.set);const a=new Be(r,s,o||!s,n);return a}Promise.resolve();function $e(e,t,n,i){let r;try{r=i?e(...i):e()}catch(s){Ke(s,t,n)}return r}function Ge(e,t,n,r){if(Object(i["p"])(e)){const s=$e(e,t,n,r);return s&&Object(i["y"])(s)&&s.catch(e=>{Ke(e,t,n)}),s}const s=[];for(let i=0;i<e.length;i++)s.push(Ge(e[i],t,n,r));return s}function Ke(e,t,n,i=!0){const r=t?t.vnode:null;if(t){let i=t.parent;const r=t.proxy,s=n;while(i){const t=i.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,r,s))return;i=i.parent}const o=t.appContext.config.errorHandler;if(o)return void $e(o,null,10,[e,r,s])}Ye(e,n,r,i)}function Ye(e,t,n,i=!0){console.error(e)}let Je=!1,Qe=!1;const Xe=[];let Ze=0;const et=[];let tt=null,nt=0;const it=[];let rt=null,st=0;const ot=Promise.resolve();let at=null,ct=null;function lt(e){const t=at||ot;return e?t.then(this?e.bind(this):e):t}function ut(e){let t=Ze+1,n=Xe.length;while(t<n){const i=t+n>>>1,r=bt(Xe[i]);r<e?t=i+1:n=i}return t}function ht(e){Xe.length&&Xe.includes(e,Je&&e.allowRecurse?Ze+1:Ze)||e===ct||(null==e.id?Xe.push(e):Xe.splice(ut(e.id),0,e),dt())}function dt(){Je||Qe||(Qe=!0,at=ot.then(yt))}function ft(e){const t=Xe.indexOf(e);t>Ze&&Xe.splice(t,1)}function pt(e,t,n,r){Object(i["o"])(e)?n.push(...e):t&&t.includes(e,e.allowRecurse?r+1:r)||n.push(e),dt()}function mt(e){pt(e,tt,et,nt)}function gt(e){pt(e,rt,it,st)}function _t(e,t=null){if(et.length){for(ct=t,tt=[...new Set(et)],et.length=0,nt=0;nt<tt.length;nt++)tt[nt]();tt=null,nt=0,ct=null,_t(e,t)}}function vt(e){if(it.length){const e=[...new Set(it)];if(it.length=0,rt)return void rt.push(...e);for(rt=e,rt.sort((e,t)=>bt(e)-bt(t)),st=0;st<rt.length;st++)rt[st]();rt=null,st=0}}const bt=e=>null==e.id?1/0:e.id;function yt(e){Qe=!1,Je=!0,_t(e),Xe.sort((e,t)=>bt(e)-bt(t));i["d"];try{for(Ze=0;Ze<Xe.length;Ze++){const e=Xe[Ze];e&&!1!==e.active&&$e(e,null,14)}}finally{Ze=0,Xe.length=0,vt(e),Je=!1,at=null,(Xe.length||et.length||it.length)&&yt(e)}}new Set;new Map;function wt(e,t,...n){const r=e.vnode.props||i["b"];let s=n;const o=t.startsWith("update:"),a=o&&t.slice(7);if(a&&a in r){const e=("modelValue"===a?"model":a)+"Modifiers",{number:t,trim:o}=r[e]||i["b"];o?s=n.map(e=>e.trim()):t&&(s=n.map(i["N"]))}let c;let l=r[c=Object(i["M"])(t)]||r[c=Object(i["M"])(Object(i["e"])(t))];!l&&o&&(l=r[c=Object(i["M"])(Object(i["l"])(t))]),l&&Ge(l,e,6,s);const u=r[c+"Once"];if(u){if(e.emitted){if(e.emitted[c])return}else e.emitted={};e.emitted[c]=!0,Ge(u,e,6,s)}}function Ot(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(void 0!==s)return s;const o=e.emits;let a={},c=!1;if(!Object(i["p"])(e)){const r=e=>{const n=Ot(e,t,!0);n&&(c=!0,Object(i["h"])(a,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return o||c?(Object(i["o"])(o)?o.forEach(e=>a[e]=null):Object(i["h"])(a,o),r.set(e,a),a):(r.set(e,null),null)}function Ct(e,t){return!(!e||!Object(i["w"])(t))&&(t=t.slice(2).replace(/Once$/,""),Object(i["k"])(e,t[0].toLowerCase()+t.slice(1))||Object(i["k"])(e,Object(i["l"])(t))||Object(i["k"])(e,t))}let Et=null,Tt=null;function It(e){const t=Et;return Et=e,Tt=e&&e.type.__scopeId||null,t}function kt(e){Tt=e}function St(){Tt=null}function xt(e,t=Et,n){if(!t)return e;if(e._n)return e;const i=(...n)=>{i._d&&xi(-1);const r=It(t),s=e(...n);return It(r),i._d&&xi(1),s};return i._n=!0,i._c=!0,i._d=!0,i}function jt(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:o,propsOptions:[a],slots:c,attrs:l,emit:u,render:h,renderCache:d,data:f,setupState:p,ctx:m,inheritAttrs:g}=e;let _,v;const b=It(e);try{if(4&n.shapeFlag){const e=s||r;_=$i(h.call(e,e,d,o,p,f,m)),v=l}else{const e=t;0,_=$i(e.length>1?e(o,{attrs:l,slots:c,emit:u}):e(o,null)),v=t.props?l:Nt(l)}}catch(w){Ei.length=0,Ke(w,e,1),_=Ui(Oi)}let y=_;if(v&&!1!==g){const e=Object.keys(v),{shapeFlag:t}=y;e.length&&7&t&&(a&&e.some(i["u"])&&(v=At(v,a)),y=Wi(y,v))}return n.dirs&&(y.dirs=y.dirs?y.dirs.concat(n.dirs):n.dirs),n.transition&&(y.transition=n.transition),_=y,It(b),_}const Nt=e=>{let t;for(const n in e)("class"===n||"style"===n||Object(i["w"])(n))&&((t||(t={}))[n]=e[n]);return t},At=(e,t)=>{const n={};for(const r in e)Object(i["u"])(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function Pt(e,t,n){const{props:i,children:r,component:s}=e,{props:o,children:a,patchFlag:c}=t,l=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!r&&!a||a&&a.$stable)||i!==o&&(i?!o||Rt(i,o,l):!!o);if(1024&c)return!0;if(16&c)return i?Rt(i,o,l):!!o;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==i[n]&&!Ct(l,n))return!0}}return!1}function Rt(e,t,n){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(t[s]!==e[s]&&!Ct(n,s))return!0}return!1}function Lt({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const Dt=e=>e.__isSuspense;function Mt(e,t){t&&t.pendingBranch?Object(i["o"])(e)?t.effects.push(...e):t.effects.push(e):gt(e)}function Ft(e,t){if(or){let n=or.provides;const i=or.parent&&or.parent.provides;i===n&&(n=or.provides=Object.create(i)),n[e]=t}else 0}function Ut(e,t,n=!1){const r=or||Et;if(r){const s=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&Object(i["p"])(t)?t.call(r.proxy):t}else 0}const qt={};function Ht(e,t,n){return Wt(e,t,n)}function Wt(e,t,{immediate:n,deep:r,flush:s,onTrack:o,onTrigger:a}=i["b"]){const c=or;let l,u,h=!1,d=!1;if(De(e)?(l=()=>e.value,h=!!e._shallow):ke(e)?(l=()=>e,r=!0):Object(i["o"])(e)?(d=!0,h=e.some(ke),l=()=>e.map(e=>De(e)?e.value:ke(e)?zt(e):Object(i["p"])(e)?$e(e,c,2):void 0)):l=Object(i["p"])(e)?t?()=>$e(e,c,2):()=>{if(!c||!c.isUnmounted)return u&&u(),Ge(e,c,3,[f])}:i["d"],t&&r){const e=l;l=()=>zt(e())}let f=e=>{u=_.onStop=()=>{$e(e,c,4)}};if(fr)return f=i["d"],t?n&&Ge(t,c,3,[l(),d?[]:void 0,f]):l(),i["d"];let p=d?[]:qt;const m=()=>{if(_.active)if(t){const e=_.run();(r||h||(d?e.some((e,t)=>Object(i["j"])(e,p[t])):Object(i["j"])(e,p)))&&(u&&u(),Ge(t,c,3,[e,p===qt?void 0:p,f]),p=e)}else _.run()};let g;m.allowRecurse=!!t,g="sync"===s?m:"post"===s?()=>ci(m,c&&c.suspense):()=>{!c||c.isMounted?mt(m):m()};const _=new w(l,g);return t?n?m():p=_.run():"post"===s?ci(_.run.bind(_),c&&c.suspense):_.run(),()=>{_.stop(),c&&c.scope&&Object(i["K"])(c.scope.effects,_)}}function Vt(e,t,n){const r=this.proxy,s=Object(i["D"])(e)?e.includes(".")?Bt(r,e):()=>r[e]:e.bind(r,r);let o;Object(i["p"])(t)?o=t:(o=t.handler,n=t);const a=or;cr(this);const c=Wt(s,o.bind(r),n);return a?cr(a):lr(),c}function Bt(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function zt(e,t){if(!Object(i["v"])(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),De(e))zt(e.value,t);else if(Object(i["o"])(e))for(let n=0;n<e.length;n++)zt(e[n],t);else if(Object(i["B"])(e)||Object(i["t"])(e))e.forEach(e=>{zt(e,t)});else if(Object(i["x"])(e))for(const n in e)zt(e[n],t);return e}function $t(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return gn(()=>{e.isMounted=!0}),bn(()=>{e.isUnmounting=!0}),e}const Gt=[Function,Array],Kt={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Gt,onEnter:Gt,onAfterEnter:Gt,onEnterCancelled:Gt,onBeforeLeave:Gt,onLeave:Gt,onAfterLeave:Gt,onLeaveCancelled:Gt,onBeforeAppear:Gt,onAppear:Gt,onAfterAppear:Gt,onAppearCancelled:Gt},setup(e,{slots:t}){const n=ar(),i=$t();let r;return()=>{const s=t.default&&tn(t.default(),!0);if(!s||!s.length)return;const o=je(e),{mode:a}=o;const c=s[0];if(i.isLeaving)return Xt(c);const l=Zt(c);if(!l)return Xt(c);const u=Qt(l,o,i,n);en(l,u);const h=n.subTree,d=h&&Zt(h);let f=!1;const{getTransitionKey:p}=l.type;if(p){const e=p();void 0===r?r=e:e!==r&&(r=e,f=!0)}if(d&&d.type!==Oi&&(!Ri(l,d)||f)){const e=Qt(d,o,i,n);if(en(d,e),"out-in"===a)return i.isLeaving=!0,e.afterLeave=()=>{i.isLeaving=!1,n.update()},Xt(c);"in-out"===a&&l.type!==Oi&&(e.delayLeave=(e,t,n)=>{const r=Jt(i,d);r[String(d.key)]=d,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=n})}return c}}},Yt=Kt;function Jt(e,t){const{leavingVNodes:n}=e;let i=n.get(t.type);return i||(i=Object.create(null),n.set(t.type,i)),i}function Qt(e,t,n,i){const{appear:r,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:p,onBeforeAppear:m,onAppear:g,onAfterAppear:_,onAppearCancelled:v}=t,b=String(e.key),y=Jt(n,e),w=(e,t)=>{e&&Ge(e,i,9,t)},O={mode:s,persisted:o,beforeEnter(t){let i=a;if(!n.isMounted){if(!r)return;i=m||a}t._leaveCb&&t._leaveCb(!0);const s=y[b];s&&Ri(e,s)&&s.el._leaveCb&&s.el._leaveCb(),w(i,[t])},enter(e){let t=c,i=l,s=u;if(!n.isMounted){if(!r)return;t=g||c,i=_||l,s=v||u}let o=!1;const a=e._enterCb=t=>{o||(o=!0,w(t?s:i,[e]),O.delayedLeave&&O.delayedLeave(),e._enterCb=void 0)};t?(t(e,a),t.length<=1&&a()):a()},leave(t,i){const r=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return i();w(h,[t]);let s=!1;const o=t._leaveCb=n=>{s||(s=!0,i(),w(n?p:f,[t]),t._leaveCb=void 0,y[r]===e&&delete y[r])};y[r]=e,d?(d(t,o),d.length<=1&&o()):o()},clone(e){return Qt(e,t,n,i)}};return O}function Xt(e){if(sn(e))return e=Wi(e),e.children=null,e}function Zt(e){return sn(e)?e.children?e.children[0]:void 0:e}function en(e,t){6&e.shapeFlag&&e.component?en(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function tn(e,t=!1){let n=[],i=0;for(let r=0;r<e.length;r++){const s=e[r];s.type===yi?(128&s.patchFlag&&i++,n=n.concat(tn(s.children,t))):(t||s.type!==Oi)&&n.push(s)}if(i>1)for(let r=0;r<n.length;r++)n[r].patchFlag=-2;return n}function nn(e){return Object(i["p"])(e)?{setup:e,name:e.name}:e}const rn=e=>!!e.type.__asyncLoader;const sn=e=>e.type.__isKeepAlive;RegExp,RegExp;function on(e,t){return Object(i["o"])(e)?e.some(e=>on(e,t)):Object(i["D"])(e)?e.split(",").indexOf(t)>-1:!!e.test&&e.test(t)}function an(e,t){ln(e,"a",t)}function cn(e,t){ln(e,"da",t)}function ln(e,t,n=or){const i=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(fn(t,i,n),n){let e=n.parent;while(e&&e.parent)sn(e.parent.vnode)&&un(i,t,n,e),e=e.parent}}function un(e,t,n,r){const s=fn(t,e,r,!0);yn(()=>{Object(i["K"])(r[t],s)},n)}function hn(e){let t=e.shapeFlag;256&t&&(t-=256),512&t&&(t-=512),e.shapeFlag=t}function dn(e){return 128&e.shapeFlag?e.ssContent:e}function fn(e,t,n=or,i=!1){if(n){const r=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;T(),cr(n);const r=Ge(t,n,e,i);return lr(),k(),r});return i?r.unshift(s):r.push(s),s}}const pn=e=>(t,n=or)=>(!fr||"sp"===e)&&fn(e,t,n),mn=pn("bm"),gn=pn("m"),_n=pn("bu"),vn=pn("u"),bn=pn("bum"),yn=pn("um"),wn=pn("sp"),On=pn("rtg"),Cn=pn("rtc");function En(e,t=or){fn("ec",e,t)}let Tn=!0;function In(e){const t=jn(e),n=e.proxy,r=e.ctx;Tn=!1,t.beforeCreate&&Sn(t.beforeCreate,e,"bc");const{data:s,computed:o,methods:a,watch:c,provide:l,inject:u,created:h,beforeMount:d,mounted:f,beforeUpdate:p,updated:m,activated:g,deactivated:_,beforeDestroy:v,beforeUnmount:b,destroyed:y,unmounted:w,render:O,renderTracked:C,renderTriggered:E,errorCaptured:T,serverPrefetch:I,expose:k,inheritAttrs:S,components:x,directives:j,filters:N}=t,A=null;if(u&&kn(u,r,A,e.appContext.config.unwrapInjectedRef),a)for(const R in a){const e=a[R];Object(i["p"])(e)&&(r[R]=e.bind(n))}if(s){0;const t=s.call(n,n);0,Object(i["v"])(t)&&(e.data=Ce(t))}if(Tn=!0,o)for(const R in o){const e=o[R],t=Object(i["p"])(e)?e.bind(n,n):Object(i["p"])(e.get)?e.get.bind(n,n):i["d"];0;const s=!Object(i["p"])(e)&&Object(i["p"])(e.set)?e.set.bind(n):i["d"],a=ze({get:t,set:s});Object.defineProperty(r,R,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e})}if(c)for(const i in c)xn(c[i],r,n,i);if(l){const e=Object(i["p"])(l)?l.call(n):l;Reflect.ownKeys(e).forEach(t=>{Ft(t,e[t])})}function P(e,t){Object(i["o"])(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(h&&Sn(h,e,"c"),P(mn,d),P(gn,f),P(_n,p),P(vn,m),P(an,g),P(cn,_),P(En,T),P(Cn,C),P(On,E),P(bn,b),P(yn,w),P(wn,I),Object(i["o"])(k))if(k.length){const t=e.exposed||(e.exposed={});k.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})})}else e.exposed||(e.exposed={});O&&e.render===i["d"]&&(e.render=O),null!=S&&(e.inheritAttrs=S),x&&(e.components=x),j&&(e.directives=j)}function kn(e,t,n=i["d"],r=!1){Object(i["o"])(e)&&(e=Ln(e));for(const s in e){const n=e[s];let o;o=Object(i["v"])(n)?"default"in n?Ut(n.from||s,n.default,!0):Ut(n.from||s):Ut(n),De(o)&&r?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:e=>o.value=e}):t[s]=o}}function Sn(e,t,n){Ge(Object(i["o"])(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function xn(e,t,n,r){const s=r.includes(".")?Bt(n,r):()=>n[r];if(Object(i["D"])(e)){const n=t[e];Object(i["p"])(n)&&Ht(s,n)}else if(Object(i["p"])(e))Ht(s,e.bind(n));else if(Object(i["v"])(e))if(Object(i["o"])(e))e.forEach(e=>xn(e,t,n,r));else{const r=Object(i["p"])(e.handler)?e.handler.bind(n):t[e.handler];Object(i["p"])(r)&&Ht(s,r,e)}else 0}function jn(e){const t=e.type,{mixins:n,extends:i}=t,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,a=s.get(t);let c;return a?c=a:r.length||n||i?(c={},r.length&&r.forEach(e=>Nn(c,e,o,!0)),Nn(c,t,o)):c=t,s.set(t,c),c}function Nn(e,t,n,i=!1){const{mixins:r,extends:s}=t;s&&Nn(e,s,n,!0),r&&r.forEach(t=>Nn(e,t,n,!0));for(const o in t)if(i&&"expose"===o);else{const i=An[o]||n&&n[o];e[o]=i?i(e[o],t[o]):t[o]}return e}const An={data:Pn,props:Mn,emits:Mn,methods:Mn,computed:Mn,beforeCreate:Dn,created:Dn,beforeMount:Dn,mounted:Dn,beforeUpdate:Dn,updated:Dn,beforeDestroy:Dn,beforeUnmount:Dn,destroyed:Dn,unmounted:Dn,activated:Dn,deactivated:Dn,errorCaptured:Dn,serverPrefetch:Dn,components:Mn,directives:Mn,watch:Fn,provide:Pn,inject:Rn};function Pn(e,t){return t?e?function(){return Object(i["h"])(Object(i["p"])(e)?e.call(this,this):e,Object(i["p"])(t)?t.call(this,this):t)}:t:e}function Rn(e,t){return Mn(Ln(e),Ln(t))}function Ln(e){if(Object(i["o"])(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Dn(e,t){return e?[...new Set([].concat(e,t))]:t}function Mn(e,t){return e?Object(i["h"])(Object(i["h"])(Object.create(null),e),t):t}function Fn(e,t){if(!e)return t;if(!t)return e;const n=Object(i["h"])(Object.create(null),e);for(const i in t)n[i]=Dn(e[i],t[i]);return n}function Un(e,t,n,r=!1){const s={},o={};Object(i["g"])(o,Li,1),e.propsDefaults=Object.create(null),Hn(e,t,s,o);for(const i in e.propsOptions[0])i in s||(s[i]=void 0);n?e.props=r?s:Ee(s):e.type.props?e.props=s:e.props=o,e.attrs=o}function qn(e,t,n,r){const{props:s,attrs:o,vnode:{patchFlag:a}}=e,c=je(s),[l]=e.propsOptions;let u=!1;if(!(r||a>0)||16&a){let r;Hn(e,t,s,o)&&(u=!0);for(const o in c)t&&(Object(i["k"])(t,o)||(r=Object(i["l"])(o))!==o&&Object(i["k"])(t,r))||(l?!n||void 0===n[o]&&void 0===n[r]||(s[o]=Wn(l,c,o,void 0,e,!0)):delete s[o]);if(o!==c)for(const e in o)t&&Object(i["k"])(t,e)||(delete o[e],u=!0)}else if(8&a){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let a=n[r];const h=t[a];if(l)if(Object(i["k"])(o,a))h!==o[a]&&(o[a]=h,u=!0);else{const t=Object(i["e"])(a);s[t]=Wn(l,c,t,h,e,!1)}else h!==o[a]&&(o[a]=h,u=!0)}}u&&N(e,"set","$attrs")}function Hn(e,t,n,r){const[s,o]=e.propsOptions;let a,c=!1;if(t)for(let l in t){if(Object(i["z"])(l))continue;const u=t[l];let h;s&&Object(i["k"])(s,h=Object(i["e"])(l))?o&&o.includes(h)?(a||(a={}))[h]=u:n[h]=u:Ct(e.emitsOptions,l)||l in r&&u===r[l]||(r[l]=u,c=!0)}if(o){const t=je(n),r=a||i["b"];for(let a=0;a<o.length;a++){const c=o[a];n[c]=Wn(s,t,c,r[c],e,!Object(i["k"])(r,c))}}return c}function Wn(e,t,n,r,s,o){const a=e[n];if(null!=a){const e=Object(i["k"])(a,"default");if(e&&void 0===r){const e=a.default;if(a.type!==Function&&Object(i["p"])(e)){const{propsDefaults:i}=s;n in i?r=i[n]:(cr(s),r=i[n]=e.call(null,t),lr())}else r=e}a[0]&&(o&&!e?r=!1:!a[1]||""!==r&&r!==Object(i["l"])(n)||(r=!0))}return r}function Vn(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const o=e.props,a={},c=[];let l=!1;if(!Object(i["p"])(e)){const r=e=>{l=!0;const[n,r]=Vn(e,t,!0);Object(i["h"])(a,n),r&&c.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!o&&!l)return r.set(e,i["a"]),i["a"];if(Object(i["o"])(o))for(let h=0;h<o.length;h++){0;const e=Object(i["e"])(o[h]);Bn(e)&&(a[e]=i["b"])}else if(o){0;for(const e in o){const t=Object(i["e"])(e);if(Bn(t)){const n=o[e],r=a[t]=Object(i["o"])(n)||Object(i["p"])(n)?{type:n}:n;if(r){const e=Gn(Boolean,r.type),n=Gn(String,r.type);r[0]=e>-1,r[1]=n<0||e<n,(e>-1||Object(i["k"])(r,"default"))&&c.push(t)}}}}const u=[a,c];return r.set(e,u),u}function Bn(e){return"$"!==e[0]}function zn(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function $n(e,t){return zn(e)===zn(t)}function Gn(e,t){return Object(i["o"])(t)?t.findIndex(t=>$n(t,e)):Object(i["p"])(t)&&$n(t,e)?0:-1}const Kn=e=>"_"===e[0]||"$stable"===e,Yn=e=>Object(i["o"])(e)?e.map($i):[$i(e)],Jn=(e,t,n)=>{const i=xt((...e)=>Yn(t(...e)),n);return i._c=!1,i},Qn=(e,t,n)=>{const r=e._ctx;for(const s in e){if(Kn(s))continue;const n=e[s];if(Object(i["p"])(n))t[s]=Jn(s,n,r);else if(null!=n){0;const e=Yn(n);t[s]=()=>e}}},Xn=(e,t)=>{const n=Yn(t);e.slots.default=()=>n},Zn=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=je(t),Object(i["g"])(t,"_",n)):Qn(t,e.slots={})}else e.slots={},t&&Xn(e,t);Object(i["g"])(e.slots,Li,1)},ei=(e,t,n)=>{const{vnode:r,slots:s}=e;let o=!0,a=i["b"];if(32&r.shapeFlag){const e=t._;e?n&&1===e?o=!1:(Object(i["h"])(s,t),n||1!==e||delete s._):(o=!t.$stable,Qn(t,s)),a=t}else t&&(Xn(e,t),a={default:1});if(o)for(const i in s)Kn(i)||i in a||delete s[i]};function ti(e,t){const n=Et;if(null===n)return e;const r=n.proxy,s=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[e,n,a,c=i["b"]]=t[o];Object(i["p"])(e)&&(e={mounted:e,updated:e}),e.deep&&zt(n),s.push({dir:e,instance:r,value:n,oldValue:void 0,arg:a,modifiers:c})}return e}function ni(e,t,n,i){const r=e.dirs,s=t&&t.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let c=a.dir[i];c&&(T(),Ge(c,n,8,[e.el,a,e,t]),k())}}function ii(){return{app:null,config:{isNativeTag:i["c"],performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ri=0;function si(e,t){return function(n,r=null){null==r||Object(i["v"])(r)||(r=null);const s=ii(),o=new Set;let a=!1;const c=s.app={_uid:ri++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:Tr,get config(){return s.config},set config(e){0},use(e,...t){return o.has(e)||(e&&Object(i["p"])(e.install)?(o.add(e),e.install(c,...t)):Object(i["p"])(e)&&(o.add(e),e(c,...t))),c},mixin(e){return s.mixins.includes(e)||s.mixins.push(e),c},component(e,t){return t?(s.components[e]=t,c):s.components[e]},directive(e,t){return t?(s.directives[e]=t,c):s.directives[e]},mount(i,o,l){if(!a){const u=Ui(n,r);return u.appContext=s,o&&t?t(u,i):e(u,i,l),a=!0,c._container=i,i.__vue_app__=c,yr(u.component)||u.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return s.provides[e]=t,c}};return c}}function oi(e,t,n,r,s=!1){if(Object(i["o"])(e))return void e.forEach((e,o)=>oi(e,t&&(Object(i["o"])(t)?t[o]:t),n,r,s));if(rn(r)&&!s)return;const o=4&r.shapeFlag?yr(r.component)||r.component.proxy:r.el,a=s?null:o,{i:c,r:l}=e;const u=t&&t.r,h=c.refs===i["b"]?c.refs={}:c.refs,d=c.setupState;if(null!=u&&u!==l&&(Object(i["D"])(u)?(h[u]=null,Object(i["k"])(d,u)&&(d[u]=null)):De(u)&&(u.value=null)),Object(i["p"])(l))$e(l,c,12,[a,h]);else{const t=Object(i["D"])(l),r=De(l);if(t||r){const r=()=>{if(e.f){const n=t?h[l]:l.value;s?Object(i["o"])(n)&&Object(i["K"])(n,o):Object(i["o"])(n)?n.includes(o)||n.push(o):t?h[l]=[o]:(l.value=[o],e.k&&(h[e.k]=l.value))}else t?(h[l]=a,Object(i["k"])(d,l)&&(d[l]=a)):De(l)&&(l.value=a,e.k&&(h[e.k]=a))};a?(r.id=-1,ci(r,n)):r()}else 0}}function ai(){}const ci=Mt;function li(e){return ui(e)}function ui(e,t){ai();const n=Object(i["i"])();n.__VUE__=!0;const{insert:r,remove:s,patchProp:o,createElement:a,createText:c,createComment:l,setText:u,setElementText:h,parentNode:d,nextSibling:f,setScopeId:p=i["d"],cloneNode:m,insertStaticContent:g}=e,_=(e,t,n,i=null,r=null,s=null,o=!1,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Ri(e,t)&&(i=K(e),V(e,r,s,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:l,ref:u,shapeFlag:h}=t;switch(l){case wi:v(e,t,n,i);break;case Oi:b(e,t,n,i);break;case Ci:null==e&&y(t,n,i,o);break;case yi:P(e,t,n,i,r,s,o,a,c);break;default:1&h?E(e,t,n,i,r,s,o,a,c):6&h?R(e,t,n,i,r,s,o,a,c):(64&h||128&h)&&l.process(e,t,n,i,r,s,o,a,c,J)}null!=u&&r&&oi(u,e&&e.ref,s,t||e,!t)},v=(e,t,n,i)=>{if(null==e)r(t.el=c(t.children),n,i);else{const n=t.el=e.el;t.children!==e.children&&u(n,t.children)}},b=(e,t,n,i)=>{null==e?r(t.el=l(t.children||""),n,i):t.el=e.el},y=(e,t,n,i)=>{[e.el,e.anchor]=g(e.children,t,n,i,e.el,e.anchor)},O=({el:e,anchor:t},n,i)=>{let s;while(e&&e!==t)s=f(e),r(e,n,i),e=s;r(t,n,i)},C=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=f(e),s(e),e=n;s(t)},E=(e,t,n,i,r,s,o,a,c)=>{o=o||"svg"===t.type,null==e?I(t,n,i,r,s,o,a,c):j(e,t,r,s,o,a,c)},I=(e,t,n,s,c,l,u,d)=>{let f,p;const{type:g,props:_,shapeFlag:v,transition:b,patchFlag:y,dirs:w}=e;if(e.el&&void 0!==m&&-1===y)f=e.el=m(e.el);else{if(f=e.el=a(e.type,l,_&&_.is,_),8&v?h(f,e.children):16&v&&x(e.children,f,null,s,c,l&&"foreignObject"!==g,u,d),w&&ni(e,null,s,"created"),_){for(const t in _)"value"===t||Object(i["z"])(t)||o(f,t,null,_[t],l,e.children,s,c,G);"value"in _&&o(f,"value",null,_.value),(p=_.onVnodeBeforeMount)&&Ji(p,s,e)}S(f,e,e.scopeId,u,s)}w&&ni(e,null,s,"beforeMount");const O=(!c||c&&!c.pendingBranch)&&b&&!b.persisted;O&&b.beforeEnter(f),r(f,t,n),((p=_&&_.onVnodeMounted)||O||w)&&ci(()=>{p&&Ji(p,s,e),O&&b.enter(f),w&&ni(e,null,s,"mounted")},c)},S=(e,t,n,i,r)=>{if(n&&p(e,n),i)for(let s=0;s<i.length;s++)p(e,i[s]);if(r){let n=r.subTree;if(t===n){const t=r.vnode;S(e,t,t.scopeId,t.slotScopeIds,r.parent)}}},x=(e,t,n,i,r,s,o,a,c=0)=>{for(let l=c;l<e.length;l++){const c=e[l]=a?Gi(e[l]):$i(e[l]);_(null,c,t,n,i,r,s,o,a)}},j=(e,t,n,r,s,a,c)=>{const l=t.el=e.el;let{patchFlag:u,dynamicChildren:d,dirs:f}=t;u|=16&e.patchFlag;const p=e.props||i["b"],m=t.props||i["b"];let g;n&&hi(n,!1),(g=m.onVnodeBeforeUpdate)&&Ji(g,n,t,e),f&&ni(t,e,n,"beforeUpdate"),n&&hi(n,!0);const _=s&&"foreignObject"!==t.type;if(d?N(e.dynamicChildren,d,l,n,r,_,a):c||U(e,t,l,null,n,r,_,a,!1),u>0){if(16&u)A(l,t,p,m,n,r,s);else if(2&u&&p.class!==m.class&&o(l,"class",null,m.class,s),4&u&&o(l,"style",p.style,m.style,s),8&u){const i=t.dynamicProps;for(let t=0;t<i.length;t++){const a=i[t],c=p[a],u=m[a];u===c&&"value"!==a||o(l,a,c,u,s,e.children,n,r,G)}}1&u&&e.children!==t.children&&h(l,t.children)}else c||null!=d||A(l,t,p,m,n,r,s);((g=m.onVnodeUpdated)||f)&&ci(()=>{g&&Ji(g,n,t,e),f&&ni(t,e,n,"updated")},r)},N=(e,t,n,i,r,s,o)=>{for(let a=0;a<t.length;a++){const c=e[a],l=t[a],u=c.el&&(c.type===yi||!Ri(c,l)||70&c.shapeFlag)?d(c.el):n;_(c,l,u,null,i,r,s,o,!0)}},A=(e,t,n,r,s,a,c)=>{if(n!==r){for(const l in r){if(Object(i["z"])(l))continue;const u=r[l],h=n[l];u!==h&&"value"!==l&&o(e,l,h,u,c,t.children,s,a,G)}if(n!==i["b"])for(const l in n)Object(i["z"])(l)||l in r||o(e,l,n[l],null,c,t.children,s,a,G);"value"in r&&o(e,"value",n.value,r.value)}},P=(e,t,n,i,s,o,a,l,u)=>{const h=t.el=e?e.el:c(""),d=t.anchor=e?e.anchor:c("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:m}=t;m&&(l=l?l.concat(m):m),null==e?(r(h,n,i),r(d,n,i),x(t.children,n,d,s,o,a,l,u)):f>0&&64&f&&p&&e.dynamicChildren?(N(e.dynamicChildren,p,n,s,o,a,l),(null!=t.key||s&&t===s.subTree)&&di(e,t,!0)):U(e,t,n,d,s,o,a,l,u)},R=(e,t,n,i,r,s,o,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?r.ctx.activate(t,n,i,o,c):L(t,n,i,r,s,o,c):D(e,t,c)},L=(e,t,n,i,r,s,o)=>{const a=e.component=sr(e,i,r);if(sn(e)&&(a.ctx.renderer=J),pr(a),a.asyncDep){if(r&&r.registerDep(a,M),!e.el){const e=a.subTree=Ui(Oi);b(null,e,t,n)}}else M(a,e,t,n,r,s,o)},D=(e,t,n)=>{const i=t.component=e.component;if(Pt(e,t,n)){if(i.asyncDep&&!i.asyncResolved)return void F(i,t,n);i.next=t,ft(i.update),i.update()}else t.component=e.component,t.el=e.el,i.vnode=t},M=(e,t,n,r,s,o,a)=>{const c=()=>{if(e.isMounted){let t,{next:n,bu:r,u:c,parent:l,vnode:u}=e,h=n;0,hi(e,!1),n?(n.el=u.el,F(e,n,a)):n=u,r&&Object(i["n"])(r),(t=n.props&&n.props.onVnodeBeforeUpdate)&&Ji(t,l,n,u),hi(e,!0);const f=jt(e);0;const p=e.subTree;e.subTree=f,_(p,f,d(p.el),K(p),e,s,o),n.el=f.el,null===h&&Lt(e,f.el),c&&ci(c,s),(t=n.props&&n.props.onVnodeUpdated)&&ci(()=>Ji(t,l,n,u),s)}else{let a;const{el:c,props:l}=t,{bm:u,m:h,parent:d}=e,f=rn(t);if(hi(e,!1),u&&Object(i["n"])(u),!f&&(a=l&&l.onVnodeBeforeMount)&&Ji(a,d,t),hi(e,!0),c&&X){const n=()=>{e.subTree=jt(e),X(c,e.subTree,e,s,null)};f?t.type.__asyncLoader().then(()=>!e.isUnmounted&&n()):n()}else{0;const i=e.subTree=jt(e);0,_(null,i,n,r,e,s,o),t.el=i.el}if(h&&ci(h,s),!f&&(a=l&&l.onVnodeMounted)){const e=t;ci(()=>Ji(a,d,e),s)}256&t.shapeFlag&&e.a&&ci(e.a,s),e.isMounted=!0,t=n=r=null}},l=e.effect=new w(c,()=>ht(e.update),e.scope),u=e.update=l.run.bind(l);u.id=e.uid,hi(e,!0),u()},F=(e,t,n)=>{t.component=e;const i=e.vnode.props;e.vnode=t,e.next=null,qn(e,t.props,i,n),ei(e,t.children,n),T(),_t(void 0,e.update),k()},U=(e,t,n,i,r,s,o,a,c=!1)=>{const l=e&&e.children,u=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void H(l,d,n,i,r,s,o,a,c);if(256&f)return void q(l,d,n,i,r,s,o,a,c)}8&p?(16&u&&G(l,r,s),d!==l&&h(n,d)):16&u?16&p?H(l,d,n,i,r,s,o,a,c):G(l,r,s,!0):(8&u&&h(n,""),16&p&&x(d,n,i,r,s,o,a,c))},q=(e,t,n,r,s,o,a,c,l)=>{e=e||i["a"],t=t||i["a"];const u=e.length,h=t.length,d=Math.min(u,h);let f;for(f=0;f<d;f++){const i=t[f]=l?Gi(t[f]):$i(t[f]);_(e[f],i,n,null,s,o,a,c,l)}u>h?G(e,s,o,!0,!1,d):x(t,n,r,s,o,a,c,l,d)},H=(e,t,n,r,s,o,a,c,l)=>{let u=0;const h=t.length;let d=e.length-1,f=h-1;while(u<=d&&u<=f){const i=e[u],r=t[u]=l?Gi(t[u]):$i(t[u]);if(!Ri(i,r))break;_(i,r,n,null,s,o,a,c,l),u++}while(u<=d&&u<=f){const i=e[d],r=t[f]=l?Gi(t[f]):$i(t[f]);if(!Ri(i,r))break;_(i,r,n,null,s,o,a,c,l),d--,f--}if(u>d){if(u<=f){const e=f+1,i=e<h?t[e].el:r;while(u<=f)_(null,t[u]=l?Gi(t[u]):$i(t[u]),n,i,s,o,a,c,l),u++}}else if(u>f)while(u<=d)V(e[u],s,o,!0),u++;else{const p=u,m=u,g=new Map;for(u=m;u<=f;u++){const e=t[u]=l?Gi(t[u]):$i(t[u]);null!=e.key&&g.set(e.key,u)}let v,b=0;const y=f-m+1;let w=!1,O=0;const C=new Array(y);for(u=0;u<y;u++)C[u]=0;for(u=p;u<=d;u++){const i=e[u];if(b>=y){V(i,s,o,!0);continue}let r;if(null!=i.key)r=g.get(i.key);else for(v=m;v<=f;v++)if(0===C[v-m]&&Ri(i,t[v])){r=v;break}void 0===r?V(i,s,o,!0):(C[r-m]=u+1,r>=O?O=r:w=!0,_(i,t[r],n,null,s,o,a,c,l),b++)}const E=w?fi(C):i["a"];for(v=E.length-1,u=y-1;u>=0;u--){const e=m+u,i=t[e],d=e+1<h?t[e+1].el:r;0===C[u]?_(null,i,n,d,s,o,a,c,l):w&&(v<0||u!==E[v]?W(i,n,d,2):v--)}}},W=(e,t,n,i,s=null)=>{const{el:o,type:a,transition:c,children:l,shapeFlag:u}=e;if(6&u)return void W(e.component.subTree,t,n,i);if(128&u)return void e.suspense.move(t,n,i);if(64&u)return void a.move(e,t,n,J);if(a===yi){r(o,t,n);for(let e=0;e<l.length;e++)W(l[e],t,n,i);return void r(e.anchor,t,n)}if(a===Ci)return void O(e,t,n);const h=2!==i&&1&u&&c;if(h)if(0===i)c.beforeEnter(o),r(o,t,n),ci(()=>c.enter(o),s);else{const{leave:e,delayLeave:i,afterLeave:s}=c,a=()=>r(o,t,n),l=()=>{e(o,()=>{a(),s&&s()})};i?i(o,a,l):l()}else r(o,t,n)},V=(e,t,n,i=!1,r=!1)=>{const{type:s,props:o,ref:a,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:h,dirs:d}=e;if(null!=a&&oi(a,null,n,e,!0),256&u)return void t.ctx.deactivate(e);const f=1&u&&d,p=!rn(e);let m;if(p&&(m=o&&o.onVnodeBeforeUnmount)&&Ji(m,t,e),6&u)$(e.component,n,i);else{if(128&u)return void e.suspense.unmount(n,i);f&&ni(e,null,t,"beforeUnmount"),64&u?e.type.remove(e,t,n,r,J,i):l&&(s!==yi||h>0&&64&h)?G(l,t,n,!1,!0):(s===yi&&384&h||!r&&16&u)&&G(c,t,n),i&&B(e)}(p&&(m=o&&o.onVnodeUnmounted)||f)&&ci(()=>{m&&Ji(m,t,e),f&&ni(e,null,t,"unmounted")},n)},B=e=>{const{type:t,el:n,anchor:i,transition:r}=e;if(t===yi)return void z(n,i);if(t===Ci)return void C(e);const o=()=>{s(n),r&&!r.persisted&&r.afterLeave&&r.afterLeave()};if(1&e.shapeFlag&&r&&!r.persisted){const{leave:t,delayLeave:i}=r,s=()=>t(n,o);i?i(e.el,o,s):s()}else o()},z=(e,t)=>{let n;while(e!==t)n=f(e),s(e),e=n;s(t)},$=(e,t,n)=>{const{bum:r,scope:s,update:o,subTree:a,um:c}=e;r&&Object(i["n"])(r),s.stop(),o&&(o.active=!1,V(a,e,t,n)),c&&ci(c,t),ci(()=>{e.isUnmounted=!0},t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},G=(e,t,n,i=!1,r=!1,s=0)=>{for(let o=s;o<e.length;o++)V(e[o],t,n,i,r)},K=e=>6&e.shapeFlag?K(e.component.subTree):128&e.shapeFlag?e.suspense.next():f(e.anchor||e.el),Y=(e,t,n)=>{null==e?t._vnode&&V(t._vnode,null,null,!0):_(t._vnode||null,e,t,null,null,null,n),vt(),t._vnode=e},J={p:_,um:V,m:W,r:B,mt:L,mc:x,pc:U,pbc:N,n:K,o:e};let Q,X;return t&&([Q,X]=t(J)),{render:Y,hydrate:Q,createApp:si(Y,Q)}}function hi({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function di(e,t,n=!1){const r=e.children,s=t.children;if(Object(i["o"])(r)&&Object(i["o"])(s))for(let i=0;i<r.length;i++){const e=r[i];let t=s[i];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=s[i]=Gi(s[i]),t.el=e.el),n||di(e,t))}}function fi(e){const t=e.slice(),n=[0];let i,r,s,o,a;const c=e.length;for(i=0;i<c;i++){const c=e[i];if(0!==c){if(r=n[n.length-1],e[r]<c){t[i]=r,n.push(i);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,e[n[a]]<c?s=a+1:o=a;c<e[n[s]]&&(s>0&&(t[i]=n[s-1]),n[s]=i)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=t[o];return n}const pi=e=>e.__isTeleport;const mi="components";function gi(e,t){return vi(mi,e,!0,t)||e}const _i=Symbol();function vi(e,t,n=!0,r=!1){const s=Et||or;if(s){const n=s.type;if(e===mi){const e=wr(n);if(e&&(e===t||e===Object(i["e"])(t)||e===Object(i["f"])(Object(i["e"])(t))))return n}const o=bi(s[e]||n[e],t)||bi(s.appContext[e],t);return!o&&r?n:o}}function bi(e,t){return e&&(e[t]||e[Object(i["e"])(t)]||e[Object(i["f"])(Object(i["e"])(t))])}const yi=Symbol(void 0),wi=Symbol(void 0),Oi=Symbol(void 0),Ci=Symbol(void 0),Ei=[];let Ti=null;function Ii(e=!1){Ei.push(Ti=e?null:[])}function ki(){Ei.pop(),Ti=Ei[Ei.length-1]||null}let Si=1;function xi(e){Si+=e}function ji(e){return e.dynamicChildren=Si>0?Ti||i["a"]:null,ki(),Si>0&&Ti&&Ti.push(e),e}function Ni(e,t,n,i,r,s){return ji(Fi(e,t,n,i,r,s,!0))}function Ai(e,t,n,i,r){return ji(Ui(e,t,n,i,r,!0))}function Pi(e){return!!e&&!0===e.__v_isVNode}function Ri(e,t){return e.type===t.type&&e.key===t.key}const Li="__vInternal",Di=({key:e})=>null!=e?e:null,Mi=({ref:e,ref_key:t,ref_for:n})=>null!=e?Object(i["D"])(e)||De(e)||Object(i["p"])(e)?{i:Et,r:e,k:t,f:!!n}:e:null;function Fi(e,t=null,n=null,r=0,s=null,o=(e===yi?0:1),a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Di(t),ref:t&&Mi(t),scopeId:Tt,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return c?(Ki(l,n),128&o&&e.normalize(l)):n&&(l.shapeFlag|=Object(i["D"])(n)?8:16),Si>0&&!a&&Ti&&(l.patchFlag>0||6&o)&&32!==l.patchFlag&&Ti.push(l),l}const Ui=qi;function qi(e,t=null,n=null,r=0,s=null,o=!1){if(e&&e!==_i||(e=Oi),Pi(e)){const i=Wi(e,t,!0);return n&&Ki(i,n),i}if(Or(e)&&(e=e.__vccOpts),t){t=Hi(t);let{class:e,style:n}=t;e&&!Object(i["D"])(e)&&(t.class=Object(i["I"])(e)),Object(i["v"])(n)&&(xe(n)&&!Object(i["o"])(n)&&(n=Object(i["h"])({},n)),t.style=Object(i["J"])(n))}const a=Object(i["D"])(e)?1:Dt(e)?128:pi(e)?64:Object(i["v"])(e)?4:Object(i["p"])(e)?2:0;return Fi(e,t,n,r,s,a,o,!0)}function Hi(e){return e?xe(e)||Li in e?Object(i["h"])({},e):e:null}function Wi(e,t,n=!1){const{props:r,ref:s,patchFlag:o,children:a}=e,c=t?Yi(r||{},t):r,l={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Di(c),ref:t&&t.ref?n&&s?Object(i["o"])(s)?s.concat(Mi(t)):[s,Mi(t)]:Mi(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==yi?-1===o?16:16|o:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Wi(e.ssContent),ssFallback:e.ssFallback&&Wi(e.ssFallback),el:e.el,anchor:e.anchor};return l}function Vi(e=" ",t=0){return Ui(wi,null,e,t)}function Bi(e,t){const n=Ui(Ci,null,e);return n.staticCount=t,n}function zi(e="",t=!1){return t?(Ii(),Ai(Oi,null,e)):Ui(Oi,null,e)}function $i(e){return null==e||"boolean"===typeof e?Ui(Oi):Object(i["o"])(e)?Ui(yi,null,e.slice()):"object"===typeof e?Gi(e):Ui(wi,null,String(e))}function Gi(e){return null===e.el||e.memo?e:Wi(e)}function Ki(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if(Object(i["o"])(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),Ki(e,n()),n._c&&(n._d=!0)))}{n=32;const i=t._;i||Li in t?3===i&&Et&&(1===Et.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=Et}}else Object(i["p"])(t)?(t={default:t,_ctx:Et},n=32):(t=String(t),64&r?(n=16,t=[Vi(t)]):n=8);e.children=t,e.shapeFlag|=n}function Yi(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=Object(i["I"])([t.class,r.class]));else if("style"===e)t.style=Object(i["J"])([t.style,r.style]);else if(Object(i["w"])(e)){const n=t[e],s=r[e];n===s||Object(i["o"])(n)&&n.includes(s)||(t[e]=n?[].concat(n,s):s)}else""!==e&&(t[e]=r[e])}return t}function Ji(e,t,n,i=null){Ge(e,t,7,[n,i])}function Qi(e,t,n,r){let s;const o=n&&n[r];if(Object(i["o"])(e)||Object(i["D"])(e)){s=new Array(e.length);for(let n=0,i=e.length;n<i;n++)s[n]=t(e[n],n,void 0,o&&o[n])}else if("number"===typeof e){0,s=new Array(e);for(let n=0;n<e;n++)s[n]=t(n+1,n,void 0,o&&o[n])}else if(Object(i["v"])(e))if(e[Symbol.iterator])s=Array.from(e,(e,n)=>t(e,n,void 0,o&&o[n]));else{const n=Object.keys(e);s=new Array(n.length);for(let i=0,r=n.length;i<r;i++){const r=n[i];s[i]=t(e[r],r,i,o&&o[i])}}else s=[];return n&&(n[r]=s),s}function Xi(e,t,n={},i,r){if(Et.isCE)return Ui("slot","default"===t?null:{name:t},i&&i());let s=e[t];s&&s._c&&(s._d=!1),Ii();const o=s&&Zi(s(n)),a=Ai(yi,{key:n.key||"_"+t},o||(i?i():[]),o&&1===e._?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function Zi(e){return e.some(e=>!Pi(e)||e.type!==Oi&&!(e.type===yi&&!Zi(e.children)))?e:null}const er=e=>e?ur(e)?yr(e)||e.proxy:er(e.parent):null,tr=Object(i["h"])(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>er(e.parent),$root:e=>er(e.root),$emit:e=>e.emit,$options:e=>jn(e),$forceUpdate:e=>()=>ht(e.update),$nextTick:e=>lt.bind(e.proxy),$watch:e=>Vt.bind(e)}),nr={get({_:e},t){const{ctx:n,setupState:r,data:s,props:o,accessCache:a,type:c,appContext:l}=e;let u;if("$"!==t[0]){const c=a[t];if(void 0!==c)switch(c){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return o[t]}else{if(r!==i["b"]&&Object(i["k"])(r,t))return a[t]=1,r[t];if(s!==i["b"]&&Object(i["k"])(s,t))return a[t]=2,s[t];if((u=e.propsOptions[0])&&Object(i["k"])(u,t))return a[t]=3,o[t];if(n!==i["b"]&&Object(i["k"])(n,t))return a[t]=4,n[t];Tn&&(a[t]=0)}}const h=tr[t];let d,f;return h?("$attrs"===t&&S(e,"get",t),h(e)):(d=c.__cssModules)&&(d=d[t])?d:n!==i["b"]&&Object(i["k"])(n,t)?(a[t]=4,n[t]):(f=l.config.globalProperties,Object(i["k"])(f,t)?f[t]:void 0)},set({_:e},t,n){const{data:r,setupState:s,ctx:o}=e;if(s!==i["b"]&&Object(i["k"])(s,t))s[t]=n;else if(r!==i["b"]&&Object(i["k"])(r,t))r[t]=n;else if(Object(i["k"])(e.props,t))return!1;return("$"!==t[0]||!(t.slice(1)in e))&&(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:o}},a){let c;return!!n[a]||e!==i["b"]&&Object(i["k"])(e,a)||t!==i["b"]&&Object(i["k"])(t,a)||(c=o[0])&&Object(i["k"])(c,a)||Object(i["k"])(r,a)||Object(i["k"])(tr,a)||Object(i["k"])(s.config.globalProperties,a)}};const ir=ii();let rr=0;function sr(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||ir,a={uid:rr++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new o(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Vn(r,s),emitsOptions:Ot(r,s),emit:null,emitted:null,propsDefaults:i["b"],inheritAttrs:r.inheritAttrs,ctx:i["b"],data:i["b"],props:i["b"],attrs:i["b"],slots:i["b"],refs:i["b"],setupState:i["b"],setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=wt.bind(null,a),e.ce&&e.ce(a),a}let or=null;const ar=()=>or||Et,cr=e=>{or=e,e.scope.on()},lr=()=>{or&&or.scope.off(),or=null};function ur(e){return 4&e.vnode.shapeFlag}let hr,dr,fr=!1;function pr(e,t=!1){fr=t;const{props:n,children:i}=e.vnode,r=ur(e);Un(e,n,r,t),Zn(e,i);const s=r?mr(e,t):void 0;return fr=!1,s}function mr(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Ne(new Proxy(e.ctx,nr));const{setup:r}=n;if(r){const n=e.setupContext=r.length>1?br(e):null;cr(e),T();const s=$e(r,e,0,[e.props,n]);if(k(),lr(),Object(i["y"])(s)){if(s.then(lr,lr),t)return s.then(n=>{gr(e,n,t)}).catch(t=>{Ke(t,e,0)});e.asyncDep=s}else gr(e,s,t)}else _r(e,t)}function gr(e,t,n){Object(i["p"])(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Object(i["v"])(t)&&(e.setupState=Ve(t)),_r(e,n)}function _r(e,t,n){const r=e.type;if(!e.render){if(!t&&hr&&!r.render){const t=r.template;if(t){0;const{isCustomElement:n,compilerOptions:s}=e.appContext.config,{delimiters:o,compilerOptions:a}=r,c=Object(i["h"])(Object(i["h"])({isCustomElement:n,delimiters:o},s),a);r.render=hr(t,c)}}e.render=r.render||i["d"],dr&&dr(e)}cr(e),T(),In(e),k(),lr()}function vr(e){return new Proxy(e.attrs,{get(t,n){return S(e,"get","$attrs"),t[n]}})}function br(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=vr(e))},slots:e.slots,emit:e.emit,expose:t}}function yr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Ve(Ne(e.exposed)),{get(t,n){return n in t?t[n]:n in tr?tr[n](e):void 0}}))}function wr(e){return Object(i["p"])(e)&&e.displayName||e.name}function Or(e){return Object(i["p"])(e)&&"__vccOpts"in e}const Cr=(e,t)=>ze(e,t,fr);function Er(e,t,n){const r=arguments.length;return 2===r?Object(i["v"])(t)&&!Object(i["o"])(t)?Pi(t)?Ui(e,null,[t]):Ui(e,t):Ui(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&Pi(n)&&(n=[n]),Ui(e,t,n))}Symbol("");const Tr="3.2.27",Ir="http://www.w3.org/2000/svg",kr="undefined"!==typeof document?document:null,Sr=kr&&kr.createElement("template"),xr={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,i)=>{const r=t?kr.createElementNS(Ir,e):kr.createElement(e,n?{is:n}:void 0);return"select"===e&&i&&null!=i.multiple&&r.setAttribute("multiple",i.multiple),r},createText:e=>kr.createTextNode(e),createComment:e=>kr.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>kr.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,i,r,s){const o=n?n.previousSibling:t.lastChild;if(r&&s){while(1)if(t.insertBefore(r.cloneNode(!0),n),r===s||!(r=r.nextSibling))break}else{Sr.innerHTML=i?`<svg>${e}</svg>`:e;const r=Sr.content;if(i){const e=r.firstChild;while(e.firstChild)r.appendChild(e.firstChild);r.removeChild(e)}t.insertBefore(r,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function jr(e,t,n){const i=e._vtc;i&&(t=(t?[t,...i]:[...i]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Nr(e,t,n){const r=e.style,s=Object(i["D"])(n);if(n&&!s){for(const e in n)Pr(r,e,n[e]);if(t&&!Object(i["D"])(t))for(const e in t)null==n[e]&&Pr(r,e,"")}else{const i=r.display;s?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Ar=/\s*!important$/;function Pr(e,t,n){if(Object(i["o"])(n))n.forEach(n=>Pr(e,t,n));else if(t.startsWith("--"))e.setProperty(t,n);else{const r=Dr(e,t);Ar.test(n)?e.setProperty(Object(i["l"])(r),n.replace(Ar,""),"important"):e[r]=n}}const Rr=["Webkit","Moz","ms"],Lr={};function Dr(e,t){const n=Lr[t];if(n)return n;let r=Object(i["e"])(t);if("filter"!==r&&r in e)return Lr[t]=r;r=Object(i["f"])(r);for(let i=0;i<Rr.length;i++){const n=Rr[i]+r;if(n in e)return Lr[t]=n}return t}const Mr="http://www.w3.org/1999/xlink";function Fr(e,t,n,r,s){if(r&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(Mr,t.slice(6,t.length)):e.setAttributeNS(Mr,t,n);else{const r=Object(i["C"])(t);null==n||r&&!Object(i["m"])(n)?e.removeAttribute(t):e.setAttribute(t,r?"":n)}}function Ur(e,t,n,r,s,o,a){if("innerHTML"===t||"textContent"===t)return r&&a(r,s,o),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName&&!e.tagName.includes("-")){e._value=n;const i=null==n?"":n;return e.value===i&&"OPTION"!==e.tagName||(e.value=i),void(null==n&&e.removeAttribute(t))}if(""===n||null==n){const r=typeof e[t];if("boolean"===r)return void(e[t]=Object(i["m"])(n));if(null==n&&"string"===r)return e[t]="",void e.removeAttribute(t);if("number"===r){try{e[t]=0}catch(c){}return void e.removeAttribute(t)}}try{e[t]=n}catch(l){0}}let qr=Date.now,Hr=!1;if("undefined"!==typeof window){qr()>document.createEvent("Event").timeStamp&&(qr=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);Hr=!!(e&&Number(e[1])<=53)}let Wr=0;const Vr=Promise.resolve(),Br=()=>{Wr=0},zr=()=>Wr||(Vr.then(Br),Wr=qr());function $r(e,t,n,i){e.addEventListener(t,n,i)}function Gr(e,t,n,i){e.removeEventListener(t,n,i)}function Kr(e,t,n,i,r=null){const s=e._vei||(e._vei={}),o=s[t];if(i&&o)o.value=i;else{const[n,a]=Jr(t);if(i){const o=s[t]=Qr(i,r);$r(e,n,o,a)}else o&&(Gr(e,n,o,a),s[t]=void 0)}}const Yr=/(?:Once|Passive|Capture)$/;function Jr(e){let t;if(Yr.test(e)){let n;t={};while(n=e.match(Yr))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[Object(i["l"])(e.slice(2)),t]}function Qr(e,t){const n=e=>{const i=e.timeStamp||qr();(Hr||i>=n.attached-1)&&Ge(Xr(e,n.value),t,5,[e])};return n.value=e,n.attached=zr(),n}function Xr(e,t){if(Object(i["o"])(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(e=>t=>!t._stopped&&e(t))}return t}const Zr=/^on[a-z]/,es=(e,t,n,r,s=!1,o,a,c,l)=>{"class"===t?jr(e,r,s):"style"===t?Nr(e,n,r):Object(i["w"])(t)?Object(i["u"])(t)||Kr(e,t,n,r,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):ts(e,t,r,s))?Ur(e,t,r,o,a,c,l):("true-value"===t?e._trueValue=r:"false-value"===t&&(e._falseValue=r),Fr(e,t,r,s))};function ts(e,t,n,r){return r?"innerHTML"===t||"textContent"===t||!!(t in e&&Zr.test(t)&&Object(i["p"])(n)):"spellcheck"!==t&&"draggable"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!Zr.test(t)||!Object(i["D"])(n))&&t in e))))}"undefined"!==typeof HTMLElement&&HTMLElement;const ns="transition",is="animation",rs=(e,{slots:t})=>Er(Yt,cs(e),t);rs.displayName="Transition";const ss={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},os=(rs.props=Object(i["h"])({},Yt.props,ss),(e,t=[])=>{Object(i["o"])(e)?e.forEach(e=>e(...t)):e&&e(...t)}),as=e=>!!e&&(Object(i["o"])(e)?e.some(e=>e.length>1):e.length>1);function cs(e){const t={};for(const i in e)i in ss||(t[i]=e[i]);if(!1===e.css)return t;const{name:n="v",type:r,duration:s,enterFromClass:o=n+"-enter-from",enterActiveClass:a=n+"-enter-active",enterToClass:c=n+"-enter-to",appearFromClass:l=o,appearActiveClass:u=a,appearToClass:h=c,leaveFromClass:d=n+"-leave-from",leaveActiveClass:f=n+"-leave-active",leaveToClass:p=n+"-leave-to"}=e,m=ls(s),g=m&&m[0],_=m&&m[1],{onBeforeEnter:v,onEnter:b,onEnterCancelled:y,onLeave:w,onLeaveCancelled:O,onBeforeAppear:C=v,onAppear:E=b,onAppearCancelled:T=y}=t,I=(e,t,n)=>{ds(e,t?h:c),ds(e,t?u:a),n&&n()},k=(e,t)=>{ds(e,p),ds(e,f),t&&t()},S=e=>(t,n)=>{const i=e?E:b,s=()=>I(t,e,n);os(i,[t,s]),fs(()=>{ds(t,e?l:o),hs(t,e?h:c),as(i)||ms(t,r,g,s)})};return Object(i["h"])(t,{onBeforeEnter(e){os(v,[e]),hs(e,o),hs(e,a)},onBeforeAppear(e){os(C,[e]),hs(e,l),hs(e,u)},onEnter:S(!1),onAppear:S(!0),onLeave(e,t){const n=()=>k(e,t);hs(e,d),bs(),hs(e,f),fs(()=>{ds(e,d),hs(e,p),as(w)||ms(e,r,_,n)}),os(w,[e,n])},onEnterCancelled(e){I(e,!1),os(y,[e])},onAppearCancelled(e){I(e,!0),os(T,[e])},onLeaveCancelled(e){k(e),os(O,[e])}})}function ls(e){if(null==e)return null;if(Object(i["v"])(e))return[us(e.enter),us(e.leave)];{const t=us(e);return[t,t]}}function us(e){const t=Object(i["N"])(e);return t}function hs(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e._vtc||(e._vtc=new Set)).add(t)}function ds(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.remove(t));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function fs(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let ps=0;function ms(e,t,n,i){const r=e._endId=++ps,s=()=>{r===e._endId&&i()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=gs(e,t);if(!o)return i();const l=o+"end";let u=0;const h=()=>{e.removeEventListener(l,d),s()},d=t=>{t.target===e&&++u>=c&&h()};setTimeout(()=>{u<c&&h()},a+1),e.addEventListener(l,d)}function gs(e,t){const n=window.getComputedStyle(e),i=e=>(n[e]||"").split(", "),r=i(ns+"Delay"),s=i(ns+"Duration"),o=_s(r,s),a=i(is+"Delay"),c=i(is+"Duration"),l=_s(a,c);let u=null,h=0,d=0;t===ns?o>0&&(u=ns,h=o,d=s.length):t===is?l>0&&(u=is,h=l,d=c.length):(h=Math.max(o,l),u=h>0?o>l?ns:is:null,d=u?u===ns?s.length:c.length:0);const f=u===ns&&/\b(transform|all)(,|$)/.test(n[ns+"Property"]);return{type:u,timeout:h,propCount:d,hasTransform:f}}function _s(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map((t,n)=>vs(t)+vs(e[n])))}function vs(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function bs(){return document.body.offsetHeight}new WeakMap,new WeakMap;const ys=e=>{const t=e.props["onUpdate:modelValue"];return Object(i["o"])(t)?e=>Object(i["n"])(t,e):t};const ws={deep:!0,created(e,{value:t,modifiers:{number:n}},r){const s=Object(i["B"])(t);$r(e,"change",()=>{const t=Array.prototype.filter.call(e.options,e=>e.selected).map(e=>n?Object(i["N"])(Cs(e)):Cs(e));e._assign(e.multiple?s?new Set(t):t:t[0])}),e._assign=ys(r)},mounted(e,{value:t}){Os(e,t)},beforeUpdate(e,t,n){e._assign=ys(n)},updated(e,{value:t}){Os(e,t)}};function Os(e,t){const n=e.multiple;if(!n||Object(i["o"])(t)||Object(i["B"])(t)){for(let r=0,s=e.options.length;r<s;r++){const s=e.options[r],o=Cs(s);if(n)Object(i["o"])(t)?s.selected=Object(i["G"])(t,o)>-1:s.selected=t.has(o);else if(Object(i["F"])(Cs(s),t))return void(e.selectedIndex!==r&&(e.selectedIndex=r))}n||-1===e.selectedIndex||(e.selectedIndex=-1)}}function Cs(e){return"_value"in e?e._value:e.value}const Es=["ctrl","shift","alt","meta"],Ts={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>Es.some(n=>e[n+"Key"]&&!t.includes(n))},Is=(e,t)=>(n,...i)=>{for(let e=0;e<t.length;e++){const i=Ts[t[e]];if(i&&i(n,t))return}return e(n,...i)};const ks=Object(i["h"])({patchProp:es},xr);let Ss;function xs(){return Ss||(Ss=li(ks))}const js=(...e)=>{const t=xs().createApp(...e);const{mount:n}=t;return t.mount=e=>{const r=Ns(e);if(!r)return;const s=t._component;Object(i["p"])(s)||s.render||s.template||(s.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function Ns(e){if(Object(i["D"])(e)){const t=document.querySelector(e);return t}return e}},"7b0b":function(e,t,n){var i=n("da84"),r=n("1d80"),s=i.Object;e.exports=function(e){return s(r(e))}},"7c73":function(e,t,n){var i,r=n("825a"),s=n("37e8"),o=n("7839"),a=n("d012"),c=n("1be4"),l=n("cc12"),u=n("f772"),h=">",d="<",f="prototype",p="script",m=u("IE_PROTO"),g=function(){},_=function(e){return d+p+h+e+d+"/"+p+h},v=function(e){e.write(_("")),e.close();var t=e.parentWindow.Object;return e=null,t},b=function(){var e,t=l("iframe"),n="java"+p+":";return t.style.display="none",c.appendChild(t),t.src=String(n),e=t.contentWindow.document,e.open(),e.write(_("document.F=Object")),e.close(),e.F},y=function(){try{i=new ActiveXObject("htmlfile")}catch(t){}y="undefined"!=typeof document?document.domain&&i?v(i):b():v(i);var e=o.length;while(e--)delete y[f][o[e]];return y()};a[m]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(g[f]=r(e),n=new g,g[f]=null,n[m]=e):n=y(),void 0===t?n:s.f(n,t)}},"7db0":function(e,t,n){"use strict";var i=n("23e7"),r=n("b727").find,s=n("44d2"),o="find",a=!0;o in[]&&Array(1)[o]((function(){a=!1})),i({target:"Array",proto:!0,forced:a},{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),s(o)},"7dd0":function(e,t,n){"use strict";var i=n("23e7"),r=n("c65b"),s=n("c430"),o=n("5e77"),a=n("1626"),c=n("9ed3"),l=n("e163"),u=n("d2bb"),h=n("d44e"),d=n("9112"),f=n("6eeb"),p=n("b622"),m=n("3f8c"),g=n("ae93"),_=o.PROPER,v=o.CONFIGURABLE,b=g.IteratorPrototype,y=g.BUGGY_SAFARI_ITERATORS,w=p("iterator"),O="keys",C="values",E="entries",T=function(){return this};e.exports=function(e,t,n,o,p,g,I){c(n,t,o);var k,S,x,j=function(e){if(e===p&&L)return L;if(!y&&e in P)return P[e];switch(e){case O:return function(){return new n(this,e)};case C:return function(){return new n(this,e)};case E:return function(){return new n(this,e)}}return function(){return new n(this)}},N=t+" Iterator",A=!1,P=e.prototype,R=P[w]||P["@@iterator"]||p&&P[p],L=!y&&R||j(p),D="Array"==t&&P.entries||R;if(D&&(k=l(D.call(new e)),k!==Object.prototype&&k.next&&(s||l(k)===b||(u?u(k,b):a(k[w])||f(k,w,T)),h(k,N,!0,!0),s&&(m[N]=T))),_&&p==C&&R&&R.name!==C&&(!s&&v?d(P,"name",C):(A=!0,L=function(){return r(R,this)})),p)if(S={values:j(C),keys:g?L:j(O),entries:j(E)},I)for(x in S)(y||A||!(x in P))&&f(P,x,S[x]);else i({target:t,proto:!0,forced:y||A},S);return s&&!I||P[w]===L||f(P,w,L,{name:p}),m[t]=L,S}},"7f9a":function(e,t,n){var i=n("da84"),r=n("1626"),s=n("8925"),o=i.WeakMap;e.exports=r(o)&&/native code/.test(s(o))},"825a":function(e,t,n){var i=n("da84"),r=n("861d"),s=i.String,o=i.TypeError;e.exports=function(e){if(r(e))return e;throw o(s(e)+" is not an object")}},"83ab":function(e,t,n){var i=n("d039");e.exports=!i((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},8418:function(e,t,n){"use strict";var i=n("a04b"),r=n("9bf2"),s=n("5c6c");e.exports=function(e,t,n){var o=i(t);o in e?r.f(e,o,s(0,n)):e[o]=n}},"861d":function(e,t,n){var i=n("1626");e.exports=function(e){return"object"==typeof e?null!==e:i(e)}},8925:function(e,t,n){var i=n("e330"),r=n("1626"),s=n("c6cd"),o=i(Function.toString);r(s.inspectSource)||(s.inspectSource=function(e){return o(e)}),e.exports=s.inspectSource},"90e3":function(e,t,n){var i=n("e330"),r=0,s=Math.random(),o=i(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+o(++r+s,36)}},9112:function(e,t,n){var i=n("83ab"),r=n("9bf2"),s=n("5c6c");e.exports=i?function(e,t,n){return r.f(e,t,s(1,n))}:function(e,t,n){return e[t]=n,e}},"94ca":function(e,t,n){var i=n("d039"),r=n("1626"),s=/#|\.prototype\./,o=function(e,t){var n=c[a(e)];return n==u||n!=l&&(r(t)?i(t):!!t)},a=o.normalize=function(e){return String(e).replace(s,".").toLowerCase()},c=o.data={},l=o.NATIVE="N",u=o.POLYFILL="P";e.exports=o},"9a1f":function(e,t,n){var i=n("da84"),r=n("c65b"),s=n("59ed"),o=n("825a"),a=n("0d51"),c=n("35a1"),l=i.TypeError;e.exports=function(e,t){var n=arguments.length<2?c(e):t;if(s(n))return o(r(n,e));throw l(a(e)+" is not iterable")}},"9bf2":function(e,t,n){var i=n("da84"),r=n("83ab"),s=n("0cfb"),o=n("aed9"),a=n("825a"),c=n("a04b"),l=i.TypeError,u=Object.defineProperty,h=Object.getOwnPropertyDescriptor,d="enumerable",f="configurable",p="writable";t.f=r?o?function(e,t,n){if(a(e),t=c(t),a(n),"function"===typeof e&&"prototype"===t&&"value"in n&&p in n&&!n[p]){var i=h(e,t);i&&i[p]&&(e[t]=n.value,n={configurable:f in n?n[f]:i[f],enumerable:d in n?n[d]:i[d],writable:!1})}return u(e,t,n)}:u:function(e,t,n){if(a(e),t=c(t),a(n),s)try{return u(e,t,n)}catch(i){}if("get"in n||"set"in n)throw l("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},"9ed3":function(e,t,n){"use strict";var i=n("ae93").IteratorPrototype,r=n("7c73"),s=n("5c6c"),o=n("d44e"),a=n("3f8c"),c=function(){return this};e.exports=function(e,t,n,l){var u=t+" Iterator";return e.prototype=r(i,{next:s(+!l,n)}),o(e,u,!1,!0),a[u]=c,e}},"9ff4":function(e,t,n){"use strict";(function(e){function i(e,t){const n=Object.create(null),i=e.split(",");for(let r=0;r<i.length;r++)n[i[r]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}n.d(t,"a",(function(){return E})),n.d(t,"b",(function(){return C})),n.d(t,"c",(function(){return I})),n.d(t,"d",(function(){return T})),n.d(t,"e",(function(){return Q})),n.d(t,"f",(function(){return ee})),n.d(t,"g",(function(){return re})),n.d(t,"h",(function(){return j})),n.d(t,"i",(function(){return ae})),n.d(t,"j",(function(){return ne})),n.d(t,"k",(function(){return P})),n.d(t,"l",(function(){return Z})),n.d(t,"m",(function(){return c})),n.d(t,"n",(function(){return ie})),n.d(t,"o",(function(){return R})),n.d(t,"p",(function(){return F})),n.d(t,"q",(function(){return s})),n.d(t,"r",(function(){return g})),n.d(t,"s",(function(){return G})),n.d(t,"t",(function(){return L})),n.d(t,"u",(function(){return x})),n.d(t,"v",(function(){return H})),n.d(t,"w",(function(){return S})),n.d(t,"x",(function(){return $})),n.d(t,"y",(function(){return W})),n.d(t,"z",(function(){return K})),n.d(t,"A",(function(){return _})),n.d(t,"B",(function(){return D})),n.d(t,"C",(function(){return a})),n.d(t,"D",(function(){return U})),n.d(t,"E",(function(){return q})),n.d(t,"F",(function(){return b})),n.d(t,"G",(function(){return y})),n.d(t,"H",(function(){return i})),n.d(t,"I",(function(){return f})),n.d(t,"J",(function(){return l})),n.d(t,"K",(function(){return N})),n.d(t,"L",(function(){return w})),n.d(t,"M",(function(){return te})),n.d(t,"N",(function(){return se})),n.d(t,"O",(function(){return z}));const r="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",s=i(r);const o="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=i(o);function c(e){return!!e||""===e}function l(e){if(R(e)){const t={};for(let n=0;n<e.length;n++){const i=e[n],r=U(i)?d(i):l(i);if(r)for(const e in r)t[e]=r[e]}return t}return U(e)||H(e)?e:void 0}const u=/;(?![^(]*\))/g,h=/:(.+)/;function d(e){const t={};return e.split(u).forEach(e=>{if(e){const n=e.split(h);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function f(e){let t="";if(U(e))t=e;else if(R(e))for(let n=0;n<e.length;n++){const i=f(e[n]);i&&(t+=i+" ")}else if(H(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const p="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",m="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",g=i(p),_=i(m);function v(e,t){if(e.length!==t.length)return!1;let n=!0;for(let i=0;n&&i<e.length;i++)n=b(e[i],t[i]);return n}function b(e,t){if(e===t)return!0;let n=M(e),i=M(t);if(n||i)return!(!n||!i)&&e.getTime()===t.getTime();if(n=R(e),i=R(t),n||i)return!(!n||!i)&&v(e,t);if(n=H(e),i=H(t),n||i){if(!n||!i)return!1;const r=Object.keys(e).length,s=Object.keys(t).length;if(r!==s)return!1;for(const n in e){const i=e.hasOwnProperty(n),r=t.hasOwnProperty(n);if(i&&!r||!i&&r||!b(e[n],t[n]))return!1}}return String(e)===String(t)}function y(e,t){return e.findIndex(e=>b(e,t))}const w=e=>null==e?"":R(e)||H(e)&&(e.toString===V||!F(e.toString))?JSON.stringify(e,O,2):String(e),O=(e,t)=>t&&t.__v_isRef?O(e,t.value):L(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n])=>(e[t+" =>"]=n,e),{})}:D(t)?{[`Set(${t.size})`]:[...t.values()]}:!H(t)||R(t)||$(t)?t:String(t),C={},E=[],T=()=>{},I=()=>!1,k=/^on[^a-z]/,S=e=>k.test(e),x=e=>e.startsWith("onUpdate:"),j=Object.assign,N=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},A=Object.prototype.hasOwnProperty,P=(e,t)=>A.call(e,t),R=Array.isArray,L=e=>"[object Map]"===B(e),D=e=>"[object Set]"===B(e),M=e=>e instanceof Date,F=e=>"function"===typeof e,U=e=>"string"===typeof e,q=e=>"symbol"===typeof e,H=e=>null!==e&&"object"===typeof e,W=e=>H(e)&&F(e.then)&&F(e.catch),V=Object.prototype.toString,B=e=>V.call(e),z=e=>B(e).slice(8,-1),$=e=>"[object Object]"===B(e),G=e=>U(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,K=i(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Y=e=>{const t=Object.create(null);return n=>{const i=t[n];return i||(t[n]=e(n))}},J=/-(\w)/g,Q=Y(e=>e.replace(J,(e,t)=>t?t.toUpperCase():"")),X=/\B([A-Z])/g,Z=Y(e=>e.replace(X,"-$1").toLowerCase()),ee=Y(e=>e.charAt(0).toUpperCase()+e.slice(1)),te=Y(e=>e?"on"+ee(e):""),ne=(e,t)=>!Object.is(e,t),ie=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},re=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},se=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let oe;const ae=()=>oe||(oe="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof e?e:{})}).call(this,n("c8ba"))},a04b:function(e,t,n){var i=n("c04e"),r=n("d9b5");e.exports=function(e){var t=i(e,"string");return r(t)?t:t+""}},a434:function(e,t,n){"use strict";var i=n("23e7"),r=n("da84"),s=n("23cb"),o=n("5926"),a=n("07fa"),c=n("7b0b"),l=n("65f0"),u=n("8418"),h=n("1dde"),d=h("splice"),f=r.TypeError,p=Math.max,m=Math.min,g=9007199254740991,_="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!d},{splice:function(e,t){var n,i,r,h,d,v,b=c(this),y=a(b),w=s(e,y),O=arguments.length;if(0===O?n=i=0:1===O?(n=0,i=y-w):(n=O-2,i=m(p(o(t),0),y-w)),y+n-i>g)throw f(_);for(r=l(b,i),h=0;h<i;h++)d=w+h,d in b&&u(r,h,b[d]);if(r.length=i,n<i){for(h=w;h<y-i;h++)d=h+i,v=h+n,d in b?b[v]=b[d]:delete b[v];for(h=y;h>y-i+n;h--)delete b[h-1]}else if(n>i)for(h=y-i;h>w;h--)d=h+i-1,v=h+n-1,d in b?b[v]=b[d]:delete b[v];for(h=0;h<n;h++)b[h+w]=arguments[h+2];return b.length=y-i+n,r}})},a4b4:function(e,t,n){var i=n("342f");e.exports=/web0s(?!.*chrome)/i.test(i)},a640:function(e,t,n){"use strict";var i=n("d039");e.exports=function(e,t){var n=[][e];return!!n&&i((function(){n.call(null,t||function(){throw 1},1)}))}},a79d:function(e,t,n){"use strict";var i=n("23e7"),r=n("c430"),s=n("fea9"),o=n("d039"),a=n("d066"),c=n("1626"),l=n("4840"),u=n("cdf9"),h=n("6eeb"),d=!!s&&o((function(){s.prototype["finally"].call({then:function(){}},(function(){}))}));if(i({target:"Promise",proto:!0,real:!0,forced:d},{finally:function(e){var t=l(this,a("Promise")),n=c(e);return this.then(n?function(n){return u(t,e()).then((function(){return n}))}:e,n?function(n){return u(t,e()).then((function(){throw n}))}:e)}}),!r&&c(s)){var f=a("Promise").prototype["finally"];s.prototype["finally"]!==f&&h(s.prototype,"finally",f,{unsafe:!0})}},abc5:function(e,t,n){"use strict";(function(e){function i(){return r().__VUE_DEVTOOLS_GLOBAL_HOOK__}function r(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof e?e:{}}n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return s}));const s="function"===typeof Proxy}).call(this,n("c8ba"))},ae93:function(e,t,n){"use strict";var i,r,s,o=n("d039"),a=n("1626"),c=n("7c73"),l=n("e163"),u=n("6eeb"),h=n("b622"),d=n("c430"),f=h("iterator"),p=!1;[].keys&&(s=[].keys(),"next"in s?(r=l(l(s)),r!==Object.prototype&&(i=r)):p=!0);var m=void 0==i||o((function(){var e={};return i[f].call(e)!==e}));m?i={}:d&&(i=c(i)),a(i[f])||u(i,f,(function(){return this})),e.exports={IteratorPrototype:i,BUGGY_SAFARI_ITERATORS:p}},aed9:function(e,t,n){var i=n("83ab"),r=n("d039");e.exports=i&&r((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},b041:function(e,t,n){"use strict";var i=n("00ee"),r=n("f5df");e.exports=i?{}.toString:function(){return"[object "+r(this)+"]"}},b0c0:function(e,t,n){var i=n("83ab"),r=n("5e77").EXISTS,s=n("e330"),o=n("9bf2").f,a=Function.prototype,c=s(a.toString),l=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,u=s(l.exec),h="name";i&&!r&&o(a,h,{configurable:!0,get:function(){try{return u(l,c(this))[1]}catch(e){return""}}})},b575:function(e,t,n){var i,r,s,o,a,c,l,u,h=n("da84"),d=n("0366"),f=n("06cf").f,p=n("2cf4").set,m=n("1cdc"),g=n("d4c3"),_=n("a4b4"),v=n("605d"),b=h.MutationObserver||h.WebKitMutationObserver,y=h.document,w=h.process,O=h.Promise,C=f(h,"queueMicrotask"),E=C&&C.value;E||(i=function(){var e,t;v&&(e=w.domain)&&e.exit();while(r){t=r.fn,r=r.next;try{t()}catch(n){throw r?o():s=void 0,n}}s=void 0,e&&e.enter()},m||v||_||!b||!y?!g&&O&&O.resolve?(l=O.resolve(void 0),l.constructor=O,u=d(l.then,l),o=function(){u(i)}):v?o=function(){w.nextTick(i)}:(p=d(p,h),o=function(){p(i)}):(a=!0,c=y.createTextNode(""),new b(i).observe(c,{characterData:!0}),o=function(){c.data=a=!a})),e.exports=E||function(e){var t={fn:e,next:void 0};s&&(s.next=t),r||(r=t,o()),s=t}},b622:function(e,t,n){var i=n("da84"),r=n("5692"),s=n("1a2d"),o=n("90e3"),a=n("4930"),c=n("fdbf"),l=r("wks"),u=i.Symbol,h=u&&u["for"],d=c?u:u&&u.withoutSetter||o;e.exports=function(e){if(!s(l,e)||!a&&"string"!=typeof l[e]){var t="Symbol."+e;a&&s(u,e)?l[e]=u[e]:l[e]=c&&h?h(t):d(t)}return l[e]}},b727:function(e,t,n){var i=n("0366"),r=n("e330"),s=n("44ad"),o=n("7b0b"),a=n("07fa"),c=n("65f0"),l=r([].push),u=function(e){var t=1==e,n=2==e,r=3==e,u=4==e,h=6==e,d=7==e,f=5==e||h;return function(p,m,g,_){for(var v,b,y=o(p),w=s(y),O=i(m,g),C=a(w),E=0,T=_||c,I=t?T(p,C):n||d?T(p,0):void 0;C>E;E++)if((f||E in w)&&(v=w[E],b=O(v,E,y),e))if(t)I[E]=b;else if(b)switch(e){case 3:return!0;case 5:return v;case 6:return E;case 2:l(I,v)}else switch(e){case 4:return!1;case 7:l(I,v)}return h?-1:r||u?u:I}};e.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterReject:u(7)}},c04e:function(e,t,n){var i=n("da84"),r=n("c65b"),s=n("861d"),o=n("d9b5"),a=n("dc4a"),c=n("485a"),l=n("b622"),u=i.TypeError,h=l("toPrimitive");e.exports=function(e,t){if(!s(e)||o(e))return e;var n,i=a(e,h);if(i){if(void 0===t&&(t="default"),n=r(i,e,t),!s(n)||o(n))return n;throw u("Can't convert object to primitive value")}return void 0===t&&(t="number"),c(e,t)}},c430:function(e,t){e.exports=!1},c65b:function(e,t,n){var i=n("40d5"),r=Function.prototype.call;e.exports=i?r.bind(r):function(){return r.apply(r,arguments)}},c6b6:function(e,t,n){var i=n("e330"),r=i({}.toString),s=i("".slice);e.exports=function(e){return s(r(e),8,-1)}},c6cd:function(e,t,n){var i=n("da84"),r=n("ce4e"),s="__core-js_shared__",o=i[s]||r(s,{});e.exports=o},c740:function(e,t,n){"use strict";var i=n("23e7"),r=n("b727").findIndex,s=n("44d2"),o="findIndex",a=!0;o in[]&&Array(1)[o]((function(){a=!1})),i({target:"Array",proto:!0,forced:a},{findIndex:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),s(o)},c8ba:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(i){"object"===typeof window&&(n=window)}e.exports=n},ca84:function(e,t,n){var i=n("e330"),r=n("1a2d"),s=n("fc6a"),o=n("4d64").indexOf,a=n("d012"),c=i([].push);e.exports=function(e,t){var n,i=s(e),l=0,u=[];for(n in i)!r(a,n)&&r(i,n)&&c(u,n);while(t.length>l)r(i,n=t[l++])&&(~o(u,n)||c(u,n));return u}},cc12:function(e,t,n){var i=n("da84"),r=n("861d"),s=i.document,o=r(s)&&r(s.createElement);e.exports=function(e){return o?s.createElement(e):{}}},cca6:function(e,t,n){var i=n("23e7"),r=n("60da");i({target:"Object",stat:!0,forced:Object.assign!==r},{assign:r})},cdf9:function(e,t,n){var i=n("825a"),r=n("861d"),s=n("f069");e.exports=function(e,t){if(i(e),r(t)&&t.constructor===e)return t;var n=s.f(e),o=n.resolve;return o(t),n.promise}},ce4e:function(e,t,n){var i=n("da84"),r=Object.defineProperty;e.exports=function(e,t){try{r(i,e,{value:t,configurable:!0,writable:!0})}catch(n){i[e]=t}return t}},d012:function(e,t){e.exports={}},d039:function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},d066:function(e,t,n){var i=n("da84"),r=n("1626"),s=function(e){return r(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?s(i[e]):i[e]&&i[e][t]}},d1e7:function(e,t,n){"use strict";var i={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,s=r&&!i.call({1:2},1);t.f=s?function(e){var t=r(this,e);return!!t&&t.enumerable}:i},d2bb:function(e,t,n){var i=n("e330"),r=n("825a"),s=n("3bbe");e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=i(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),e(n,[]),t=n instanceof Array}catch(o){}return function(n,i){return r(n),s(i),t?e(n,i):n.__proto__=i,n}}():void 0)},d3b7:function(e,t,n){var i=n("00ee"),r=n("6eeb"),s=n("b041");i||r(Object.prototype,"toString",s,{unsafe:!0})},d44e:function(e,t,n){var i=n("9bf2").f,r=n("1a2d"),s=n("b622"),o=s("toStringTag");e.exports=function(e,t,n){e&&!n&&(e=e.prototype),e&&!r(e,o)&&i(e,o,{configurable:!0,value:t})}},d4c3:function(e,t,n){var i=n("342f"),r=n("da84");e.exports=/ipad|iphone|ipod/i.test(i)&&void 0!==r.Pebble},d9b5:function(e,t,n){var i=n("da84"),r=n("d066"),s=n("1626"),o=n("3a9b"),a=n("fdbf"),c=i.Object;e.exports=a?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return s(t)&&o(t.prototype,c(e))}},da84:function(e,t,n){(function(t){var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||function(){return this}()||Function("return this")()}).call(this,n("c8ba"))},dc4a:function(e,t,n){var i=n("59ed");e.exports=function(e,t){var n=e[t];return null==n?void 0:i(n)}},df75:function(e,t,n){var i=n("ca84"),r=n("7839");e.exports=Object.keys||function(e){return i(e,r)}},df7c:function(e,t,n){(function(e){function n(e,t){for(var n=0,i=e.length-1;i>=0;i--){var r=e[i];"."===r?e.splice(i,1):".."===r?(e.splice(i,1),n++):n&&(e.splice(i,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}function i(e){"string"!==typeof e&&(e+="");var t,n=0,i=-1,r=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!r){n=t+1;break}}else-1===i&&(r=!1,i=t+1);return-1===i?"":e.slice(n,i)}function r(e,t){if(e.filter)return e.filter(t);for(var n=[],i=0;i<e.length;i++)t(e[i],i,e)&&n.push(e[i]);return n}t.resolve=function(){for(var t="",i=!1,s=arguments.length-1;s>=-1&&!i;s--){var o=s>=0?arguments[s]:e.cwd();if("string"!==typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(t=o+"/"+t,i="/"===o.charAt(0))}return t=n(r(t.split("/"),(function(e){return!!e})),!i).join("/"),(i?"/":"")+t||"."},t.normalize=function(e){var i=t.isAbsolute(e),o="/"===s(e,-1);return e=n(r(e.split("/"),(function(e){return!!e})),!i).join("/"),e||i||(e="."),e&&o&&(e+="/"),(i?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(r(e,(function(e,t){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,n){function i(e){for(var t=0;t<e.length;t++)if(""!==e[t])break;for(var n=e.length-1;n>=0;n--)if(""!==e[n])break;return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var r=i(e.split("/")),s=i(n.split("/")),o=Math.min(r.length,s.length),a=o,c=0;c<o;c++)if(r[c]!==s[c]){a=c;break}var l=[];for(c=a;c<r.length;c++)l.push("..");return l=l.concat(s.slice(a)),l.join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!==typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,i=-1,r=!0,s=e.length-1;s>=1;--s)if(t=e.charCodeAt(s),47===t){if(!r){i=s;break}}else r=!1;return-1===i?n?"/":".":n&&1===i?"/":e.slice(0,i)},t.basename=function(e,t){var n=i(e);return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){"string"!==typeof e&&(e+="");for(var t=-1,n=0,i=-1,r=!0,s=0,o=e.length-1;o>=0;--o){var a=e.charCodeAt(o);if(47!==a)-1===i&&(r=!1,i=o+1),46===a?-1===t?t=o:1!==s&&(s=1):-1!==t&&(s=-1);else if(!r){n=o+1;break}}return-1===t||-1===i||0===s||1===s&&t===i-1&&t===n+1?"":e.slice(t,i)};var s="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(this,n("4362"))},e163:function(e,t,n){var i=n("da84"),r=n("1a2d"),s=n("1626"),o=n("7b0b"),a=n("f772"),c=n("e177"),l=a("IE_PROTO"),u=i.Object,h=u.prototype;e.exports=c?u.getPrototypeOf:function(e){var t=o(e);if(r(t,l))return t[l];var n=t.constructor;return s(n)&&t instanceof n?n.prototype:t instanceof u?h:null}},e177:function(e,t,n){var i=n("d039");e.exports=!i((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},e260:function(e,t,n){"use strict";var i=n("fc6a"),r=n("44d2"),s=n("3f8c"),o=n("69f3"),a=n("9bf2").f,c=n("7dd0"),l=n("c430"),u=n("83ab"),h="Array Iterator",d=o.set,f=o.getterFor(h);e.exports=c(Array,"Array",(function(e,t){d(this,{type:h,target:i(e),index:0,kind:t})}),(function(){var e=f(this),t=e.target,n=e.kind,i=e.index++;return!t||i>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:i,done:!1}:"values"==n?{value:t[i],done:!1}:{value:[i,t[i]],done:!1}}),"values");var p=s.Arguments=s.Array;if(r("keys"),r("values"),r("entries"),!l&&u&&"values"!==p.name)try{a(p,"name",{value:"values"})}catch(m){}},e2cc:function(e,t,n){var i=n("6eeb");e.exports=function(e,t,n){for(var r in t)i(e,r,t[r],n);return e}},e330:function(e,t,n){var i=n("40d5"),r=Function.prototype,s=r.bind,o=r.call,a=i&&s.bind(o,o);e.exports=i?function(e){return e&&a(e)}:function(e){return e&&function(){return o.apply(e,arguments)}}},e667:function(e,t){e.exports=function(e){try{return{error:!1,value:e()}}catch(t){return{error:!0,value:t}}}},e691:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return h}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=[];var r;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(r||(r={}));const s={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},o=r.INFO,a={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),r=a[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${i}]  ${e.name}:`,...n)};class l{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,i.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in r))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...e),this._logHandler(this,r.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...e),this._logHandler(this,r.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,r.INFO,...e),this._logHandler(this,r.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,r.WARN,...e),this._logHandler(this,r.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...e),this._logHandler(this,r.ERROR,...e)}}function u(e){i.forEach(t=>{t.setLogLevel(e)})}function h(e,t){for(const n of i){let i=null;t&&t.level&&(i=s[t.level]),n.userLogHandler=null===e?null:(t,n,...s)=>{const o=s.map(e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}}).filter(e=>e).join(" ");n>=(null!==i&&void 0!==i?i:t.logLevel)&&e({level:r[n].toLowerCase(),message:o,args:s,type:t.name})}}}},e6cf:function(e,t,n){"use strict";var i,r,s,o,a=n("23e7"),c=n("c430"),l=n("da84"),u=n("d066"),h=n("c65b"),d=n("fea9"),f=n("6eeb"),p=n("e2cc"),m=n("d2bb"),g=n("d44e"),_=n("2626"),v=n("59ed"),b=n("1626"),y=n("861d"),w=n("19aa"),O=n("8925"),C=n("2266"),E=n("1c7e"),T=n("4840"),I=n("2cf4").set,k=n("b575"),S=n("cdf9"),x=n("44de"),j=n("f069"),N=n("e667"),A=n("01b4"),P=n("69f3"),R=n("94ca"),L=n("b622"),D=n("6069"),M=n("605d"),F=n("2d00"),U=L("species"),q="Promise",H=P.getterFor(q),W=P.set,V=P.getterFor(q),B=d&&d.prototype,z=d,$=B,G=l.TypeError,K=l.document,Y=l.process,J=j.f,Q=J,X=!!(K&&K.createEvent&&l.dispatchEvent),Z=b(l.PromiseRejectionEvent),ee="unhandledrejection",te="rejectionhandled",ne=0,ie=1,re=2,se=1,oe=2,ae=!1,ce=R(q,(function(){var e=O(z),t=e!==String(z);if(!t&&66===F)return!0;if(c&&!$["finally"])return!0;if(F>=51&&/native code/.test(e))return!1;var n=new z((function(e){e(1)})),i=function(e){e((function(){}),(function(){}))},r=n.constructor={};return r[U]=i,ae=n.then((function(){}))instanceof i,!ae||!t&&D&&!Z})),le=ce||!E((function(e){z.all(e)["catch"]((function(){}))})),ue=function(e){var t;return!(!y(e)||!b(t=e.then))&&t},he=function(e,t){var n,i,r,s=t.value,o=t.state==ie,a=o?e.ok:e.fail,c=e.resolve,l=e.reject,u=e.domain;try{a?(o||(t.rejection===oe&&ge(t),t.rejection=se),!0===a?n=s:(u&&u.enter(),n=a(s),u&&(u.exit(),r=!0)),n===e.promise?l(G("Promise-chain cycle")):(i=ue(n))?h(i,n,c,l):c(n)):l(s)}catch(d){u&&!r&&u.exit(),l(d)}},de=function(e,t){e.notified||(e.notified=!0,k((function(){var n,i=e.reactions;while(n=i.get())he(n,e);e.notified=!1,t&&!e.rejection&&pe(e)})))},fe=function(e,t,n){var i,r;X?(i=K.createEvent("Event"),i.promise=t,i.reason=n,i.initEvent(e,!1,!0),l.dispatchEvent(i)):i={promise:t,reason:n},!Z&&(r=l["on"+e])?r(i):e===ee&&x("Unhandled promise rejection",n)},pe=function(e){h(I,l,(function(){var t,n=e.facade,i=e.value,r=me(e);if(r&&(t=N((function(){M?Y.emit("unhandledRejection",i,n):fe(ee,n,i)})),e.rejection=M||me(e)?oe:se,t.error))throw t.value}))},me=function(e){return e.rejection!==se&&!e.parent},ge=function(e){h(I,l,(function(){var t=e.facade;M?Y.emit("rejectionHandled",t):fe(te,t,e.value)}))},_e=function(e,t,n){return function(i){e(t,i,n)}},ve=function(e,t,n){e.done||(e.done=!0,n&&(e=n),e.value=t,e.state=re,de(e,!0))},be=function(e,t,n){if(!e.done){e.done=!0,n&&(e=n);try{if(e.facade===t)throw G("Promise can't be resolved itself");var i=ue(t);i?k((function(){var n={done:!1};try{h(i,t,_e(be,n,e),_e(ve,n,e))}catch(r){ve(n,r,e)}})):(e.value=t,e.state=ie,de(e,!1))}catch(r){ve({done:!1},r,e)}}};if(ce&&(z=function(e){w(this,$),v(e),h(i,this);var t=H(this);try{e(_e(be,t),_e(ve,t))}catch(n){ve(t,n)}},$=z.prototype,i=function(e){W(this,{type:q,done:!1,notified:!1,parent:!1,reactions:new A,rejection:!1,state:ne,value:void 0})},i.prototype=p($,{then:function(e,t){var n=V(this),i=J(T(this,z));return n.parent=!0,i.ok=!b(e)||e,i.fail=b(t)&&t,i.domain=M?Y.domain:void 0,n.state==ne?n.reactions.add(i):k((function(){he(i,n)})),i.promise},catch:function(e){return this.then(void 0,e)}}),r=function(){var e=new i,t=H(e);this.promise=e,this.resolve=_e(be,t),this.reject=_e(ve,t)},j.f=J=function(e){return e===z||e===s?new r(e):Q(e)},!c&&b(d)&&B!==Object.prototype)){o=B.then,ae||(f(B,"then",(function(e,t){var n=this;return new z((function(e,t){h(o,n,e,t)})).then(e,t)}),{unsafe:!0}),f(B,"catch",$["catch"],{unsafe:!0}));try{delete B.constructor}catch(ye){}m&&m(B,$)}a({global:!0,wrap:!0,forced:ce},{Promise:z}),g(z,q,!1,!0),_(q),s=u(q),a({target:q,stat:!0,forced:ce},{reject:function(e){var t=J(this);return h(t.reject,void 0,e),t.promise}}),a({target:q,stat:!0,forced:c||ce},{resolve:function(e){return S(c&&this===s?z:this,e)}}),a({target:q,stat:!0,forced:le},{all:function(e){var t=this,n=J(t),i=n.resolve,r=n.reject,s=N((function(){var n=v(t.resolve),s=[],o=0,a=1;C(e,(function(e){var c=o++,l=!1;a++,h(n,t,e).then((function(e){l||(l=!0,s[c]=e,--a||i(s))}),r)})),--a||i(s)}));return s.error&&r(s.value),n.promise},race:function(e){var t=this,n=J(t),i=n.reject,r=N((function(){var r=v(t.resolve);C(e,(function(e){h(r,t,e).then(n.resolve,i)}))}));return r.error&&i(r.value),n.promise}})},e893:function(e,t,n){var i=n("1a2d"),r=n("56ef"),s=n("06cf"),o=n("9bf2");e.exports=function(e,t,n){for(var a=r(t),c=o.f,l=s.f,u=0;u<a.length;u++){var h=a[u];i(e,h)||n&&i(n,h)||c(e,h,l(t,h))}}},e8b5:function(e,t,n){var i=n("c6b6");e.exports=Array.isArray||function(e){return"Array"==i(e)}},e95a:function(e,t,n){var i=n("b622"),r=n("3f8c"),s=i("iterator"),o=Array.prototype;e.exports=function(e){return void 0!==e&&(r.Array===e||o[s]===e)}},ea7b:function(e,t,n){"use strict";n.d(t,"a",(function(){return at})),n.d(t,"b",(function(){return ci})),n.d(t,"c",(function(){return lt})),n.d(t,"d",(function(){return ct})),n.d(t,"e",(function(){return ut}));var i=n("1fd5"),r=n("589b");function s(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}Object.create;Object.create;var o=n("e691"),a=n("22e5");function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const l=c,u=new i["b"]("auth","Firebase",c()),h=new o["b"]("@firebase/auth");function d(e,...t){h.logLevel<=o["a"].ERROR&&h.error(`Auth (${r["a"]}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(e,...t){throw g(e,...t)}function p(e,...t){return g(e,...t)}function m(e,t,n){const r=Object.assign(Object.assign({},l()),{[t]:n}),s=new i["b"]("auth","Firebase",r);return s.create(t,{appName:e.name})}function g(e,...t){if("string"!==typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return u.create(e,...t)}function _(e,t,...n){if(!e)throw g(t,...n)}function v(e){const t="INTERNAL ASSERTION FAILED: "+e;throw d(t),new Error(t)}function b(e,t){e||v(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y=new Map;function w(e){b(e instanceof Function,"Expected a class definition");let t=y.get(e);return t?(b(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,y.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(e,t){const n=Object(r["b"])(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),r=n.getOptions();if(Object(i["n"])(r,null!==t&&void 0!==t?t:{}))return e;f(e,"already-initialized")}const s=n.initialize({options:t});return s}function C(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(w);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function T(){return"http:"===I()||"https:"===I()}function I(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(T()||Object(i["t"])()||"connection"in navigator))||navigator.onLine}function S(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e,t){this.shortDelay=e,this.longDelay=t,b(t>e,"Short delay should be less than long delay!"),this.isMobile=Object(i["w"])()||Object(i["y"])()}get(){return k()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(e,t){b(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void v("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void v("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void v("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},P=new x(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function L(e,t,n,r,s={}){return D(e,s,async()=>{let s={},o={};r&&("GET"===t?o=r:s={body:JSON.stringify(r)});const a=Object(i["C"])(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),N.fetch()(F(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))})}async function D(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},A),t);try{const t=new U(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw q(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw q(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw q(e,"email-already-in-use",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw m(e,a,o);f(e,a)}}catch(s){if(s instanceof i["c"])throw s;f(e,"network-request-failed")}}async function M(e,t,n,i,r={}){const s=await L(e,t,n,i,r);return"mfaPendingCredential"in s&&f(e,"multi-factor-auth-required",{_serverResponse:s}),s}function F(e,t,n,i){const r=`${t}${n}?${i}`;return e.config.emulator?j(e.config,r):`${e.config.apiScheme}://${r}`}class U{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(p(this.auth,"network-request-failed")),P.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function q(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=p(e,t,i);return r.customData._tokenResponse=n,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H(e,t){return L(e,"POST","/v1/accounts:delete",t)}async function W(e,t){return L(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B(e,t=!1){const n=Object(i["q"])(e),r=await n.getIdToken(t),s=$(r);_(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:r,authTime:V(z(s.auth_time)),issuedAtTime:V(z(s.iat)),expirationTime:V(z(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function z(e){return 1e3*Number(e)}function $(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return d("JWT malformed, contained fewer than 3 sections"),null;try{const e=Object(i["h"])(n);return e?JSON.parse(e):(d("Failed to decode base64 JWT payload"),null)}catch(s){return d("Caught error parsing JWT payload as JSON",s),null}}function G(e){const t=$(e);return _(t,"internal-error"),_("undefined"!==typeof t.exp,"internal-error"),_("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof i["c"]&&Y(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function Y({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=V(this.lastLoginAt),this.creationTime=V(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X(e){var t;const n=e.auth,i=await e.getIdToken(),r=await K(e,W(n,{idToken:i}));_(null===r||void 0===r?void 0:r.users.length,n,"internal-error");const s=r.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?te(s.providerUserInfo):[],a=ee(e.providerData,o),c=e.isAnonymous,l=!(e.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),u=!!c&&l,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Q(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(e,h)}async function Z(e){const t=Object(i["q"])(e);await X(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ee(e,t){const n=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...n,...t]}function te(e){return e.map(e=>{var{providerId:t}=e,n=s(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ne(e,t){const n=await D(e,{},async()=>{const n=Object(i["C"])({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:s}=e.config,o=F(e,r,"/v1/token","key="+s),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",N.fetch()(o,{method:"POST",headers:a,body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_(e.idToken,"internal-error"),_("undefined"!==typeof e.idToken,"internal-error"),_("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):G(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return _(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:r}=await ne(e,t);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:r}=t,s=new ie;return n&&(_("string"===typeof n,"internal-error",{appName:e}),s.refreshToken=n),i&&(_("string"===typeof i,"internal-error",{appName:e}),s.accessToken=i),r&&(_("number"===typeof r,"internal-error",{appName:e}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ie,this.toJSON())}_performRefresh(){return v("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(e,t){_("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class se{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,r=s(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new J(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Q(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await K(this,this.stsTokenManager.getToken(this.auth,e));return _(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return B(this,e)}reload(){return Z(this)}_assign(e){this!==e&&(_(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new se(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){_(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await X(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await K(this,H(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,r,s,o,a,c,l;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(i=t.email)&&void 0!==i?i:void 0,d=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,v=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:b,emailVerified:y,isAnonymous:w,providerData:O,stsTokenManager:C}=t;_(b&&C,e,"internal-error");const E=ie.fromJSON(this.name,C);_("string"===typeof b,e,"internal-error"),re(u,e.name),re(h,e.name),_("boolean"===typeof y,e,"internal-error"),_("boolean"===typeof w,e,"internal-error"),re(d,e.name),re(f,e.name),re(p,e.name),re(m,e.name),re(g,e.name),re(v,e.name);const T=new se({uid:b,auth:e,email:h,emailVerified:y,displayName:u,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:E,createdAt:g,lastLoginAt:v});return O&&Array.isArray(O)&&(T.providerData=O.map(e=>Object.assign({},e))),m&&(T._redirectEventId=m),T}static async _fromIdTokenResponse(e,t,n=!1){const i=new ie;i.updateFromServerResponse(t);const r=new se({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await X(r),r}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}oe.type="NONE";const ae=oe;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(e,t,n){return`firebase:${e}:${t}:${n}`}class le{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=ce(this.userKey,i.apiKey,r),this.fullPersistenceKey=ce("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?se._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new le(w(ae),e,n);const i=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let r=i[0]||w(ae);const s=ce(n,e.config.apiKey,e.name);let o=null;for(const l of t)try{const t=await l._get(s);if(t){const n=se._fromJSON(e,t);l!==r&&(o=n),r=l;break}}catch(c){}const a=i.filter(e=>e._shouldAllowMigration);return r._shouldAllowMigration&&a.length?(r=a[0],o&&await r._set(s,o.toJSON()),await Promise.all(t.map(async e=>{if(e!==r)try{await e._remove(s)}catch(c){}})),new le(r,e,n)):new le(r,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(pe(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(he(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ge(t))return"Blackberry";if(_e(t))return"Webos";if(de(t))return"Safari";if((t.includes("chrome/")||fe(t))&&!t.includes("edge/"))return"Chrome";if(me(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function he(e=Object(i["r"])()){return/firefox\//i.test(e)}function de(e=Object(i["r"])()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function fe(e=Object(i["r"])()){return/crios\//i.test(e)}function pe(e=Object(i["r"])()){return/iemobile/i.test(e)}function me(e=Object(i["r"])()){return/android/i.test(e)}function ge(e=Object(i["r"])()){return/blackberry/i.test(e)}function _e(e=Object(i["r"])()){return/webos/i.test(e)}function ve(e=Object(i["r"])()){return/iphone|ipad|ipod/i.test(e)}function be(e=Object(i["r"])()){var t;return ve(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function ye(){return Object(i["v"])()&&10===document.documentMode}function we(e=Object(i["r"])()){return ve(e)||me(e)||_e(e)||ge(e)||/windows phone/i.test(e)||pe(e)}function Oe(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(e,t=[]){let n;switch(e){case"Browser":n=ue(Object(i["r"])());break;case"Worker":n=`${ue(Object(i["r"])())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${r["a"]}/${s}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ie(this),this.idTokenSubscription=new Ie(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=w(t)),this._initializationPromise=this.queue(async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await le.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(r){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,r=null===n||void 0===n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(e);i&&i!==r||!(null===s||void 0===s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?(_(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await X(e)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=S()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Object(i["q"])(e):null;return t&&_(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&_(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(w(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new i["b"]("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&w(e)||this._popupRedirectResolver;_(t,this,"argument-error"),this.redirectPersistenceManager=await le.create(this,[w(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const r="function"===typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return _(s,this,"internal-error"),s.then(()=>r(this.currentUser)),"function"===typeof t?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ce(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={["X-Client-Version"]:this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function Te(e){return Object(i["q"])(e)}class Ie{constructor(e){this.auth=e,this.observer=null,this.addObserver=Object(i["l"])(e=>this.observer=e)}get next(){return _(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ke{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return v("not implemented")}_getIdTokenResponse(e){return v("not implemented")}_linkToIdToken(e,t){return v("not implemented")}_getReauthenticationResolver(e){return v("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Se(e,t){return L(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function xe(e,t){return M(e,"POST","/v1/accounts:signInWithPassword",R(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function je(e,t){return M(e,"POST","/v1/accounts:signInWithEmailLink",R(e,t))}async function Ne(e,t){return M(e,"POST","/v1/accounts:signInWithEmailLink",R(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae extends ke{constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Ae(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Ae(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return xe(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return je(e,{email:this._email,oobCode:this._password});default:f(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Se(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ne(e,{idToken:t,email:this._email,oobCode:this._password});default:f(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pe(e,t){return M(e,"POST","/v1/accounts:signInWithIdp",R(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Re="http://localhost";class Le extends ke{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Le(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):f("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,r=s(t,["providerId","signInMethod"]);if(!n||!i)return null;const o=new Le(n,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Pe(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Pe(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Pe(e,t)}buildRequest(){const e={requestUri:Re,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=Object(i["C"])(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function De(e,t){return L(e,"POST","/v1/accounts:sendVerificationCode",R(e,t))}async function Me(e,t){return M(e,"POST","/v1/accounts:signInWithPhoneNumber",R(e,t))}async function Fe(e,t){const n=await M(e,"POST","/v1/accounts:signInWithPhoneNumber",R(e,t));if(n.temporaryProof)throw q(e,"account-exists-with-different-credential",n);return n}const Ue={["USER_NOT_FOUND"]:"user-not-found"};async function qe(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return M(e,"POST","/v1/accounts:signInWithPhoneNumber",R(e,n),Ue)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He extends ke{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new He({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new He({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return Me(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return Fe(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return qe(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}=e;return n||t||i||r?new He({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ve(e){const t=Object(i["D"])(Object(i["p"])(e))["link"],n=t?Object(i["D"])(Object(i["p"])(t))["deep_link_id"]:null,r=Object(i["D"])(Object(i["p"])(e))["deep_link_id"],s=r?Object(i["D"])(Object(i["p"])(r))["link"]:null;return s||r||n||t||e}class Be{constructor(e){var t,n,r,s,o,a;const c=Object(i["D"])(Object(i["p"])(e)),l=null!==(t=c["apiKey"])&&void 0!==t?t:null,u=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=We(null!==(r=c["mode"])&&void 0!==r?r:null);_(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=Ve(e);try{return new Be(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ze{constructor(){this.providerId=ze.PROVIDER_ID}static credential(e,t){return Ae._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Be.parseLink(t);return _(n,"argument-error"),Ae._fromEmailAndCode(e,n.code,n.tenantId)}}ze.PROVIDER_ID="password",ze.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ze.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $e{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge extends $e{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ke extends Ge{constructor(){super("facebook.com")}static credential(e){return Le._fromParams({providerId:Ke.PROVIDER_ID,signInMethod:Ke.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ke.credentialFromTaggedObject(e)}static credentialFromError(e){return Ke.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ke.credential(e.oauthAccessToken)}catch(t){return null}}}Ke.FACEBOOK_SIGN_IN_METHOD="facebook.com",Ke.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ye extends Ge{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Le._fromParams({providerId:Ye.PROVIDER_ID,signInMethod:Ye.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ye.credentialFromTaggedObject(e)}static credentialFromError(e){return Ye.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Ye.credential(t,n)}catch(i){return null}}}Ye.GOOGLE_SIGN_IN_METHOD="google.com",Ye.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Je extends Ge{constructor(){super("github.com")}static credential(e){return Le._fromParams({providerId:Je.PROVIDER_ID,signInMethod:Je.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Je.credentialFromTaggedObject(e)}static credentialFromError(e){return Je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Je.credential(e.oauthAccessToken)}catch(t){return null}}}Je.GITHUB_SIGN_IN_METHOD="github.com",Je.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qe extends Ge{constructor(){super("twitter.com")}static credential(e,t){return Le._fromParams({providerId:Qe.PROVIDER_ID,signInMethod:Qe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Qe.credentialFromTaggedObject(e)}static credentialFromError(e){return Qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Qe.credential(t,n)}catch(i){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Xe(e,t){return M(e,"POST","/v1/accounts:signUp",R(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qe.TWITTER_SIGN_IN_METHOD="twitter.com",Qe.PROVIDER_ID="twitter.com";class Ze{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const r=await se._fromIdTokenResponse(e,n,i),s=et(n),o=new Ze({user:r,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=et(n);return new Ze({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function et(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tt extends i["c"]{constructor(e,t,n,i){var r;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,tt.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new tt(e,t,n,i)}}function nt(e,t,n,i){const r="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return r.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw tt._fromErrorAndOperation(e,n,t,i);throw n})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function it(e,t,n=!1){const i=await K(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Ze._forOperation(e,"link",i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function rt(e,t,n=!1){const{auth:i}=e,r="reauthenticate";try{const s=await K(e,nt(i,r,t,e),n);_(s.idToken,i,"internal-error");const o=$(s.idToken);_(o,i,"internal-error");const{sub:a}=o;return _(e.uid===a,i,"user-mismatch"),Ze._forOperation(e,r,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&f(i,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function st(e,t,n=!1){const i="signIn",r=await nt(e,i,t),s=await Ze._fromIdTokenResponse(e,i,r);return n||await e._updateCurrentUser(s.user),s}async function ot(e,t){return st(Te(e),t)}async function at(e,t,n){const i=Te(e),r=await Xe(i,{returnSecureToken:!0,email:t,password:n}),s=await Ze._fromIdTokenResponse(i,"signIn",r);return await i._updateCurrentUser(s.user),s}function ct(e,t,n){return ot(Object(i["q"])(e),ze.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(e,t,n,r){return Object(i["q"])(e).onAuthStateChanged(t,n,r)}function ut(e){return Object(i["q"])(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ht(e,t){return L(e,"POST","/v2/accounts/mfaEnrollment:start",R(e,t))}function dt(e,t){return L(e,"POST","/v2/accounts/mfaEnrollment:finalize",R(e,t))}new WeakMap;const ft="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ft,"1"),this.storage.removeItem(ft),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(){const e=Object(i["r"])();return de(e)||ve(e)}const gt=1e3,_t=10;class vt extends pt{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=mt()&&Oe(),this.fallbackToPolling=we(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},r=this.storage.getItem(n);ye()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,_t):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},gt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}vt.type="LOCAL";const bt=vt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends pt{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}yt.type="SESSION";const wt=yt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(e){return Promise.all(e.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const n=new Ct(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:r}=t.data,s=this.handlersMap[i];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(s).map(async e=>e(t.origin,r)),a=await Ot(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Et(e="",t=10){let n="";for(let i=0;i<t;i++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ct.receivers=[];class Tt{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,s;return new Promise((o,a)=>{const c=Et("",20);i.port1.start();const l=setTimeout(()=>{a(new Error("unsupported_event"))},n);s={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),r=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),o(t.data.response);break;default:clearTimeout(l),clearTimeout(r),a(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(){return window}function kt(e){It().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(){return"undefined"!==typeof It()["WorkerGlobalScope"]&&"function"===typeof It()["importScripts"]}async function xt(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function jt(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function Nt(){return St()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At="firebaseLocalStorageDb",Pt=1,Rt="firebaseLocalStorage",Lt="fbase_key";class Dt{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Mt(e,t){return e.transaction([Rt],t?"readwrite":"readonly").objectStore(Rt)}function Ft(){const e=indexedDB.deleteDatabase(At);return new Dt(e).toPromise()}function Ut(){const e=indexedDB.open(At,Pt);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(Rt,{keyPath:Lt})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains(Rt)?t(n):(n.close(),await Ft(),t(await Ut()))})})}async function qt(e,t,n){const i=Mt(e,!0).put({[Lt]:t,value:n});return new Dt(i).toPromise()}async function Ht(e,t){const n=Mt(e,!1).get(t),i=await new Dt(n).toPromise();return void 0===i?null:i.value}function Wt(e,t){const n=Mt(e,!0).delete(t);return new Dt(n).toPromise()}const Vt=800,Bt=3;class zt{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await Ut()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>Bt)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return St()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ct._getInstance(Nt()),this.receiver._subscribe("keyChanged",async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}}),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await xt(),!this.activeServiceWorker)return;this.sender=new Tt(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&jt()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ut();return await qt(e,ft,"1"),await Wt(e,ft),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>qt(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>Ht(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Wt(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=Mt(e,!1).getAll();return new Dt(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:i,value:r}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Vt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}zt.type="LOCAL";const $t=zt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(e,t){return L(e,"POST","/v2/accounts/mfaSignIn:start",R(e,t))}function Kt(e,t){return L(e,"POST","/v2/accounts/mfaSignIn:finalize",R(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Yt(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function Jt(e){return new Promise((t,n)=>{const i=document.createElement("script");i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=p("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",Yt().appendChild(i)})}function Qt(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Qt("rcb"),new x(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Xt="recaptcha";async function Zt(e,t,n){var i;const r=await n.verify();try{let s;if(_("string"===typeof r,e,"argument-error"),_(n.type===Xt,e,"argument-error"),s="string"===typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){_("enroll"===t.type,e,"internal-error");const n=await ht(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{_("signin"===t.type,e,"internal-error");const n=(null===(i=s.multiFactorHint)||void 0===i?void 0:i.uid)||s.multiFactorUid;_(n,e,"missing-multi-factor-info");const o=await Gt(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await De(e,{phoneNumber:s.phoneNumber,recaptchaToken:r});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class en{constructor(e){this.providerId=en.PROVIDER_ID,this.auth=Te(e)}verifyPhoneNumber(e,t){return Zt(this.auth,e,Object(i["q"])(t))}static credential(e,t){return He._fromVerification(e,t)}static credentialFromResult(e){const t=e;return en.credentialFromTaggedObject(t)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?He._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function tn(e,t){return t?w(t):(_(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */en.PROVIDER_ID="phone",en.PHONE_SIGN_IN_METHOD="phone";class nn extends ke{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Pe(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Pe(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Pe(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function rn(e){return st(e.auth,new nn(e),e.bypassAuthState)}function sn(e){const{auth:t,user:n}=e;return _(n,t,"internal-error"),rt(n,new nn(e),e.bypassAuthState)}async function on(e){const{auth:t,user:n}=e;return _(n,t,"internal-error"),it(n,new nn(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e,t,n,i,r=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:r,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return rn;case"linkViaPopup":case"linkViaRedirect":return on;case"reauthViaPopup":case"reauthViaRedirect":return sn;default:f(this.auth,"internal-error")}}resolve(e){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn=new x(2e3,1e4);class ln extends an{constructor(e,t,n,i,r){super(e,t,i,r),this.provider=n,this.authWindow=null,this.pollId=null,ln.currentPopupAction&&ln.currentPopupAction.cancel(),ln.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _(e,this.auth,"internal-error"),e}async onExecution(){b(1===this.filter.length,"Popup operations only handle one event");const e=Et();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(p(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ln.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(e,cn.get())};e()}}ln.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const un="pendingRedirect",hn=new Map;class dn extends an{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=hn.get(this.auth._key());if(!e){try{const t=await fn(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}hn.set(this.auth._key(),e)}return this.bypassAuthState||hn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function fn(e,t){const n=mn(t),i=pn(e);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}function pn(e){return w(e._redirectPersistence)}function mn(e){return ce(un,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gn(e,t,n=!1){const i=Te(e),r=tn(i,t),s=new dn(i,r,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _n=6e5;class vn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!wn(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!yn(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(p(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=_n&&this.cachedEventUids.clear(),this.cachedEventUids.has(bn(e))}saveEventToCache(e){this.cachedEventUids.add(bn(e)),this.lastProcessedEventTime=Date.now()}}function bn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function yn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function wn(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return yn(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function On(e,t={}){return L(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,En=/^https?/;async function Tn(e){if(e.config.emulator)return;const{authorizedDomains:t}=await On(e);for(const i of t)try{if(In(i))return}catch(n){}f(e,"unauthorized-domain")}function In(e){const t=E(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const r=new URL(e);return""===r.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!En.test(n))return!1;if(Cn.test(e))return i===e;const r=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+r+"|"+r+")$","i");return s.test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn=new x(3e4,6e4);function Sn(){const e=It().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function xn(e){return new Promise((t,n)=>{var i,r,s;function o(){Sn(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Sn(),n(p(e,"network-request-failed"))},timeout:kn.get()})}if(null===(r=null===(i=It().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=It().gapi)||void 0===s?void 0:s.load)){const t=Qt("iframefcb");return It()[t]=()=>{gapi.load?o():n(p(e,"network-request-failed"))},Jt("https://apis.google.com/js/api.js?onload="+t).catch(e=>n(e))}o()}}).catch(e=>{throw jn=null,e})}let jn=null;function Nn(e){return jn=jn||xn(e),jn}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An=new x(5e3,15e3),Pn="__/auth/iframe",Rn="emulator/auth/iframe",Ln={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Dn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Mn(e){const t=e.config;_(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?j(t,Rn):`https://${e.config.authDomain}/${Pn}`,s={apiKey:t.apiKey,appName:e.name,v:r["a"]},o=Dn.get(e.config.apiHost);o&&(s.eid=o);const a=e._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${Object(i["C"])(s).slice(1)}`}async function Fn(e){const t=await Nn(e),n=It().gapi;return _(n,e,"internal-error"),t.open({where:document.body,url:Mn(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ln,dontclear:!0},t=>new Promise(async(n,i)=>{await t.restyle({setHideOnLeave:!1});const r=p(e,"network-request-failed"),s=It().setTimeout(()=>{i(r)},An.get());function o(){It().clearTimeout(s),n(t)}t.ping(o).then(o,()=>{i(r)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},qn=500,Hn=600,Wn="_blank",Vn="http://localhost";class Bn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function zn(e,t,n,r=qn,s=Hn){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},Un),{width:r.toString(),height:s.toString(),top:o,left:a}),u=Object(i["r"])().toLowerCase();n&&(c=fe(u)?Wn:n),he(u)&&(t=t||Vn,l.scrollbars="yes");const h=Object.entries(l).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(be(u)&&"_self"!==c)return $n(t||"",c),new Bn(null);const d=window.open(t||"",c,h);_(d,e,"popup-blocked");try{d.focus()}catch(f){}return new Bn(d)}function $n(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn="__/auth/handler",Kn="emulator/auth/handler";function Yn(e,t,n,s,o,a){_(e.config.authDomain,e,"auth-domain-config-required"),_(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:r["a"],eventId:o};if(t instanceof $e){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",Object(i["u"])(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof Ge){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const l=c;for(const i of Object.keys(l))void 0===l[i]&&delete l[i];return`${Jn(e)}?${Object(i["C"])(l).slice(1)}`}function Jn({config:e}){return e.emulator?j(e,Kn):`https://${e.authDomain}/${Gn}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn="webStorageSupport";class Xn{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wt,this._completeRedirectFn=gn}async _openPopup(e,t,n,i){var r;b(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");const s=Yn(e,t,n,E(),i);return zn(e,s,Et())}async _openRedirect(e,t,n,i){return await this._originValidation(e),kt(Yn(e,t,n,E(),i)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(b(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await Fn(e),n=new vn(e);return t.register("authEvent",t=>{_(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const i=n.onEvent(t.authEvent);return{status:i?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(Qn,{type:Qn},n=>{var i;const r=null===(i=null===n||void 0===n?void 0:n[0])||void 0===i?void 0:i[Qn];void 0!==r&&t(!!r),f(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Tn(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return we()||de()||ve()}}const Zn=Xn;class ei{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return v("unexpected MultiFactorSessionType")}}}class ti extends ei{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new ti(e)}_finalizeEnroll(e,t,n){return dt(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Kt(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class ni{constructor(){}static assertion(e){return ti._fromCredential(e)}}ni.FACTOR_ID="phone";var ii="@firebase/auth",ri="0.19.8";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class si{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){_(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ai(e){Object(r["c"])(new a["a"]("auth",(t,{options:n})=>{const i=t.getProvider("app").getImmediate(),{apiKey:r,authDomain:s}=i.options;return(t=>{_(r&&!r.includes(":"),"invalid-api-key",{appName:t.name}),_(!(null===s||void 0===s?void 0:s.includes(":")),"argument-error",{appName:t.name});const i={apiKey:r,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ce(e)},o=new Ee(t,i);return C(o,n),o})(i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{const i=e.getProvider("auth-internal");i.initialize()})),Object(r["c"])(new a["a"]("auth-internal",e=>{const t=Te(e.getProvider("auth").getImmediate());return(e=>new si(e))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Object(r["f"])(ii,ri,oi(e)),Object(r["f"])(ii,ri,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(e=Object(r["d"])()){const t=Object(r["b"])(e,"auth");return t.isInitialized()?t.getImmediate():O(e,{popupRedirectResolver:Zn,persistence:[$t,bt,wt]})}ai("Browser")},f069:function(e,t,n){"use strict";var i=n("59ed"),r=function(e){var t,n;this.promise=new e((function(e,i){if(void 0!==t||void 0!==n)throw TypeError("Bad Promise constructor");t=e,n=i})),this.resolve=i(t),this.reject=i(n)};e.exports.f=function(e){return new r(e)}},f36a:function(e,t,n){var i=n("e330");e.exports=i([].slice)},f5df:function(e,t,n){var i=n("da84"),r=n("00ee"),s=n("1626"),o=n("c6b6"),a=n("b622"),c=a("toStringTag"),l=i.Object,u="Arguments"==o(function(){return arguments}()),h=function(e,t){try{return e[t]}catch(n){}};e.exports=r?o:function(e){var t,n,i;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=h(t=l(e),c))?n:u?o(t):"Object"==(i=o(t))&&s(t.callee)?"Arguments":i}},f772:function(e,t,n){var i=n("5692"),r=n("90e3"),s=i("keys");e.exports=function(e){return s[e]||(s[e]=r(e))}},fc6a:function(e,t,n){var i=n("44ad"),r=n("1d80");e.exports=function(e){return i(r(e))}},fdbc:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fdbf:function(e,t,n){var i=n("4930");e.exports=i&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},fea9:function(e,t,n){var i=n("da84");e.exports=i.Promise}}]);
//# sourceMappingURL=chunk-vendors.2788bf3d.js.map