import { ElementRef, OnDestroy } from '@angular/core';
import * as i0 from "@angular/core";
export declare abstract class BaseComponent implements OnDestroy {
    private readonly subscriptions;
    private window;
    private readonly requestAnimationFrame;
    private mouseup;
    private readonly document;
    protected readonly elementRef: ElementRef;
    constructor();
    abstract movePointer(coordinates: {
        x: number;
        y: number;
        height: number;
        width: number;
    }): void;
    private addEventListeners;
    private onEventChange;
    private calculateCoordinates;
    private calculate;
    private getRequestAnimationFrame;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<BaseComponent, never, never, {}, {}, never, never, false>;
}
