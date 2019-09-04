import * as tslib_1 from "tslib";
import { Directive, Input, Output, EventEmitter, HostListener } from '@angular/core';
let ColorPickerInputDirective = class ColorPickerInputDirective {
    constructor() {
        this.inputChange = new EventEmitter();
    }
    inputChanges(event) {
        const element = event.target || event.srcElement;
        const value = element.value;
        const numeric = parseFloat(value);
        if (!isNaN(numeric) && numeric >= parseInt(this.min, 10) &&
            numeric <= parseInt(this.max, 10)) {
            this.inputChange.emit(numeric);
        }
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], ColorPickerInputDirective.prototype, "min", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], ColorPickerInputDirective.prototype, "max", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], ColorPickerInputDirective.prototype, "inputChange", void 0);
tslib_1.__decorate([
    HostListener('input', ['$event']),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], ColorPickerInputDirective.prototype, "inputChanges", null);
ColorPickerInputDirective = tslib_1.__decorate([
    Directive({
        selector: '[inputChange]'
    })
], ColorPickerInputDirective);
export { ColorPickerInputDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3ItcGlja2VyLWlucHV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BpcGxhYi9uZ3gtY29sb3ItcGlja2VyLyIsInNvdXJjZXMiOlsiZGlyZWN0aXZlcy9jb2xvci1waWNrZXItaW5wdXQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU1yRixJQUFhLHlCQUF5QixHQUF0QyxNQUFhLHlCQUF5QjtJQUh0QztRQVdXLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztJQWFwRCxDQUFDO0lBVlUsWUFBWSxDQUFDLEtBQVU7UUFDMUIsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQTBCLElBQUksS0FBSyxDQUFDLFVBQThCLENBQUM7UUFDekYsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUU1QixNQUFNLE9BQU8sR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxPQUFPLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDO1lBQ3BELE9BQU8sSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRTtZQUNuQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNsQztJQUNMLENBQUM7Q0FDSixDQUFBO0FBbkJHO0lBREMsS0FBSyxFQUFFOztzREFDVztBQUduQjtJQURDLEtBQUssRUFBRTs7c0RBQ1c7QUFHbkI7SUFEQyxNQUFNLEVBQUU7OzhEQUN1QztBQUdoRDtJQURDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7Ozs2REFVakM7QUFwQlEseUJBQXlCO0lBSHJDLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxlQUFlO0tBQzVCLENBQUM7R0FDVyx5QkFBeUIsQ0FxQnJDO1NBckJZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tpbnB1dENoYW5nZV0nXG59KVxuZXhwb3J0IGNsYXNzIENvbG9yUGlja2VySW5wdXREaXJlY3RpdmUge1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIG1pbjogc3RyaW5nO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgbWF4OiBzdHJpbmc7XG5cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgaW5wdXRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICAgIEBIb3N0TGlzdGVuZXIoJ2lucHV0JywgWyckZXZlbnQnXSlcbiAgICBwdWJsaWMgaW5wdXRDaGFuZ2VzKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50IHx8IGV2ZW50LnNyY0VsZW1lbnQgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBlbGVtZW50LnZhbHVlO1xuXG4gICAgICAgIGNvbnN0IG51bWVyaWMgPSBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgICAgICAgaWYgKCFpc05hTihudW1lcmljKSAmJiBudW1lcmljID49IHBhcnNlSW50KHRoaXMubWluLCAxMCkgJiZcbiAgICAgICAgICAgIG51bWVyaWMgPD0gcGFyc2VJbnQodGhpcy5tYXgsIDEwKSkge1xuICAgICAgICAgICAgdGhpcy5pbnB1dENoYW5nZS5lbWl0KG51bWVyaWMpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19