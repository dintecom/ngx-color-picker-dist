import * as tslib_1 from "tslib";
import { Component, HostBinding, Input, EventEmitter, Output, ChangeDetectionStrategy, HostListener } from '@angular/core';
import { Color } from './../../../helpers/color.class';
import { Subject, of } from 'rxjs';
import { takeUntil, delay, map } from 'rxjs/operators';
import { ColorPickerConfig } from './../../../services/color-picker.service';
var ColorPresetComponent = /** @class */ (function () {
    function ColorPresetComponent(pickerConfig) {
        this.pickerConfig = pickerConfig;
        this.selectionChange = new EventEmitter(false);
        this.longPress = new EventEmitter(false);
        this.mouseup = new Subject();
        this.showDepthText = false;
    }
    Object.defineProperty(ColorPresetComponent.prototype, "depth", {
        set: function (showDepthText) {
            this.showDepthText = !!showDepthText;
        },
        enumerable: true,
        configurable: true
    });
    ColorPresetComponent.prototype.ngOnDestroy = function () {
        this.mouseup.next();
        this.mouseup.complete();
    };
    Object.defineProperty(ColorPresetComponent.prototype, "bgColor", {
        get: function () {
            return this.color.toRgbaString();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColorPresetComponent.prototype, "title", {
        get: function () {
            var color = this.color ? this.color.toHexString() : '';
            if (this.showDepthText) {
                return this.pickerConfig.presetsTitle.replace(/\{\s*(.+?)\s*\}/g, function (match, firstMatch) { return color; });
            }
            return color;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColorPresetComponent.prototype, "className", {
        get: function () {
            return this.activeColor ? this.color.toRgbaString() === this.activeColor.toRgbaString() : false;
        },
        enumerable: true,
        configurable: true
    });
    ColorPresetComponent.prototype.onTouch = function (event) {
        var _this = this;
        of(event)
            .pipe(map(function (e) { return e.timeStamp || new Date().getTime(); }), delay(350), takeUntil(this.mouseup))
            .subscribe(function () { return _this.longPress.next(true); });
        this.selectionChange.emit(this.color);
    };
    ColorPresetComponent.prototype.onTouchEnd = function (event) {
        this.mouseup.next(event);
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Color)
    ], ColorPresetComponent.prototype, "activeColor", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Color)
    ], ColorPresetComponent.prototype, "color", void 0);
    tslib_1.__decorate([
        Input('show-depth-title'),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], ColorPresetComponent.prototype, "depth", null);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], ColorPresetComponent.prototype, "selectionChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], ColorPresetComponent.prototype, "longPress", void 0);
    tslib_1.__decorate([
        HostBinding('style.backgroundColor'),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [])
    ], ColorPresetComponent.prototype, "bgColor", null);
    tslib_1.__decorate([
        HostBinding('attr.title'),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [])
    ], ColorPresetComponent.prototype, "title", null);
    tslib_1.__decorate([
        HostBinding('class.selected'),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [])
    ], ColorPresetComponent.prototype, "className", null);
    tslib_1.__decorate([
        HostListener('mousedown', ['$event']),
        HostListener('touchstart', ['$event']),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", void 0)
    ], ColorPresetComponent.prototype, "onTouch", null);
    tslib_1.__decorate([
        HostListener('mouseup', ['$event']),
        HostListener('touchend', ['$event']),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", void 0)
    ], ColorPresetComponent.prototype, "onTouchEnd", null);
    ColorPresetComponent = tslib_1.__decorate([
        Component({
            selector: "color-preset",
            template: "",
            changeDetection: ChangeDetectionStrategy.OnPush,
            styles: [":host,:host ::ng-deep *{padding:0;margin:0;-webkit-box-sizing:border-box;box-sizing:border-box}", ":host{display:inline-block;height:12px;width:12px;position:relative;cursor:pointer;-webkit-transition:.2s;transition:.2s}"]
        }),
        tslib_1.__metadata("design:paramtypes", [ColorPickerConfig])
    ], ColorPresetComponent);
    return ColorPresetComponent;
}());
export { ColorPresetComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3ItcHJlc2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BpcGxhYi9uZ3gtY29sb3ItcGlja2VyLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9wYXJ0cy9jb2xvci1wcmVzZXQvY29sb3ItcHJlc2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNILFNBQVMsRUFDVCxXQUFXLEVBQ1gsS0FBSyxFQUNMLFlBQVksRUFDWixNQUFNLEVBQ04sdUJBQXVCLEVBQ3ZCLFlBQVksRUFFZixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsS0FBSyxFQUFlLE1BQU0sZ0NBQWdDLENBQUM7QUFDcEUsT0FBTyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbkMsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFXN0U7SUF1QkksOEJBQTZCLFlBQStCO1FBQS9CLGlCQUFZLEdBQVosWUFBWSxDQUFtQjtRQVRyRCxvQkFBZSxHQUFHLElBQUksWUFBWSxDQUFRLEtBQUssQ0FBQyxDQUFDO1FBR2pELGNBQVMsR0FBRyxJQUFJLFlBQVksQ0FBVSxLQUFLLENBQUMsQ0FBQztRQUU1QyxZQUFPLEdBQUcsSUFBSSxPQUFPLEVBQTJCLENBQUM7UUFFakQsa0JBQWEsR0FBWSxLQUFLLENBQUM7SUFFdUIsQ0FBQztJQWQvRCxzQkFBVyx1Q0FBSzthQUFoQixVQUFpQixhQUFzQjtZQUNuQyxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUM7UUFDekMsQ0FBQzs7O09BQUE7SUFjTSwwQ0FBVyxHQUFsQjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBR0Qsc0JBQVcseUNBQU87YUFBbEI7WUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDckMsQ0FBQzs7O09BQUE7SUFHRCxzQkFBVyx1Q0FBSzthQUFoQjtZQUNJLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUV6RCxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQ3BCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLFVBQUMsS0FBSyxFQUFFLFVBQVUsSUFBSyxPQUFBLEtBQUssRUFBTCxDQUFLLENBQUMsQ0FBQzthQUNuRztZQUNELE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUM7OztPQUFBO0lBR0Qsc0JBQVcsMkNBQVM7YUFBcEI7WUFDSSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLEtBQUssSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ3BHLENBQUM7OztPQUFBO0lBSU0sc0NBQU8sR0FBZCxVQUFlLEtBQThCO1FBRjdDLGlCQVlDO1FBVEcsRUFBRSxDQUFDLEtBQUssQ0FBQzthQUNKLElBQUksQ0FDRCxHQUFHLENBQUMsVUFBQyxDQUEwQixJQUFLLE9BQUEsQ0FBQyxDQUFDLFNBQVMsSUFBSSxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxFQUFuQyxDQUFtQyxDQUFDLEVBQ3hFLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFDVixTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUMxQjthQUNBLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQXpCLENBQXlCLENBQUMsQ0FBQztRQUVoRCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUlNLHlDQUFVLEdBQWpCLFVBQWtCLEtBQThCO1FBQzVDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFqRUQ7UUFEQyxLQUFLLEVBQUU7MENBQ1ksS0FBSzs2REFBQztJQUcxQjtRQURDLEtBQUssRUFBRTswQ0FDTSxLQUFLO3VEQUFDO0lBR3BCO1FBREMsS0FBSyxDQUFDLGtCQUFrQixDQUFDOzs7cURBR3pCO0lBR0Q7UUFEQyxNQUFNLEVBQUU7O2lFQUMrQztJQUd4RDtRQURDLE1BQU0sRUFBRTs7MkRBQzJDO0lBY3BEO1FBREMsV0FBVyxDQUFDLHVCQUF1QixDQUFDOzs7dURBR3BDO0lBR0Q7UUFEQyxXQUFXLENBQUMsWUFBWSxDQUFDOzs7cURBUXpCO0lBR0Q7UUFEQyxXQUFXLENBQUMsZ0JBQWdCLENBQUM7Ozt5REFHN0I7SUFJRDtRQUZDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7Ozs7dURBV3RDO0lBSUQ7UUFGQyxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzs7OzBEQUdwQztJQXBFUSxvQkFBb0I7UUFUaEMsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGNBQWM7WUFDeEIsUUFBUSxFQUFFLEVBQUU7WUFLWixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7U0FDbEQsQ0FBQztpREF3QjZDLGlCQUFpQjtPQXZCbkQsb0JBQW9CLENBc0VoQztJQUFELDJCQUFDO0NBQUEsQUF0RUQsSUFzRUM7U0F0RVksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgSG9zdEJpbmRpbmcsXG4gICAgSW5wdXQsXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIE91dHB1dCxcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgICBIb3N0TGlzdGVuZXIsXG4gICAgT25EZXN0cm95XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29sb3IsIENvbG9yU3RyaW5nIH0gZnJvbSAnLi8uLi8uLi8uLi9oZWxwZXJzL2NvbG9yLmNsYXNzJztcbmltcG9ydCB7IFN1YmplY3QsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwsIGRlbGF5LCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDb2xvclBpY2tlckNvbmZpZyB9IGZyb20gJy4vLi4vLi4vLi4vc2VydmljZXMvY29sb3ItcGlja2VyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogYGNvbG9yLXByZXNldGAsXG4gICAgdGVtcGxhdGU6IGBgLFxuICAgIHN0eWxlVXJsczogW1xuICAgICAgICBgLi8uLi9iYXNlLnN0eWxlLnNjc3NgLFxuICAgICAgICBgLi9jb2xvci1wcmVzZXQuY29tcG9uZW50LnNjc3NgXG4gICAgXSxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBDb2xvclByZXNldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBhY3RpdmVDb2xvcjogQ29sb3I7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBjb2xvcjogQ29sb3I7XG5cbiAgICBASW5wdXQoJ3Nob3ctZGVwdGgtdGl0bGUnKVxuICAgIHB1YmxpYyBzZXQgZGVwdGgoc2hvd0RlcHRoVGV4dDogYm9vbGVhbikge1xuICAgICAgICB0aGlzLnNob3dEZXB0aFRleHQgPSAhIXNob3dEZXB0aFRleHQ7XG4gICAgfVxuXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIHNlbGVjdGlvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q29sb3I+KGZhbHNlKTtcblxuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBsb25nUHJlc3MgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KGZhbHNlKTtcblxuICAgIHByaXZhdGUgbW91c2V1cCA9IG5ldyBTdWJqZWN0PE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50PigpO1xuXG4gICAgcHJpdmF0ZSBzaG93RGVwdGhUZXh0OiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHBpY2tlckNvbmZpZzogQ29sb3JQaWNrZXJDb25maWcpe31cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5tb3VzZXVwLm5leHQoKTtcbiAgICAgICAgdGhpcy5tb3VzZXVwLmNvbXBsZXRlKCk7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKCdzdHlsZS5iYWNrZ3JvdW5kQ29sb3InKVxuICAgIHB1YmxpYyBnZXQgYmdDb2xvcigpOiBDb2xvclN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbG9yLnRvUmdiYVN0cmluZygpO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZygnYXR0ci50aXRsZScpXG4gICAgcHVibGljIGdldCB0aXRsZSgpIHtcbiAgICAgICAgY29uc3QgY29sb3IgPSB0aGlzLmNvbG9yID8gdGhpcy5jb2xvci50b0hleFN0cmluZygpIDogJyc7XG5cbiAgICAgICAgaWYgKHRoaXMuc2hvd0RlcHRoVGV4dCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGlja2VyQ29uZmlnLnByZXNldHNUaXRsZS5yZXBsYWNlKC9cXHtcXHMqKC4rPylcXHMqXFx9L2csIChtYXRjaCwgZmlyc3RNYXRjaCkgPT4gY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb2xvcjtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNlbGVjdGVkJylcbiAgICBwdWJsaWMgZ2V0IGNsYXNzTmFtZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0aXZlQ29sb3IgPyB0aGlzLmNvbG9yLnRvUmdiYVN0cmluZygpID09PSB0aGlzLmFjdGl2ZUNvbG9yLnRvUmdiYVN0cmluZygpIDogZmFsc2U7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignbW91c2Vkb3duJywgWyckZXZlbnQnXSlcbiAgICBASG9zdExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgWyckZXZlbnQnXSlcbiAgICBwdWJsaWMgb25Ub3VjaChldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgb2YoZXZlbnQpXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgICBtYXAoKGU6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KSA9PiBlLnRpbWVTdGFtcCB8fCBuZXcgRGF0ZSgpLmdldFRpbWUoKSksXG4gICAgICAgICAgICAgICAgZGVsYXkoMzUwKSxcbiAgICAgICAgICAgICAgICB0YWtlVW50aWwodGhpcy5tb3VzZXVwKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmxvbmdQcmVzcy5uZXh0KHRydWUpKTtcblxuICAgICAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KHRoaXMuY29sb3IpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ21vdXNldXAnLCBbJyRldmVudCddKVxuICAgIEBIb3N0TGlzdGVuZXIoJ3RvdWNoZW5kJywgWyckZXZlbnQnXSlcbiAgICBwdWJsaWMgb25Ub3VjaEVuZChldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5tb3VzZXVwLm5leHQoZXZlbnQpO1xuICAgIH1cblxufVxuIl19