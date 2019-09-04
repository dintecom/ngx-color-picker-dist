import { OnInit, EventEmitter, OnChanges, SimpleChanges, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ColorString } from './../../helpers/color.class';
import { ColorPickerControl } from './../../helpers/control.class';
export declare class GithubPickerComponent implements OnInit, OnChanges, OnDestroy {
    private readonly cdr;
    color: string;
    control: ColorPickerControl;
    columns: number | 'auto';
    colorChange: EventEmitter<ColorString>;
    readonly widht: string;
    readonly columnsCount: number;
    constructor(cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
