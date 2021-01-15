/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports","ojs/ojcore-base","jquery"],function(t,e,a){"use strict";e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e,a=a&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a;
/**
   * @license
   * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
   * The Universal Permissive License (UPL), Version 1.0
   * as shown at https://oss.oracle.com/licenses/upl/
   * @ignore
   */
var r=function(t){this.Init(t)};e.Object.createSubclass(r,e.Object,"AttributeGroupHandler"),r.prototype.Init=function(t){if(this._assignments={},this._valueIndex=0,this._matchRules={},null!=t)for(var e=Object.keys(t),a=0;a<e.length;a++){var r=e[a];this.addMatchRule(r,t[r])}},r.prototype.getValueRamp=function(){return[]},r.prototype.getValue=function(t){return this._matchRules[t]?this._matchRules[t]:(this._assignments[t]||(this._values||(this._values=this.getValueRamp().slice()),this._assignments[t]=this._values[this._valueIndex],this._valueIndex+=1,this._valueIndex===this._values.length&&(this._valueIndex=0)),this._assignments[t])},r.prototype.getCategoryAssignments=function(){for(var t=[],e=Object.keys(this._assignments),a=0;a<e.length;a++){var r=e[a];t.push({category:r,value:this._assignments[r]})}return t},r.prototype.addMatchRule=function(t,e){this._matchRules[t]=e};
/**
   * @license
   * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
   * The Universal Permissive License (UPL), Version 1.0
   * as shown at https://oss.oracle.com/licenses/upl/
   * @ignore
   */
var s=function t(e){if(this._attributeValues=[],a(document.body).hasClass("oj-hicontrast"))this._attributeValues=t._DEFAULT_COLORS.slice();else{if(!t._colors){var r=t.__createAttrDiv();a(document.body).append(r),t._colors=t.__processAttrDiv(r),r.remove()}t._colors.length>0?this._attributeValues=t._colors.slice():this._attributeValues=t._DEFAULT_COLORS.slice()}this.Init(e)};e.Object.createSubclass(s,r,"ColorAttributeGroupHandler"),s._DEFAULT_COLORS=["#237bb1","#68c182","#fad55c","#ed6647","#8561c8","#6ddbdb","#ffb54d","#e371b2","#47bdef","#a2bf39","#a75dba","#f7f37b"],s._STYLE_CLASSES=["oj-dvt-category1","oj-dvt-category2","oj-dvt-category3","oj-dvt-category4","oj-dvt-category5","oj-dvt-category6","oj-dvt-category7","oj-dvt-category8","oj-dvt-category9","oj-dvt-category10","oj-dvt-category11","oj-dvt-category12"],s._colors=null,s.prototype.getValueRamp=function(){return this._attributeValues},s.__createAttrDiv=function(){var t=a(document.createElement("div"));t.css("display","none;"),t.attr("id","attrGps");for(var e=0;e<s._STYLE_CLASSES.length;e++){var r=a(document.createElement("div"));r.addClass(s._STYLE_CLASSES[e]),t.append(r)}return t},s.__processAttrDiv=function(t){for(var e=[],r=t.children(),s=0;s<r.length;s++){var o=a(r[s]).css("color");o&&e.push(o)}return e};
/**
   * @license
   * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
   * The Universal Permissive License (UPL), Version 1.0
   * as shown at https://oss.oracle.com/licenses/upl/
   * @ignoreg
   */
var o=function(t){this.Init(t)};e.Object.createSubclass(o,r,"ShapeAttributeGroupHandler"),o._attributeValues=["square","circle","diamond","plus","triangleDown","triangleUp","human"],o.prototype.getValueRamp=function(){return o._attributeValues},t.AttributeGroupHandler=r,t.ColorAttributeGroupHandler=s,t.ShapeAttributeGroupHandler=o,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=ojattributegrouphandler.js.map