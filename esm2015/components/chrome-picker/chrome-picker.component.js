import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ColorPickerControl } from './../../helpers/control.class';
import { getValueByType } from './../../helpers/helper.functions';
let ChromePickerComponent = class ChromePickerComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.selectedPresentation = 0;
        this.presentations = ['rgba', 'hsla', 'hex'];
        this.colorChange = new EventEmitter(false);
    }
    ngOnInit() {
        if (!this.control) {
            this.control = new ColorPickerControl();
        }
        if (this.color) {
            this.control.setValueFrom(this.color);
        }
        /**
         * set color presets
         * defined by this chrome color picker component
         */
        if (!this.control.hasPresets()) {
            this.control
                .setColorPresets([
                ['#f44336', '#ffebee', '#ffcdd2', '#EF9A9A', '#E57373', '#EF5350', '#F44336', '#E53935', '#D32F2F', '#C62828', '#B71C1C'],
                ['#E91E63', '#fce4ec', '#f8bbd0', '#f48fb1', '#f06292', '#ec407a', '#e91e63', '#d81b60', '#c2185b', '#ad1457', '#880e4f'],
                ['#9C27B0', '#F3e5f5', '#e1bee7', '#ce93d8', '#ba68c8', '#ab47bc', '#9c27b0', '#8e24aa', '#7b1fa2', '#6a1b9a', '#4a148c'],
                ['#673AB7', '#ede7f6', '#d1c4e9', '#b39ddb', '#9575cd', '#7e57c2', '#673ab7', '#5e35b1', '#512da8', '#4527a0', '#311b92'],
                ['#3F51B5', '#e8eaf6', '#c5cae9', '#9fa8da', '#7986cb', '#5c6bc0', '#3f51b5', '#3949ab', '#303f9f', '#283593', '#1a237e'],
                ['#2196F3', '#e3f2fd', '#bbdefb', '#90caf9', '#64b5f6', '#42a5f5', '#2196f3', '#1e88e5', '#1976d2', '#1565c0', '#0D47a1'],
                ['#03A9F4', '#e1f5fe', '#b3e5fc', '#81d4fa', '#4fc3f7', '#29b6f6', '#03a9f4', '#039be5', '#0288d1', '#0277bd', '#01579b'],
                ['#00BCD4', '#e0f7fa', '#b2ebf2', '#80deea', '#4dd0e1', '#26c6da', '#00bcd4', '#00acc1', '#0097a7', '#00838f', '#006064'],
                ['#009688', '#E0F2f1', '#b2dfdb', '#80cbc4', '#4db6ac', '#26a69a', '#009688', '#00897b', '#00796b', '#00695c', '#004d40'],
                ['#4CAF50', '#e8f5e9', '#c8e6c9', '#a5d6a7', '#81c784', '#66bb6a', '#4caf50', '#43a047', '#388e3c', '#2e7d32', '#1b5e20'],
                ['#8BC34A', '#f1f8e9', '#dcedc8', '#c5e1a5', '#aed581', '#9ccc65', '#8bc34a', '#7cb342', '#689f38', '#558b2f', '#33691e'],
                ['#cddc39', '#f9fbe7', '#f0f4c3', '#e6ee9c', '#dce775', '#d4e157', '#c0dc39', '#c0ca33', '#afb42b', '#9e9d24', '#827717'],
                ['#ffeb3b', '#fffde7', '#fff9c4', '#fff59d', '#fff176', '#ffee58', '#ffeb3b', '#fdd835', '#fbc02d', '#f9a825', '#f57f17'],
                ['#ffc107', '#fff8e1', '#ffecb3', '#ffe082', '#ffd54f', '#ffca28', '#ffc107', '#ffb300', '#ffa000', '#ff8f00', '#ff6f00'],
                ['#ff9800', '#fff3e0', '#ffe0b2', '#ffcc80', '#ffb74d', '#ffa726', '#ff9800', '#fb8c00', '#f57c00', '#ef6c00', '#e65100'],
                ['#ff5722', '#fbe9e7', '#ffccbc', '#ffab91', '#ff8a65', '#ff7043', '#ff5722', '#f4511e', '#e64a19', '#d84315', '#bf360c'],
                ['#795548', '#efebe9', '#d7ccc8', '#bcaaa4', '#a1887f', '#8d6e63', '#795548', '#6d4c41', '#5d4037', '#4e342e', '#3e2723'],
                ['#9e9e9e', '#fafafa', '#f5f5f5', '#eee', '#e0e0e0', '#bdbdbd', '#9e9e9e', '#757575', '#616161', '#424242', '#212121'],
                ['#607d8b', '#eceff1', '#cfd8dc', '#b0bec5', '#90a4ae', '#78909c', '#60708b', '#546e7a', '#455a64', '#37474f', '#263238']
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
    changePresentation() {
        this.selectedPresentation =
            this.selectedPresentation === this.presentations.length - 1 ? 0 : this.selectedPresentation + 1;
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], ChromePickerComponent.prototype, "color", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", ColorPickerControl)
], ChromePickerComponent.prototype, "control", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], ChromePickerComponent.prototype, "colorChange", void 0);
ChromePickerComponent = tslib_1.__decorate([
    Component({
        selector: `chrome-picker`,
        template: "<saturation-component [hue]=\"control.hue\" [(color)]=\"control.value\"></saturation-component>\n\n<div class=\"controls\">\n    <div class=\"controls-row hue-alpha\">\n        <div class=\"column\">\n            <indicator-component [colorType]=\"presentations[selectedPresentation]\" [color]=\"control.value\"></indicator-component>\n        </div>\n        <div class=\"column\">\n            <hue-component [(hue)]=\"control.hue\" [(color)]=\"control.value\"></hue-component>\n            <alpha-component *ngIf=\"control.alphaChannelVisibilityChanges | async\" [(color)]=\"control.value\"></alpha-component>\n        </div>\n    </div>\n    <div class=\"controls-row presentation\">\n        <div class=\"column\" [ngSwitch]=\"presentations[selectedPresentation]\">\n            <rgba-input-component *ngSwitchCase=\"'rgba'\" [alpha]=\"control.alphaChannelVisibilityChanges | async\" label [(color)]=\"control.value\" [(hue)]=\"control.hue\"></rgba-input-component>\n            <hsla-input-component *ngSwitchCase=\"'hsla'\" [alpha]=\"control.alphaChannelVisibilityChanges | async\" label [(color)]=\"control.value\" [(hue)]=\"control.hue\"></hsla-input-component>\n            <hex-input-component *ngSwitchCase=\"'hex'\" label prefix=\"#\" [(color)]=\"control.value\" [(hue)]=\"control.hue\"></hex-input-component>\n        </div>\n        <div class=\"column type-column\">\n            <span class=\"type-btn\" (click)=\"changePresentation()\"></span>\n        </div>\n    </div>\n</div>\n\n<color-presets-component *ngIf=\"control.presetsVisibilityChanges | async\" [(color)]=\"control.value\" [colorPresets]=\"control.presets\" [(hue)]=\"control.hue\"></color-presets-component>",
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [":host,:host ::ng-deep *{padding:0;margin:0;-webkit-box-sizing:border-box;box-sizing:border-box}", ":host{display:block;width:230px;border-radius:2px;background:#fff;-webkit-box-shadow:rgba(0,0,0,.3) 0 0 2px,rgba(0,0,0,.3) 0 1px 4px;box-shadow:rgba(0,0,0,.3) 0 0 2px,rgba(0,0,0,.3) 0 1px 4px}saturation-component{height:120px}.controls{padding:15px 15px 10px}.controls-row{display:table;width:100%}.column{display:table-cell;vertical-align:middle}.hue-alpha .column:first-child{width:42px;padding:0 10px 0 0}:host ::ng-deep .controls .pointer{-webkit-box-shadow:rgba(0,0,0,.3) 0 0 2px,rgba(0,0,0,.3) 0 1px 4px;box-shadow:rgba(0,0,0,.3) 0 0 2px,rgba(0,0,0,.3) 0 1px 4px}indicator-component{height:32px;width:32px;border-radius:50%}alpha-component{margin-top:8px}color-presets-component{border-top:1px solid #d0d0d0;padding:12px}color-presets-component ::ng-deep .row{padding:12px 0 0}.type-btn{display:inline-block;height:20px;width:20px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAgCAYAAAAffCjxAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAACewAAAnsB01CO3AAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAIASURBVEiJ7ZY9axRRFIafsxMStrLQJpAgpBFhi+C9w1YSo00I6RZ/g9vZpBf/QOr4GyRgkSKNSrAadsZqQGwCkuAWyRZJsySwvhZ7N/vhzrgbLH3Ld8597jlzz50zJokyxXH8DqDVar0qi6v8BbItqSGpEcfxdlmsFWXkvX8AfAVWg3UKPEnT9GKujMzsAFgZsVaCN1VTQd77XUnrgE1kv+6935268WRpzrnHZvYRWC7YvC3pRZZl3wozqtVqiyH9IgjAspkd1Gq1xUJQtVrdB9ZKIAOthdg/Qc65LUk7wNIMoCVJO865rYFhkqjX6/d7vV4GPJwBMqofURS5JEk6FYBer/eeYb/Mo9WwFnPOvQbeAvfuAAK4BN4sAJtAG/gJIElmNuiJyba3EGNmZiPeZuEVmVell/Y/6N+CzDn3AXhEOOo7Hv/3BeAz8IzQkMPnJbuPx1wC+yYJ7/0nYIP5S/0FHKdp+rwCEEXRS/rf5Hl1Gtb2M0iSpCOpCZzPATmX1EySpHMLAsiy7MjMDoHrGSDXZnaYZdnRwBh7J91utwmczAA6CbG3GgPleX4jqUH/a1CktqRGnuc3hSCAMB32gKspkCtgb3KCQMmkjeP4WNJThrNNZval1WptTIsv7JtQ4tmIdRa8qSoEpWl6YWZNoAN0zKxZNPehpLSBZv2t+Q0CJ9lLnARQLAAAAABJRU5ErkJggg==) center/6px 12px no-repeat;-webkit-background-size:6px 12px}.type-btn:hover{background-color:#eee}.type-column{width:25px;text-align:right}.presentation{padding:12px 0 0}:host ::ng-deep .reflection,:host ::ng-deep color-preset{border-radius:2px}:host ::ng-deep .row>color-preset,:host ::ng-deep .row>color-preset-sublist{margin:0 0 0 12px}:host ::ng-deep .row>color-preset-sublist:first-child,:host ::ng-deep .row>color-preset:first-child{margin:0}:host ::ng-deep color-preset{-webkit-box-shadow:inset rgba(0,0,0,.3) 0 0 2px;box-shadow:inset rgba(0,0,0,.3) 0 0 2px}:host ::ng-deep .row>color-preset:hover,:host ::ng-deep .sublist color-preset:hover{-webkit-transform:scale(1.18,1.18);-ms-transform:scale(1.18,1.18);transform:scale(1.18,1.18)}"]
    }),
    tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef])
], ChromePickerComponent);
export { ChromePickerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hyb21lLXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaXBsYWIvbmd4LWNvbG9yLXBpY2tlci8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2hyb21lLXBpY2tlci9jaHJvbWUtcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBaUIsdUJBQXVCLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWhLLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQVdsRSxJQUFhLHFCQUFxQixHQUFsQyxNQUFhLHFCQUFxQjtJQWM5QixZQUE2QixHQUFzQjtRQUF0QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQVo1Qyx5QkFBb0IsR0FBVyxDQUFDLENBQUM7UUFDakMsa0JBQWEsR0FBRyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFTeEMsZ0JBQVcsR0FBOEIsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7SUFHeEUsQ0FBQztJQUVNLFFBQVE7UUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNmLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxrQkFBa0IsRUFBRSxDQUFDO1NBQzNDO1FBRUQsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1osSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3pDO1FBRUQ7OztXQUdHO1FBQ0gsSUFBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLEVBQUU7WUFDM0IsSUFBSSxDQUFDLE9BQU87aUJBQ1gsZUFBZSxDQUFDO2dCQUNiLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQztnQkFDekgsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDO2dCQUN6SCxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUM7Z0JBQ3pILENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQztnQkFDekgsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDO2dCQUN6SCxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUM7Z0JBQ3pILENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQztnQkFDekgsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDO2dCQUN6SCxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUM7Z0JBQ3pILENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQztnQkFDekgsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDO2dCQUN6SCxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUM7Z0JBQ3pILENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQztnQkFDekgsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDO2dCQUN6SCxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUM7Z0JBQ3pILENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQztnQkFDekgsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDO2dCQUN6SCxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUM7Z0JBQ3RILENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQzthQUM1SCxDQUFDLENBQUM7U0FDTjtRQUVELElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQzFDLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDeEUsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sV0FBVztRQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRU0sV0FBVyxDQUFDLE9BQXNCO1FBQ3JDLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDeEcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3pDO0lBQ0wsQ0FBQztJQUVNLGtCQUFrQjtRQUNyQixJQUFJLENBQUMsb0JBQW9CO1lBQ3JCLElBQUksQ0FBQyxvQkFBb0IsS0FBSyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLENBQUMsQ0FBQztJQUN4RyxDQUFDO0NBRUosQ0FBQTtBQXZFRztJQURDLEtBQUssRUFBRTs7b0RBQ2E7QUFHckI7SUFEQyxLQUFLLEVBQUU7c0NBQ1Esa0JBQWtCO3NEQUFDO0FBR25DO0lBREMsTUFBTSxFQUFFO3NDQUNXLFlBQVk7MERBQXdDO0FBWi9ELHFCQUFxQjtJQVRqQyxTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsZUFBZTtRQUN6QixzcURBQTZDO1FBSzdDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztLQUNsRCxDQUFDOzZDQWVvQyxpQkFBaUI7R0FkMUMscUJBQXFCLENBNkVqQztTQTdFWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBTaW1wbGVDaGFuZ2VzLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgT25EZXN0cm95LCBPbkNoYW5nZXMsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb2xvclN0cmluZyB9IGZyb20gJy4vLi4vLi4vaGVscGVycy9jb2xvci5jbGFzcyc7XG5pbXBvcnQgeyBDb2xvclBpY2tlckNvbnRyb2wgfSBmcm9tICcuLy4uLy4uL2hlbHBlcnMvY29udHJvbC5jbGFzcyc7XG5pbXBvcnQgeyBnZXRWYWx1ZUJ5VHlwZSB9IGZyb20gJy4vLi4vLi4vaGVscGVycy9oZWxwZXIuZnVuY3Rpb25zJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IGBjaHJvbWUtcGlja2VyYCxcbiAgICB0ZW1wbGF0ZVVybDogYC4vY2hyb21lLXBpY2tlci5jb21wb25lbnQuaHRtbGAsXG4gICAgc3R5bGVVcmxzOiBbXG4gICAgICAgIGAuLy4uL3BhcnRzL2Jhc2Uuc3R5bGUuc2Nzc2AsXG4gICAgICAgIGAuL2Nocm9tZS1waWNrZXIuY29tcG9uZW50LnNjc3NgXG4gICAgXSxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBDaHJvbWVQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcblxuICAgIHB1YmxpYyBzZWxlY3RlZFByZXNlbnRhdGlvbjogbnVtYmVyID0gMDtcbiAgICBwdWJsaWMgcHJlc2VudGF0aW9ucyA9IFsncmdiYScsICdoc2xhJywgJ2hleCddO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgY29sb3I6IHN0cmluZztcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGNvbnRyb2w6IENvbG9yUGlja2VyQ29udHJvbDtcblxuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBjb2xvckNoYW5nZTogRXZlbnRFbWl0dGVyPENvbG9yU3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoZmFsc2UpO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuY29udHJvbCkge1xuICAgICAgICAgICAgdGhpcy5jb250cm9sID0gbmV3IENvbG9yUGlja2VyQ29udHJvbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY29sb3IpIHtcbiAgICAgICAgICAgIHRoaXMuY29udHJvbC5zZXRWYWx1ZUZyb20odGhpcy5jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogc2V0IGNvbG9yIHByZXNldHNcbiAgICAgICAgICogZGVmaW5lZCBieSB0aGlzIGNocm9tZSBjb2xvciBwaWNrZXIgY29tcG9uZW50XG4gICAgICAgICAqL1xuICAgICAgICBpZighdGhpcy5jb250cm9sLmhhc1ByZXNldHMoKSkge1xuICAgICAgICAgICAgdGhpcy5jb250cm9sXG4gICAgICAgICAgICAuc2V0Q29sb3JQcmVzZXRzKFtcbiAgICAgICAgICAgICAgICBbJyNmNDQzMzYnLCAnI2ZmZWJlZScsICcjZmZjZGQyJywgJyNFRjlBOUEnLCAnI0U1NzM3MycsICcjRUY1MzUwJywgJyNGNDQzMzYnLCAnI0U1MzkzNScsICcjRDMyRjJGJywgJyNDNjI4MjgnLCAnI0I3MUMxQyddLFxuICAgICAgICAgICAgICAgIFsnI0U5MUU2MycsICcjZmNlNGVjJywgJyNmOGJiZDAnLCAnI2Y0OGZiMScsICcjZjA2MjkyJywgJyNlYzQwN2EnLCAnI2U5MWU2MycsICcjZDgxYjYwJywgJyNjMjE4NWInLCAnI2FkMTQ1NycsICcjODgwZTRmJ10sXG4gICAgICAgICAgICAgICAgWycjOUMyN0IwJywgJyNGM2U1ZjUnLCAnI2UxYmVlNycsICcjY2U5M2Q4JywgJyNiYTY4YzgnLCAnI2FiNDdiYycsICcjOWMyN2IwJywgJyM4ZTI0YWEnLCAnIzdiMWZhMicsICcjNmExYjlhJywgJyM0YTE0OGMnXSxcbiAgICAgICAgICAgICAgICBbJyM2NzNBQjcnLCAnI2VkZTdmNicsICcjZDFjNGU5JywgJyNiMzlkZGInLCAnIzk1NzVjZCcsICcjN2U1N2MyJywgJyM2NzNhYjcnLCAnIzVlMzViMScsICcjNTEyZGE4JywgJyM0NTI3YTAnLCAnIzMxMWI5MiddLFxuICAgICAgICAgICAgICAgIFsnIzNGNTFCNScsICcjZThlYWY2JywgJyNjNWNhZTknLCAnIzlmYThkYScsICcjNzk4NmNiJywgJyM1YzZiYzAnLCAnIzNmNTFiNScsICcjMzk0OWFiJywgJyMzMDNmOWYnLCAnIzI4MzU5MycsICcjMWEyMzdlJ10sXG4gICAgICAgICAgICAgICAgWycjMjE5NkYzJywgJyNlM2YyZmQnLCAnI2JiZGVmYicsICcjOTBjYWY5JywgJyM2NGI1ZjYnLCAnIzQyYTVmNScsICcjMjE5NmYzJywgJyMxZTg4ZTUnLCAnIzE5NzZkMicsICcjMTU2NWMwJywgJyMwRDQ3YTEnXSxcbiAgICAgICAgICAgICAgICBbJyMwM0E5RjQnLCAnI2UxZjVmZScsICcjYjNlNWZjJywgJyM4MWQ0ZmEnLCAnIzRmYzNmNycsICcjMjliNmY2JywgJyMwM2E5ZjQnLCAnIzAzOWJlNScsICcjMDI4OGQxJywgJyMwMjc3YmQnLCAnIzAxNTc5YiddLFxuICAgICAgICAgICAgICAgIFsnIzAwQkNENCcsICcjZTBmN2ZhJywgJyNiMmViZjInLCAnIzgwZGVlYScsICcjNGRkMGUxJywgJyMyNmM2ZGEnLCAnIzAwYmNkNCcsICcjMDBhY2MxJywgJyMwMDk3YTcnLCAnIzAwODM4ZicsICcjMDA2MDY0J10sXG4gICAgICAgICAgICAgICAgWycjMDA5Njg4JywgJyNFMEYyZjEnLCAnI2IyZGZkYicsICcjODBjYmM0JywgJyM0ZGI2YWMnLCAnIzI2YTY5YScsICcjMDA5Njg4JywgJyMwMDg5N2InLCAnIzAwNzk2YicsICcjMDA2OTVjJywgJyMwMDRkNDAnXSxcbiAgICAgICAgICAgICAgICBbJyM0Q0FGNTAnLCAnI2U4ZjVlOScsICcjYzhlNmM5JywgJyNhNWQ2YTcnLCAnIzgxYzc4NCcsICcjNjZiYjZhJywgJyM0Y2FmNTAnLCAnIzQzYTA0NycsICcjMzg4ZTNjJywgJyMyZTdkMzInLCAnIzFiNWUyMCddLFxuICAgICAgICAgICAgICAgIFsnIzhCQzM0QScsICcjZjFmOGU5JywgJyNkY2VkYzgnLCAnI2M1ZTFhNScsICcjYWVkNTgxJywgJyM5Y2NjNjUnLCAnIzhiYzM0YScsICcjN2NiMzQyJywgJyM2ODlmMzgnLCAnIzU1OGIyZicsICcjMzM2OTFlJ10sXG4gICAgICAgICAgICAgICAgWycjY2RkYzM5JywgJyNmOWZiZTcnLCAnI2YwZjRjMycsICcjZTZlZTljJywgJyNkY2U3NzUnLCAnI2Q0ZTE1NycsICcjYzBkYzM5JywgJyNjMGNhMzMnLCAnI2FmYjQyYicsICcjOWU5ZDI0JywgJyM4Mjc3MTcnXSxcbiAgICAgICAgICAgICAgICBbJyNmZmViM2InLCAnI2ZmZmRlNycsICcjZmZmOWM0JywgJyNmZmY1OWQnLCAnI2ZmZjE3NicsICcjZmZlZTU4JywgJyNmZmViM2InLCAnI2ZkZDgzNScsICcjZmJjMDJkJywgJyNmOWE4MjUnLCAnI2Y1N2YxNyddLFxuICAgICAgICAgICAgICAgIFsnI2ZmYzEwNycsICcjZmZmOGUxJywgJyNmZmVjYjMnLCAnI2ZmZTA4MicsICcjZmZkNTRmJywgJyNmZmNhMjgnLCAnI2ZmYzEwNycsICcjZmZiMzAwJywgJyNmZmEwMDAnLCAnI2ZmOGYwMCcsICcjZmY2ZjAwJ10sXG4gICAgICAgICAgICAgICAgWycjZmY5ODAwJywgJyNmZmYzZTAnLCAnI2ZmZTBiMicsICcjZmZjYzgwJywgJyNmZmI3NGQnLCAnI2ZmYTcyNicsICcjZmY5ODAwJywgJyNmYjhjMDAnLCAnI2Y1N2MwMCcsICcjZWY2YzAwJywgJyNlNjUxMDAnXSxcbiAgICAgICAgICAgICAgICBbJyNmZjU3MjInLCAnI2ZiZTllNycsICcjZmZjY2JjJywgJyNmZmFiOTEnLCAnI2ZmOGE2NScsICcjZmY3MDQzJywgJyNmZjU3MjInLCAnI2Y0NTExZScsICcjZTY0YTE5JywgJyNkODQzMTUnLCAnI2JmMzYwYyddLFxuICAgICAgICAgICAgICAgIFsnIzc5NTU0OCcsICcjZWZlYmU5JywgJyNkN2NjYzgnLCAnI2JjYWFhNCcsICcjYTE4ODdmJywgJyM4ZDZlNjMnLCAnIzc5NTU0OCcsICcjNmQ0YzQxJywgJyM1ZDQwMzcnLCAnIzRlMzQyZScsICcjM2UyNzIzJ10sXG4gICAgICAgICAgICAgICAgWycjOWU5ZTllJywgJyNmYWZhZmEnLCAnI2Y1ZjVmNScsICcjZWVlJywgJyNlMGUwZTAnLCAnI2JkYmRiZCcsICcjOWU5ZTllJywgJyM3NTc1NzUnLCAnIzYxNjE2MScsICcjNDI0MjQyJywgJyMyMTIxMjEnXSxcbiAgICAgICAgICAgICAgICBbJyM2MDdkOGInLCAnI2VjZWZmMScsICcjY2ZkOGRjJywgJyNiMGJlYzUnLCAnIzkwYTRhZScsICcjNzg5MDljJywgJyM2MDcwOGInLCAnIzU0NmU3YScsICcjNDU1YTY0JywgJyMzNzQ3NGYnLCAnIzI2MzIzOCddXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29udHJvbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICAgICB0aGlzLmNvbG9yQ2hhbmdlLmVtaXQoZ2V0VmFsdWVCeVR5cGUodmFsdWUsIHRoaXMuY29udHJvbC5pbml0VHlwZSkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY29udHJvbC51bnN1YnNjcmliZSgpO1xuICAgICAgICB0aGlzLmNkci5kZXRhY2goKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5jb2xvciAmJiB0aGlzLmNvbnRyb2wgJiYgZ2V0VmFsdWVCeVR5cGUodGhpcy5jb250cm9sLnZhbHVlLCB0aGlzLmNvbnRyb2wuaW5pdFR5cGUpICE9PSB0aGlzLmNvbG9yKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRyb2wuc2V0VmFsdWVGcm9tKHRoaXMuY29sb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGNoYW5nZVByZXNlbnRhdGlvbigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFByZXNlbnRhdGlvbiA9XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkUHJlc2VudGF0aW9uID09PSB0aGlzLnByZXNlbnRhdGlvbnMubGVuZ3RoIC0gMSA/IDAgOiB0aGlzLnNlbGVjdGVkUHJlc2VudGF0aW9uICsgMTtcbiAgICB9XG5cbn0iXX0=