import { EventEmitter } from '@angular/core';
import { Color } from './../../../../helpers/color.class';
import * as i0 from "@angular/core";
export declare class RgbaComponent {
    hue: Color;
    hueChange: EventEmitter<Color>;
    color: Color;
    colorChange: EventEmitter<Color>;
    labelVisible: boolean;
    set label(value: any);
    isAlphaVisible: boolean;
    set alpha(isVisible: boolean);
    get value(): import("../../../../helpers/rgba.class").Rgba;
    onInputChange(newValue: number, color: 'R' | 'G' | 'B' | 'A'): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RgbaComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RgbaComponent, "rgba-input-component", never, { "hue": "hue"; "color": "color"; "label": "label"; "alpha": "alpha"; }, { "hueChange": "hueChange"; "colorChange": "colorChange"; }, never, never, false>;
}
