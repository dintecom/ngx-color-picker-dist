import { EventEmitter, OnDestroy } from '@angular/core';
import { Color, ColorString } from './../../../helpers/color.class';
import { ColorPickerConfig } from './../../../services/color-picker.service';
export declare class ColorPresetComponent implements OnDestroy {
    private readonly pickerConfig;
    activeColor: Color;
    color: Color;
    depth: boolean;
    selectionChange: EventEmitter<Color>;
    longPress: EventEmitter<boolean>;
    private mouseup;
    private showDepthText;
    constructor(pickerConfig: ColorPickerConfig);
    ngOnDestroy(): void;
    readonly bgColor: ColorString;
    readonly title: string;
    readonly className: boolean;
    onTouch(event: MouseEvent | TouchEvent): void;
    onTouchEnd(event: MouseEvent | TouchEvent): void;
}
