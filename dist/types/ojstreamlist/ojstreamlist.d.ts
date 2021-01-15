/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */

import { JetElement, JetSettableProperties, JetElementCustomEvent, JetSetPropertyType } from 'ojs/index';
import { GlobalAttributes } from 'ojs/oj-jsx-interfaces';
import { ElementVComponent } from 'ojs/ojvcomponent-element';
import { KeySet, KeySetImpl } from 'ojs/ojkeyset';
import { DataProvider } from 'ojs/ojdataprovider';
import 'ojs/ojtreedataprovider';
declare class Props<Key, Data> {
    data?: DataProvider<Key, Data> | null;
    expanded?: KeySet<Key>;
    onExpandedChanged?: ElementVComponent.PropertyChanged<KeySet<Key> | null>;
    groupTemplate?: ElementVComponent.TemplateSlot<ItemTemplateContext<Key, Data>>;
    itemTemplate?: ElementVComponent.TemplateSlot<ItemTemplateContext<Key, Data>>;
    scrollPolicy?: 'loadAll' | 'loadMoreOnScroll';
    scrollPolicyOptions?: {
        fetchSize?: number;
        maxCount?: number;
        scroller?: Element | QuerySelector | null;
    };
    scrollPosition?: ScrollPositionType<Key>;
    onScrollPositionChanged?: ElementVComponent.PropertyChanged<{
        y?: number;
        key?: Key;
        offsetY?: number;
        parentKey?: Key;
    }>;
}
declare type QuerySelector = keyof HTMLElementTagNameMap | keyof SVGElementTagNameMap | string;
declare type State<K> = {
    renderedData: any;
    outOfRangeData: any;
    initialSkeleton: boolean;
    initialSkeletonCount: number;
    expandedToggleKeys: KeySetImpl<K>;
    expandedSkeletonKeys: KeySetImpl<K>;
    expandingKeys: KeySetImpl<K>;
    toCollapse: Array<K>;
};
declare type ScrollPositionType<Key> = {
    y?: number;
    key?: Key;
    offsetY?: number;
    parentKey?: Key;
};
interface ItemTemplateContext<Key, Data> {
    data: Data;
    key: Key;
    leaf?: boolean;
    parentKey?: Key;
    depth?: number;
}
export declare class StreamList<K extends string | number, D> extends ElementVComponent<Props<K, D>, State<K>> {
    private root;
    private contentHandler;
    private _ticking;
    private currentItem;
    private currentKey;
    private restoreFocus;
    private actionableMode;
    private _focusoutTimeout;
    private skeletonHeight;
    private resizeObserver;
    private defaultOptions;
    private lastInternalScrollPositionUpdate;
    private height;
    private focusInHandler;
    private focusOutHandler;
    constructor(props: Readonly<Props<K, D>>);
    private _handleFocusIn;
    private _handleFocusOut;
    _clearFocusoutTimeout(): void;
    private _handleClick;
    private _handleToggleExpanded;
    private _handleKeyDown;
    private _touchStartHandler;
    protected render(): any;
    private _doBlur;
    private _isFocusBlurTriggeredByDescendent;
    private _renderInitialSkeletons;
    private renderSkeletons;
    private _renderSkeleton;
    private _applySkeletonExitAnimation;
    private _isTreeData;
    private instanceOfTreeDataProvider;
    private _postRender;
    private _getScrollPolicyOptions;
    protected mounted(): void;
    private getSkeletonHeight;
    private outerHeight;
    protected unmounted(): void;
    private _delayShowSkeletons;
    private _getOptionDefaults;
    private _getShowSkeletonsDelay;
    private getRootElement;
    protected updated(oldProps: Readonly<Props<K, D>>, oldState: Readonly<State<K>>): void;
    protected static initStateFromProps<K, D>(props: Readonly<Props<K, D>>, state: Readonly<State<K>>): Partial<State<K>> | null;
    protected static updateStateFromProps<K, D>(props: Readonly<Props<K, D>>, state: Readonly<State<K>>, oldProps: Readonly<Props<K, D>>): Partial<State<K>> | null;
    private static collapse;
    private static _getLocalDescendentCount;
    private static _findIndex;
    private setRootElement;
    private _unregisterScrollHandler;
    private _registerScrollHandler;
    private scrollListener;
    private _updateScrollPosition;
    private _syncScrollTopWithProps;
    private _getParentKey;
    private _getItemByKey;
    private _getScrollEventElement;
    private _getScroller;
    private _findClosestElementToTop;
    private isAvailable;
    private getCurrentItem;
    private setCurrentItem;
    private getData;
    private setData;
    private updateData;
    private getExpanded;
    private setExpanded;
    private updateExpand;
    private getExpandingKeys;
    private setExpandingKeys;
    private updateExpandingKeys;
    private getSkeletonKeys;
    private setSkeletonKeys;
    private updateSkeletonKeys;
    private getOutOfRangeData;
    private setOutOfRangeData;
    private getItemRenderer;
    private getItemStyleClass;
    private getGroupRenderer;
    private getGroupStyleClass;
    addBusyState(description: string): Function;
    private _handleTouchOrClickEvent;
    private _isFocusable;
    private _isInputElement;
    private _isInsideFocusableElement;
    private _isInFocusableElementsList;
    private _resetFocus;
    private _setFocus;
    private _updateCurrentItemAndFocus;
    private _isInViewport;
    private _restoreCurrentItem;
    private _disableAllTabbableElements;
    private _enterActionableMode;
    private _exitActionableMode;
    protected _vprops?: VProps<K, D>;
}
// Custom Element interfaces
export interface StreamListElement<K extends string | number,D> extends JetElement<StreamListElementSettableProperties<K, D>>, StreamListElementSettableProperties<K, D> {
  addEventListener<T extends keyof StreamListElementEventMap<K,D>>(type: T, listener: (this: HTMLElement, ev: StreamListElementEventMap<K,D>[T]) => any, options?: (boolean|AddEventListenerOptions)): void;
  addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: (boolean|AddEventListenerOptions)): void;
  getProperty<T extends keyof StreamListElementSettableProperties<K, D>>(property: T): StreamListElement<K,D>[T];
  getProperty(property: string): any;
  setProperty<T extends keyof StreamListElementSettableProperties<K, D>>(property: T, value: StreamListElementSettableProperties<K, D>[T]): void;
  setProperty<T extends string>(property: T, value: JetSetPropertyType<T, StreamListElementSettableProperties<K, D>>): void;
  setProperties(properties: StreamListElementSettablePropertiesLenient<K, D>): void;
}
export namespace StreamListElement {
  // tslint:disable-next-line interface-over-type-literal
  type dataChanged<K extends string | number,D> = JetElementCustomEvent<StreamListElement<K,D>["data"]>;
  // tslint:disable-next-line interface-over-type-literal
  type expandedChanged<K extends string | number,D> = JetElementCustomEvent<StreamListElement<K,D>["expanded"]>;
  // tslint:disable-next-line interface-over-type-literal
  type scrollPolicyChanged<K extends string | number,D> = JetElementCustomEvent<StreamListElement<K,D>["scrollPolicy"]>;
  // tslint:disable-next-line interface-over-type-literal
  type scrollPolicyOptionsChanged<K extends string | number,D> = JetElementCustomEvent<StreamListElement<K,D>["scrollPolicyOptions"]>;
  // tslint:disable-next-line interface-over-type-literal
  type scrollPositionChanged<K extends string | number,D> = JetElementCustomEvent<StreamListElement<K,D>["scrollPosition"]>;
}
export interface StreamListElementEventMap<K extends string | number,D> extends HTMLElementEventMap {
  'dataChanged': JetElementCustomEvent<StreamListElement<K,D>["data"]>;
  'expandedChanged': JetElementCustomEvent<StreamListElement<K,D>["expanded"]>;
  'scrollPolicyChanged': JetElementCustomEvent<StreamListElement<K,D>["scrollPolicy"]>;
  'scrollPolicyOptionsChanged': JetElementCustomEvent<StreamListElement<K,D>["scrollPolicyOptions"]>;
  'scrollPositionChanged': JetElementCustomEvent<StreamListElement<K,D>["scrollPosition"]>;
}
export interface StreamListElementSettableProperties<Key,Data> extends JetSettableProperties {
  /**
  * Specifies the data for the component. See the Help documentation for more information.
  */
  data?: Props<Key,Data>['data'];
  /**
  * Specifies the key set containing the keys of the items that should be expanded.
  */
  expanded?: Props<Key,Data>['expanded'];
  /**
  * Specifies how data are fetched as user scrolls towards the bottom of the list.
  */
  scrollPolicy?: Props<Key,Data>['scrollPolicy'];
  /**
  * Specifies fetch options for scrolling behaviors that trigger data fetches. See the Help documentation for more information.
  */
  scrollPolicyOptions: Props<Key,Data>['scrollPolicyOptions'];
  /**
  * Specifies the current scroll position of the StreamList. See the Help documentation for more information.
  */
  scrollPosition: Props<Key,Data>['scrollPosition'];
}
export interface StreamListElementSettablePropertiesLenient<Key,Data> extends Partial<StreamListElementSettableProperties<Key,Data>> {
  [key: string]: any;
}
export interface StreamListProperties<Key,Data> extends Partial<StreamListElementSettableProperties<Key,Data>>, GlobalAttributes {
}
export interface VProps<Key,Data> extends Props<Key,Data>, GlobalAttributes {
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "oj-stream-list": StreamListProperties<any,any>;
    }
  }
}
