import * as tslib_1 from "tslib";
import { Component, Input, HostBinding, HostListener, Renderer2, ElementRef, ChangeDetectionStrategy, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Color } from './../../../helpers/color.class';
import { ColorPickerConfig } from './../../../services/color-picker.service';
var IndicatorComponent = /** @class */ (function () {
    function IndicatorComponent(pickerConfig, renderer, elementRef, document) {
        this.pickerConfig = pickerConfig;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.document = document;
        this.colorType = 'rgba';
    }
    Object.defineProperty(IndicatorComponent.prototype, "title", {
        get: function () {
            return this.pickerConfig ? this.pickerConfig.indicatorTitle : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IndicatorComponent.prototype, "backgroundColor", {
        get: function () {
            return this.color.toRgbaString();
        },
        enumerable: true,
        configurable: true
    });
    IndicatorComponent.prototype.onClick = function (event) {
        var input = this.renderer.createElement('input');
        this.renderer.setStyle(input, 'position', 'absolute');
        this.renderer.setStyle(input, 'top', '-100%');
        this.renderer.setStyle(input, 'left', '-100%');
        switch (this.colorType) {
            case 'hsla':
                input.value = this.color.toHslaString();
                break;
            case 'hex':
                input.value = this.color.toHexString();
                break;
            default:
                input.value = this.backgroundColor;
        }
        this.renderer.appendChild(this.elementRef.nativeElement, input);
        input.select();
        this.document.execCommand('copy');
        this.renderer.removeChild(this.elementRef.nativeElement, input);
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Color)
    ], IndicatorComponent.prototype, "color", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], IndicatorComponent.prototype, "colorType", void 0);
    tslib_1.__decorate([
        HostBinding('attr.title'),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [])
    ], IndicatorComponent.prototype, "title", null);
    tslib_1.__decorate([
        HostListener('click', ['$event']),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", void 0)
    ], IndicatorComponent.prototype, "onClick", null);
    IndicatorComponent = tslib_1.__decorate([
        Component({
            selector: "indicator-component",
            template: "<div [style.backgroundColor]=\"backgroundColor\">\n    <svg viewBox=\"0 0 48 48\">\n        <path d=\"M0 0h48v48h-48z\" fill=\"none\"/>\n        <path d=\"M32 2h-24c-2.21 0-4 1.79-4 4v28h4v-28h24v-4zm6 8h-22c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h22c2.21 0 4-1.79 4-4v-28c0-2.21-1.79-4-4-4zm0 32h-22v-28h22v28z\"/>\n    </svg>\n</div>",
            changeDetection: ChangeDetectionStrategy.OnPush,
            styles: [":host,:host ::ng-deep *{padding:0;margin:0;-webkit-box-sizing:border-box;box-sizing:border-box}", "@charset \"UTF-8\";:host{display:block;cursor:pointer;text-align:center;border:1px solid #e3e3e3;overflow:hidden;position:relative;height:20px;width:20px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAh0lEQVRYR+2W0QlAMQgD60zdfwOdqa8TmI/wQMr5K0I5bZLIzLOa2nt37VVVbd+dDx5obgCC3KBLwJ2ff4PnVidkf+ucIhw80HQaCLo3DMH3CRK3iFsmAWVl6hPNDwt8EvNE5q+YuEXcMgkonVM6SdyCoEvAnZ8v1Hjx817MilmxSUB5rdLJDycZgUAZUch/AAAAAElFTkSuQmCC)}:host>div{position:absolute;top:0;left:0;height:100%;width:100%;z-index:1}:host:hover:after{display:block;content:\"\u00A0\";position:absolute;top:0;left:0;height:100%;width:100%;background:#000;opacity:.2;z-index:2}:host svg{-webkit-transition:background-color 2s ease-in-out;transition:background-color 2s ease-in-out;opacity:0;fill:#fff;height:46%;vertical-align:-20%}:host:hover svg{opacity:1}"]
        }),
        tslib_1.__param(3, Inject(DOCUMENT)),
        tslib_1.__metadata("design:paramtypes", [ColorPickerConfig,
            Renderer2,
            ElementRef, Object])
    ], IndicatorComponent);
    return IndicatorComponent;
}());
export { IndicatorComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kaWNhdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BpcGxhYi9uZ3gtY29sb3ItcGlja2VyLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9wYXJ0cy9pbmRpY2F0b3IvaW5kaWNhdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLHVCQUF1QixFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwSSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBWTdFO0lBWUksNEJBQ3FCLFlBQStCLEVBQy9CLFFBQW1CLEVBQ25CLFVBQXNCLEVBQ0osUUFBUTtRQUgxQixpQkFBWSxHQUFaLFlBQVksQ0FBbUI7UUFDL0IsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ0osYUFBUSxHQUFSLFFBQVEsQ0FBQTtRQVh4QyxjQUFTLEdBQTRCLE1BQU0sQ0FBQztJQVluRCxDQUFDO0lBVEQsc0JBQVcscUNBQUs7YUFBaEI7WUFDSSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDckUsQ0FBQzs7O09BQUE7SUFTRCxzQkFBVywrQ0FBZTthQUExQjtZQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNyQyxDQUFDOzs7T0FBQTtJQUdNLG9DQUFPLEdBQWQsVUFBZSxLQUE4QjtRQUN6QyxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUUvQyxRQUFPLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbkIsS0FBSyxNQUFNO2dCQUNQLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztnQkFDeEMsTUFBTTtZQUNWLEtBQUssS0FBSztnQkFDTixLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ3ZDLE1BQU07WUFDVjtnQkFDSSxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7U0FDMUM7UUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNoRSxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBM0NEO1FBREMsS0FBSyxFQUFFOzBDQUNNLEtBQUs7cURBQUM7SUFHcEI7UUFEQyxLQUFLLEVBQUU7O3lEQUMyQztJQUduRDtRQURDLFdBQVcsQ0FBQyxZQUFZLENBQUM7OzttREFHekI7SUFjRDtRQURDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7OztxREFzQmpDO0lBN0NRLGtCQUFrQjtRQVQ5QixTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUscUJBQXFCO1lBQy9CLDJWQUF5QztZQUt6QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7U0FDbEQsQ0FBQztRQWlCTyxtQkFBQSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUE7aURBSGMsaUJBQWlCO1lBQ3JCLFNBQVM7WUFDUCxVQUFVO09BZmxDLGtCQUFrQixDQThDOUI7SUFBRCx5QkFBQztDQUFBLEFBOUNELElBOENDO1NBOUNZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tICcuLy4uLy4uLy4uL2hlbHBlcnMvY29sb3IuY2xhc3MnO1xuaW1wb3J0IHsgQ29sb3JQaWNrZXJDb25maWcgfSBmcm9tICcuLy4uLy4uLy4uL3NlcnZpY2VzL2NvbG9yLXBpY2tlci5zZXJ2aWNlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogYGluZGljYXRvci1jb21wb25lbnRgLFxuICAgIHRlbXBsYXRlVXJsOiBgLi9pbmRpY2F0b3IuY29tcG9uZW50Lmh0bWxgLFxuICAgIHN0eWxlVXJsczogW1xuICAgICAgICBgLi8uLi9iYXNlLnN0eWxlLnNjc3NgLFxuICAgICAgICBgLi9pbmRpY2F0b3IuY29tcG9uZW50LnNjc3NgXG4gICAgXSxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBJbmRpY2F0b3JDb21wb25lbnQge1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGNvbG9yOiBDb2xvcjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGNvbG9yVHlwZTogJ3JnYmEnIHwgJ2hleCcgfCAnaHNsYScgPSAncmdiYSc7XG5cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIudGl0bGUnKVxuICAgIHB1YmxpYyBnZXQgdGl0bGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBpY2tlckNvbmZpZyA/IHRoaXMucGlja2VyQ29uZmlnLmluZGljYXRvclRpdGxlIDogJyc7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgcGlja2VyQ29uZmlnOiBDb2xvclBpY2tlckNvbmZpZyxcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSByZW5kZXJlcjogUmVuZGVyZXIyLCBcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIHJlYWRvbmx5IGRvY3VtZW50KXtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGJhY2tncm91bmRDb2xvcigpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xvci50b1JnYmFTdHJpbmcoKTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gICAgcHVibGljIG9uQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGlucHV0LCAncG9zaXRpb24nLCAnYWJzb2x1dGUnKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShpbnB1dCwgJ3RvcCcsICctMTAwJScpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGlucHV0LCAnbGVmdCcsICctMTAwJScpO1xuXG4gICAgICAgIHN3aXRjaCh0aGlzLmNvbG9yVHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnaHNsYSc6XG4gICAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSB0aGlzLmNvbG9yLnRvSHNsYVN0cmluZygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgICAgICAgICBpbnB1dC52YWx1ZSA9IHRoaXMuY29sb3IudG9IZXhTdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSB0aGlzLmJhY2tncm91bmRDb2xvcjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGlucHV0KTtcbiAgICAgICAgaW5wdXQuc2VsZWN0KCk7XG4gICAgICAgIHRoaXMuZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgaW5wdXQpO1xuICAgIH1cbn1cbiJdfQ==