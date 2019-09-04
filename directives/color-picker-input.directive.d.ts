import { EventEmitter } from '@angular/core';
export declare class ColorPickerInputDirective {
    min: string;
    max: string;
    inputChange: EventEmitter<number>;
    inputChanges(event: any): void;
}
