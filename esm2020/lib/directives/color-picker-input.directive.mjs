import { Directive, Input, Output, EventEmitter, HostListener } from '@angular/core';
import * as i0 from "@angular/core";
export class ColorPickerInputDirective {
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
}
ColorPickerInputDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: ColorPickerInputDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
ColorPickerInputDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.0.1", type: ColorPickerInputDirective, selector: "[inputChange]", inputs: { min: "min", max: "max" }, outputs: { inputChange: "inputChange" }, host: { listeners: { "input": "inputChanges($event)" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: ColorPickerInputDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[inputChange]'
                }]
        }], propDecorators: { min: [{
                type: Input
            }], max: [{
                type: Input
            }], inputChange: [{
                type: Output
            }], inputChanges: [{
                type: HostListener,
                args: ['input', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3ItcGlja2VyLWlucHV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2lwbGFiL25neC1jb2xvci1waWNrZXIvc3JjL2xpYi9kaXJlY3RpdmVzL2NvbG9yLXBpY2tlci1pbnB1dC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTXJGLE1BQU0sT0FBTyx5QkFBeUI7SUFIdEM7UUFXVyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7S0FhbkQ7SUFWVSxZQUFZLENBQUMsS0FBVTtRQUMxQixNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBMEIsSUFBSSxLQUFLLENBQUMsVUFBOEIsQ0FBQztRQUN6RixNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBRTVCLE1BQU0sT0FBTyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLE9BQU8sSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUM7WUFDcEQsT0FBTyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFO1lBQ25DLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2xDO0lBQ0wsQ0FBQzs7c0hBcEJRLHlCQUF5QjswR0FBekIseUJBQXlCOzJGQUF6Qix5QkFBeUI7a0JBSHJDLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLGVBQWU7aUJBQzVCOzhCQUdVLEdBQUc7c0JBRFQsS0FBSztnQkFJQyxHQUFHO3NCQURULEtBQUs7Z0JBSUMsV0FBVztzQkFEakIsTUFBTTtnQkFJQSxZQUFZO3NCQURsQixZQUFZO3VCQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tpbnB1dENoYW5nZV0nXG59KVxuZXhwb3J0IGNsYXNzIENvbG9yUGlja2VySW5wdXREaXJlY3RpdmUge1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIG1pbjogc3RyaW5nO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgbWF4OiBzdHJpbmc7XG5cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgaW5wdXRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICAgIEBIb3N0TGlzdGVuZXIoJ2lucHV0JywgWyckZXZlbnQnXSlcbiAgICBwdWJsaWMgaW5wdXRDaGFuZ2VzKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50IHx8IGV2ZW50LnNyY0VsZW1lbnQgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBlbGVtZW50LnZhbHVlO1xuXG4gICAgICAgIGNvbnN0IG51bWVyaWMgPSBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgICAgICAgaWYgKCFpc05hTihudW1lcmljKSAmJiBudW1lcmljID49IHBhcnNlSW50KHRoaXMubWluLCAxMCkgJiZcbiAgICAgICAgICAgIG51bWVyaWMgPD0gcGFyc2VJbnQodGhpcy5tYXgsIDEwKSkge1xuICAgICAgICAgICAgdGhpcy5pbnB1dENoYW5nZS5lbWl0KG51bWVyaWMpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19