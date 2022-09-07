import { Component, Input, EventEmitter, Output, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { Color } from './../../../helpers/color.class';
import { BaseComponent } from './../base.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class AlphaComponent extends BaseComponent {
    constructor(renderer) {
        super();
        this.renderer = renderer;
        this.colorChange = new EventEmitter(false);
        this.isVertical = false;
    }
    set vertical(value) {
        this.isVertical = true;
    }
    /**
     * color can be changed through inputs
     * and then we need to move pointer
     */
    ngOnChanges(changes) {
        if (changes.color && changes.color.previousValue !== changes.color.currentValue) {
            const hsva = this.color.getHsva();
            this.changePointerPosition(hsva.alpha);
        }
    }
    movePointer({ x, y, height, width }) {
        const alpha = this.isVertical ? y / height : x / width;
        this.changePointerPosition(alpha);
        const hsva = this.color.getHsva();
        const newColor = new Color().setHsva(hsva.hue, hsva.saturation, hsva.value, alpha);
        this.colorChange.emit(newColor);
    }
    /**
     * hue value is in range from 0 to 360°
     */
    changePointerPosition(alpha) {
        const x = alpha * 100;
        const orientation = this.isVertical ? 'top' : 'left';
        this.renderer.setStyle(this.pointer.nativeElement, orientation, `${x}%`);
    }
    get gradient() {
        const rgba = this.color.getRgba();
        const orientation = this.isVertical ? 'bottom' : 'right';
        return `linear-gradient(to ${orientation}, rgba(${rgba.red}, ${rgba.green}, ${rgba.blue}, 0) 0%, rgb(${rgba.red}, ${rgba.green}, ${rgba.blue}) 100%)`;
    }
}
AlphaComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: AlphaComponent, deps: [{ token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
AlphaComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.1", type: AlphaComponent, selector: "alpha-component", inputs: { color: "color", vertical: "vertical" }, outputs: { colorChange: "colorChange" }, viewQueries: [{ propertyName: "pointer", first: true, predicate: ["pointer"], descendants: true, static: true }], usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<div #pointer class=\"pointer\"></div>\n<div class=\"gradient-color\" [ngStyle]=\"{ 'background': gradient }\"></div>", styles: [":host,:host ::ng-deep *{padding:0;margin:0;box-sizing:border-box}\n", ":host{display:block;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMUlEQVQ4T2NkYGAQYcAP3uCTZhw1gGGYhAGBZIA/nYDCgBDAm9BGDWAAJyRCgLaBCAAgXwixzAS0pgAAAABJRU5ErkJggg==);background-position:left center;height:12px;border-radius:2px;position:relative}:host([vertical]){width:12px;height:100px;background-position:center 0}.gradient-color{position:absolute;left:0;right:0;top:0;height:100%;z-index:1}.pointer{background:#fff;height:14px;width:14px;top:-1px;left:0;position:absolute;border-radius:50%;cursor:pointer;margin:0 0 0 -7px;z-index:2}:host([vertical]) .pointer{left:-1px;margin:-7px 0 0}\n"], dependencies: [{ kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: AlphaComponent, decorators: [{
            type: Component,
            args: [{ selector: `alpha-component`, changeDetection: ChangeDetectionStrategy.OnPush, template: "<div #pointer class=\"pointer\"></div>\n<div class=\"gradient-color\" [ngStyle]=\"{ 'background': gradient }\"></div>", styles: [":host,:host ::ng-deep *{padding:0;margin:0;box-sizing:border-box}\n", ":host{display:block;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMUlEQVQ4T2NkYGAQYcAP3uCTZhw1gGGYhAGBZIA/nYDCgBDAm9BGDWAAJyRCgLaBCAAgXwixzAS0pgAAAABJRU5ErkJggg==);background-position:left center;height:12px;border-radius:2px;position:relative}:host([vertical]){width:12px;height:100px;background-position:center 0}.gradient-color{position:absolute;left:0;right:0;top:0;height:100%;z-index:1}.pointer{background:#fff;height:14px;width:14px;top:-1px;left:0;position:absolute;border-radius:50%;cursor:pointer;margin:0 0 0 -7px;z-index:2}:host([vertical]) .pointer{left:-1px;margin:-7px 0 0}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }]; }, propDecorators: { color: [{
                type: Input
            }], colorChange: [{
                type: Output
            }], pointer: [{
                type: ViewChild,
                args: ['pointer', { static: true }]
            }], vertical: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxwaGEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaXBsYWIvbmd4LWNvbG9yLXBpY2tlci9zcmMvbGliL2NvbXBvbmVudHMvcGFydHMvYWxwaGEvYWxwaGEuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaXBsYWIvbmd4LWNvbG9yLXBpY2tlci9zcmMvbGliL2NvbXBvbmVudHMvcGFydHMvYWxwaGEvYWxwaGEuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNILFNBQVMsRUFDVCxLQUFLLEVBQ0wsWUFBWSxFQUNaLE1BQU0sRUFDTix1QkFBdUIsRUFHdkIsU0FBUyxFQUdaLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN2RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7OztBQVdwRCxNQUFNLE9BQU8sY0FBZSxTQUFRLGFBQWE7SUFhN0MsWUFBNkIsUUFBbUI7UUFDNUMsS0FBSyxFQUFFLENBQUM7UUFEaUIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQVB6QyxnQkFBVyxHQUFHLElBQUksWUFBWSxDQUFRLEtBQUssQ0FBQyxDQUFDO1FBSzVDLGVBQVUsR0FBWSxLQUFLLENBQUM7SUFJcEMsQ0FBQztJQUVELElBQ1csUUFBUSxDQUFDLEtBQWE7UUFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFDM0IsQ0FBQztJQUVEOzs7T0FHRztJQUNJLFdBQVcsQ0FBQyxPQUFzQjtRQUNyQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxhQUFhLEtBQUssT0FBTyxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUU7WUFDN0UsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNsQyxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzFDO0lBQ0wsQ0FBQztJQUVNLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtRQUN0QyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVsQyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2xDLE1BQU0sUUFBUSxHQUFHLElBQUksS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ25GLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRDs7T0FFRztJQUNLLHFCQUFxQixDQUFDLEtBQWE7UUFDdkMsTUFBTSxDQUFDLEdBQUcsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUN0QixNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNyRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFFRCxJQUFXLFFBQVE7UUFDZixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2xDLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQ3pELE9BQU8sc0JBQXNCLFdBQVcsVUFBVSxJQUFJLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLElBQUksZ0JBQWdCLElBQUksQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsSUFBSSxTQUFTLENBQUM7SUFDMUosQ0FBQzs7MkdBdkRRLGNBQWM7K0ZBQWQsY0FBYyxnVEN4QjNCLHVIQUN5RTsyRkR1QjVELGNBQWM7a0JBVDFCLFNBQVM7K0JBQ0ksaUJBQWlCLG1CQU1WLHVCQUF1QixDQUFDLE1BQU07Z0dBS3hDLEtBQUs7c0JBRFgsS0FBSztnQkFJQyxXQUFXO3NCQURqQixNQUFNO2dCQUlBLE9BQU87c0JBRGIsU0FBUzt1QkFBQyxTQUFTLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2dCQVUzQixRQUFRO3NCQURsQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgSW5wdXQsXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIE91dHB1dCxcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgICBPbkNoYW5nZXMsXG4gICAgRWxlbWVudFJlZixcbiAgICBWaWV3Q2hpbGQsXG4gICAgUmVuZGVyZXIyLFxuICAgIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb2xvciB9IGZyb20gJy4vLi4vLi4vLi4vaGVscGVycy9jb2xvci5jbGFzcyc7XG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi8uLi9iYXNlLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBgYWxwaGEtY29tcG9uZW50YCxcbiAgICB0ZW1wbGF0ZVVybDogYC4vYWxwaGEuY29tcG9uZW50Lmh0bWxgLFxuICAgIHN0eWxlVXJsczogW1xuICAgICAgICBgLi8uLi9iYXNlLnN0eWxlLnNjc3NgLFxuICAgICAgICBgLi9hbHBoYS5jb21wb25lbnQuc2Nzc2BcbiAgICBdLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEFscGhhQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBjb2xvcjogQ29sb3I7XG5cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgY29sb3JDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPENvbG9yPihmYWxzZSk7XG5cbiAgICBAVmlld0NoaWxkKCdwb2ludGVyJywgeyBzdGF0aWM6IHRydWUgfSlcbiAgICBwdWJsaWMgcG9pbnRlcjogRWxlbWVudFJlZjtcblxuICAgIHByaXZhdGUgaXNWZXJ0aWNhbDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHZlcnRpY2FsKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5pc1ZlcnRpY2FsID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBjb2xvciBjYW4gYmUgY2hhbmdlZCB0aHJvdWdoIGlucHV0c1xuICAgICAqIGFuZCB0aGVuIHdlIG5lZWQgdG8gbW92ZSBwb2ludGVyXG4gICAgICovXG4gICAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICAgICAgaWYgKGNoYW5nZXMuY29sb3IgJiYgY2hhbmdlcy5jb2xvci5wcmV2aW91c1ZhbHVlICE9PSBjaGFuZ2VzLmNvbG9yLmN1cnJlbnRWYWx1ZSkge1xuICAgICAgICAgICAgY29uc3QgaHN2YSA9IHRoaXMuY29sb3IuZ2V0SHN2YSgpO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VQb2ludGVyUG9zaXRpb24oaHN2YS5hbHBoYSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgbW92ZVBvaW50ZXIoeyB4LCB5LCBoZWlnaHQsIHdpZHRoIH0pOiB2b2lkIHtcbiAgICAgICAgY29uc3QgYWxwaGEgPSB0aGlzLmlzVmVydGljYWwgPyB5IC8gaGVpZ2h0IDogeCAvIHdpZHRoO1xuICAgICAgICB0aGlzLmNoYW5nZVBvaW50ZXJQb3NpdGlvbihhbHBoYSk7XG5cbiAgICAgICAgY29uc3QgaHN2YSA9IHRoaXMuY29sb3IuZ2V0SHN2YSgpO1xuICAgICAgICBjb25zdCBuZXdDb2xvciA9IG5ldyBDb2xvcigpLnNldEhzdmEoaHN2YS5odWUsIGhzdmEuc2F0dXJhdGlvbiwgaHN2YS52YWx1ZSwgYWxwaGEpO1xuICAgICAgICB0aGlzLmNvbG9yQ2hhbmdlLmVtaXQobmV3Q29sb3IpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGh1ZSB2YWx1ZSBpcyBpbiByYW5nZSBmcm9tIDAgdG8gMzYwwrBcbiAgICAgKi9cbiAgICBwcml2YXRlIGNoYW5nZVBvaW50ZXJQb3NpdGlvbihhbHBoYTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHggPSBhbHBoYSAqIDEwMDtcbiAgICAgICAgY29uc3Qgb3JpZW50YXRpb24gPSB0aGlzLmlzVmVydGljYWwgPyAndG9wJyA6ICdsZWZ0JztcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnBvaW50ZXIubmF0aXZlRWxlbWVudCwgb3JpZW50YXRpb24sIGAke3h9JWApO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZ3JhZGllbnQoKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgcmdiYSA9IHRoaXMuY29sb3IuZ2V0UmdiYSgpO1xuICAgICAgICBjb25zdCBvcmllbnRhdGlvbiA9IHRoaXMuaXNWZXJ0aWNhbCA/ICdib3R0b20nIDogJ3JpZ2h0JztcbiAgICAgICAgcmV0dXJuIGBsaW5lYXItZ3JhZGllbnQodG8gJHtvcmllbnRhdGlvbn0sIHJnYmEoJHtyZ2JhLnJlZH0sICR7cmdiYS5ncmVlbn0sICR7cmdiYS5ibHVlfSwgMCkgMCUsIHJnYigke3JnYmEucmVkfSwgJHtyZ2JhLmdyZWVufSwgJHtyZ2JhLmJsdWV9KSAxMDAlKWA7XG4gICAgfVxuXG59IiwiPGRpdiAjcG9pbnRlciBjbGFzcz1cInBvaW50ZXJcIj48L2Rpdj5cbjxkaXYgY2xhc3M9XCJncmFkaWVudC1jb2xvclwiIFtuZ1N0eWxlXT1cInsgJ2JhY2tncm91bmQnOiBncmFkaWVudCB9XCI+PC9kaXY+Il19