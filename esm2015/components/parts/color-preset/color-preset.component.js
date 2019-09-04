import * as tslib_1 from "tslib";
import { Component, HostBinding, Input, EventEmitter, Output, ChangeDetectionStrategy, HostListener } from '@angular/core';
import { Color } from './../../../helpers/color.class';
import { Subject, of } from 'rxjs';
import { takeUntil, delay, map } from 'rxjs/operators';
import { ColorPickerConfig } from './../../../services/color-picker.service';
let ColorPresetComponent = class ColorPresetComponent {
    constructor(pickerConfig) {
        this.pickerConfig = pickerConfig;
        this.selectionChange = new EventEmitter(false);
        this.longPress = new EventEmitter(false);
        this.mouseup = new Subject();
        this.showDepthText = false;
    }
    set depth(showDepthText) {
        this.showDepthText = !!showDepthText;
    }
    ngOnDestroy() {
        this.mouseup.next();
        this.mouseup.complete();
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
    onTouch(event) {
        of(event)
            .pipe(map((e) => e.timeStamp || new Date().getTime()), delay(350), takeUntil(this.mouseup))
            .subscribe(() => this.longPress.next(true));
        this.selectionChange.emit(this.color);
    }
    onTouchEnd(event) {
        this.mouseup.next(event);
    }
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
        selector: `color-preset`,
        template: ``,
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [":host,:host ::ng-deep *{padding:0;margin:0;-webkit-box-sizing:border-box;box-sizing:border-box}", ":host{display:inline-block;height:12px;width:12px;position:relative;cursor:pointer;-webkit-transition:.2s;transition:.2s}"]
    }),
    tslib_1.__metadata("design:paramtypes", [ColorPickerConfig])
], ColorPresetComponent);
export { ColorPresetComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3ItcHJlc2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BpcGxhYi9uZ3gtY29sb3ItcGlja2VyLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9wYXJ0cy9jb2xvci1wcmVzZXQvY29sb3ItcHJlc2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNILFNBQVMsRUFDVCxXQUFXLEVBQ1gsS0FBSyxFQUNMLFlBQVksRUFDWixNQUFNLEVBQ04sdUJBQXVCLEVBQ3ZCLFlBQVksRUFFZixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsS0FBSyxFQUFlLE1BQU0sZ0NBQWdDLENBQUM7QUFDcEUsT0FBTyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbkMsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFXN0UsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBb0I7SUF1QjdCLFlBQTZCLFlBQStCO1FBQS9CLGlCQUFZLEdBQVosWUFBWSxDQUFtQjtRQVRyRCxvQkFBZSxHQUFHLElBQUksWUFBWSxDQUFRLEtBQUssQ0FBQyxDQUFDO1FBR2pELGNBQVMsR0FBRyxJQUFJLFlBQVksQ0FBVSxLQUFLLENBQUMsQ0FBQztRQUU1QyxZQUFPLEdBQUcsSUFBSSxPQUFPLEVBQTJCLENBQUM7UUFFakQsa0JBQWEsR0FBWSxLQUFLLENBQUM7SUFFdUIsQ0FBQztJQWQvRCxJQUFXLEtBQUssQ0FBQyxhQUFzQjtRQUNuQyxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUM7SUFDekMsQ0FBQztJQWNNLFdBQVc7UUFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUdELElBQVcsT0FBTztRQUNkLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBR0QsSUFBVyxLQUFLO1FBQ1osTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBRXpELElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNwQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ25HO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUdELElBQVcsU0FBUztRQUNoQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLEtBQUssSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ3BHLENBQUM7SUFJTSxPQUFPLENBQUMsS0FBOEI7UUFDekMsRUFBRSxDQUFDLEtBQUssQ0FBQzthQUNKLElBQUksQ0FDRCxHQUFHLENBQUMsQ0FBQyxDQUEwQixFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxJQUFJLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsRUFDeEUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUNWLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQzFCO2FBQ0EsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFFaEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFJTSxVQUFVLENBQUMsS0FBOEI7UUFDNUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQztDQUVKLENBQUE7QUFuRUc7SUFEQyxLQUFLLEVBQUU7c0NBQ1ksS0FBSzt5REFBQztBQUcxQjtJQURDLEtBQUssRUFBRTtzQ0FDTSxLQUFLO21EQUFDO0FBR3BCO0lBREMsS0FBSyxDQUFDLGtCQUFrQixDQUFDOzs7aURBR3pCO0FBR0Q7SUFEQyxNQUFNLEVBQUU7OzZEQUMrQztBQUd4RDtJQURDLE1BQU0sRUFBRTs7dURBQzJDO0FBY3BEO0lBREMsV0FBVyxDQUFDLHVCQUF1QixDQUFDOzs7bURBR3BDO0FBR0Q7SUFEQyxXQUFXLENBQUMsWUFBWSxDQUFDOzs7aURBUXpCO0FBR0Q7SUFEQyxXQUFXLENBQUMsZ0JBQWdCLENBQUM7OztxREFHN0I7QUFJRDtJQUZDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7Ozs7bURBV3RDO0FBSUQ7SUFGQyxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbkMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzs7O3NEQUdwQztBQXBFUSxvQkFBb0I7SUFUaEMsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGNBQWM7UUFDeEIsUUFBUSxFQUFFLEVBQUU7UUFLWixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7S0FDbEQsQ0FBQzs2Q0F3QjZDLGlCQUFpQjtHQXZCbkQsb0JBQW9CLENBc0VoQztTQXRFWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBIb3N0QmluZGluZyxcbiAgICBJbnB1dCxcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgT3V0cHV0LFxuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICAgIEhvc3RMaXN0ZW5lcixcbiAgICBPbkRlc3Ryb3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb2xvciwgQ29sb3JTdHJpbmcgfSBmcm9tICcuLy4uLy4uLy4uL2hlbHBlcnMvY29sb3IuY2xhc3MnO1xuaW1wb3J0IHsgU3ViamVjdCwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCwgZGVsYXksIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENvbG9yUGlja2VyQ29uZmlnIH0gZnJvbSAnLi8uLi8uLi8uLi9zZXJ2aWNlcy9jb2xvci1waWNrZXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBgY29sb3ItcHJlc2V0YCxcbiAgICB0ZW1wbGF0ZTogYGAsXG4gICAgc3R5bGVVcmxzOiBbXG4gICAgICAgIGAuLy4uL2Jhc2Uuc3R5bGUuc2Nzc2AsXG4gICAgICAgIGAuL2NvbG9yLXByZXNldC5jb21wb25lbnQuc2Nzc2BcbiAgICBdLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIENvbG9yUHJlc2V0Q29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGFjdGl2ZUNvbG9yOiBDb2xvcjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGNvbG9yOiBDb2xvcjtcblxuICAgIEBJbnB1dCgnc2hvdy1kZXB0aC10aXRsZScpXG4gICAgcHVibGljIHNldCBkZXB0aChzaG93RGVwdGhUZXh0OiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuc2hvd0RlcHRoVGV4dCA9ICEhc2hvd0RlcHRoVGV4dDtcbiAgICB9XG5cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgc2VsZWN0aW9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxDb2xvcj4oZmFsc2UpO1xuXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIGxvbmdQcmVzcyA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gICAgcHJpdmF0ZSBtb3VzZXVwID0gbmV3IFN1YmplY3Q8TW91c2VFdmVudCB8IFRvdWNoRXZlbnQ+KCk7XG5cbiAgICBwcml2YXRlIHNob3dEZXB0aFRleHQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgcGlja2VyQ29uZmlnOiBDb2xvclBpY2tlckNvbmZpZyl7fVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLm1vdXNldXAubmV4dCgpO1xuICAgICAgICB0aGlzLm1vdXNldXAuY29tcGxldGUoKTtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoJ3N0eWxlLmJhY2tncm91bmRDb2xvcicpXG4gICAgcHVibGljIGdldCBiZ0NvbG9yKCk6IENvbG9yU3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sb3IudG9SZ2JhU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLnRpdGxlJylcbiAgICBwdWJsaWMgZ2V0IHRpdGxlKCkge1xuICAgICAgICBjb25zdCBjb2xvciA9IHRoaXMuY29sb3IgPyB0aGlzLmNvbG9yLnRvSGV4U3RyaW5nKCkgOiAnJztcblxuICAgICAgICBpZiAodGhpcy5zaG93RGVwdGhUZXh0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5waWNrZXJDb25maWcucHJlc2V0c1RpdGxlLnJlcGxhY2UoL1xce1xccyooLis/KVxccypcXH0vZywgKG1hdGNoLCBmaXJzdE1hdGNoKSA9PiBjb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbG9yO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZygnY2xhc3Muc2VsZWN0ZWQnKVxuICAgIHB1YmxpYyBnZXQgY2xhc3NOYW1lKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5hY3RpdmVDb2xvciA/IHRoaXMuY29sb3IudG9SZ2JhU3RyaW5nKCkgPT09IHRoaXMuYWN0aXZlQ29sb3IudG9SZ2JhU3RyaW5nKCkgOiBmYWxzZTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdtb3VzZWRvd24nLCBbJyRldmVudCddKVxuICAgIEBIb3N0TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBbJyRldmVudCddKVxuICAgIHB1YmxpYyBvblRvdWNoKGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCk6IHZvaWQge1xuICAgICAgICBvZihldmVudClcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICAgIG1hcCgoZTogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpID0+IGUudGltZVN0YW1wIHx8IG5ldyBEYXRlKCkuZ2V0VGltZSgpKSxcbiAgICAgICAgICAgICAgICBkZWxheSgzNTApLFxuICAgICAgICAgICAgICAgIHRha2VVbnRpbCh0aGlzLm1vdXNldXApXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMubG9uZ1ByZXNzLm5leHQodHJ1ZSkpO1xuXG4gICAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQodGhpcy5jb2xvcik7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignbW91c2V1cCcsIFsnJGV2ZW50J10pXG4gICAgQEhvc3RMaXN0ZW5lcigndG91Y2hlbmQnLCBbJyRldmVudCddKVxuICAgIHB1YmxpYyBvblRvdWNoRW5kKGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCk6IHZvaWQge1xuICAgICAgICB0aGlzLm1vdXNldXAubmV4dChldmVudCk7XG4gICAgfVxuXG59XG4iXX0=