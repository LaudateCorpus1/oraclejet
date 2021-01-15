!function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function e(t,n){return(e=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,n)}function n(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var n,i=u(t);if(e){var l=u(this).constructor;n=Reflect.construct(i,arguments,l)}else n=i.apply(this,arguments);return o(this,n)}}function o(t,e){return!e||"object"!==l(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}
/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */define(["exports","ojs/ojdomutils","ojs/ojgestureutils","ojs/ojvcomponent-element","ojs/ojvmenu","ojs/ojvcomponent-binding","ojs/ojthemeutils"],function(o,u,r,a,s,c,h){"use strict";var d,p=function(t,e,n,o){var u,i=arguments.length,r=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"===("undefined"==typeof Reflect?"undefined":l(Reflect))&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(u=t[a])&&(r=(i<3?u(r):i>3?u(e,n,r):u(e,n))||r);return i>3&&r&&Object.defineProperty(e,n,r),r},f=function t(){i(this,t),this.disabled=!1,this.display="all",this.translations={}};p([a.dynamicDefault(function(){return(h.parseJSONFromFontFamily("oj-button-option-defaults")||{}).chroming||"solid"})],f.prototype,"chroming",void 0),o.Button2=d=function(o){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&e(t,n)}(f,o);var l,c,h,p=n(f);function f(t){var e;return i(this,f),(e=p.call(this,t))._handleContextMenuGesture=function(t,n){var o={event:t,eventType:n};t.preventDefault(),e.updateState({contextMenuTriggerEvent:o})},e._onCloseCallback=function(t){e.state.contextMenuTriggerEvent&&e.updateState({contextMenuTriggerEvent:null})},e.state={},e}return l=f,h=[{key:"updateStateFromProps",value:function(t){return t.disabled?{contextMenuTriggerEvent:null}:null}}],(c=[{key:"render",value:function(){var t=this,e=this.props,n=e.children,o=this._processIcon(e.startIcon,"oj-button-icon oj-start"),u=this._processIcon(e.endIcon,"oj-button-icon oj-end"),i=this.props["aria-label"],l=this.props["aria-labelledby"],r=i||l,s=e.title,c=null,h=null,d=null,p=e.label||n;p&&(s=s||e.label||this.state.derivedTitle,"icons"===e.display&&(o||u)?e.label?r||(i=e.label):(r||(l=d=this.uniqueId()+"|text"),c=a.h("span",{class:"oj-button-text oj-helper-hidden-accessible",id:d},p)):(r||(l=d=this.uniqueId()+"|text"),c=a.h("span",{class:"oj-button-text",id:d},p))),c=a.h("span",{ref:function(e){return t._defaultSlotRef=e}},c);var f,v=a.h("div",{class:"oj-button-label"},o,c,u);e.disabled?f=a.h("button",{class:"oj-button-button","aria-labelledby":l,"aria-label":i,disabled:!0},v):(h=this._handleClick,f=a.h("button",{class:"oj-button-button",ref:function(e){return t._buttonRef=e},"aria-labelledby":l,"aria-label":i,onTouchstart:this._handleTouchstart,onTouchend:this._handleTouchend,onTouchcancel:this._handleTouchend,onMouseenter:this._handleMouseenter,onMouseleave:this._handleMouseleave,onMousedown:this._handleMousedown,onMouseup:this._handleMouseup,onKeydown:this._handleKeydown,onKeyup:this._handleKeyup,onFocusin:this._handleFocusin,onFocusout:this._handleFocusout,onFocus:this._handleFocus,onBlur:this._handleBlur},v));var y=this._getRootClasses(o,u);return a.h("oj-button",{class:y,title:s,onClick:h,ref:function(e){return t._rootRef=e}},f,this._renderContextMenu())}},{key:"_renderContextMenu",value:function(){return this.state.contextMenuTriggerEvent&&this.props.contextMenu?a.h(s.VMenu,{eventObj:this.state.contextMenuTriggerEvent,launcherElement:this._buttonRef,onCloseCallback:this._onCloseCallback},[this.props.contextMenu]):null}},{key:"_processIcon",value:function(t,e){var n,o=this;return Array.isArray(t)?n=t.map(function(t){return o._processIcon(t,e)}):t&&(n=a.h("span",{class:e},t)),n}},{key:"_getRootClasses",value:function(t,e){var n=!0,o="oj-button "+d._chromingMap[this.props.chroming];return o+=" "+this._getDisplayOptionClass(t,e),this.props.disabled?(n=!1,o+=" oj-disabled"):(o+=" oj-enabled",this.state.hover&&(n=!1,o+=" oj-hover"),this.state.active&&(n=!1,o+=" oj-active"),this.state.focus&&(n&&(o+=" oj-focus-only"),n=!1,o+=" oj-focus",u.recentPointer()||(o+=" oj-focus-highlight"))),n&&(o+=" oj-default"),o}},{key:"_getDisplayOptionClass",value:function(t,e){var n=t&&e,o=t||e,u="icons"===this.props.display;return o?u?n?"oj-button-icons-only":"oj-button-icon-only":n?"oj-button-text-icons":t?"oj-button-text-icon-start":"oj-button-text-icon-end":"oj-button-text-only"}},{key:"_addMutationObserver",value:function(){var t=this;this._mutationObserver||(this._mutationObserver=new MutationObserver(function(){var e=t._getTextContent();e!=t.state.derivedTitle&&t.updateState({derivedTitle:e})}),this._mutationObserver.observe(this._defaultSlotRef,{subtree:!0,characterData:!0}))}},{key:"_needsContextMenuDetection",value:function(t){return t.contextMenu&&!t.disabled}},{key:"mounted",value:function(){this._updateDerivedTitle(),this._needsContextMenuDetection(this.props)&&r.startDetectContextMenuGesture(this._rootRef,this._handleContextMenuGesture)}},{key:"updated",value:function(t){this._updateDerivedTitle(),this._updateContextMenuDetection(t)}},{key:"_updateDerivedTitle",value:function(){var t,e=this.props;"icons"!==e.display||!e.startIcon&&!e.endIcon||e.label||e.title||(t=this._getTextContent(),this._addMutationObserver()),t!=this.state.derivedTitle&&this.updateState({derivedTitle:t})}},{key:"_updateContextMenuDetection",value:function(t){var e=this._needsContextMenuDetection(t),n=this._needsContextMenuDetection(this.props);e!=n&&(n?r.startDetectContextMenuGesture(this._rootRef,this._handleContextMenuGesture):r.stopDetectContextMenuGesture(this._rootRef))}},{key:"_getTextContent",value:function(){var t=this._defaultSlotRef.textContent;return""!==(t=t.trim())?t:null}},{key:"unmounted",value:function(){this._mutationObserver&&(this._mutationObserver.disconnect(),this._mutationObserver=null),r.stopDetectContextMenuGesture(this._rootRef)}},{key:"_handleTouchstart",value:function(t){this.updateState({active:!0})}},{key:"_handleTouchend",value:function(t){this.updateState({active:!1})}},{key:"_handleMouseenter",value:function(t){u.recentTouchEnd()||(this===d._lastActive&&this.updateState({active:!0}),this.updateState({hover:!0}))}},{key:"_handleMouseleave",value:function(t){this.updateState({hover:!1,active:!1})}},{key:"_handleMousedown",value:function(t){1!==t.which||u.recentTouchEnd()||(this.updateState({active:!0}),d._lastActive=this,document.addEventListener("mouseup",function t(){d._lastActive=null,document.removeEventListener("mouseup",t,!0)},!0))}},{key:"_handleMouseup",value:function(t){this.updateState({active:!1})}},{key:"_handleClick",value:function(t){var e,n;t.detail<=1&&(null===(n=(e=this.props).onOjAction)||void 0===n||n.call(e,{originalEvent:t}))}},{key:"_handleKeydown",value:function(t){32!==t.keyCode&&13!==t.keyCode||this.updateState({active:!0})}},{key:"_handleKeyup",value:function(t){this.updateState({active:!1})}},{key:"_handleFocusin",value:function(t){this.updateState({focus:!0})}},{key:"_handleFocusout",value:function(t){this.updateState({focus:!1})}},{key:"_handleFocus",value:function(t){var e;null===(e=this._rootRef)||void 0===e||e.dispatchEvent(new FocusEvent("focus",{relatedTarget:t.relatedTarget}))}},{key:"_handleBlur",value:function(t){var e;this.updateState({active:!1}),null===(e=this._rootRef)||void 0===e||e.dispatchEvent(new FocusEvent("blur",{relatedTarget:t.relatedTarget}))}},{key:"refresh",value:function(){this.render()}},{key:"focus",value:function(){var t;null===(t=this._buttonRef)||void 0===t||t.focus()}},{key:"blur",value:function(){var t;null===(t=this._buttonRef)||void 0===t||t.blur()}}])&&t(l.prototype,c),h&&t(l,h),f}(a.ElementVComponent),o.Button2._chromingMap={solid:"oj-button-full-chrome",outlined:"oj-button-outlined-chrome",borderless:"oj-button-half-chrome",full:"oj-button-full-chrome",half:"oj-button-half-chrome",callToAction:"oj-button-cta-chrome"},o.Button2.metadata={extension:{_DEFAULTS:f,_ROOT_PROPS_MAP:{title:1,"aria-label":1,"aria-labelledby":1}},slots:{"":{},startIcon:{},endIcon:{},contextMenu:{}},properties:{disabled:{type:"boolean",value:!1},display:{type:"string",enumValues:["all","icons"],value:"all"},label:{type:"string"},translations:{type:"object|null",value:{}},chroming:{type:"string",enumValues:["borderless","callToAction","full","half","outlined","solid"],binding:{consume:{name:"containerChroming"}}}},events:{ojAction:{bubbles:!0}},methods:{refresh:{},focus:{},blur:{}}},p([a.listener({passive:!0})],o.Button2.prototype,"_handleTouchstart",null),p([a.listener()],o.Button2.prototype,"_handleTouchend",null),p([a.listener()],o.Button2.prototype,"_handleMouseenter",null),p([a.listener()],o.Button2.prototype,"_handleMouseleave",null),p([a.listener()],o.Button2.prototype,"_handleMousedown",null),p([a.listener()],o.Button2.prototype,"_handleMouseup",null),p([a.listener()],o.Button2.prototype,"_handleClick",null),p([a.listener()],o.Button2.prototype,"_handleKeydown",null),p([a.listener()],o.Button2.prototype,"_handleKeyup",null),p([a.listener()],o.Button2.prototype,"_handleFocusin",null),p([a.listener()],o.Button2.prototype,"_handleFocusout",null),p([a.listener()],o.Button2.prototype,"_handleFocus",null),p([a.listener()],o.Button2.prototype,"_handleBlur",null),o.Button2=d=p([a.customElement("oj-button")],o.Button2),Object.defineProperty(o,"__esModule",{value:!0})})}();
//# sourceMappingURL=ojbutton2.js.map