/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojlogger"],function(t){"use strict";class e{constructor(t,e,a){this.asyncIterator=t,this.cache=e,this.cacheEntries=a}next(){const t=this.asyncIterator.next();return t.then(t=>{const e=t.value;let a=this.cache.data.length,s=a+e.data.length-1;this.cache.data=this.cache.data.concat(e.data),this.cache.metadata=this.cache.metadata.concat(e.metadata),this.cache.done=t.done,this.cacheEntries.push({start:a,end:s,miss:0,status:h.READY})}),t}}class a{constructor(t,a,s){this.asyncIterable=t,this.cache=a,this.cacheEntries=s,this[Symbol.asyncIterator]=()=>new e(this.asyncIterable[Symbol.asyncIterator](),this.cache,this.cacheEntries)}}var s,h,i;!function(t){t[t.NEVER=0]="NEVER",t[t.LRU=1]="LRU"}(s||(s={})),function(t){t[t.READY=0]="READY",t[t.FETCHING=1]="FETCHING",t[t.PURGED=2]="PURGED"}(h||(h={})),function(t){t[t.UP=0]="UP",t[t.DOWN=1]="DOWN"}(i||(i={}));return class{constructor(t,e,a){this.dataProvider=t,this.cache=e,this.options=a,this.strategy=s.NEVER,this.prefetching=!1,this.currentStart=0,this.CACHE_MISS_THRESHOLD=5,null==e&&(this.cache={data:[],metadata:[],done:!1,startIndex:0}),this.cacheQueue=[],this.modelEventHandler=this._handleModelEvent.bind(this),t.addEventListener("mutate",this.modelEventHandler),t.addEventListener("refresh",this.modelEventHandler)}destroy(){this.dataProvider&&this.modelEventHandler&&(this.dataProvider.removeEventListener("mutate",this.modelEventHandler),this.dataProvider.removeEventListener("refresh",this.modelEventHandler))}fetchFirst(t){this._resetCache();const e=this.dataProvider.fetchFirst(t);return new a(e,this.cache,this.cacheQueue)}fetchByKeys(t){return this.dataProvider.fetchByKeys(t)}containsKeys(t){return this.dataProvider.containsKeys(t)}fetchByOffset(e){void 0===this.proximity&&(this.proximity=e.size);let a=i.UP;const s=e.offset,r=s+e.size;if(s>this.currentStart&&(a=i.DOWN),this.currentStart=s,!this._isInCache(s,r))return t.info("Cache missed: "+s+" - "+r),this.cacheQueue.forEach(t=>{t.status!==h.FETCHING&&(t.start>=s&&t.start<=r||t.end<=r&&t.end>=s?(this._log("cache entry update to FETCHING - start: "+t.start+" end: "+t.end),t.status=h.FETCHING):t.miss=t.miss+1)}),this.fetchByOffsetPromise=new Promise((t,i)=>{this._log("Call fetchByOffset to fulfill cache"),this.dataProvider.fetchByOffset(e).then(i=>{for(let t=0;t<i.results.length;t++){let e=i.results[t];this.cache.data[s+t]=e.data,this.cache.metadata[s+t]=e.metadata}this._log("cache fulfilled - offset: "+s+" size: "+i.results.length),this.cacheQueue.forEach(t=>{t.status===h.FETCHING&&(this._log("cache entry update to READY - start: "+t.start+" end: "+t.end),t.status=h.READY,t.miss=0)});const c=this._getFetchByOffsetResult(s,r);t({results:c,fetchParameters:e,done:!1}),this._recalibrateCache(s,r,a)})}),this.fetchByOffsetPromise;this._updateCacheEntries(s,r);const c=this._getFetchByOffsetResult(s,r);return this._recalibrateCache(s,r,a),Promise.resolve({results:c,fetchParameters:e,done:!1})}_updateCacheEntries(t,e){this.cacheQueue.forEach(a=>{a.status!==h.PURGED&&(a.start>e||a.end<t?a.miss=a.miss+1:a.miss=0)})}_getFetchByOffsetResult(t,e){const a=t-this.cache.startIndex,s=e-this.cache.startIndex,h=[];for(let t=a;t<s;t++)h.push({data:this.cache.data[t],metadata:this.cache.metadata[t]});return h}getTotalSize(){return this.dataProvider.getTotalSize()}isEmpty(){return this.dataProvider.isEmpty()}getCapability(t){return this.dataProvider.getCapability(t)}addEventListener(t,e){this.dataProvider.addEventListener(t,e)}removeEventListener(t,e){this.dataProvider.removeEventListener(t,e)}dispatchEvent(t){return this.dataProvider.dispatchEvent(t)}_handleModelEvent(t){if("refresh"===t.type)this._handleRowsRefreshed();else if("mutate"===t.type){const e=t.detail;e.add&&this._handleRowsAdded(e.add),e.remove&&this._handleRowsRemoved(e.remove),e.update&&this._handleRowsUpdated(e.update)}}_resetCache(){this.cache.data.length=0,this.cache.metadata.length=0,this.cache.startIndex=0,this.cache.done=!1,this.cacheQueue.length=0}_recalibrateCache(t,e,a){if(this.strategy!==s.NEVER&&(this.cacheQueue.forEach(a=>{if(a.status===h.READY&&a.miss>=this.CACHE_MISS_THRESHOLD&&(a.end<t-this.proximity||a.start>e+this.proximity)){this._log("Purging cache range: "+a.start+" to "+a.end);for(let t=a.start;t<=a.end;t++)this.cache.data[t]=null,this.cache.metadata[t]=null;a.status=h.PURGED}}),this._dumpCacheStatus(),!1!==this.prefetching))for(let s=0;s<this.cacheQueue.length;s++){let r=this.cacheQueue[s];if(a===i.UP&&r.start<t&&r.end>t){r.status!==h.PURGED&&this._isInCache(r.start,r.end)||(r.status=h.FETCHING,this._log("pre-fetch cache range (before adjustment): "+r.start+" - "+r.end+" direction: "+a),this._prefetchRange(r.start,t-r.start).then(t=>{r.status=h.READY}));break}if(a===i.DOWN&&r.start<e&&r.end>e){r.status!==h.PURGED&&this._isInCache(r.start,r.end)||(r.status=h.FETCHING,this._log("pre-fetch cache range (before adjustment): "+r.start+" - "+r.end+" direction: "+a),this._prefetchRange(e,r.end-e).then(t=>{r.status=h.READY}));break}}}_prefetchRange(t,e){return this._log("pre-fetching to refill cache - offset: "+t+" size: "+e),new Promise((a,s)=>{this.dataProvider.fetchByOffset({offset:t,size:e}).then(s=>{for(let e=0;e<s.results.length;e++){let a=s.results[e];this.cache.data[t+e]=a.data,this.cache.metadata[t+e]=a.metadata}this._log("pre-fetch result returned and cache is fulfilled - offset: "+t+" size: "+e),a(!0)})})}_isInCache(t,e){if(this.strategy===s.NEVER)return!0;if(t<this.cache.startIndex||e>this.cache.startIndex+this.cache.data.length)return!1;let a=t-this.cache.startIndex,h=e-this.cache.startIndex;for(let t=a;t<h;t++)if(null==this.cache.data[t])return!1;return!0}_handleRowsMutated(t,e,a,s){const h=t.indexes;if(null==h){t[e]}else h.forEach((e,h)=>{if(e<this.cache.startIndex+this.cache.data.length)if(e>=this.cache.startIndex){const s=null!=t.data?t.data[h]:null,i=null!=t.metadata?t.metadata[h]:null;a(e,s,i)}else s&&s()})}_handleRowsAdded(t){this._log("handling add mutation event"),this._handleRowsMutated(t,"addBeforeKeys",(t,e,a)=>{this.cache.data.splice(t,0,e),this.cache.metadata.splice(t,0,a)},()=>{this.cache.startIndex++})}_handleRowsRemoved(t){this._log("handling remove mutation event"),this._handleRowsMutated(t,"keys",t=>{this.cache.data.splice(t,1),this.cache.metadata.splice(t,1)},()=>{this.cache.startIndex=Math.max(0,this.cache.startIndex-1)})}_handleRowsUpdated(t){this._log("handling update mutation event"),this._handleRowsMutated(t,"keys",(t,e,a)=>{this.cache.data.splice(t,1,e),this.cache.metadata.splice(t,1,a)})}_handleRowsRefreshed(){this._log("handling refresh event"),this._resetCache()}_log(e){t.info("[CachingDataProvider]=> "+e)}_getStatusText(t){switch(t){case h.READY:return"ready";case h.FETCHING:return"fetching";case h.PURGED:return"purged";default:return"unknown"}}_dumpCacheStatus(){this.cacheQueue.forEach(t=>{this._log("Cache entry - start: "+t.start+" end: "+t.end+" miss: "+t.miss+" status: "+this._getStatusText(t.status))})}}});
//# sourceMappingURL=ojcachingdataprovider.js.map