import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ColorPickerControl } from './../../helpers/control.class';
import { getValueByType } from './../../helpers/helper.functions';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../parts/saturation/saturation.component";
import * as i3 from "../parts/indicator/indicator.component";
import * as i4 from "../parts/hue/hue.component";
import * as i5 from "../parts/inputs/hex-input/hex-input.component";
import * as i6 from "../parts/color-presets/color-presets.component";
export class CompactPickerComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.colorChange = new EventEmitter(false);
        this.subscriptions = [];
    }
    ngOnInit() {
        if (!this.control) {
            this.control = new ColorPickerControl();
        }
        if (this.color) {
            this.control.setValueFrom(this.color);
        }
        /**
         * set color presets
         * defined by compact color picker component
         */
        if (!this.control.hasPresets()) {
            this.control
                .setColorPresets([
                '#6da6e8', '#74c283', '#f9d948', '#f5943f', '#f66c6c', '#ef8ab8', '#696cd4', '#6c6c6c', '#f6f5f5'
            ]);
        }
        this.subscriptions.push(this.control.valueChanges.subscribe((value) => {
            this.cdr.markForCheck();
            this.colorChange.emit(getValueByType(value, this.control.initType));
        }));
    }
    ngOnDestroy() {
        this.cdr.detach();
        this.subscriptions.forEach((subscription) => subscription.unsubscribe());
        this.subscriptions.length = 0;
    }
    ngOnChanges(changes) {
        if (this.color && this.control && getValueByType(this.control.value, this.control.initType) !== this.color) {
            this.control.setValueFrom(this.color);
        }
    }
}
CompactPickerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: CompactPickerComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
CompactPickerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.1", type: CompactPickerComponent, selector: "compact-picker", inputs: { color: "color", control: "control" }, outputs: { colorChange: "colorChange" }, usesOnChanges: true, ngImport: i0, template: "<color-presets-component \n    *ngIf=\"control.presetsVisibilityChanges | async\" \n    direction=\"down\"\n    [columns]=\"9\" \n    [(color)]=\"control.value\" \n    [colorPresets]=\"control.presets\" \n    [(hue)]=\"control.hue\"></color-presets-component>\n\n<div class=\"controls\">\n    <div class=\"controls-row saturation-hue\">\n        <div class=\"column\">\n            <saturation-component [hue]=\"control.hue\" [(color)]=\"control.value\"></saturation-component>\n        </div>\n        <div class=\"column hue-column\">\n            <hue-component vertical [(hue)]=\"control.hue\" [(color)]=\"control.value\"></hue-component>\n        </div>\n    </div>\n    <div class=\"controls-row presentation\">\n        <div class=\"column\">\n            <svg class=\"pencil\" viewBox=\"0 0 1024 1024\">\n                <path d=\"M639.77,121.045l-48.598,84.2l112.215,64.8l48.6-84.205L639.77,121.045z M558.773,261.354\n                    L315.78,682.206l112.215,64.795L670.99,326.15L558.773,261.354z M690.816,75.691l74.922,43.286\n                    c41.682,24.045,55.52,76.564,31.725,117.784l-37.967,65.68l-32.398,56.11L451.706,835.594L282.452,947.303\n                    c-40.961,27.004-70.24,9.027-67.329-38.894l12.149-202.411l275.395-477.041l32.398-56.11l37.883-65.686\n                    C596.824,65.946,649.473,51.857,690.816,75.691z M274.689,883.015l120.908-79.818l-112.218-64.8L274.689,883.015z\"/>\n            </svg>\n            <hex-input-component prefix=\"#\" [(color)]=\"control.value\" [(hue)]=\"control.hue\"></hex-input-component>\n        </div>\n        <div class=\"column\">\n            <indicator-component colorType=\"hex\" [color]=\"control.value\"></indicator-component>\n        </div>\n    </div>\n</div>", styles: [":host,:host ::ng-deep *{padding:0;margin:0;box-sizing:border-box}\n", ":host{display:block;width:240px;border-radius:3px;background:#fff;box-shadow:#0000004d 0 0 2px,#0000004d 0 0 4px}color-presets-component{border-bottom:1px solid #e4e4e6;padding:9px 12px}color-presets-component ::ng-deep .row{padding:10px 0 0}.controls{padding:10px 12px 12px}.controls-row{display:table;width:100%}.column{display:table-cell;vertical-align:middle}.controls-row.saturation-hue{padding-bottom:9px}.controls-row.saturation-hue .column:first-child{width:178px}saturation-component{height:178px;box-shadow:inset #0009 0 0 2px}saturation-component ::ng-deep .pointer{border-width:2px;box-shadow:#0009 0 0 2px}.hue-column{padding-left:14px}:host hue-component{width:100%;height:178px;box-shadow:inset #0009 0 0 2px}:host hue-component[vertical] ::ng-deep .pointer{width:auto;height:9px;left:-3px;right:-3px;margin:-4.5px 0 0;background:transparent;border:3px solid #fff;border-radius:5px;box-shadow:#0009 0 0 2px}.controls-row.presentation{border:1px solid #e4e4e6;border-radius:3px;padding:6px 6px 6px 26px;position:relative}indicator-component{height:18px;width:18px;box-shadow:inset #0009 0 0 2px;border-radius:50%}:host indicator-component ::ng-deep svg{vertical-align:25%}hex-input-component ::ng-deep input{border:0;color:#817e81;margin:0;text-align:left;height:18px}.pencil{position:absolute;height:14px;width:14px;left:6px;top:50%;margin:-7px 0 0}.pencil svg{fill:#000}:host ::ng-deep .reflection{display:none}:host ::ng-deep color-preset{height:18px;width:18px;border-radius:50%;box-shadow:inset #0009 0 1px 1px}:host ::ng-deep .row>color-preset,:host ::ng-deep .row>color-preset-sublist{margin:0 0 0 6px}:host ::ng-deep .row>color-preset:first-child,:host ::ng-deep .row>color-preset-sublist:first-child{margin:0}:host ::ng-deep color-preset.selected,:host ::ng-deep .sublist color-preset:hover,:host ::ng-deep .row>color-preset:hover{box-shadow:inset #0009 0 1px 6px}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.SaturationComponent, selector: "saturation-component", inputs: ["hue", "color"], outputs: ["colorChange"] }, { kind: "component", type: i3.IndicatorComponent, selector: "indicator-component", inputs: ["color", "colorType"] }, { kind: "component", type: i4.HueComponent, selector: "hue-component", inputs: ["hue", "color", "vertical"], outputs: ["hueChange", "colorChange"] }, { kind: "component", type: i5.HexComponent, selector: "hex-input-component", inputs: ["hue", "color", "label", "prefix"], outputs: ["hueChange", "colorChange"] }, { kind: "component", type: i6.ColorPresetsComponent, selector: "color-presets-component", inputs: ["columns", "colorPresets", "hue", "color", "direction"], outputs: ["hueChange", "colorChange"] }, { kind: "pipe", type: i1.AsyncPipe, name: "async" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: CompactPickerComponent, decorators: [{
            type: Component,
            args: [{ selector: `compact-picker`, changeDetection: ChangeDetectionStrategy.OnPush, template: "<color-presets-component \n    *ngIf=\"control.presetsVisibilityChanges | async\" \n    direction=\"down\"\n    [columns]=\"9\" \n    [(color)]=\"control.value\" \n    [colorPresets]=\"control.presets\" \n    [(hue)]=\"control.hue\"></color-presets-component>\n\n<div class=\"controls\">\n    <div class=\"controls-row saturation-hue\">\n        <div class=\"column\">\n            <saturation-component [hue]=\"control.hue\" [(color)]=\"control.value\"></saturation-component>\n        </div>\n        <div class=\"column hue-column\">\n            <hue-component vertical [(hue)]=\"control.hue\" [(color)]=\"control.value\"></hue-component>\n        </div>\n    </div>\n    <div class=\"controls-row presentation\">\n        <div class=\"column\">\n            <svg class=\"pencil\" viewBox=\"0 0 1024 1024\">\n                <path d=\"M639.77,121.045l-48.598,84.2l112.215,64.8l48.6-84.205L639.77,121.045z M558.773,261.354\n                    L315.78,682.206l112.215,64.795L670.99,326.15L558.773,261.354z M690.816,75.691l74.922,43.286\n                    c41.682,24.045,55.52,76.564,31.725,117.784l-37.967,65.68l-32.398,56.11L451.706,835.594L282.452,947.303\n                    c-40.961,27.004-70.24,9.027-67.329-38.894l12.149-202.411l275.395-477.041l32.398-56.11l37.883-65.686\n                    C596.824,65.946,649.473,51.857,690.816,75.691z M274.689,883.015l120.908-79.818l-112.218-64.8L274.689,883.015z\"/>\n            </svg>\n            <hex-input-component prefix=\"#\" [(color)]=\"control.value\" [(hue)]=\"control.hue\"></hex-input-component>\n        </div>\n        <div class=\"column\">\n            <indicator-component colorType=\"hex\" [color]=\"control.value\"></indicator-component>\n        </div>\n    </div>\n</div>", styles: [":host,:host ::ng-deep *{padding:0;margin:0;box-sizing:border-box}\n", ":host{display:block;width:240px;border-radius:3px;background:#fff;box-shadow:#0000004d 0 0 2px,#0000004d 0 0 4px}color-presets-component{border-bottom:1px solid #e4e4e6;padding:9px 12px}color-presets-component ::ng-deep .row{padding:10px 0 0}.controls{padding:10px 12px 12px}.controls-row{display:table;width:100%}.column{display:table-cell;vertical-align:middle}.controls-row.saturation-hue{padding-bottom:9px}.controls-row.saturation-hue .column:first-child{width:178px}saturation-component{height:178px;box-shadow:inset #0009 0 0 2px}saturation-component ::ng-deep .pointer{border-width:2px;box-shadow:#0009 0 0 2px}.hue-column{padding-left:14px}:host hue-component{width:100%;height:178px;box-shadow:inset #0009 0 0 2px}:host hue-component[vertical] ::ng-deep .pointer{width:auto;height:9px;left:-3px;right:-3px;margin:-4.5px 0 0;background:transparent;border:3px solid #fff;border-radius:5px;box-shadow:#0009 0 0 2px}.controls-row.presentation{border:1px solid #e4e4e6;border-radius:3px;padding:6px 6px 6px 26px;position:relative}indicator-component{height:18px;width:18px;box-shadow:inset #0009 0 0 2px;border-radius:50%}:host indicator-component ::ng-deep svg{vertical-align:25%}hex-input-component ::ng-deep input{border:0;color:#817e81;margin:0;text-align:left;height:18px}.pencil{position:absolute;height:14px;width:14px;left:6px;top:50%;margin:-7px 0 0}.pencil svg{fill:#000}:host ::ng-deep .reflection{display:none}:host ::ng-deep color-preset{height:18px;width:18px;border-radius:50%;box-shadow:inset #0009 0 1px 1px}:host ::ng-deep .row>color-preset,:host ::ng-deep .row>color-preset-sublist{margin:0 0 0 6px}:host ::ng-deep .row>color-preset:first-child,:host ::ng-deep .row>color-preset-sublist:first-child{margin:0}:host ::ng-deep color-preset.selected,:host ::ng-deep .sublist color-preset:hover,:host ::ng-deep .row>color-preset:hover{box-shadow:inset #0009 0 1px 6px}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }]; }, propDecorators: { color: [{
                type: Input
            }], control: [{
                type: Input
            }], colorChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFjdC1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaXBsYWIvbmd4LWNvbG9yLXBpY2tlci9zcmMvbGliL2NvbXBvbmVudHMvY29tcGFjdC1waWNrZXIvY29tcGFjdC1waWNrZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaXBsYWIvbmd4LWNvbG9yLXBpY2tlci9zcmMvbGliL2NvbXBvbmVudHMvY29tcGFjdC1waWNrZXIvY29tcGFjdC1waWNrZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNILFNBQVMsRUFFVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFFWix1QkFBdUIsRUFJMUIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOzs7Ozs7OztBQVlsRSxNQUFNLE9BQU8sc0JBQXNCO0lBYS9CLFlBQTZCLEdBQXNCO1FBQXRCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBSjVDLGdCQUFXLEdBQThCLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWhFLGtCQUFhLEdBQXdCLEVBQUUsQ0FBQztJQUdoRCxDQUFDO0lBRU0sUUFBUTtRQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2YsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGtCQUFrQixFQUFFLENBQUM7U0FDM0M7UUFFRCxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDWixJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDekM7UUFFRDs7O1dBR0c7UUFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsRUFBRTtZQUM1QixJQUFJLENBQUMsT0FBTztpQkFDUCxlQUFlLENBQUM7Z0JBQ2IsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTO2FBQ3BHLENBQUMsQ0FBQztTQUNWO1FBRUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQzFDLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDeEUsQ0FBQyxDQUFDLENBQ0wsQ0FBQztJQUNOLENBQUM7SUFFTSxXQUFXO1FBQ2QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFlBQVksRUFBRSxFQUFFLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFTSxXQUFXLENBQUMsT0FBc0I7UUFDckMsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssRUFBRTtZQUN4RyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDekM7SUFDTCxDQUFDOzttSEF0RFEsc0JBQXNCO3VHQUF0QixzQkFBc0Isb0tDMUJuQyxtdERBZ0NNOzJGRE5PLHNCQUFzQjtrQkFUbEMsU0FBUzsrQkFDSSxnQkFBZ0IsbUJBTVQsdUJBQXVCLENBQUMsTUFBTTt3R0FLeEMsS0FBSztzQkFEWCxLQUFLO2dCQUlDLE9BQU87c0JBRGIsS0FBSztnQkFJQyxXQUFXO3NCQURqQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgT25Jbml0LFxuICAgIElucHV0LFxuICAgIE91dHB1dCxcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgU2ltcGxlQ2hhbmdlcyxcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgICBPbkNoYW5nZXMsXG4gICAgT25EZXN0cm95LFxuICAgIENoYW5nZURldGVjdG9yUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29sb3JTdHJpbmcgfSBmcm9tICcuLy4uLy4uL2hlbHBlcnMvY29sb3IuY2xhc3MnO1xuaW1wb3J0IHsgQ29sb3JQaWNrZXJDb250cm9sIH0gZnJvbSAnLi8uLi8uLi9oZWxwZXJzL2NvbnRyb2wuY2xhc3MnO1xuaW1wb3J0IHsgZ2V0VmFsdWVCeVR5cGUgfSBmcm9tICcuLy4uLy4uL2hlbHBlcnMvaGVscGVyLmZ1bmN0aW9ucyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IGBjb21wYWN0LXBpY2tlcmAsXG4gICAgdGVtcGxhdGVVcmw6IGAuL2NvbXBhY3QtcGlja2VyLmNvbXBvbmVudC5odG1sYCxcbiAgICBzdHlsZVVybHM6IFtcbiAgICAgICAgYC4vLi4vcGFydHMvYmFzZS5zdHlsZS5zY3NzYCxcbiAgICAgICAgYC4vY29tcGFjdC1waWNrZXIuY29tcG9uZW50LnNjc3NgXG4gICAgXSxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBDb21wYWN0UGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBjb2xvcjogc3RyaW5nO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgY29udHJvbDogQ29sb3JQaWNrZXJDb250cm9sO1xuXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIGNvbG9yQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Q29sb3JTdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcihmYWxzZSk7XG5cbiAgICBwcml2YXRlIHN1YnNjcmlwdGlvbnM6IEFycmF5PFN1YnNjcmlwdGlvbj4gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbnRyb2wpIHtcbiAgICAgICAgICAgIHRoaXMuY29udHJvbCA9IG5ldyBDb2xvclBpY2tlckNvbnRyb2woKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmNvbG9yKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRyb2wuc2V0VmFsdWVGcm9tKHRoaXMuY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIHNldCBjb2xvciBwcmVzZXRzXG4gICAgICAgICAqIGRlZmluZWQgYnkgY29tcGFjdCBjb2xvciBwaWNrZXIgY29tcG9uZW50XG4gICAgICAgICAqL1xuICAgICAgICBpZiAoIXRoaXMuY29udHJvbC5oYXNQcmVzZXRzKCkpIHtcbiAgICAgICAgICAgIHRoaXMuY29udHJvbFxuICAgICAgICAgICAgICAgIC5zZXRDb2xvclByZXNldHMoW1xuICAgICAgICAgICAgICAgICAgICAnIzZkYTZlOCcsICcjNzRjMjgzJywgJyNmOWQ5NDgnLCAnI2Y1OTQzZicsICcjZjY2YzZjJywgJyNlZjhhYjgnLCAnIzY5NmNkNCcsICcjNmM2YzZjJywgJyNmNmY1ZjUnXG4gICAgICAgICAgICAgICAgXSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChcbiAgICAgICAgICAgIHRoaXMuY29udHJvbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICAgICAgICAgIHRoaXMuY29sb3JDaGFuZ2UuZW1pdChnZXRWYWx1ZUJ5VHlwZSh2YWx1ZSwgdGhpcy5jb250cm9sLmluaXRUeXBlKSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jZHIuZGV0YWNoKCk7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5mb3JFYWNoKChzdWJzY3JpcHRpb24pID0+IHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpKTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmxlbmd0aCA9IDA7XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuY29sb3IgJiYgdGhpcy5jb250cm9sICYmIGdldFZhbHVlQnlUeXBlKHRoaXMuY29udHJvbC52YWx1ZSwgdGhpcy5jb250cm9sLmluaXRUeXBlKSAhPT0gdGhpcy5jb2xvcikge1xuICAgICAgICAgICAgdGhpcy5jb250cm9sLnNldFZhbHVlRnJvbSh0aGlzLmNvbG9yKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCI8Y29sb3ItcHJlc2V0cy1jb21wb25lbnQgXG4gICAgKm5nSWY9XCJjb250cm9sLnByZXNldHNWaXNpYmlsaXR5Q2hhbmdlcyB8IGFzeW5jXCIgXG4gICAgZGlyZWN0aW9uPVwiZG93blwiXG4gICAgW2NvbHVtbnNdPVwiOVwiIFxuICAgIFsoY29sb3IpXT1cImNvbnRyb2wudmFsdWVcIiBcbiAgICBbY29sb3JQcmVzZXRzXT1cImNvbnRyb2wucHJlc2V0c1wiIFxuICAgIFsoaHVlKV09XCJjb250cm9sLmh1ZVwiPjwvY29sb3ItcHJlc2V0cy1jb21wb25lbnQ+XG5cbjxkaXYgY2xhc3M9XCJjb250cm9sc1wiPlxuICAgIDxkaXYgY2xhc3M9XCJjb250cm9scy1yb3cgc2F0dXJhdGlvbi1odWVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtblwiPlxuICAgICAgICAgICAgPHNhdHVyYXRpb24tY29tcG9uZW50IFtodWVdPVwiY29udHJvbC5odWVcIiBbKGNvbG9yKV09XCJjb250cm9sLnZhbHVlXCI+PC9zYXR1cmF0aW9uLWNvbXBvbmVudD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gaHVlLWNvbHVtblwiPlxuICAgICAgICAgICAgPGh1ZS1jb21wb25lbnQgdmVydGljYWwgWyhodWUpXT1cImNvbnRyb2wuaHVlXCIgWyhjb2xvcildPVwiY29udHJvbC52YWx1ZVwiPjwvaHVlLWNvbXBvbmVudD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRyb2xzLXJvdyBwcmVzZW50YXRpb25cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtblwiPlxuICAgICAgICAgICAgPHN2ZyBjbGFzcz1cInBlbmNpbFwiIHZpZXdCb3g9XCIwIDAgMTAyNCAxMDI0XCI+XG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk02MzkuNzcsMTIxLjA0NWwtNDguNTk4LDg0LjJsMTEyLjIxNSw2NC44bDQ4LjYtODQuMjA1TDYzOS43NywxMjEuMDQ1eiBNNTU4Ljc3MywyNjEuMzU0XG4gICAgICAgICAgICAgICAgICAgIEwzMTUuNzgsNjgyLjIwNmwxMTIuMjE1LDY0Ljc5NUw2NzAuOTksMzI2LjE1TDU1OC43NzMsMjYxLjM1NHogTTY5MC44MTYsNzUuNjkxbDc0LjkyMiw0My4yODZcbiAgICAgICAgICAgICAgICAgICAgYzQxLjY4MiwyNC4wNDUsNTUuNTIsNzYuNTY0LDMxLjcyNSwxMTcuNzg0bC0zNy45NjcsNjUuNjhsLTMyLjM5OCw1Ni4xMUw0NTEuNzA2LDgzNS41OTRMMjgyLjQ1Miw5NDcuMzAzXG4gICAgICAgICAgICAgICAgICAgIGMtNDAuOTYxLDI3LjAwNC03MC4yNCw5LjAyNy02Ny4zMjktMzguODk0bDEyLjE0OS0yMDIuNDExbDI3NS4zOTUtNDc3LjA0MWwzMi4zOTgtNTYuMTFsMzcuODgzLTY1LjY4NlxuICAgICAgICAgICAgICAgICAgICBDNTk2LjgyNCw2NS45NDYsNjQ5LjQ3Myw1MS44NTcsNjkwLjgxNiw3NS42OTF6IE0yNzQuNjg5LDg4My4wMTVsMTIwLjkwOC03OS44MThsLTExMi4yMTgtNjQuOEwyNzQuNjg5LDg4My4wMTV6XCIvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8aGV4LWlucHV0LWNvbXBvbmVudCBwcmVmaXg9XCIjXCIgWyhjb2xvcildPVwiY29udHJvbC52YWx1ZVwiIFsoaHVlKV09XCJjb250cm9sLmh1ZVwiPjwvaGV4LWlucHV0LWNvbXBvbmVudD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgIDxpbmRpY2F0b3ItY29tcG9uZW50IGNvbG9yVHlwZT1cImhleFwiIFtjb2xvcl09XCJjb250cm9sLnZhbHVlXCI+PC9pbmRpY2F0b3ItY29tcG9uZW50PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PiJdfQ==