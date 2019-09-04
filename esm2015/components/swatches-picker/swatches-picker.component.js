import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ColorPickerControl } from './../../helpers/control.class';
import { getValueByType } from './../../helpers/helper.functions';
let SwatchesPickerComponent = class SwatchesPickerComponent {
    constructor(cdr) {
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
    ngOnInit() {
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
        this.childControl.valueChanges.subscribe((value) => {
            this.colorChange.emit(getValueByType(value, this.childControl.initType));
        });
        this.control.valueChanges.subscribe((value) => {
            this.cdr.markForCheck();
            const presets = this.mapColors[value.toHexString()];
            if (presets) {
                this.childControl.setColorPresets(presets);
            }
            this.colorChange.emit(getValueByType(this.childControl.value, this.childControl.initType));
        });
    }
    ngOnDestroy() {
        this.control.unsubscribe();
        this.childControl.unsubscribe();
        this.cdr.detach();
    }
    ngOnChanges(changes) {
        if (this.color && this.control && getValueByType(this.control.value, this.control.initType) !== this.color) {
            this.childControl.setValueFrom(this.color);
        }
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
        selector: `swatches-picker`,
        template: "<color-presets-component \n    [columns]=\"7\"\n    direction=\"down\"\n    [(color)]=\"control.value\" \n    [colorPresets]=\"control.presets\"></color-presets-component>\n<color-presets-component\n    class=\"child-list\"\n    *ngIf=\"childControl.presets.length\"\n    [columns]=\"7\"\n    direction=\"down\"\n    [(color)]=\"childControl.value\" \n    [colorPresets]=\"childControl.presets\"></color-presets-component>",
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [":host,:host ::ng-deep *{padding:0;margin:0;-webkit-box-sizing:border-box;box-sizing:border-box}", "@charset \"UTF-8\";:host{display:block;background:#fff;width:224px;border:1px solid rgba(0,0,0,.2);-webkit-box-shadow:rgba(0,0,0,.3) 0 0 2px;box-shadow:rgba(0,0,0,.3) 0 0 2px;border-radius:4px;padding:6px}:host ::ng-deep color-preset,:host ::ng-deep color-preset-sublist{width:30px;height:30px}:host ::ng-deep color-preset.selected:after,:host ::ng-deep color-preset:hover:after{display:block;content:\"\u00A0\";position:absolute;left:3px;top:3px;bottom:3px;right:3px;z-index:10;border:3px solid #fff;-webkit-box-shadow:rgba(0,0,0,.2) 0 0 5px 2px;box-shadow:rgba(0,0,0,.2) 0 0 5px 2px}:host ::ng-deep .row:first-child color-preset-sublist:first-child,:host ::ng-deep .row:first-child color-preset:first-child{border-radius:4px 0 0 4px}:host ::ng-deep .row.last color-preset-sublist.last,:host ::ng-deep .row.last color-preset.last{border-radius:0 4px 4px 0}:host ::ng-deep .child-list .row.first color-preset-sublist.first,:host ::ng-deep .child-list .row.first color-preset.first{border-radius:4px 0 0}:host ::ng-deep .child-list .row.first color-preset-sublist.last,:host ::ng-deep .child-list .row.first color-preset.last{border-radius:0 4px 0 0}:host ::ng-deep .child-list .row.last color-preset-sublist.first,:host ::ng-deep .child-list .row.last color-preset.first{border-radius:0 0 0 4px}:host ::ng-deep .child-list .row.last color-preset-sublist.last,:host ::ng-deep .child-list .row.last color-preset.last{border-radius:0 0 4px}:host ::ng-deep .child-list{margin-top:6px;border-top:1px solid #e5e5e5;padding:6px 0 0}:host ::ng-deep .child-list color-preset.selected:after,:host ::ng-deep .child-list color-preset:hover:after{content:\"\u2714\";font-size:18px;color:#fff;border:0;left:0;top:0;bottom:0;right:0;line-height:30px;-webkit-box-shadow:none;box-shadow:none;text-align:center}"]
    }),
    tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef])
], SwatchesPickerComponent);
export { SwatchesPickerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dhdGNoZXMtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BpcGxhYi9uZ3gtY29sb3ItcGlja2VyLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9zd2F0Y2hlcy1waWNrZXIvc3dhdGNoZXMtcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNILFNBQVMsRUFFVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFFWix1QkFBdUIsRUFFdkIsaUJBQWlCLEVBRXBCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQVdsRSxJQUFhLHVCQUF1QixHQUFwQyxNQUFhLHVCQUF1QjtJQWlEaEMsWUFBNkIsR0FBc0I7UUFBdEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUEzQzVDLGdCQUFXLEdBQThCLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWpFLFlBQU8sR0FBdUIsSUFBSSxrQkFBa0IsRUFBRSxDQUFDO1FBQ3ZELGlCQUFZLEdBQXVCLElBQUksa0JBQWtCLEVBQUUsQ0FBQztRQUUzRCxjQUFTLEdBQUc7WUFDaEIsU0FBUyxFQUFFO2dCQUNQLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7Z0JBQzNFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7Z0JBQzNFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7YUFDOUU7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztnQkFDM0UsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztnQkFDM0UsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUzthQUM5RTtZQUNELFNBQVMsRUFBRTtnQkFDUCxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTO2dCQUMzRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTO2dCQUMzRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTO2FBQzlFO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7Z0JBQzNFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7Z0JBQzNFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7YUFDOUU7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztnQkFDM0UsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztnQkFDM0UsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUzthQUM5RTtZQUNELFNBQVMsRUFBRTtnQkFD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S0FBSyxDQUFDLENBQUM7U0FDOUM7SUFDTCxDQUFDO0NBQ0osQ0FBQTtBQTlGRztJQURDLEtBQUssRUFBRTs7c0RBQ2E7QUFHckI7SUFEQyxNQUFNLEVBQUU7c0NBQ1csWUFBWTs0REFBd0M7QUFOL0QsdUJBQXVCO0lBVG5DLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxpQkFBaUI7UUFDM0Isa2JBQStDO1FBSy9DLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztLQUNsRCxDQUFDOzZDQWtEb0MsaUJBQWlCO0dBakQxQyx1QkFBdUIsQ0FpR25DO1NBakdZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ29tcG9uZW50LFxuICAgIE9uSW5pdCxcbiAgICBJbnB1dCxcbiAgICBPdXRwdXQsXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIFNpbXBsZUNoYW5nZXMsXG4gICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gICAgT25EZXN0cm95LFxuICAgIENoYW5nZURldGVjdG9yUmVmLFxuICAgIE9uQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbG9yU3RyaW5nIH0gZnJvbSAnLi8uLi8uLi9oZWxwZXJzL2NvbG9yLmNsYXNzJztcbmltcG9ydCB7IENvbG9yUGlja2VyQ29udHJvbCB9IGZyb20gJy4vLi4vLi4vaGVscGVycy9jb250cm9sLmNsYXNzJztcbmltcG9ydCB7IGdldFZhbHVlQnlUeXBlIH0gZnJvbSAnLi8uLi8uLi9oZWxwZXJzL2hlbHBlci5mdW5jdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogYHN3YXRjaGVzLXBpY2tlcmAsXG4gICAgdGVtcGxhdGVVcmw6IGAuL3N3YXRjaGVzLXBpY2tlci5jb21wb25lbnQuaHRtbGAsXG4gICAgc3R5bGVVcmxzOiBbXG4gICAgICAgIGAuLy4uL3BhcnRzL2Jhc2Uuc3R5bGUuc2Nzc2AsXG4gICAgICAgIGAuL3N3YXRjaGVzLXBpY2tlci5jb21wb25lbnQuc2Nzc2BcbiAgICBdLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFN3YXRjaGVzUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBjb2xvcjogc3RyaW5nO1xuXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIGNvbG9yQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Q29sb3JTdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcihmYWxzZSk7XG5cbiAgICBwdWJsaWMgY29udHJvbDogQ29sb3JQaWNrZXJDb250cm9sID0gbmV3IENvbG9yUGlja2VyQ29udHJvbCgpO1xuICAgIHB1YmxpYyBjaGlsZENvbnRyb2w6IENvbG9yUGlja2VyQ29udHJvbCA9IG5ldyBDb2xvclBpY2tlckNvbnRyb2woKTtcblxuICAgIHByaXZhdGUgbWFwQ29sb3JzID0ge1xuICAgICAgICAnI0U2MzE1Qic6IFtcbiAgICAgICAgICAgICcjZmM4ZGE3JywgJyNmYTdkOWEnLCAnI2Y1NjQ4NCcsICcjZjA0YTcxJywgJyNlODJjNTgnLCAnI2UzMTc0NicsICcjZGUwMjM1JyxcbiAgICAgICAgICAgICcjZDYwMjM0JywgJyNkMTAyMzInLCAnI2M3MDIzMCcsICcjYjgwMjJjJywgJyNhYjAyMjknLCAnIzljMDIyNScsICcjOGYwMTIyJyxcbiAgICAgICAgICAgICcjOGMwMTIyJywgJyM4MjAxMWYnLCAnIzc4MDExYicsICcjNjkwMTE3JywgJyM1YzAwMTInLCAnIzRmMDAxMCcsICcjNDIwMDBjJ1xuICAgICAgICBdLFxuICAgICAgICAnIzc5MzE4Myc6IFtcbiAgICAgICAgICAgICcjZWY4ZGZjJywgJyNlYjdkZmEnLCAnI2U2NjRmNScsICcjZGM0YWYwJywgJyNkMjJjZTgnLCAnI2NiMTdlMycsICcjYzQwMmRlJyxcbiAgICAgICAgICAgICcjYzAwMmQ5JywgJyNiYjAyZDQnLCAnI2IwMDJjNycsICcjYTIwMmI4JywgJyM5NzAyYWInLCAnIzhhMDI5YycsICcjN2UwMThmJyxcbiAgICAgICAgICAgICcjN2EwMThhJywgJyM3MzAxODInLCAnIzZjMDE3OCcsICcjNWUwMTY5JywgJyM1NDAxNWMnLCAnIzQ5MDE0ZicsICcjM2QwMTQyJ1xuICAgICAgICBdLFxuICAgICAgICAnIzAwOURFNyc6IFtcbiAgICAgICAgICAgICcjOGRkOWZjJywgJyM3ZGQyZmEnLCAnIzY0YzdmNScsICcjNGFiYmYwJywgJyMyY2FkZTgnLCAnIzE3YTJlMycsICcjMDI5OGRlJyxcbiAgICAgICAgICAgICcjMDI5NWQ5JywgJyMwMjkxZDQnLCAnIzAyODljNycsICcjMDI3ZWI4JywgJyMwMjc1YWInLCAnIzAyNmI5YycsICcjMDE2MjhmJyxcbiAgICAgICAgICAgICcjMDE1ZjhhJywgJyMwMTU5ODInLCAnIzAxNTI3OCcsICcjMDE0ODY5JywgJyMwMTNmNWMnLCAnIzAxMzY0ZicsICcjMDEyZTQyJ1xuICAgICAgICBdLFxuICAgICAgICAnIzAwQjU5Qyc6IFtcbiAgICAgICAgICAgICcjOGRmZWVhJywgJyM3ZGZiZTQnLCAnIzYzZjRkYicsICcjNGJlZmQyJywgJyMyZGU3YzYnLCAnIzE2ZTJiZScsICcjMDNkZWI3JywgXG4gICAgICAgICAgICAnIzAxZGRiNicsICcjMDFkNGFlJywgJyMwMWM3YTQnLCAnIzAxYjg5NycsICcjMDFhYThiJywgJyMwMTliODAnLCAnIzAxOTA3NicsIFxuICAgICAgICAgICAgJyMwMThjNzMnLCAnIzAxODM2YycsICcjMDE3NzYzJywgJyMwMTY4NTcnLCAnIzAwNWM0ZScsICcjMDA1MDQ0JywgJyMwMDQyMzknXG4gICAgICAgIF0sXG4gICAgICAgICcjRkZDRTAwJzogW1xuICAgICAgICAgICAgJyNmY2U2OGQnLCAnI2ZhZTE3ZCcsICcjZjVkYTY0JywgJyNmMGNmNGEnLCAnI2U4YzIyYycsICcjZTViYzE3JywgJyNkZWIyMDInLFxuICAgICAgICAgICAgJyNkZWIxMDAnLCAnI2Q0YWEwMicsICcjYzdhMDAyJywgJyNiODkzMDInLCAnI2FiODkwMicsICcjOWM3ZDAyJywgJyM4ZjczMDEnLFxuICAgICAgICAgICAgJyM4YzcwMDEnLCAnIzgyNjgwMScsICcjNzg2MjAxJywgJyM2OTU2MDEnLCAnIzVjNGIwMCcsICcjNGY0MTAwJywgJyM0MjM3MDAnXG4gICAgICAgIF0sXG4gICAgICAgICcjRkY0QTIxJzogW1xuICAgICAgICAgICAgJyNmY2EyOGQnLCAnI2ZhOTQ3ZCcsICcjZjU3ZjY0JywgJyNmMDY5NGEnLCAnI2U4NGYyYycsICcjZTMzYzE3JywgJyNkZTJhMDInLFxuICAgICAgICAgICAgJyNkOTJhMDInLCAnI2Q0MjkwMicsICcjYzcyNjAyJywgJyNiODIzMDInLCAnI2FiMjEwMicsICcjOWMxZTAyJywgJyM4ZjFiMDEnLFxuICAgICAgICAgICAgJyM4YTFhMDEnLCAnIzgyMTkwMScsICcjNzgxNzAxJywgJyM2OTEzMDAnLCAnIzVjMTEwMCcsICcjNGYwZTAwJywgJyM0MjBjMDAnXG4gICAgICAgIF0sXG4gICAgICAgICcjRDZENUQ2JzogW1xuICAgICAgICAgICAgJyNmZmYnLCAnI2YyZjJmMicsICcjZTVlNWU1JywgJyNkOWQ5ZDknLCAnI2NjY2NjYycsICcjYmZiZmJmJywgJyNiM2IzYjMnLCBcbiAgICAgICAgICAgICcjYTZhNmE2JywgJyM5OTk5OTknLCAnIzhjOGM4YycsICcjODA4MDgwJywgJyM3MzczNzMnLCAnIzY2NjY2NicsICcjNTk1OTU5JywgXG4gICAgICAgICAgICAnIzRkNGQ0ZCcsICcjNDI0MjQyJywgJyMzNjM2MzYnLCAnIzI2MjYyNicsICcjMWExYTFhJywgJyMwZjBmMGYnLCAnIzAwMCdcbiAgICAgICAgXVxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmNvbG9yKSB7XG4gICAgICAgICAgICB0aGlzLmNoaWxkQ29udHJvbC5zZXRWYWx1ZUZyb20odGhpcy5jb2xvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRyb2wuc2V0VmFsdWVGcm9tKCcjRTYzMTVCJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogc2V0IGNvbG9yIHByZXNldHNcbiAgICAgICAgICogZGVmaW5lZCBieSBzd2F0Y2hlcyBjb2xvciBwaWNrZXIgY29tcG9uZW50XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNvbnRyb2wuc2V0Q29sb3JQcmVzZXRzKFtcbiAgICAgICAgICAgICcjZTYzMTViJywgJyM3OTMxODMnLCAnIzAwOWRlNycsICcjMDBiNTljJywgJyNmZmNlMDAnLCAnI2ZmNGEyMScsICcjZDZkNWQ2J1xuICAgICAgICBdKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogaW5pdGlhbGx5IG9wZW4gZmlyc3QgZ3JvdXBcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY2hpbGRDb250cm9sLnNldENvbG9yUHJlc2V0cyh0aGlzLm1hcENvbG9yc1snI0U2MzE1QiddKTtcblxuICAgICAgICB0aGlzLmNoaWxkQ29udHJvbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb2xvckNoYW5nZS5lbWl0KGdldFZhbHVlQnlUeXBlKHZhbHVlLCB0aGlzLmNoaWxkQ29udHJvbC5pbml0VHlwZSkpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmNvbnRyb2wudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICAgICAgY29uc3QgcHJlc2V0cyA9IHRoaXMubWFwQ29sb3JzW3ZhbHVlLnRvSGV4U3RyaW5nKCldO1xuICAgICAgICAgICAgaWYgKHByZXNldHMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoaWxkQ29udHJvbC5zZXRDb2xvclByZXNldHMocHJlc2V0cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNvbG9yQ2hhbmdlLmVtaXQoZ2V0VmFsdWVCeVR5cGUodGhpcy5jaGlsZENvbnRyb2wudmFsdWUsIHRoaXMuY2hpbGRDb250cm9sLmluaXRUeXBlKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jb250cm9sLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMuY2hpbGRDb250cm9sLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMuY2RyLmRldGFjaCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmNvbG9yICYmIHRoaXMuY29udHJvbCAmJiBnZXRWYWx1ZUJ5VHlwZSh0aGlzLmNvbnRyb2wudmFsdWUsIHRoaXMuY29udHJvbC5pbml0VHlwZSkgIT09IHRoaXMuY29sb3IpIHtcbiAgICAgICAgICAgIHRoaXMuY2hpbGRDb250cm9sLnNldFZhbHVlRnJvbSh0aGlzLmNvbG9yKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==