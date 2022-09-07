import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ColorPickerInputDirective {
    min: string;
    max: string;
    inputChange: EventEmitter<number>;
    inputChanges(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ColorPickerInputDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ColorPickerInputDirective, "[inputChange]", never, { "min": "min"; "max": "max"; }, { "inputChange": "inputChange"; }, never, never, false>;
}
