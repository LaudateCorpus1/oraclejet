/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojcore-base","jquery","knockout","ojs/ojdatasource-common"],function(t,e,a,r){"use strict";t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;
/**
   * @license
   * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
   * The Universal Permissive License (UPL), Version 1.0
   * as shown at https://oss.oracle.com/licenses/upl/
   * @ignore
   */
/**
   * @preserve Copyright 2013 jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   */
var i=function(t){this.data=t,this.current=0,this.Init(),this._setPageSize(10)};return t._registerLegacyNamespaceProp("ArrayPagingDataSource",i),t.Object.createSubclass(i,t.DataSource,"oj.ArrayPagingDataSource"),i.prototype.Init=function(){i.superclass.Init.call(this)},i.prototype._getSize=function(){return this._hasMore()?this.currentPageSize:this.totalSize()-this.current},i.prototype._refreshDataWindow=function(t){t=t||{},this.dataWindow=new Array(this._getSize());for(var e=0;e<this.dataWindow.length;e++)this.dataWindow[e]=this.data[this.current+e];this._refreshObservableDataWindow(),this._endIndex=this._startIndex+this.dataWindow.length-1,t.silent||this.handleEvent("sync",{data:this.dataWindow,startIndex:this.current})},i.prototype._refreshObservableDataWindow=function(){if(void 0!==this.observableDataWindow){this.observableDataWindow.removeAll();for(var t=0;t<this.dataWindow.length;t++)this.observableDataWindow.push(this.dataWindow[t])}},i.prototype.handleEvent=function(t,e){return i.superclass.handleEvent.call(this,t,e)},i.prototype.getWindow=function(){return this.dataWindow},i.prototype.getWindowObservable=function(){return void 0===this.observableDataWindow&&(this.observableDataWindow=a.observableArray(),this._refreshObservableDataWindow()),this.observableDataWindow},i.prototype.getPage=function(){return this._page},i.prototype.setPage=function(e,a){a=a||{},e=parseInt(e,10);var r=i.superclass.handleEvent;try{r.call(this,t.PagingModel.EventType.BEFOREPAGE,{page:e,previousPage:this._page})}catch(t){return Promise.reject(t)}this.pageSize=null!=a.pageSize?a.pageSize:this.pageSize,a.startIndex=e*this.pageSize;var n=this._page;this._page=e,this._startIndex=a.startIndex;var o=this;return new Promise(function(e,i){o._fetchInternal(a).then(function(){r.call(o,t.PagingModel.EventType.PAGE,{page:o._page,previousPage:n}),e(null)},function(t){o._page=n,o._startIndex=o._page*o.pageSize,i(t)})})},i.prototype.getStartItemIndex=function(){return this._startIndex},i.prototype.getEndItemIndex=function(){return this._endIndex},i.prototype.getPageCount=function(){var t=this.totalSize();return-1===t?-1:Math.ceil(t/this.pageSize)},i.prototype.fetch=function(t){var e=t||{};if(void 0!==e.pageSize&&void 0!==e.startIndex){if(!this._hasMore())return Promise.resolve();this.currentPageSize=e.startIndex+e.pageSize}return this._refreshDataWindow(null),Promise.resolve()},i.prototype._fetchInternal=function(t){var e=t||{};return void 0!==e.startIndex&&(this.current=e.startIndex),void 0!==e.pageSize&&(this.pageSize=e.pageSize,this.currentPageSize=e.pageSize),this._refreshDataWindow(t),Promise.resolve({data:this.dataWindow,startIndex:this.current})},i.prototype._hasMore=function(){return this.current+this.currentPageSize<this.totalSize()},i.prototype._setPageSize=function(t){this.pageSize=t,this.currentPageSize=t,this._refreshDataWindow(null)},i.prototype.totalSize=function(){return this.data.length},i.prototype.totalSizeConfidence=function(){return"actual"},i.prototype.getCapability=function(t){return null},i});
//# sourceMappingURL=ojarraypagingdatasource.js.map