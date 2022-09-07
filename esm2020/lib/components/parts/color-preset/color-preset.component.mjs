import { Component, HostBinding, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { Subject, of, fromEvent, merge } from 'rxjs';
import { takeUntil, delay, map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "./../../../services/color-picker.service";
export class ColorPresetComponent {
    constructor(pickerConfig, elementRef) {
        this.pickerConfig = pickerConfig;
        this.elementRef = elementRef;
        this.selectionChange = new EventEmitter(false);
        this.longPress = new EventEmitter(false);
        this.mouseup = new Subject();
        this.showDepthText = false;
        this.subscriptions = [];
        this.addEventListeners();
    }
    set depth(showDepthText) {
        this.showDepthText = !!showDepthText;
    }
    ngOnDestroy() {
        this.mouseup.next();
        this.mouseup.complete();
        this.removeEventListeners();
    }
    get bgColor() {
        return this.color.toRgbaString();
    }
    get title() {
        const color = this.color ? this.color.toHexString() : '';
        if (this.showDepthText) {
            return this.pickerConfig.presetsTitle.replace(/\{\s*(.+?)\s*\}/g, (match, firstMatch) => color);
        }
        return color;
    }
    get className() {
        return this.activeColor ? this.color.toRgbaString() === this.activeColor.toRgbaString() : false;
    }
    addEventListeners() {
        this.subscriptions.push(merge(fromEvent(this.elementRef.nativeElement, 'mouseup'), fromEvent(this.elementRef.nativeElement, 'touchend'))
            .subscribe(() => this.onTouchEnd()));
        this.subscriptions.push(merge(fromEvent(this.elementRef.nativeElement, 'mousedown'), fromEvent(this.elementRef.nativeElement, 'touchstart', { passive: true }))
            .subscribe((e) => this.onTouch(e)));
    }
    removeEventListeners() {
        this.subscriptions.forEach((subscription) => subscription.unsubscribe());
        this.subscriptions.length = 0;
    }
    onTouch(event) {
        of(event)
            .pipe(map((e) => e.timeStamp || new Date().getTime()), delay(350), takeUntil(this.mouseup))
            .subscribe(() => this.longPress.next(true));
        this.selectionChange.emit(this.color);
    }
    onTouchEnd() {
        this.mouseup.next();
    }
}
ColorPresetComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: ColorPresetComponent, deps: [{ token: i1.ColorPickerConfig }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
ColorPresetComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.1", type: ColorPresetComponent, selector: "color-preset", inputs: { activeColor: "activeColor", color: "color", depth: ["show-depth-title", "depth"] }, outputs: { selectionChange: "selectionChange", longPress: "longPress" }, host: { properties: { "style.backgroundColor": "this.bgColor", "attr.title": "this.title", "class.selected": "this.className" } }, ngImport: i0, template: ``, isInline: true, styles: [":host,:host ::ng-deep *{padding:0;margin:0;box-sizing:border-box}\n", ":host{display:inline-block;height:12px;width:12px;position:relative;cursor:pointer;transition:all .2s}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: ColorPresetComponent, decorators: [{
            type: Component,
            args: [{ selector: `color-preset`, template: ``, changeDetection: ChangeDetectionStrategy.OnPush, styles: [":host,:host ::ng-deep *{padding:0;margin:0;box-sizing:border-box}\n", ":host{display:inline-block;height:12px;width:12px;position:relative;cursor:pointer;transition:all .2s}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.ColorPickerConfig }, { type: i0.ElementRef }]; }, propDecorators: { activeColor: [{
                type: Input
            }], color: [{
                type: Input
            }], depth: [{
                type: Input,
                args: ['show-depth-title']
            }], selectionChange: [{
                type: Output
            }], longPress: [{
                type: Output
            }], bgColor: [{
                type: HostBinding,
                args: ['style.backgroundColor']
            }], title: [{
                type: HostBinding,
                args: ['attr.title']
            }], className: [{
                type: HostBinding,
                args: ['class.selected']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3ItcHJlc2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2lwbGFiL25neC1jb2xvci1waWNrZXIvc3JjL2xpYi9jb21wb25lbnRzL3BhcnRzL2NvbG9yLXByZXNldC9jb2xvci1wcmVzZXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsV0FBVyxFQUNYLEtBQUssRUFDTCxZQUFZLEVBQ1osTUFBTSxFQUNOLHVCQUF1QixFQUcxQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQWdCLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNuRSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBWXZELE1BQU0sT0FBTyxvQkFBb0I7SUF5QjdCLFlBQTZCLFlBQStCLEVBQW1CLFVBQXNCO1FBQXhFLGlCQUFZLEdBQVosWUFBWSxDQUFtQjtRQUFtQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBWDlGLG9CQUFlLEdBQUcsSUFBSSxZQUFZLENBQVEsS0FBSyxDQUFDLENBQUM7UUFHakQsY0FBUyxHQUFHLElBQUksWUFBWSxDQUFVLEtBQUssQ0FBQyxDQUFDO1FBRTVDLFlBQU8sR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBRTlCLGtCQUFhLEdBQVksS0FBSyxDQUFDO1FBRS9CLGtCQUFhLEdBQW1CLEVBQUUsQ0FBQztRQUd2QyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBbkJELElBQ1csS0FBSyxDQUFDLGFBQXNCO1FBQ25DLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQztJQUN6QyxDQUFDO0lBa0JNLFdBQVc7UUFDZCxJQUFJLENBQUMsT0FBTyxD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QjtrQkFUaEMsU0FBUzsrQkFDSSxjQUFjLFlBQ2QsRUFBRSxtQkFLSyx1QkFBdUIsQ0FBQyxNQUFNO2lJQUt4QyxXQUFXO3NCQURqQixLQUFLO2dCQUlDLEtBQUs7c0JBRFgsS0FBSztnQkFJSyxLQUFLO3NCQURmLEtBQUs7dUJBQUMsa0JBQWtCO2dCQU1sQixlQUFlO3NCQURyQixNQUFNO2dCQUlBLFNBQVM7c0JBRGYsTUFBTTtnQkFvQkksT0FBTztzQkFEakIsV0FBVzt1QkFBQyx1QkFBdUI7Z0JBTXpCLEtBQUs7c0JBRGYsV0FBVzt1QkFBQyxZQUFZO2dCQVdkLFNBQVM7c0JBRG5CLFdBQVc7dUJBQUMsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgSG9zdEJpbmRpbmcsXG4gICAgSW5wdXQsXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIE91dHB1dCxcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgICBPbkRlc3Ryb3ksXG4gICAgRWxlbWVudFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbG9yLCBDb2xvclN0cmluZyB9IGZyb20gJy4vLi4vLi4vLi4vaGVscGVycy9jb2xvci5jbGFzcyc7XG5pbXBvcnQgeyBTdWJqZWN0LCBvZiwgZnJvbUV2ZW50LCBTdWJzY3JpcHRpb24sIG1lcmdlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwsIGRlbGF5LCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDb2xvclBpY2tlckNvbmZpZyB9IGZyb20gJy4vLi4vLi4vLi4vc2VydmljZXMvY29sb3ItcGlja2VyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogYGNvbG9yLXByZXNldGAsXG4gICAgdGVtcGxhdGU6IGBgLFxuICAgIHN0eWxlVXJsczogW1xuICAgICAgICBgLi8uLi9iYXNlLnN0eWxlLnNjc3NgLFxuICAgICAgICBgLi9jb2xvci1wcmVzZXQuY29tcG9uZW50LnNjc3NgXG4gICAgXSxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBDb2xvclByZXNldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBhY3RpdmVDb2xvcjogQ29sb3I7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBjb2xvcjogQ29sb3I7XG5cbiAgICBASW5wdXQoJ3Nob3ctZGVwdGgtdGl0bGUnKVxuICAgIHB1YmxpYyBzZXQgZGVwdGgoc2hvd0RlcHRoVGV4dDogYm9vbGVhbikge1xuICAgICAgICB0aGlzLnNob3dEZXB0aFRleHQgPSAhIXNob3dEZXB0aFRleHQ7XG4gICAgfVxuXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIHNlbGVjdGlvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q29sb3I+KGZhbHNlKTtcblxuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBsb25nUHJlc3MgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KGZhbHNlKTtcblxuICAgIHByaXZhdGUgbW91c2V1cCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgICBwcml2YXRlIHNob3dEZXB0aFRleHQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHByaXZhdGUgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgcGlja2VyQ29uZmlnOiBDb2xvclBpY2tlckNvbmZpZywgcHJpdmF0ZSByZWFkb25seSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMubW91c2V1cC5uZXh0KCk7XG4gICAgICAgIHRoaXMubW91c2V1cC5jb21wbGV0ZSgpO1xuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKCdzdHlsZS5iYWNrZ3JvdW5kQ29sb3InKVxuICAgIHB1YmxpYyBnZXQgYmdDb2xvcigpOiBDb2xvclN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbG9yLnRvUmdiYVN0cmluZygpO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZygnYXR0ci50aXRsZScpXG4gICAgcHVibGljIGdldCB0aXRsZSgpIHtcbiAgICAgICAgY29uc3QgY29sb3IgPSB0aGlzLmNvbG9yID8gdGhpcy5jb2xvci50b0hleFN0cmluZygpIDogJyc7XG5cbiAgICAgICAgaWYgKHRoaXMuc2hvd0RlcHRoVGV4dCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGlja2VyQ29uZmlnLnByZXNldHNUaXRsZS5yZXBsYWNlKC9cXHtcXHMqKC4rPylcXHMqXFx9L2csIChtYXRjaCwgZmlyc3RNYXRjaCkgPT4gY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb2xvcjtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNlbGVjdGVkJylcbiAgICBwdWJsaWMgZ2V0IGNsYXNzTmFtZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0aXZlQ29sb3IgPyB0aGlzLmNvbG9yLnRvUmdiYVN0cmluZygpID09PSB0aGlzLmFjdGl2ZUNvbG9yLnRvUmdiYVN0cmluZygpIDogZmFsc2U7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRFdmVudExpc3RlbmVycygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2goXG4gICAgICAgICAgICBtZXJnZShcbiAgICAgICAgICAgICAgICBmcm9tRXZlbnQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtb3VzZXVwJyksXG4gICAgICAgICAgICAgICAgZnJvbUV2ZW50KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAndG91Y2hlbmQnKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLm9uVG91Y2hFbmQoKSlcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChcbiAgICAgICAgICAgIG1lcmdlKFxuICAgICAgICAgICAgICAgIGZyb21FdmVudCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21vdXNlZG93bicpLFxuICAgICAgICAgICAgICAgIGZyb21FdmVudCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3RvdWNoc3RhcnQnLCB7IHBhc3NpdmU6IHRydWUgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGU6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KSA9PiB0aGlzLm9uVG91Y2goZSkpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW1vdmVFdmVudExpc3RlbmVycygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmZvckVhY2goKHN1YnNjcmlwdGlvbikgPT4gc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCkpO1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMubGVuZ3RoID0gMDtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uVG91Y2goZXZlbnQ6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KTogdm9pZCB7XG4gICAgICAgIG9mKGV2ZW50KVxuICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgICAgbWFwKChlOiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCkgPT4gZS50aW1lU3RhbXAgfHwgbmV3IERhdGUoKS5nZXRUaW1lKCkpLFxuICAgICAgICAgICAgICAgIGRlbGF5KDM1MCksXG4gICAgICAgICAgICAgICAgdGFrZVVudGlsKHRoaXMubW91c2V1cClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5sb25nUHJlc3MubmV4dCh0cnVlKSk7XG5cbiAgICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdCh0aGlzLmNvbG9yKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uVG91Y2hFbmQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubW91c2V1cC5uZXh0KCk7XG4gICAgfVxuXG59XG4iXX0=