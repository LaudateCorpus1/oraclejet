/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports","ojs/ojcore-base"],function(e,t){"use strict";t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;
/**
   * @license
   * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
   * The Universal Permissive License (UPL), Version 1.0
   * as shown at https://oss.oracle.com/licenses/upl/
   * @ignore
   */
const n=function(){};n._TAB_INDEX="tabIndex",n._DATA_OJ_TABMOD="data-oj-tabmod",n._FOCUSABLE_ELEMENTS_QUERY="input, select, button, a[href], textarea, object, [tabIndex]:not([tabIndex='-1'])",n.CHECKVIEWPORT_THRESHOLD=3,n.getFocusableElementsInNode=function(e,l){var r=[],i=t.AgentUtils.getAgentInfo(),E=!0;if(t.AgentUtils.BROWSER.IE===i.browser&&null==e.parentNode&&(E=!1),E)for(var s=e.querySelectorAll(n._FOCUSABLE_ELEMENTS_QUERY),o=s.length,a=0;a<o;a++){var u=s[a];if(!u.disabled&&(l||"none"!==u.style.display)){var _=parseInt(u.getAttribute(n._TAB_INDEX),10);(isNaN(_)||_>=0)&&r.push(u)}}return r},n.disableElement=function(e){var t=parseInt(e.getAttribute(n._TAB_INDEX),10);e.setAttribute(n._DATA_OJ_TABMOD,t),e.setAttribute(n._TAB_INDEX,-1)},n.disableAllFocusableElements=function(e,t,l){for(var r=[],i=n.getFocusableElementsInNode(e,t),E=0;E<i.length;E++)l&&i[E]===document.activeElement||(n.disableElement(i[E]),r.push(i[E]));return r},n.enableAllFocusableElements=function(e){for(var t=e.querySelectorAll("["+n._DATA_OJ_TABMOD+"]"),l=0;l<t.length;l++){var r=parseInt(t[l].getAttribute(n._DATA_OJ_TABMOD),10);t[l].removeAttribute(n._DATA_OJ_TABMOD),isNaN(r)?t[l].removeAttribute(n._TAB_INDEX):t[l].setAttribute(n._TAB_INDEX,r)}return t},n.getFocusableElementsIncludingDisabled=function(e){var t=[];let l=e.querySelectorAll(n._FOCUSABLE_ELEMENTS_QUERY+",["+n._DATA_OJ_TABMOD+"]");for(var r=0;r<l.length;r++){var i=l[r];i.disabled||"none"===i.style.display||t.push(i)}return t},n.handleActionableTab=function(e,t){var l=n.getFocusableElementsInNode(t);return l.length>0&&e.target===l[l.length-1]&&(l[0].focus(),!0)},n.handleActionablePrevTab=function(e,t){var l=n.getFocusableElementsInNode(t);return l.length>0&&e.target===l[0]&&(l[l.length-1].focus(),!0)},n.isEventClickthroughDisabled=function(e,t){for(var l=e.target;null!=l&&l!==t;){if(n.isClickthroughDisabled(l))return!0;l=l.parentNode}return!1},n.isClickthroughDisabled=function(e){return"disabled"===e.dataset.ojClickthrough},n.getDefaultScrollBarWidth=function(e){var t;if(e&&e.style){var n=e.style.visibility,l=e.style.position,r=e.style.overflowY,i=e.style.height,E=e.style.width;e.style.visibility="hidden",e.style.position="absolute",e.style.overflowY="hidden",e.style.height="50px",e.style.width="50px";var s=e.offsetWidth-e.clientWidth;e.style.overflowY="scroll",t=e.offsetWidth-e.clientWidth-s,e.style.width=E,e.style.height=i,e.style.overflowY=r,e.style.position=l,e.style.visibility=n}return t},n.disableDefaultBrowserStyling=function(e){e.setAttribute("x-ms-format-detection","none")},n.applyMergedInlineStyles=function(e,t,l){var r=n.convertStringToStyleObj(l),i=n.convertStringToStyleObj(t),E=Object.assign({},r,i);n.applyStyleObj(e,E)},n.convertStringToStyleObj=function(e){var t={};if(e.split)for(var n=e.split(";"),l=0;l<n.length;l++){var r=n[l];if(""!==r){var i=r.split(":");2===i.length&&(t[i[0].trim()]=i[1].trim())}}return t},n.applyStyleObj=function(e,t){for(var n=Object.keys(t),l=Object.values(t),r=0;r<n.length;r++)e.style[n[r]]=l[r]},n.isMobileTouchDevice=function(){var e=t.AgentUtils.getAgentInfo();return e.os===t.AgentUtils.OS.IOS||e.os===t.AgentUtils.OS.ANDROID||e.os===t.AgentUtils.OS.WINDOWSPHONE},n.getNoJQFocusHandlers=function(e,t){return{focusIn:function(t){return e($(t))},focusOut:function(e){return t($(e))}}},n.areKeySetsEqual=function(e,n){if(e===n)return!0;var l,r,i=e.isAddAll();if(i!==n.isAddAll())return!1;if(i?(l=e.deletedValues(),r=n.deletedValues()):(l=e.values(),r=n.values()),l.size!==r.size)return!1;for(var E=l.values(),s=r.values(),o=E.next(),a=s.next();!o.done;){if(!t.KeyUtils.equals(o.value,a.value))return!1;o=E.next(),a=s.next()}return!0},n.KEYBOARD_KEYS={_SPACEBAR:" ",_SPACEBAR_IE:"SpaceBar",_SPACEBAR_CODE:32,_ENTER:"Enter",_ENTER_CODE:13,_UP:"ArrowUp",_UP_IE:"Up",_UP_CODE:38,_DOWN:"ArrowDown",_DOWN_IE:"Down",_DOWN_CODE:40,_LEFT:"ArrowLeft",_LEFT_IE:"Left",_LEFT_CODE:37,_RIGHT:"ArrowRight",_RIGHT_IE:"Right",_RIGHT_CODE:39,_HOME:"Home",_HOME_CODE:36,_END:"End",_END_CODE:35,_TAB:"Tab",_TAB_CODE:9,_ESCAPE:"Escape",_ESCAPE_IE:"Esc",_ESCAPE_CODE:27,_F2:"F2",_F2_CODE:113},n.isEnterKeyEvent=function(e){return e===n.KEYBOARD_KEYS._ENTER||e===n.KEYBOARD_KEYS._ENTER_CODE},n.isSpaceBarKeyEvent=function(e){return e===n.KEYBOARD_KEYS._SPACEBAR||e===n.KEYBOARD_KEYS._SPACEBAR_IE||e===n.KEYBOARD_KEYS._SPACEBAR_CODE},n.isEscapeKeyEvent=function(e){return e===n.KEYBOARD_KEYS._ESCAPE||e===n.KEYBOARD_KEYS._ESCAPE_IE||e===n.KEYBOARD_KEYS._ESCAPE_CODE},n.isTabKeyEvent=function(e){return e===n.KEYBOARD_KEYS._TAB||e===n.KEYBOARD_KEYS._TAB_CODE},n.isF2KeyEvent=function(e){return e===n.KEYBOARD_KEYS._F2||e===n.KEYBOARD_KEYS._F2_CODE},n.isHomeKeyEvent=function(e){return e===n.KEYBOARD_KEYS._HOME||e===n.KEYBOARD_KEYS._HOME_CODE},n.isEndKeyEvent=function(e){return e===n.KEYBOARD_KEYS._END||e===n.KEYBOARD_KEYS._END_CODE},n.isArrowUpKeyEvent=function(e){return e===n.KEYBOARD_KEYS._UP||e===n.KEYBOARD_KEYS._UP_IE||e===n.KEYBOARD_KEYS._UP_CODE},n.isArrowDownKeyEvent=function(e){return e===n.KEYBOARD_KEYS._DOWN||e===n.KEYBOARD_KEYS._DOWN_IE||e===n.KEYBOARD_KEYS._DOWN_CODE},n.isArrowLeftKeyEvent=function(e){return e===n.KEYBOARD_KEYS._LEFT||e===n.KEYBOARD_KEYS._LEFT_IE||e===n.KEYBOARD_KEYS._LEFT_CODE},n.isArrowRightKeyEvent=function(e){return e===n.KEYBOARD_KEYS._RIGHT||e===n.KEYBOARD_KEYS._RIGHT_IE||e===n.KEYBOARD_KEYS._RIGHT_CODE},n.getAddEventKeysResult=function(e,t,l){var r,i,E,s,o;function a(e,t){return{key:e,index:t}}var u=[...e],_=[];t.keys.forEach(function(e){_.push(e)});var A=[],c=t.addBeforeKeys?t.addBeforeKeys:t.afterKeys;if(null!=c&&c.forEach(function(e){A.push(e)}),A.length===_.length)for(var K=0;_.length!==K;)for(K=_.length,r=_.length-1;r>=0;r--)E=_[r],n._containsKey(u,E)||(null!=(i=A[r])?-1!==(o=n._indexOfKey(u,i))&&(u.splice(o,0,E),A.splice(r,1),_.splice(r,1)):l&&(u.push(E),A.splice(r,1),_.splice(r,1)));else{var D=t.indexes,O=[];for(r=0;r<_.length;r++)if(E=_[r],!n._containsKey(u,E))if(null!=(s=D[r])){for(var d=!1,y=0;y<O.length;y++)if(O[y].index>s){O.splice(y,0,a(E,s)),d=!0;break}d||O.push(a(E,s))}else l&&u.push(E);for(r=0;r<O.length;r++){var f=O[r];f.index<u.length?u.splice(f.index,0,f.key):f.index===u.length&&l&&u.push(f.key)}}return u},n._containsKey=function(e,n){for(var l=0;l<e.length;l++)if(t.KeyUtils.equals(e[l],n))return!0;return!1},n._indexOfKey=function(e,n){for(var l=0;l<e.length;l++)if(t.KeyUtils.equals(e[l],n))return l;return-1};const l=n.applyMergedInlineStyles,r=n.applyStyleObj,i=n.areKeySetsEqual,E=n.convertStringToStyleObj,s=n.disableElement,o=n.disableAllFocusableElements,a=n.disableDefaultBrowserStyling,u=n.enableAllFocusableElements,_=n.getAddEventKeysResult,A=n.getDefaultScrollBarWidth,c=n.getFocusableElementsIncludingDisabled,K=n.getFocusableElementsInNode,D=n.getNoJQFocusHandlers,O=n.handleActionablePrevTab,d=n.handleActionableTab,y=n.isArrowDownKeyEvent,f=n.isArrowLeftKeyEvent,v=n.isArrowRightKeyEvent,b=n.isArrowUpKeyEvent,S=n.isClickthroughDisabled,g=n.isEndKeyEvent,h=n.isEnterKeyEvent,B=n.isEscapeKeyEvent,Y=n.isEventClickthroughDisabled,R=n.isF2KeyEvent,T=n.isHomeKeyEvent,p=n.isMobileTouchDevice,I=n.isSpaceBarKeyEvent,C=n.isTabKeyEvent,N=n.KEYBOARD_KEYS,F=n.CHECKVIEWPORT_THRESHOLD;e.CHECKVIEWPORT_THRESHOLD=F,e.KEYBOARD_KEYS=N,e.applyMergedInlineStyles=l,e.applyStyleObj=r,e.areKeySetsEqual=i,e.convertStringToStyleObj=E,e.disableAllFocusableElements=o,e.disableDefaultBrowserStyling=a,e.disableElement=s,e.enableAllFocusableElements=u,e.getAddEventKeysResult=_,e.getDefaultScrollBarWidth=A,e.getFocusableElementsInNode=K,e.getFocusableElementsIncludingDisabled=c,e.getNoJQFocusHandlers=D,e.handleActionablePrevTab=O,e.handleActionableTab=d,e.isArrowDownKeyEvent=y,e.isArrowLeftKeyEvent=f,e.isArrowRightKeyEvent=v,e.isArrowUpKeyEvent=b,e.isClickthroughDisabled=S,e.isEndKeyEvent=g,e.isEnterKeyEvent=h,e.isEscapeKeyEvent=B,e.isEventClickthroughDisabled=Y,e.isF2KeyEvent=R,e.isHomeKeyEvent=T,e.isMobileTouchDevice=p,e.isSpaceBarKeyEvent=I,e.isTabKeyEvent=C,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=ojdatacollection-common.js.map