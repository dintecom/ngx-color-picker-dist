import { EventEmitter } from '@angular/core';
import { Color } from './../../../helpers/color.class';
export declare class ColorPresetsComponent {
    columns: number;
    colorPresets: Array<Array<Color> | Color>;
    hue: Color;
    hueChange: EventEmitter<Color>;
    color: Color;
    colorChange: EventEmitter<Color>;
    direction: 'down' | 'up' | 'left' | 'right';
    onSelectionChange(color: Color): void;
    isList(colorPreset: Array<Array<Color> | Color>): boolean;
}
