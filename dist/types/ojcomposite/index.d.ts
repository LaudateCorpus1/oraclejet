/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */

import MetadataTypes = require('../ojmetadata');
export function getComponentMetadata(name: string): MetadataTypes.ComponentMetadata | null;
export function register<P extends PropertiesType = PropertiesType>(name: string, descriptor: {
    metadata: MetadataTypes.ComponentMetadata;
    view: string;
    viewModel?: {
        new (context: ViewModelContext<P>): ViewModel<P>;
    };
    parseFunction?: ((value: string, name: string, meta: MetadataTypes.ComponentMetadataProperties, defaultParseFunction?: (value: string) => any) => any);
}): void;
// tslint:disable-next-line interface-over-type-literal
export type PropertiesType = {
    [key: string]: any;
};
// tslint:disable-next-line interface-over-type-literal
export type PropertyChangedContext<P extends PropertiesType = PropertiesType> = {
    previousValue: P[keyof P];
    property: keyof P;
    subproperty?: {
        path: string;
        previousValue: any;
        value: any;
    };
    updatedFrom: 'external' | 'internal';
    value: P[keyof P];
};
// tslint:disable-next-line interface-over-type-literal
export type ViewModel<P extends PropertiesType = PropertiesType> = {
    activated?: ((context: ViewModelContext<P>) => Promise<any> | void);
    bindingsApplied?: ((context: ViewModelContext<P>) => void);
    connected?: ((context: ViewModelContext<P>) => void);
    disconnected?: ((element: Element) => void);
    propertyChanged?: ((context: PropertyChangedContext<P>) => void);
};
// tslint:disable-next-line interface-over-type-literal
export type ViewModelContext<P extends PropertiesType = PropertiesType> = {
    element: Element;
    properties: P;
    slotCounts: {
        [key: string]: number;
    };
    unique: string;
    uniqueId: string;
};
export interface ojBindSlot extends HTMLElement {
    index: number;
    name: string;
}
export interface ojBindTemplateSlot<D> extends HTMLElement {
    data: D;
    name: string;
}
