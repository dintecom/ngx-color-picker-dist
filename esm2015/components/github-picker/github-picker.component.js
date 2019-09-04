import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef, HostBinding } from '@angular/core';
import { ColorPickerControl } from './../../helpers/control.class';
import { getValueByType } from './../../helpers/helper.functions';
let GithubPickerComponent = class GithubPickerComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.columns = 8;
        this.colorChange = new EventEmitter(false);
    }
    get widht() {
        return this.columns === 'auto' ? `auto` : `${25 * this.columns + 12}px`;
    }
    get columnsCount() {
        return this.columns === 'auto' ? this.control.presets.length : this.columns;
    }
    ngOnInit() {
        if (!this.control) {
            this.control = new ColorPickerControl();
        }
        if (this.color) {
            this.control.setValueFrom(this.color);
        }
        if (!this.control.hasPresets()) {
            /**
             * set color presets
             * defined by github color picker component
             */
            this.control
                .setColorPresets([
                '#b80000', '#db3e00', '#fccb00', '#008b02', '#006b76', '#1273de', '#004dcf', '#5300eb',
                '#eb9694', '#fad0c3', '#fef3bd', '#c1e1c5', '#bedadc', '#c4def6', '#bed3f3', '#d4c4fb'
            ]);
        }
        this.control.valueChanges.subscribe((value) => {
            this.cdr.markForCheck();
            this.colorChange.emit(getValueByType(value, this.control.initType));
        });
    }
    ngOnDestroy() {
        this.control.unsubscribe();
        this.cdr.detach();
    }
    ngOnChanges(changes) {
        if (this.color && this.control && getValueByType(this.control.value, this.control.initType) !== this.color) {
            this.control.setValueFrom(this.color);
        }
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], GithubPickerComponent.prototype, "color", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", ColorPickerControl)
], GithubPickerComponent.prototype, "control", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], GithubPickerComponent.prototype, "columns", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], GithubPickerComponent.prototype, "colorChange", void 0);
tslib_1.__decorate([
    HostBinding('style.width'),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [])
], GithubPickerComponent.prototype, "widht", null);
GithubPickerComponent = tslib_1.__decorate([
    Component({
        selector: `github-picker`,
        template: "<color-presets-component \n    direction=\"down\"\n    [columns]=\"columnsCount\"\n    [(color)]=\"control.value\" \n    [colorPresets]=\"control.presets\"></color-presets-component>",
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [":host,:host ::ng-deep *{padding:0;margin:0;-webkit-box-sizing:border-box;box-sizing:border-box}", "@charset \"UTF-8\";:host{display:block;background:#fff;border:1px solid rgba(0,0,0,.2);-webkit-box-shadow:rgba(0,0,0,.15) 0 3px 12px;box-shadow:rgba(0,0,0,.15) 0 3px 12px;border-radius:4px;padding:5px}:host ::ng-deep color-preset,:host ::ng-deep color-preset-sublist{width:25px;height:25px}:host ::ng-deep color-preset.selected:after,:host ::ng-deep color-preset:hover:after{display:block;content:\"\u00A0\";position:absolute;left:-1px;top:-1px;bottom:-1px;right:-1px;z-index:10;border:2px solid #fff;-webkit-box-shadow:rgba(0,0,0,.2) 0 0 5px 2px;box-shadow:rgba(0,0,0,.2) 0 0 5px 2px}"]
    }),
    tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef])
], GithubPickerComponent);
export { GithubPickerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l0aHViLXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaXBsYWIvbmd4LWNvbG9yLXBpY2tlci8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2l0aHViLXBpY2tlci9naXRodWItcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBNEIsdUJBQXVCLEVBQWEsaUJBQWlCLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdLLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQVdsRSxJQUFhLHFCQUFxQixHQUFsQyxNQUFhLHFCQUFxQjtJQXNCOUIsWUFBNkIsR0FBc0I7UUFBdEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFiNUMsWUFBTyxHQUFvQixDQUFDLENBQUM7UUFHN0IsZ0JBQVcsR0FBOEIsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7SUFXeEUsQ0FBQztJQVQyQixJQUFJLEtBQUs7UUFDakMsT0FBTyxJQUFJLENBQUMsT0FBTyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsSUFBSSxDQUFDO0lBQzVFLENBQUM7SUFFRCxJQUFXLFlBQVk7UUFDbkIsT0FBTyxJQUFJLENBQUMsT0FBTyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ2hGLENBQUM7SUFLTSxRQUFRO1FBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDZixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksa0JBQWtCLEVBQUUsQ0FBQztTQUMzQztRQUVELElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNaLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN6QztRQUVELElBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxFQUFFO1lBQzNCOzs7ZUFHRztZQUNILElBQUksQ0FBQyxPQUFPO2lCQUNYLGVBQWUsQ0FBQztnQkFDYixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztnQkFDdEYsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7YUFDekYsQ0FBQyxDQUFDO1NBQ047UUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUMxQyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3hFLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLFdBQVc7UUFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVNLFdBQVcsQ0FBQyxPQUFzQjtRQUNyQyxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ3hHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN6QztJQUNMLENBQUM7Q0FDSixDQUFBO0FBM0RHO0lBREMsS0FBSyxFQUFFOztvREFDYTtBQUdyQjtJQURDLEtBQUssRUFBRTtzQ0FDUSxrQkFBa0I7c0RBQUM7QUFHbkM7SUFEQyxLQUFLLEVBQUU7O3NEQUM0QjtBQUdwQztJQURDLE1BQU0sRUFBRTtzQ0FDVyxZQUFZOzBEQUF3QztBQUU1QztJQUEzQixXQUFXLENBQUMsYUFBYSxDQUFDOzs7a0RBRTFCO0FBaEJRLHFCQUFxQjtJQVRqQyxTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsZUFBZTtRQUN6QixrTUFBNkM7UUFLN0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O0tBQ2xELENBQUM7NkNBdUJvQyxpQkFBaUI7R0F0QjFDLHFCQUFxQixDQThEakM7U0E5RFkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgT25EZXN0cm95LCBDaGFuZ2VEZXRlY3RvclJlZiwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbG9yU3RyaW5nIH0gZnJvbSAnLi8uLi8uLi9oZWxwZXJzL2NvbG9yLmNsYXNzJztcbmltcG9ydCB7IENvbG9yUGlja2VyQ29udHJvbCB9IGZyb20gJy4vLi4vLi4vaGVscGVycy9jb250cm9sLmNsYXNzJztcbmltcG9ydCB7IGdldFZhbHVlQnlUeXBlIH0gZnJvbSAnLi8uLi8uLi9oZWxwZXJzL2hlbHBlci5mdW5jdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogYGdpdGh1Yi1waWNrZXJgLFxuICAgIHRlbXBsYXRlVXJsOiBgLi9naXRodWItcGlja2VyLmNvbXBvbmVudC5odG1sYCxcbiAgICBzdHlsZVVybHM6IFtcbiAgICAgICAgYC4vLi4vcGFydHMvYmFzZS5zdHlsZS5zY3NzYCxcbiAgICAgICAgYC4vZ2l0aHViLXBpY2tlci5jb21wb25lbnQuc2Nzc2BcbiAgICBdLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEdpdGh1YlBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgY29sb3I6IHN0cmluZztcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGNvbnRyb2w6IENvbG9yUGlja2VyQ29udHJvbDtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGNvbHVtbnM6IG51bWJlciB8ICdhdXRvJyA9IDg7XG5cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgY29sb3JDaGFuZ2U6IEV2ZW50RW1pdHRlcjxDb2xvclN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKGZhbHNlKTtcblxuICAgIEBIb3N0QmluZGluZygnc3R5bGUud2lkdGgnKSBnZXQgd2lkaHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbHVtbnMgPT09ICdhdXRvJyA/IGBhdXRvYCA6IGAkezI1ICogdGhpcy5jb2x1bW5zICsgMTJ9cHhgO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgY29sdW1uc0NvdW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2x1bW5zID09PSAnYXV0bycgPyB0aGlzLmNvbnRyb2wucHJlc2V0cy5sZW5ndGggOiB0aGlzLmNvbHVtbnM7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuY29udHJvbCkge1xuICAgICAgICAgICAgdGhpcy5jb250cm9sID0gbmV3IENvbG9yUGlja2VyQ29udHJvbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY29sb3IpIHtcbiAgICAgICAgICAgIHRoaXMuY29udHJvbC5zZXRWYWx1ZUZyb20odGhpcy5jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZighdGhpcy5jb250cm9sLmhhc1ByZXNldHMoKSkge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBzZXQgY29sb3IgcHJlc2V0c1xuICAgICAgICAgICAgICogZGVmaW5lZCBieSBnaXRodWIgY29sb3IgcGlja2VyIGNvbXBvbmVudFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xcbiAgICAgICAgICAgIC5zZXRDb2xvclByZXNldHMoW1xuICAgICAgICAgICAgICAgICcjYjgwMDAwJywgJyNkYjNlMDAnLCAnI2ZjY2IwMCcsICcjMDA4YjAyJywgJyMwMDZiNzYnLCAnIzEyNzNkZScsICcjMDA0ZGNmJywgJyM1MzAwZWInLFxuICAgICAgICAgICAgICAgICcjZWI5Njk0JywgJyNmYWQwYzMnLCAnI2ZlZjNiZCcsICcjYzFlMWM1JywgJyNiZWRhZGMnLCAnI2M0ZGVmNicsICcjYmVkM2YzJywgJyNkNGM0ZmInXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29udHJvbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICAgICB0aGlzLmNvbG9yQ2hhbmdlLmVtaXQoZ2V0VmFsdWVCeVR5cGUodmFsdWUsIHRoaXMuY29udHJvbC5pbml0VHlwZSkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY29udHJvbC51bnN1YnNjcmliZSgpO1xuICAgICAgICB0aGlzLmNkci5kZXRhY2goKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5jb2xvciAmJiB0aGlzLmNvbnRyb2wgJiYgZ2V0VmFsdWVCeVR5cGUodGhpcy5jb250cm9sLnZhbHVlLCB0aGlzLmNvbnRyb2wuaW5pdFR5cGUpICE9PSB0aGlzLmNvbG9yKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRyb2wuc2V0VmFsdWVGcm9tKHRoaXMuY29sb3IpO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ==