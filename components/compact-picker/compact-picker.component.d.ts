import { OnInit, EventEmitter, SimpleChanges, OnChanges, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ColorString } from './../../helpers/color.class';
import { ColorPickerControl } from './../../helpers/control.class';
export declare class CompactPickerComponent implements OnInit, OnChanges, OnDestroy {
    private readonly cdr;
    color: string;
    control: ColorPickerControl;
    colorChange: EventEmitter<ColorString>;
    constructor(cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
