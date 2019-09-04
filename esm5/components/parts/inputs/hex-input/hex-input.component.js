import * as tslib_1 from "tslib";
import { Component, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { Color } from '../../../../helpers/color.class';
var HexComponent = /** @class */ (function () {
    function HexComponent() {
        this.hueChange = new EventEmitter(false);
        this.colorChange = new EventEmitter(false);
        this.prefixValue = '';
    }
    Object.defineProperty(HexComponent.prototype, "label", {
        set: function (value) {
            this.labelVisible = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HexComponent.prototype, "prefix", {
        set: function (value) {
            this.prefixValue = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HexComponent.prototype, "value", {
        get: function () {
            return this.prefixValue + (this.color ? this.color.toHexString().replace('#', '') : '');
        },
        enumerable: true,
        configurable: true
    });
    HexComponent.prototype.onInputChange = function (inputValue) {
        var value = inputValue.toLowerCase().replace('#', '');
        if (value.length === 3 || value.length === 6 || value.length === 8) {
            var hex = parseInt(value, 16);
            /**
             * if value is valid
             * change color else do nothing
             */
            if (hex.toString(16) === value && this.value !== value) {
                var newColor = new Color("#" + value);
                var hue = new Color().setHsva(newColor.getHsva().hue);
                this.hueChange.emit(hue);
                this.colorChange.emit(newColor);
            }
        }
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Color)
    ], HexComponent.prototype, "hue", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], HexComponent.prototype, "hueChange", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Color)
    ], HexComponent.prototype, "color", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], HexComponent.prototype, "colorChange", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], HexComponent.prototype, "label", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], HexComponent.prototype, "prefix", null);
    HexComponent = tslib_1.__decorate([
        Component({
            selector: "hex-input-component",
            template: "<div class=\"column\">\n    <input #elRef type=\"text\" [value]=\"value\" (keyup)=\"onInputChange(elRef.value)\" />\n    <span *ngIf=\"labelVisible\">HEX</span>\n</div>",
            changeDetection: ChangeDetectionStrategy.OnPush,
            styles: [":host,:host ::ng-deep *{padding:0;margin:0;-webkit-box-sizing:border-box;box-sizing:border-box}", ":host{display:table;width:100%;text-align:center;color:#b4b4b4;font-size:11px}.column{display:table-cell;padding:0 2px}input{width:100%;border:1px solid #dadada;color:#272727;text-align:center;font-size:12px;-webkit-appearance:none;border-radius:0;margin:0 0 6px;height:26px;outline:0}", ""]
        })
    ], HexComponent);
    return HexComponent;
}());
export { HexComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGV4LWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BpcGxhYi9uZ3gtY29sb3ItcGlja2VyLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9wYXJ0cy9pbnB1dHMvaGV4LWlucHV0L2hleC1pbnB1dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEcsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBYXhEO0lBVkE7UUFnQlcsY0FBUyxHQUFHLElBQUksWUFBWSxDQUFRLEtBQUssQ0FBQyxDQUFDO1FBTTNDLGdCQUFXLEdBQUcsSUFBSSxZQUFZLENBQVEsS0FBSyxDQUFDLENBQUM7UUFHNUMsZ0JBQVcsR0FBVyxFQUFFLENBQUM7SUFpQ3JDLENBQUM7SUE5Qkcsc0JBQVcsK0JBQUs7YUFBaEIsVUFBaUIsS0FBSztZQUNsQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUM3QixDQUFDOzs7T0FBQTtJQUdELHNCQUFXLGdDQUFNO2FBQWpCLFVBQWtCLEtBQUs7WUFDbkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVywrQkFBSzthQUFoQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDNUYsQ0FBQzs7O09BQUE7SUFFTSxvQ0FBYSxHQUFwQixVQUFxQixVQUFrQjtRQUNuQyxJQUFNLEtBQUssR0FBRyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN4RCxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ2hFLElBQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFFaEM7OztlQUdHO1lBQ0gsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLEtBQUssRUFBRTtnQkFDcEQsSUFBTSxRQUFRLEdBQUcsSUFBSSxLQUFLLENBQUMsTUFBSSxLQUFPLENBQUMsQ0FBQztnQkFDeEMsSUFBTSxHQUFHLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN4RCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDekIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDbkM7U0FDSjtJQUNMLENBQUM7SUE1Q0Q7UUFEQyxLQUFLLEVBQUU7MENBQ0ksS0FBSzs2Q0FBQztJQUdsQjtRQURDLE1BQU0sRUFBRTs7bURBQ3lDO0lBR2xEO1FBREMsS0FBSyxFQUFFOzBDQUNNLEtBQUs7K0NBQUM7SUFHcEI7UUFEQyxNQUFNLEVBQUU7O3FEQUMyQztJQU1wRDtRQURDLEtBQUssRUFBRTs7OzZDQUdQO0lBR0Q7UUFEQyxLQUFLLEVBQUU7Ozs4Q0FHUDtJQXpCUSxZQUFZO1FBVnhCLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxxQkFBcUI7WUFDL0Isb0xBQXlDO1lBTXpDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztTQUNsRCxDQUFDO09BQ1csWUFBWSxDQWdEeEI7SUFBRCxtQkFBQztDQUFBLEFBaERELElBZ0RDO1NBaERZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbG9yIH0gZnJvbSAnLi4vLi4vLi4vLi4vaGVscGVycy9jb2xvci5jbGFzcyc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IGBoZXgtaW5wdXQtY29tcG9uZW50YCxcbiAgICB0ZW1wbGF0ZVVybDogYC4vaGV4LWlucHV0LmNvbXBvbmVudC5odG1sYCxcbiAgICBzdHlsZVVybHM6IFtcbiAgICAgICAgYC4vLi4vLi4vYmFzZS5zdHlsZS5zY3NzYCxcbiAgICAgICAgYC4vLi4vaW5wdXQuY29tcG9uZW50LnNjc3NgLFxuICAgICAgICBgLi9oZXgtaW5wdXQuY29tcG9uZW50LnNjc3NgXG4gICAgXSxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBIZXhDb21wb25lbnQge1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaHVlOiBDb2xvcjtcblxuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBodWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPENvbG9yPihmYWxzZSk7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBjb2xvcjogQ29sb3I7XG5cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgY29sb3JDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPENvbG9yPihmYWxzZSk7XG5cbiAgICBwdWJsaWMgbGFiZWxWaXNpYmxlOiBib29sZWFuO1xuICAgIHByaXZhdGUgcHJlZml4VmFsdWU6IHN0cmluZyA9ICcnO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IGxhYmVsKHZhbHVlKSB7XG4gICAgICAgIHRoaXMubGFiZWxWaXNpYmxlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgcHJlZml4KHZhbHVlKXtcbiAgICAgICAgdGhpcy5wcmVmaXhWYWx1ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgdmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByZWZpeFZhbHVlICsgKHRoaXMuY29sb3IgPyB0aGlzLmNvbG9yLnRvSGV4U3RyaW5nKCkucmVwbGFjZSgnIycsICcnKSA6ICcnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25JbnB1dENoYW5nZShpbnB1dFZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBpbnB1dFZhbHVlLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgnIycsICcnKTtcbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMyB8fCB2YWx1ZS5sZW5ndGggPT09IDYgfHwgdmFsdWUubGVuZ3RoID09PSA4KSB7XG4gICAgICAgICAgICBjb25zdCBoZXggPSBwYXJzZUludCh2YWx1ZSwgMTYpO1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIGlmIHZhbHVlIGlzIHZhbGlkXG4gICAgICAgICAgICAgKiBjaGFuZ2UgY29sb3IgZWxzZSBkbyBub3RoaW5nXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGlmIChoZXgudG9TdHJpbmcoMTYpID09PSB2YWx1ZSAmJiB0aGlzLnZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0NvbG9yID0gbmV3IENvbG9yKGAjJHt2YWx1ZX1gKTtcbiAgICAgICAgICAgICAgICBjb25zdCBodWUgPSBuZXcgQ29sb3IoKS5zZXRIc3ZhKG5ld0NvbG9yLmdldEhzdmEoKS5odWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuaHVlQ2hhbmdlLmVtaXQoaHVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbG9yQ2hhbmdlLmVtaXQobmV3Q29sb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19