import * as tslib_1 from "tslib";
import { Directive, Input, Output, EventEmitter, HostListener } from '@angular/core';
var ColorPickerInputDirective = /** @class */ (function () {
    function ColorPickerInputDirective() {
        this.inputChange = new EventEmitter();
    }
    ColorPickerInputDirective.prototype.inputChanges = function (event) {
        var element = event.target || event.srcElement;
        var value = element.value;
        var numeric = parseFloat(value);
        if (!isNaN(numeric) && numeric >= parseInt(this.min, 10) &&
            numeric <= parseInt(this.max, 10)) {
            this.inputChange.emit(numeric);
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
    return ColorPickerInputDirective;
}());
export { ColorPickerInputDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3ItcGlja2VyLWlucHV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BpcGxhYi9uZ3gtY29sb3ItcGlja2VyLyIsInNvdXJjZXMiOlsiZGlyZWN0aXZlcy9jb2xvci1waWNrZXItaW5wdXQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU1yRjtJQUhBO1FBV1csZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0lBYXBELENBQUM7SUFWVSxnREFBWSxHQUFuQixVQUFvQixLQUFVO1FBQzFCLElBQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxNQUEwQixJQUFJLEtBQUssQ0FBQyxVQUE4QixDQUFDO1FBQ3pGLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFFNUIsSUFBTSxPQUFPLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksT0FBTyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQztZQUNwRCxPQUFPLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUU7WUFDbkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDbEM7SUFDTCxDQUFDO0lBbEJEO1FBREMsS0FBSyxFQUFFOzswREFDVztJQUduQjtRQURDLEtBQUssRUFBRTs7MERBQ1c7SUFHbkI7UUFEQyxNQUFNLEVBQUU7O2tFQUN1QztJQUdoRDtRQURDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7OztpRUFVakM7SUFwQlEseUJBQXlCO1FBSHJDLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxlQUFlO1NBQzVCLENBQUM7T0FDVyx5QkFBeUIsQ0FxQnJDO0lBQUQsZ0NBQUM7Q0FBQSxBQXJCRCxJQXFCQztTQXJCWSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbaW5wdXRDaGFuZ2VdJ1xufSlcbmV4cG9ydCBjbGFzcyBDb2xvclBpY2tlcklucHV0RGlyZWN0aXZlIHtcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBtaW46IHN0cmluZztcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIG1heDogc3RyaW5nO1xuXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIGlucHV0Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgICBASG9zdExpc3RlbmVyKCdpbnB1dCcsIFsnJGV2ZW50J10pXG4gICAgcHVibGljIGlucHV0Q2hhbmdlcyhldmVudDogYW55KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCB8fCBldmVudC5zcmNFbGVtZW50IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gZWxlbWVudC52YWx1ZTtcblxuICAgICAgICBjb25zdCBudW1lcmljID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG4gICAgICAgIGlmICghaXNOYU4obnVtZXJpYykgJiYgbnVtZXJpYyA+PSBwYXJzZUludCh0aGlzLm1pbiwgMTApICYmXG4gICAgICAgICAgICBudW1lcmljIDw9IHBhcnNlSW50KHRoaXMubWF4LCAxMCkpIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXRDaGFuZ2UuZW1pdChudW1lcmljKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==