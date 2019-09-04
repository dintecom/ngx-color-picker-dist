import * as tslib_1 from "tslib";
import { Component, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { Color } from './../../../../helpers/color.class';
var HslaComponent = /** @class */ (function () {
    function HslaComponent() {
        this.hueChange = new EventEmitter(false);
        this.colorChange = new EventEmitter(false);
        this.isAlphaVisible = true;
    }
    Object.defineProperty(HslaComponent.prototype, "label", {
        set: function (value) {
            this.labelVisible = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HslaComponent.prototype, "alpha", {
        set: function (isVisible) {
            this.isAlphaVisible = isVisible;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HslaComponent.prototype, "value", {
        get: function () {
            return this.color ? this.color.getHsla() : null;
        },
        enumerable: true,
        configurable: true
    });
    HslaComponent.prototype.onInputChange = function (newValue, color) {
        var value = this.value;
        var hue = color === 'H' ? newValue : value.hue;
        var saturation = color === 'S' ? newValue : value.saturation;
        var lightness = color === 'L' ? newValue : value.lightness;
        var alpha = color === 'A' ? newValue : value.alpha;
        var newColor = new Color().setHsla(hue, saturation, lightness, alpha);
        var hueColor = new Color().setHsva(newColor.getHsva().hue);
        this.hueChange.emit(hueColor);
        this.colorChange.emit(newColor);
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Color)
    ], HslaComponent.prototype, "hue", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], HslaComponent.prototype, "hueChange", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Color)
    ], HslaComponent.prototype, "color", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], HslaComponent.prototype, "colorChange", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], HslaComponent.prototype, "label", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], HslaComponent.prototype, "alpha", null);
    HslaComponent = tslib_1.__decorate([
        Component({
            selector: "hsla-input-component",
            template: "<div class=\"column\">\n    <input type=\"text\" pattern=\"[0-9]*\" min=\"0\" max=\"360\" [value]=\"value?.getHue()\" (inputChange)=\"onInputChange($event, 'H')\" />\n    <span *ngIf=\"labelVisible\">H</span>\n</div>\n<div class=\"column\">\n    <input type=\"text\" pattern=\"[0-9]*\" min=\"0\" max=\"100\" [value]=\"value?.getSaturation() + '%'\" (inputChange)=\"onInputChange($event, 'S')\" />\n    <span *ngIf=\"labelVisible\">S</span>\n</div>\n<div class=\"column\">\n    <input type=\"text\" pattern=\"[0-9]*\" min=\"0\" max=\"100\" [value]=\"value?.getLightness() + '%'\" (inputChange)=\"onInputChange($event, 'L')\" />\n    <span *ngIf=\"labelVisible\">L</span>\n</div>\n<div class=\"column\" *ngIf=\"isAlphaVisible\">\n    <input type=\"text\" pattern=\"[0-9]+([\\.,][0-9]{1,2})?\" min=\"0\" max=\"1\" [value]=\"value?.getAlpha()\" (inputChange)=\"onInputChange($event, 'A')\" />\n    <span *ngIf=\"labelVisible\">A</span>\n</div>",
            changeDetection: ChangeDetectionStrategy.OnPush,
            styles: [":host,:host ::ng-deep *{padding:0;margin:0;-webkit-box-sizing:border-box;box-sizing:border-box}", ":host{display:table;width:100%;text-align:center;color:#b4b4b4;font-size:11px}.column{display:table-cell;padding:0 2px}input{width:100%;border:1px solid #dadada;color:#272727;text-align:center;font-size:12px;-webkit-appearance:none;border-radius:0;margin:0 0 6px;height:26px;outline:0}", ""]
        })
    ], HslaComponent);
    return HslaComponent;
}());
export { HslaComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHNsYS1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaXBsYWIvbmd4LWNvbG9yLXBpY2tlci8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFydHMvaW5wdXRzL2hzbGEtaW5wdXQvaHNsYS1pbnB1dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEcsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBYTFEO0lBVkE7UUFnQlcsY0FBUyxHQUFHLElBQUksWUFBWSxDQUFRLEtBQUssQ0FBQyxDQUFDO1FBTTNDLGdCQUFXLEdBQUcsSUFBSSxZQUFZLENBQVEsS0FBSyxDQUFDLENBQUM7UUFTN0MsbUJBQWMsR0FBWSxJQUFJLENBQUM7SUF5QjFDLENBQUM7SUE3Qkcsc0JBQVcsZ0NBQUs7YUFBaEIsVUFBaUIsS0FBSztZQUNsQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUM3QixDQUFDOzs7T0FBQTtJQUtELHNCQUFXLGdDQUFLO2FBQWhCLFVBQWlCLFNBQWtCO1lBQy9CLElBQUksQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDO1FBQ3BDLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsZ0NBQUs7YUFBaEI7WUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNwRCxDQUFDOzs7T0FBQTtJQUVNLHFDQUFhLEdBQXBCLFVBQXFCLFFBQWdCLEVBQUUsS0FBNEI7UUFDL0QsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN6QixJQUFNLEdBQUcsR0FBRyxLQUFLLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDakQsSUFBTSxVQUFVLEdBQUcsS0FBSyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO1FBQy9ELElBQU0sU0FBUyxHQUFHLEtBQUssS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUM3RCxJQUFNLEtBQUssR0FBRyxLQUFLLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFHckQsSUFBTSxRQUFRLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDeEUsSUFBTSxRQUFRLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTdELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUExQ0Q7UUFEQyxLQUFLLEVBQUU7MENBQ0ksS0FBSzs4Q0FBQztJQUdsQjtRQURDLE1BQU0sRUFBRTs7b0RBQ3lDO0lBR2xEO1FBREMsS0FBSyxFQUFFOzBDQUNNLEtBQUs7Z0RBQUM7SUFHcEI7UUFEQyxNQUFNLEVBQUU7O3NEQUMyQztJQUtwRDtRQURDLEtBQUssRUFBRTs7OzhDQUdQO0lBS0Q7UUFEQyxLQUFLLEVBQUU7Ozs4Q0FHUDtJQTFCUSxhQUFhO1FBVnpCLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsdTdCQUEwQztZQU0xQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7U0FDbEQsQ0FBQztPQUNXLGFBQWEsQ0E4Q3pCO0lBQUQsb0JBQUM7Q0FBQSxBQTlDRCxJQThDQztTQTlDWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb2xvciB9IGZyb20gJy4vLi4vLi4vLi4vLi4vaGVscGVycy9jb2xvci5jbGFzcyc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IGBoc2xhLWlucHV0LWNvbXBvbmVudGAsXG4gICAgdGVtcGxhdGVVcmw6IGAuL2hzbGEtaW5wdXQuY29tcG9uZW50Lmh0bWxgLFxuICAgIHN0eWxlVXJsczogW1xuICAgICAgICBgLi8uLi8uLi9iYXNlLnN0eWxlLnNjc3NgLFxuICAgICAgICBgLi8uLi9pbnB1dC5jb21wb25lbnQuc2Nzc2AsXG4gICAgICAgIGAuL2hzbGEtaW5wdXQuY29tcG9uZW50LnNjc3NgXG4gICAgXSxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBIc2xhQ29tcG9uZW50IHtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGh1ZTogQ29sb3I7XG5cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgaHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxDb2xvcj4oZmFsc2UpO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgY29sb3I6IENvbG9yO1xuXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIGNvbG9yQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxDb2xvcj4oZmFsc2UpO1xuXG4gICAgcHVibGljIGxhYmVsVmlzaWJsZTogYm9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBsYWJlbCh2YWx1ZSkge1xuICAgICAgICB0aGlzLmxhYmVsVmlzaWJsZSA9IHRydWU7XG4gICAgfVxuXG4gICAgcHVibGljIGlzQWxwaGFWaXNpYmxlOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBhbHBoYShpc1Zpc2libGU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5pc0FscGhhVmlzaWJsZSA9IGlzVmlzaWJsZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xvciA/IHRoaXMuY29sb3IuZ2V0SHNsYSgpIDogbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25JbnB1dENoYW5nZShuZXdWYWx1ZTogbnVtYmVyLCBjb2xvcjogJ0gnIHwgJ1MnIHwgJ0wnIHwgJ0EnKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgY29uc3QgaHVlID0gY29sb3IgPT09ICdIJyA/IG5ld1ZhbHVlIDogdmFsdWUuaHVlO1xuICAgICAgICBjb25zdCBzYXR1cmF0aW9uID0gY29sb3IgPT09ICdTJyA/IG5ld1ZhbHVlIDogdmFsdWUuc2F0dXJhdGlvbjtcbiAgICAgICAgY29uc3QgbGlnaHRuZXNzID0gY29sb3IgPT09ICdMJyA/IG5ld1ZhbHVlIDogdmFsdWUubGlnaHRuZXNzO1xuICAgICAgICBjb25zdCBhbHBoYSA9IGNvbG9yID09PSAnQScgPyBuZXdWYWx1ZSA6IHZhbHVlLmFscGhhO1xuXG5cbiAgICAgICAgY29uc3QgbmV3Q29sb3IgPSBuZXcgQ29sb3IoKS5zZXRIc2xhKGh1ZSwgc2F0dXJhdGlvbiwgbGlnaHRuZXNzLCBhbHBoYSk7XG4gICAgICAgIGNvbnN0IGh1ZUNvbG9yID0gbmV3IENvbG9yKCkuc2V0SHN2YShuZXdDb2xvci5nZXRIc3ZhKCkuaHVlKTtcblxuICAgICAgICB0aGlzLmh1ZUNoYW5nZS5lbWl0KGh1ZUNvbG9yKTtcbiAgICAgICAgdGhpcy5jb2xvckNoYW5nZS5lbWl0KG5ld0NvbG9yKTtcbiAgICB9XG59XG4iXX0=