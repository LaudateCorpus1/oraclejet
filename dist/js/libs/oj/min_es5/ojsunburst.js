/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojcore-base","ojs/ojcomponentcore","jquery","ojs/ojdvt-base","ojs/ojdvt-treeview","ojs/ojkeyset","ojs/ojconfig"],function(e,t,o,n,r,a,l){"use strict";e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e,o=o&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o;
/**
   * @license
   * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
   * The Universal Permissive License (UPL), Version 1.0
   * as shown at https://oss.oracle.com/licenses/upl/
   * @ignore
   */
/**
   * @license
   * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
   * The Universal Permissive License (UPL), Version 1.0
   * as shown at https://oss.oracle.com/licenses/upl/
   * @ignore
   */
/**
   * @license
   * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
   * The Universal Permissive License (UPL), Version 1.0
   * as shown at https://oss.oracle.com/licenses/upl/
   * @ignore
   */
var s={properties:{animationDuration:{type:"number"},animationOnDataChange:{type:"string",enumValues:["auto","none"],value:"none"},animationOnDisplay:{type:"string",enumValues:["auto","none"],value:"none"},animationUpdateColor:{type:"string",value:""},as:{type:"string",value:""},colorLabel:{type:"string",value:""},data:{type:"object"},displayLevels:{type:"number",value:17976931348623157e292},drilling:{type:"string",enumValues:["off","on"],value:"off"},expanded:{type:"KeySet",writeback:!0},hiddenCategories:{type:"Array<string>",writeback:!0,value:[]},highlightMatch:{type:"string",enumValues:["all","any"],value:"all"},highlightedCategories:{type:"Array<string>",writeback:!0,value:[]},hoverBehavior:{type:"string",enumValues:["dim","none"],value:"none"},hoverBehaviorDelay:{type:"number",value:200},nodeDefaults:{type:"object",properties:{borderColor:{type:"string"},borderWidth:{type:"number",value:1},hoverColor:{type:"string"},labelDisplay:{type:"string",enumValues:["auto","horizontal","off","rotated"],value:"auto"},labelHalign:{type:"string",enumValues:["center","inner","outer"],value:"center"},labelMinLength:{type:"number",value:1},labelStyle:{type:"object"},selectedInnerColor:{type:"string"},selectedOuterColor:{type:"string"},showDisclosure:{type:"string",enumValues:["off","on"],value:"off"}}},nodes:{type:"Array<Object>|Promise"},rootNode:{type:"any",value:""},rootNodeContent:{type:"object",properties:{renderer:{type:"function"}}},rotation:{type:"string",enumValues:["off","on"],value:"on"},selection:{type:"Array<any>",writeback:!0,value:[]},selectionMode:{type:"string",enumValues:["multiple","none","single"],value:"multiple"},sizeLabel:{type:"string",value:""},sorting:{type:"string",enumValues:["off","on"],value:"off"},startAngle:{type:"number",writeback:!0,value:90},tooltip:{type:"object",properties:{renderer:{type:"function"}}},touchResponse:{type:"string",enumValues:["auto","touchStart"],value:"auto"},trackResize:{type:"string",enumValues:["off","on"],value:"on"},translations:{type:"object",value:{},properties:{componentName:{type:"string"},labelAndValue:{type:"string"},labelClearSelection:{type:"string"},labelColor:{type:"string"},labelCountWithTotal:{type:"string"},labelDataVisualization:{type:"string"},labelInvalidData:{type:"string"},labelNoData:{type:"string"},labelSize:{type:"string"},stateCollapsed:{type:"string"},stateDrillable:{type:"string"},stateExpanded:{type:"string"},stateHidden:{type:"string"},stateIsolated:{type:"string"},stateMaximized:{type:"string"},stateMinimized:{type:"string"},stateSelected:{type:"string"},stateUnselected:{type:"string"},stateVisible:{type:"string"},tooltipCollapse:{type:"string"},tooltipExpand:{type:"string"}}}},methods:{getContextByNode:{},getNode:{},getProperty:{},refresh:{},setProperties:{},setProperty:{},getNodeBySubId:{},getSubIdByNode:{}},events:{ojBeforeCollapse:{},ojBeforeDrill:{},ojBeforeExpand:{},ojCollapse:{},ojDrill:{},ojExpand:{},ojRotateInput:{}},extension:{}};s.extension._WIDGET_NAME="ojSunburst",e.CustomElementBridge.register("oj-sunburst",{metadata:s});var i={properties:{borderColor:{type:"string"},borderWidth:{type:"number"},categories:{type:"Array<string>",value:[]},color:{type:"string",value:"#000000"},drilling:{type:"string",enumValues:["inherit","off","on"],value:"inherit"},label:{type:"string",value:""},labelDisplay:{type:"string",enumValues:["auto","horizontal","off","rotated"]},labelHalign:{type:"string",enumValues:["center","inner","outer"]},labelStyle:{type:"object"},pattern:{type:"string",enumValues:["largeChecker","largeCrosshatch","largeDiagonalLeft","largeDiagonalRight","largeDiamond","largeTriangle","none","smallChecker","smallCrosshatch","smallDiagonalLeft","smallDiagonalRight","smallDiamond","smallTriangle"],value:"none"},radius:{type:"number"},selectable:{type:"string",enumValues:["auto","off"],value:"auto"},shortDesc:{type:"string",value:""},showDisclosure:{type:"string",enumValues:["inherit","off","on"],value:"inherit"},svgClassName:{type:"string",value:""},svgStyle:{type:"object",value:{}},value:{type:"number"}},extension:{}};i.extension._CONSTRUCTOR=function(){},e.CustomElementBridge.register("oj-sunburst-node",{metadata:i}),
/**
   * @license
   * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
   * The Universal Permissive License (UPL), Version 1.0
   * as shown at https://oss.oracle.com/licenses/upl/
   * @ignore
   */
