import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ColorPickerControl } from './../../helpers/control.class';
import { getValueByType } from './../../helpers/helper.functions';
var SketchPickerComponent = /** @class */ (function () {
    function SketchPickerComponent(cdr) {
        this.cdr = cdr;
        this.colorChange = new EventEmitter(false);
    }
    SketchPickerComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.control) {
            this.control = new ColorPickerControl();
        }
        if (this.color) {
            this.control.setValueFrom(this.color);
        }
        if (!this.control.hasPresets()) {
            /**
             * set color presets
             * defined by sketch color picker component
             */
            this.control
                .setColorPresets([
                '#d0041b', '#8b572a', '#f5a623', '#f8e71c', '#7ed321', '#417506', '#bd10e0', '#9013fe',
                '#4a90e2', '#50e3c2', '#b8e986', '#030303', '#4a4a4a', '#9b9b9b', '#fff'
            ]);
        }
        this.control.valueChanges.subscribe(function (value) {
            _this.cdr.markForCheck();
            _this.colorChange.emit(getValueByType(value, _this.control.initType));
        });
    };
    SketchPickerComponent.prototype.ngOnDestroy = function () {
        this.control.unsubscribe();
        this.cdr.detach();
    };
    SketchPickerComponent.prototype.ngOnChanges = function (changes) {
        if (this.color && this.control && getValueByType(this.control.value, this.control.initType) !== this.color) {
            this.control.setValueFrom(this.color);
        }
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], SketchPickerComponent.prototype, "color", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", ColorPickerControl)
    ], SketchPickerComponent.prototype, "control", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], SketchPickerComponent.prototype, "colorChange", void 0);
    SketchPickerComponent = tslib_1.__decorate([
        Component({
            selector: "sketch-picker",
            template: "<saturation-component [hue]=\"control.hue\" [(color)]=\"control.value\"></saturation-component>\n\n<div class=\"controls\">\n    <div class=\"controls-row hue-alpha\">\n        <div class=\"column\">\n            <hue-component [(hue)]=\"control.hue\" [(color)]=\"control.value\"></hue-component>\n            <alpha-component *ngIf=\"control.alphaChannelVisibilityChanges | async\" [(color)]=\"control.value\"></alpha-component>\n        </div>\n        <div class=\"column indicator-column\">\n            <indicator-component colorType=\"rgba\" [color]=\"control.value\"></indicator-component>\n        </div>\n    </div>\n    <div class=\"controls-row presentation\">\n        <div class=\"column\">\n            <hex-input-component label [(color)]=\"control.value\" [(hue)]=\"control.hue\"></hex-input-component>\n        </div>\n        <div class=\"column\">\n            <rgba-input-component [alpha]=\"control.alphaChannelVisibilityChanges | async\" label [(color)]=\"control.value\" [(hue)]=\"control.hue\"></rgba-input-component>\n        </div>\n    </div>\n</div>\n\n<color-presets-component *ngIf=\"control.presetsVisibilityChanges | async\" [(color)]=\"control.value\" [colorPresets]=\"control.presets\" [(hue)]=\"control.hue\"></color-presets-component>",
            changeDetection: ChangeDetectionStrategy.OnPush,
            styles: [":host,:host ::ng-deep *{padding:0;margin:0;-webkit-box-sizing:border-box;box-sizing:border-box}", ":host{display:block;padding:9px;width:220px;border-radius:4px;background:#fff;-webkit-box-shadow:rgba(0,0,0,.3) 0 0 2px,rgba(0,0,0,.3) 0 1px 4px;box-shadow:rgba(0,0,0,.3) 0 0 2px,rgba(0,0,0,.3) 0 1px 4px}saturation-component{height:146px;border-radius:2px;-webkit-box-shadow:inset rgba(0,0,0,.6) 0 0 2px;box-shadow:inset rgba(0,0,0,.6) 0 0 2px}saturation-component ::ng-deep .pointer{border-width:2px;-webkit-box-shadow:rgba(0,0,0,.6) 0 0 2px;box-shadow:rgba(0,0,0,.6) 0 0 2px;width:10px;height:10px}.controls{padding:4px 0 0}alpha-component,hue-component{height:10px;border-radius:2px;-webkit-box-shadow:inset rgba(0,0,0,.6) 0 0 2px;box-shadow:inset rgba(0,0,0,.6) 0 0 2px}hue-component{margin-bottom:4px}.controls-row{display:table;width:100%}.column{display:table-cell;vertical-align:middle}.indicator-column{width:25px}indicator-component{height:24px;width:100%;-webkit-box-shadow:inset rgba(0,0,0,.6) 0 0 2px;box-shadow:inset rgba(0,0,0,.6) 0 0 2px;border-radius:2px}color-presets-component{border-top:1px solid #e0e0e0;padding:10px 9px 0;margin:8px -9px 0}color-presets-component ::ng-deep .row{padding:10px 0 0}:host indicator-component ::ng-deep svg{vertical-align:5%}.controls-row.hue-alpha{padding-bottom:9px}.controls-row.hue-alpha .column:first-child{padding-right:5px}.hue-alpha ::ng-deep .pointer{width:6px;margin:0 0 0 -3px;height:100%;top:0;border-radius:2px;border:1px solid #898989}.presentation .column:first-child{width:56px}.presentation ::ng-deep input{height:20px;font-size:11px}:host ::ng-deep .reflection,:host ::ng-deep color-preset{height:16px;width:16px;border-radius:2px}:host ::ng-deep color-preset{-webkit-box-shadow:inset rgba(0,0,0,.4) 0 0 2px;box-shadow:inset rgba(0,0,0,.4) 0 0 2px}:host ::ng-deep color-preset.selected{-webkit-box-shadow:inset rgba(0,0,0,.4) 0 1px 4px;box-shadow:inset rgba(0,0,0,.4) 0 1px 4px}:host ::ng-deep .row>color-preset,:host ::ng-deep .row>color-preset-sublist{margin:0 0 0 10px}:host ::ng-deep .row>color-preset-sublist:first-child,:host ::ng-deep .row>color-preset:first-child{margin:0}"]
        }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef])
    ], SketchPickerComponent);
    return SketchPickerComponent;
}());
export { SketchPickerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tldGNoLXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaXBsYWIvbmd4LWNvbG9yLXBpY2tlci8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2tldGNoLXBpY2tlci9za2V0Y2gtcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNILFNBQVMsRUFFVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFFWix1QkFBdUIsRUFHdkIsaUJBQWlCLEVBQ3BCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQVdsRTtJQVdJLCtCQUE2QixHQUFzQjtRQUF0QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUY1QyxnQkFBVyxHQUE4QixJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUd4RSxDQUFDO0lBRU0sd0NBQVEsR0FBZjtRQUFBLGlCQXlCQztRQXhCRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNmLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxrQkFBa0IsRUFBRSxDQUFDO1NBQzNDO1FBRUQsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1osSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3pDO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLEVBQUU7WUFDNUI7OztlQUdHO1lBQ0gsSUFBSSxDQUFDLE9BQU87aUJBQ1gsZUFBZSxDQUFDO2dCQUNiLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTO2dCQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNO2FBQzNFLENBQUMsQ0FBQztTQUNOO1FBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFVBQUMsS0FBSztZQUN0QyxLQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3hFLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLDJDQUFXLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFTSwyQ0FBVyxHQUFsQixVQUFtQixPQUFzQjtRQUNyQyxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ3hHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN6QztJQUNMLENBQUM7SUEvQ0Q7UUFEQyxLQUFLLEVBQUU7O3dEQUNhO0lBR3JCO1FBREMsS0FBSyxFQUFFOzBDQUNRLGtCQUFrQjswREFBQztJQUduQztRQURDLE1BQU0sRUFBRTswQ0FDVyxZQUFZOzhEQUF3QztJQVQvRCxxQkFBcUI7UUFUakMsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGVBQWU7WUFDekIsa3dDQUE2QztZQUs3QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7U0FDbEQsQ0FBQztpREFZb0MsaUJBQWlCO09BWDFDLHFCQUFxQixDQW1EakM7SUFBRCw0QkFBQztDQUFBLEFBbkRELElBbURDO1NBbkRZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ29tcG9uZW50LFxuICAgIE9uSW5pdCxcbiAgICBJbnB1dCxcbiAgICBPdXRwdXQsXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIFNpbXBsZUNoYW5nZXMsXG4gICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gICAgT25DaGFuZ2VzLFxuICAgIE9uRGVzdHJveSxcbiAgICBDaGFuZ2VEZXRlY3RvclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbG9yU3RyaW5nIH0gZnJvbSAnLi8uLi8uLi9oZWxwZXJzL2NvbG9yLmNsYXNzJztcbmltcG9ydCB7IENvbG9yUGlja2VyQ29udHJvbCB9IGZyb20gJy4vLi4vLi4vaGVscGVycy9jb250cm9sLmNsYXNzJztcbmltcG9ydCB7IGdldFZhbHVlQnlUeXBlIH0gZnJvbSAnLi8uLi8uLi9oZWxwZXJzL2hlbHBlci5mdW5jdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogYHNrZXRjaC1waWNrZXJgLFxuICAgIHRlbXBsYXRlVXJsOiBgLi9za2V0Y2gtcGlja2VyLmNvbXBvbmVudC5odG1sYCxcbiAgICBzdHlsZVVybHM6IFtcbiAgICAgICAgYC4vLi4vcGFydHMvYmFzZS5zdHlsZS5zY3NzYCxcbiAgICAgICAgYC4vc2tldGNoLXBpY2tlci5jb21wb25lbnQuc2Nzc2BcbiAgICBdLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFNrZXRjaFBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgY29sb3I6IHN0cmluZztcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGNvbnRyb2w6IENvbG9yUGlja2VyQ29udHJvbDtcblxuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBjb2xvckNoYW5nZTogRXZlbnRFbWl0dGVyPENvbG9yU3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoZmFsc2UpO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuY29udHJvbCkge1xuICAgICAgICAgICAgdGhpcy5jb250cm9sID0gbmV3IENvbG9yUGlja2VyQ29udHJvbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY29sb3IpIHtcbiAgICAgICAgICAgIHRoaXMuY29udHJvbC5zZXRWYWx1ZUZyb20odGhpcy5jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuY29udHJvbC5oYXNQcmVzZXRzKCkpIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogc2V0IGNvbG9yIHByZXNldHNcbiAgICAgICAgICAgICAqIGRlZmluZWQgYnkgc2tldGNoIGNvbG9yIHBpY2tlciBjb21wb25lbnRcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5jb250cm9sXG4gICAgICAgICAgICAuc2V0Q29sb3JQcmVzZXRzKFtcbiAgICAgICAgICAgICAgICAnI2QwMDQxYicsICcjOGI1NzJhJywgJyNmNWE2MjMnLCAnI2Y4ZTcxYycsICcjN2VkMzIxJywgJyM0MTc1MDYnLCAnI2JkMTBlMCcsICcjOTAxM2ZlJyxcbiAgICAgICAgICAgICAgICAnIzRhOTBlMicsICcjNTBlM2MyJywgJyNiOGU5ODYnLCAnIzAzMDMwMycsICcjNGE0YTRhJywgJyM5YjliOWInLCAnI2ZmZidcbiAgICAgICAgICAgIF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb250cm9sLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICAgIHRoaXMuY29sb3JDaGFuZ2UuZW1pdChnZXRWYWx1ZUJ5VHlwZSh2YWx1ZSwgdGhpcy5jb250cm9sLmluaXRUeXBlKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jb250cm9sLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMuY2RyLmRldGFjaCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmNvbG9yICYmIHRoaXMuY29udHJvbCAmJiBnZXRWYWx1ZUJ5VHlwZSh0aGlzLmNvbnRyb2wudmFsdWUsIHRoaXMuY29udHJvbC5pbml0VHlwZSkgIT09IHRoaXMuY29sb3IpIHtcbiAgICAgICAgICAgIHRoaXMuY29udHJvbC5zZXRWYWx1ZUZyb20odGhpcy5jb2xvcik7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=