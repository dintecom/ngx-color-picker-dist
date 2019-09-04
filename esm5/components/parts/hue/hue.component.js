import * as tslib_1 from "tslib";
import { Component, ChangeDetectionStrategy, Input, Renderer2, Inject, ElementRef, Output, EventEmitter, ViewChild, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Color } from './../../../helpers/color.class';
import { BaseComponent } from './../base.component';
var HueComponent = /** @class */ (function (_super) {
    tslib_1.__extends(HueComponent, _super);
    function HueComponent(renderer, document, elementRef) {
        var _this = _super.call(this, document, elementRef, renderer) || this;
        _this.hueChange = new EventEmitter(false);
        _this.colorChange = new EventEmitter(false);
        _this.isVertical = false;
        return _this;
    }
    HueComponent.prototype.onClick = function (event) {
        this.onEventChange(event);
    };
    Object.defineProperty(HueComponent.prototype, "vertical", {
        set: function (value) {
            this.isVertical = true;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * color can be changed through inputs
     * and then we need to move pointer
     */
    HueComponent.prototype.ngOnChanges = function (changes) {
        if (changes.hue && changes.hue.previousValue !== changes.hue.currentValue) {
            var hsva = this.hue.getHsva();
            this.changePointerPosition(hsva.hue);
        }
    };
    HueComponent.prototype.movePointer = function (_a) {
        var x = _a.x, y = _a.y, height = _a.height, width = _a.width;
        var hue = this.isVertical ? (y / height) * 360 : (x / width) * 360;
        this.changePointerPosition(hue);
        var color = this.color.getHsva();
        var newColor = new Color().setHsva(hue, color.saturation, color.value, color.alpha);
        var newHueColor = new Color().setHsva(hue, 100, 100, color.alpha);
        this.hueChange.emit(newHueColor);
        this.colorChange.emit(newColor);
    };
    /**
     * hue value is in range from 0 to 360°
     */
    HueComponent.prototype.changePointerPosition = function (hue) {
        var x = hue / 360 * 100;
        var orientation = this.isVertical ? 'top' : 'left';
        this.renderer.setStyle(this.pointer.nativeElement, orientation, x + "%");
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Color)
    ], HueComponent.prototype, "hue", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], HueComponent.prototype, "hueChange", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Color)
    ], HueComponent.prototype, "color", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], HueComponent.prototype, "colorChange", void 0);
    tslib_1.__decorate([
        ViewChild('pointer', { static: true }),
        tslib_1.__metadata("design:type", ElementRef)
    ], HueComponent.prototype, "pointer", void 0);
    tslib_1.__decorate([
        HostListener('mousedown', ['$event']),
        HostListener('touchstart', ['$event']),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", void 0)
    ], HueComponent.prototype, "onClick", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], HueComponent.prototype, "vertical", null);
    HueComponent = tslib_1.__decorate([
        Component({
            selector: "hue-component",
            template: "<div #pointer class=\"pointer\"></div>",
            changeDetection: ChangeDetectionStrategy.OnPush,
            styles: [":host,:host ::ng-deep *{padding:0;margin:0;-webkit-box-sizing:border-box;box-sizing:border-box}", ":host{display:block;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwkUFWbCCAAAAFxJREFUaN7t0kEKg0AQAME2x83/n2qu5qCgD1iDhCoYdpnbQC9bbY1qVO/jvc6k3ad91s7/7F1/csgPrujuQ17BDYSFsBAWwgJhISyEBcJCWAgLhIWwEBYIi2f7Ar/1TCgFH2X9AAAAAElFTkSuQmCC);-webkit-background-size:100% 100%;background-size:100% 100%;height:12px;border-radius:2px;position:relative}:host([vertical]){background-image:url(data:image/png;base64,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);width:12px;height:100px}.pointer{background:#fff;height:14px;width:14px;top:-1px;left:0;position:absolute;border-radius:50%;cursor:pointer;margin:0 0 0 -7px}:host([vertical]) .pointer{left:-1px;margin:-7px 0 0}"]
        }),
        tslib_1.__param(1, Inject(DOCUMENT)),
        tslib_1.__metadata("design:paramtypes", [Renderer2, Object, ElementRef])
    ], HueComponent);
    return HueComponent;
}(BaseComponent));
export { HueComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BpcGxhYi9uZ3gtY29sb3ItcGlja2VyLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9wYXJ0cy9odWUvaHVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNILFNBQVMsRUFDVCx1QkFBdUIsRUFDdkIsS0FBSyxFQUNMLFNBQVMsRUFDVCxNQUFNLEVBQ04sVUFBVSxFQUNWLE1BQU0sRUFDTixZQUFZLEVBQ1osU0FBUyxFQUNULFlBQVksRUFHZixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQVdwRDtJQUFrQyx3Q0FBYTtJQW1CM0Msc0JBQVksUUFBbUIsRUFBb0IsUUFBUSxFQUFFLFVBQXNCO1FBQW5GLFlBQ0ksa0JBQU0sUUFBUSxFQUFFLFVBQVUsRUFBRSxRQUFRLENBQUMsU0FDeEM7UUFmTSxlQUFTLEdBQUcsSUFBSSxZQUFZLENBQVEsS0FBSyxDQUFDLENBQUM7UUFNM0MsaUJBQVcsR0FBRyxJQUFJLFlBQVksQ0FBUSxLQUFLLENBQUMsQ0FBQztRQUs1QyxnQkFBVSxHQUFZLEtBQUssQ0FBQzs7SUFJcEMsQ0FBQztJQUlNLDhCQUFPLEdBQWQsVUFBZSxLQUFVO1FBQ3JCLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUdELHNCQUFXLGtDQUFRO2FBQW5CLFVBQW9CLEtBQWE7WUFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7SUFFRDs7O09BR0c7SUFDSSxrQ0FBVyxHQUFsQixVQUFtQixPQUFzQjtRQUNyQyxJQUFJLE9BQU8sQ0FBQyxHQUFHLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEtBQUssT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUU7WUFDdkUsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNoQyxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3hDO0lBQ0wsQ0FBQztJQUVNLGtDQUFXLEdBQWxCLFVBQW1CLEVBQXFCO1lBQXBCLFFBQUMsRUFBRSxRQUFDLEVBQUUsa0JBQU0sRUFBRSxnQkFBSztRQUNuQyxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUNyRSxJQUFJLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFaEMsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNuQyxJQUFNLFFBQVEsR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0RixJQUFNLFdBQVcsR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFcEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVEOztPQUVHO0lBQ0ssNENBQXFCLEdBQTdCLFVBQThCLEdBQVc7UUFDckMsSUFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDMUIsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDckQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFLLENBQUMsTUFBRyxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQTdERDtRQURDLEtBQUssRUFBRTswQ0FDSSxLQUFLOzZDQUFDO0lBR2xCO1FBREMsTUFBTSxFQUFFOzttREFDeUM7SUFHbEQ7UUFEQyxLQUFLLEVBQUU7MENBQ00sS0FBSzsrQ0FBQztJQUdwQjtRQURDLE1BQU0sRUFBRTs7cURBQzJDO0lBR3BEO1FBREMsU0FBUyxDQUFDLFNBQVMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQzswQ0FDdkIsVUFBVTtpREFBQztJQVUzQjtRQUZDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7Ozs7K0NBR3RDO0lBR0Q7UUFEQyxLQUFLLEVBQUU7OztnREFHUDtJQWhDUSxZQUFZO1FBVHhCLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLGtEQUFtQztZQUtuQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7U0FDbEQsQ0FBQztRQW9Cb0MsbUJBQUEsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO2lEQUE1QixTQUFTLFVBQTBDLFVBQVU7T0FuQjFFLFlBQVksQ0FpRXhCO0lBQUQsbUJBQUM7Q0FBQSxBQWpFRCxDQUFrQyxhQUFhLEdBaUU5QztTQWpFWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gICAgSW5wdXQsXG4gICAgUmVuZGVyZXIyLFxuICAgIEluamVjdCxcbiAgICBFbGVtZW50UmVmLFxuICAgIE91dHB1dCxcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgVmlld0NoaWxkLFxuICAgIEhvc3RMaXN0ZW5lcixcbiAgICBTaW1wbGVDaGFuZ2VzLFxuICAgIE9uQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbG9yIH0gZnJvbSAnLi8uLi8uLi8uLi9oZWxwZXJzL2NvbG9yLmNsYXNzJztcbmltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLy4uL2Jhc2UuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IGBodWUtY29tcG9uZW50YCxcbiAgICB0ZW1wbGF0ZVVybDogYC4vaHVlLmNvbXBvbmVudC5odG1sYCxcbiAgICBzdHlsZVVybHM6IFtcbiAgICAgICAgYC4vLi4vYmFzZS5zdHlsZS5zY3NzYCxcbiAgICAgICAgYC4vaHVlLmNvbXBvbmVudC5zY3NzYFxuICAgIF0sXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgSHVlQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBodWU6IENvbG9yO1xuXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIGh1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q29sb3I+KGZhbHNlKTtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGNvbG9yOiBDb2xvcjtcblxuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBjb2xvckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q29sb3I+KGZhbHNlKTtcblxuICAgIEBWaWV3Q2hpbGQoJ3BvaW50ZXInLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICAgIHB1YmxpYyBwb2ludGVyOiBFbGVtZW50UmVmO1xuXG4gICAgcHJpdmF0ZSBpc1ZlcnRpY2FsOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlcjogUmVuZGVyZXIyLCBASW5qZWN0KERPQ1VNRU5UKSBkb2N1bWVudCwgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgICAgICBzdXBlcihkb2N1bWVudCwgZWxlbWVudFJlZiwgcmVuZGVyZXIpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ21vdXNlZG93bicsIFsnJGV2ZW50J10pXG4gICAgQEhvc3RMaXN0ZW5lcigndG91Y2hzdGFydCcsIFsnJGV2ZW50J10pXG4gICAgcHVibGljIG9uQ2xpY2soZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLm9uRXZlbnRDaGFuZ2UoZXZlbnQpO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCB2ZXJ0aWNhbCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuaXNWZXJ0aWNhbCA9IHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogY29sb3IgY2FuIGJlIGNoYW5nZWQgdGhyb3VnaCBpbnB1dHNcbiAgICAgKiBhbmQgdGhlbiB3ZSBuZWVkIHRvIG1vdmUgcG9pbnRlclxuICAgICAqL1xuICAgIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgICAgIGlmIChjaGFuZ2VzLmh1ZSAmJiBjaGFuZ2VzLmh1ZS5wcmV2aW91c1ZhbHVlICE9PSBjaGFuZ2VzLmh1ZS5jdXJyZW50VmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGhzdmEgPSB0aGlzLmh1ZS5nZXRIc3ZhKCk7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVBvaW50ZXJQb3NpdGlvbihoc3ZhLmh1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgbW92ZVBvaW50ZXIoe3gsIHksIGhlaWdodCwgd2lkdGh9KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGh1ZSA9IHRoaXMuaXNWZXJ0aWNhbCA/ICh5IC8gaGVpZ2h0KSAqIDM2MCA6ICh4IC8gd2lkdGgpICogMzYwO1xuICAgICAgICB0aGlzLmNoYW5nZVBvaW50ZXJQb3NpdGlvbihodWUpO1xuXG4gICAgICAgIGNvbnN0IGNvbG9yID0gdGhpcy5jb2xvci5nZXRIc3ZhKCk7XG4gICAgICAgIGNvbnN0IG5ld0NvbG9yID0gbmV3IENvbG9yKCkuc2V0SHN2YShodWUsIGNvbG9yLnNhdHVyYXRpb24sIGNvbG9yLnZhbHVlLCBjb2xvci5hbHBoYSk7XG4gICAgICAgIGNvbnN0IG5ld0h1ZUNvbG9yID0gbmV3IENvbG9yKCkuc2V0SHN2YShodWUsIDEwMCwgMTAwLCBjb2xvci5hbHBoYSk7XG5cbiAgICAgICAgdGhpcy5odWVDaGFuZ2UuZW1pdChuZXdIdWVDb2xvcik7XG4gICAgICAgIHRoaXMuY29sb3JDaGFuZ2UuZW1pdChuZXdDb2xvcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogaHVlIHZhbHVlIGlzIGluIHJhbmdlIGZyb20gMCB0byAzNjDCsFxuICAgICAqL1xuICAgIHByaXZhdGUgY2hhbmdlUG9pbnRlclBvc2l0aW9uKGh1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHggPSBodWUgLyAzNjAgKiAxMDA7XG4gICAgICAgIGNvbnN0IG9yaWVudGF0aW9uID0gdGhpcy5pc1ZlcnRpY2FsID8gJ3RvcCcgOiAnbGVmdCc7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5wb2ludGVyLm5hdGl2ZUVsZW1lbnQsIG9yaWVudGF0aW9uLCBgJHt4fSVgKTtcbiAgICB9XG59Il19