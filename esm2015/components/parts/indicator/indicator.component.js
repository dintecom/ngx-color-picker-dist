import * as tslib_1 from "tslib";
import { Component, Input, HostBinding, HostListener, Renderer2, ElementRef, ChangeDetectionStrategy, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Color } from './../../../helpers/color.class';
import { ColorPickerConfig } from './../../../services/color-picker.service';
let IndicatorComponent = class IndicatorComponent {
    constructor(pickerConfig, renderer, elementRef, document) {
        this.pickerConfig = pickerConfig;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.document = document;
        this.colorType = 'rgba';
    }
    get title() {
        return this.pickerConfig ? this.pickerConfig.indicatorTitle : '';
    }
    get backgroundColor() {
        return this.color.toRgbaString();
    }
    onClick(event) {
        const input = this.renderer.createElement('input');
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
    }
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
        selector: `indicator-component`,
        template: "<div [style.backgroundColor]=\"backgroundColor\">\n    <svg viewBox=\"0 0 48 48\">\n        <path d=\"M0 0h48v48h-48z\" fill=\"none\"/>\n        <path d=\"M32 2h-24c-2.21 0-4 1.79-4 4v28h4v-28h24v-4zm6 8h-22c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h22c2.21 0 4-1.79 4-4v-28c0-2.21-1.79-4-4-4zm0 32h-22v-28h22v28z\"/>\n    </svg>\n</div>",
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [":host,:host ::ng-deep *{padding:0;margin:0;-webkit-box-sizing:border-box;box-sizing:border-box}", "@charset \"UTF-8\";:host{display:block;cursor:pointer;text-align:center;border:1px solid #e3e3e3;overflow:hidden;position:relative;height:20px;width:20px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAh0lEQVRYR+2W0QlAMQgD60zdfwOdqa8TmI/wQMr5K0I5bZLIzLOa2nt37VVVbd+dDx5obgCC3KBLwJ2ff4PnVidkf+ucIhw80HQaCLo3DMH3CRK3iFsmAWVl6hPNDwt8EvNE5q+YuEXcMgkonVM6SdyCoEvAnZ8v1Hjx817MilmxSUB5rdLJDycZgUAZUch/AAAAAElFTkSuQmCC)}:host>div{position:absolute;top:0;left:0;height:100%;width:100%;z-index:1}:host:hover:after{display:block;content:\"\u00A0\";position:absolute;top:0;left:0;height:100%;width:100%;background:#000;opacity:.2;z-index:2}:host svg{-webkit-transition:background-color 2s ease-in-out;transition:background-color 2s ease-in-out;opacity:0;fill:#fff;height:46%;vertical-align:-20%}:host:hover svg{opacity:1}"]
    }),
    tslib_1.__param(3, Inject(DOCUMENT)),
    tslib_1.__metadata("design:paramtypes", [ColorPickerConfig,
        Renderer2,
        ElementRef, Object])
], IndicatorComponent);
export { IndicatorComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kaWNhdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BpcGxhYi9uZ3gtY29sb3ItcGlja2VyLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9wYXJ0cy9pbmRpY2F0b3IvaW5kaWNhdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLHVCQUF1QixFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwSSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBWTdFLElBQWEsa0JBQWtCLEdBQS9CLE1BQWEsa0JBQWtCO0lBWTNCLFlBQ3FCLFlBQStCLEVBQy9CLFFBQW1CLEVBQ25CLFVBQXNCLEVBQ0osUUFBUTtRQUgxQixpQkFBWSxHQUFaLFlBQVksQ0FBbUI7UUFDL0IsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ0osYUFBUSxHQUFSLFFBQVEsQ0FBQTtRQVh4QyxjQUFTLEdBQTRCLE1BQU0sQ0FBQztJQVluRCxDQUFDO0lBVEQsSUFBVyxLQUFLO1FBQ1osT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3JFLENBQUM7SUFTRCxJQUFXLGVBQWU7UUFDdEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFHTSxPQUFPLENBQUMsS0FBOEI7UUFDekMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFL0MsUUFBTyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ25CLEtBQUssTUFBTTtnQkFDUCxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQ3hDLE1BQU07WUFDVixLQUFLLEtBQUs7Z0JBQ04sS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUN2QyxNQUFNO1lBQ1Y7Z0JBQ0ksS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO1NBQzFDO1FBRUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDaEUsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDcEUsQ0FBQztDQUNKLENBQUE7QUE1Q0c7SUFEQyxLQUFLLEVBQUU7c0NBQ00sS0FBSztpREFBQztBQUdwQjtJQURDLEtBQUssRUFBRTs7cURBQzJDO0FBR25EO0lBREMsV0FBVyxDQUFDLFlBQVksQ0FBQzs7OytDQUd6QjtBQWNEO0lBREMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzs7O2lEQXNCakM7QUE3Q1Esa0JBQWtCO0lBVDlCLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxxQkFBcUI7UUFDL0IsMlZBQXlDO1FBS3pDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztLQUNsRCxDQUFDO0lBaUJPLG1CQUFBLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQTs2Q0FIYyxpQkFBaUI7UUFDckIsU0FBUztRQUNQLFVBQVU7R0FmbEMsa0JBQWtCLENBOEM5QjtTQTlDWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbG9yIH0gZnJvbSAnLi8uLi8uLi8uLi9oZWxwZXJzL2NvbG9yLmNsYXNzJztcbmltcG9ydCB7IENvbG9yUGlja2VyQ29uZmlnIH0gZnJvbSAnLi8uLi8uLi8uLi9zZXJ2aWNlcy9jb2xvci1waWNrZXIuc2VydmljZSc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IGBpbmRpY2F0b3ItY29tcG9uZW50YCxcbiAgICB0ZW1wbGF0ZVVybDogYC4vaW5kaWNhdG9yLmNvbXBvbmVudC5odG1sYCxcbiAgICBzdHlsZVVybHM6IFtcbiAgICAgICAgYC4vLi4vYmFzZS5zdHlsZS5zY3NzYCxcbiAgICAgICAgYC4vaW5kaWNhdG9yLmNvbXBvbmVudC5zY3NzYFxuICAgIF0sXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgSW5kaWNhdG9yQ29tcG9uZW50IHtcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBjb2xvcjogQ29sb3I7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBjb2xvclR5cGU6ICdyZ2JhJyB8ICdoZXgnIHwgJ2hzbGEnID0gJ3JnYmEnO1xuXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLnRpdGxlJylcbiAgICBwdWJsaWMgZ2V0IHRpdGxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5waWNrZXJDb25maWcgPyB0aGlzLnBpY2tlckNvbmZpZy5pbmRpY2F0b3JUaXRsZSA6ICcnO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IHBpY2tlckNvbmZpZzogQ29sb3JQaWNrZXJDb25maWcsXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgcmVuZGVyZXI6IFJlbmRlcmVyMiwgXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSByZWFkb25seSBkb2N1bWVudCl7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBiYWNrZ3JvdW5kQ29sb3IoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sb3IudG9SZ2JhU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICAgIHB1YmxpYyBvbkNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCkge1xuICAgICAgICBjb25zdCBpbnB1dCA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShpbnB1dCwgJ3Bvc2l0aW9uJywgJ2Fic29sdXRlJyk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoaW5wdXQsICd0b3AnLCAnLTEwMCUnKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShpbnB1dCwgJ2xlZnQnLCAnLTEwMCUnKTtcblxuICAgICAgICBzd2l0Y2godGhpcy5jb2xvclR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2hzbGEnOlxuICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlID0gdGhpcy5jb2xvci50b0hzbGFTdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSB0aGlzLmNvbG9yLnRvSGV4U3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlID0gdGhpcy5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBpbnB1dCk7XG4gICAgICAgIGlucHV0LnNlbGVjdCgpO1xuICAgICAgICB0aGlzLmRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5Jyk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGlucHV0KTtcbiAgICB9XG59XG4iXX0=