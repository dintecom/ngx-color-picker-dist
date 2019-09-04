import { EventEmitter } from '@angular/core';
import { Color } from './../../../../helpers/color.class';
export declare class RgbaComponent {
    hue: Color;
    hueChange: EventEmitter<Color>;
    color: Color;
    colorChange: EventEmitter<Color>;
    labelVisible: boolean;
    label: any;
    isAlphaVisible: boolean;
    alpha: boolean;
    readonly value: import("../../../../iplab-ngx-color-picker").ɵx;
    onInputChange(newValue: number, color: 'R' | 'G' | 'B' | 'A'): void;
}
