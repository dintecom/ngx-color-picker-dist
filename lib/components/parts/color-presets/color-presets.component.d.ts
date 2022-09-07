import { EventEmitter } from '@angular/core';
import { Color } from './../../../helpers/color.class';
import * as i0 from "@angular/core";
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
    static ɵfac: i0.ɵɵFactoryDeclaration<ColorPresetsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ColorPresetsComponent, "color-presets-component", never, { "columns": "columns"; "colorPresets": "colorPresets"; "hue": "hue"; "color": "color"; "direction": "direction"; }, { "hueChange": "hueChange"; "colorChange": "colorChange"; }, never, never, false>;
}
