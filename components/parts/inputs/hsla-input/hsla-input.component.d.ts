import { EventEmitter } from '@angular/core';
import { Color } from './../../../../helpers/color.class';
export declare class HslaComponent {
    hue: Color;
    hueChange: EventEmitter<Color>;
    color: Color;
    colorChange: EventEmitter<Color>;
    labelVisible: boolean;
    label: any;
    isAlphaVisible: boolean;
    alpha: boolean;
    readonly value: import("../../../../helpers/hsla.class").Hsla;
    onInputChange(newValue: number, color: 'H' | 'S' | 'L' | 'A'): void;
}
