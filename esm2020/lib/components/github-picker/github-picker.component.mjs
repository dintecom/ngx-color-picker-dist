import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { ColorPickerControl } from './../../helpers/control.class';
import { getValueByType } from './../../helpers/helper.functions';
import * as i0 from "@angular/core";
import * as i1 from "../parts/color-presets/color-presets.component";
export class GithubPickerComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.columnsValue = 8;
        this.colorChange = new EventEmitter(false);
        this.subscriptions = [];
    }
    get columns() {
        return this.columnsValue;
    }
    set columns(value) {
        this.columnsValue = !isNaN(parseFloat(value)) && !isNaN(Number(value))
            ? Number(value)
            : 'auto';
    }
    get width() {
        return this.columnsValue === 'auto' ? `auto` : `${25 * this.columnsValue + 12}px`;
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
        this.subscriptions.push(this.control.valueChanges.subscribe((value) => {
            this.cdr.markForCheck();
            this.colorChange.emit(getValueByType(value, this.control.initType));
        }));
    }
    ngOnDestroy() {
        this.cdr.detach();
        this.subscriptions.forEach((subscription) => subscription.unsubscribe());
        this.subscriptions.length = 0;
    }
    ngOnChanges(changes) {
        if (this.color && this.control && getValueByType(this.control.value, this.control.initType) !== this.color) {
            this.control.setValueFrom(this.color);
        }
    }
}
GithubPickerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: GithubPickerComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
GithubPickerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.1", type: GithubPickerComponent, selector: "github-picker", inputs: { color: "color", control: "control", columns: "columns" }, outputs: { colorChange: "colorChange" }, host: { properties: { "style.width": "this.width" } }, usesOnChanges: true, ngImport: i0, template: "<color-presets-component \n    direction=\"down\"\n    [columns]=\"columnsCount\"\n    [(color)]=\"control.value\" \n    [colorPresets]=\"control.presets\"></color-presets-component>", styles: [":host,:host ::ng-deep *{padding:0;margin:0;box-sizing:border-box}\n", "@charset \"UTF-8\";:host{display:block;background:#fff;border:1px solid rgba(0,0,0,.2);box-shadow:#00000026 0 3px 12px;border-radius:4px;padding:5px}:host ::ng-deep color-preset,:host ::ng-deep color-preset-sublist{width:25px;height:25px}:host ::ng-deep color-preset:hover:after,:host ::ng-deep color-preset.selected:after{display:block;content:\"\\a0\";position:absolute;left:-1px;top:-1px;bottom:-1px;right:-1px;z-index:10;border:2px solid #fff;box-shadow:#0003 0 0 5px 2px}\n"], dependencies: [{ kind: "component", type: i1.ColorPresetsComponent, selector: "color-presets-component", inputs: ["columns", "colorPresets", "hue", "color", "direction"], outputs: ["hueChange", "colorChange"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: GithubPickerComponent, decorators: [{
            type: Component,
            args: [{ selector: `github-picker`, changeDetection: ChangeDetectionStrategy.OnPush, template: "<color-presets-component \n    direction=\"down\"\n    [columns]=\"columnsCount\"\n    [(color)]=\"control.value\" \n    [colorPresets]=\"control.presets\"></color-presets-component>", styles: [":host,:host ::ng-deep *{padding:0;margin:0;box-sizing:border-box}\n", "@charset \"UTF-8\";:host{display:block;background:#fff;border:1px solid rgba(0,0,0,.2);box-shadow:#00000026 0 3px 12px;border-radius:4px;padding:5px}:host ::ng-deep color-preset,:host ::ng-deep color-preset-sublist{width:25px;height:25px}:host ::ng-deep color-preset:hover:after,:host ::ng-deep color-preset.selected:after{display:block;content:\"\\a0\";position:absolute;left:-1px;top:-1px;bottom:-1px;right:-1px;z-index:10;border:2px solid #fff;box-shadow:#0003 0 0 5px 2px}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }]; }, propDecorators: { color: [{
                type: Input
            }], control: [{
                type: Input
            }], columns: [{
                type: Input
            }], colorChange: [{
                type: Output
            }], width: [{
                type: HostBinding,
                args: ['style.width']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l0aHViLXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9pcGxhYi9uZ3gtY29sb3ItcGlja2VyL3NyYy9saWIvY29tcG9uZW50cy9naXRodWItcGlja2VyL2dpdGh1Yi1waWNrZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaXBsYWIvbmd4LWNvbG9yLXBpY2tlci9zcmMvbGliL2NvbXBvbmVudHMvZ2l0aHViLXBpY2tlci9naXRodWItcGlja2VyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDSCxTQUFTLEVBRVQsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBR1osdUJBQXVCLEVBR3ZCLFdBQVcsRUFDZCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNuRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7OztBQVlsRSxNQUFNLE9BQU8scUJBQXFCO0lBZ0M5QixZQUE2QixHQUFzQjtRQUF0QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQWYzQyxpQkFBWSxHQUFvQixDQUFDLENBQUM7UUFHbkMsZ0JBQVcsR0FBOEIsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFVaEUsa0JBQWEsR0FBd0IsRUFBRSxDQUFDO0lBR2hELENBQUM7SUF6QkQsSUFDVyxPQUFPO1FBQ2QsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzdCLENBQUM7SUFDRCxJQUFXLE9BQU8sQ0FBQyxLQUF5QztRQUN4RCxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN6RSxDQUFDLENB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e1xuICAgIENvbXBvbmVudCxcbiAgICBPbkluaXQsXG4gICAgSW5wdXQsXG4gICAgT3V0cHV0LFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBPbkNoYW5nZXMsXG4gICAgU2ltcGxlQ2hhbmdlcyxcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgICBPbkRlc3Ryb3ksXG4gICAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgSG9zdEJpbmRpbmdcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb2xvclN0cmluZyB9IGZyb20gJy4vLi4vLi4vaGVscGVycy9jb2xvci5jbGFzcyc7XG5pbXBvcnQgeyBDb2xvclBpY2tlckNvbnRyb2wgfSBmcm9tICcuLy4uLy4uL2hlbHBlcnMvY29udHJvbC5jbGFzcyc7XG5pbXBvcnQgeyBnZXRWYWx1ZUJ5VHlwZSB9IGZyb20gJy4vLi4vLi4vaGVscGVycy9oZWxwZXIuZnVuY3Rpb25zJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogYGdpdGh1Yi1waWNrZXJgLFxuICAgIHRlbXBsYXRlVXJsOiBgLi9naXRodWItcGlja2VyLmNvbXBvbmVudC5odG1sYCxcbiAgICBzdHlsZVVybHM6IFtcbiAgICAgICAgYC4vLi4vcGFydHMvYmFzZS5zdHlsZS5zY3NzYCxcbiAgICAgICAgYC4vZ2l0aHViLXBpY2tlci5jb21wb25lbnQuc2Nzc2BcbiAgICBdLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEdpdGh1YlBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgY29sb3I6IHN0cmluZztcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGNvbnRyb2w6IENvbG9yUGlja2VyQ29udHJvbDtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBjb2x1bW5zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2x1bW5zVmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgY29sdW1ucyh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLmNvbHVtbnNWYWx1ZSA9ICFpc05hTihwYXJzZUZsb2F0KHZhbHVlIGFzIGFueSkpICYmICFpc05hTihOdW1iZXIodmFsdWUpKVxuICAgICAgICAgICAgPyBOdW1iZXIodmFsdWUpXG4gICAgICAgICAgICA6ICdhdXRvJztcbiAgICB9XG4gICAgcHJpdmF0ZSBjb2x1bW5zVmFsdWU6ICdhdXRvJyB8IG51bWJlciA9IDg7XG5cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgY29sb3JDaGFuZ2U6IEV2ZW50RW1pdHRlcjxDb2xvclN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKGZhbHNlKTtcblxuICAgIEBIb3N0QmluZGluZygnc3R5bGUud2lkdGgnKSBwdWJsaWMgZ2V0IHdpZHRoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2x1bW5zVmFsdWUgPT09ICdhdXRvJyA/IGBhdXRvYCA6IGAkezI1ICogdGhpcy5jb2x1bW5zVmFsdWUgKyAxMn1weGA7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBjb2x1bW5zQ291bnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbHVtbnMgPT09ICdhdXRvJyA/IHRoaXMuY29udHJvbC5wcmVzZXRzLmxlbmd0aCA6IHRoaXMuY29sdW1ucztcbiAgICB9XG5cbiAgICBwcml2YXRlIHN1YnNjcmlwdGlvbnM6IEFycmF5PFN1YnNjcmlwdGlvbj4gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbnRyb2wpIHtcbiAgICAgICAgICAgIHRoaXMuY29udHJvbCA9IG5ldyBDb2xvclBpY2tlckNvbnRyb2woKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmNvbG9yKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRyb2wuc2V0VmFsdWVGcm9tKHRoaXMuY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLmNvbnRyb2wuaGFzUHJlc2V0cygpKSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIHNldCBjb2xvciBwcmVzZXRzXG4gICAgICAgICAgICAgKiBkZWZpbmVkIGJ5IGdpdGh1YiBjb2xvciBwaWNrZXIgY29tcG9uZW50XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMuY29udHJvbFxuICAgICAgICAgICAgICAgIC5zZXRDb2xvclByZXNldHMoW1xuICAgICAgICAgICAgICAgICAgICAnI2I4MDAwMCcsICcjZGIzZTAwJywgJyNmY2NiMDAnLCAnIzAwOGIwMicsICcjMDA2Yjc2JywgJyMxMjczZGUnLCAnIzAwNGRjZicsICcjNTMwMGViJyxcbiAgICAgICAgICAgICAgICAgICAgJyNlYjk2OTQnLCAnI2ZhZDBjMycsICcjZmVmM2JkJywgJyNjMWUxYzUnLCAnI2JlZGFkYycsICcjYzRkZWY2JywgJyNiZWQzZjMnLCAnI2Q0YzRmYidcbiAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKFxuICAgICAgICAgICAgdGhpcy5jb250cm9sLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xvckNoYW5nZS5lbWl0KGdldFZhbHVlQnlUeXBlKHZhbHVlLCB0aGlzLmNvbnRyb2wuaW5pdFR5cGUpKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNkci5kZXRhY2goKTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmZvckVhY2goKHN1YnNjcmlwdGlvbikgPT4gc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCkpO1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMubGVuZ3RoID0gMDtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5jb2xvciAmJiB0aGlzLmNvbnRyb2wgJiYgZ2V0VmFsdWVCeVR5cGUodGhpcy5jb250cm9sLnZhbHVlLCB0aGlzLmNvbnRyb2wuaW5pdFR5cGUpICE9PSB0aGlzLmNvbG9yKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRyb2wuc2V0VmFsdWVGcm9tKHRoaXMuY29sb3IpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiPGNvbG9yLXByZXNldHMtY29tcG9uZW50IFxuICAgIGRpcmVjdGlvbj1cImRvd25cIlxuICAgIFtjb2x1bW5zXT1cImNvbHVtbnNDb3VudFwiXG4gICAgWyhjb2xvcildPVwiY29udHJvbC52YWx1ZVwiIFxuICAgIFtjb2xvclByZXNldHNdPVwiY29udHJvbC5wcmVzZXRzXCI+PC9jb2xvci1wcmVzZXRzLWNvbXBvbmVudD4iXX0=