import { Renderer2, ElementRef } from '@angular/core';
import { Color } from './../../../helpers/color.class';
import { ColorPickerConfig } from './../../../services/color-picker.service';
import * as i0 from "@angular/core";
export declare class IndicatorComponent {
    private readonly pickerConfig;
    private readonly renderer;
    private readonly elementRef;
    private readonly document;
    color: Color;
    colorType: 'rgba' | 'hex' | 'hsla' | string;
    get title(): string;
    private subscriptions;
    constructor(pickerConfig: ColorPickerConfig, renderer: Renderer2, elementRef: ElementRef, document: any);
    get backgroundColor(): string;
    private onClick;
    static ɵfac: i0.ɵɵFactoryDeclaration<IndicatorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IndicatorComponent, "indicator-component", never, { "color": "color"; "colorType": "colorType"; }, {}, never, never, false>;
}
