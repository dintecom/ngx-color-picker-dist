import { OnInit, EventEmitter, SimpleChanges, OnChanges, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ColorString } from './../../helpers/color.class';
import { ColorPickerControl } from './../../helpers/control.class';
import * as i0 from "@angular/core";
export declare class SketchPickerComponent implements OnInit, OnChanges, OnDestroy {
    private readonly cdr;
    color: string;
    control: ColorPickerControl;
    colorChange: EventEmitter<ColorString>;
    private subscriptions;
    constructor(cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SketchPickerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SketchPickerComponent, "sketch-picker", never, { "color": "color"; "control": "control"; }, { "colorChange": "colorChange"; }, never, never, false>;
}
