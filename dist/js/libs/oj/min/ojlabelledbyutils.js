/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojlabel"],function(e){"use strict";
/**
   * @license
   * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
   * The Universal Permissive License (UPL), Version 1.0
   * as shown at https://oss.oracle.com/licenses/upl/
   * @ignore
   */const t={CUSTOM_LABEL_ELEMENT_ID:"|label",_labelledByUpdatedForSet:function(e,a,d,l){if((a||d)&&this._IsCustomElement()){var i={callbackAdd:function(e,a,d){const l=t.CUSTOM_LABEL_ELEMENT_ID;t._addAriaLabelledBy(e,a+l),t._addSetIdOnLabel(a,d.componentId)},callbackRemove:function(e,a,d){const l=t.CUSTOM_LABEL_ELEMENT_ID;t._removeAriaLabelledBy(e,a+l),t._removeSetIdOnLabel(a,d.componentId)},args:{componentId:e}};t._byUpdatedTemplate(a,d,l,i)}},_describedByUpdated:function(e,a,d=this._GetContentElement()){if(e||a){var l={callbackAdd:function(e,a){t._addRemoveAriaBy(e,"aria-describedby",a,!0)},callbackRemove:function(e,a){t._addRemoveAriaBy(e,"aria-describedby",a,!1)}};t._byUpdatedTemplate(e,a,d,l)}},_byUpdatedTemplate:function(e,t,a,d){var l,i,n,o;if(!e&&t)for(i=t.split(/\s+/),o=0;o<i.length;o++)l=i[o],d.callbackAdd.call(this,a,l,d.args);else if(e&&!t)for(i=e.split(/\s+/),o=0;o<i.length;o++)l=i[o],d.callbackRemove.call(this,a,l,d.args);else if(e&&t){for(i=t.split(/\s+/),n=e.split(/\s+/),o=0;o<n.length;o++)l=n[o],-1===t.indexOf(l)&&d.callbackRemove.call(this,a,l,d.args);for(o=0;o<i.length;o++)l=i[o],-1===e.indexOf(l)&&d.callbackAdd.call(this,a,l,d.args)}},_addAriaLabelledBy:function(e,a){t._addRemoveAriaBy(e,"aria-labelledby",a,!0)},_removeAriaLabelledBy:function(e,a){t._addRemoveAriaBy(e,"aria-labelledby",a,!1)},_addSetIdOnLabel:function(e,t){var a=document.getElementById(e);a&&(a.getAttribute("data-oj-set-id")||a.setAttribute("data-oj-set-id",t))},_removeSetIdOnLabel:function(e){var t=document.getElementById(e);t&&t.getAttribute("data-oj-set-id")&&t.removeAttribute("data-oj-set-id")},_addRemoveAriaBy:function(e,t,a,d){e.each(function(){let e=this.getAttribute(t),l=e?e.split(/\s+/):[],i=l.indexOf(a);d&&-1===i?l.push(a):d||-1===i||l.splice(i,1);let n=l.join(" ").trim();n?this.setAttribute(t,n):this.removeAttribute(t)})}};return t});
//# sourceMappingURL=ojlabelledbyutils.js.map