/*!
 * vue-fullpage.js v0.1.7
 * https://github.com/alvarotrigo/vue-fullpage.js
 *
 * @license vue-fullpage is released under the MIT license but notice
 * fullPage.js is licensed under GPLv3 for open source use only
 * or Fullpage Commercial License for commercial use
 * http://alvarotrigo.com/fullPage/pricing/
 *
 * Copyright (C) 2018 http://alvarotrigo.com/vue-fullpage/ - A project by Alvaro Trigo
 */

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueFullpageJs"] = factory();
	else
		root["VueFullpageJs"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * fullPage 3.1.0 - Extensions 0.2.2
 * https://github.com/alvarotrigo/fullPage.js
 * @license http://alvarotrigo.com/fullPage/extensions/#license
 *
 * Copyright (C) 2018 alvarotrigo.com - A project by Alvaro Trigo
 */
!function(e,t,n,o,r){ true?!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){return e.fullpage=o(t,n),e.fullpage}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"==typeof exports?module.exports=o(t,n):t.fullpage=o(t,n)}(this,window,document,function(an,cn){"use strict";var sn="fullpage-wrapper",un="."+sn,fn="fp-responsive",dn="fp-notransition",vn="fp-destroyed",pn="fp-enabled",hn="fp-viewing",gn="active",mn="."+gn,Sn="fp-completely",bn="fp-section",wn="."+bn,yn=wn+mn,En="fp-tableCell",xn="."+En,Ln="fp-auto-height",An="fp-normal-scroll",Mn="fp-nav",Tn="#"+Mn,On="fp-tooltip",kn="fp-slide",Cn="."+kn,Hn=Cn+mn,zn="fp-slides",Rn="."+zn,In="fp-slidesContainer",Nn="."+In,Bn="fp-table",jn="fp-slidesNav",Pn="."+jn,Yn=Pn+" a",e="fp-controlArrow",Wn="."+e,Dn="fp-prev",Vn=Wn+".fp-prev",Zn=Wn+".fp-next";function Xn(e,t){an.console&&an.console[e]&&an.console[e]("fullPage: "+t)}function Gn(e,t){return(t=1<arguments.length?t:cn)?t.querySelectorAll(e):null}function Un(e){e=e||{};for(var t=1,n=arguments.length;t<n;++t){var o=arguments[t];if(o)for(var r in o)o.hasOwnProperty(r)&&("[object Object]"!==Object.prototype.toString.call(o[r])?e[r]=o[r]:e[r]=Un(e[r],o[r]))}return e}function Fn(e,t){return null!=e&&(e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className))}function _n(){return"innerHeight"in an?an.innerHeight:cn.documentElement.offsetHeight}function Qn(){return an.innerWidth}function Jn(e,t){var n;for(n in e=l(e),t)if(t.hasOwnProperty(n)&&null!==n)for(var o=0;o<e.length;o++){e[o].style[n]=t[n]}return e}function n(e,t,n){for(var o=e[n];o&&!yo(o,t);)o=o[n];return o}function Kn(e,t){return n(e,t,"previousElementSibling")}function $n(e,t){return n(e,t,"nextElementSibling")}function qn(e,t){if(null==t)return e.previousElementSibling;var n=qn(e);return n&&yo(n,t)?n:null}function eo(e,t){if(null==t)return e.nextElementSibling;var n=eo(e);return n&&yo(n,t)?n:null}function to(e){return e[e.length-1]}function no(e,t){e=io(e)?e[0]:e;for(var n=null!=t?Gn(t,e.parentNode):e.parentNode.childNodes,o=0,r=0;r<n.length;r++){if(n[r]==e)return o;1==n[r].nodeType&&o++}return-1}function l(e){return io(e)?e:[e]}function oo(e){e=l(e);for(var t=0;t<e.length;t++)e[t].style.display="none";return e}function ro(e){e=l(e);for(var t=0;t<e.length;t++)e[t].style.display="block";return e}function io(e){return"[object Array]"===Object.prototype.toString.call(e)||"[object NodeList]"===Object.prototype.toString.call(e)}function lo(e,t){e=l(e);for(var n=0;n<e.length;n++){var o=e[n];o.classList?o.classList.add(t):o.className+=" "+t}return e}function ao(e,t){e=l(e);for(var n=t.split(" "),o=0;o<n.length;o++){t=n[o];for(var r=0;r<e.length;r++){var i=e[r];i.classList?i.classList.remove(t):i.className=i.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")}}return e}function co(e,t){t.appendChild(e)}function o(e,t,n){var o;t=t||cn.createElement("div");for(var r=0;r<e.length;r++){var i=e[r];(n&&!r||!n)&&(o=t.cloneNode(!0),i.parentNode.insertBefore(o,i)),o.appendChild(i)}return e}function so(e,t){o(e,t,!0)}function uo(e,t){for("string"==typeof t&&(t=xo(t)),e.appendChild(t);e.firstChild!==t;)t.appendChild(e.firstChild)}function fo(e){for(var t=cn.createDocumentFragment();e.firstChild;)t.appendChild(e.firstChild);e.parentNode.replaceChild(t,e)}function vo(e,t){return e&&1===e.nodeType?yo(e,t)?e:vo(e.parentNode,t):null}function po(e,t){r(e,e.nextSibling,t)}function ho(e,t){r(e,e,t)}function r(e,t,n){io(n)||("string"==typeof n&&(n=xo(n)),n=[n]);for(var o=0;o<n.length;o++)e.parentNode.insertBefore(n[o],t)}function go(){var e=cn.documentElement;return(an.pageYOffset||e.scrollTop)-(e.clientTop||0)}function mo(t){return Array.prototype.filter.call(t.parentNode.children,function(e){return e!==t})}function So(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function bo(e){if("function"==typeof e)return!0;var t=Object.prototype.toString(e);return"[object Function]"===t||"[object GeneratorFunction]"===t}function wo(e,t,n){var o;n=void 0===n?{}:n,"function"==typeof an.CustomEvent?o=new CustomEvent(t,{detail:n}):(o=cn.createEvent("CustomEvent")).initCustomEvent(t,!0,!0,n),e.dispatchEvent(o)}function yo(e,t){return(e.matches||e.matchesSelector||e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.oMatchesSelector).call(e,t)}function Eo(e,t){if("boolean"==typeof t)for(var n=0;n<e.length;n++)e[n].style.display=t?"block":"none";return e}function xo(e){var t=cn.createElement("div");return t.innerHTML=e.trim(),t.firstChild}function Lo(e){e=l(e);for(var t=0;t<e.length;t++){var n=e[t];n&&n.parentElement&&n.parentNode.removeChild(n)}}function i(e,t,n){for(var o=e[n],r=[];o;)(yo(o,t)||null==t)&&r.push(o),o=o[n];return r}function Ao(e,t){return i(e,t,"nextElementSibling")}function Mo(e,t){return i(e,t,"previousElementSibling")}function To(e,t){e.insertBefore(t,e.firstChild)}return an.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||an;for(var n=0;n<this.length;n++)e.call(t,this[n],n,this)}),an.fp_utils={$:Gn,deepExtend:Un,hasClass:Fn,getWindowHeight:_n,css:Jn,until:n,prevUntil:Kn,nextUntil:$n,prev:qn,next:eo,last:to,index:no,getList:l,hide:oo,show:ro,isArrayOrList:io,addClass:lo,removeClass:ao,appendTo:co,wrap:o,wrapAll:so,wrapInner:uo,unwrap:fo,closest:vo,after:po,before:ho,insertBefore:r,getScrollTop:go,siblings:mo,preventDefault:So,isFunction:bo,trigger:wo,matches:yo,toggle:Eo,createElementFromHTML:xo,remove:Lo,filter:function(e,t){Array.prototype.filter.call(e,t)},untilAll:i,nextAll:Ao,prevAll:Mo,showError:Xn,prependTo:To,toggleClass:function(e,t,n){if(e.classList&&null==n)e.classList.toggle(t);else{var o=Fn(e,t);o&&null==n||!n?ao(e,t):(!o&&null==n||n)&&lo(e,t)}}},function(e,b){var n=b&&new RegExp("([\\d\\w]{8}-){3}[\\d\\w]{8}|^(?=.*?[A-Y])(?=.*?[a-y])(?=.*?[0-8])(?=.*?[#?!@$%^&*-]).{8,}$").test(b.licenseKey)||-1<cn.domain.indexOf("alvarotrigo.com"),s=Gn("html, body"),c=Gn("html")[0],g=Gn("body")[0];if(!Fn(c,pn)){var m={};b=Un({menu:!1,anchors:[],lockAnchors:!1,navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,hybrid:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1e3,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,continuousHorizontal:!1,scrollHorizontally:!1,interlockedSlides:!1,dragAndMove:!1,offsetSections:!1,resetSliders:!1,fadingEffect:!1,normalScrollElements:null,scrollOverflow:!1,scrollOverflowReset:!1,scrollOverflowHandler:an.fp_scrolloverflow?an.fp_scrolloverflow.iscrollHandler:null,scrollOverflowOptions:null,touchSensitivity:5,touchWrapper:"string"==typeof e?Gn(e)[0]:e,bigSectionsDestination:null,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!0,controlArrowColor:"#fff",verticalCentered:!0,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,responsiveWidth:0,responsiveHeight:0,responsiveSlides:!1,parallax:!1,parallaxOptions:{type:"reveal",percentage:62,property:"translate"},cards:!1,cardsOptions:{perspective:100,fadeContent:!0,fadeBackground:!0},sectionSelector:".section",slideSelector:".slide",v2compatible:!1,afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null,afterResponsive:null,lazyLoading:!0},b);var S,l,u,o,a=!1,r=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),i="ontouchstart"in an||0<navigator.msMaxTouchPoints||navigator.maxTouchPoints,w="string"==typeof e?Gn(e)[0]:e,y=_n(),f=Qn(),E=!1,t=!0,x=!0,d=[],v={m:{up:!0,down:!0,left:!0,right:!0}};v.k=Un({},v.m);var p,h,L,A,M,T,O,k,C,H,z=Vt(),R={touchmove:"ontouchmove"in an?"touchmove":z.move,touchstart:"ontouchstart"in an?"touchstart":z.down},I=!1,N=!Fn(g,ot("OHNsd3AtZnVsbHBhZ2UtanM5T20=")),B='a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',j=!1;try{var P=Object.defineProperty({},"passive",{get:function(){j=!0}});an.addEventListener("testPassive",null,P),an.removeEventListener("testPassive",null,P)}catch(e){}var Y,W,D,V=Un({},b),Z=!1,X=!0,G={};en(),an.fp_easings=Un(an.fp_easings,{easeInOutCubic:function(e,t,n,o){return(e/=o/2)<1?n/2*e*e*e+t:n/2*((e-=2)*e*e+2)+t}}),w&&(m.version="3.1.0",m.setAutoScrolling=re,m.setRecordHistory=ie,m.setScrollingSpeed=le,m.setFitToSection=ae,m.setLockAnchors=function(e){b.lockAnchors=e},m.setMouseWheelScrolling=ce,m.setAllowScrolling=se,m.setKeyboardScrolling=fe,m.moveSectionUp=de,m.moveSectionDown=ve,m.silentMoveTo=pe,m.moveTo=he,m.moveSlideRight=ge,m.moveSlideLeft=me,m.fitToSection=ze,m.reBuild=Se,m.setResponsive=we,m.getFullpageData=function(){return{options:b,internals:{container:w,canScroll:x,isScrollAllowed:v,getDestinationPosition:Ve,isTouch:i,c:at,getXmovement:Ht,removeAnimation:Ot,getTransforms:Ut,lazyLoad:Ke,addAnimation:Tt,performHorizontalMove:xt,landscapeScroll:wt,silentLandscapeScroll:Xt,keepSlidesPosition:De,silentScroll:Gt,styleSlides:Me,styleSection:Oe,scrollHandler:He,getEventsPage:Zt,getMSPointer:Vt,isReallyTouch:Be,usingExtension:Qt,toggleControlArrows:yt,touchStartHandler:je,touchMoveHandler:Ne}}},m.destroy=function(e){wo(w,"destroy",e),re(!1,"internal"),se(!0),ue(!1),fe(!1),lo(w,vn),[M,A,h,T,O,C,L,D].forEach(function(e){clearTimeout(e)}),an.removeEventListener("scroll",He),an.removeEventListener("hashchange",ut),an.removeEventListener("resize",Lt),cn.removeEventListener("keydown",dt),cn.removeEventListener("keyup",vt),["click","touchstart"].forEach(function(e){cn.removeEventListener(e,ye)}),["mouseenter","touchstart","mouseleave","touchend"].forEach(function(e){cn.removeEventListener(e,xe,!0)}),Jt("dragAndMove","destroy"),e&&(Gt(0),Gn("img[data-src], source[data-src], audio[data-src], iframe[data-src]",w).forEach(function(e){Qe(e,"src")}),Gn("img[data-srcset]").forEach(function(e){Qe(e,"srcset")}),Lo(Gn(Tn+", "+Pn+", "+Wn)),Jn(Gn(wn),{height:"","background-color":"",padding:""}),Jn(Gn(Cn),{width:""}),Jn(w,{height:"",position:"","-ms-touch-action":"","touch-action":""}),Jn(s,{overflow:"",height:""}),ao(c,pn),ao(g,fn),g.className.split(/\s+/).forEach(function(e){0===e.indexOf(hn)&&ao(g,e)}),Gn(wn+", "+Cn).forEach(function(e){b.scrollOverflowHandler&&b.scrollOverflow&&b.scrollOverflowHandler.remove(e),ao(e,Bn+" "+gn+" "+Sn);var t=e.getAttribute("data-fp-styles");t&&e.setAttribute("style",e.getAttribute("data-fp-styles")),Fn(e,bn)&&!Z&&e.removeAttribute("data-anchor")}),_t(w),[xn,Nn,Rn].forEach(function(e){Gn(e,w).forEach(function(e){fo(e)})}),an.scrollTo(0,0),[bn,kn,In].forEach(function(e){ao(Gn("."+e),e)}))},m.getActiveSection=function(){return new rn(Gn(yn)[0])},m.getActiveSlide=function(){return Ue(Gn(Hn,Gn(yn)[0])[0])},m.landscapeScroll=wt,m.test={top:"0px",translate3d:"translate3d(0px, 0px, 0px)",translate3dH:function(){for(var e=[],t=0;t<Gn(b.sectionSelector,w).length;t++)e.push("translate3d(0px, 0px, 0px)");return e}(),left:function(){for(var e=[],t=0;t<Gn(b.sectionSelector,w).length;t++)e.push(0);return e}(),options:b,setAutoScrolling:re},m.shared={afterRenderActions:Ce,isNormalScrollElement:!1},an.fullpage_api=m,an.fullpage_extensions=!0,b.$&&Object.keys(m).forEach(function(e){b.$.fn.fullpage[e]=m[e]}),Ae("continuousHorizontal"),Ae("scrollHorizontally"),Ae("resetSliders"),Ae("interlockedSlides"),Ae("responsiveSlides"),Ae("fadingEffect"),Ae("dragAndMove"),Ae("offsetSections"),Ae("scrollOverflowReset"),Ae("parallax"),Ae("cards"),Ae("dropEffect"),Jt("dragAndMove","init"),b.css3&&(b.css3=function(){var e,t=cn.createElement("p"),n={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};for(var o in t.style.display="block",cn.body.insertBefore(t,null),n)void 0!==t.style[o]&&(t.style[o]="translate3d(1px,1px,1px)",e=an.getComputedStyle(t).getPropertyValue(n[o]));return cn.body.removeChild(t),void 0!==e&&0<e.length&&"none"!==e}()),b.scrollBar=b.scrollBar||b.hybrid,function(){if(!b.anchors.length){var e="[data-anchor]",t=Gn(b.sectionSelector.split(",").join(e+",")+e,w);t.length&&t.length===Gn(b.sectionSelector,w).length&&(Z=!0,t.forEach(function(e){b.anchors.push(e.getAttribute("data-anchor").toString())}))}if(!b.navigationTooltips.length){var n="[data-tooltip]",o=Gn(b.sectionSelector.split(",").join(n+",")+n,w);o.length&&o.forEach(function(e){b.navigationTooltips.push(e.getAttribute("data-tooltip").toString())})}}(),function(){Jn(w,{height:"100%",position:"relative"}),lo(w,sn),lo(c,pn),y=_n(),ao(w,vn),lo(Gn(b.sectionSelector,w),bn),lo(Gn(b.slideSelector,w),kn),Jt("parallax","init");for(var e=Gn(wn),t=0;t<e.length;t++){var n=t,o=e[t],r=Gn(Cn,o),i=r.length;o.setAttribute("data-fp-styles",o.getAttribute("style")),Oe(o,n),l=o,a=n,void 0!==b.anchors[a]&&Fn(l,gn)&&kt(b.anchors[a],a),b.menu&&b.css3&&null!=vo(Gn(b.menu)[0],un)&&Gn(b.menu).forEach(function(e){g.appendChild(e)}),0<i?Me(o,r,i):b.verticalCentered&&zt(o)}var l,a;b.fixedElements&&b.css3&&Gn(b.fixedElements).forEach(function(e){g.appendChild(e)}),b.navigation&&function(){var e=cn.createElement("div");e.setAttribute("id",Mn);var t=cn.createElement("ul");e.appendChild(t),co(e,g);var n=Gn(Tn)[0];lo(n,"fp-"+b.navigationPosition),b.showActiveTooltip&&lo(n,"fp-show-active");for(var o="",r=0;r<Gn(wn).length;r++){var i="";b.anchors.length&&(i=b.anchors[r]),o+='<li><a href="#'+i+'"><span class="fp-sr-only">'+ke(r,"Section")+"</span><span></span></a>";var l=b.navigationTooltips[r];void 0!==l&&""!==l&&(o+='<div class="'+On+" fp-"+b.navigationPosition+'">'+l+"</div>"),o+="</li>"}Gn("ul",n)[0].innerHTML=o,lo(Gn("a",Gn("li",Gn(Tn)[0])[no(Gn(yn)[0],wn)]),gn)}(),Gn('iframe[src*="youtube.com/embed/"]',w).forEach(function(e){var t,n,o;n="enablejsapi=1",o=(t=e).getAttribute("src"),t.setAttribute("src",o+(/\?/.test(o)?"&":"?")+n)}),Jt("fadingEffect","apply"),Jt("dropEffect","init"),Jt("cards","init"),b.scrollOverflow&&(p=b.scrollOverflowHandler.init(b))}(),se(!0),ue(!0),re(b.autoScrolling,"internal"),Mt(),Dt(),"complete"===cn.readyState&&st(),an.addEventListener("load",st),b.scrollOverflow||Ce(),function(){for(var e=1;e<4;e++)C=setTimeout(Le,350*e)}(),N||at("l"),an.addEventListener("scroll",He),an.addEventListener("hashchange",ut),an.addEventListener("focus",mt),an.addEventListener("blur",St),an.addEventListener("resize",Lt),cn.addEventListener("keydown",dt),cn.addEventListener("keyup",vt),["click","touchstart"].forEach(function(e){cn.addEventListener(e,ye)}),b.normalScrollElements&&(["mouseenter","touchstart"].forEach(function(e){Ee(e,!1)}),["mouseleave","touchend"].forEach(function(e){Ee(e,!0)})),Jt("dragAndMove","turnOffTouch"));var U,F,_,Q=!1,J=0,K=0,$=0,q=0,ee=(new Date).getTime(),te=0,ne=0,oe=y;return m}function re(e,t){e||Gt(0),qt("autoScrolling",e,t);var n=Gn(yn)[0];if(b.autoScrolling&&!b.scrollBar)Jn(s,{overflow:"hidden",height:"100%"}),ie(V.recordHistory,"internal"),Jn(w,{"-ms-touch-action":"none","touch-action":"none"}),null!=n&&Gt(n.offsetTop);else if(Jn(s,{overflow:"visible",height:"initial"}),ie(!!b.autoScrolling&&V.recordHistory,"internal"),Jn(w,{"-ms-touch-action":"","touch-action":""}),_t(w),null!=n){var o=Fe(n.offsetTop);o.element.scrollTo(0,o.options)}wo(w,"setAutoScrolling",e)}function ie(e,t){qt("recordHistory",e,t)}function le(e,t){"internal"!==t&&Qt("fadingEffect")&&m.fadingEffect.update(e),Qt("cards")&&m.cards.update(e),qt("scrollingSpeed",e,t)}function ae(e,t){qt("fitToSection",e,t)}function ce(e){e?(function(){var e,t="";an.addEventListener?e="addEventListener":(e="attachEvent",t="on");var n="onwheel"in cn.createElement("div")?"wheel":void 0!==cn.onmousewheel?"mousewheel":"DOMMouseScroll",o=!!j&&{passive:!1};"DOMMouseScroll"==n?cn[e](t+"MozMousePixelScroll",Ye,o):cn[e](t+n,Ye,o)}(),w.addEventListener("mousedown",pt),w.addEventListener("mouseup",ht)):(cn.addEventListener?(cn.removeEventListener("mousewheel",Ye,!1),cn.removeEventListener("wheel",Ye,!1),cn.removeEventListener("MozMousePixelScroll",Ye,!1)):cn.detachEvent("onmousewheel",Ye),w.removeEventListener("mousedown",pt),w.removeEventListener("mouseup",ht))}function se(t,e){void 0!==e?(e=e.replace(/ /g,"").split(",")).forEach(function(e){Ft(t,e,"m")}):Ft(t,"all","m"),wo(w,"setAllowScrolling",{value:t,directions:e})}function ue(e){e?(ce(!0),function(){if((r||i)&&(!Qt("dragAndMove")||"mouseonly"===b.dragAndMove)){b.autoScrolling&&(g.removeEventListener(R.touchmove,Ie,{passive:!1}),g.addEventListener(R.touchmove,Ie,{passive:!1}));var e=b.touchWrapper;e.removeEventListener(R.touchstart,je),e.removeEventListener(R.touchmove,Ne,{passive:!1}),e.addEventListener(R.touchstart,je),e.addEventListener(R.touchmove,Ne,{passive:!1})}}()):(ce(!1),function(){if(r||i){b.autoScrolling&&(g.removeEventListener(R.touchmove,Ne,{passive:!1}),g.removeEventListener(R.touchmove,Ie,{passive:!1}));var e=b.touchWrapper;e.removeEventListener(R.touchstart,je),e.removeEventListener(R.touchmove,Ne,{passive:!1})}}())}function fe(t,e){void 0!==e?(e=e.replace(/ /g,"").split(",")).forEach(function(e){Ft(t,e,"k")}):(Ft(t,"all","k"),b.keyboardScrolling=t)}function de(){var e=Kn(Gn(yn)[0],wn);e||!b.loopTop&&!b.continuousVertical||(e=to(Gn(wn))),null!=e&&Ze(e,null,!0)}function ve(){var e=$n(Gn(yn)[0],wn);e||!b.loopBottom&&!b.continuousVertical||(e=Gn(wn)[0]),null!=e&&Ze(e,null,!1)}function pe(e,t){le(0,"internal"),he(e,t),le(V.scrollingSpeed,"internal")}function he(e,t){var n=Nt(e);void 0!==t?Bt(e,t):null!=n&&Ze(n)}function ge(e){We("right",e)}function me(e){We("left",e)}function Se(e){if(!Fn(w,vn)){E=!0,y=_n(),f=Qn();for(var t=Gn(wn),n=0;n<t.length;++n){var o=t[n],r=Gn(Rn,o)[0],i=Gn(Cn,o);b.verticalCentered&&Jn(Gn(xn,o),{height:Rt(o)+"px"}),Jn(o,{height:Te(o)+"px"}),1<i.length&&wt(r,Gn(Hn,r)[0])}b.scrollOverflow&&p.createScrollBarForAll();var l=no(Gn(yn)[0],wn);!l||Qt("fadingEffect")||Qt("dropEffect")||pe(l+1),E=!1,bo(b.afterResize)&&e&&b.afterResize.call(w,an.innerWidth,an.innerHeight),bo(b.afterReBuild)&&!e&&b.afterReBuild.call(w),wo(w,"afterRebuild")}}function be(){return Fn(g,fn)}function we(e){var t=be();e?t||(re(!1,"internal"),ae(!1,"internal"),oo(Gn(Tn)),lo(g,fn),bo(b.afterResponsive)&&b.afterResponsive.call(w,e),Jt("responsiveSlides","toSections"),wo(w,"afterResponsive",e),b.scrollOverflow&&p.createScrollBarForAll()):t&&(re(V.autoScrolling,"internal"),ae(V.autoScrolling,"internal"),ro(Gn(Tn)),ao(g,fn),bo(b.afterResponsive)&&b.afterResponsive.call(w,e),Jt("responsiveSlides","toSlides"),wo(w,"afterResponsive",e))}function ye(e){var t=e.target;t&&vo(t,Tn+" a")?function(e){So(e);var t=no(vo(this,Tn+" li"));Ze(Gn(wn)[t])}.call(t,e):yo(t,".fp-tooltip")?function(){wo(qn(this),"click")}.call(t):yo(t,Wn)?function(){var e=vo(this,wn);Fn(this,Dn)?v.m.left&&me(e):v.m.right&&ge(e)}.call(t,e):yo(t,Yn)||null!=vo(t,Yn)?function(e){So(e);var t=Gn(Rn,vo(this,wn))[0],n=Gn(Cn,t)[no(vo(this,"li"))];wt(t,n)}.call(t,e):vo(t,b.menu+" [data-menuanchor]")&&function(e){!Gn(b.menu)[0]||!b.lockAnchors&&b.anchors.length||(So(e),he(this.getAttribute("data-menuanchor")))}.call(t,e)}function Ee(e,t){cn["fp_"+e]=t,cn.addEventListener(e,xe,!0)}function xe(e){var t=e.type,o=!1,r=b.scrollOverflow,i="mouseleave"===t?e.toElement||e.relatedTarget:e.target;if(i==cn||!i)return ue(!0),void(r&&b.scrollOverflowHandler.setIscroll(i,!0));"touchend"===t&&(X=!1,setTimeout(function(){X=!0},800)),("mouseenter"!==t||X)&&(b.normalScrollElements.split(",").forEach(function(e){if(!o){var t=yo(i,e),n=vo(i,e);(t||n)&&(m.shared.isNormalScrollElement||(ue(!1),r&&b.scrollOverflowHandler.setIscroll(i,!1)),m.shared.isNormalScrollElement=!0,o=!0)}}),!o&&m.shared.isNormalScrollElement&&(ue(!0),r&&b.scrollOverflowHandler.setIscroll(i,!0),m.shared.isNormalScrollElement=!1))}function Le(){var e=_n(),t=Qn();y===e&&f===t||(y=e,f=t,Se(!0))}function Ae(e){var t=["NTY3YnVuZGxlNzg5","NTU1S2V5Nzc3"],n=ot(t[0]),o=ot(t[1]),r=void 0!==b[n+o],i="fp_"+e+"Extension";G[e]=r?b[n+o]:b[e+o],m[e]=void 0!==an[i]?new an[i]:null,m[e]&&m[e].c(e)}function Me(e,t,n){var o=100*n,r=100/n,i=cn.createElement("div");i.className=zn,so(t,i);var l,a,c=cn.createElement("div");c.className=In,so(t,c),Jn(Gn(Nn,e),{width:o+"%"}),1<n&&(b.controlArrows&&(l=e,a=[xo('<div class="fp-controlArrow fp-prev"></div>'),xo('<div class="fp-controlArrow fp-next"></div>')],po(Gn(Rn,l)[0],a),"#fff"!==b.controlArrowColor&&(Jn(Gn(Zn,l),{"border-color":"transparent transparent transparent "+b.controlArrowColor}),Jn(Gn(Vn,l),{"border-color":"transparent "+b.controlArrowColor+" transparent transparent"})),b.loopHorizontal||oo(Gn(Vn,l))),b.slidesNavigation&&function(e,t){co(xo('<div class="'+jn+'"><ul></ul></div>'),e);var n=Gn(Pn,e)[0];lo(n,"fp-"+b.slidesNavPosition);for(var o=0;o<t;o++){var r=Gn(Cn,e)[o];co(xo('<li><a href="#"><span class="fp-sr-only">'+ke(o,"Slide",r)+"</span><span></span></a></li>"),Gn("ul",n)[0])}Jn(n,{"margin-left":"-"+n.innerWidth/2+"px"}),lo(Gn("a",Gn("li",n)[0]),gn)}(e,n)),t.forEach(function(e){Jn(e,{width:r+"%"}),b.verticalCentered&&zt(e)});var s=Gn(Hn,e)[0];null!=s&&(0!==no(Gn(yn),wn)||0===no(Gn(yn),wn)&&0!==no(s))?(Xt(s,"internal"),lo(s,"fp-initial")):lo(t[0],gn)}function Te(e){return b.offsetSections&&m.offsetSections?Math.round(m.offsetSections.getWindowHeight(e)):_n()}function Oe(e,t){t||null!=Gn(yn)[0]||lo(e,gn),o=Gn(yn)[0],Jn(e,{height:Te(e)+"px"}),b.paddingTop&&Jn(e,{"padding-top":b.paddingTop}),b.paddingBottom&&Jn(e,{"padding-bottom":b.paddingBottom}),void 0!==b.sectionsColor[t]&&Jn(e,{"background-color":b.sectionsColor[t]}),void 0!==b.anchors[t]&&e.setAttribute("data-anchor",b.anchors[t])}function ke(e,t,n){var o="Section"===t?b.anchors[e]:n.getAttribute("data-anchor");return b.navigationTooltips[e]||o||t+" "+(e+1)}function Ce(){var e,t,n=Gn(yn)[0];lo(n,Sn),Ke(n),Je(),qe(n),b.scrollOverflow&&b.scrollOverflowHandler.afterLoad(),e=ft(),t=Nt(e.section),e.section&&t&&(void 0===t||no(t)!==no(o))||!bo(b.afterLoad)||Xe("afterLoad",{activeSection:n,element:n,direction:null,anchorLink:n.getAttribute("data-anchor"),sectionIndex:no(n,wn)}),bo(b.afterRender)&&Xe("afterRender"),wo(w,"afterRender")}function He(){var e;if(wo(w,"onScroll"),!E&&(!b.autoScrolling||b.scrollBar||Qt("dragAndMove"))&&!$t()){var t=Qt("dragAndMove")?Math.abs(m.dragAndMove.getCurrentScroll()):go(),n=0,o=t+_n()/2,r=(Qt("dragAndMove")?m.dragAndMove.getDocumentHeight():g.offsetHeight-_n())===t,i=Gn(wn);if(r)n=i.length-1;else if(t)for(var l=0;l<i.length;++l)i[l].offsetTop<=o&&(n=l);else n=0;if(!Fn(e=i[n],gn)){Q=!0;var a,c,s=Gn(yn)[0],u=no(s,wn)+1,f=Ct(e),d=e.getAttribute("data-anchor"),v=no(e,wn)+1,p=Gn(Hn,e)[0],h={activeSection:s,sectionIndex:v-1,anchorLink:d,element:e,leavingSection:u,direction:f};p&&(c=p.getAttribute("data-anchor"),a=no(p)),x&&(lo(e,gn),ao(mo(e),gn),Jt("parallax","afterLoad"),bo(b.onLeave)&&Xe("onLeave",h),bo(b.afterLoad)&&Xe("afterLoad",h),Qt("resetSliders")&&m.resetSliders.apply({localIsResizing:E,leavingSection:u}),tt(s),Ke(e),qe(e),kt(d,v-1),b.anchors.length&&(S=d),Pt(a,c,d)),clearTimeout(T),T=setTimeout(function(){Q=!1},100)}b.fitToSection&&(clearTimeout(O),O=setTimeout(function(){b.fitToSection&&Gn(yn)[0].offsetHeight<=y&&ze()},b.fitToSectionDelay))}}function ze(){x&&(E=!0,Ze(Gn(yn)[0]),E=!1)}function Re(e){if(v.m[e]){var t="down"===e?ve:de;if(Qt("scrollHorizontally")&&(t=m.scrollHorizontally.getScrollSection(e,t)),b.scrollOverflow){var n=b.scrollOverflowHandler.scrollable(Gn(yn)[0]),o="down"===e?"bottom":"top";if(null!=n){if(!b.scrollOverflowHandler.isScrolled(o,n))return!0;t()}else t()}else t()}}function Ie(e){b.autoScrolling&&Be(e)&&v.m.up&&So(e)}function Ne(e){var t=vo(e.target,wn)||Gn(yn)[0];if(Be(e)){b.autoScrolling&&So(e);var n=Zt(e);$=n.y,q=n.x,Gn(Rn,t).length&&Math.abs(K-q)>Math.abs(J-$)?!a&&Math.abs(K-q)>Qn()/100*b.touchSensitivity&&(q<K?v.m.right&&ge(t):v.m.left&&me(t)):b.autoScrolling&&x&&Math.abs(J-$)>an.innerHeight/100*b.touchSensitivity&&($<J?Re("down"):J<$&&Re("up"))}}function Be(e){return void 0===e.pointerType||"mouse"!=e.pointerType}function je(e){if(b.fitToSection&&(Y=!1),Be(e)){var t=Zt(e);J=t.y,K=t.x}}function Pe(e,t){for(var n=0,o=e.slice(Math.max(e.length-t,1)),r=0;r<o.length;r++)n+=o[r];return Math.ceil(n/t)}function Ye(e){var t=(new Date).getTime(),n=Fn(Gn(".fp-completely")[0],An);if(!v.m.down&&!v.m.up)return So(e),!1;if(b.autoScrolling&&!u&&!n){var o=(e=e||an.event).wheelDelta||-e.deltaY||-e.detail,r=Math.max(-1,Math.min(1,o)),i=void 0!==e.wheelDeltaX||void 0!==e.deltaX,l=Math.abs(e.wheelDeltaX)<Math.abs(e.wheelDelta)||Math.abs(e.deltaX)<Math.abs(e.deltaY)||!i;149<d.length&&d.shift(),d.push(Math.abs(o)),b.scrollBar&&So(e);var a=t-ee;if(ee=t,200<a&&(d=[]),x&&!Kt()){var c=Pe(d,10);Pe(d,70)<=c&&l&&Re(r<0?"down":"up")}return!1}b.fitToSection&&(Y=!1)}function We(e,t){var n=null==t?Gn(yn)[0]:t,o=Gn(Rn,n)[0];if(!(null==o||Kt()||a||Gn(Cn,o).length<2)){var r=Gn(Hn,o)[0],i=null;if(null==(i="left"===e?Kn(r,Cn):$n(r,Cn))){if(!b.loopHorizontal)return;var l=mo(r);i="left"===e?l[l.length-1]:l[0]}a=!m.test.isTesting,wt(o,i,e)}}function De(){for(var e=Gn(Hn),t=0;t<e.length;t++)Xt(e[t],"internal")}function Ve(e){var t=e.offsetHeight,n=e.offsetTop,o=n,r=Qt("dragAndMove")&&m.dragAndMove.isGrabbing?m.dragAndMove.isScrollingDown():te<n,i=o-y+t,l=b.bigSectionsDestination;return y<t?(r||l)&&"bottom"!==l||(o=i):(r||E&&null==eo(e))&&(o=i),b.offsetSections&&m.offsetSections&&(o=m.offsetSections.getSectionPosition(r,o,e)),te=o}function Ze(e,t,n){if(null!=e){var o,r,i={element:e,callback:t,isMovementUp:n,dtop:Ve(e),yMovement:Ct(e),anchorLink:e.getAttribute("data-anchor"),sectionIndex:no(e,wn),activeSlide:Gn(Hn,e)[0],activeSection:Gn(yn)[0],leavingSection:no(Gn(yn),wn)+1,localIsResizing:E};if(!(i.activeSection==e&&!E||b.scrollBar&&go()===i.dtop&&!Fn(e,Ln))){if(null!=i.activeSlide&&(o=i.activeSlide.getAttribute("data-anchor"),r=no(i.activeSlide)),!i.localIsResizing){var l=i.yMovement;if(void 0!==n&&(l=n?"up":"down"),i.direction=l,void 0!==an.fp_dropEffectExtension&&m.dropEffect.onLeave(i),bo(b.onLeave)&&!1===Xe("onLeave",i))return}var a;Jt("parallax","apply",i),Jt("cards","apply",i),Jt("dropEffect","apply",i),b.autoScrolling&&b.continuousVertical&&void 0!==i.isMovementUp&&(!i.isMovementUp&&"up"==i.yMovement||i.isMovementUp&&"down"==i.yMovement)&&((c=i).isMovementUp?ho(Gn(yn)[0],Ao(c.activeSection,wn)):po(Gn(yn)[0],Mo(c.activeSection,wn).reverse()),Gt(Gn(yn)[0].offsetTop),De(),c.wrapAroundElements=c.activeSection,c.dtop=c.element.offsetTop,c.yMovement=Ct(c.element),c.leavingSection=no(c.activeSection,wn)+1,c.sectionIndex=no(c.element,wn),wo(Gn(un)[0],"onContinuousVertical",c),i=c),Qt("scrollOverflowReset")&&m.scrollOverflowReset.setPrevious(i.activeSection),i.localIsResizing||tt(i.activeSection),b.scrollOverflow&&b.scrollOverflowHandler.beforeLeave(),Qt("dropEffect")&&b.dropEffect||(lo(e,gn),ao(mo(e),gn)),Ke(e),b.scrollOverflow&&b.scrollOverflowHandler.onLeave(),x=m.test.isTesting,Pt(r,o,i.anchorLink,i.sectionIndex),function(e){var t=b.scrollingSpeed<700,n=t?700:b.scrollingSpeed;if(b.css3&&b.autoScrolling&&!b.scrollBar){var o="translate3d(0px, -"+Math.round(e.dtop)+"px, 0px)";It(o,!0),b.scrollingSpeed?(clearTimeout(A),A=setTimeout(function(){_e(e),x=!t},b.scrollingSpeed)):_e(e)}else{var r=Fe(e.dtop);m.test.top=-e.dtop+"px",Jn(s,{"scroll-behavior":"unset"}),tn(r.element,r.options,b.scrollingSpeed,function(){b.scrollBar?setTimeout(function(){_e(e)},30):(_e(e),x=!t)})}t&&(clearTimeout(D),D=setTimeout(function(){x=!0},n))}(i),S=i.anchorLink,kt(i.anchorLink,null==(a=i).wrapAroundElements?a.sectionIndex:a.isMovementUp?Gn(wn).length-1:0)}}var c}function Xe(e,t){var n,o,r,i,l=(o=e,r=t,(i=b.v2compatible?{afterRender:function(){return[w]},onLeave:function(){return[r.activeSection,r.leavingSection,r.sectionIndex+1,r.direction]},afterLoad:function(){return[r.element,r.anchorLink,r.sectionIndex+1]},afterSlideLoad:function(){return[r.destiny,r.anchorLink,r.sectionIndex+1,r.slideAnchor,r.slideIndex]},onSlideLeave:function(){return[r.prevSlide,r.anchorLink,r.sectionIndex+1,r.prevSlideIndex,r.direction,r.slideIndex]}}:{afterRender:function(){return{section:Ge(Gn(yn)[0]),slide:Ue(Gn(Hn,Gn(yn)[0])[0])}},onLeave:function(){return{origin:Ge(r.activeSection),destination:Ge(r.element),direction:r.direction}},afterLoad:function(){return i.onLeave()},afterSlideLoad:function(){return{section:Ge(r.section),origin:Ue(r.prevSlide),destination:Ue(r.destiny),direction:r.direction}},onSlideLeave:function(){return i.afterSlideLoad()}})[o]());if(b.v2compatible){if(!1===b[e].apply(l[0],l.slice(1)))return!1}else if(wo(w,e,l),!1===b[e].apply(l[Object.keys(l)[0]],(n=l,Object.keys(n).map(function(e){return n[e]}))))return!1;return!0}function Ge(e){return e?new rn(e):null}function Ue(e){return e?new ln(e):null}function Fe(e){var t={};return b.autoScrolling&&!b.scrollBar?(t.options=-e,t.element=Gn(un)[0]):(t.options=e,t.element=an),t}function _e(e){var t;null!=(t=e).wrapAroundElements&&(t.isMovementUp?ho(Gn(wn)[0],t.wrapAroundElements):po(Gn(wn)[Gn(wn).length-1],t.wrapAroundElements),Gt(Gn(yn)[0].offsetTop),De(),t.sectionIndex=no(t.element,wn),t.leavingSection=no(t.activeSection,wn)+1),bo(b.afterLoad)&&!e.localIsResizing&&Xe("afterLoad",e),b.scrollOverflow&&b.scrollOverflowHandler.afterLoad(),Jt("parallax","afterLoad"),Jt("dropEffect","afterLoad"),Jt("scrollOverflowReset","reset"),Qt("resetSliders")&&m.resetSliders.apply(e),e.localIsResizing||qe(e.element),lo(e.element,Sn),ao(mo(e.element),Sn),Je(),x=!0,bo(e.callback)&&e.callback()}function Qe(e,t){e.setAttribute(t,e.getAttribute("data-"+t)),e.removeAttribute("data-"+t)}function Je(){var e=Gn(".fp-auto-height")[0]||be()&&Gn(".fp-auto-height-responsive")[0];b.lazyLoading&&e&&Gn(wn+":not("+mn+")").forEach(function(e){var t,n,o;t=e.getBoundingClientRect(),n=t.top,o=t.bottom,(n+2<y&&0<n||2<o&&o<y)&&Ke(e)})}function Ke(o){b.lazyLoading&&Gn("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]",nt(o)).forEach(function(n){if(["src","srcset"].forEach(function(e){var t=n.getAttribute("data-"+e);null!=t&&t&&(Qe(n,e),n.addEventListener("load",function(){$e(o)}))}),yo(n,"source")){var e=vo(n,"video, audio");e&&(e.load(),e.onloadeddata=function(){$e(o)})}})}function $e(e){b.scrollOverflow&&(clearTimeout(W),W=setTimeout(function(){Fn(g,fn)||p.createScrollBar(e)},200))}function qe(e){var t=nt(e);Gn("video, audio",t).forEach(function(e){e.hasAttribute("data-autoplay")&&"function"==typeof e.play&&e.play()}),Gn('iframe[src*="youtube.com/embed/"]',t).forEach(function(e){e.hasAttribute("data-autoplay")&&et(e),e.onload=function(){e.hasAttribute("data-autoplay")&&et(e)}})}function et(e){e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")}function tt(e){var t=nt(e);Gn("video, audio",t).forEach(function(e){e.hasAttribute("data-keepplaying")||"function"!=typeof e.pause||e.pause()}),Gn('iframe[src*="youtube.com/embed/"]',t).forEach(function(e){/youtube\.com\/embed\//.test(e.getAttribute("src"))&&!e.hasAttribute("data-keepplaying")&&e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")})}function nt(e){var t=Gn(Hn,e);return t.length&&(e=t[0]),e}function ot(e){var s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function o(e){var t,n,o,r,i,l,a="",c=0;for(e=e.replace(/[^A-Za-z0-9+/=]/g,"");c<e.length;)t=s.indexOf(e.charAt(c++))<<2|(r=s.indexOf(e.charAt(c++)))>>4,n=(15&r)<<4|(i=s.indexOf(e.charAt(c++)))>>2,o=(3&i)<<6|(l=s.indexOf(e.charAt(c++))),a+=String.fromCharCode(t),64!=i&&(a+=String.fromCharCode(n)),64!=l&&(a+=String.fromCharCode(o));return a=function(e){for(var t,n="",o=0,r=0,i=0;o<e.length;)(r=e.charCodeAt(o))<128?(n+=String.fromCharCode(r),o++):191<r&&r<224?(i=e.charCodeAt(o+1),n+=String.fromCharCode((31&r)<<6|63&i),o+=2):(i=e.charCodeAt(o+1),t=e.charCodeAt(o+2),n+=String.fromCharCode((15&r)<<12|(63&i)<<6|63&t),o+=3);return n}(a)}function r(e){return e.slice(3).slice(0,-3)}return function(e){var t=e.split("_");if(1<t.length){var n=t[1];return e.replace(r(t[1]),"").split("_")[0]+"_"+o(n.slice(3).slice(0,-3))}return r(e)}(o(e))}function rt(g){var m=void 0!==G[g]&&G[g].length,e=[],S=!1;return io(G[g])?e=G[g]:e.push(G[g]),e.forEach(function(e){var t=function(){if(cn.domain.length){for(var e=cn.domain.replace(/^(www\.)/,"").split(".");2<e.length;)e.shift();return e.join(".").replace(/(^\.*)|(\.*$)/g,"")}return""}(),n=["MTM0bG9jYWxob3N0MjM0","MTM0MC4xMjM0","MTM0anNoZWxsLm5ldDIzNA==","UDdDQU5ZNlNN","NTY3YnVuZGxlNzg5","NTU1S2V5Nzc3"],o=ot(n[0]),r=ot(n[1]),i=ot(n[2]),l=ot(n[3]),a=ot(n[4]),c=ot(n[5]),s=void 0!==b[a+c];m=m||s;var u=[o,r,i].indexOf(t)<0&&0!==t.length;if(!m&&!s&&u)return!1;var f=m?ot(e):"",d=1<(f=f.split("_")).length&&-1<f[1].indexOf(g,f[1].length-g.length),v=1<f.length&&-1<f[1].toLowerCase().indexOf(a),p=f[0].indexOf(t,f[0].length-t.length)<0,h=d||v;S=S||!(p&&u&&l!=f[0])&&h||!u}),S}function it(e){e.forEach(function(e){if(e.removedNodes[0]&&e.removedNodes[0].isEqualNode(F)){clearTimeout(_);var t=ot("bDIwc2V0VGltZW91dDAzbA==");_=an[t](lt,900)}})}function lt(){I=!1}function at(e){if(F=cn.createElement("div"),U=ot("MTIzPGRpdj48YSBocmVmPSJodHRwOi8vYWx2YXJvdHJpZ28uY29tL2Z1bGxQYWdlL2V4dGVuc2lvbnMvIiBzdHlsZT0iY29sb3I6ICNmZmYgIWltcG9ydGFudDsgdGV4dC1kZWNvcmF0aW9uOm5vbmUgIWltcG9ydGFudDsiPlVubGljZW5zZWQgZnVsbFBhZ2UuanMgRXh0ZW5zaW9uPC9hPjwvZGl2PjEyMw=="),N||(U=U.replace("extensions/","").replace("Extension","")),F.innerHTML=U,F=F.firstChild,"MutationObserver"in an&&new MutationObserver(it).observe(cn.body,{childList:!0,subtree:!1}),(!N||Qt(e)&&m[e])&&(!rt(e)||!N)){ct();var t=ot("MzQ1c2V0SW50ZXJ2YWwxMjM=");an[t](ct,2e3)}}function ct(){F&&(I||(Math.random()<.5?To(g,F):co(F,g),I=!0),F.setAttribute("style",ot("MTIzei1pbmRleDo5OTk5OTk5O3Bvc2l0aW9uOmZpeGVkO3RvcDoyMHB4O2JvdHRvbTphdXRvO2xlZnQ6MjBweDtyaWdodDphdXRvO2JhY2tncm91bmQ6cmVkO3BhZGRpbmc6N3B4IDE1cHg7Zm9udC1zaXplOjE0cHg7Zm9udC1mYW1pbHk6YXJpYWw7Y29sb3I6I2ZmZjtkaXNwbGF5OmlubGluZS1ibG9jazt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO29wYWNpdHk6MTtoZWlnaHQ6YXV0bzt3aWR0aDphdXRvO3pvb206MTttYXJnaW46YXV0bztib3JkZXI6bm9uZTt2aXNpYmlsaXR5OnZpc2libGU7Y2xpcC1wYXRoOm5vbmU7MTIz").replace(/;/g,ot("MTIzICFpbXBvcnRhbnQ7MzQ1"))))}function st(){var e=ft(),t=e.section,n=e.slide;t&&(b.animateAnchor?Bt(t,n):pe(t,n))}function ut(e){if(!Q&&!b.lockAnchors){var t=ft(),n=t.section,o=t.slide,r=void 0===S,i=void 0===S&&void 0===o&&!a;n&&n.length&&(n&&n!==S&&!r||i&&!Kt()||!a&&l!=o&&!Kt())&&Bt(n,o)}}function ft(){var e,t,n=an.location.hash;if(n.length){var o=n.replace("#","").split("/"),r=-1<n.indexOf("#/");e=r?"/"+o[1]:decodeURIComponent(o[0]);var i=r?o[2]:o[1];i&&i.length&&(t=decodeURIComponent(i))}return{section:e,slide:t}}function dt(e){clearTimeout(k);var t=cn.activeElement,n=e.keyCode;9===n?function(e){var t,n,o,r,i,l,a,c=e.shiftKey,s=cn.activeElement,u=gt(nt(Gn(yn)[0]));function f(e){return So(e),u[0]?u[0].focus():null}(t=e,n=gt(cn),o=n.indexOf(cn.activeElement),r=t.shiftKey?o-1:o+1,i=n[r],l=Ue(vo(i,Cn)),a=Ge(vo(i,wn)),l||a)&&(s?null==vo(s,yn+","+yn+" "+Hn)&&(s=f(e)):f(e),(!c&&s==u[u.length-1]||c&&s==u[0])&&So(e))}(e):yo(t,"textarea")||yo(t,"input")||yo(t,"select")||"true"===t.getAttribute("contentEditable")||""===t.getAttribute("contentEditable")||!b.keyboardScrolling||!b.autoScrolling||(-1<[40,38,32,33,34].indexOf(n)&&So(e),u=e.ctrlKey,k=setTimeout(function(){!function(e){var t=e.shiftKey,n=cn.activeElement,o=yo(n,"video")||yo(n,"audio");if(x||!([37,39].indexOf(e.keyCode)<0))switch(e.keyCode){case 38:case 33:v.k.up&&de();break;case 32:if(t&&v.k.up&&!o){de();break}case 40:case 34:v.k.down&&(32===e.keyCode&&o||ve());break;case 36:v.k.up&&he(1);break;case 35:v.k.down&&he(Gn(wn).length);break;case 37:v.k.left&&me();break;case 39:v.k.right&&ge()}}(e)},150))}function vt(e){t&&(u=e.ctrlKey)}function pt(e){2==e.which&&(ne=e.pageY,w.addEventListener("mousemove",bt))}function ht(e){2==e.which&&w.removeEventListener("mousemove",bt)}function gt(e){return[].slice.call(Gn(B,e)).filter(function(e){return"-1"!==e.getAttribute("tabindex")&&null!==e.offsetParent})}function mt(){t=!0}function St(){u=t=!1}function bt(e){b.autoScrolling&&(x&&(e.pageY<ne&&v.m.up?de():e.pageY>ne&&v.m.down&&ve()),ne=e.pageY)}function wt(e,t,n){var o=vo(e,wn),r={slides:e,destiny:t,direction:n,destinyPos:{left:t.offsetLeft},slideIndex:no(t),section:o,sectionIndex:no(o,wn),anchorLink:o.getAttribute("data-anchor"),slidesNav:Gn(Pn,o)[0],slideAnchor:Wt(t),prevSlide:Gn(Hn,o)[0],prevSlideIndex:no(Gn(Hn,o)[0]),localIsResizing:E};r.xMovement=Ht(r.prevSlideIndex,r.slideIndex),r.direction=r.direction?r.direction:r.xMovement,r.localIsResizing||(x=!1),Jt("parallax","applyHorizontal",r),Jt("cards","apply",r),Jt("dropEffect","apply",r),b.onSlideLeave&&!r.localIsResizing&&"none"!==r.xMovement&&bo(b.onSlideLeave)&&!1===Xe("onSlideLeave",r)?a=!1:(Qt("dropEffect")&&b.dropEffect||(lo(t,gn),ao(mo(t),gn)),r.localIsResizing||(tt(r.prevSlide),Ke(t)),yt(r),Fn(o,gn)&&!r.localIsResizing&&Pt(r.slideIndex,r.slideAnchor,r.anchorLink,r.sectionIndex),m.continuousHorizontal&&m.continuousHorizontal.apply(r),$t()?Et(r):xt(e,r,!0),b.interlockedSlides&&m.interlockedSlides&&(Qt("continuousHorizontal")&&void 0!==n&&n!==r.xMovement||m.interlockedSlides.apply(r)))}function yt(e){!b.loopHorizontal&&b.controlArrows&&(Eo(Gn(Vn,e.section),0!==e.slideIndex),Eo(Gn(Zn,e.section),null!=eo(e.destiny)))}function Et(e){var t,n;m.continuousHorizontal&&m.continuousHorizontal.afterSlideLoads(e),t=e.slidesNav,n=e.slideIndex,b.slidesNavigation&&null!=t&&(ao(Gn(mn,t),gn),lo(Gn("a",Gn("li",t)[n]),gn)),e.localIsResizing||(Jt("parallax","afterSlideLoads"),Jt("scrollOverflowReset","setPrevious",e.prevSlide),Jt("scrollOverflowReset","reset"),bo(b.afterSlideLoad)&&Xe("afterSlideLoad",e),x=!0,qe(e.destiny)),a=!1,Qt("interlockedSlides")&&m.interlockedSlides.apply(e)}function xt(e,t,n){var o=t.destinyPos;if(b.css3){var r="translate3d(-"+Math.round(o.left)+"px, 0px, 0px)";m.test.translate3dH[t.sectionIndex]=r,Qt("dragAndMove")&&void 0!==t.isInterlockedSlide||Tt(Gn(Nn,e)),Jn(Gn(Nn,e),Ut(r)),M=setTimeout(function(){n&&Et(t)},b.scrollingSpeed)}else m.test.left[t.sectionIndex]=Math.round(o.left),tn(e,Math.round(o.left),b.scrollingSpeed,function(){n&&Et(t)})}function Lt(){clearTimeout(h),h=setTimeout(function(){for(var e=0;e<4;e++)L=setTimeout(At,200*e)},200)}function At(){if(E=!0,wo(w,"onResize"),Mt(),r){var e=cn.activeElement;if(!yo(e,"textarea")&&!yo(e,"input")&&!yo(e,"select")){var t=_n();Math.abs(t-oe)>20*Math.max(oe,t)/100&&(Se(!0),oe=t)}}else Le();E=!1}function Mt(){var e=b.responsive||b.responsiveWidth,t=b.responsiveHeight,n=e&&an.innerWidth<e,o=t&&an.innerHeight<t;e&&t?we(n||o):e?we(n):t&&we(o)}function Tt(e){var t="all "+b.scrollingSpeed+"ms "+b.easingcss3;return ao(e,dn),Jn(e,{"-webkit-transition":t,transition:t})}function Ot(e){return lo(e,dn)}function kt(e,t){var n,o,r,i;n=e,Gn(b.menu).forEach(function(e){b.menu&&null!=e&&(ao(Gn(mn,e),gn),lo(Gn('[data-menuanchor="'+n+'"]',e),gn))}),o=e,r=t,i=Gn(Tn)[0],b.navigation&&null!=i&&"none"!==i.style.display&&(ao(Gn(mn,Gn(Tn)[0]),gn),lo(o?Gn('a[href="#'+o+'"]',Gn(Tn)[0]):Gn("a",Gn("li",Gn(Tn)[0])[r]),gn))}function Ct(e){var t=no(Gn(yn)[0],wn),n=no(e,wn);return t==n?"none":n<t?"up":"down"}function Ht(e,t){return e==t?"none":t<e?"left":"right"}function zt(e){if(!Fn(e,Bn)){var t=cn.createElement("div");t.className=En,t.style.height=Rt(e)+"px",lo(e,Bn),uo(e,t)}}function Rt(e){var t=Te(e);if(b.paddingTop||b.paddingBottom){var n=e;Fn(n,bn)||(n=vo(e,wn)),t-=parseInt(getComputedStyle(n)["padding-top"])+parseInt(getComputedStyle(n)["padding-bottom"])}return t}function It(e,t){t?Tt(w):Ot(w),clearTimeout(H),Jn(w,Ut(e)),m.test.translate3d=e,H=setTimeout(function(){ao(w,dn)},10)}function Nt(e){var t=Gn(wn+'[data-anchor="'+e+'"]',w)[0];if(!t){var n=void 0!==e?e-1:0;t=Gn(wn)[n]}return t}function Bt(e,t){var n=Nt(e);if(null!=n){var o,r,i,l=(null==(i=Gn(Cn+'[data-anchor="'+(o=t)+'"]',r=n)[0])&&(o=void 0!==o?o:0,i=Gn(Cn,r)[o]),i);Wt(n)===S||Fn(n,gn)?jt(l):Ze(n,function(){jt(l)})}}function jt(e){null!=e&&wt(vo(e,Rn),e)}function Pt(e,t,n,o){var r="";b.anchors.length&&!b.lockAnchors&&(e?(null!=n&&(r=n),null==t&&(t=e),Yt(r+"/"+(l=t))):(null!=e&&(l=t),Yt(n))),Dt()}function Yt(e){if(b.recordHistory)location.hash=e;else if(r||i)an.history.replaceState(void 0,void 0,"#"+e);else{var t=an.location.href.split("#")[0];an.location.replace(t+"#"+e)}}function Wt(e){if(!e)return null;var t=e.getAttribute("data-anchor"),n=no(e);return null==t&&(t=n),t}function Dt(){var e=Gn(yn)[0],t=Gn(Hn,e)[0],n=Wt(e),o=Wt(t),r=String(n);t&&(r=r+"-"+o),r=r.replace("/","-").replace("#","");var i=new RegExp("\\b\\s?"+hn+"-[^\\s]+\\b","g");g.className=g.className.replace(i,""),lo(g,hn+"-"+r)}function Vt(){return an.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"}}function Zt(e){var t=[];return t.y=void 0!==e.pageY&&(e.pageY||e.pageX)?e.pageY:e.touches[0].pageY,t.x=void 0!==e.pageX&&(e.pageY||e.pageX)?e.pageX:e.touches[0].pageX,i&&Be(e)&&b.scrollBar&&void 0!==e.touches&&(t.y=e.touches[0].pageY,t.x=e.touches[0].pageX),t}function Xt(e,t){le(0,"internal"),void 0!==t&&(E=!0),wt(vo(e,Rn),e),void 0!==t&&(E=!1),le(V.scrollingSpeed,"internal")}function Gt(e){var t=Math.round(e);if(b.css3&&b.autoScrolling&&!b.scrollBar)It("translate3d(0px, -"+t+"px, 0px)",!1);else if(b.autoScrolling&&!b.scrollBar)Jn(w,{top:-t+"px"}),m.test.top=-t+"px";else{var n=Fe(t);nn(n.element,n.options)}}function Ut(e){return{"-webkit-transform":e,"-moz-transform":e,"-ms-transform":e,transform:e}}function Ft(t,e,n){"all"!==e?v[n][e]=t:Object.keys(v[n]).forEach(function(e){v[n][e]=t})}function _t(e){return Jn(e,{"-webkit-transition":"none",transition:"none"})}function Qt(e){return null!==b[e]&&"[object Array]"===Object.prototype.toString.call(b[e])?b[e].length&&m[e]:b[e]&&m[e]}function Jt(e,t,n){if(Qt(e))return m[e][t](n)}function Kt(){return Qt("dragAndMove")&&m.dragAndMove.isAnimating}function $t(){return Qt("dragAndMove")&&m.dragAndMove.isGrabbing}function qt(e,t,n){b[e]=t,"internal"!==n&&(V[e]=t)}function en(){var e=b.licenseKey,t="font-size: 15px;background:yellow;";n?e&&e.length<20&&(console.warn("%c This website was made using fullPage.js slider. More info on the following website:",t),console.warn("%c https://alvarotrigo.com/fullPage/",t)):(b.continuousVertical&&(b.loopTop||b.loopBottom)&&(b.continuousVertical=!1,Xn("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),!b.scrollOverflow||!b.scrollBar&&b.autoScrolling||Xn("warn","Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"),!b.continuousVertical||!b.scrollBar&&b.autoScrolling||(b.continuousVertical=!1,Xn("warn","Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),b.scrollOverflow&&null==b.scrollOverflowHandler&&(b.scrollOverflow=!1,Xn("error","The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")),b.anchors.forEach(function(t){var e=[].slice.call(Gn("[name]")).filter(function(e){return e.getAttribute("name")&&e.getAttribute("name").toLowerCase()==t.toLowerCase()}),n=[].slice.call(Gn("[id]")).filter(function(e){return e.getAttribute("id")&&e.getAttribute("id").toLowerCase()==t.toLowerCase()});if(n.length||e.length){Xn("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).");var o=n.length?"id":"name";(n.length||e.length)&&Xn("error",'"'+t+'" is is being used by another element `'+o+"` property")}}))}function tn(t,n,o,r){var e,i=(e=t).self!=an&&Fn(e,zn)?e.scrollLeft:!b.autoScrolling||b.scrollBar?go():e.offsetTop,l=n-i,a=0;Y=!0;var c=function(){if(Y){var e=n;a+=20,o&&(e=an.fp_easings[b.easing](a,i,l,o)),nn(t,e),a<o?setTimeout(c,20):void 0!==r&&r()}else a<o&&r()};c()}function nn(e,t){!b.autoScrolling||b.scrollBar||e.self!=an&&Fn(e,zn)?e.self!=an&&Fn(e,zn)?e.scrollLeft=t:e.scrollTo(0,t):e.style.top=t+"px"}function on(e,t){this.anchor=e.getAttribute("data-anchor"),this.item=e,this.index=no(e,t),this.isLast=this.index===e.parentElement.querySelectorAll(t).length-1,this.isFirst=!this.index}function rn(e){on.call(this,e,wn)}function ln(e){on.call(this,e,Cn)}en()}}),window.jQuery&&window.fullpage&&function(t,n){"use strict";t&&n?t.fn.fullpage=function(e){e=t.extend({},e,{$:t});new n(this[0],e)}:window.fp_utils.showError("error","jQuery is required to use the jQuery fullpage adapter!")}(window.jQuery,window.fullpage);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(2),
  /* template */
  __webpack_require__(6),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/alvarotrigolopez/Sites/vue-fullpage.js/src/FullPage.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] FullPage.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-103a4254", Component.options)
  } else {
    hotAPI.reload("data-v-103a4254", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _fullpageExtensions = __webpack_require__(0);

var _fullpageExtensions2 = _interopRequireDefault(_fullpageExtensions);

var _constants = __webpack_require__(3);

var constants = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } //
//
//
//
//
//

function camelToKebab(string) {
  return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

exports.default = {
  methods: {
    build: function build() {
      var slideSelector = this.options.slideSelector || '.slide';
      var sectionSelector = this.options.sectionSelector || '.section';
      var activeSectionIndex = fp_utils.index(document.querySelector(sectionSelector + '.active'));
      var activeSlide = document.querySelector(sectionSelector + '.active ' + slideSelector + '.active');
      var activeSlideIndex = activeSlide ? fp_utils.index(activeSlide) : -1;

      this.destroy();

      if (activeSectionIndex > -1) {
        fp_utils.addClass(document.querySelectorAll(sectionSelector)[activeSectionIndex], 'active');
      }

      if (activeSlideIndex > -1) {
        fp_utils.addClass(activeSlide, 'active');
      }

      this.init();
    },
    destroy: function destroy() {
      if (typeof fullpage_api !== 'undefined' && typeof fullpage_api.destroy !== 'undefined') {
        fullpage_api.destroy('all');
      }
    },
    emitEvent: function emitEvent(name, args) {
      // Emit event on Vue way
      this.$emit.apply(this, [camelToKebab(name)].concat(_toConsumableArray(args)));

      // Run event's handler with non Vue way
      if (this.options.hasOwnProperty(name)) {
        this.options[name].apply(this, args);
      }
    },
    init: function init() {
      // eslint-disable-next-line
      this.api = new _fullpageExtensions2.default(this.$refs.fullpage, this.options);
    }
  },
  mounted: function mounted() {
    !this.skipInit && this.init();
  },
  beforeDestroy: function beforeDestroy() {
    if (typeof this.api !== 'undefined') {
      this.destroy();
    }
  },
  data: function data() {
    var _this = this;

    return {
      events: constants.EVENTS.reduce(function (eventsHandlers, event) {
        return _extends({}, eventsHandlers, _defineProperty({}, event, function () {
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this.emitEvent(event, args);
        }));
      }, {}),
      api: undefined
    };
  },

  props: {
    options: {
      type: Object,
      required: true
    },
    skipInit: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    options: {
      deep: true,
      handler: function handler() {
        this.build();
      }
    }
  }
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var EVENTS = exports.EVENTS = ['afterLoad', 'onLeave', 'afterRender', 'afterResize', 'afterResponsive', 'afterSlideLoad', 'onSlideLeave'];

var METHODS = exports.METHODS = ['moveSectionUp', 'moveSectionDown', 'moveTo', 'silentMoveTo', 'moveSlideRight', 'moveSlideLeft', 'setAutoScrolling', 'setFitToSection', 'fitToSection', 'setLockAnchors', 'setAllowScrolling', 'setKeyboardScrolling', 'setRecordHistory', 'setScrollingSpeed', 'destroy', 'reBuild', 'setResponsive', 'responsiveSlidesToSections', 'responsiveSlidesToSlides'];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.version = exports.FullPage = undefined;

var _FullPage = __webpack_require__(1);

var _FullPage2 = _interopRequireDefault(_FullPage);

var _fullpageExtensions = __webpack_require__(0);

var _fullpageExtensions2 = _interopRequireDefault(_fullpageExtensions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function plugin(Vue) {
  Vue.component('full-page', _FullPage2.default);
}

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin);
}
if (!window.fullpage_api) {
  window.fullpage = _fullpageExtensions2.default;
}

exports.default = plugin;

var version = '__VERSION__';
// Export all components too
exports.FullPage = _FullPage2.default;
exports.version = version;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "fullpage"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-103a4254", module.exports)
  }
}

/***/ })
/******/ ]);
});