import { OnInit, EventEmitter, SimpleChanges, OnDestroy, OnChanges, ChangeDetectorRef } from '@angular/core';
import { ColorString } from './../../helpers/color.class';
import { ColorPickerControl } from './../../helpers/control.class';
import * as i0 from "@angular/core";
export declare class ChromePickerComponent implements OnInit, OnChanges, OnDestroy {
    private readonly cdr;
    selectedPresentation: number;
    presentations: string[];
    color: string;
    control: ColorPickerControl;
    colorChange: EventEmitter<ColorString>;
    private subscriptions;
    constructor(cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    changePresentation(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChromePickerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ChromePickerComponent, "chrome-picker", never, { "color": "color"; "control": "control"; }, { "colorChange": "colorChange"; }, never, never, false>;
}
