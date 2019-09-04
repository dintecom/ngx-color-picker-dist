import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef, HostBinding } from '@angular/core';
import { ColorPickerControl } from './../../helpers/control.class';
import { getValueByType } from './../../helpers/helper.functions';
var GithubPickerComponent = /** @class */ (function () {
    function GithubPickerComponent(cdr) {
        this.cdr = cdr;
        this.columns = 8;
        this.colorChange = new EventEmitter(false);
    }
    Object.defineProperty(GithubPickerComponent.prototype, "widht", {
        get: function () {
            return this.columns === 'auto' ? "auto" : 25 * this.columns + 12 + "px";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GithubPickerComponent.prototype, "columnsCount", {
        get: function () {
            return this.columns === 'auto' ? this.control.presets.length : this.columns;
        },
        enumerable: true,
        configurable: true
    });
    GithubPickerComponent.prototype.ngOnInit = function () {
        var _this = this;
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
        this.control.valueChanges.subscribe(function (value) {
            _this.cdr.markForCheck();
            _this.colorChange.emit(getValueByType(value, _this.control.initType));
        });
    };
    GithubPickerComponent.prototype.ngOnDestroy = function () {
        this.control.unsubscribe();
        this.cdr.detach();
    };
    GithubPickerComponent.prototype.ngOnChanges = function (changes) {
        if (this.color && this.control && getValueByType(this.control.value, this.control.initType) !== this.color) {
            this.control.setValueFrom(this.color);
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
            selector: "github-picker",
            template: "<color-presets-component \n    direction=\"down\"\n    [columns]=\"columnsCount\"\n    [(color)]=\"control.value\" \n    [colorPresets]=\"control.presets\"></color-presets-component>",
            changeDetection: ChangeDetectionStrategy.OnPush,
            styles: [":host,:host ::ng-deep *{padding:0;margin:0;-webkit-box-sizing:border-box;box-sizing:border-box}", "@charset \"UTF-8\";:host{display:block;background:#fff;border:1px solid rgba(0,0,0,.2);-webkit-box-shadow:rgba(0,0,0,.15) 0 3px 12px;box-shadow:rgba(0,0,0,.15) 0 3px 12px;border-radius:4px;padding:5px}:host ::ng-deep color-preset,:host ::ng-deep color-preset-sublist{width:25px;height:25px}:host ::ng-deep color-preset.selected:after,:host ::ng-deep color-preset:hover:after{display:block;content:\"\u00A0\";position:absolute;left:-1px;top:-1px;bottom:-1px;right:-1px;z-index:10;border:2px solid #fff;-webkit-box-shadow:rgba(0,0,0,.2) 0 0 5px 2px;box-shadow:rgba(0,0,0,.2) 0 0 5px 2px}"]
        }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef])
    ], GithubPickerComponent);
    return GithubPickerComponent;
}());
export { GithubPickerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l0aHViLXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaXBsYWIvbmd4LWNvbG9yLXBpY2tlci8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2l0aHViLXBpY2tlci9naXRodWItcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBNEIsdUJBQXVCLEVBQWEsaUJBQWlCLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdLLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQVdsRTtJQXNCSSwrQkFBNkIsR0FBc0I7UUFBdEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFiNUMsWUFBTyxHQUFvQixDQUFDLENBQUM7UUFHN0IsZ0JBQVcsR0FBOEIsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7SUFXeEUsQ0FBQztJQVQyQixzQkFBSSx3Q0FBSzthQUFUO1lBQ3hCLE9BQU8sSUFBSSxDQUFDLE9BQU8sS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxPQUFJLENBQUM7UUFDNUUsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVywrQ0FBWTthQUF2QjtZQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNoRixDQUFDOzs7T0FBQTtJQUtNLHdDQUFRLEdBQWY7UUFBQSxpQkF5QkM7UUF4QkcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDZixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksa0JBQWtCLEVBQUUsQ0FBQztTQUMzQztRQUVELElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNaLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN6QztRQUVELElBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxFQUFFO1lBQzNCOzs7ZUFHRztZQUNILElBQUksQ0FBQyxPQUFPO2lCQUNYLGVBQWUsQ0FBQztnQkFDYixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztnQkFDdEYsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7YUFDekYsQ0FBQyxDQUFDO1NBQ047UUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBQyxLQUFLO1lBQ3RDLEtBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDeEIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDeEUsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sMkNBQVcsR0FBbEI7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVNLDJDQUFXLEdBQWxCLFVBQW1CLE9BQXNCO1FBQ3JDLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDeEcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3pDO0lBQ0wsQ0FBQztJQTFERDtRQURDLEtBQUssRUFBRTs7d0RBQ2E7SUFHckI7UUFEQyxLQUFLLEVBQUU7MENBQ1Esa0JBQWtCOzBEQUFDO0lBR25DO1FBREMsS0FBSyxFQUFFOzswREFDNEI7SUFHcEM7UUFEQyxNQUFNLEVBQUU7MENBQ1csWUFBWTs4REFBd0M7SUFFNUM7UUFBM0IsV0FBVyxDQUFDLGFBQWEsQ0FBQzs7O3NEQUUxQjtJQWhCUSxxQkFBcUI7UUFUakMsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGVBQWU7WUFDekIsa01BQTZDO1lBSzdDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztTQUNsRCxDQUFDO2lEQXVCb0MsaUJBQWlCO09BdEIxQyxxQkFBcUIsQ0E4RGpDO0lBQUQsNEJBQUM7Q0FBQSxBQTlERCxJQThEQztTQTlEWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBPbkRlc3Ryb3ksIENoYW5nZURldGVjdG9yUmVmLCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29sb3JTdHJpbmcgfSBmcm9tICcuLy4uLy4uL2hlbHBlcnMvY29sb3IuY2xhc3MnO1xuaW1wb3J0IHsgQ29sb3JQaWNrZXJDb250cm9sIH0gZnJvbSAnLi8uLi8uLi9oZWxwZXJzL2NvbnRyb2wuY2xhc3MnO1xuaW1wb3J0IHsgZ2V0VmFsdWVCeVR5cGUgfSBmcm9tICcuLy4uLy4uL2hlbHBlcnMvaGVscGVyLmZ1bmN0aW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBgZ2l0aHViLXBpY2tlcmAsXG4gICAgdGVtcGxhdGVVcmw6IGAuL2dpdGh1Yi1waWNrZXIuY29tcG9uZW50Lmh0bWxgLFxuICAgIHN0eWxlVXJsczogW1xuICAgICAgICBgLi8uLi9wYXJ0cy9iYXNlLnN0eWxlLnNjc3NgLFxuICAgICAgICBgLi9naXRodWItcGlja2VyLmNvbXBvbmVudC5zY3NzYFxuICAgIF0sXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgR2l0aHViUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBjb2xvcjogc3RyaW5nO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgY29udHJvbDogQ29sb3JQaWNrZXJDb250cm9sO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgY29sdW1uczogbnVtYmVyIHwgJ2F1dG8nID0gODtcblxuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBjb2xvckNoYW5nZTogRXZlbnRFbWl0dGVyPENvbG9yU3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoZmFsc2UpO1xuXG4gICAgQEhvc3RCaW5kaW5nKCdzdHlsZS53aWR0aCcpIGdldCB3aWRodCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sdW1ucyA9PT0gJ2F1dG8nID8gYGF1dG9gIDogYCR7MjUgKiB0aGlzLmNvbHVtbnMgKyAxMn1weGA7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBjb2x1bW5zQ291bnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbHVtbnMgPT09ICdhdXRvJyA/IHRoaXMuY29udHJvbC5wcmVzZXRzLmxlbmd0aCA6IHRoaXMuY29sdW1ucztcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5jb250cm9sKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRyb2wgPSBuZXcgQ29sb3JQaWNrZXJDb250cm9sKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jb2xvcikge1xuICAgICAgICAgICAgdGhpcy5jb250cm9sLnNldFZhbHVlRnJvbSh0aGlzLmNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCF0aGlzLmNvbnRyb2wuaGFzUHJlc2V0cygpKSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIHNldCBjb2xvciBwcmVzZXRzXG4gICAgICAgICAgICAgKiBkZWZpbmVkIGJ5IGdpdGh1YiBjb2xvciBwaWNrZXIgY29tcG9uZW50XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMuY29udHJvbFxuICAgICAgICAgICAgLnNldENvbG9yUHJlc2V0cyhbXG4gICAgICAgICAgICAgICAgJyNiODAwMDAnLCAnI2RiM2UwMCcsICcjZmNjYjAwJywgJyMwMDhiMDInLCAnIzAwNmI3NicsICcjMTI3M2RlJywgJyMwMDRkY2YnLCAnIzUzMDBlYicsXG4gICAgICAgICAgICAgICAgJyNlYjk2OTQnLCAnI2ZhZDBjMycsICcjZmVmM2JkJywgJyNjMWUxYzUnLCAnI2JlZGFkYycsICcjYzRkZWY2JywgJyNiZWQzZjMnLCAnI2Q0YzRmYidcbiAgICAgICAgICAgIF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb250cm9sLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICAgIHRoaXMuY29sb3JDaGFuZ2UuZW1pdChnZXRWYWx1ZUJ5VHlwZSh2YWx1ZSwgdGhpcy5jb250cm9sLmluaXRUeXBlKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jb250cm9sLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMuY2RyLmRldGFjaCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmNvbG9yICYmIHRoaXMuY29udHJvbCAmJiBnZXRWYWx1ZUJ5VHlwZSh0aGlzLmNvbnRyb2wudmFsdWUsIHRoaXMuY29udHJvbC5pbml0VHlwZSkgIT09IHRoaXMuY29sb3IpIHtcbiAgICAgICAgICAgIHRoaXMuY29udHJvbC5zZXRWYWx1ZUZyb20odGhpcy5jb2xvcik7XG4gICAgICAgIH1cbiAgICB9XG59Il19