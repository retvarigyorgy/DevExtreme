import '../jquery_augmentation';

import {
    dxElement
} from '../core/element';

import {
    template
} from '../core/templates/template';

import {
    event
} from '../events/index';

import Widget, {
    WidgetOptions
} from './widget/ui.widget';

export interface dxButtonOptions extends WidgetOptions<dxButton> {
    /**
     * @docid dxButtonOptions.activeStateEnabled
     * @default true
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    activeStateEnabled?: boolean;
    /**
     * @docid dxButtonOptions.focusStateEnabled
     * @default true [for](desktop)
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    focusStateEnabled?: boolean;
    /**
     * @docid dxButtonOptions.hoverStateEnabled
     * @default true
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    hoverStateEnabled?: boolean;
    /**
     * @docid dxButtonOptions.icon
     * @default ""
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    icon?: string;
    /**
     * @docid dxButtonOptions.onClick
     * @extends Action
     * @type_function_param1 e:object
     * @type_function_param1_field4 event:event
     * @type_function_param1_field5 validationGroup:object
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onClick?: ((e: { component?: dxButton, element?: dxElement, model?: any, event?: event, validationGroup?: any }) => any);
    /**
     * @docid dxButtonOptions.stylingMode
     * @type Enums.ButtonStylingMode
     * @default 'contained'
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    stylingMode?: 'text' | 'outlined' | 'contained';
    /**
     * @docid dxButtonOptions.template
     * @default "content"
     * @type_function_param1 buttonData:object
     * @type_function_param1_field1 text:string
     * @type_function_param1_field2 icon:string
     * @type_function_param2 contentElement:dxElement
     * @type_function_return string|Element|jQuery
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    template?: template | ((buttonData: { text?: string, icon?: string }, contentElement: dxElement) => string | Element | JQuery);
    /**
     * @docid dxButtonOptions.text
     * @default ""
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    text?: string;
    /**
     * @docid dxButtonOptions.type
     * @type Enums.ButtonType
     * @default 'normal'
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    type?: 'back' | 'danger' | 'default' | 'normal' | 'success';
    /**
     * @docid dxButtonOptions.useSubmitBehavior
     * @default false
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    useSubmitBehavior?: boolean;
    /**
     * @docid dxButtonOptions.validationGroup
     * @default undefined
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    validationGroup?: string;
}
/**
 * @docid dxButton
 * @inherits Widget
 * @hasTranscludedContent
 * @module ui/button
 * @export default
 * @prevFileNamespace DevExpress.ui
 * @public
 */
export default class dxButton extends Widget {
    constructor(element: Element, options?: dxButtonOptions)
    constructor(element: JQuery, options?: dxButtonOptions)
}

declare global {
interface JQuery {
    dxButton(): JQuery;
    dxButton(options: "instance"): dxButton;
    dxButton(options: string): any;
    dxButton(options: string, ...params: any[]): any;
    dxButton(options: dxButtonOptions): JQuery;
}
}
export type Options = dxButtonOptions;

/** @deprecated use Options instead */
export type IOptions = dxButtonOptions;
