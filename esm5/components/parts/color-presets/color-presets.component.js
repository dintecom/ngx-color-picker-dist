import * as tslib_1 from "tslib";
import { Component, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { Color } from './../../../helpers/color.class';
var ColorPresetsComponent = /** @class */ (function () {
    function ColorPresetsComponent() {
        this.columns = 8;
        this.hueChange = new EventEmitter(false);
        this.colorChange = new EventEmitter(false);
        this.direction = 'up';
    }
    ColorPresetsComponent.prototype.onSelectionChange = function (color) {
        var selectedRgbaColor = color.getRgba();
        var selectedHsvaColor = color.getHsva();
        var newColor = new Color().setRgba(selectedRgbaColor.red, selectedRgbaColor.green, selectedRgbaColor.blue, selectedRgbaColor.alpha);
        var hueColor = new Color().setHsva(selectedHsvaColor.hue);
        this.hueChange.emit(hueColor);
        this.colorChange.emit(newColor);
    };
    ColorPresetsComponent.prototype.isList = function (colorPreset) {
        return Array.isArray(colorPreset);
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], ColorPresetsComponent.prototype, "columns", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], ColorPresetsComponent.prototype, "colorPresets", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Color)
    ], ColorPresetsComponent.prototype, "hue", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], ColorPresetsComponent.prototype, "hueChange", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Color)
    ], ColorPresetsComponent.prototype, "color", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], ColorPresetsComponent.prototype, "colorChange", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], ColorPresetsComponent.prototype, "direction", void 0);
    ColorPresetsComponent = tslib_1.__decorate([
        Component({
            selector: "color-presets-component",
            template: "<div class=\"row\" *ngFor=\"let chunk of colorPresets | chunks: columns; let first = first; let last = last;\" [ngClass]=\"{ 'first': first, 'last': last }\">\n    <ng-template ngFor let-preset let-first=\"first\" let-last=\"last\" [ngForOf]=\"chunk\">\n        <color-preset-sublist \n            [list]=\"preset\" \n            *ngIf=\"isList(preset); else colorPreset\" \n            [direction]=\"direction\"\n            [activeColor]=\"color\"\n            [ngClass]=\"{ 'first': first, 'last': last }\"\n            (selectionChange)=\"onSelectionChange($event)\"></color-preset-sublist>\n\n        <ng-template #colorPreset>\n            <color-preset \n                [ngClass]=\"{ 'first': first, 'last': last }\"\n                [color]=\"preset\" \n                [activeColor]=\"color\" \n                (selectionChange)=\"onSelectionChange($event)\"></color-preset>\n        </ng-template>\n    </ng-template>\n</div>",
            changeDetection: ChangeDetectionStrategy.OnPush,
            styles: [":host,:host ::ng-deep *{padding:0;margin:0;-webkit-box-sizing:border-box;box-sizing:border-box}", ":host{display:block;font-size:0}:host .row:first-child{padding:0}color-preset-sublist:first-child,color-preset:first-child{margin:0}"]
        })
    ], ColorPresetsComponent);
    return ColorPresetsComponent;
}());
export { ColorPresetsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3ItcHJlc2V0cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaXBsYWIvbmd4LWNvbG9yLXBpY2tlci8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFydHMvY29sb3ItcHJlc2V0cy9jb2xvci1wcmVzZXRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFXdkQ7SUFUQTtRQVlXLFlBQU8sR0FBVyxDQUFDLENBQUM7UUFTcEIsY0FBUyxHQUFHLElBQUksWUFBWSxDQUFRLEtBQUssQ0FBQyxDQUFDO1FBTTNDLGdCQUFXLEdBQUcsSUFBSSxZQUFZLENBQVEsS0FBSyxDQUFDLENBQUM7UUFHN0MsY0FBUyxHQUFxQyxJQUFJLENBQUM7SUFnQjlELENBQUM7SUFkVSxpREFBaUIsR0FBeEIsVUFBeUIsS0FBWTtRQUNqQyxJQUFNLGlCQUFpQixHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMxQyxJQUFNLGlCQUFpQixHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUUxQyxJQUFNLFFBQVEsR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsaUJBQWlCLENBQUMsS0FBSyxFQUFFLGlCQUFpQixDQUFDLElBQUksRUFBRSxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0SSxJQUFNLFFBQVEsR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUU1RCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRU0sc0NBQU0sR0FBYixVQUFjLFdBQXdDO1FBQ2xELE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBakNEO1FBREMsS0FBSyxFQUFFOzswREFDbUI7SUFHM0I7UUFEQyxLQUFLLEVBQUU7MENBQ2EsS0FBSzsrREFBdUI7SUFHakQ7UUFEQyxLQUFLLEVBQUU7MENBQ0ksS0FBSztzREFBQztJQUdsQjtRQURDLE1BQU0sRUFBRTs7NERBQ3lDO0lBR2xEO1FBREMsS0FBSyxFQUFFOzBDQUNNLEtBQUs7d0RBQUM7SUFHcEI7UUFEQyxNQUFNLEVBQUU7OzhEQUMyQztJQUdwRDtRQURDLEtBQUssRUFBRTs7NERBQ2tEO0lBckJqRCxxQkFBcUI7UUFUakMsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLHlCQUF5QjtZQUNuQyxvN0JBQTZDO1lBSzdDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztTQUNsRCxDQUFDO09BQ1cscUJBQXFCLENBcUNqQztJQUFELDRCQUFDO0NBQUEsQUFyQ0QsSUFxQ0M7U0FyQ1kscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb2xvciB9IGZyb20gJy4vLi4vLi4vLi4vaGVscGVycy9jb2xvci5jbGFzcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBgY29sb3ItcHJlc2V0cy1jb21wb25lbnRgLFxuICAgIHRlbXBsYXRlVXJsOiBgLi9jb2xvci1wcmVzZXRzLmNvbXBvbmVudC5odG1sYCxcbiAgICBzdHlsZVVybHM6IFtcbiAgICAgICAgYC4vLi4vYmFzZS5zdHlsZS5zY3NzYCxcbiAgICAgICAgYC4vY29sb3ItcHJlc2V0cy5jb21wb25lbnQuc2Nzc2BcbiAgICBdLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIENvbG9yUHJlc2V0c0NvbXBvbmVudCB7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBjb2x1bW5zOiBudW1iZXIgPSA4O1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgY29sb3JQcmVzZXRzOiBBcnJheTxBcnJheTxDb2xvcj4gfCBDb2xvcj47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBodWU6IENvbG9yO1xuXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIGh1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q29sb3I+KGZhbHNlKTtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGNvbG9yOiBDb2xvcjtcblxuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBjb2xvckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q29sb3I+KGZhbHNlKTtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGRpcmVjdGlvbjogJ2Rvd24nIHwgJ3VwJyB8ICdsZWZ0JyB8ICdyaWdodCcgPSAndXAnO1xuXG4gICAgcHVibGljIG9uU2VsZWN0aW9uQ2hhbmdlKGNvbG9yOiBDb2xvcik6IHZvaWQge1xuICAgICAgICBjb25zdCBzZWxlY3RlZFJnYmFDb2xvciA9IGNvbG9yLmdldFJnYmEoKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRIc3ZhQ29sb3IgPSBjb2xvci5nZXRIc3ZhKCk7XG5cbiAgICAgICAgY29uc3QgbmV3Q29sb3IgPSBuZXcgQ29sb3IoKS5zZXRSZ2JhKHNlbGVjdGVkUmdiYUNvbG9yLnJlZCwgc2VsZWN0ZWRSZ2JhQ29sb3IuZ3JlZW4sIHNlbGVjdGVkUmdiYUNvbG9yLmJsdWUsIHNlbGVjdGVkUmdiYUNvbG9yLmFscGhhKTtcbiAgICAgICAgY29uc3QgaHVlQ29sb3IgPSBuZXcgQ29sb3IoKS5zZXRIc3ZhKHNlbGVjdGVkSHN2YUNvbG9yLmh1ZSk7XG5cbiAgICAgICAgdGhpcy5odWVDaGFuZ2UuZW1pdChodWVDb2xvcik7XG4gICAgICAgIHRoaXMuY29sb3JDaGFuZ2UuZW1pdChuZXdDb2xvcik7XG4gICAgfVxuXG4gICAgcHVibGljIGlzTGlzdChjb2xvclByZXNldDogQXJyYXk8QXJyYXk8Q29sb3I+IHwgQ29sb3I+KTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KGNvbG9yUHJlc2V0KTtcbiAgICB9XG59Il19