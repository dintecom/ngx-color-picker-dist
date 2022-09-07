import { Component, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { Color } from '../../../../helpers/color.class';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class HexComponent {
    constructor() {
        this.hueChange = new EventEmitter(false);
        this.colorChange = new EventEmitter(false);
        this.prefixValue = '';
    }
    set label(value) {
        this.labelVisible = true;
    }
    set prefix(value) {
        this.prefixValue = value;
    }
    get value() {
        return this.prefixValue + (this.color ? this.color.toHexString(this.color.getRgba().alpha < 1).replace('#', '') : '');
    }
    onInputChange(event, inputValue) {
        const value = inputValue.toLowerCase().replace('#', '');
        if (((event.keyCode === 13 || event.key.toLowerCase() === 'enter') && value.length === 3)
            || value.length === 6 || value.length === 8) {
            const hex = parseInt(value, 16);
            const hexStr = hex.toString(16);
            /**
             * if value is valid
             * change color else do nothing
             * after parsing number leading 0 is removed,
             * compare length and add leading 0 before comparing two values
             */
            if (hexStr.padStart(value.length, '0') === value && this.value !== value) {
                const newColor = new Color(`#${value}`);
                const hue = new Color().setHsva(newColor.getHsva().hue);
                this.hueChange.emit(hue);
                this.colorChange.emit(newColor);
            }
        }
    }
}
HexComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: HexComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
HexComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.1", type: HexComponent, selector: "hex-input-component", inputs: { hue: "hue", color: "color", label: "label", prefix: "prefix" }, outputs: { hueChange: "hueChange", colorChange: "colorChange" }, ngImport: i0, template: "<div class=\"column\">\n    <input #elRef type=\"text\" [value]=\"value\" (keyup)=\"onInputChange($event, elRef.value)\" />\n    <span *ngIf=\"labelVisible\">HEX</span>\n</div>", styles: [":host,:host ::ng-deep *{padding:0;margin:0;box-sizing:border-box}\n", ":host{display:table;width:100%;text-align:center;color:#b4b4b4;font-size:11px}.column{display:table-cell;padding:0 2px}input{width:100%;border:1px solid rgb(218,218,218);color:#272727;text-align:center;font-size:12px;-webkit-appearance:none;border-radius:0;margin:0 0 6px;height:26px;outline:none}\n", ""], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: HexComponent, decorators: [{
            type: Component,
            args: [{ selector: `hex-input-component`, changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"column\">\n    <input #elRef type=\"text\" [value]=\"value\" (keyup)=\"onInputChange($event, elRef.value)\" />\n    <span *ngIf=\"labelVisible\">HEX</span>\n</div>", styles: [":host,:host ::ng-deep *{padding:0;margin:0;box-sizing:border-box}\n", ":host{display:table;width:100%;text-align:center;color:#b4b4b4;font-size:11px}.column{display:table-cell;padding:0 2px}input{width:100%;border:1px solid rgb(218,218,218);color:#272727;text-align:center;font-size:12px;-webkit-appearance:none;border-radius:0;margin:0 0 6px;height:26px;outline:none}\n"] }]
        }], propDecorators: { hue: [{
                type: Input
            }], hueChange: [{
                type: Output
            }], color: [{
                type: Input
            }], colorChange: [{
                type: Output
            }], label: [{
                type: Input
            }], prefix: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGV4LWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2lwbGFiL25neC1jb2xvci1waWNrZXIvc3JjL2xpYi9jb21wb25lbnRzL3BhcnRzL2lucHV0cy9oZXgtaW5wdXQvaGV4LWlucHV0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2lwbGFiL25neC1jb2xvci1waWNrZXIvc3JjL2xpYi9jb21wb25lbnRzL3BhcnRzL2lucHV0cy9oZXgtaW5wdXQvaGV4LWlucHV0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEcsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7QUFheEQsTUFBTSxPQUFPLFlBQVk7SUFWekI7UUFnQlcsY0FBUyxHQUFHLElBQUksWUFBWSxDQUFRLEtBQUssQ0FBQyxDQUFDO1FBTTNDLGdCQUFXLEdBQUcsSUFBSSxZQUFZLENBQVEsS0FBSyxDQUFDLENBQUM7UUFHNUMsZ0JBQVcsR0FBVyxFQUFFLENBQUM7S0F1Q3BDO0lBckNHLElBQ1csS0FBSyxDQUFDLEtBQUs7UUFDbEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7SUFDN0IsQ0FBQztJQUVELElBQ1csTUFBTSxDQUFDLEtBQUs7UUFDbkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUVELElBQVcsS0FBSztRQUNaLE9BQU8sSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzFILENBQUM7SUFFTSxhQUFhLENBQUMsS0FBb0IsRUFBRSxVQUFrQjtRQUN6RCxNQUFNLEtBQUssR0FBRyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUV4RCxJQUNBLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxLQUFLLE9BQU8sQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO2VBQ2xGLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3pDLE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDaEMsTUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUVoQzs7Ozs7ZUFLRztZQUNILElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLEtBQUssRUFBRTtnQkFDdEUsTUFBTSxRQUFRLEdBQUcsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxDQUFDO2dCQUN4QyxNQUFNLEdBQUcsR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3hELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN6QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNuQztTQUNKO0lBQ0wsQ0FBQzs7eUdBckRRLFlBQVk7NkZBQVosWUFBWSxzTUNkekIsa0xBR007MkZEV08sWUFBWTtrQkFWeEIsU0FBUzsrQkFDSSxxQkFBcUIsbUJBT2QsdUJBQXVCLENBQUMsTUFBTTs4QkFLeEMsR0FBRztzQkFEVCxLQUFLO2dCQUlDLFNBQVM7c0JBRGYsTUFBTTtnQkFJQSxLQUFLO3NCQURYLEtBQUs7Z0JBSUMsV0FBVztzQkFEakIsTUFBTTtnQkFPSSxLQUFLO3NCQURmLEtBQUs7Z0JBTUssTUFBTTtzQkFEaEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tICcuLi8uLi8uLi8uLi9oZWxwZXJzL2NvbG9yLmNsYXNzJztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogYGhleC1pbnB1dC1jb21wb25lbnRgLFxuICAgIHRlbXBsYXRlVXJsOiBgLi9oZXgtaW5wdXQuY29tcG9uZW50Lmh0bWxgLFxuICAgIHN0eWxlVXJsczogW1xuICAgICAgICBgLi8uLi8uLi9iYXNlLnN0eWxlLnNjc3NgLFxuICAgICAgICBgLi8uLi9pbnB1dC5jb21wb25lbnQuc2Nzc2AsXG4gICAgICAgIGAuL2hleC1pbnB1dC5jb21wb25lbnQuc2Nzc2BcbiAgICBdLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEhleENvbXBvbmVudCB7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBodWU6IENvbG9yO1xuXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIGh1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q29sb3I+KGZhbHNlKTtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGNvbG9yOiBDb2xvcjtcblxuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBjb2xvckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q29sb3I+KGZhbHNlKTtcblxuICAgIHB1YmxpYyBsYWJlbFZpc2libGU6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBwcmVmaXhWYWx1ZTogc3RyaW5nID0gJyc7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgbGFiZWwodmFsdWUpIHtcbiAgICAgICAgdGhpcy5sYWJlbFZpc2libGUgPSB0cnVlO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBwcmVmaXgodmFsdWUpIHtcbiAgICAgICAgdGhpcy5wcmVmaXhWYWx1ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgdmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByZWZpeFZhbHVlICsgKHRoaXMuY29sb3IgPyB0aGlzLmNvbG9yLnRvSGV4U3RyaW5nKHRoaXMuY29sb3IuZ2V0UmdiYSgpLmFscGhhIDwgMSkucmVwbGFjZSgnIycsICcnKSA6ICcnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25JbnB1dENoYW5nZShldmVudDogS2V5Ym9hcmRFdmVudCwgaW5wdXRWYWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gaW5wdXRWYWx1ZS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoJyMnLCAnJyk7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAoKGV2ZW50LmtleUNvZGUgPT09IDEzIHx8IGV2ZW50LmtleS50b0xvd2VyQ2FzZSgpID09PSAnZW50ZXInKSAmJiB2YWx1ZS5sZW5ndGggPT09IDMpXG4gICAgICAgIHx8IHZhbHVlLmxlbmd0aCA9PT0gNiB8fCB2YWx1ZS5sZW5ndGggPT09IDgpIHtcbiAgICAgICAgICAgIGNvbnN0IGhleCA9IHBhcnNlSW50KHZhbHVlLCAxNik7XG4gICAgICAgICAgICBjb25zdCBoZXhTdHIgPSBoZXgudG9TdHJpbmcoMTYpO1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIGlmIHZhbHVlIGlzIHZhbGlkXG4gICAgICAgICAgICAgKiBjaGFuZ2UgY29sb3IgZWxzZSBkbyBub3RoaW5nXG4gICAgICAgICAgICAgKiBhZnRlciBwYXJzaW5nIG51bWJlciBsZWFkaW5nIDAgaXMgcmVtb3ZlZCxcbiAgICAgICAgICAgICAqIGNvbXBhcmUgbGVuZ3RoIGFuZCBhZGQgbGVhZGluZyAwIGJlZm9yZSBjb21wYXJpbmcgdHdvIHZhbHVlc1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBpZiAoaGV4U3RyLnBhZFN0YXJ0KHZhbHVlLmxlbmd0aCwgJzAnKSA9PT0gdmFsdWUgJiYgdGhpcy52YWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdDb2xvciA9IG5ldyBDb2xvcihgIyR7dmFsdWV9YCk7XG4gICAgICAgICAgICAgICAgY29uc3QgaHVlID0gbmV3IENvbG9yKCkuc2V0SHN2YShuZXdDb2xvci5nZXRIc3ZhKCkuaHVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmh1ZUNoYW5nZS5lbWl0KGh1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xvckNoYW5nZS5lbWl0KG5ld0NvbG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJjb2x1bW5cIj5cbiAgICA8aW5wdXQgI2VsUmVmIHR5cGU9XCJ0ZXh0XCIgW3ZhbHVlXT1cInZhbHVlXCIgKGtleXVwKT1cIm9uSW5wdXRDaGFuZ2UoJGV2ZW50LCBlbFJlZi52YWx1ZSlcIiAvPlxuICAgIDxzcGFuICpuZ0lmPVwibGFiZWxWaXNpYmxlXCI+SEVYPC9zcGFuPlxuPC9kaXY+Il19