import { Renderer2, ElementRef } from '@angular/core';
import { Color } from './../../../helpers/color.class';
import { ColorPickerConfig } from './../../../services/color-picker.service';
export declare class IndicatorComponent {
    private readonly pickerConfig;
    private readonly renderer;
    private readonly elementRef;
    private readonly document;
    color: Color;
    colorType: 'rgba' | 'hex' | 'hsla';
    readonly title: string;
    constructor(pickerConfig: ColorPickerConfig, renderer: Renderer2, elementRef: ElementRef, document: any);
    readonly backgroundColor: string;
    onClick(event: MouseEvent | TouchEvent): void;
}
