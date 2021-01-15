/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["knockout","ojs/ojcontext","ojs/ojmodule","ojs/ojcomposite"],function(e,o,n,i){"use strict";o=o&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o;i.register("oj-module",{view:'\x3c!-- ko ojModule: {"view":config().view, "viewModel":config().viewModel,"cleanupMode":config().cleanupMode,"animation":animation} --\x3e\x3c!-- /ko --\x3e',metadata:{properties:{animation:{type:"object"},config:{type:"object|Promise",properties:{cleanupMode:{type:"string",enumValues:["none","onDisconnect"],value:"onDisconnect"},view:{type:"Array<Node>"},viewModel:{type:"object"}}}},events:{ojTransitionEnd:{},ojTransitionStart:{},ojViewConnected:{},ojViewDisconnected:{}},extension:{}},viewModel:
/**
   * @license
   * Copyright (c) 2017 2021, Oracle and/or its affiliates.
   * The Universal Permissive License (UPL), Version 1.0
   * as shown at https://oss.oracle.com/licenses/upl/
   * @ignore
   */
function(n){var i=n.element,t=n.properties,c=this;function s(){c.busyCallback||(c.busyCallback=o.getContext(i).getBusyContext().addBusyState({description:"oj-module is waiting on config Promise resolution"}));var e=Promise.resolve(t.config);c.configPromise=e,e.then(function(o){e===c.configPromise&&(c.config(o),c.busyCallback(),c.busyCallback=null)},function(o){if(e===c.configPromise)throw c.busyCallback(),c.busyCallback=null,o})}function a(o,n){var i=o&&o[n];"function"==typeof i&&e.ignoreDependencies(i,o)}function l(e,o,n){var t={};o&&(t.viewModel=o),n&&(t.view=n);var c=new CustomEvent(e,{detail:t});i.dispatchEvent(c)}this.animation=n.properties.animation,this.config=e.observable({view:[]}),this.configPromise=null,this.propertyChanged=function(e){"animation"===e.property?c.animation=e.value:"config"===e.property&&s()},s(),this.connected=function(){var e,o,n=this.config();(o=(e=n)?e.view:null)&&o.length>0&&i.contains(o[0])&&(a(n.viewModel,"connected"),l("ojViewConnected",n.viewModel))}.bind(this),this.disconnected=function(){var e=this.config();a(e.viewModel,"disconnected"),l("ojViewDisconnected",e.viewModel,e.view)}.bind(this)}})});
//# sourceMappingURL=ojmodule-element.js.map