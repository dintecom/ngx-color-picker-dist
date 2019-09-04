import { Renderer2, OnDestroy, ChangeDetectorRef, EventEmitter } from '@angular/core';
import { Color } from './../../../helpers/color.class';
export declare class ColorPresetSublist implements OnDestroy {
    private readonly renderer;
    private readonly document;
    private readonly cdr;
    list: Array<Color>;
    selectionChange: EventEmitter<Color>;
    direction: 'down' | 'up' | 'left' | 'right';
    activeColor: Color;
    showChildren: boolean;
    private hooks;
    constructor(renderer: Renderer2, document: any, cdr: ChangeDetectorRef);
    ngOnDestroy(): void;
    private removeListeners;
    /**
     * emit color change
     */
    onSelectionChange(color: Color): void;
    onLongPress(): void;
    private listenDocumentClick;
    private closeList;
    readonly className: string;
}
