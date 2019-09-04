import { OnInit, EventEmitter, SimpleChanges, OnDestroy, ChangeDetectorRef, OnChanges } from '@angular/core';
import { ColorString } from './../../helpers/color.class';
import { ColorPickerControl } from './../../helpers/control.class';
export declare class SwatchesPickerComponent implements OnInit, OnChanges, OnDestroy {
    private readonly cdr;
    color: string;
    colorChange: EventEmitter<ColorString>;
    control: ColorPickerControl;
    childControl: ColorPickerControl;
    private mapColors;
    constructor(cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
