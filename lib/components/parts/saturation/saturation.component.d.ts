import { EventEmitter, Renderer2, ElementRef, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Color } from './../../../helpers/color.class';
import { BaseComponent } from './../base.component';
import * as i0 from "@angular/core";
export declare class SaturationComponent extends BaseComponent implements OnInit, OnChanges {
    private readonly renderer;
    hue: Color;
    color: Color;
    colorChange: EventEmitter<Color>;
    pointer: ElementRef;
    constructor(renderer: Renderer2);
    get backgroundColor(): string;
    ngOnInit(): void;
    /**
     * color can be changed through inputs
     * and then we need to move pointer
     */
    ngOnChanges(changes: SimpleChanges): void;
    movePointer({ x, y, height, width }: {
        x: any;
        y: any;
        height: any;
        width: any;
    }): void;
    private changePointerPosition;
    static ɵfac: i0.ɵɵFactoryDeclaration<SaturationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SaturationComponent, "saturation-component", never, { "hue": "hue"; "color": "color"; }, { "colorChange": "colorChange"; }, never, never, false>;
}
