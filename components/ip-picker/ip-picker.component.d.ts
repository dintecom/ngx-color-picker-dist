import { OnInit, EventEmitter, SimpleChanges, OnDestroy, OnChanges } from '@angular/core';
import { ColorString } from './../../helpers/color.class';
import { ColorPickerControl } from './../../helpers/control.class';
export declare class IpPickerComponent implements OnInit, OnChanges, OnDestroy {
    color: string;
    control: ColorPickerControl;
    colorChange: EventEmitter<ColorString>;
    constructor();
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
