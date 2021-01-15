/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojkoshared","ojs/ojcustomelement-utils","knockout","ojs/ojcore-base","ojs/ojlogger","ojs/ojcontext"],function(e,n,t,o,r,i){"use strict";e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e,o=o&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o,i=i&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i,e.registerPreprocessor("oj-bind-dom",function(e){var t,o="ko _ojBindDom_:",r=function(e){if(null!=e){var t=n.AttributeUtils.getExpressionInfo(e).expr;return null==t&&(t="'"+e+"'"),t}return null}(e.getAttribute("config"));r&&(o+=r);var i=document.createComment(o),l=document.createComment("/ko");t=[i];var a=e.parentNode;for(a.insertBefore(i,e);e.childNodes.length>0;){var d=e.childNodes[0];a.insertBefore(d,e),t.push(d)}return t.push(l),a.replaceChild(l,e),t}),
/**
   * @license
   * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
   * The Universal Permissive License (UPL), Version 1.0
   * as shown at https://oss.oracle.com/licenses/upl/
   * @ignore
   */
t.bindingHandlers._ojBindDom_={init:function(e,l,a,d,s){var u,c,p;function f(l){c||(c=i.getContext(e.parentNode).getBusyContext().addBusyState({description:"oj-bind-dom is waiting on config Promise resolution"})),function(){if(!p){var t=function(t){var o=e.parentNode;for(;o&&!n.ElementUtils.isValidCustomElementName(o.localName);)o=o.parentNode;o||(o=t?t._nearestCustomParent:null);return o}(s.$current),r=function(n,t){var o=!1,r=t&&Object.prototype.hasOwnProperty.call(t,"_immediate");e.parentNode===n?o=!0:r&&!e.parentNode.parentNode&&(o=t._immediate);return o}(t,s.$current);p=o._KnockoutBindingProvider.getInstance().__RegisterBindingAppliedPromiseForChildren(t,r)}}(),l.then(function(n){if(l===u)try{t.virtualElements.setDomNodeChildren(e,n.view||[]);var o=s.createChildContext(n.data,void 0,function(e){e.$parent=null,e.$parentContext=null,e.$parents=null});t.applyBindingsToDescendants(o,e)}catch(e){r.error("An error %o occurred during view insertion and apply bindings for oj-bind-dom.",e)}finally{g(),m()}},function(e){g(),m(),r.error("An error %o occurred during view insertion and apply bindings for oj-bind-dom.",e)})}function m(){p&&(p(),p=null)}function g(){c&&(c(),c=null)}return t.computed(function(){f(u=Promise.resolve(t.utils.unwrapObservable(l())))},null,{disposeWhenNodeIsRemoved:e}),{controlsDescendantBindings:!0}}},t.virtualElements.allowedBindings._ojBindDom_=!0});
//# sourceMappingURL=ojbinddom.js.map