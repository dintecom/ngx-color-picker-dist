import { EventEmitter, OnDestroy, ElementRef } from '@angular/core';
import { Color, ColorString } from './../../../helpers/color.class';
import { ColorPickerConfig } from './../../../services/color-picker.service';
import * as i0 from "@angular/core";
export declare class ColorPresetComponent implements OnDestroy {
    private readonly pickerConfig;
    private readonly elementRef;
    activeColor: Color;
    color: Color;
    set depth(showDepthText: boolean);
    selectionChange: EventEmitter<Color>;
    longPress: EventEmitter<boolean>;
    private mouseup;
    private showDepthText;
    private subscriptions;
    constructor(pickerConfig: ColorPickerConfig, elementRef: ElementRef);
    ngOnDestroy(): void;
    get bgColor(): ColorString;
    get title(): string;
    get className(): boolean;
    private addEventListeners;
    private removeEventListeners;
    private onTouch;
    private onTouchEnd;
    static ɵfac: i0.ɵɵFactoryDeclaration<ColorPresetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ColorPresetComponent, "color-preset", never, { "activeColor": "activeColor"; "color": "color"; "depth": "show-depth-title"; }, { "selectionChange": "selectionChange"; "longPress": "longPress"; }, never, never, false>;
}
