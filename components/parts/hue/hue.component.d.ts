import { Renderer2, ElementRef, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { Color } from './../../../helpers/color.class';
import { BaseComponent } from './../base.component';
export declare class HueComponent extends BaseComponent implements OnChanges {
    hue: Color;
    hueChange: EventEmitter<Color>;
    color: Color;
    colorChange: EventEmitter<Color>;
    pointer: ElementRef;
    private isVertical;
    constructor(renderer: Renderer2, document: any, elementRef: ElementRef);
    onClick(event: any): void;
    vertical: string;
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
}
