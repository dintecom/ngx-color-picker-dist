import { OnInit, EventEmitter, SimpleChanges, OnDestroy, OnChanges, ChangeDetectorRef } from '@angular/core';
import { ColorString } from './../../helpers/color.class';
import { ColorPickerControl } from './../../helpers/control.class';
export declare class ChromePickerComponent implements OnInit, OnChanges, OnDestroy {
    private readonly cdr;
    selectedPresentation: number;
    presentations: string[];
    color: string;
    control: ColorPickerControl;
    colorChange: EventEmitter<ColorString>;
    constructor(cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    changePresentation(): void;
}
