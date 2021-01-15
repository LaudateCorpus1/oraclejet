/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports","ojs/ojcore-base","ojs/ojlogger","ojs/ojdatacollection-common","ojs/ojcachediteratorresultsdataprovider","ojs/ojdomscroller"],function(e,t,a,r,n,i){"use strict";t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t,n=n&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n,i=i&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i;class l{constructor(e,t,a){this.root=e,this.dataProvider=t,this.callback=a,this.validKeyTypes=["string","number"],this.fetching=0,this.getKey=function(e){return e.key},t&&(this.modelEventHandler=this._handleModelEvent.bind(this),t.addEventListener("mutate",this.modelEventHandler),t.addEventListener("refresh",this.modelEventHandler))}setFetching(e){const t=e?this.fetching+1:this.fetching-1;this.fetching=Math.max(0,t)}isFetching(){return 0!==this.fetching}addBusyState(e){return null!=this.callback?this.callback.addBusyState("DataProviderContentHandler "+e):()=>{}}destroy(){this.callback=null,this.dataProvider&&this.modelEventHandler&&(this.dataProvider.removeEventListener("mutate",this.modelEventHandler),this.dataProvider.removeEventListener("refresh",this.modelEventHandler))}render(){return null==this.callback.getData()&&this.fetchRows(),this.renderFetchedData()}postRender(){}getDataProvider(){return this.dataProvider}setDataProvider(e){this.dataProvider=e}isReady(){return!this.fetching}verifyKey(e){return this.validKeyTypes.indexOf(typeof e)>-1}handleModelRefresh(){this.callback.setData(null),this.fetchRows()}handleItemsAdded(e){}handleItemsRemoved(e){}handleItemsUpdated(e){}_handleModelEvent(e){if("refresh"===e.type)this.handleModelRefresh();else if("mutate"===e.type){const t=e.detail;t.add&&this.handleItemsAdded(t.add),t.remove&&this.handleItemsRemoved(t.remove),t.update&&this.handleItemsUpdated(t.update)}}}var s;(s=e.VirtualizationStrategy||(e.VirtualizationStrategy={}))[s.HIGH_WATER_MARK=0]="HIGH_WATER_MARK",s[s.VIEWPORT_ONLY=1]="VIEWPORT_ONLY";class d{constructor(e,t,a,r,n){this.element=e,this.dataProvider=t,this.asyncIterator=a,this.callback=r,this.options=n,this._handleScroll=e=>{const t=this.element,a=this._getScrollTop(t),r=t.scrollHeight-t.clientHeight;r>0&&this._handleScrollerScrollTop(a,r)},this._handleModelEvent=e=>{if("mutate"===e.type){const t=e.detail;if(t.add){let e=t.add.indexes;const a=t.add.addBeforeKeys;if(null!=a){const r=Array.from(t.add.keys);e=this._handleModelInsert(a,r)}null!=e&&(e=e.sort((e,t)=>e-t),this._handleItemsAddedOrRemoved(e,"added"),this.rowCount=this.rowCount+e.length)}if(t.remove){const e=Array.from(t.remove.keys);let a=this._handleModelDelete(e);a=a.sort((e,t)=>t-e),this._handleItemsAddedOrRemoved(a,"removed"),this.rowCount=Math.max(0,this.rowCount-a.length)}}},this.initialScrollTop=this.element.scrollTop,this.scrollListener=this._handleScroll.bind(this),this._getScrollEventElement().addEventListener("scroll",this.scrollListener),this.modelEventListener=this._handleModelEvent.bind(this),t.addEventListener("mutate",this.modelEventListener),this.fetchSize=n.fetchSize>0?n.fetchSize:25,this.maxCount=n.maxCount>0?n.maxCount:500,this.rowCount=null!=n.keys?n.keys.length:this.fetchSize,this.viewportSize=-1,this.viewportPixelSize=this.element.offsetHeight,this.currentScrollTop=0,this.currentRenderedPoint={startIndex:0,endIndex:isNaN(this.rowCount)?this.fetchSize:this.rowCount,maxCountLimit:!1,done:!1,keys:n.keys},this.lastFetchTrigger=0,this.checkViewportCount=0}checkViewport(){if(this.currentRenderedPoint.done||this.currentRenderedPoint.maxCountLimit)return!0;let e=this._isRangeValid(0,this.currentRenderedPoint.end);return e?this.checkViewportCount=0:(this.checkViewportCount+=1,this.checkViewportCount===r.CHECKVIEWPORT_THRESHOLD&&a.warn("Viewport not satisfied after multiple fetch, make sure the component is height constrained or specify a scroller."),this._doFetch()),e}_isRenderingViewportOnly(t){return this.options.strategy===e.VirtualizationStrategy.VIEWPORT_ONLY&&void 0!==t.getIndexForRange}setViewportRange(e,t){null!=this.currentRenderedPoint.start&&null!=this.currentRenderedPoint.end||(this.currentRenderedPoint.start=e,this.currentRenderedPoint.end=t,this._log("got pixel range: "+e+" to "+t+" for renderedPoint: "+this.currentRenderedPoint.startIndex+" "+this.currentRenderedPoint.endIndex)),this._checkRenderedPoints()&&(this.fetchPromise=null,this.currentScrollTop>=this.lastFetchTrigger&&(this.nextFetchTrigger=void 0))}destroy(){this._getScrollEventElement().removeEventListener("scroll",this.scrollListener),this.dataProvider.removeEventListener("mutate",this.modelEventListener)}_getScrollEventElement(){return this.element===document.body||this.element===document.documentElement?window:this.element}_getScrollTop(e){return e===document.documentElement&&(void 0===this.useBodyScrollTop&&(this.useBodyScrollTop=this.initialScrollTop===e.scrollTop),this.useBodyScrollTop)?0+document.body.scrollTop:0+e.scrollTop}_setRangeLocal(e,t,a,r,n,i){this._log("rendering row: "+e+" to "+t+" covering range: "+(null==a?"unknown":a)+" to "+(null==r?"unknown":r)),this.callback.beforeFetchByOffset(e,t),this.currentRenderedPoint={startIndex:e,endIndex:t,start:a,end:r,maxCountLimit:n,done:i,keys:[]};const l={offset:e,size:t-e};this.fetchByOffsetPromise=this.dataProvider.fetchByOffset(l).then(l=>{let s=!0;if(null!=a&&null!=r&&(s=this._isRangeValid(a,r)),s){this._log("fetchByOffset "+e+" to "+t+" returned and result is still applicable");let a=[],r=[],s=this.currentRenderedPoint.keys;l.results.forEach(e=>{a.push(e.data),r.push(e.metadata),s.push(e.metadata.key)});let d={};d.startIndex=e,d.maxCountLimit=n,d.done=i,d.value={},d.value.data=a,d.value.metadata=r,this.callback.fetchSuccess(d),this.fetchByOffsetPromise=null}else this._log("fetchByOffset "+e+" to "+t+" returned but result is NO LONGER applicable"),this.fetchByOffsetPromise=null,this.callback.fetchError("notValid"),this._checkRenderedPoints()})}_handleScrollerScrollTop(e,t){if(this.currentScrollTop=e,!this.fetchPromise&&this.asyncIterator){if(isNaN(this.nextFetchTrigger)&&this.lastMaxScrollTop!==t&&(this.nextFetchTrigger=Math.max(0,(t-e)/2),this.lastFetchTrigger=e,this.lastMaxScrollTop=t,this._log("next fetch trigger point: "+Math.round(this.nextFetchTrigger))),null!=this.nextFetchTrigger&&e-this.lastFetchTrigger>this.nextFetchTrigger)return void this._doFetch();if(t-e<1)return void this._doFetch()}this.fetchPromise&&e>this.lastFetchTrigger||this._checkRenderedPoints()}_isRangeValid(e,t){const a=this.currentScrollTop;return this.viewportPixelSize=this.element.offsetHeight,a>=e&&a+this.viewportPixelSize<=t}_checkRenderedPoints(){if(null==this.currentRenderedPoint.start||null==this.currentRenderedPoint.end)return!0;if(this._isRangeValid(this.currentRenderedPoint.start,this.currentRenderedPoint.end))return!0;if(this._isRenderingViewportOnly(this.callback)){const e=this.callback,t=Math.max(0,this.currentScrollTop-this.viewportPixelSize),a=Math.min(this.currentScrollTop+2*this.viewportPixelSize),r=e.getIndexForRange(t,a),n=Math.max(0,r.startIndex),i=null==r.endIndex?this.rowCount:Math.min(this.rowCount,r.endIndex);if(n<this.currentRenderedPoint.startIndex||i>this.currentRenderedPoint.endIndex){const e=i===this.lastIndex,r=i===this.maxCount;return this._setRangeLocal(n,i,t,a,r,e),!1}}return!0}_doFetch(){this._log("fetching next set of rows from asyncIterator"),this.callback.beforeFetchNext()?(-1===this.viewportSize&&(this.viewportSize=this.currentRenderedPoint.endIndex-this.currentRenderedPoint.startIndex),this.fetchPromise=this._fetchMoreRows().then(e=>{if(e.maxCountLimit){this._log("reached max count");let t=e.size>0?null:this.currentRenderedPoint.start,a=e.size>0?null:this.currentRenderedPoint.end;this._setRangeLocal(this.currentRenderedPoint.startIndex,this.maxCount,t,a,!0,!1),this.fetchPromise=null,this.asyncIterator=null}else if(e.size>0||!0===e.done){let t=0;this._isRenderingViewportOnly(this.callback)&&(t=this.callback.getIndexForPosition(this.currentScrollTop));const a=t,r=this.currentRenderedPoint.endIndex+e.size;e.done&&(this.lastIndex=r),this._setRangeLocal(a,r,null,null,!1,e.done)}},e=>{this.callback.fetchError(e),this.fetchPromise=null,this.nextFetchTrigger=void 0})):(this._log("fetch is aborted due to beforeFetchCallback returning false"),this.nextFetchTrigger=void 0)}_fetchMoreRows(){if(!this.fetchPromise){const e=this.maxCount-this.rowCount;return e>0&&!this.currentRenderedPoint.done&&null!=this.asyncIterator?(this.fetchPromise=this.asyncIterator.next().then(t=>{let a;return this.fetchPromise=null,null!=t&&(a={done:t.done,maxCountLimit:t.maxCountLimit},null!=t.value&&(a.size=t.value.data.length,this.rowCount+=t.value.data.length,e<this.fetchSize&&(a.maxCountLimit=!0,t.value.data.length>e&&(a.size=e))),a.maxCountLimit&&(this.asyncIterator=null)),Promise.resolve(a)}),this.fetchPromise):Promise.resolve({maxCount:this.maxCount,maxCountLimit:!0})}return this.fetchPromise}_handleModelInsert(e,t){const a=this.currentRenderedPoint.keys;e.forEach((e,r)=>{const n=a.indexOf(e),i=t[r];n>-1&&a.splice(n,0,i)});const r=[],n=this.currentRenderedPoint.startIndex;return t.forEach(e=>{const t=a.indexOf(e);t>-1?r.push(t+n):this.currentRenderedPoint.done=!1}),r}_handleModelDelete(e){const t=[],a=this.currentRenderedPoint.startIndex,r=this.currentRenderedPoint.keys,n=[];return e.forEach(e=>{const i=r.indexOf(e);i>-1&&(t.push(a+i),n.push(e))}),n.forEach(e=>{r.splice(r.indexOf(e),1)}),t}_updateRenderedPoint(e,t,a){e<t.startIndex?"added"===a?(t.startIndex=t.startIndex+1,t.endIndex=t.endIndex+1):"removed"===a&&(t.startIndex=t.startIndex-1,t.endIndex=t.endIndex-1):e<=t.endIndex&&("added"===a?t.endIndex=t.endIndex+1:"removed"===a&&(t.endIndex=t.endIndex-1))}_handleItemsAddedOrRemoved(e,t){e.forEach(e=>{this._updateRenderedPoint(e,this.currentRenderedPoint,t)})}_log(e){a.info("[VirtualizeDomScroller]=> "+e)}}class o extends HTMLElement{}e.IteratingDataProviderContentHandler=class extends l{constructor(t,a,r,n){super(t,a,r),this.root=t,this.dataProvider=a,this.callback=r,this.scrollPolicyOptions=n,this.fetchRows=()=>{if(this.isReady()){this.setFetching(!0);let e={clientId:this._clientId};e.size=this._isLoadMoreOnScroll()?this.getFetchSize():-1,this.dataProviderAsyncIterator=this.getDataProvider().fetchFirst(e)[Symbol.asyncIterator]();let t=this.addBusyState("call next on iterator"),a=this.dataProviderAsyncIterator.next(),r=e.size,n=e=>{if(e.done||-1!==r||"function"==typeof this.getDataProvider().getPageCount)return e;return this.dataProviderAsyncIterator.next().then(function(t){return e.done=t.done,e.value.data=e.value.data.concat(t.value.data),e.value.metadata=e.value.metadata.concat(e.value.metadata),n(e)},function(e){this.fetchError(e)})};a.then(e=>n(e),e=>{t(),this.fetchError(e)}).then(e=>{if(this.isFetching()){if(t(),null==this.callback)return;this.initialFetch=!0,this.callback.setData(e)}},e=>{t(),this.fetchError(e)})}},this._registerDomScroller=t=>{let a={fetchSize:this.getFetchSize(),maxCount:this._getMaxCount(),keys:t,strategy:this.isRenderingViewportOnly()?e.VirtualizationStrategy.VIEWPORT_ONLY:e.VirtualizationStrategy.HIGH_WATER_MARK};this.domScroller=new d(this._getScroller(),this.getDataProvider(),this.dataProviderAsyncIterator,this,a)},this._clientId=Symbol()}getDataProvider(){if(null==this.wrappedDataProvider){const e=this.dataProvider.getCapability("fetchCapability");null==e||null==e.caching||"none"==e.caching?this.wrappedDataProvider=new n(this.dataProvider):this.wrappedDataProvider=this.dataProvider}return this.wrappedDataProvider}setDataProvider(e){this.wrappedDataProvider=null,this.dataProvider=e}postRender(){this.initialFetch=!1}destroy(){super.destroy(),this.domScroller&&this.domScroller.destroy()}isRenderingViewportOnly(){return!1}_isLoadMoreOnScroll(){return!0}_getScroller(){const e=this.scrollPolicyOptions.scroller;return null!=e?e:this.root}getFetchSize(){return this.scrollPolicyOptions.fetchSize}_getMaxCount(){return this.scrollPolicyOptions.maxCount}isInitialFetch(){return this.initialFetch}renderSkeletonsForLoadMore(){}renderFetchedData(){if(null==this.callback)return;let e=[];const t=this.callback.getData();if(null==t||null==t.value)return e;const r=t.value.data,n=t.value.metadata,i=void 0===t.startIndex?0:t.startIndex;if(r.length===n.length){if(e.push(this.renderData(r,n,i)),this._isLoadMoreOnScroll()){if(!t.done&&(0===r.length&&a.info("handleFetchedData: zero data returned while done flag is false"),!t.maxCountLimit)){if(null==this.domScroller){const e=n.map(e=>e.key);this._registerDomScroller(e)}e.push(this.renderSkeletonsForLoadMore())}t.maxCountLimit&&this._handleScrollerMaxRowCount()}return this.setFetching(!1),e}}beforeFetchNext(){return null==this.domScrollerFetchResolve&&(this.domScrollerFetchResolve=this.addBusyState("dom scroller call next on iterator"),!0)}beforeFetchByOffset(e,t){return null==this.domScrollerFetchResolve&&(this.domScrollerFetchResolve=this.addBusyState("dom scroller call next on iterator")),!0}fetchSuccess(e){this.domScrollerFetchResolve(),this.domScrollerFetchResolve=null,null!=e&&this.callback.setData(e)}fetchError(e){this.domScrollerFetchResolve(),this.domScrollerFetchResolve=null,"notValid"!==e&&a.error("an error occurred during data fetch, reason: "+e)}_handleScrollerMaxRowCount(){}renderData(e,t,r){if(null==this.callback)return null;let n=[];for(let i=0;i<e.length;i++){if(null==e[i]||null==t[i])continue;if(!this.verifyKey(t[i].key)){a.error("encounted a key with invalid data type.  Acceptable data types for key are: "+this.validKeyTypes),n=[];break}let l=this.addItem(t[i].key,i+r,e[i],!0);l&&n.push(l)}return n}_handleItemsMutated(e,t,a){this.callback.updateData(function(r){let n={startIndex:r.startIndex,done:r.done,value:{data:r.value.data.slice(0),metadata:r.value.metadata.slice(0)}},i=e.indexes;const l=Array.from(e[t]);null==i&&(i=l.map(e=>this._findIndex(r.value.metadata,e)));const s=isNaN(r.startIndex)?0:r.startIndex,d=Math.max(s+r.value.data.length,this.getFetchSize());return i.forEach((t,r)=>{const i=l[r],o=null!=e.data?e.data[r]:null,h=null!=e.metadata?e.metadata[r]:null;t>=s&&t<=d&&a(n,i,t,o,h)}),{renderedData:n}}.bind(this))}_findIndex(e,a){for(let r=0;r<e.length;r++)if(t.KeyUtils.equals(a,e[r].key))return r;return-1}handleModelRefresh(){this.domScroller&&this.domScroller.destroy(),this.domScroller=null,super.handleModelRefresh()}handleItemsAdded(e){this.callback.updateData(function(t){let a={startIndex:t.startIndex,done:t.done,maxCountLimit:t.maxCountLimit,value:{data:t.value.data.slice(0),metadata:t.value.metadata.slice(0)}},r=e.indexes;const n=e.addBeforeKeys,i=e.keys;if(null==r&&null==n)a.done&&!a.maxCountLimit&&(a.value.data.push(e.data),a.value.metadata.push(e.metadata));else{let t=0;i.forEach(function(){const i=e.data[t],l=e.metadata[t];let s=-1;null!=r&&null!=r[t]?s=r[t]:null!=n&&null!=n[t]&&(s=this._findIndex(a.value.metadata,n[t])),s>-1&&s<a.value.data.length?(a.value.data.splice(s,0,i),a.value.metadata.splice(s,0,l)):a.done&&!a.maxCountLimit&&(a.done=!1),t++}.bind(this))}return{renderedData:a}}.bind(this)),super.handleItemsAdded(e)}handleItemsRemoved(e){this._handleItemsMutated(e,"keys",(e,t)=>{let a=this._findIndex(e.value.metadata,t);a>-1&&(e.value.data.splice(a,1),e.value.metadata.splice(a,1))}),super.handleItemsRemoved(e)}handleCurrentRangeItemUpdated(e){}handleItemsUpdated(e){this._handleItemsMutated(e,"keys",(e,t,a,r,n)=>{e.value.data.splice(a,1,r),e.value.metadata.splice(a,1,n),this.handleCurrentRangeItemUpdated(t)}),super.handleItemsUpdated(e)}},e.IteratingTreeDataProviderContentHandler=class extends l{constructor(t,a,r,n){super(t,a,r),this.root=t,this.dataProvider=a,this.callback=r,this.scrollPolicyOptions=n,this.fetchRows=()=>{if(this.isReady()){let e={clientId:this._clientId};e.size=this._isLoadMoreOnScroll()?this.getFetchSize():-1;let t=this.getDataProvider().fetchFirst(e)[Symbol.asyncIterator]();this._cachedIteratorsAndResults.root={iterator:t,cache:null};let a={value:{data:[],metadata:[]}};this._fetchNextFromIterator(t,null,e,a).then(this._setNewData)}},this._fetchNextFromIterator=(e,t,a,r)=>{if(null==e)return Promise.resolve();this.setFetching(!0);let n=this.addBusyState("call next on iterator"),i=e.next(),l=a.size,s=t=>{if(t.done||-1!==l||"function"==typeof this.getDataProvider().getPageCount)return t;return e.next().then(function(e){return t.done=e.done,t.value.data=t.value.data.concat(e.value.data),t.value.metadata=t.value.metadata.concat(t.value.metadata),s(t)},function(e){this._handleFetchError(e)})};return i.then(e=>s(e),()=>{n(),this._handleFetchError()}).then(e=>{if(this.isFetching()){if(n(),this.setFetching(!1),null==this.callback||null==e)return;return this.initialFetch=!0,e.done&&this._cachedIteratorsAndResults[null===t?"root":t]&&(this._cachedIteratorsAndResults[null===t?"root":t].iterator=null),this.handleNextItemInResults(a,t,e,r)}},()=>{n(),this._handleFetchError()})},this._setNewData=e=>{null!=this.callback&&this.callback.updateData(function(t){let a,r=e.value.data,n=e.value.metadata;return a=null==t?{value:{data:r,metadata:n},done:this._checkIteratorAndCache()}:{value:{data:t.value.data.concat(r),metadata:t.value.metadata.concat(n)},done:this._checkIteratorAndCache()},{renderedData:a}}.bind(this))},this._checkIteratorAndCache=()=>{let e=this._cachedIteratorsAndResults,t=Object.keys(e).map(function(t){return e[t]}),a=!0;return t.forEach(function(e){!e||null==e.iterator&&null==e.cache||(a=!1)}),a},this.fetchMoreRows=()=>{if(this.isReady()){let e=this._getLastEntryMetadata(),t=e.key;!e.isLeaf&&this._isExpanded(t)||(t=e.parentKey);let a={};a.size=this._isLoadMoreOnScroll()?this.getFetchSize():-1;let r=this._cachedIteratorsAndResults[null===t?"root":t],n=null,i=null;null!=r&&(n=r.cache,i=r.iterator);let l={value:{data:[],metadata:[]}};return this.handleNextItemInResults(a,t,n,l).then(function(){let e,r=this._cachedIteratorsAndResults[null===t?"root":t];return null!=r&&(e=r.iterator),this._fetchFromAncestors(a,t,e,l)}.bind(this))}return Promise.resolve()},this._fetchFromAncestors=(e,t,a,r)=>{let n=this;if(n._checkFinalResults(e,r))return r.done=this._checkIteratorAndCache(),Promise.resolve(r);return this._fetchNextFromIterator(a,t,e,r).then(function(t,a){if(n._checkFinalResults(e,a)||null===t)return a.done=this._checkIteratorAndCache(),Promise.resolve(a);let r=n._getItemByKey(t,a).metadata.parentKey,i=this._cachedIteratorsAndResults[null===r?"root":r],l=null,s=null;return null!=i&&(l=i.cache,s=i.iterator),this.handleNextItemInResults(e,r,l,a).then(this._fetchFromAncestors.bind(this,e,r,s,a))}.bind(this,t,r))},this._getLastEntryMetadata=()=>{let e=this.callback.getData();if(e&&e.value.metadata.length){let t=e.value.metadata;return t[t.length-1]}return null},this._isExpanded=e=>this.callback.getExpanded().has(e),this.getChildDataProvider=e=>null==e?this.dataProvider:this.dataProvider.getChildDataProvider(e),this.handleNextItemInResults=(e,t,a,r)=>{if(null===a||0===a.value.data.length||this._checkFinalResults(e,r))return null!=a&&a.value.data.length?this._cachedIteratorsAndResults[null===t?"root":t]&&(this._cachedIteratorsAndResults[null===t?"root":t].cache=a):this._cachedIteratorsAndResults[null===t?"root":t]&&(this._cachedIteratorsAndResults[null===t?"root":t].cache=null),this._checkFinalResults(e,r)||null==this._cachedIteratorsAndResults[null===t?"root":t].iterator?(r.done=this._checkIteratorAndCache(),Promise.resolve(r)):this._fetchNextFromIterator(this._cachedIteratorsAndResults[null===t?"root":t].iterator,t,e,r);let n=a.value.data.shift(),i=a.value.metadata.shift(),l=this._updateMetadata(i,t,r);if(r.value.data.push(n),r.value.metadata.push(l),this._isExpanded(l.key)){let e=this.getChildDataProvider(l.key);if(null!=e){let n={clientId:this._clientId};n.size=this._isLoadMoreOnScroll()?this.getFetchSize():-1;let i=e.fetchFirst(n)[Symbol.asyncIterator]();return this._cachedIteratorsAndResults[null===l.key?"root":l.key]={iterator:i,cache:null},this._fetchNextFromIterator(i,l.key,n,r).then(this.handleNextItemInResults.bind(this,n,t,a,r))}}return this.handleNextItemInResults(e,t,a,r)},this._checkFinalResults=(e,t)=>t.value.data.length>=e.size&&-1!==e.size,this._updateMetadata=(e,t,a)=>{let r=0,n=this._getLastItemByParentKey(t,a),i=null==n?0:n.metadata.indexFromParent+1,l=null===this.getChildDataProvider(e.key);if(null!=t){r=this._getItemByKey(t,a).metadata.treeDepth+1}let s=this._isExpanded(e.key);return{key:e.key,isLeaf:l,parentKey:t,indexFromParent:i,treeDepth:r,expanded:s}},this._getIndexByKey=(e,t)=>{var a=-1;return t.some(function(t,r){if(t.key===e)return a=r,!0}),a},this._getLastItemByParentKey=(e,t)=>{var a=null;if(t&&t.value.metadata.slice().reverse().some(function(r,n){if(r.parentKey===e)return a={data:t.value.data[n],metadata:r},!0}),a)return a;let r=this.callback.getData();return r&&r.value.metadata.slice().reverse().some(function(t,n){if(t.parentKey===e)return a={data:r.value.data[n],metadata:t},!0}),a},this._getItemByKey=(e,t)=>{var a=null;if(t&&t.value.metadata.some(function(r,n){if(r.key===e)return a={data:t.value.data[n],metadata:r},!0}),a)return a;let r=this.callback.getData();return r&&r.value.metadata.some(function(t,n){if(t.key===e)return a={data:r.value.data[n],metadata:t},!0}),a},this.expand=e=>{let t=this.getChildDataProvider(e);if(null===t)return;let a=setTimeout(function(){this.callback.getExpandingKeys().has(e)&&this.callback.updateSkeletonKeys(e)}.bind(this),250),r=this.getFetchSize(),n={clientId:this._clientId,size:r},i=t.fetchFirst(n)[Symbol.asyncIterator]();return this._cachedIteratorsAndResults[e]={iterator:i,cache:null},this._fetchNextFromIterator(i,e,n,{value:{data:[],metadata:[]}}).then(function(t){null!=this.callback&&this.callback.updateExpand(function(n,i,l,s){if(a&&clearTimeout(a),i.has(e)&&(i=i.delete([e])),!l.has(e)||!s.has(e))return{expandedSkeletonKeys:i};if(null==t)return{expandedSkeletonKeys:i,expandingKeys:l.delete([e])};let d,o,h,c=t.value.data,u=t.value.metadata;if(n){let t=n.value.data,a=n.value.metadata,i=this._getIndexByKey(e,a);if(-1!==i){let e=c.length,l=t.slice(0,i+1).concat(c),s=a.slice(0,i+1).concat(u),m=n.done;e<r?(l=l.concat(t.slice(i+1)),s=s.concat(a.slice(i+1))):(o=t.slice(i+1),h=a.slice(i+1),o.length>0&&(m=!1,null!=this.domScroller&&this.domScroller.setAsyncIterator({next:this.fetchMoreRows.bind(this)}))),d={value:{data:l,metadata:s},done:m}}}return null==d&&(d={value:{data:c,metadata:u},done:!0}),null!=o&&this._recacheData(o,h),{expandedSkeletonKeys:i,expandingKeys:l=l.delete([e]),renderedData:d}}.bind(this))}.bind(this))},this._recacheData=(e,t)=>{for(let a=e.length-1;a>=0;a--){let r=e[a],n=t[a],i=n.parentKey,l=this._cachedIteratorsAndResults[null===i?"root":i].cache;null==l?this._cachedIteratorsAndResults[null===i?"root":i].cache={done:!1,value:{data:[r],metadata:[n]}}:(l.value.data.unshift(r),l.value.metadata.unshift(n))}},this._getLocalDescendentCount=(e,t)=>{let a=0,r=e[t].treeDepth,n=e.length;for(let i=t+1;i<n;i++){if(!(e[i].treeDepth>r))return a;a+=1}return a},this._registerDomScroller=()=>{let t={asyncIterator:{next:this.fetchMoreRows.bind(this)},fetchSize:this.getFetchSize(),fetchTrigger:this.callback.getSkeletonHeight()*this.getLoadMoreCount(),maxCount:this._getMaxCount(),initialRowCount:this.getFetchSize(),strategy:e.VirtualizationStrategy.HIGH_WATER_MARK,isOverflow:this._getOverflowFunc(),success:e=>{this.handleFetchSuccess(e)},error:()=>{this._handleFetchError()},beforeFetch:()=>this.handleBeforeFetchNext(),beforeFetchByOffset:()=>{this.handleBeforeFetchByOffset()}};this.domScroller=new i(this._getScroller(),this.getDataProvider(),t)},this.getLoadMoreCount=()=>0,this._getOverflowFunc=()=>this._getScroller()!==this.root?this._isLastItemInViewport.bind(this):null,this._isLastItemInViewport=()=>{var e="."+this.callback.getItemStyleClass()+", ."+this.callback.getGroupStyleClass(),t=this.root.querySelectorAll(e),a=t[t.length-1];if(a){var r=a.getBoundingClientRect();if(r.top>=0&&r.bottom<=document.documentElement.clientHeight)return!1}return!0},this._cachedIteratorsAndResults={},this._clientId=Symbol()}postRender(){this.initialFetch=!1}destroy(){super.destroy(),this.domScroller&&this.domScroller.destroy()}_isLoadMoreOnScroll(){return!0}_getScroller(){const e=this.scrollPolicyOptions.scroller;return null!=e?e:this.root}getFetchSize(){return this.scrollPolicyOptions.fetchSize}_getMaxCount(){return this.scrollPolicyOptions.maxCount}isInitialFetch(){return this.initialFetch}renderSkeletonsForLoadMore(){}renderSkeletonsForExpand(e){}renderFetchedData(){if(null==this.callback)return;let e=this._renderOutOfRangeData();const t=this.callback.getData();if(null==t||null==t.value)return e;const r=t.value.data,n=t.value.metadata;return r.length===n.length?(e.push(this.renderData(r,n)),this._isLoadMoreOnScroll()&&(t.done||(0===r.length&&a.info("handleFetchedData: zero data returned while done flag is false"),t.maxCountLimit||(null==this.domScroller&&this._registerDomScroller(),e.push(this.renderSkeletonsForLoadMore()))),t.maxCountLimit&&this._handleScrollerMaxRowCount()),e):void 0}handleBeforeFetchNext(){return!this.isFetching()}handleBeforeFetchByOffset(){}handleFetchSuccess(e){null!=e&&this._setNewData(e)}_handleFetchError(){this.setFetching(!1)}_handleScrollerMaxRowCount(){}renderData(e,t){if(null==this.callback)return null;let r=[],n=this.callback.getSkeletonKeys();for(let i=0;i<e.length;i++){if(null==e[i]||null==t[i])continue;if(!this.verifyKey(t[i].key)){a.error("encounted a key with invalid data type.  Acceptable data types for key are: "+this.validKeyTypes),r=[];break}let l=this.addItem(t[i],i,e[i],!0);l&&(r.push(l),n.has(t[i].key)&&r.push(this.renderSkeletonsForExpand(t[i].key)))}return r}_renderOutOfRangeData(){return[]}_handleItemsMutated(e,t,a,r){null!=this.callback&&this.callback.updateData(function(n,i){let l=i,s={startIndex:n.startIndex,done:n.done,value:{data:n.value.data.slice(0),metadata:n.value.metadata.slice(0)}};const d=Array.from(e[t]);let o=d.map(e=>this._findIndex(n.value.metadata,e));this.domScroller&&a(o);const h=isNaN(n.startIndex)?0:n.startIndex,c=Math.max(h+n.value.data.length,this.getFetchSize());let u=!1;if(o.forEach((t,a)=>{const n=d[a],i=null!=e.data?e.data[a]:null,o=null!=e.metadata?e.metadata[a]:null;if(t>=h&&t<=c){let e=r(s,n,t,i,o,l);null!=e&&(l=e),u=!0}}),u)return l!==i?{renderedData:s,expandingKeys:l}:{renderedData:s}}.bind(this))}_findIndex(e,a){for(let r=0;r<e.length;r++)if(t.KeyUtils.equals(a,e[r].key))return r;return-1}handleModelRefresh(){this.domScroller&&this.domScroller.destroy(),this.domScroller=null,this._cachedIteratorsAndResults={},super.handleModelRefresh()}handleItemsAdded(e){null!=this.callback&&(this.callback.updateData(function(t,a){let r={startIndex:t.startIndex,done:t.done,maxCountLimit:t.maxCountLimit,value:{data:t.value.data.slice(0),metadata:t.value.metadata.slice(0)}},n=e.indexes;const i=e.addBeforeKeys,l=e.parentKeys;let s,d=[];return null==n&&null==i&&null==l?r.done&&!r.maxCountLimit&&(r.value.data.push(e.data),s=this._updateMetadata(e.metadata,null,r),r.value.metadata.push(s)):null!=l&&(null==n&&(n=[]),l.forEach(function(t,a){const l=e.data[a],o=e.metadata[a];let h=-1;if(null===t||this._isExpanded(t)&&this._getItemByKey(t))if(null!=i)if(null!=i[a]){h=this._findIndex(r.value.metadata,i[a])}else h=this._findIndex(r.value.metadata,this._getLastItemByParentKey(t).metadata.key)+1;else if(null!=n){let e=this._findIndex(r.value.metadata,t);h=-1===e?n[a]+1:e+n[a]+1}else h=this._findIndex(r.value.metadata,this._getLastItemByParentKey(t).metadata.key)+1;h>-1?(r.value.data.splice(h,0,l),s=this._updateMetadata(o,t,r),r.value.metadata.splice(h,0,s),-1===n.indexOf(h)&&n.push(h),this._isExpanded(o.key)&&d.push(o.key)):r.done&&!r.maxCountLimit&&(r.value.data.push(l),r.value.metadata.push(o))}.bind(this))),this.domScroller&&this.domScroller.handleItemsAdded&&this.domScroller.handleItemsAdded(n),{expandingKeys:a.add(d),renderedData:r}}.bind(this)),super.handleItemsAdded(e))}handleItemsRemoved(e){this._handleItemsMutated(e,"keys",e=>{this.domScroller.handleItemsRemoved&&this.domScroller.handleItemsRemoved(e)},(e,t)=>{let a=this._findIndex(e.value.metadata,t);if(a>-1){let t=this._getLocalDescendentCount(e.value.metadata,a)+1;e.value.data.splice(a,t),e.value.metadata.splice(a,t)}}),super.handleItemsRemoved(e)}handleCurrentRangeItemUpdated(){}handleItemsUpdated(e){this._handleItemsMutated(e,"keys",e=>{this.domScroller.handleItemsUpdated&&this.domScroller.handleItemsUpdated(e)},(e,t,a,r,n,i)=>{let l=e.value.metadata[a],s=l.isLeaf,d=this._updateMetadata(n,l.parentKey,{value:{data:[r],metadata:[n]}});return s&&!d.isLeaf&&(i=i.add([d.key])),e.value.data.splice(a,1,r),e.value.metadata.splice(a,1,d),this.handleCurrentRangeItemUpdated(),i}),super.handleItemsUpdated(e)}checkViewport(){if(this.domScroller&&this.isReady()){let e=this.domScroller.checkViewport();null!=e&&this.fetchPromise!==e&&(this.fetchPromise=e,e.then(function(e){this.fetchPromise=null,null!=e&&this.handleFetchSuccess(e)}.bind(this)))}}collapse(e){e.forEach(function(e){null!=this._cachedIteratorsAndResults[e]&&(this._cachedIteratorsAndResults[e].iterator=null,this._cachedIteratorsAndResults[e].cache=null)}.bind(this))}},e.KeyedElement=o,e.VirtualizeDomScroller=d,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=ojvcollection.js.map