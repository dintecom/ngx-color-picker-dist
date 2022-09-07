import { OnInit, EventEmitter, OnChanges, SimpleChanges, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ColorString } from './../../helpers/color.class';
import { ColorPickerControl } from './../../helpers/control.class';
import * as i0 from "@angular/core";
export declare class GithubPickerComponent implements OnInit, OnChanges, OnDestroy {
    private readonly cdr;
    color: string;
    control: ColorPickerControl;
    get columns(): string | number | null | undefined;
    set columns(value: string | number | null | undefined);
    private columnsValue;
    colorChange: EventEmitter<ColorString>;
    get width(): string;
    get columnsCount(): string | number;
    private subscriptions;
    constructor(cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GithubPickerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GithubPickerComponent, "github-picker", never, { "color": "color"; "control": "control"; "columns": "columns"; }, { "colorChange": "colorChange"; }, never, never, false>;
}
