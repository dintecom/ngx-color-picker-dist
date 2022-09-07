import { EventEmitter } from '@angular/core';
import { Color } from './../../../../helpers/color.class';
import * as i0 from "@angular/core";
export declare class HslaComponent {
    hue: Color;
    hueChange: EventEmitter<Color>;
    color: Color;
    colorChange: EventEmitter<Color>;
    labelVisible: boolean;
    set label(value: any);
    isAlphaVisible: boolean;
    set alpha(isVisible: boolean);
    get value(): import("../../../../helpers/hsla.class").Hsla;
    onInputChange(newValue: number, color: 'H' | 'S' | 'L' | 'A'): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<HslaComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HslaComponent, "hsla-input-component", never, { "hue": "hue"; "color": "color"; "label": "label"; "alpha": "alpha"; }, { "hueChange": "hueChange"; "colorChange": "colorChange"; }, never, never, false>;
}
