import { OnDestroy, ChangeDetectorRef, EventEmitter } from '@angular/core';
import { Color } from './../../../helpers/color.class';
import * as i0 from "@angular/core";
export declare class ColorPresetSublist implements OnDestroy {
    private readonly document;
    private readonly cdr;
    list: Array<Color>;
    selectionChange: EventEmitter<Color>;
    direction: 'down' | 'up' | 'left' | 'right';
    activeColor: Color;
    showChildren: boolean;
    private subscriptions;
    constructor(document: any, cdr: ChangeDetectorRef);
    ngOnDestroy(): void;
    private removeListeners;
    /**
     * emit color change
     */
    onSelectionChange(color: Color): void;
    onLongPress(): void;
    private listenDocumentEvents;
    private closeList;
    get className(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ColorPresetSublist, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ColorPresetSublist, "color-preset-sublist", never, { "list": "list"; "direction": "direction"; "activeColor": "activeColor"; }, { "selectionChange": "selectionChange"; }, never, never, false>;
}