e.__registerWidget("oj.ojSunburst",o.oj.dvtBaseComponent,{widgetEventPrefix:"oj",options:{animationDuration:void 0,animationOnDataChange:"none",animationOnDisplay:"none",animationUpdateColor:"",as:"",data:null,displayLevels:Number.MAX_VALUE,expanded:new a.AllKeySetImpl,hiddenCategories:[],highlightedCategories:[],highlightMatch:"all",hoverBehavior:"none",hoverBehaviorDelay:200,tooltip:{renderer:null},selectionMode:"multiple",rotation:"on",sorting:"off",rootNodeContent:{renderer:null},startAngle:90,colorLabel:"",sizeLabel:"",drilling:"off",rootNode:"",nodes:null,nodeDefaults:{borderColor:"rgba(255,255,255,0.3)",borderWidth:1,showDisclosure:"off",labelHalign:"center",labelStyle:void 0,labelMinLength:1,labelDisplay:"auto",hoverColor:void 0,selectedInnerColor:void 0,selectedOuterColor:void 0},selection:[],touchResponse:"auto",rotateInput:null,beforeDrill:null,drill:null,beforeExpand:null,expand:null,beforeCollapse:null,collapse:null},_CreateDvtComponent:function(e,t,o){return r.Sunburst.newInstance(e,t,o)},_GetSimpleDataProviderConfigs:function(){var e={data:{templateName:"nodeTemplate",templateElementName:"oj-sunburst-node",resultPath:"nodes"}};return Object.defineProperties(e.data,{expandedKeySet:{get:function(){return this.options.expanded}.bind(this)}}),e},_OptionChangeHandler:function(e){var t=Object.prototype.hasOwnProperty.bind(e);(t("expanded")||t("displayLevels"))&&this._ClearDataProviderState("data"),this._super(e)},_ConvertLocatorToSubId:function(e){var t=e.subId;return"oj-sunburst-node"===t?t="node"+this._GetStringFromIndexPath(e.indexPath):"oj-sunburst-tooltip"===t&&(t="tooltip"),t},_ConvertSubIdToLocator:function(e){var t={};return 0===e.indexOf("node")?(t.subId="oj-sunburst-node",t.indexPath=this._GetIndexPath(e)):"tooltip"===e&&(t.subId="oj-sunburst-tooltip"),t},_ProcessOptions:function(){this._super();var e=this.options.rootNodeContent;e&&e._renderer&&(e.renderer=this._GetTemplateRenderer(e._renderer,"rootNodeContent")),this.options.expanded||(this.options.expanded=new a.AllKeySetImpl),this.options.data&&(this._fetchDataHandler=this._getFetchDataHandler("data"))},_GetComponentRendererOptions:function(){return[{path:"tooltip/renderer",slot:"tooltipTemplate"},{path:"rootNodeContent/renderer",slot:"rootNodeContentTemplate"}]},_GetComponentStyleClasses:function(){var e=this._super();return e.push("oj-sunburst"),e},_GetChildStyleClasses:function(){var e=this._super();return e["oj-dvtbase oj-sunburst"]={path:"animationDuration",property:"ANIM_DUR"},e["oj-sunburst-attribute-type-text"]={path:"styleDefaults/_attributeTypeTextStyle",property:"TEXT"},e["oj-sunburst-attribute-value-text"]={path:"styleDefaults/_attributeValueTextStyle",property:"TEXT"},e["oj-sunburst-drill-text"]={path:"styleDefaults/_drillTextStyle",property:"TEXT"},e["oj-sunburst-current-drill-text"]={path:"styleDefaults/_currentTextStyle",property:"TEXT"},e["oj-sunburst-node"]={path:"nodeDefaults/labelStyle",property:"TEXT"},e["oj-sunburst-node oj-hover"]={path:"nodeDefaults/hoverColor",property:"border-top-color"},e["oj-sunburst-node oj-selected"]=[{path:"nodeDefaults/selectedOuterColor",property:"border-top-color"},{path:"nodeDefaults/selectedInnerColor",property:"border-bottom-color"}],e},_GetEventTypes:function(){return["optionChange","rotateInput","beforeDrill","drill","beforeExpand","expand","beforeCollapse","collapse"]},_HandleEvent:function(e){var t,n=e.type,r=e.data;r&&r._noTemplate?(t=r._itemData,r=r._itemData):r&&r._itemData&&(t=r._itemData,delete(r=o.extend({},e.data))._itemData);var a={id:e.id,data:r,itemData:t};if(this._IsCustomElement()||(a.component=e.component),"rotation"===n)e.complete?this._UserOptionChange("startAngle",e.startAngle):this._trigger("rotateInput",null,{value:e.startAngle});else if("drill"===n)e.id&&this._trigger("beforeDrill",null,a)&&(this._UserOptionChange("rootNode",e.id),this._Render(),this._trigger("drill",null,a));else if("expand"===n){if(e.id&&this._trigger("beforeExpand",null,a)){var l=this;this._NotReady(),(this.options.data?this._fetchDataHandler(this.options.data,e.expanded,null,a.id):Promise.resolve()).then(function(){l._UserOptionChange("expanded",e.expanded),l._Render(),l._trigger("expand",null,a)})}}else"collapse"===n?e.id&&this._trigger("beforeCollapse",null,a)&&(this._UserOptionChange("expanded",e.expanded),this._Render(),this._trigger("collapse",null,a)):this._super(e)},_RemoveKeys:function(e){var t;this._super(e);var o=this.options.expanded;o&&!o.isAddAll()&&(e.forEach(function(e){o.has(e)&&(o=o.delete([e]),t=!0)}),t&&this._UserOptionChange("expanded",o))},_LoadResources:function(){null==this.options._resources&&(this.options._resources={});var e=this.options._resources;e.rotateCursor=l.getResourceUrl("resources/internal-deps/dvt/sunburst/rotate.cur"),e.expand="oj-fwk-icon oj-fwk-icon-plus",e.collapse="oj-fwk-icon oj-fwk-icon-minus"},getNode:function(e){return this._component.getAutomation().getNode(e)},getContextByNode:function(e){var t=this.getSubIdByNode(e);return t&&"oj-sunburst-tooltip"!==t.subId?t:null},_GetComponentDeferredDataPaths:function(){return{root:["nodes","data"]}}})});
//# sourceMappingURL=ojsunburst.js.map