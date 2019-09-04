import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ColorPickerControl } from './../../helpers/control.class';
import { getValueByType } from './../../helpers/helper.functions';
var SwatchesPickerComponent = /** @class */ (function () {
    function SwatchesPickerComponent(cdr) {
        this.cdr = cdr;
        this.colorChange = new EventEmitter(false);
        this.control = new ColorPickerControl();
        this.childControl = new ColorPickerControl();
        this.mapColors = {
            '#E6315B': [
                '#fc8da7', '#fa7d9a', '#f56484', '#f04a71', '#e82c58', '#e31746', '#de0235',
                '#d60234', '#d10232', '#c70230', '#b8022c', '#ab0229', '#9c0225', '#8f0122',
                '#8c0122', '#82011f', '#78011b', '#690117', '#5c0012', '#4f0010', '#42000c'
            ],
            '#793183': [
                '#ef8dfc', '#eb7dfa', '#e664f5', '#dc4af0', '#d22ce8', '#cb17e3', '#c402de',
                '#c002d9', '#bb02d4', '#b002c7', '#a202b8', '#9702ab', '#8a029c', '#7e018f',
                '#7a018a', '#730182', '#6c0178', '#5e0169', '#54015c', '#49014f', '#3d0142'
            ],
            '#009DE7': [
                '#8dd9fc', '#7dd2fa', '#64c7f5', '#4abbf0', '#2cade8', '#17a2e3', '#0298de',
                '#0295d9', '#0291d4', '#0289c7', '#027eb8', '#0275ab', '#026b9c', '#01628f',
                '#015f8a', '#015982', '#015278', '#014869', '#013f5c', '#01364f', '#012e42'
            ],
            '#00B59C': [
                '#8dfeea', '#7dfbe4', '#63f4db', '#4befd2', '#2de7c6', '#16e2be', '#03deb7',
                '#01ddb6', '#01d4ae', '#01c7a4', '#01b897', '#01aa8b', '#019b80', '#019076',
                '#018c73', '#01836c', '#017763', '#016857', '#005c4e', '#005044', '#004239'
            ],
            '#FFCE00': [
                '#fce68d', '#fae17d', '#f5da64', '#f0cf4a', '#e8c22c', '#e5bc17', '#deb202',
                '#deb100', '#d4aa02', '#c7a002', '#b89302', '#ab8902', '#9c7d02', '#8f7301',
                '#8c7001', '#826801', '#786201', '#695601', '#5c4b00', '#4f4100', '#423700'
            ],
            '#FF4A21': [
                '#fca28d', '#fa947d', '#f57f64', '#f0694a', '#e84f2c', '#e33c17', '#de2a02',
                '#d92a02', '#d42902', '#c72602', '#b82302', '#ab2102', '#9c1e02', '#8f1b01',
                '#8a1a01', '#821901', '#781701', '#691300', '#5c1100', '#4f0e00', '#420c00'
            ],
            '#D6D5D6': [
                '#fff', '#f2f2f2', '#e5e5e5', '#d9d9d9', '#cccccc', '#bfbfbf', '#b3b3b3',
                '#a6a6a6', '#999999', '#8c8c8c', '#808080', '#737373', '#666666', '#595959',
                '#4d4d4d', '#424242', '#363636', '#262626', '#1a1a1a', '#0f0f0f', '#000'
            ]
        };
    }
    SwatchesPickerComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.color) {
            this.childControl.setValueFrom(this.color);
        }
        else {
            this.control.setValueFrom('#E6315B');
        }
        /**
         * set color presets
         * defined by swatches color picker component
         */
        this.control.setColorPresets([
            '#e6315b', '#793183', '#009de7', '#00b59c', '#ffce00', '#ff4a21', '#d6d5d6'
        ]);
        /**
         * initially open first group
         */
        this.childControl.setColorPresets(this.mapColors['#E6315B']);
        this.childControl.valueChanges.subscribe(function (value) {
            _this.colorChange.emit(getValueByType(value, _this.childControl.initType));
        });
        this.control.valueChanges.subscribe(function (value) {
            _this.cdr.markForCheck();
            var presets = _this.mapColors[value.toHexString()];
            if (presets) {
                _this.childControl.setColorPresets(presets);
            }
            _this.colorChange.emit(getValueByType(_this.childControl.value, _this.childControl.initType));
        });
    };
    SwatchesPickerComponent.prototype.ngOnDestroy = function () {
        this.control.unsubscribe();
        this.childControl.unsubscribe();
        this.cdr.detach();
    };
    SwatchesPickerComponent.prototype.ngOnChanges = function (changes) {
        if (this.color && this.control && getValueByType(this.control.value, this.control.initType) !== this.color) {
            this.childControl.setValueFrom(this.color);
        }
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], SwatchesPickerComponent.prototype, "color", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], SwatchesPickerComponent.prototype, "colorChange", void 0);
    SwatchesPickerComponent = tslib_1.__decorate([
        Component({
            selector: "swatches-picker",
            template: "<color-presets-component \n    [columns]=\"7\"\n    direction=\"down\"\n    [(color)]=\"control.value\" \n    [colorPresets]=\"control.presets\"></color-presets-component>\n<color-presets-component\n    class=\"child-list\"\n    *ngIf=\"childControl.presets.length\"\n    [columns]=\"7\"\n    direction=\"down\"\n    [(color)]=\"childControl.value\" \n    [colorPresets]=\"childControl.presets\"></color-presets-component>",
            changeDetection: ChangeDetectionStrategy.OnPush,
            styles: [":host,:host ::ng-deep *{padding:0;margin:0;-webkit-box-sizing:border-box;box-sizing:border-box}", "@charset \"UTF-8\";:host{display:block;background:#fff;width:224px;border:1px solid rgba(0,0,0,.2);-webkit-box-shadow:rgba(0,0,0,.3) 0 0 2px;box-shadow:rgba(0,0,0,.3) 0 0 2px;border-radius:4px;padding:6px}:host ::ng-deep color-preset,:host ::ng-deep color-preset-sublist{width:30px;height:30px}:host ::ng-deep color-preset.selected:after,:host ::ng-deep color-preset:hover:after{display:block;content:\"\u00A0\";position:absolute;left:3px;top:3px;bottom:3px;right:3px;z-index:10;border:3px solid #fff;-webkit-box-shadow:rgba(0,0,0,.2) 0 0 5px 2px;box-shadow:rgba(0,0,0,.2) 0 0 5px 2px}:host ::ng-deep .row:first-child color-preset-sublist:first-child,:host ::ng-deep .row:first-child color-preset:first-child{border-radius:4px 0 0 4px}:host ::ng-deep .row.last color-preset-sublist.last,:host ::ng-deep .row.last color-preset.last{border-radius:0 4px 4px 0}:host ::ng-deep .child-list .row.first color-preset-sublist.first,:host ::ng-deep .child-list .row.first color-preset.first{border-radius:4px 0 0}:host ::ng-deep .child-list .row.first color-preset-sublist.last,:host ::ng-deep .child-list .row.first color-preset.last{border-radius:0 4px 0 0}:host ::ng-deep .child-list .row.last color-preset-sublist.first,:host ::ng-deep .child-list .row.last color-preset.first{border-radius:0 0 0 4px}:host ::ng-deep .child-list .row.last color-preset-sublist.last,:host ::ng-deep .child-list .row.last color-preset.last{border-radius:0 0 4px}:host ::ng-deep .child-list{margin-top:6px;border-top:1px solid #e5e5e5;padding:6px 0 0}:host ::ng-deep .child-list color-preset.selected:after,:host ::ng-deep .child-list color-preset:hover:after{content:\"\u2714\";font-size:18px;color:#fff;border:0;left:0;top:0;bottom:0;right:0;line-height:30px;-webkit-box-shadow:none;box-shadow:none;text-align:center}"]
        }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef])
    ], SwatchesPickerComponent);
    return SwatchesPickerComponent;
}());
export { SwatchesPickerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dhdGNoZXMtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BpcGxhYi9uZ3gtY29sb3ItcGlja2VyLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9zd2F0Y2hlcy1waWNrZXIvc3dhdGNoZXMtcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNILFNBQVMsRUFFVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFFWix1QkFBdUIsRUFFdkIsaUJBQWlCLEVBRXBCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQVdsRTtJQWlESSxpQ0FBNkIsR0FBc0I7UUFBdEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUEzQzVDLGdCQUFXLEdBQThCLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWpFLFlBQU8sR0FBdUIsSUFBSSxrQkFBa0IsRUFBRSxDQUFDO1FBQ3ZELGlCQUFZLEdBQXVCLElBQUksa0JBQWtCLEVBQUUsQ0FBQztRQUUzRCxjQUFTLEdBQUc7WUFDaEIsU0FBUyxFQUFFO2dCQUNQLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7Z0JBQzNFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7Z0JBQzNFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7YUFDOUU7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztnQkFDM0UsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztnQkFDM0UsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUzthQUM5RTtZQUNELFNBQVMsRUFBRTtnQkFDUCxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTO2dCQUMzRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTO2dCQUMzRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTO2FBQzlFO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7Z0JBQzNFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7Z0JBQzNFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7YUFDOUU7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztnQkFDM0UsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztnQkFDM0UsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUzthQUM5RTtZQUNELFNBQVMsRUFBRTtnQkFDUCxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFB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QUM5QztJQUNMLENBQUM7SUE3RkQ7UUFEQyxLQUFLLEVBQUU7OzBEQUNhO0lBR3JCO1FBREMsTUFBTSxFQUFFOzBDQUNXLFlBQVk7Z0VBQXdDO0lBTi9ELHVCQUF1QjtRQVRuQyxTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLGtiQUErQztZQUsvQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7U0FDbEQsQ0FBQztpREFrRG9DLGlCQUFpQjtPQWpEMUMsdUJBQXVCLENBaUduQztJQUFELDhCQUFDO0NBQUEsQUFqR0QsSUFpR0M7U0FqR1ksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgT25Jbml0LFxuICAgIElucHV0LFxuICAgIE91dHB1dCxcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgU2ltcGxlQ2hhbmdlcyxcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgICBPbkRlc3Ryb3ksXG4gICAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgT25DaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29sb3JTdHJpbmcgfSBmcm9tICcuLy4uLy4uL2hlbHBlcnMvY29sb3IuY2xhc3MnO1xuaW1wb3J0IHsgQ29sb3JQaWNrZXJDb250cm9sIH0gZnJvbSAnLi8uLi8uLi9oZWxwZXJzL2NvbnRyb2wuY2xhc3MnO1xuaW1wb3J0IHsgZ2V0VmFsdWVCeVR5cGUgfSBmcm9tICcuLy4uLy4uL2hlbHBlcnMvaGVscGVyLmZ1bmN0aW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBgc3dhdGNoZXMtcGlja2VyYCxcbiAgICB0ZW1wbGF0ZVVybDogYC4vc3dhdGNoZXMtcGlja2VyLmNvbXBvbmVudC5odG1sYCxcbiAgICBzdHlsZVVybHM6IFtcbiAgICAgICAgYC4vLi4vcGFydHMvYmFzZS5zdHlsZS5zY3NzYCxcbiAgICAgICAgYC4vc3dhdGNoZXMtcGlja2VyLmNvbXBvbmVudC5zY3NzYFxuICAgIF0sXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgU3dhdGNoZXNQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGNvbG9yOiBzdHJpbmc7XG5cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgY29sb3JDaGFuZ2U6IEV2ZW50RW1pdHRlcjxDb2xvclN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKGZhbHNlKTtcblxuICAgIHB1YmxpYyBjb250cm9sOiBDb2xvclBpY2tlckNvbnRyb2wgPSBuZXcgQ29sb3JQaWNrZXJDb250cm9sKCk7XG4gICAgcHVibGljIGNoaWxkQ29udHJvbDogQ29sb3JQaWNrZXJDb250cm9sID0gbmV3IENvbG9yUGlja2VyQ29udHJvbCgpO1xuXG4gICAgcHJpdmF0ZSBtYXBDb2xvcnMgPSB7XG4gICAgICAgICcjRTYzMTVCJzogW1xuICAgICAgICAgICAgJyNmYzhkYTcnLCAnI2ZhN2Q5YScsICcjZjU2NDg0JywgJyNmMDRhNzEnLCAnI2U4MmM1OCcsICcjZTMxNzQ2JywgJyNkZTAyMzUnLFxuICAgICAgICAgICAgJyNkNjAyMzQnLCAnI2QxMDIzMicsICcjYzcwMjMwJywgJyNiODAyMmMnLCAnI2FiMDIyOScsICcjOWMwMjI1JywgJyM4ZjAxMjInLFxuICAgICAgICAgICAgJyM4YzAxMjInLCAnIzgyMDExZicsICcjNzgwMTFiJywgJyM2OTAxMTcnLCAnIzVjMDAxMicsICcjNGYwMDEwJywgJyM0MjAwMGMnXG4gICAgICAgIF0sXG4gICAgICAgICcjNzkzMTgzJzogW1xuICAgICAgICAgICAgJyNlZjhkZmMnLCAnI2ViN2RmYScsICcjZTY2NGY1JywgJyNkYzRhZjAnLCAnI2QyMmNlOCcsICcjY2IxN2UzJywgJyNjNDAyZGUnLFxuICAgICAgICAgICAgJyNjMDAyZDknLCAnI2JiMDJkNCcsICcjYjAwMmM3JywgJyNhMjAyYjgnLCAnIzk3MDJhYicsICcjOGEwMjljJywgJyM3ZTAxOGYnLFxuICAgICAgICAgICAgJyM3YTAxOGEnLCAnIzczMDE4MicsICcjNmMwMTc4JywgJyM1ZTAxNjknLCAnIzU0MDE1YycsICcjNDkwMTRmJywgJyMzZDAxNDInXG4gICAgICAgIF0sXG4gICAgICAgICcjMDA5REU3JzogW1xuICAgICAgICAgICAgJyM4ZGQ5ZmMnLCAnIzdkZDJmYScsICcjNjRjN2Y1JywgJyM0YWJiZjAnLCAnIzJjYWRlOCcsICcjMTdhMmUzJywgJyMwMjk4ZGUnLFxuICAgICAgICAgICAgJyMwMjk1ZDknLCAnIzAyOTFkNCcsICcjMDI4OWM3JywgJyMwMjdlYjgnLCAnIzAyNzVhYicsICcjMDI2YjljJywgJyMwMTYyOGYnLFxuICAgICAgICAgICAgJyMwMTVmOGEnLCAnIzAxNTk4MicsICcjMDE1Mjc4JywgJyMwMTQ4NjknLCAnIzAxM2Y1YycsICcjMDEzNjRmJywgJyMwMTJlNDInXG4gICAgICAgIF0sXG4gICAgICAgICcjMDBCNTlDJzogW1xuICAgICAgICAgICAgJyM4ZGZlZWEnLCAnIzdkZmJlNCcsICcjNjNmNGRiJywgJyM0YmVmZDInLCAnIzJkZTdjNicsICcjMTZlMmJlJywgJyMwM2RlYjcnLCBcbiAgICAgICAgICAgICcjMDFkZGI2JywgJyMwMWQ0YWUnLCAnIzAxYzdhNCcsICcjMDFiODk3JywgJyMwMWFhOGInLCAnIzAxOWI4MCcsICcjMDE5MDc2JywgXG4gICAgICAgICAgICAnIzAxOGM3MycsICcjMDE4MzZjJywgJyMwMTc3NjMnLCAnIzAxNjg1NycsICcjMDA1YzRlJywgJyMwMDUwNDQnLCAnIzAwNDIzOSdcbiAgICAgICAgXSxcbiAgICAgICAgJyNGRkNFMDAnOiBbXG4gICAgICAgICAgICAnI2ZjZTY4ZCcsICcjZmFlMTdkJywgJyNmNWRhNjQnLCAnI2YwY2Y0YScsICcjZThjMjJjJywgJyNlNWJjMTcnLCAnI2RlYjIwMicsXG4gICAgICAgICAgICAnI2RlYjEwMCcsICcjZDRhYTAyJywgJyNjN2EwMDInLCAnI2I4OTMwMicsICcjYWI4OTAyJywgJyM5YzdkMDInLCAnIzhmNzMwMScsXG4gICAgICAgICAgICAnIzhjNzAwMScsICcjODI2ODAxJywgJyM3ODYyMDEnLCAnIzY5NTYwMScsICcjNWM0YjAwJywgJyM0ZjQxMDAnLCAnIzQyMzcwMCdcbiAgICAgICAgXSxcbiAgICAgICAgJyNGRjRBMjEnOiBbXG4gICAgICAgICAgICAnI2ZjYTI4ZCcsICcjZmE5NDdkJywgJyNmNTdmNjQnLCAnI2YwNjk0YScsICcjZTg0ZjJjJywgJyNlMzNjMTcnLCAnI2RlMmEwMicsXG4gICAgICAgICAgICAnI2Q5MmEwMicsICcjZDQyOTAyJywgJyNjNzI2MDInLCAnI2I4MjMwMicsICcjYWIyMTAyJywgJyM5YzFlMDInLCAnIzhmMWIwMScsXG4gICAgICAgICAgICAnIzhhMWEwMScsICcjODIxOTAxJywgJyM3ODE3MDEnLCAnIzY5MTMwMCcsICcjNWMxMTAwJywgJyM0ZjBlMDAnLCAnIzQyMGMwMCdcbiAgICAgICAgXSxcbiAgICAgICAgJyNENkQ1RDYnOiBbXG4gICAgICAgICAgICAnI2ZmZicsICcjZjJmMmYyJywgJyNlNWU1ZTUnLCAnI2Q5ZDlkOScsICcjY2NjY2NjJywgJyNiZmJmYmYnLCAnI2IzYjNiMycsIFxuICAgICAgICAgICAgJyNhNmE2YTYnLCAnIzk5OTk5OScsICcjOGM4YzhjJywgJyM4MDgwODAnLCAnIzczNzM3MycsICcjNjY2NjY2JywgJyM1OTU5NTknLCBcbiAgICAgICAgICAgICcjNGQ0ZDRkJywgJyM0MjQyNDInLCAnIzM2MzYzNicsICcjMjYyNjI2JywgJyMxYTFhMWEnLCAnIzBmMGYwZicsICcjMDAwJ1xuICAgICAgICBdXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuY29sb3IpIHtcbiAgICAgICAgICAgIHRoaXMuY2hpbGRDb250cm9sLnNldFZhbHVlRnJvbSh0aGlzLmNvbG9yKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29udHJvbC5zZXRWYWx1ZUZyb20oJyNFNjMxNUInKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBzZXQgY29sb3IgcHJlc2V0c1xuICAgICAgICAgKiBkZWZpbmVkIGJ5IHN3YXRjaGVzIGNvbG9yIHBpY2tlciBjb21wb25lbnRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY29udHJvbC5zZXRDb2xvclByZXNldHMoW1xuICAgICAgICAgICAgJyNlNjMxNWInLCAnIzc5MzE4MycsICcjMDA5ZGU3JywgJyMwMGI1OWMnLCAnI2ZmY2UwMCcsICcjZmY0YTIxJywgJyNkNmQ1ZDYnXG4gICAgICAgIF0pO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBpbml0aWFsbHkgb3BlbiBmaXJzdCBncm91cFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jaGlsZENvbnRyb2wuc2V0Q29sb3JQcmVzZXRzKHRoaXMubWFwQ29sb3JzWycjRTYzMTVCJ10pO1xuXG4gICAgICAgIHRoaXMuY2hpbGRDb250cm9sLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbG9yQ2hhbmdlLmVtaXQoZ2V0VmFsdWVCeVR5cGUodmFsdWUsIHRoaXMuY2hpbGRDb250cm9sLmluaXRUeXBlKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY29udHJvbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICAgICBjb25zdCBwcmVzZXRzID0gdGhpcy5tYXBDb2xvcnNbdmFsdWUudG9IZXhTdHJpbmcoKV07XG4gICAgICAgICAgICBpZiAocHJlc2V0cykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hpbGRDb250cm9sLnNldENvbG9yUHJlc2V0cyhwcmVzZXRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY29sb3JDaGFuZ2UuZW1pdChnZXRWYWx1ZUJ5VHlwZSh0aGlzLmNoaWxkQ29udHJvbC52YWx1ZSwgdGhpcy5jaGlsZENvbnRyb2wuaW5pdFR5cGUpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNvbnRyb2wudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy5jaGlsZENvbnRyb2wudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy5jZHIuZGV0YWNoKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuY29sb3IgJiYgdGhpcy5jb250cm9sICYmIGdldFZhbHVlQnlUeXBlKHRoaXMuY29udHJvbC52YWx1ZSwgdGhpcy5jb250cm9sLmluaXRUeXBlKSAhPT0gdGhpcy5jb2xvcikge1xuICAgICAgICAgICAgdGhpcy5jaGlsZENvbnRyb2wuc2V0VmFsdWVGcm9tKHRoaXMuY29sb3IpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19