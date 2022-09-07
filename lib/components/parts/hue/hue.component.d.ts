import { Renderer2, ElementRef, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { Color } from './../../../helpers/color.class';
import { BaseComponent } from './../base.component';
import * as i0 from "@angular/core";
export declare class HueComponent extends BaseComponent implements OnChanges {
    private readonly renderer;
    hue: Color;
    hueChange: EventEmitter<Color>;
    color: Color;
    colorChange: EventEmitter<Color>;
    pointer: ElementRef;
    private isVertical;
    constructor(renderer: Renderer2);
    set vertical(value: string);
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
    /**
     * hue value is in range from 0 to 360°
     */
    private changePointerPosition;
    static ɵfac: i0.ɵɵFactoryDeclaration<HueComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HueComponent, "hue-component", never, { "hue": "hue"; "color": "color"; "vertical": "vertical"; }, { "hueChange": "hueChange"; "colorChange": "colorChange"; }, never, never, false>;
}
