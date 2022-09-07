import { EventEmitter } from '@angular/core';
import { Color } from '../../../../helpers/color.class';
import * as i0 from "@angular/core";
export declare class HexComponent {
    hue: Color;
    hueChange: EventEmitter<Color>;
    color: Color;
    colorChange: EventEmitter<Color>;
    labelVisible: boolean;
    private prefixValue;
    set label(value: any);
    set prefix(value: any);
    get value(): string;
    onInputChange(event: KeyboardEvent, inputValue: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<HexComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HexComponent, "hex-input-component", never, { "hue": "hue"; "color": "color"; "label": "label"; "prefix": "prefix"; }, { "hueChange": "hueChange"; "colorChange": "colorChange"; }, never, never, false>;
}
