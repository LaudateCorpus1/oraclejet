!function(){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}
/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */define(["exports","ojs/ojcore-base","jquery","ojs/ojcontext","ojs/ojcomponentcore","ojs/ojlogger","ojs/ojdomutils","ojs/ojfocusutils","touchr"],function(t,i,s,n,r,a,o,l,h){"use strict";i=i&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i,s=s&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s,n=n&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n,l=l&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l;
/**
   * @license
   * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
   * The Universal Permissive License (UPL), Version 1.0
   * as shown at https://oss.oracle.com/licenses/upl/
   * @ignore
   */
var u={properties:{arrowPlacement:{type:"string",enumValues:["adjacent","overlay"],value:"adjacent"},arrowVisibility:{type:"string",enumValues:["auto","hidden","hover","visible"],value:"auto"},currentItem:{type:"object",writeback:!0,value:{index:0},properties:{id:{type:"string"},index:{type:"number"}}},looping:{type:"string",enumValues:["off","page"],value:"off"},maxItemsPerPage:{type:"number",value:0},orientation:{type:"string",enumValues:["horizontal","vertical"],value:"horizontal"},translations:{type:"object",value:{},properties:{labelAccArrowNextPage:{type:"string"},labelAccArrowPreviousPage:{type:"string"},labelAccFilmStrip:{type:"string"},tipArrowNextPage:{type:"string"},tipArrowPreviousPage:{type:"string"}}}},methods:{getItemsPerPage:{},getPagingModel:{},getProperty:{},refresh:{},setProperties:{},setProperty:{},getNodeBySubId:{},getSubIdByNode:{}},extension:{}};u.extension._WIDGET_NAME="ojFilmStrip",i.CustomElementBridge.register("oj-film-strip",{metadata:u});
/**
   * @license
   * Copyright (c) 2015 2021, Oracle and/or its affiliates.
   * The Universal Permissive License (UPL), Version 1.0
   * as shown at https://oss.oracle.com/licenses/upl/
   * @ignore
   */
var p=function(){this.Init()};i._registerLegacyNamespaceProp("FilmStripPagingModel",p),i.Object.createSubclass(p,i.EventSource,"oj.FilmStripPagingModel"),p.prototype.Init=function(){p.superclass.Init.call(this),this._page=-1,this._totalSize=0,this._pageSize=-1},p.prototype.setTotalSize=function(e){this._totalSize=e},p.prototype.getPageSize=function(){return this._pageSize},p.prototype.getPage=function(){return this._page},p.prototype.setPage=function(e,t){e=parseInt(e,10);try{var i=this.getPageCount(),s=this._page,n=this._pageSize,r=n;if(t&&t.pageSize&&(r=t.pageSize),0===this._totalSize&&-1===r)return Promise.resolve();var a=Math.ceil(this._totalSize/r);if(e<0||e>a-1)throw new Error("JET FilmStrip: Invalid 'page' set: "+e);var o=!1;if(e!==s||r!==n){if(!1===this.handleEvent("beforePage",{page:e,previousPage:s}))return Promise.reject();o=!0}this._page=e,this._pageSize=r;var l=this.getPageCount(),h=this;return new Promise(function(n){if(i!==l&&h.handleEvent("pageCount",{pageCount:l,previousPageCount:i}),o){var r={page:e,previousPage:s};t&&t.loopDirection&&(r.loopDirection=t.loopDirection),h.handleEvent("page",r)}n(null)})}catch(e){return Promise.reject(e)}},p.prototype.getStartItemIndex=function(){return-1===this._page&&-1===this._pageSize?-1:this._page*this._pageSize},p.prototype.getEndItemIndex=function(){return Math.min(this.getStartItemIndex()+this._pageSize,this._totalSize)-1},p.prototype.getPageCount=function(){return Math.ceil(this._totalSize/this._pageSize)},p.prototype.totalSize=function(){return this._totalSize},p.prototype.totalSizeConfidence=function(){return"actual"},
/**
   * @license
   * Copyright (c) 2015 2021, Oracle and/or its affiliates.
   * The Universal Permissive License (UPL), Version 1.0
   * as shown at https://oss.oracle.com/licenses/upl/
   * @ignore
   */
function(){function t(e,t){e.css("-webkit-transform",t).css("-ms-transform",t).css("transform",t)}function h(e){e.css("-webkit-transform","").css("-ms-transform","").css("transform","")}function u(e){var t=s("<div></div>");return t.text(e),t[0].innerHTML}i.__registerWidget("oj.ojFilmStrip",s.oj.baseComponent,{defaultElement:"<div>",widgetEventPrefix:"oj",options:{maxItemsPerPage:0,orientation:"horizontal",currentItem:{index:0},arrowPlacement:"adjacent",arrowVisibility:"auto",looping:"off"},_ComponentCreate:function(){this._super();var e=this.element;e.addClass("oj-filmstrip oj-component").attr("tabindex",0).attr("role","region"),e.uniqueId(),this._focusable({element:e,applyHighlight:!0});var t=this.options;if(t.disabled&&a.warn("JET FilmStrip: 'disabled' property not supported"),"horizontal"!==t.orientation&&"vertical"!==t.orientation)throw new Error("JET FilmStrip: Unsupported value set as 'orientation' property: "+t.orientation);if("adjacent"!==t.arrowPlacement&&"overlay"!==t.arrowPlacement)throw new Error("Unsupported value set as 'arrowPlacement' property: "+t.arrowPlacement);if("visible"!==t.arrowVisibility&&"hidden"!==t.arrowVisibility&&"hover"!==t.arrowVisibility&&"auto"!==t.arrowVisibility)throw new Error("Unsupported value set as 'arrowVisibility' property: "+t.arrowVisibility);if("off"!==t.looping&&"page"!==t.looping)throw new Error("Unsupported value set as 'looping' property: "+t.looping);this.touchEventNamespace=this.eventNamespace+"Touch",this.mouseEventNamespace=this.eventNamespace+"Mouse",this.keyEventNamespace=this.eventNamespace+"Key",this.navArrowHoverableEventNamespace=this.eventNamespace+"NavArrowHoverable",t.currentItem=this._convertItemToObj(t.currentItem),this._setup(!0),this._populateItemObj(t.currentItem),this.option("currentItem",t.currentItem,{_context:{internalSet:!0,writeback:!0}})},refresh:function(){this._super(),this._setup(!1)},getItemsPerPage:function(){return this._itemsPerPage},getPagingModel:function(){return this._pagingModel},_NotifyShown:function(){this._super(),this._needsSetup?this._setup(this._needsSetup[0]):this._handleResize()},_NotifyAttached:function(){this._super(),this._needsSetup?this._setup(this._needsSetup[0]):this._handleResize()},_setup:function(e){var t=this;if(e&&!this._pagingModel&&(this._pagingModel=new p),e&&!this._filterNestedFilmStripsFunc&&(this._filterNestedFilmStripsFunc=function(e,i){return s(i).closest(".oj-filmstrip")[0]===t.element[0]}),!this._canCalculateSizes()){var i=!1;return this._needsSetup&&(i=this._needsSetup[0]),void(this._needsSetup=[e||i])}this._needsSetup=null,this._bRTL="rtl"===this._GetReadingDirection(),this._bTouchSupported=o.isTouchSupported();var n=this.element;e?(this._itemsPerPage=0,this._handlePageFunc=function(e){t._handlePage(e)},this._componentSize=0,this._itemSize=-1,this._handleTransitionEndFunc=function(e){t._handleTransitionEnd()},this._handleResizeFunc=function(e,i){t._handleResize()},this._bTouchSupported&&(this._handleTouchStartFunc=function(e){t._handleTouchStart(e)},this._handleTouchMoveFunc=function(e){t._handleTouchMove(e)},this._handleTouchEndFunc=function(e){t._handleTouchEnd(e)},this._addTouchListeners()),this._handleMouseDownFunc=function(e){t._handleMouseDown(e)},this._handleMouseMoveFunc=function(e){t._handleMouseMove(e)},this._handleMouseUpFunc=function(e){t._handleMouseUp(e)},this._addMouseListeners(),this._handleKeyDownFunc=function(e){t._handleKeyDown(e)},this._addKeyListeners()):this._destroyInternal();var a,l=n.children();for(a=0;a<l.length;a++)r.subtreeDetached(l[a]);var h=this._pagingModel;if(e&&h.on("page",this._handlePageFunc),h.setTotalSize(l.length),this._wrapChildren(),l.length>0){for(this._adjustSizes(),a=0;a<l.length;a++)r.subtreeAttached(l[a]);o.addResizeListener(n[0],this._handleResizeFunc,25)}},_destroy:function(){this._bTouchSupported&&(this._removeTouchListeners(),this._handleTouchStartFunc=null,this._handleTouchMoveFunc=null,this._handleTouchEndFunc=null),this._removeMouseListeners(),this._handleMouseDownFunc=null,this._handleMouseMoveFunc=null,this._handleMouseUpFunc=null,this._removeKeyListeners(),this._handleKeyDownFunc=null,this._destroyInternal(),this._pagingModel.off("page",this._handlePageFunc),this._handlePageFunc=null,this._pagingModel=null,this._handleResizeFunc=null,this._handleTransitionEndFunc=null,this._filterNestedFilmStripsFunc=null;var e=this.element;e.removeClass("oj-filmstrip oj-component oj-filmstrip-hover").removeAttr("tabindex role").removeAttr("aria-labelledby"),e.removeUniqueId(),this._IsCustomElement()&&(e[0].removeEventListener("touchstart",this._delegatedHandleTouchStartFunc,{passive:!0}),e[0].removeEventListener("touchmove",this._delegatedHandleTouchMoveFunc,{passive:!1}),delete this._delegatedHandleTouchStartFunc,delete this._delegatedHandleTouchMoveFunc),this._super()},_destroyInternal:function(){this._deferredHandleResize=!1,this._resolveBusyState();var e=this.element;o.removeResizeListener(e[0],this._handleResizeFunc),this._itemSize=-1,this._queuedHandleResize&&(clearTimeout(this._queuedHandleResize),this._queuedHandleResize=null);var t,i=this._getItems();for(t=0;t<i.length;t++)r.subtreeDetached(i[t]);for(this._clearCalculatedSizes(),this._getItemContainers().unwrap(),this._unwrapChildren(),t=0;t<i.length;t++)r.subtreeAttached(i[t])},_setOption:function(e,t,i){var s=this.options,n=!1,r=-1,o=this._pagingModel,l=o.getPage();switch(e){case"disabled":a.warn("JET FilmStrip: 'disabled' property not supported");break;case"orientation":if("horizontal"!==t&&"vertical"!==t)throw new Error("JET FilmStrip: Unsupported value set as 'orientation' property: "+t);n=s.orientation!==t;break;case"maxItemsPerPage":n=s.maxItemsPerPage!==t;break;case"arrowPlacement":if("adjacent"!==t&&"overlay"!==t)throw new Error("Unsupported value set as 'arrowPlacement' property: "+t);n=s.arrowPlacement!==t;break;case"arrowVisibility":if("visible"!==t&&"hidden"!==t&&"hover"!==t&&"auto"!==t)throw new Error("Unsupported value set as 'arrowVisibility' property: "+t);n=s.arrowVisibility!==t;break;case"looping":if("off"!==t&&"page"!==t)throw new Error("Unsupported value set as 'looping' property: "+t);n=s.looping!==t;break;case"currentItem":t=this._convertItemToObj(t),this._populateItemObj(t);var h=s.currentItem;if(h&&t&&(h.id!==t.id||h.index!==t.index)&&((r=this._findPage(t))<0||r>=o.getPageCount()))throw new Error("JET FilmStrip: Value of 'currentItem' property not found: "+t)}switch(this._super(e,t,i),e){case"currentItem":r>-1&&r!==l&&o.setPage(r)}n&&this._setup(!1)},_handleResize:function(){if(this._busyStateResolveFunc)this._deferredHandleResize=!0;else if(this._bHandlingResize){if(!this._queuedHandleResize){var e=this;this._queuedHandleResize=setTimeout(function(){e._queuedHandleResize=null,e._handleResize()},0)}}else this._bHandlingResize=!0,this._adjustSizes(!0),this._bHandlingResize=!1},_isHorizontal:function(){return"vertical"!==this.options.orientation},_isLoopingPage:function(){return"page"===this.options.looping},_getCssPositionAttr:function(){return this._isHorizontal()?this._bRTL?"right":"left":"top"},_getCssSizeAttr:function(){return this._isHorizontal()?"width":"height"},_canCalculateSizes:function(){var e=document.createElement("div"),t=e.style;t.position="absolute",t.width="10px",t.height="10px";var i=this.element[0];i.appendChild(e);var s=!1;try{s=e.offsetWidth>0&&e.offsetHeight>0}catch(e){}return i.removeChild(e),s},_wrapChildren:function(){var e=this.element,t=this._isHorizontal(),i=e.children();i.addClass("oj-filmstrip-item").wrap("<div class='oj-filmstrip-container oj-filmstrip-item-container'></div>");var s=this._getCssPositionAttr(),n=e.children().wrapAll("<div class='oj-filmstrip-container oj-filmstrip-pages-container'></div>").parent().css(s,"0px");this._pagesWrapper=n;var r=this.options;"hidden"!==r.arrowVisibility&&"adjacent"===r.arrowPlacement&&(this._contentWrapper=n.wrap("<div class='oj-filmstrip-container oj-filmstrip-content-container'></div>").parent()),e.addClass("oj-filmstrip-container"),t||e.addClass("oj-filmstrip-vertical");var a=this._createPageInfoElem(),o=e.attr("id"),l=a.attr("id");e.append(a),e.attr("aria-labelledby",o+" "+l),this._pageInfoElem=a,"hidden"!==r.arrowVisibility&&i.length>0&&(this._prevButton=this._createPrevNavArrow(),this._nextButton=this._createNextNavArrow(),this._navArrowsShownOnHover()&&this._setupNavArrowsHoverable())},_unwrapChildren:function(){var e=this.element,t=this._getItems();this._tearDownNavArrowsHoverable(),this._prevButton&&(this._UnregisterChildNode(this._prevButton),this._prevButton=null),this._nextButton&&(this._UnregisterChildNode(this._nextButton),this._nextButton=null);var i=e.children(".oj-filmstrip-arrow-container");i&&i.remove(),this._pageInfoElem&&(this._UnregisterChildNode(this._pageInfoElem),this._pageInfoElem.remove(),this._pageInfoElem=null),t.removeClass("oj-filmstrip-item").unwrap().unwrap(),this._pagesWrapper=null,this._contentWrapper&&(t.unwrap(),this._contentWrapper=null),e.removeClass("oj-filmstrip-container oj-filmstrip-vertical")},_createPageInfoElem:function(){var e=s(document.createElement("div"));return e.uniqueId(),e.addClass("oj-helper-hidden-accessible oj-filmstrip-liveregion"),e.attr({"aria-live":"polite","aria-atomic":"true"}),e},_updatePageInfoElem:function(){var e=this._pagingModel,t=e.getPage(),i=e.getPageCount(),s=u(this.getTranslatedString("labelAccFilmStrip",{pageIndex:t+1,pageCount:i})),n=this._pageInfoElem;n&&n.text(s)},_setupNavArrowsHoverable:function(){this.element.on("mouseenter"+this.navArrowHoverableEventNamespace,function(e){s(e.currentTarget).hasClass("oj-disabled")||s(e.currentTarget).addClass("oj-filmstrip-hover")}).on("mouseleave"+this.navArrowHoverableEventNamespace,function(e){s(e.currentTarget).removeClass("oj-filmstrip-hover")})},_tearDownNavArrowsHoverable:function(){this.element.off(this.navArrowHoverableEventNamespace)},_navArrowsShownOnHover:function(){var e=this.options,t=e.arrowVisibility;return"hover"===t||"auto"===t&&"overlay"===e.arrowPlacement},_hasPrevPage:function(){return this._pagingModel.getPage()>0},_hasNextPage:function(){var e=this._pagingModel;return e.getPage()<e.getPageCount()-1},_prevPage:function(){var e=this._pagingModel;if(this._hasPrevPage())e.setPage(e.getPage()-1);else{var t=e.getPageCount();this._isLoopingPage()&&t>1&&e.setPage(t-1,{loopDirection:"prev"})}},_nextPage:function(){var e=this._pagingModel;if(this._hasNextPage())e.setPage(e.getPage()+1);else{var t=e.getPageCount();this._isLoopingPage()&&t>1&&e.setPage(0,{loopDirection:"next"})}},_displayNavigationArrow:function(e,t){"adjacent"===this.options.arrowPlacement?t.css("visibility",e?"":"hidden"):t.parent().css("display",e?"":"none")},_updateNavigationArrowsDisplay:function(){if("hidden"!==this.options.arrowVisibility){var e=this._pagingModel,t=e.getPage(),i=e.getPageCount(),s=this._isLoopingPage()&&i>1;this._displayNavigationArrow(s||0!==t,this._prevButton),this._displayNavigationArrow(s||t!==i-1,this._nextButton)}},_createPrevNavArrow:function(){var e=this.element,t=this._isHorizontal()?"oj-start":"oj-top",i=this._createNavigationArrowContainer(t);"overlay"===this.options.arrowPlacement?e.append(i):e.prepend(i);var s=u(this.getTranslatedString("labelAccArrowPreviousPage")),n=u(this.getTranslatedString("tipArrowPreviousPage")),r=this._createNavigationArrow(i,t,s,n),a=this;return r.on("click",function(){a._prevPage()}),r},_createNextNavArrow:function(){var e=this.element,t=this._isHorizontal()?"oj-end":"oj-bottom",i=this._createNavigationArrowContainer(t);e.append(i);var s=u(this.getTranslatedString("labelAccArrowNextPage")),n=u(this.getTranslatedString("tipArrowNextPage")),r=this._createNavigationArrow(i,t,s,n),a=this;return r.on("click",function(){a._nextPage()}),r},_createNavigationArrowContainer:function(e){var t=s(document.createElement("div"));return t.addClass("oj-filmstrip-arrow-container "+e),"overlay"===this.options.arrowPlacement&&(t.addClass("oj-filmstrip-arrow-container-overlay"),this._navArrowsShownOnHover()&&t.addClass("oj-filmstrip-arrow-transition")),t},_createNavigationArrow:function(e,t,i,s){var n="<div class='oj-filmstrip-arrow oj-default oj-enabled "+t+"' role='button' tabindex='-1'";n+="><span class='oj-filmstrip-arrow-icon "+t+" oj-component-icon'></span></div>",e.append(n);var r=e.children(".oj-filmstrip-arrow").eq(0);r.uniqueId();var a=r.attr("id");i&&r.attr("aria-label",i),s&&r.attr("title",s);var o=this._pageInfoElem.attr("id");return r.attr("aria-labelledby",o+" "+a),this._AddHoverable(r),this._AddActiveable(r),"adjacent"===this.options.arrowPlacement&&this._navArrowsShownOnHover()&&r.addClass("oj-filmstrip-arrow-transition"),r},_getItemContainers:function(){return this._pagesWrapper.find(".oj-filmstrip-item-container").filter(this._filterNestedFilmStripsFunc)},_getItems:function(){return this._pagesWrapper.find(".oj-filmstrip-item").filter(this._filterNestedFilmStripsFunc)},_getPages:function(){return this._pagesWrapper.children(".oj-filmstrip-page")},_clearCalculatedSizes:function(){var e=this._pagesWrapper;this._getPages().css("flex-basis","").css("-webkit-flex-basis",""),this._getItemContainers().css("flex-basis","").css("-webkit-flex-basis",""),e.css(this._getCssSizeAttr(),"")},_adjustSizes:function(e){this._clearCalculatedSizes();var t=this.options,i=this._isHorizontal(),n=t.maxItemsPerPage,a=n<1,o=this.element,l=this._getItemContainers();if(this._itemSize<0){var h=this._getItemIndex(t.currentItem),u=s(l[h]),p=u.children(".oj-filmstrip-item");p.css("display",""),r.subtreeShown(p[0]),this._itemSize=i?u.width():u.height()}var d=i?o.width():o.height();if("hidden"!==t.arrowVisibility&&"adjacent"===t.arrowPlacement){var c=o.children(".oj-filmstrip-arrow-container").eq(0);d-=2*(i?c.width():c.height())}if(this._componentSize=d,!a){var g=Math.max(Math.floor(d/this._itemSize),1);g<n&&(n=g)}var _=a?Math.max(Math.floor(d/this._itemSize),1):n,f=d/_;l.css("flex-basis",f+"px").css("-webkit-flex-basis",f+"px");var m=Math.ceil(l.length/_),v=this._getPages(),P=!1,b=this._pagingModel;if(b.getPageCount()!==m||this._itemsPerPage!==_||!v||v.length<1){var w;if(P=!0,e)for(w=0;w<l.length;w++)r.subtreeDetached(l[w]);for(v&&v.length>0&&l.unwrap(),w=0;w<l.length;w+=_){l.slice(w,w+_).wrapAll("<div class='oj-filmstrip-container oj-filmstrip-page' aria-hidden='true'></div>").parent().css("display","none")}if(e)for(w=0;w<l.length;w++)r.subtreeAttached(l[w])}(v=this._getPages()).css("flex-basis",d+"px").css("-webkit-flex-basis",d+"px");var S=this._pagesWrapper,y=this._contentWrapper;S.css(this._getCssSizeAttr(),d),y&&y.css(this._getCssSizeAttr(),d);var j=0;if(t.currentItem&&(j=this._findPage(t.currentItem,_)),b.getPageCount()!==m||this._itemsPerPage!==_||b.getPage()!==j)b.setPage(j,{pageSize:_});else if(P){var C=b.getPage();this._handlePage({previousPage:C,page:C})}},_handlePage:function(e){var t=e.page,i=e.loopDirection,n=e.previousPage,r=this._pagesWrapper,a=this._getPages(),o=this._pagingModel,l=o.getPageSize(),h=o.getPageCount(),u=n<0||n===t||this._itemsPerPage!==l,p=this._isLoopingPage();this._itemsPerPage=l;var d=null;u||(d=s(a[n]));var c=this._getCssPositionAttr(),g=s(a[t]),_=g.is(":hidden");_&&this._unhidePage(g);var f,m=this._bDragInit;if(n>-1&&!u){f=t>n,p&&i&&(f="next"===i);var v=p&&!f&&h>1&&0===n,P=p&&f&&h>1&&n===h-1;m=!0,r.css(this._getCssSizeAttr(),2*this._componentSize),f||_&&r.css(c,-this._componentSize+"px"),f?(d.addClass("oj-filmstrip-transition-next-oldpage-from"),g.addClass("oj-filmstrip-transition-next-newpage-from"),P&&g.addClass("oj-filmstrip-transition-display-as-lastpage")):(d.addClass("oj-filmstrip-transition-prev-oldpage-from"),g.addClass("oj-filmstrip-transition-prev-newpage-from"),v&&g.addClass("oj-filmstrip-transition-display-as-firstpage"))}if(this._busyStateResolveFunc=this._addBusyState("scrolling"),m){var b=this,w=this._bDragInit;if(w&&n<0)a.filter(":visible").addClass("oj-filmstrip-transition");setTimeout(function(){b._finishHandlePage(t,n,f,u,w)},25)}else this._finishHandlePage(t,n,f,u)},_finishHandlePage:function(e,i,n,r,a){var o=this._pagesWrapper;if(r||(this._bPageChangeTransition=!0,o.on("transitionend"+this.eventNamespace+" webkitTransitionEnd"+this.eventNamespace,this._handleTransitionEndFunc)),r)this._handleTransitionEnd();else{var l=this._getPages();if(a&&h(l),i>-1){var u=s(l[i]),p=s(l[e]);u.addClass("oj-filmstrip-transition"),p.addClass("oj-filmstrip-transition"),n?(u.removeClass("oj-filmstrip-transition-next-oldpage-from"),p.removeClass("oj-filmstrip-transition-next-newpage-from"),u.addClass("oj-filmstrip-transition-next-oldpage-to"),p.addClass("oj-filmstrip-transition-next-newpage-to")):(u.removeClass("oj-filmstrip-transition-prev-oldpage-from"),p.removeClass("oj-filmstrip-transition-prev-newpage-from"),u.addClass("oj-filmstrip-transition-prev-oldpage-to"),p.addClass("oj-filmstrip-transition-prev-newpage-to"))}else if(a){t(l.filter(":visible"),"translate3d(0, 0, 0)")}}},_handleTransitionEnd:function(){this._bPageChangeTransition=!1;var e=this._pagesWrapper,t=this._getCssPositionAttr();e.off(this.eventNamespace).css(this._getCssSizeAttr(),this._componentSize).css(t,"0px");var i=null;(l.containsFocus(e[0])||this._nextButton&&l.containsFocus(this._nextButton[0])||this._prevButton&&l.containsFocus(this._prevButton[0]))&&(i=document.activeElement);for(var n=this._pagingModel.getPage(),r=this._getPages(),a=0;a<r.length;a++)a!==n&&this._hidePage(s(r[a]));if(r.removeClass("oj-filmstrip-transition oj-filmstrip-transition-next-oldpage-to oj-filmstrip-transition-next-newpage-to oj-filmstrip-transition-prev-oldpage-to oj-filmstrip-transition-prev-newpage-to oj-filmstrip-transition-display-as-firstpage oj-filmstrip-transition-display-as-lastpage"),h(r),this._updateNavigationArrowsDisplay(),i&&s(i).is(":hidden")){var o=this.element,u=l.getFirstTabStop(r[n]);u?l.focusElement(u):l.focusElement(o[0])}var p=this.options;if(this._findPage(p.currentItem)!==n){var d=this._getFirstItemOnPage(n);d&&this.option("currentItem",d,{_context:{writeback:!0}})}this._deferredHandleResize&&(this._deferredHandleResize=!1,this._handleResize()),this._updatePageInfoElem(),this._resolveBusyState()},_getItemIndex:function(e){var t=-1;if(e){var i=this._getItems();if(e.id&&o.isValidIdentifier(e.id))for(var s=0;s<i.length;s++){var n=i[s].id;if(n&&n.length>0&&n===e.id){t=s;break}}else null!=e.index&&e.index>=0&&e.index<i.length&&(t=e.index)}return t},_convertItemToObj:function(t){var i=null;return"object"===e(t)?i=t:"number"==typeof t?i={index:t}:"string"==typeof t&&(i={id:t}),i},_populateItemObj:function(e){if(e&&this._pagingModel.getPage()>=0){var t=this._getItemIndex(e);if(e.index=t,null==e.id&&-1!==t){var i=this._getItems();e.id=i[t].id}}},_findPage:function(e,t){var i=this._getItemIndex(e),s=-1;return i>-1&&(void 0===t&&(t=this._itemsPerPage),s=Math.floor(i/t)),s},_getFirstItemOnPage:function(e,t,i){var s=this._pagingModel;if(void 0===t&&(t=s.getPageCount()),e>=0&&e<t){var n=this._getItems();void 0===i&&(i=this._itemsPerPage);var r=e*i;if(r<n.length)return{id:n[r].id,index:r}}return null},_hidePage:function(e){r.subtreeHidden(e[0]),e.css("display","none").attr("aria-hidden","true"),e.find(".oj-filmstrip-item").filter(this._filterNestedFilmStripsFunc).css("display","none")},_unhidePage:function(e){e.css("display","").removeAttr("aria-hidden"),e.find(".oj-filmstrip-item").filter(this._filterNestedFilmStripsFunc).css("display",""),r.subtreeShown(e[0])},_addKeyListeners:function(){this.element.on("keydown"+this.keyEventNamespace,this._handleKeyDownFunc)},_removeKeyListeners:function(){this.element.off(this.keyEventNamespace)},_addMouseListeners:function(){this.element.on("mousedown"+this.mouseEventNamespace,this._handleMouseDownFunc).on("mousemove"+this.mouseEventNamespace,this._handleMouseMoveFunc).on("mouseup"+this.mouseEventNamespace,this._handleMouseUpFunc)},_removeMouseListeners:function(){this.element.off(this.mouseEventNamespace)},_addTouchListeners:function(){var e=this.element;if(this._IsCustomElement()){var t=function(e){return function(t){e(s.Event(t))}};this._delegatedHandleTouchStartFunc=t(this._handleTouchStartFunc),this._delegatedHandleTouchMoveFunc=t(this._handleTouchMoveFunc),e[0].addEventListener("touchstart",this._delegatedHandleTouchStartFunc,{passive:!0}),e[0].addEventListener("touchmove",this._delegatedHandleTouchMoveFunc,{passive:!1}),e.on("touchend"+this.touchEventNamespace,this._handleTouchEndFunc).on("touchcancel"+this.touchEventNamespace,this._handleTouchEndFunc)}else e.on("touchstart"+this.touchEventNamespace,this._handleTouchStartFunc).on("touchmove"+this.touchEventNamespace,this._handleTouchMoveFunc).on("touchend"+this.touchEventNamespace,this._handleTouchEndFunc).on("touchcancel"+this.touchEventNamespace,this._handleTouchEndFunc)},_removeTouchListeners:function(){this.element.off(this.touchEventNamespace)},_handleKeyDown:function(e){var t=this._pagingModel,i=t.getPage(),n=t.getPageCount(),r=-2;switch(e.keyCode){case s.ui.keyCode.RIGHT:r=this._bRTL?i-1:i+1;break;case s.ui.keyCode.LEFT:r=this._bRTL?i+1:i-1;break;case s.ui.keyCode.DOWN:r=i+1;break;case s.ui.keyCode.UP:r=i-1;break;case s.ui.keyCode.HOME:r=0;break;case s.ui.keyCode.END:r=n-1;break;default:return}if(r>-1&&r<n)t.setPage(r);else if(this._isLoopingPage()&&n>1){var a={};r===n&&(r=0,a.loopDirection="next"),-1===r&&(r=n-1,a.loopDirection="prev"),t.setPage(r,a)}e.preventDefault()},_handleMouseDown:function(e){var t=e.originalEvent;this._dragScrollStart(t)},_handleMouseMove:function(e){var t=e.originalEvent;this._dragScrollMove(e,t)},_handleMouseUp:function(e){this._dragScrollEnd()},_handleTouchStart:function(e){var t=e.originalEvent.touches;if(1===t.length){var i=t[0];this._dragScrollStart(i)}},_handleTouchMove:function(e){var t=e.originalEvent.touches[0];this._dragScrollMove(e,t),(this._bTouch||this._scrolledForThisTouch)&&e.preventDefault()},_handleTouchEnd:function(e){this._dragScrollEnd()},_dragScrollStart:function(e){if(this._pagingModel.getPageCount()>1&&!this._bPageChangeTransition){this._bTouch=!0,this._bDragInit=!1,this._bFirstToLast=!1,this._bLastToFirst=!1;var t=this._isHorizontal();this._touchStartCoord=t?e.pageX:e.pageY,this._touchStartCoord2=t?e.pageY:e.pageX}},_initDragScroll:function(e,t,i){var n=this._isHorizontal();this._touchStartCoord=n?e.pageX:e.pageY,this._touchStartCoord2=n?e.pageY:e.pageX;var r=this._getCssPositionAttr(),a=this._pagesWrapper,o=this._pagingModel,l=o.getPage(),h=o.getPageCount(),u=this._getPages(),p=1;t||i?(t&&(this._unhidePage(s(u[h-1])),a.css(r,-this._componentSize+"px"),p+=1,s(u[h-1]).addClass("oj-filmstrip-transition-display-as-firstpage")),i&&(this._unhidePage(s(u[0])),p+=1,s(u[0]).addClass("oj-filmstrip-transition-display-as-lastpage"))):(l>0&&(this._unhidePage(s(u[l-1])),a.css(r,-this._componentSize+"px"),p+=1),l<h-1&&(this._unhidePage(s(u[l+1])),p+=1)),p>1&&a.css(this._getCssSizeAttr(),p*this._componentSize),this._touchStartScroll=parseInt(a.css(r),10)},_dragScrollMove:function(e,i){if(this._bTouch){var n=this._isHorizontal(),r=(n?i.pageX:i.pageY)-this._touchStartCoord,a=(n?i.pageY:i.pageX)-this._touchStartCoord2,o=n&&this._bRTL?r>0:r<0,l=this._pagingModel,h=l.getPage(),u=l.getPageCount(),p=this._isLoopingPage(),d=p&&!o&&u>1&&0===h,c=p&&o&&u>1&&h===u-1;if(!this._bDragInit)return Math.abs(a)>Math.abs(r)&&(this._bTouch=!1,this._scrolledForThisTouch=!1),Math.abs(r)>3&&(this._initDragScroll(i,d,c),this._bDragInit=!0),this._bFirstToLast=d,void(this._bLastToFirst=c);if(d===this._bFirstToLast&&c===this._bLastToFirst||(this._dragScrollResetPages(),this._initDragScroll(i,d,c),this._bFirstToLast=d,this._bLastToFirst=c),o&&h<l.getPageCount()-1||!o&&h>0||p){var g=this.element[0],_=Math.min(.33*(n?g.offsetWidth:g.offsetHeight),100),f=this._getCssPositionAttr(),m=this._pagesWrapper,v=this._getPages();if(Math.abs(r)>=_){var P,b,w={};if(d||c?(d?(P=u-1,b=u>2?1:-1):c&&(P=0,b=u>2?u-2:-1),w.loopDirection=o?"next":"prev"):(P=o?h+1:h-1,b=o?h-1:h+1),b>-1&&b<l.getPageCount()&&this._hidePage(s(v[b])),o&&b>-1&&!c){var S=parseInt(m.css(f),10);m.css(f,S+this._componentSize+"px")}m.css(this._getCssSizeAttr(),2*this._componentSize),this._bTouch=!1,l.setPage(P,w)}else{var y=n?"translate3d("+r+"px, 0, 0)":"translate3d(0, "+r+"px, 0)";t(v.filter(":visible"),y)}this._scrolledForThisTouch=!0}this._scrolledForThisTouch&&(e.preventDefault(),e.stopPropagation())}},_dragScrollEnd:function(){if(this._bTouch&&this._bDragInit){var e=this._pagingModel.getPage();this._handlePage({previousPage:e,page:e})}this._bTouch=!1,this._bDragInit=!1,this._bFirstToLast=!1,this._bLastToFirst=!1,this._scrolledForThisTouch=!1},_dragScrollResetPages:function(){for(var e=this._pagesWrapper,t=this._getCssPositionAttr(),i=this._pagingModel,n=i.getPage(),r=i.getPageCount(),a=this._getPages(),o=0;o<a.length;o++)o!==n&&this._hidePage(s(a[o]));e.css(t,"0px"),s(a[0]).removeClass("oj-filmstrip-transition-display-as-lastpage"),s(a[r-1]).removeClass("oj-filmstrip-transition-display-as-firstpage")},_addBusyState:function(e){var t=this.element,i=n.getContext(t[0]).getBusyContext(),s="FilmStrip";s+=" (id='"+t.attr("id")+"')";var r={description:s+=": "+e};return i.addBusyState(r)},_resolveBusyState:function(){this._busyStateResolveFunc&&(this._busyStateResolveFunc(),this._busyStateResolveFunc=null)},getNodeBySubId:function(e){if(null==e)return this.element?this.element[0]:null;var t=e.subId;return"oj-filmstrip-start-arrow"===t?this.widget().find(".oj-filmstrip-arrow.oj-start").filter(this._filterNestedFilmStripsFunc)[0]:"oj-filmstrip-end-arrow"===t?this.widget().find(".oj-filmstrip-arrow.oj-end").filter(this._filterNestedFilmStripsFunc)[0]:"oj-filmstrip-top-arrow"===t?this.widget().find(".oj-filmstrip-arrow.oj-top").filter(this._filterNestedFilmStripsFunc)[0]:"oj-filmstrip-bottom-arrow"===t?this.widget().find(".oj-filmstrip-arrow.oj-bottom").filter(this._filterNestedFilmStripsFunc)[0]:null},getSubIdByNode:function(e){for(var t=this.getNodeBySubId({subId:"oj-filmstrip-start-arrow"}),i=this.getNodeBySubId({subId:"oj-filmstrip-end-arrow"}),s=this.getNodeBySubId({subId:"oj-filmstrip-top-arrow"}),n=this.getNodeBySubId({subId:"oj-filmstrip-bottom-arrow"}),r=e,a=this.element[0];r&&r!==a;){if(r===t)return{subId:"oj-filmstrip-start-arrow"};if(r===i)return{subId:"oj-filmstrip-end-arrow"};if(r===s)return{subId:"oj-filmstrip-top-arrow"};if(r===n)return{subId:"oj-filmstrip-bottom-arrow"};r=r.parentElement}return null},_CompareOptionValues:function(e,t,s){return"currentItem"===e?i.Object.compareValues(t,s):this._super(e,t,s)}})}(),t.FilmStripPagingModel=p,Object.defineProperty(t,"__esModule",{value:!0})})}();
//# sourceMappingURL=ojfilmstrip.js.map