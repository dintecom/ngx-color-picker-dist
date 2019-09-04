import * as tslib_1 from "tslib";
import { Component, Input, EventEmitter, Output, ChangeDetectionStrategy, Inject, ElementRef, ViewChild, HostListener, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Color } from './../../../helpers/color.class';
import { BaseComponent } from './../base.component';
var AlphaComponent = /** @class */ (function (_super) {
    tslib_1.__extends(AlphaComponent, _super);
    function AlphaComponent(renderer, document, elementRef) {
        var _this = _super.call(this, document, elementRef, renderer) || this;
        _this.colorChange = new EventEmitter(false);
        _this.isVertical = false;
        return _this;
    }
    AlphaComponent.prototype.onClick = function (event) {
        this.onEventChange(event);
    };
    Object.defineProperty(AlphaComponent.prototype, "vertical", {
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
    AlphaComponent.prototype.ngOnChanges = function (changes) {
        if (changes.color && changes.color.previousValue !== changes.color.currentValue) {
            var hsva = this.color.getHsva();
            this.changePointerPosition(hsva.alpha);
        }
    };
    AlphaComponent.prototype.movePointer = function (_a) {
        var x = _a.x, y = _a.y, height = _a.height, width = _a.width;
        var alpha = this.isVertical ? y / height : x / width;
        this.changePointerPosition(alpha);
        var hsva = this.color.getHsva();
        var newColor = new Color().setHsva(hsva.hue, hsva.saturation, hsva.value, alpha);
        this.colorChange.emit(newColor);
    };
    /**
     * hue value is in range from 0 to 360°
     */
    AlphaComponent.prototype.changePointerPosition = function (alpha) {
        var x = alpha * 100;
        var orientation = this.isVertical ? 'top' : 'left';
        this.renderer.setStyle(this.pointer.nativeElement, orientation, x + "%");
    };
    Object.defineProperty(AlphaComponent.prototype, "gradient", {
        get: function () {
            var rgba = this.color.getRgba();
            var orientation = this.isVertical ? 'bottom' : 'right';
            return "linear-gradient(to " + orientation + ", rgba(" + rgba.red + ", " + rgba.green + ", " + rgba.blue + ", 0) 0%, rgb(" + rgba.red + ", " + rgba.green + ", " + rgba.blue + ") 100%)";
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Color)
    ], AlphaComponent.prototype, "color", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], AlphaComponent.prototype, "colorChange", void 0);
    tslib_1.__decorate([
        ViewChild('pointer', { static: true }),
        tslib_1.__metadata("design:type", ElementRef)
    ], AlphaComponent.prototype, "pointer", void 0);
    tslib_1.__decorate([
        HostListener('mousedown', ['$event']),
        HostListener('touchstart', ['$event']),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", void 0)
    ], AlphaComponent.prototype, "onClick", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], AlphaComponent.prototype, "vertical", null);
    AlphaComponent = tslib_1.__decorate([
        Component({
            selector: "alpha-component",
            template: "<div #pointer class=\"pointer\"></div>\n<div class=\"gradient-color\" [ngStyle]=\"{ 'background': gradient }\"></div>",
            changeDetection: ChangeDetectionStrategy.OnPush,
            styles: [":host,:host ::ng-deep *{padding:0;margin:0;-webkit-box-sizing:border-box;box-sizing:border-box}", ":host{display:block;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMUlEQVQ4T2NkYGAQYcAP3uCTZhw1gGGYhAGBZIA/nYDCgBDAm9BGDWAAJyRCgLaBCAAgXwixzAS0pgAAAABJRU5ErkJggg==);background-position:left center;height:12px;border-radius:2px;position:relative}:host([vertical]){width:12px;height:100px;background-position:center 0}.gradient-color{position:absolute;left:0;right:0;top:0;height:100%;z-index:1}.pointer{background:#fff;height:14px;width:14px;top:-1px;left:0;position:absolute;border-radius:50%;cursor:pointer;margin:0 0 0 -7px;z-index:2}:host([vertical]) .pointer{left:-1px;margin:-7px 0 0}"]
        }),
        tslib_1.__param(1, Inject(DOCUMENT)),
        tslib_1.__metadata("design:paramtypes", [Renderer2, Object, ElementRef])
    ], AlphaComponent);
    return AlphaComponent;
}(BaseComponent));
export { AlphaComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxwaGEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlwbGFiL25neC1jb2xvci1waWNrZXIvIiwic291cmNlcyI6WyJjb21wb25lbnRzL3BhcnRzL2FscGhhL2FscGhhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNILFNBQVMsRUFDVCxLQUFLLEVBQ0wsWUFBWSxFQUNaLE1BQU0sRUFDTix1QkFBdUIsRUFFdkIsTUFBTSxFQUNOLFVBQVUsRUFDVixTQUFTLEVBQ1QsWUFBWSxFQUNaLFNBQVMsRUFFWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQVdwRDtJQUFvQywwQ0FBYTtJQWE3Qyx3QkFBWSxRQUFtQixFQUFvQixRQUFRLEVBQUUsVUFBc0I7UUFBbkYsWUFDSSxrQkFBTSxRQUFRLEVBQUUsVUFBVSxFQUFFLFFBQVEsQ0FBQyxTQUN4QztRQVRNLGlCQUFXLEdBQUcsSUFBSSxZQUFZLENBQVEsS0FBSyxDQUFDLENBQUM7UUFLNUMsZ0JBQVUsR0FBWSxLQUFLLENBQUM7O0lBSXBDLENBQUM7SUFJTSxnQ0FBTyxHQUFkLFVBQWUsS0FBVTtRQUNyQixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFHRCxzQkFBVyxvQ0FBUTthQUFuQixVQUFvQixLQUFhO1lBQzdCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQzNCLENBQUM7OztPQUFBO0lBRUQ7OztPQUdHO0lBQ0ksb0NBQVcsR0FBbEIsVUFBbUIsT0FBc0I7UUFDckMsSUFBSSxPQUFPLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsYUFBYSxLQUFLLE9BQU8sQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFO1lBQzdFLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDbEMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMxQztJQUNMLENBQUM7SUFFTSxvQ0FBVyxHQUFsQixVQUFtQixFQUFxQjtZQUFwQixRQUFDLEVBQUUsUUFBQyxFQUFFLGtCQUFNLEVBQUUsZ0JBQUs7UUFDbkMsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUN2RCxJQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFbEMsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNsQyxJQUFNLFFBQVEsR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNuRixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQ7O09BRUc7SUFDSyw4Q0FBcUIsR0FBN0IsVUFBOEIsS0FBYTtRQUN2QyxJQUFNLENBQUMsR0FBRyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ3RCLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQ3JELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLFdBQVcsRUFBSyxDQUFDLE1BQUcsQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFFRCxzQkFBVyxvQ0FBUTthQUFuQjtZQUNJLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDbEMsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFDekQsT0FBTyx3QkFBc0IsV0FBVyxlQUFVLElBQUksQ0FBQyxHQUFHLFVBQUssSUFBSSxDQUFDLEtBQUssVUFBSyxJQUFJLENBQUMsSUFBSSxxQkFBZ0IsSUFBSSxDQUFDLEdBQUcsVUFBSyxJQUFJLENBQUMsS0FBSyxVQUFLLElBQUksQ0FBQyxJQUFJLFlBQVMsQ0FBQztRQUMxSixDQUFDOzs7T0FBQTtJQTFERDtRQURDLEtBQUssRUFBRTswQ0FDTSxLQUFLO2lEQUFDO0lBR3BCO1FBREMsTUFBTSxFQUFFOzt1REFDMkM7SUFHcEQ7UUFEQyxTQUFTLENBQUMsU0FBUyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDOzBDQUN2QixVQUFVO21EQUFDO0lBVTNCO1FBRkMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7OztpREFHdEM7SUFHRDtRQURDLEtBQUssRUFBRTs7O2tEQUdQO0lBMUJRLGNBQWM7UUFUMUIsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixpSUFBcUM7WUFLckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O1NBQ2xELENBQUM7UUFjb0MsbUJBQUEsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO2lEQUE1QixTQUFTLFVBQTBDLFVBQVU7T0FiMUUsY0FBYyxDQStEMUI7SUFBRCxxQkFBQztDQUFBLEFBL0RELENBQW9DLGFBQWEsR0ErRGhEO1NBL0RZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBJbnB1dCxcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgT3V0cHV0LFxuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICAgIE9uQ2hhbmdlcyxcbiAgICBJbmplY3QsXG4gICAgRWxlbWVudFJlZixcbiAgICBWaWV3Q2hpbGQsXG4gICAgSG9zdExpc3RlbmVyLFxuICAgIFJlbmRlcmVyMixcbiAgICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tICcuLy4uLy4uLy4uL2hlbHBlcnMvY29sb3IuY2xhc3MnO1xuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4vLi4vYmFzZS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogYGFscGhhLWNvbXBvbmVudGAsXG4gICAgdGVtcGxhdGVVcmw6IGAuL2FscGhhLmNvbXBvbmVudC5odG1sYCxcbiAgICBzdHlsZVVybHM6IFtcbiAgICAgICAgYC4vLi4vYmFzZS5zdHlsZS5zY3NzYCxcbiAgICAgICAgYC4vYWxwaGEuY29tcG9uZW50LnNjc3NgXG4gICAgXSxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBBbHBoYUNvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgY29sb3I6IENvbG9yO1xuXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIGNvbG9yQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxDb2xvcj4oZmFsc2UpO1xuXG4gICAgQFZpZXdDaGlsZCgncG9pbnRlcicsIHsgc3RhdGljOiB0cnVlIH0pXG4gICAgcHVibGljIHBvaW50ZXI6IEVsZW1lbnRSZWY7XG5cbiAgICBwcml2YXRlIGlzVmVydGljYWw6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyOiBSZW5kZXJlcjIsIEBJbmplY3QoRE9DVU1FTlQpIGRvY3VtZW50LCBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgICAgIHN1cGVyKGRvY3VtZW50LCBlbGVtZW50UmVmLCByZW5kZXJlcik7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignbW91c2Vkb3duJywgWyckZXZlbnQnXSlcbiAgICBASG9zdExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgWyckZXZlbnQnXSlcbiAgICBwdWJsaWMgb25DbGljayhldmVudDogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMub25FdmVudENoYW5nZShldmVudCk7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHZlcnRpY2FsKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5pc1ZlcnRpY2FsID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBjb2xvciBjYW4gYmUgY2hhbmdlZCB0aHJvdWdoIGlucHV0c1xuICAgICAqIGFuZCB0aGVuIHdlIG5lZWQgdG8gbW92ZSBwb2ludGVyXG4gICAgICovXG4gICAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICAgICAgaWYgKGNoYW5nZXMuY29sb3IgJiYgY2hhbmdlcy5jb2xvci5wcmV2aW91c1ZhbHVlICE9PSBjaGFuZ2VzLmNvbG9yLmN1cnJlbnRWYWx1ZSkge1xuICAgICAgICAgICAgY29uc3QgaHN2YSA9IHRoaXMuY29sb3IuZ2V0SHN2YSgpO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VQb2ludGVyUG9zaXRpb24oaHN2YS5hbHBoYSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgbW92ZVBvaW50ZXIoe3gsIHksIGhlaWdodCwgd2lkdGh9KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGFscGhhID0gdGhpcy5pc1ZlcnRpY2FsID8geSAvIGhlaWdodCA6IHggLyB3aWR0aDtcbiAgICAgICAgdGhpcy5jaGFuZ2VQb2ludGVyUG9zaXRpb24oYWxwaGEpO1xuXG4gICAgICAgIGNvbnN0IGhzdmEgPSB0aGlzLmNvbG9yLmdldEhzdmEoKTtcbiAgICAgICAgY29uc3QgbmV3Q29sb3IgPSBuZXcgQ29sb3IoKS5zZXRIc3ZhKGhzdmEuaHVlLCBoc3ZhLnNhdHVyYXRpb24sIGhzdmEudmFsdWUsIGFscGhhKTtcbiAgICAgICAgdGhpcy5jb2xvckNoYW5nZS5lbWl0KG5ld0NvbG9yKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBodWUgdmFsdWUgaXMgaW4gcmFuZ2UgZnJvbSAwIHRvIDM2MMKwXG4gICAgICovXG4gICAgcHJpdmF0ZSBjaGFuZ2VQb2ludGVyUG9zaXRpb24oYWxwaGE6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBjb25zdCB4ID0gYWxwaGEgKiAxMDA7XG4gICAgICAgIGNvbnN0IG9yaWVudGF0aW9uID0gdGhpcy5pc1ZlcnRpY2FsID8gJ3RvcCcgOiAnbGVmdCc7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5wb2ludGVyLm5hdGl2ZUVsZW1lbnQsIG9yaWVudGF0aW9uLCBgJHt4fSVgKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGdyYWRpZW50KCk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IHJnYmEgPSB0aGlzLmNvbG9yLmdldFJnYmEoKTtcbiAgICAgICAgY29uc3Qgb3JpZW50YXRpb24gPSB0aGlzLmlzVmVydGljYWwgPyAnYm90dG9tJyA6ICdyaWdodCc7XG4gICAgICAgIHJldHVybiBgbGluZWFyLWdyYWRpZW50KHRvICR7b3JpZW50YXRpb259LCByZ2JhKCR7cmdiYS5yZWR9LCAke3JnYmEuZ3JlZW59LCAke3JnYmEuYmx1ZX0sIDApIDAlLCByZ2IoJHtyZ2JhLnJlZH0sICR7cmdiYS5ncmVlbn0sICR7cmdiYS5ibHVlfSkgMTAwJSlgO1xuICAgIH1cblxufSJdfQ==