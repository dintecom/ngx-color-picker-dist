import { EventEmitter, Renderer2, ElementRef, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Color } from './../../../helpers/color.class';
import { BaseComponent } from './../base.component';
export declare class SaturationComponent extends BaseComponent implements OnInit, OnChanges {
    hue: Color;
    color: Color;
    colorChange: EventEmitter<Color>;
    pointer: ElementRef;
    constructor(renderer: Renderer2, document: any, elementRef: ElementRef);
    readonly backgroundColor: string;
    onClick(event: any): void;
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
}
