import { EventEmitter } from '@angular/core';
import { Color } from '../../../../helpers/color.class';
export declare class HexComponent {
    hue: Color;
    hueChange: EventEmitter<Color>;
    color: Color;
    colorChange: EventEmitter<Color>;
    labelVisible: boolean;
    private prefixValue;
    label: any;
    prefix: any;
    readonly value: string;
    onInputChange(inputValue: string): void;
}
