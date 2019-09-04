import { ElementRef, Renderer2, OnDestroy } from '@angular/core';
/**
 * because a dynamic directive yet is not implemented,
 * we have a base class which will
 * help us to implement position calculation in our
 * components
 */
export declare abstract class BaseComponent implements OnDestroy {
    private readonly document;
    protected readonly elementRef: ElementRef;
    protected readonly renderer: Renderer2;
    private eventHooks;
    private window;
    private readonly requestAnimationFrame;
    constructor(document: any, elementRef: ElementRef, renderer: Renderer2);
    abstract movePointer(coordinates: {
        x: number;
        y: number;
        height: number;
        width: number;
    }): void;
    protected onEventChange(event: MouseEvent | TouchEvent): void;
    private calculateCoordinates;
    private calculate;
    private getRequestAnimationFrame;
    private removeListeners;
    ngOnDestroy(): void;
}
