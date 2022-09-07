import { OnInit, EventEmitter, SimpleChanges, OnDestroy, ChangeDetectorRef, OnChanges } from '@angular/core';
import { ColorString } from './../../helpers/color.class';
import { ColorPickerControl } from './../../helpers/control.class';
import * as i0 from "@angular/core";
export declare class SwatchesPickerComponent implements OnInit, OnChanges, OnDestroy {
    private readonly cdr;
    color: string;
    colorChange: EventEmitter<ColorString>;
    control: ColorPickerControl;
    childControl: ColorPickerControl;
    private subscriptions;
    private mapColors;
    constructor(cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SwatchesPickerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SwatchesPickerComponent, "swatches-picker", never, { "color": "color"; }, { "colorChange": "colorChange"; }, never, never, false>;
}
