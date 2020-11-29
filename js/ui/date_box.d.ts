import {
    dxCalendarOptions
} from './calendar';

import dxDropDownEditor, {
    dxDropDownEditorOptions
} from './drop_down_editor/ui.drop_down_editor';

import {
    format
} from './widget/ui.widget';

export interface dxDateBoxOptions extends dxDropDownEditorOptions<dxDateBox> {
    /**
     * @docid dxDateBoxOptions.adaptivityEnabled
     * @default false
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    adaptivityEnabled?: boolean;
    /**
     * @docid dxDateBoxOptions.applyButtonText
     * @default "OK"
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    applyButtonText?: string;
    /**
     * @docid dxDateBoxOptions.calendarOptions
     * @default {}
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    calendarOptions?: dxCalendarOptions;
    /**
     * @docid dxDateBoxOptions.cancelButtonText
     * @default "Cancel"
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    cancelButtonText?: string;
    /**
     * @docid dxDateBoxOptions.dateOutOfRangeMessage
     * @default "Value is out of range"
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    dateOutOfRangeMessage?: string;
    /**
     * @docid dxDateBoxOptions.dateSerializationFormat
     * @default undefined
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    dateSerializationFormat?: string;
    /**
     * @docid dxDateBoxOptions.disabledDates
     * @default null
     * @type_function_param1 data:object
     * @type_function_param1_field1 component:dxDateBox
     * @type_function_param1_field2 date:Date
     * @type_function_param1_field3 view:string
     * @type_function_return boolean
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    disabledDates?: Array<Date> | ((data: { component?: dxDateBox, date?: Date, view?: string }) => boolean);
    /**
     * @docid dxDateBoxOptions.displayFormat
     * @default null
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    displayFormat?: format;
    /**
     * @docid dxDateBoxOptions.interval
     * @default 30
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    interval?: number;
    /**
     * @docid dxDateBoxOptions.invalidDateMessage
     * @default "Value must be a date or time"
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    invalidDateMessage?: string;
    /**
     * @docid dxDateBoxOptions.max
     * @default undefined
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    max?: Date | number | string;
    /**
     * @docid dxDateBoxOptions.min
     * @default undefined
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    min?: Date | number | string;
    /**
     * @docid dxDateBoxOptions.pickerType
     * @type Enums.DateBoxPickerType
     * @default 'calendar'
     * @default 'native' [for](iOS)
     * @default 'native' [for](Android)
     * @default 'rollers' [for](Android_below_version_4.4)
     * @default 'rollers' [for](mobile_devices)
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    pickerType?: 'calendar' | 'list' | 'native' | 'rollers';
    /**
     * @docid dxDateBoxOptions.placeholder
     * @default ""
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    placeholder?: string;
    /**
     * @docid dxDateBoxOptions.showAnalogClock
     * @default true
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    showAnalogClock?: boolean;
    /**
     * @docid dxDateBoxOptions.type
     * @type Enums.DateBoxType
     * @default "date"
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    type?: 'date' | 'datetime' | 'time';
    /**
     * @docid dxDateBoxOptions.useMaskBehavior
     * @default false
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    useMaskBehavior?: boolean;
    /**
     * @docid dxDateBoxOptions.value
     * @default null
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    value?: Date | number | string;
}
/**
 * @docid dxDateBox
 * @isEditor
 * @inherits dxDropDownEditor
 * @module ui/date_box
 * @export default
 * @prevFileNamespace DevExpress.ui
 * @public
 */
export default class dxDateBox extends dxDropDownEditor {
    constructor(element: Element, options?: dxDateBoxOptions)
    constructor(element: JQuery, options?: dxDateBoxOptions)
    /**
     * @docid dxDateBox.close
     * @publicName close()
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    close(): void;
    /**
     * @docid dxDateBox.open
     * @publicName open()
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    open(): void;
}

declare global {
interface JQuery {
    dxDateBox(): JQuery;
    dxDateBox(options: "instance"): dxDateBox;
    dxDateBox(options: string): any;
    dxDateBox(options: string, ...params: any[]): any;
    dxDateBox(options: dxDateBoxOptions): JQuery;
}
}
export type Options = dxDateBoxOptions;

/** @deprecated use Options instead */
export type IOptions = dxDateBoxOptions;
