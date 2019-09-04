import * as tslib_1 from "tslib";
import { Component, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { Color } from '../../../../helpers/color.class';
let HexComponent = class HexComponent {
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
        return this.prefixValue + (this.color ? this.color.toHexString().replace('#', '') : '');
    }
    onInputChange(inputValue) {
        const value = inputValue.toLowerCase().replace('#', '');
        if (value.length === 3 || value.length === 6 || value.length === 8) {
            const hex = parseInt(value, 16);
            /**
             * if value is valid
             * change color else do nothing
             */
            if (hex.toString(16) === value && this.value !== value) {
                const newColor = new Color(`#${value}`);
                const hue = new Color().setHsva(newColor.getHsva().hue);
                this.hueChange.emit(hue);
                this.colorChange.emit(newColor);
            }
        }
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Color)
], HexComponent.prototype, "hue", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], HexComponent.prototype, "hueChange", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Color)
], HexComponent.prototype, "color", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], HexComponent.prototype, "colorChange", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], HexComponent.prototype, "label", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], HexComponent.prototype, "prefix", null);
HexComponent = tslib_1.__decorate([
    Component({
        selector: `hex-input-component`,
        template: "<div class=\"column\">\n    <input #elRef type=\"text\" [value]=\"value\" (keyup)=\"onInputChange(elRef.value)\" />\n    <span *ngIf=\"labelVisible\">HEX</span>\n</div>",
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [":host,:host ::ng-deep *{padding:0;margin:0;-webkit-box-sizing:border-box;box-sizing:border-box}", ":host{display:table;width:100%;text-align:center;color:#b4b4b4;font-size:11px}.column{display:table-cell;padding:0 2px}input{width:100%;border:1px solid #dadada;color:#272727;text-align:center;font-size:12px;-webkit-appearance:none;border-radius:0;margin:0 0 6px;height:26px;outline:0}", ""]
    })
], HexComponent);
export { HexComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGV4LWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BpcGxhYi9uZ3gtY29sb3ItcGlja2VyLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9wYXJ0cy9pbnB1dHMvaGV4LWlucHV0L2hleC1pbnB1dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEcsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBYXhELElBQWEsWUFBWSxHQUF6QixNQUFhLFlBQVk7SUFWekI7UUFnQlcsY0FBUyxHQUFHLElBQUksWUFBWSxDQUFRLEtBQUssQ0FBQyxDQUFDO1FBTTNDLGdCQUFXLEdBQUcsSUFBSSxZQUFZLENBQVEsS0FBSyxDQUFDLENBQUM7UUFHNUMsZ0JBQVcsR0FBVyxFQUFFLENBQUM7SUFpQ3JDLENBQUM7SUE5QkcsSUFBVyxLQUFLLENBQUMsS0FBSztRQUNsQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztJQUM3QixDQUFDO0lBR0QsSUFBVyxNQUFNLENBQUMsS0FBSztRQUNuQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBRUQsSUFBVyxLQUFLO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM1RixDQUFDO0lBRU0sYUFBYSxDQUFDLFVBQWtCO1FBQ25DLE1BQU0sS0FBSyxHQUFHLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3hELElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDaEUsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztZQUVoQzs7O2VBR0c7WUFDSCxJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssS0FBSyxFQUFFO2dCQUNwRCxNQUFNLFFBQVEsR0FBRyxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLENBQUM7Z0JBQ3hDLE1BQU0sR0FBRyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDeEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ25DO1NBQ0o7SUFDTCxDQUFDO0NBQ0osQ0FBQTtBQTdDRztJQURDLEtBQUssRUFBRTtzQ0FDSSxLQUFLO3lDQUFDO0FBR2xCO0lBREMsTUFBTSxFQUFFOzsrQ0FDeUM7QUFHbEQ7SUFEQyxLQUFLLEVBQUU7c0NBQ00sS0FBSzsyQ0FBQztBQUdwQjtJQURDLE1BQU0sRUFBRTs7aURBQzJDO0FBTXBEO0lBREMsS0FBSyxFQUFFOzs7eUNBR1A7QUFHRDtJQURDLEtBQUssRUFBRTs7OzBDQUdQO0FBekJRLFlBQVk7SUFWeEIsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLHFCQUFxQjtRQUMvQixvTEFBeUM7UUFNekMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O0tBQ2xELENBQUM7R0FDVyxZQUFZLENBZ0R4QjtTQWhEWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb2xvciB9IGZyb20gJy4uLy4uLy4uLy4uL2hlbHBlcnMvY29sb3IuY2xhc3MnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBgaGV4LWlucHV0LWNvbXBvbmVudGAsXG4gICAgdGVtcGxhdGVVcmw6IGAuL2hleC1pbnB1dC5jb21wb25lbnQuaHRtbGAsXG4gICAgc3R5bGVVcmxzOiBbXG4gICAgICAgIGAuLy4uLy4uL2Jhc2Uuc3R5bGUuc2Nzc2AsXG4gICAgICAgIGAuLy4uL2lucHV0LmNvbXBvbmVudC5zY3NzYCxcbiAgICAgICAgYC4vaGV4LWlucHV0LmNvbXBvbmVudC5zY3NzYFxuICAgIF0sXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgSGV4Q29tcG9uZW50IHtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGh1ZTogQ29sb3I7XG5cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgaHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxDb2xvcj4oZmFsc2UpO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgY29sb3I6IENvbG9yO1xuXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIGNvbG9yQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxDb2xvcj4oZmFsc2UpO1xuXG4gICAgcHVibGljIGxhYmVsVmlzaWJsZTogYm9vbGVhbjtcbiAgICBwcml2YXRlIHByZWZpeFZhbHVlOiBzdHJpbmcgPSAnJztcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBsYWJlbCh2YWx1ZSkge1xuICAgICAgICB0aGlzLmxhYmVsVmlzaWJsZSA9IHRydWU7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHByZWZpeCh2YWx1ZSl7XG4gICAgICAgIHRoaXMucHJlZml4VmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcmVmaXhWYWx1ZSArICh0aGlzLmNvbG9yID8gdGhpcy5jb2xvci50b0hleFN0cmluZygpLnJlcGxhY2UoJyMnLCAnJykgOiAnJyk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uSW5wdXRDaGFuZ2UoaW5wdXRWYWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gaW5wdXRWYWx1ZS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoJyMnLCAnJyk7XG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDMgfHwgdmFsdWUubGVuZ3RoID09PSA2IHx8IHZhbHVlLmxlbmd0aCA9PT0gOCkge1xuICAgICAgICAgICAgY29uc3QgaGV4ID0gcGFyc2VJbnQodmFsdWUsIDE2KTtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBpZiB2YWx1ZSBpcyB2YWxpZFxuICAgICAgICAgICAgICogY2hhbmdlIGNvbG9yIGVsc2UgZG8gbm90aGluZ1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBpZiAoaGV4LnRvU3RyaW5nKDE2KSA9PT0gdmFsdWUgJiYgdGhpcy52YWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdDb2xvciA9IG5ldyBDb2xvcihgIyR7dmFsdWV9YCk7XG4gICAgICAgICAgICAgICAgY29uc3QgaHVlID0gbmV3IENvbG9yKCkuc2V0SHN2YShuZXdDb2xvci5nZXRIc3ZhKCkuaHVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmh1ZUNoYW5nZS5lbWl0KGh1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xvckNoYW5nZS5lbWl0KG5ld0NvbG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==