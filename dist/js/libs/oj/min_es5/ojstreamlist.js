!function(){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function o(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}function r(e,t,n){return(r="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=u(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,o=u(e);if(t){var r=u(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return l(this,n)}}function l(t,n){return!n||"object"!==e(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t):n}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}
/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */define(["exports","ojs/ojvcomponent-element","ojs/ojdatacollection-common","ojs/ojvcollection","ojs/ojcore-base","ojs/ojkeyset","ojs/ojtreedataprovider","ojs/ojanimation","ojs/ojcontext","ojs/ojthemeutils","ojs/ojdomutils"],function(n,i,l,c,d,h,f,p,y,v,m){"use strict";d=d&&Object.prototype.hasOwnProperty.call(d,"default")?d.default:d,y=y&&Object.prototype.hasOwnProperty.call(y,"default")?y.default:y;var k,g=function(e){s(i,e);var n=a(i);function i(e,o,r,s){var a;return t(this,i),(a=n.call(this,e,o,r,s)).root=e,a.dataProvider=o,a.callback=r,a.scrollPolicyOptions=s,a.postRender=function(){if(a.vnodesCache=a.newVnodesCache,a.newVnodesCache=new Map,a.callback){if(a.domScroller){var e=a.root.lastElementChild.querySelectorAll(".oj-stream-list-item"),t=a.root.offsetTop,n=e[0].offsetTop-t,o=e[e.length-1].offsetTop+e[e.length-1].offsetHeight-t;a.domScroller.setViewportRange(n,o)}if(a.domScroller&&!a.domScroller.checkViewport())return}},a.newItemsTracker=new Set,a.vnodesCache=new Map,a.newVnodesCache=new Map,a}return o(i,[{key:"fetchSuccess",value:function(e){null!=e&&this.newItemsTracker.clear(),r(u(i.prototype),"fetchSuccess",this).call(this,e)}},{key:"handleItemsUpdated",value:function(e){e.keys.forEach(function(e){this.vnodesCache.delete(e)}.bind(this)),r(u(i.prototype),"handleItemsUpdated",this).call(this,e)}},{key:"handleItemsRemoved",value:function(e){e.keys.forEach(function(e){this.vnodesCache.delete(e)}.bind(this)),r(u(i.prototype),"handleItemsRemoved",this).call(this,e)}},{key:"handleModelRefresh",value:function(){this.vnodesCache.clear(),r(u(i.prototype),"handleModelRefresh",this).call(this)}},{key:"addItem",value:function(e,t,n,o){var r=this.isInitialFetch();null==this.callback.getCurrentItem()&&r&&0==t&&this.callback.setCurrentItem(e);var s=this.renderItem(e,t,n);return this.decorateItem(s,e,t,r,o),s}},{key:"renderItem",value:function(e,t,n){var o=this.vnodesCache.get(e);if(o)return this.newVnodesCache.set(e,{vnodes:o.vnodes}),o.vnodes;for(var r,s=this.callback.getItemRenderer()({data:n,key:e}),i=0;i<s.length;i++){if(1===s[i]._node.nodeType){r=s[i];break}}var a=[r];return this.newVnodesCache.set(e,{vnodes:a}),a}},{key:"decorateItem",value:function(e,t,n,o,r){var s=e[0],i=s._node;null!=i&&(s.key=t,i.key=t,i.setAttribute("role","listitem"),i.setAttribute("tabIndex","-1"),this.getItemStyleClass(r,this.newItemsTracker.has(t),o).forEach(function(e){i.classList.add(e)}))}},{key:"getItemStyleClass",value:function(e,t,n){var o=[];return o.push("oj-stream-list-item"),o}},{key:"renderSkeletonsForLoadMore",value:function(){return this.callback.renderSkeletons(3)}}]),i}(c.IteratingDataProviderContentHandler),S=function(e){s(i,e);var n=a(i);function i(e,o,r,s){var a;return t(this,i),(a=n.call(this,e,o,r,s)).root=e,a.dataProvider=o,a.callback=r,a.scrollPolicyOptions=s,a.postRender=function(){a.vnodesCache=a.newVnodesCache,a.newVnodesCache=new Map,a.root.lastElementChild&&a.checkViewport()},a.getLoadMoreCount=function(){return 3},a.newItemsTracker=new Set,a.vnodesCache=new Map,a.newVnodesCache=new Map,a}return o(i,[{key:"handleFetchSuccess",value:function(e){null!=e&&this.newItemsTracker.clear(),r(u(i.prototype),"handleFetchSuccess",this).call(this,e)}},{key:"handleItemsUpdated",value:function(e){e.keys.forEach(function(e){this.vnodesCache.delete(e)}.bind(this)),r(u(i.prototype),"handleItemsUpdated",this).call(this,e)}},{key:"handleItemsRemoved",value:function(e){e.keys.forEach(function(e){this.vnodesCache.delete(e)}.bind(this)),r(u(i.prototype),"handleItemsRemoved",this).call(this,e)}},{key:"handleModelRefresh",value:function(){this.vnodesCache.clear(),r(u(i.prototype),"handleModelRefresh",this).call(this)}},{key:"addItem",value:function(e,t,n,o){var r=this.isInitialFetch();null==this.callback.getCurrentItem()&&r&&0==t&&this.callback.setCurrentItem(e.key);var s=this.renderItem(e,t,n);return this.decorateItem(s,e,t,r,o),s}},{key:"renderItem",value:function(e,t,n){var o,r,s,i=e.key,a=this.vnodesCache.get(i);if(a)return this.newVnodesCache.set(i,{vnodes:a.vnodes}),a.vnodes;e.isLeaf||(o=this.callback.getGroupRenderer()),null==o&&(o=this.callback.getItemRenderer()),r=o({data:n,key:e.key,leaf:e.isLeaf,parentKey:e.parentKey,depth:e.treeDepth});for(var l=0;l<r.length;l++){if(1===r[l]._node.nodeType){s=r[l];break}}var u=[s];return this.newVnodesCache.set(i,{vnodes:u}),u}},{key:"decorateItem",value:function(e,t,n,o,r){var s=e[0],i=s._node;if(null!=i&&(s.key=t.key,i.key=t.key,i.setAttribute("role","listitem"),i.setAttribute("tabIndex","-1"),this.getItemStyleClass(t,r,this.newItemsTracker.has(t.key),o).forEach(function(e){i.classList.add(e)}),!t.isLeaf)){var a=this.callback.getExpanded();a&&a.has(t.key)?i.setAttribute("aria-expanded","true"):i.setAttribute("aria-expanded","false")}}},{key:"getItemStyleClass",value:function(e,t,n,o){var r=[];return e.isLeaf?r.push("oj-stream-list-item"):r.push("oj-stream-list-group"),r}},{key:"renderSkeletonsForLoadMore",value:function(){return this.callback.renderSkeletons(3)}},{key:"renderSkeletonsForExpand",value:function(e){return this.callback.renderSkeletons(this.getLoadMoreCount(),!0,e)}}]),i}(c.IteratingTreeDataProviderContentHandler),_=function(t,n,o,r){var s,i=arguments.length,a=i<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,o):r;if("object"===("undefined"==typeof Reflect?"undefined":e(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,n,o,r);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(a=(i<3?s(a):i>3?s(n,o,a):s(n,o))||a);return i>3&&a&&Object.defineProperty(n,o,a),a};n.StreamList=k=function(e){s(r,e);var n=a(r);function r(e){var o;return t(this,r),(o=n.call(this,e)).restoreFocus=!1,o.actionableMode=!1,o.skeletonHeight=0,o.height=0,o.setRootElement=function(e){o.root=e},o.state={renderedData:null,outOfRangeData:null,initialSkeleton:!1,initialSkeletonCount:1,expandedToggleKeys:new h.KeySetImpl,expandedSkeletonKeys:new h.KeySetImpl,expandingKeys:new h.KeySetImpl,toCollapse:[]},o}return o(r,[{key:"_handleFocusIn",value:function(e){this._clearFocusoutTimeout();var t=e.target,n=t.closest(".oj-stream-list-item, .oj-stream-list-group");n&&this._isFocusable(t,n)?this._enterActionableMode(t):this.currentItem&&!this.actionableMode&&this.focusInHandler(this.currentItem)}},{key:"_handleFocusOut",value:function(){this._clearFocusoutTimeout(),this.actionableMode?this._focusoutTimeout=setTimeout(function(){this._doBlur()}.bind(this),100):this._isFocusBlurTriggeredByDescendent(event)||this._doBlur()}},{key:"_clearFocusoutTimeout",value:function(){this._focusoutTimeout&&(clearTimeout(this._focusoutTimeout),this._focusoutTimeout=null)}},{key:"_handleClick",value:function(e){var t=e.target.closest("."+this.getGroupStyleClass());if(t){var n=t.key,o=this.props.expanded.has(n);this._handleToggleExpanded(n,o)}this._handleTouchOrClickEvent(e)}},{key:"_handleToggleExpanded",value:function(e,t){this.updateState(function(n,o){var r,s,i=n.expandedToggleKeys;if(!i.has(e)){i=i.add([e]);var a=o.expanded;return i.values().forEach(function(e){a=t?a.delete([e]):a.add([e])}),null===(s=(r=this.props).onExpandedChanged)||void 0===s||s.call(r,a),{expandedToggleKeys:i}}return{}}.bind(this))}},{key:"_handleKeyDown",value:function(e){if(this.currentItem){var t;switch(e.key){case l.KEYBOARD_KEYS._LEFT:case l.KEYBOARD_KEYS._LEFT_IE:case l.KEYBOARD_KEYS._RIGHT:case l.KEYBOARD_KEYS._RIGHT_IE:if(this.currentItem.classList.contains(this.getGroupStyleClass())){var n=this.currentItem.key,o=this.props.expanded.has(n);(e.key!==l.KEYBOARD_KEYS._RIGHT&&e.key!==l.KEYBOARD_KEYS._RIGHT_IE||o)&&(e.key!==l.KEYBOARD_KEYS._LEFT&&e.key!==l.KEYBOARD_KEYS._LEFT_IE||!o)||this._handleToggleExpanded(n,o)}break;case l.KEYBOARD_KEYS._UP:case l.KEYBOARD_KEYS._UP_IE:if(!1===this.actionableMode)for(t=this.currentItem.previousElementSibling;t&&t.previousElementSibling&&t.classList.contains("oj-stream-list-skeleton");)t=t.previousElementSibling;break;case l.KEYBOARD_KEYS._DOWN:case l.KEYBOARD_KEYS._DOWN_IE:if(!1===this.actionableMode)for(t=this.currentItem.nextElementSibling;t&&t.nextElementSibling&&t.classList.contains("oj-stream-list-skeleton");)t=t.nextElementSibling;break;case l.KEYBOARD_KEYS._F2:!1===this.actionableMode&&this._enterActionableMode();break;case l.KEYBOARD_KEYS._ESCAPE:case l.KEYBOARD_KEYS._ESCAPE_IE:!0===this.actionableMode&&this._exitActionableMode(!0);break;case l.KEYBOARD_KEYS._TAB:!0===this.actionableMode&&this.currentItem&&(e.shiftKey?l.handleActionablePrevTab(e,this.currentItem)&&e.preventDefault():l.handleActionableTab(e,this.currentItem)&&e.preventDefault())}null!=t&&(t.classList.contains(this.getItemStyleClass())||t.classList.contains(this.getGroupStyleClass()))&&(this._updateCurrentItemAndFocus(t,!0),e.preventDefault())}}},{key:"_touchStartHandler",value:function(e){this._handleTouchOrClickEvent(e)}},{key:"render",value:function(){var e,t=this.state.initialSkeleton,n=this.state.initialSkeletonCount;if(null==this.contentHandler&&t)e=this._renderInitialSkeletons(n);else{var o=this.getData();null!=o&&t||null==o?e=this._renderInitialSkeletons(n,null==o):null!=o&&(e=this.contentHandler.render(),this.currentItem&&this.currentItem.contains(document.activeElement)&&!this.actionableMode&&(this.restoreFocus=!0))}return i.h("oj-stream-list",{ref:this.setRootElement},i.h("div",{role:"list","data-oj-context":!0,onClick:this._handleClick,onKeydown:this._handleKeyDown,onTouchstart:this._touchStartHandler,onFocusin:this._handleFocusIn,onFocusout:this._handleFocusOut},e))}},{key:"_doBlur",value:function(){this.actionableMode&&this._exitActionableMode(!1),this.currentItem&&this.focusOutHandler(this.currentItem)}},{key:"_isFocusBlurTriggeredByDescendent",value:function(e){return void 0===e.relatedTarget||!(null==e.relatedTarget||!this.root.contains(e.relatedTarget))}},{key:"_renderInitialSkeletons",value:function(e,t){if(t){var n=this._getScroller();null!=n&&(n.scrollTop=0)}return this.renderSkeletons(e)}},{key:"renderSkeletons",value:function(e,t,n){for(var o,r=[],s=this._isTreeData(),i=0;i<e;i++){var a=t;!t&&s&&i%4&&(a=!0),n&&(o=n+"_"+i),r.push(this._renderSkeleton(a,o))}return r}},{key:"_renderSkeleton",value:function(e,t){var n="oj-stream-list-skeleton";return e&&(n+=" oj-stream-list-child-skeleton"),i.h("div",{class:n,key:t},i.h("div",{class:"oj-stream-list-skeleton-content oj-animation-skeleton"}))}},{key:"_applySkeletonExitAnimation",value:function(e){var t=this.addBusyState("apply skeleton exit animations");return new Promise(function(n,o){var r=[];e.forEach(function(e){r.push(p.fadeOut(e))}),Promise.all(r).then(function(){t(),n(!0)})})}},{key:"_isTreeData",value:function(){var e=this.props.data;return null!=e&&this.instanceOfTreeDataProvider(e)}},{key:"instanceOfTreeDataProvider",value:function(e){return"getChildDataProvider"in e}},{key:"_postRender",value:function(){this._registerScrollHandler();var e=this.getData(),t=this.state.initialSkeleton;if(null!=e&&t){var n=this.getRootElement().querySelectorAll(".oj-stream-list-skeleton");this._applySkeletonExitAnimation(n).then(function(){this.updateState({initialSkeleton:!1})}.bind(this))}else null!=e&&this.contentHandler.postRender();var o=this.root.querySelectorAll(".oj-stream-list-item, .oj-stream-list-group");this._disableAllTabbableElements(o),this._restoreCurrentItem(o)}},{key:"_getScrollPolicyOptions",value:function(){return{fetchSize:this.props.scrollPolicyOptions.fetchSize,maxCount:this.props.scrollPolicyOptions.maxCount,scroller:this._getScroller()}}},{key:"mounted",value:function(){var e=this,t=this.props.data;this._isTreeData()?this.contentHandler=new S(this.root,t,this,this._getScrollPolicyOptions()):null!=t&&(this.contentHandler=new g(this.root,t,this,this._getScrollPolicyOptions())),this.contentHandler.fetchRows(),this.height=this.root.clientHeight;var n=this.root.querySelector(".oj-stream-list-skeleton");if(n&&(this.skeletonHeight=this.outerHeight(n),this._delayShowSkeletons()),window.ResizeObserver){var o=this.root,r=new window.ResizeObserver(function(t){t.forEach(function(t){if(t.target===o&&t.contentRect){var n=e.height,r=Math.round(t.contentRect.height);Math.abs(r-n)>1&&(e.height=r,e.contentHandler&&e.contentHandler.domScroller&&e.contentHandler.domScroller.checkViewport())}})});r.observe(o),this.resizeObserver=r}m.makeFocusable({applyHighlight:!0,setupHandlers:function(t,n){var o=l.getNoJQFocusHandlers(t,n);e.focusInHandler=o.focusIn,e.focusOutHandler=o.focusOut}}),this._postRender()}},{key:"getSkeletonHeight",value:function(){return this.skeletonHeight}},{key:"outerHeight",value:function(e){var t=e.offsetHeight,n=getComputedStyle(e);return t+=parseInt(n.marginTop)+parseInt(n.marginBottom)}},{key:"unmounted",value:function(){this.contentHandler&&this.contentHandler.destroy(),this.contentHandler=null,this.resizeObserver&&this.resizeObserver.disconnect(),this.resizeObserver=null,this._unregisterScrollHandler()}},{key:"_delayShowSkeletons",value:function(){var e=this;window.setTimeout(function(){null==e.getData()&&e.updateState(function(t){return{initialSkeletonCount:Math.max(1,Math.floor(e.height/e.skeletonHeight))}})},this._getShowSkeletonsDelay())}},{key:"_getOptionDefaults",value:function(){return null==this.defaultOptions&&(this.defaultOptions=v.parseJSONFromFontFamily("oj-streamlist-option-defaults")),this.defaultOptions}},{key:"_getShowSkeletonsDelay",value:function(){var e=this._getOptionDefaults();if(null==e)return 0;var t=parseInt(e.showIndicatorDelay,10);return isNaN(t)?0:t}},{key:"getRootElement",value:function(){return this.root}},{key:"updated",value:function(e,t){this._isTreeData()&&this.contentHandler.collapse&&this.contentHandler.collapse(this.state.toCollapse);var n=t.expandingKeys;this.state.expandingKeys.values().forEach(function(e){n.has(e)||this.contentHandler.expand(e)}.bind(this)),this.props.data!=e.data&&(this.contentHandler&&this.contentHandler.destroy(),this.setCurrentItem(null),this.updateState({renderedData:null,outOfRangeData:null,initialSkeleton:!0,initialSkeletonCount:this.state.initialSkeletonCount,expandedToggleKeys:new h.KeySetImpl,expandedSkeletonKeys:new h.KeySetImpl,expandingKeys:new h.KeySetImpl}),this._isTreeData()?this.contentHandler=new S(this.root,this.props.data,this,this._getScrollPolicyOptions()):null!=this.props.data&&(this.contentHandler=new g(this.root,this.props.data,this,this._getScrollPolicyOptions())),this.contentHandler.fetchRows(),this._delayShowSkeletons()),this._postRender(),d.Object.compareValues(this.props.scrollPosition,e.scrollPosition)||d.Object.compareValues(this.props.scrollPosition,this.lastInternalScrollPositionUpdate)||this._syncScrollTopWithProps()}},{key:"_unregisterScrollHandler",value:function(){this._getScrollEventElement().removeEventListener("scroll",this.scrollListener)}},{key:"_registerScrollHandler",value:function(){var e=this._getScrollEventElement();this._unregisterScrollHandler(),e.addEventListener("scroll",this.scrollListener)}},{key:"scrollListener",value:function(){var e=this;this._ticking||(window.requestAnimationFrame(function(){e._updateScrollPosition(),e._ticking=!1}),this._ticking=!0)}},{key:"_updateScrollPosition",value:function(){var e,t,n={},o=this._getScroller().scrollTop,r=this._findClosestElementToTop(o);if(n.y=o,null!=r){var s=r.elem;n.offsetY=r.offsetY,n.key=s.key,this._isTreeData()&&s.classList.contains("oj-stream-list-item")?n.parentKey=this._getParentKey(s):n.parentKey=null}this.lastInternalScrollPositionUpdate=n,null===(t=(e=this.props).onScrollPositionChanged)||void 0===t||t.call(e,n)}},{key:"_syncScrollTopWithProps",value:function(){var e,t=this.props.scrollPosition,n=t.key;if(n){var o=t.parentKey,r=this._getItemByKey(n,o);if(null==r)return;var s=this.root;e=r.offsetTop-s.offsetTop;var i=t.offsetY;isNaN(i)||(e+=i)}else{var a=t.y;if(isNaN(a))return;e=a}e>this._getScroller().scrollHeight||(this._getScroller().scrollTop=e)}},{key:"_getParentKey",value:function(e){for(;e;){if(e.classList.contains("oj-stream-list-group"))return e.key;e=e.previousElementSibling}return null}},{key:"_getItemByKey",value:function(e,t){for(var n=this.root.querySelectorAll(".oj-stream-list-item, .oj-stream-list-group"),o=0;o<n.length;o++){var r=n[o];if(r.key===e&&(null==t||this._getParentKey(r)===t))return r}}},{key:"_getScrollEventElement",value:function(){var e=this.props.scrollPolicyOptions.scroller;return null!=e?("string"==typeof e&&(e=document.querySelector(e)),e===document.body||e===document.documentElement?window:e):this.getRootElement()}},{key:"_getScroller",value:function(){var e=this.props.scrollPolicyOptions.scroller;return null!=e?("string"==typeof e&&(e=document.querySelector(e)),e===document.documentElement&&e!==document.scrollingElement?document.body:e):this.getRootElement()}},{key:"_findClosestElementToTop",value:function(e){var t=this.root.querySelectorAll(".oj-stream-list-item, .oj-stream-list-group");if(null==t||0===t.length)return null;for(var n=this.root.offsetTop,o=Math.max(e,0),r=0-n,s=o,i=0,a=t[i],l=!1,u={elem:a,offsetY:s};!l&&i>=0&&i<t.length&&(r=(a=t[i]).offsetTop-n,!(l=(s=Math.abs(o-r))<1||o<=r));)u={elem:a,offsetY:s},i+=1;return u}},{key:"isAvailable",value:function(){return null!=this.contentHandler}},{key:"getCurrentItem",value:function(){return this.currentKey}},{key:"setCurrentItem",value:function(e){this.currentKey=e}},{key:"getData",value:function(){return this.state.renderedData}},{key:"setData",value:function(e){this.updateState({renderedData:e})}},{key:"updateData",value:function(e){this.updateState(function(t){return e(t.renderedData,t.expandingKeys)}.bind(this))}},{key:"getExpanded",value:function(){return this.props.expanded}},{key:"setExpanded",value:function(e){var t,n;null===(n=(t=this.props).onExpandedChanged)||void 0===n||n.call(t,e)}},{key:"updateExpand",value:function(e){this.updateState(function(t,n){return e(t.renderedData,t.expandedSkeletonKeys,t.expandingKeys,n.expanded)}.bind(this))}},{key:"getExpandingKeys",value:function(){return this.state.expandingKeys}},{key:"setExpandingKeys",value:function(e){this.updateState({expandingKeys:e})}},{key:"updateExpandingKeys",value:function(e){this.updateState(function(t){return{expandingKeys:t.expandingKeys.add([e])}})}},{key:"getSkeletonKeys",value:function(){return this.state.expandedSkeletonKeys}},{key:"setSkeletonKeys",value:function(e){this.updateState({expandedSkeletonKeys:e})}},{key:"updateSkeletonKeys",value:function(e){this.updateState(function(t){return{expandedSkeletonKeys:t.expandedSkeletonKeys.add([e])}})}},{key:"getOutOfRangeData",value:function(){return this.state.outOfRangeData}},{key:"setOutOfRangeData",value:function(e){this.updateState({outOfRangeData:e})}},{key:"getItemRenderer",value:function(){return this.props.itemTemplate}},{key:"getItemStyleClass",value:function(){return"oj-stream-list-item"}},{key:"getGroupRenderer",value:function(){return this.props.groupTemplate}},{key:"getGroupStyleClass",value:function(){return"oj-stream-list-group"}},{key:"addBusyState",value:function(e){var t=this.getRootElement();return y.getContext(t).getBusyContext().addBusyState({description:e})}},{key:"_handleTouchOrClickEvent",value:function(e){var t=e.target,n=t.closest(".oj-stream-list-item, .oj-stream-list-group");n&&(this._isFocusable(t,n)?(this._updateCurrentItemAndFocus(n,!1),this._enterActionableMode(t)):this._updateCurrentItemAndFocus(n,!0))}},{key:"_isFocusable",value:function(e,t){return this._isInputElement(e)||this._isInsideFocusableElement(e,t)}},{key:"_isInputElement",value:function(e){return null!=e.nodeName.match(/^INPUT|SELECT|OPTION|TEXTAREA/)&&!e.readOnly}},{key:"_isInsideFocusableElement",value:function(e,t){for(var n=!1;e!==t&&null!=e;){if(e.classList.contains("oj-form-control")||this._isInFocusableElementsList(e,t)){e.readonly||e.disabled||(n=!0);break}e=e.parentNode}return n}},{key:"_isInFocusableElementsList",value:function(e,t){var n=!1;return l.getFocusableElementsIncludingDisabled(t).forEach(function(t){t===e&&(n=!0)}),n}},{key:"_resetFocus",value:function(e,t){this.actionableMode&&t&&this._exitActionableMode(!1),this.focusOutHandler(e),e.tabIndex=-1}},{key:"_setFocus",value:function(e,t){e.tabIndex=0,t&&(this.focusInHandler(e),e.focus())}},{key:"_updateCurrentItemAndFocus",value:function(e,t){var n=this.currentItem,o=e;this._resetFocus(n,!0),this.currentItem=o,this.setCurrentItem(o.key),this._setFocus(o,t)}},{key:"_isInViewport",value:function(e){var t=e.offsetTop,n=this._getScroller().scrollTop;return t>=n&&t<=n+this.height}},{key:"_restoreCurrentItem",value:function(e){if(null!=this.currentKey)for(var t=0;t<e.length;t++)if(d.KeyUtils.equals(e[t].key,this.currentKey)){var n=e[t];if(this.restoreFocus&&this._isInViewport(n))return void this._updateCurrentItemAndFocus(n,!0);this.currentItem=n,this._setFocus(n,!1);break}this.restoreFocus=!1}},{key:"_disableAllTabbableElements",value:function(e){e.forEach(function(e){y.getContext(e).getBusyContext().whenReady().then(function(){l.disableAllFocusableElements(e,!0)})})}},{key:"_enterActionableMode",value:function(e){if(this.actionableMode=!0,this.currentItem){var t=l.enableAllFocusableElements(this.currentItem,!0);null==e&&t&&t.length>0&&(t[0].focus(),this._resetFocus(this.currentItem,!1))}}},{key:"_exitActionableMode",value:function(e){this.actionableMode=!1,this.currentItem&&(l.disableAllFocusableElements(this.currentItem,!0),this._setFocus(this.currentItem,e))}}],[{key:"initStateFromProps",value:function(e,t){return k.updateStateFromProps(e,t,null)}},{key:"updateStateFromProps",value:function(e,t,n){var o=t.expandedToggleKeys,r=t.expandingKeys,s=t.renderedData,i=t.expandedSkeletonKeys,a=[],l=e.expanded;if(n&&l!==n.expanded){var u=n.expanded;return o.values().forEach(function(e){u.has(e)!==l.has(e)&&(o=o.delete([e]))}),s.value.metadata.forEach(function(e){var t=e.key,n=e.expanded,o=l.has(t);n&&!o?(a.push(t),e.expanded=!1):!n&&o&&(r=r.add([t]),e.expanded=!0)}),a.forEach(function(e){s=k.collapse(e,s),r=r.delete([e]),i=i.delete([e])}),{renderedData:s,expandingKeys:r,expandedToggleKeys:o,expandedSkeletonKeys:i,toCollapse:a}}return{toCollapse:a}}},{key:"_findIndex",value:function(e,t){for(var n=0;n<e.length;n++)if(d.KeyUtils.equals(t,e[n].key))return n;return-1}}]),r}(i.ElementVComponent),n.StreamList.collapse=function(e,t){var n=t.value.data,o=t.value.metadata,r=k._findIndex(o,e);if(r>-1){var s=k._getLocalDescendentCount(o,r);n.splice(r+1,s),o.splice(r+1,s)}return{value:{data:n,metadata:o},done:t.done}},n.StreamList._getLocalDescendentCount=function(e,t){for(var n=0,o=e[t].treeDepth,r=e.length,s=t+1;s<r;s++){if(!(e[s].treeDepth>o))return n;n+=1}return n},n.StreamList.metadata={extension:{_DEFAULTS:function e(){t(this,e),this.data=null,this.expanded=new h.KeySetImpl,this.scrollPolicy="loadMoreOnScroll",this.scrollPolicyOptions={fetchSize:25,maxCount:500,scroller:null},this.scrollPosition={y:0}},_WRITEBACK_PROPS:["expanded","scrollPosition"],_READ_ONLY_PROPS:[]},properties:{data:{type:"object|null",value:null},expanded:{type:"any",writeback:!0},scrollPolicy:{type:"string",enumValues:["loadAll","loadMoreOnScroll"],value:"loadMoreOnScroll"},scrollPolicyOptions:{type:"object",properties:{fetchSize:{type:"number",value:25},maxCount:{type:"number",value:500},scroller:{type:"Element|string|null",value:null}}},scrollPosition:{type:"object",properties:{y:{type:"number",value:0},key:{type:"any"},offsetY:{type:"number"},parentKey:{type:"any"}},writeback:!0}},slots:{groupTemplate:{data:{}},itemTemplate:{data:{}}}},_([i.listener()],n.StreamList.prototype,"_handleFocusIn",null),_([i.listener()],n.StreamList.prototype,"_handleFocusOut",null),_([i.listener()],n.StreamList.prototype,"_handleClick",null),_([i.listener()],n.StreamList.prototype,"_handleKeyDown",null),_([i.listener({passive:!0})],n.StreamList.prototype,"_touchStartHandler",null),_([i.listener()],n.StreamList.prototype,"scrollListener",null),n.StreamList=k=_([i.customElement("oj-stream-list")],n.StreamList),Object.defineProperty(n,"__esModule",{value:!0})})}();
//# sourceMappingURL=ojstreamlist.js.map