import * as tslib_1 from "tslib";
import { Component, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { Color } from './../../../../helpers/color.class';
let RgbaComponent = class RgbaComponent {
    constructor() {
        this.hueChange = new EventEmitter(false);
        this.colorChange = new EventEmitter(false);
        this.isAlphaVisible = true;
    }
    set label(value) {
        this.labelVisible = true;
    }
    set alpha(isVisible) {
        this.isAlphaVisible = isVisible;
    }
    get value() {
        return this.color ? this.color.getRgba() : null;
    }
    onInputChange(newValue, color) {
        const value = this.value;
        const red = color === 'R' ? newValue : value.red;
        const green = color === 'G' ? newValue : value.green;
        const blue = color === 'B' ? newValue : value.blue;
        const alpha = color === 'A' ? newValue : value.alpha;
        const newColor = new Color().setRgba(red, green, blue, alpha);
        const hue = new Color().setHsva(newColor.getHsva().hue);
        this.hueChange.emit(hue);
        this.colorChange.emit(newColor);
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Color)
], RgbaComponent.prototype, "hue", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], RgbaComponent.prototype, "hueChange", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Color)
], RgbaComponent.prototype, "color", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], RgbaComponent.prototype, "colorChange", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], RgbaComponent.prototype, "label", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], RgbaComponent.prototype, "alpha", null);
RgbaComponent = tslib_1.__decorate([
    Component({
        selector: `rgba-input-component`,
        template: "<div class=\"column\">\n    <input type=\"text\" pattern=\"[0-9]*\" min=\"0\" max=\"255\" [value]=\"value?.getRed()\" (inputChange)=\"onInputChange($event, 'R')\" />\n    <span *ngIf=\"labelVisible\">R</span>\n</div>\n<div class=\"column\">\n    <input type=\"text\" pattern=\"[0-9]*\" min=\"0\" max=\"255\" [value]=\"value?.getGreen()\" (inputChange)=\"onInputChange($event, 'G')\" />\n    <span *ngIf=\"labelVisible\">G</span>\n</div>\n<div class=\"column\">\n    <input type=\"text\" pattern=\"[0-9]*\" min=\"0\" max=\"255\" [value]=\"value?.getBlue()\" (inputChange)=\"onInputChange($event, 'B')\" />\n    <span *ngIf=\"labelVisible\">B</span>\n</div>\n<div class=\"column\" *ngIf=\"isAlphaVisible\">\n    <input type=\"text\" pattern=\"[0-9]+([\\.,][0-9]{1,2})?\" min=\"0\" max=\"1\" [value]=\"value?.getAlpha()\" (inputChange)=\"onInputChange($event, 'A')\" />\n    <span *ngIf=\"labelVisible\">A</span>\n</div>",
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [":host,:host ::ng-deep *{padding:0;margin:0;-webkit-box-sizing:border-box;box-sizing:border-box}", ":host{display:table;width:100%;text-align:center;color:#b4b4b4;font-size:11px}.column{display:table-cell;padding:0 2px}input{width:100%;border:1px solid #dadada;color:#272727;text-align:center;font-size:12px;-webkit-appearance:none;border-radius:0;margin:0 0 6px;height:26px;outline:0}", ""]
    })
], RgbaComponent);
export { RgbaComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmdiYS1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaXBsYWIvbmd4LWNvbG9yLXBpY2tlci8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFydHMvaW5wdXRzL3JnYmEtaW5wdXQvcmdiYS1pbnB1dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEcsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBYTFELElBQWEsYUFBYSxHQUExQixNQUFhLGFBQWE7SUFWMUI7UUFnQlcsY0FBUyxHQUFHLElBQUksWUFBWSxDQUFRLEtBQUssQ0FBQyxDQUFDO1FBTTNDLGdCQUFXLEdBQUcsSUFBSSxZQUFZLENBQVEsS0FBSyxDQUFDLENBQUM7UUFTN0MsbUJBQWMsR0FBWSxJQUFJLENBQUM7SUF3QjFDLENBQUM7SUE1QkcsSUFBVyxLQUFLLENBQUMsS0FBSztRQUNsQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztJQUM3QixDQUFDO0lBS0QsSUFBVyxLQUFLLENBQUMsU0FBa0I7UUFDL0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUM7SUFDcEMsQ0FBQztJQUVELElBQVcsS0FBSztRQUNaLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3BELENBQUM7SUFFTSxhQUFhLENBQUMsUUFBZ0IsRUFBRSxLQUE0QjtRQUMvRCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3pCLE1BQU0sR0FBRyxHQUFHLEtBQUssS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUNqRCxNQUFNLEtBQUssR0FBRyxLQUFLLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDckQsTUFBTSxJQUFJLEdBQUcsS0FBSyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQ25ELE1BQU0sS0FBSyxHQUFHLEtBQUssS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUVyRCxNQUFNLFFBQVEsR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM5RCxNQUFNLEdBQUcsR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFeEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEMsQ0FBQztDQUNKLENBQUE7QUExQ0c7SUFEQyxLQUFLLEVBQUU7c0NBQ0ksS0FBSzswQ0FBQztBQUdsQjtJQURDLE1BQU0sRUFBRTs7Z0RBQ3lDO0FBR2xEO0lBREMsS0FBSyxFQUFFO3NDQUNNLEtBQUs7NENBQUM7QUFHcEI7SUFEQyxNQUFNLEVBQUU7O2tEQUMyQztBQUtwRDtJQURDLEtBQUssRUFBRTs7OzBDQUdQO0FBS0Q7SUFEQyxLQUFLLEVBQUU7OzswQ0FHUDtBQTFCUSxhQUFhO0lBVnpCLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxzQkFBc0I7UUFDaEMsaTZCQUEwQztRQU0xQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7S0FDbEQsQ0FBQztHQUNXLGFBQWEsQ0E2Q3pCO1NBN0NZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbG9yIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi9oZWxwZXJzL2NvbG9yLmNsYXNzJztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogYHJnYmEtaW5wdXQtY29tcG9uZW50YCxcbiAgICB0ZW1wbGF0ZVVybDogYC4vcmdiYS1pbnB1dC5jb21wb25lbnQuaHRtbGAsXG4gICAgc3R5bGVVcmxzOiBbXG4gICAgICAgIGAuLy4uLy4uL2Jhc2Uuc3R5bGUuc2Nzc2AsXG4gICAgICAgIGAuLy4uL2lucHV0LmNvbXBvbmVudC5zY3NzYCxcbiAgICAgICAgYC4vcmdiYS1pbnB1dC5jb21wb25lbnQuc2Nzc2BcbiAgICBdLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFJnYmFDb21wb25lbnQge1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaHVlOiBDb2xvcjtcblxuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBodWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPENvbG9yPihmYWxzZSk7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBjb2xvcjogQ29sb3I7XG5cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgY29sb3JDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPENvbG9yPihmYWxzZSk7XG5cbiAgICBwdWJsaWMgbGFiZWxWaXNpYmxlOiBib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IGxhYmVsKHZhbHVlKSB7XG4gICAgICAgIHRoaXMubGFiZWxWaXNpYmxlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaXNBbHBoYVZpc2libGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IGFscGhhKGlzVmlzaWJsZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLmlzQWxwaGFWaXNpYmxlID0gaXNWaXNpYmxlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgdmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbG9yID8gdGhpcy5jb2xvci5nZXRSZ2JhKCkgOiBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbklucHV0Q2hhbmdlKG5ld1ZhbHVlOiBudW1iZXIsIGNvbG9yOiAnUicgfCAnRycgfCAnQicgfCAnQScpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgICBjb25zdCByZWQgPSBjb2xvciA9PT0gJ1InID8gbmV3VmFsdWUgOiB2YWx1ZS5yZWQ7XG4gICAgICAgIGNvbnN0IGdyZWVuID0gY29sb3IgPT09ICdHJyA/IG5ld1ZhbHVlIDogdmFsdWUuZ3JlZW47XG4gICAgICAgIGNvbnN0IGJsdWUgPSBjb2xvciA9PT0gJ0InID8gbmV3VmFsdWUgOiB2YWx1ZS5ibHVlO1xuICAgICAgICBjb25zdCBhbHBoYSA9IGNvbG9yID09PSAnQScgPyBuZXdWYWx1ZSA6IHZhbHVlLmFscGhhO1xuXG4gICAgICAgIGNvbnN0IG5ld0NvbG9yID0gbmV3IENvbG9yKCkuc2V0UmdiYShyZWQsIGdyZWVuLCBibHVlLCBhbHBoYSk7XG4gICAgICAgIGNvbnN0IGh1ZSA9IG5ldyBDb2xvcigpLnNldEhzdmEobmV3Q29sb3IuZ2V0SHN2YSgpLmh1ZSk7XG5cbiAgICAgICAgdGhpcy5odWVDaGFuZ2UuZW1pdChodWUpO1xuICAgICAgICB0aGlzLmNvbG9yQ2hhbmdlLmVtaXQobmV3Q29sb3IpO1xuICAgIH1cbn1cbiJdfQ==