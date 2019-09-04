import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ColorPickerControl } from './../../helpers/control.class';
import { getValueByType } from './../../helpers/helper.functions';
var CompactPickerComponent = /** @class */ (function () {
    function CompactPickerComponent(cdr) {
        this.cdr = cdr;
        this.colorChange = new EventEmitter(false);
    }
    CompactPickerComponent.prototype.ngOnInit = function () {
        var _this = this;
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
        this.control.valueChanges.subscribe(function (value) {
            _this.cdr.markForCheck();
            _this.colorChange.emit(getValueByType(value, _this.control.initType));
        });
    };
    CompactPickerComponent.prototype.ngOnDestroy = function () {
        this.control.unsubscribe();
        this.cdr.detach();
    };
    CompactPickerComponent.prototype.ngOnChanges = function (changes) {
        if (this.color && this.control && getValueByType(this.control.value, this.control.initType) !== this.color) {
            this.control.setValueFrom(this.color);
        }
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], CompactPickerComponent.prototype, "color", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", ColorPickerControl)
    ], CompactPickerComponent.prototype, "control", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], CompactPickerComponent.prototype, "colorChange", void 0);
    CompactPickerComponent = tslib_1.__decorate([
        Component({
            selector: "compact-picker",
            template: "<color-presets-component \n    *ngIf=\"control.presetsVisibilityChanges | async\" \n    direction=\"down\"\n    [columns]=\"9\" \n    [(color)]=\"control.value\" \n    [colorPresets]=\"control.presets\" \n    [(hue)]=\"control.hue\"></color-presets-component>\n\n<div class=\"controls\">\n    <div class=\"controls-row saturation-hue\">\n        <div class=\"column\">\n            <saturation-component [hue]=\"control.hue\" [(color)]=\"control.value\"></saturation-component>\n        </div>\n        <div class=\"column hue-column\">\n            <hue-component vertical [(hue)]=\"control.hue\" [(color)]=\"control.value\"></hue-component>\n        </div>\n    </div>\n    <div class=\"controls-row presentation\">\n        <div class=\"column\">\n            <svg class=\"pencil\" viewBox=\"0 0 1024 1024\">\n                <path d=\"M639.77,121.045l-48.598,84.2l112.215,64.8l48.6-84.205L639.77,121.045z M558.773,261.354\n                    L315.78,682.206l112.215,64.795L670.99,326.15L558.773,261.354z M690.816,75.691l74.922,43.286\n                    c41.682,24.045,55.52,76.564,31.725,117.784l-37.967,65.68l-32.398,56.11L451.706,835.594L282.452,947.303\n                    c-40.961,27.004-70.24,9.027-67.329-38.894l12.149-202.411l275.395-477.041l32.398-56.11l37.883-65.686\n                    C596.824,65.946,649.473,51.857,690.816,75.691z M274.689,883.015l120.908-79.818l-112.218-64.8L274.689,883.015z\"/>\n            </svg>\n            <hex-input-component prefix=\"#\" [(color)]=\"control.value\" [(hue)]=\"control.hue\"></hex-input-component>\n        </div>\n        <div class=\"column\">\n            <indicator-component colorType=\"hex\" [color]=\"control.value\"></indicator-component>\n        </div>\n    </div>\n</div>",
            changeDetection: ChangeDetectionStrategy.OnPush,
            styles: [":host,:host ::ng-deep *{padding:0;margin:0;-webkit-box-sizing:border-box;box-sizing:border-box}", ":host{display:block;width:240px;border-radius:3px;background:#fff;-webkit-box-shadow:rgba(0,0,0,.3) 0 0 2px,rgba(0,0,0,.3) 0 0 4px;box-shadow:rgba(0,0,0,.3) 0 0 2px,rgba(0,0,0,.3) 0 0 4px}color-presets-component{border-bottom:1px solid #e4e4e6;padding:9px 12px}color-presets-component ::ng-deep .row{padding:10px 0 0}.controls{padding:10px 12px 12px}.controls-row{display:table;width:100%}.column{display:table-cell;vertical-align:middle}.controls-row.saturation-hue{padding-bottom:9px}.controls-row.saturation-hue .column:first-child{width:178px}saturation-component{height:178px;-webkit-box-shadow:inset rgba(0,0,0,.6) 0 0 2px;box-shadow:inset rgba(0,0,0,.6) 0 0 2px}saturation-component ::ng-deep .pointer{border-width:2px;-webkit-box-shadow:rgba(0,0,0,.6) 0 0 2px;box-shadow:rgba(0,0,0,.6) 0 0 2px}.hue-column{padding-left:14px}:host hue-component{width:100%;height:178px;-webkit-box-shadow:inset rgba(0,0,0,.6) 0 0 2px;box-shadow:inset rgba(0,0,0,.6) 0 0 2px}:host hue-component[vertical] ::ng-deep .pointer{width:auto;height:9px;left:-3px;right:-3px;margin:-4.5px 0 0;background:0 0;border:3px solid #fff;border-radius:5px;-webkit-box-shadow:rgba(0,0,0,.6) 0 0 2px;box-shadow:rgba(0,0,0,.6) 0 0 2px}.controls-row.presentation{border:1px solid #e4e4e6;border-radius:3px;padding:6px 6px 6px 26px;position:relative}indicator-component{height:18px;width:18px;-webkit-box-shadow:inset rgba(0,0,0,.6) 0 0 2px;box-shadow:inset rgba(0,0,0,.6) 0 0 2px;border-radius:50%}:host indicator-component ::ng-deep svg{vertical-align:25%}hex-input-component ::ng-deep input{border:0;color:#817e81;margin:0;text-align:left;height:18px}.pencil{position:absolute;height:14px;width:14px;left:6px;top:50%;margin:-7px 0 0}.pencil svg{fill:#000}:host ::ng-deep .reflection{display:none}:host ::ng-deep color-preset{height:18px;width:18px;border-radius:50%;-webkit-box-shadow:inset rgba(0,0,0,.6) 0 1px 1px;box-shadow:inset rgba(0,0,0,.6) 0 1px 1px}:host ::ng-deep .row>color-preset,:host ::ng-deep .row>color-preset-sublist{margin:0 0 0 6px}:host ::ng-deep .row>color-preset-sublist:first-child,:host ::ng-deep .row>color-preset:first-child{margin:0}:host ::ng-deep .row>color-preset:hover,:host ::ng-deep .sublist color-preset:hover,:host ::ng-deep color-preset.selected{-webkit-box-shadow:inset rgba(0,0,0,.6) 0 1px 6px;box-shadow:inset rgba(0,0,0,.6) 0 1px 6px}"]
        }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef])
    ], CompactPickerComponent);
    return CompactPickerComponent;
}());
export { CompactPickerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFjdC1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlwbGFiL25neC1jb2xvci1waWNrZXIvIiwic291cmNlcyI6WyJjb21wb25lbnRzL2NvbXBhY3QtcGlja2VyL2NvbXBhY3QtcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBaUIsdUJBQXVCLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWhLLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQVdsRTtJQVdJLGdDQUE2QixHQUFzQjtRQUF0QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUY1QyxnQkFBVyxHQUE4QixJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUd4RSxDQUFDO0lBRU0seUNBQVEsR0FBZjtRQUFBLGlCQXdCQztRQXZCRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNmLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxrQkFBa0IsRUFBRSxDQUFDO1NBQzNDO1FBRUQsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1osSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3pDO1FBRUQ7OztXQUdHO1FBQ0gsSUFBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLEVBQUU7WUFDM0IsSUFBSSxDQUFDLE9BQU87aUJBQ1gsZUFBZSxDQUFDO2dCQUNiLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUzthQUNwRyxDQUFDLENBQUM7U0FDTjtRQUVELElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEtBQUs7WUFDdEMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUN4QixLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUN4RSxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSw0Q0FBVyxHQUFsQjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRU0sNENBQVcsR0FBbEIsVUFBbUIsT0FBc0I7UUFDckMsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssRUFBRTtZQUN4RyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDekM7SUFDTCxDQUFDO0lBOUNEO1FBREMsS0FBSyxFQUFFOzt5REFDYTtJQUdyQjtRQURDLEtBQUssRUFBRTswQ0FDUSxrQkFBa0I7MkRBQUM7SUFHbkM7UUFEQyxNQUFNLEVBQUU7MENBQ1csWUFBWTsrREFBd0M7SUFUL0Qsc0JBQXNCO1FBVGxDLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsNnREQUE4QztZQUs5QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7U0FDbEQsQ0FBQztpREFZb0MsaUJBQWlCO09BWDFDLHNCQUFzQixDQWtEbEM7SUFBRCw2QkFBQztDQUFBLEFBbERELElBa0RDO1NBbERZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFNpbXBsZUNoYW5nZXMsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbG9yLCBDb2xvclN0cmluZyB9IGZyb20gJy4vLi4vLi4vaGVscGVycy9jb2xvci5jbGFzcyc7XG5pbXBvcnQgeyBDb2xvclBpY2tlckNvbnRyb2wgfSBmcm9tICcuLy4uLy4uL2hlbHBlcnMvY29udHJvbC5jbGFzcyc7XG5pbXBvcnQgeyBnZXRWYWx1ZUJ5VHlwZSB9IGZyb20gJy4vLi4vLi4vaGVscGVycy9oZWxwZXIuZnVuY3Rpb25zJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IGBjb21wYWN0LXBpY2tlcmAsXG4gICAgdGVtcGxhdGVVcmw6IGAuL2NvbXBhY3QtcGlja2VyLmNvbXBvbmVudC5odG1sYCxcbiAgICBzdHlsZVVybHM6IFtcbiAgICAgICAgYC4vLi4vcGFydHMvYmFzZS5zdHlsZS5zY3NzYCxcbiAgICAgICAgYC4vY29tcGFjdC1waWNrZXIuY29tcG9uZW50LnNjc3NgXG4gICAgXSxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBDb21wYWN0UGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBjb2xvcjogc3RyaW5nO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgY29udHJvbDogQ29sb3JQaWNrZXJDb250cm9sO1xuXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIGNvbG9yQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Q29sb3JTdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcihmYWxzZSk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5jb250cm9sKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRyb2wgPSBuZXcgQ29sb3JQaWNrZXJDb250cm9sKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jb2xvcikge1xuICAgICAgICAgICAgdGhpcy5jb250cm9sLnNldFZhbHVlRnJvbSh0aGlzLmNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBzZXQgY29sb3IgcHJlc2V0c1xuICAgICAgICAgKiBkZWZpbmVkIGJ5IGNvbXBhY3QgY29sb3IgcGlja2VyIGNvbXBvbmVudFxuICAgICAgICAgKi9cbiAgICAgICAgaWYoIXRoaXMuY29udHJvbC5oYXNQcmVzZXRzKCkpIHtcbiAgICAgICAgICAgIHRoaXMuY29udHJvbFxuICAgICAgICAgICAgLnNldENvbG9yUHJlc2V0cyhbXG4gICAgICAgICAgICAgICAgJyM2ZGE2ZTgnLCAnIzc0YzI4MycsICcjZjlkOTQ4JywgJyNmNTk0M2YnLCAnI2Y2NmM2YycsICcjZWY4YWI4JywgJyM2OTZjZDQnLCAnIzZjNmM2YycsICcjZjZmNWY1J1xuICAgICAgICAgICAgXSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbnRyb2wudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICAgICAgdGhpcy5jb2xvckNoYW5nZS5lbWl0KGdldFZhbHVlQnlUeXBlKHZhbHVlLCB0aGlzLmNvbnRyb2wuaW5pdFR5cGUpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNvbnRyb2wudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy5jZHIuZGV0YWNoKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuY29sb3IgJiYgdGhpcy5jb250cm9sICYmIGdldFZhbHVlQnlUeXBlKHRoaXMuY29udHJvbC52YWx1ZSwgdGhpcy5jb250cm9sLmluaXRUeXBlKSAhPT0gdGhpcy5jb2xvcikge1xuICAgICAgICAgICAgdGhpcy5jb250cm9sLnNldFZhbHVlRnJvbSh0aGlzLmNvbG9yKTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=