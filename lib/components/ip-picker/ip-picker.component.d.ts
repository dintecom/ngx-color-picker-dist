import { OnInit, EventEmitter, SimpleChanges, OnDestroy, OnChanges } from '@angular/core';
import { ColorString } from './../../helpers/color.class';
import { ColorPickerControl } from './../../helpers/control.class';
import * as i0 from "@angular/core";
export declare class IpPickerComponent implements OnInit, OnChanges, OnDestroy {
    color: string;
    control: ColorPickerControl;
    colorChange: EventEmitter<ColorString>;
    private subscriptions;
    constructor();
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<IpPickerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IpPickerComponent, "ip-picker", never, { "color": "color"; "control": "control"; }, { "colorChange": "colorChange"; }, never, never, false>;
}
