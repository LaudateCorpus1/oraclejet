/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports","ojs/ojmap","ojs/ojcore-base"],function(t,e,o){"use strict";e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e,o=o&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o;
/**
   * @license
   * Copyright (c) 2018 2021, Oracle and/or its affiliates.
   * The Universal Permissive License (UPL), Version 1.0
   * as shown at https://oss.oracle.com/licenses/upl/
   * @ignore
   */
const a=function(){};o._registerLegacyNamespaceProp("DiagramUtils",a),a.getLayout=function(t){return function(e){var o;if(t.nodes&&e.getNodeCount()>0){var n=a._dataArrayToMap(t.nodes);o=t.nodeDefaults&&t.nodeDefaults.labelLayout?t.nodeDefaults.labelLayout:null;for(var i=0;i<e.getNodeCount();i++){var l=e.getNodeByIndex(i),s=n.get(l.getId());a._positionChildNodes(l.getChildNodes(),s?s.nodes:null,e,o),a._positionNodeAndLabel(l,s,e,o)}}if(t.links&&e.getLinkCount()>0){var r=a._dataArrayToMap(t.links),u=t.linkDefaults&&t.linkDefaults.path?t.linkDefaults.path:null;o=t.linkDefaults&&t.linkDefaults.labelLayout?t.linkDefaults.labelLayout:null;for(var d=0;d<e.getLinkCount();d++){var f=e.getLinkByIndex(d),c=r.get(f.getId());c&&c.path?f.setPoints(c.path):u&&u instanceof Function&&f.setPoints(u(e,f)),c&&c.coordinateSpace&&f.setCoordinateSpace(c.coordinateSpace),c&&c.labelLayout?a._setLabelPosition(f,c.labelLayout):o&&o instanceof Function&&a._setLabelPosition(f,o(e,f))}}if(t.viewport){var p=t.viewport;p instanceof Function?e.setViewport(p(e)):e.setViewport(p)}}},a._dataArrayToMap=function(t){var o=new e;if(t)for(var a=0;a<t.length;a++)o.set(t[a].id,t[a]);return o},a._positionChildNodes=function(t,e,o,n){if(t&&e)for(var i=a._dataArrayToMap(e),l=0;l<t.length;l++){var s=t[l],r=i.get(s.getId());a._positionChildNodes(s.getChildNodes(),r?r.nodes:null,o,n),a._positionNodeAndLabel(s,r,o,n)}},a._positionNodeAndLabel=function(t,e,o,n){t&&e&&(t.setPosition({x:e.x,y:e.y}),e.labelLayout?a._setLabelPosition(t,e.labelLayout):n&&n instanceof Function?a._setLabelPosition(t,n(o,t)):n&&a._setLabelPosition(t,n,t.getPosition()))},a._setLabelPosition=function(t,e,o){var a=o||{x:0,y:0};t.setLabelPosition({x:e.x+a.x,y:e.y+a.y});var n=e.rotationPointX,i=e.rotationPointY;isNaN(n)||isNaN(i)||t.setLabelRotationPoint({x:n+a.x,y:i+a.y}),t.setLabelRotationAngle(e.angle),t.setLabelHalign(e.halign),t.setLabelValign(e.valign)};const n=a.getLayout;t.getLayout=n,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=ojdiagram-utils.js.map