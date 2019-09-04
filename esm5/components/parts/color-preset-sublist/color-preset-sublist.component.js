import * as tslib_1 from "tslib";
import { Component, Input, ChangeDetectionStrategy, Renderer2, Inject, ChangeDetectorRef, Output, EventEmitter, HostBinding } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Color } from './../../../helpers/color.class';
import { OpacityAnimation, ListAnimation } from './color-preset-sublist.animation';
var ColorPresetSublist = /** @class */ (function () {
    function ColorPresetSublist(renderer, document, cdr) {
        this.renderer = renderer;
        this.document = document;
        this.cdr = cdr;
        this.selectionChange = new EventEmitter(false);
        this.direction = 'up';
        this.showChildren = false;
        this.hooks = [];
    }
    ColorPresetSublist.prototype.ngOnDestroy = function () {
        this.removeListeners();
        this.cdr.detach();
    };
    ColorPresetSublist.prototype.removeListeners = function () {
        this.hooks.forEach(function (callback) { return callback(); });
        this.hooks.length = 0;
    };
    /**
     * emit color change
     */
    ColorPresetSublist.prototype.onSelectionChange = function (color) {
        this.selectionChange.next(color);
    };
    ColorPresetSublist.prototype.onLongPress = function () {
        this.showChildren = true;
        this.listenDocumentClick();
    };
    ColorPresetSublist.prototype.listenDocumentClick = function () {
        var _this = this;
        this.hooks.push(this.renderer.listen(this.document, 'mousedown', function () { return _this.closeList(); }));
        this.hooks.push(this.renderer.listen(this.document, 'touchstart', function () { return _this.closeList(); }));
    };
    ColorPresetSublist.prototype.closeList = function () {
        if (this.showChildren) {
            this.showChildren = false;
            this.cdr.markForCheck();
            this.removeListeners();
        }
    };
    Object.defineProperty(ColorPresetSublist.prototype, "className", {
        get: function () {
            return "direction-" + this.direction;
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], ColorPresetSublist.prototype, "list", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], ColorPresetSublist.prototype, "selectionChange", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], ColorPresetSublist.prototype, "direction", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Color)
    ], ColorPresetSublist.prototype, "activeColor", void 0);
    tslib_1.__decorate([
        HostBinding('className'),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [])
    ], ColorPresetSublist.prototype, "className", null);
    ColorPresetSublist = tslib_1.__decorate([
        Component({
            selector: "color-preset-sublist",
            template: "<color-preset [show-depth-title]=\"list.length > 1\" [color]=\"list[0]\" [activeColor]=\"activeColor\" (longPress)=\"onLongPress()\" (selectionChange)=\"onSelectionChange($event)\"></color-preset>\n<div class=\"reflection\" [style.backgroundColor]=\"list[0].toRgbaString()\"></div>\n<div class=\"reflection\" [style.backgroundColor]=\"list[0].toRgbaString()\"></div>\n\n<div class=\"sublist\" *ngIf=\"showChildren\" [@opacityAnimation]=\"showChildren\" [@listAnimation]=\"direction\">\n    <color-preset \n        *ngFor=\"let preset of list | reverse : (direction == 'up' || direction == 'right')\"\n        [color]=\"preset\"\n        [activeColor]=\"activeColor\"\n        (selectionChange)=\"onSelectionChange($event)\"></color-preset>\n</div>",
            changeDetection: ChangeDetectionStrategy.OnPush,
            animations: [OpacityAnimation, ListAnimation],
            styles: [":host,:host ::ng-deep *{padding:0;margin:0;-webkit-box-sizing:border-box;box-sizing:border-box}", ":host{position:relative;display:inline-block}color-preset{position:relative;z-index:3}.reflection{display:none;position:absolute;height:100%;width:100%;z-index:2;right:-2px;top:-2px;opacity:.5}.reflection+.reflection{opacity:.2;right:-4px;top:-4px;z-index:1}color-preset:hover+.reflection,color-preset:hover+.reflection+.reflection{display:block}.sublist{position:absolute;bottom:-8px;left:-8px;right:-8px;background:#fff;border-radius:2px;-webkit-box-shadow:rgba(0,0,0,.3) 0 0 2px,rgba(0,0,0,.3) 0 2px 4px;box-shadow:rgba(0,0,0,.3) 0 0 2px,rgba(0,0,0,.3) 0 2px 4px;padding:8px 5px;text-align:center;z-index:1000}.sublist color-preset{margin:8px 0 0}.sublist color-preset:first-child{margin:0}:host(.direction-down) .sublist{bottom:auto;top:-8px}"]
        }),
        tslib_1.__param(1, Inject(DOCUMENT)),
        tslib_1.__metadata("design:paramtypes", [Renderer2, Object, ChangeDetectorRef])
    ], ColorPresetSublist);
    return ColorPresetSublist;
}());
export { ColorPresetSublist };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3ItcHJlc2V0LXN1Ymxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlwbGFiL25neC1jb2xvci1waWNrZXIvIiwic291cmNlcyI6WyJjb21wb25lbnRzL3BhcnRzL2NvbG9yLXByZXNldC1zdWJsaXN0L2NvbG9yLXByZXNldC1zdWJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNILFNBQVMsRUFDVCxLQUFLLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxNQUFNLEVBRU4saUJBQWlCLEVBQ2pCLE1BQU0sRUFDTixZQUFZLEVBQ1osV0FBVyxFQUNkLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDdkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBWW5GO0lBa0JJLDRCQUNxQixRQUFtQixFQUNELFFBQVEsRUFDMUIsR0FBc0I7UUFGdEIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNELGFBQVEsR0FBUixRQUFRLENBQUE7UUFDMUIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFmcEMsb0JBQWUsR0FBRyxJQUFJLFlBQVksQ0FBUSxLQUFLLENBQUMsQ0FBQztRQUdqRCxjQUFTLEdBQXFDLElBQUksQ0FBQztRQUtuRCxpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUU3QixVQUFLLEdBQW9CLEVBQUUsQ0FBQztJQU1wQyxDQUFDO0lBRU0sd0NBQVcsR0FBbEI7UUFDSSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRU8sNENBQWUsR0FBdkI7UUFDSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLFFBQVEsSUFBSyxPQUFBLFFBQVEsRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQ7O09BRUc7SUFDSSw4Q0FBaUIsR0FBeEIsVUFBeUIsS0FBWTtRQUNqQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRU0sd0NBQVcsR0FBbEI7UUFDSSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRU8sZ0RBQW1CLEdBQTNCO1FBQUEsaUJBR0M7UUFGRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFdBQVcsRUFBRSxjQUFNLE9BQUEsS0FBSSxDQUFDLFNBQVMsRUFBRSxFQUFoQixDQUFnQixDQUFDLENBQUMsQ0FBQztRQUMxRixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFlBQVksRUFBRSxjQUFNLE9BQUEsS0FBSSxDQUFDLFNBQVMsRUFBRSxFQUFoQixDQUFnQixDQUFDLENBQUMsQ0FBQztJQUMvRixDQUFDO0lBRU8sc0NBQVMsR0FBakI7UUFDSSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7WUFDMUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDMUI7SUFDTCxDQUFDO0lBR0Qsc0JBQVcseUNBQVM7YUFBcEI7WUFDSSxPQUFPLGVBQWEsSUFBSSxDQUFDLFNBQVcsQ0FBQztRQUN6QyxDQUFDOzs7T0FBQTtJQTNERDtRQURDLEtBQUssRUFBRTswQ0FDSyxLQUFLO29EQUFRO0lBRzFCO1FBREMsTUFBTSxFQUFFOzsrREFDK0M7SUFHeEQ7UUFEQyxLQUFLLEVBQUU7O3lEQUNrRDtJQUcxRDtRQURDLEtBQUssRUFBRTswQ0FDWSxLQUFLOzJEQUFDO0lBZ0QxQjtRQURDLFdBQVcsQ0FBQyxXQUFXLENBQUM7Ozt1REFHeEI7SUE5RFEsa0JBQWtCO1FBVjlCLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsdXZCQUFvRDtZQUtwRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtZQUMvQyxVQUFVLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxhQUFhLENBQUM7O1NBQ2hELENBQUM7UUFxQk8sbUJBQUEsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO2lEQURVLFNBQVMsVUFFZCxpQkFBaUI7T0FyQmxDLGtCQUFrQixDQStEOUI7SUFBRCx5QkFBQztDQUFBLEFBL0RELElBK0RDO1NBL0RZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ29tcG9uZW50LFxuICAgIElucHV0LFxuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICAgIFJlbmRlcmVyMixcbiAgICBJbmplY3QsXG4gICAgT25EZXN0cm95LFxuICAgIENoYW5nZURldGVjdG9yUmVmLFxuICAgIE91dHB1dCxcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgSG9zdEJpbmRpbmdcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb2xvciB9IGZyb20gJy4vLi4vLi4vLi4vaGVscGVycy9jb2xvci5jbGFzcyc7XG5pbXBvcnQgeyBPcGFjaXR5QW5pbWF0aW9uLCBMaXN0QW5pbWF0aW9uIH0gZnJvbSAnLi9jb2xvci1wcmVzZXQtc3VibGlzdC5hbmltYXRpb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogYGNvbG9yLXByZXNldC1zdWJsaXN0YCxcbiAgICB0ZW1wbGF0ZVVybDogYC4vY29sb3ItcHJlc2V0LXN1Ymxpc3QuY29tcG9uZW50Lmh0bWxgLFxuICAgIHN0eWxlVXJsczogW1xuICAgICAgICBgLi8uLi9iYXNlLnN0eWxlLnNjc3NgLFxuICAgICAgICBgLi9jb2xvci1wcmVzZXQtc3VibGlzdC5jb21wb25lbnQuc2Nzc2BcbiAgICBdLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIGFuaW1hdGlvbnM6IFtPcGFjaXR5QW5pbWF0aW9uLCBMaXN0QW5pbWF0aW9uXVxufSlcbmV4cG9ydCBjbGFzcyBDb2xvclByZXNldFN1Ymxpc3QgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgbGlzdDogQXJyYXk8Q29sb3I+O1xuXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIHNlbGVjdGlvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q29sb3I+KGZhbHNlKTtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGRpcmVjdGlvbjogJ2Rvd24nIHwgJ3VwJyB8ICdsZWZ0JyB8ICdyaWdodCcgPSAndXAnO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgYWN0aXZlQ29sb3I6IENvbG9yO1xuXG4gICAgcHVibGljIHNob3dDaGlsZHJlbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHJpdmF0ZSBob29rczogQXJyYXk8RnVuY3Rpb24+ID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSByZW5kZXJlcjogUmVuZGVyZXIyLCBcbiAgICAgICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSByZWFkb25seSBkb2N1bWVudCwgXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZil7XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVycygpO1xuICAgICAgICB0aGlzLmNkci5kZXRhY2goKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbW92ZUxpc3RlbmVycygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ob29rcy5mb3JFYWNoKChjYWxsYmFjaykgPT4gY2FsbGJhY2soKSk7XG4gICAgICAgIHRoaXMuaG9va3MubGVuZ3RoID0gMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBlbWl0IGNvbG9yIGNoYW5nZVxuICAgICAqL1xuICAgIHB1YmxpYyBvblNlbGVjdGlvbkNoYW5nZShjb2xvcjogQ29sb3IpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UubmV4dChjb2xvcik7XG4gICAgfVxuXG4gICAgcHVibGljIG9uTG9uZ1ByZXNzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNob3dDaGlsZHJlbiA9IHRydWU7XG4gICAgICAgIHRoaXMubGlzdGVuRG9jdW1lbnRDbGljaygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgbGlzdGVuRG9jdW1lbnRDbGljaygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ob29rcy5wdXNoKHRoaXMucmVuZGVyZXIubGlzdGVuKHRoaXMuZG9jdW1lbnQsICdtb3VzZWRvd24nLCAoKSA9PiB0aGlzLmNsb3NlTGlzdCgpKSk7XG4gICAgICAgIHRoaXMuaG9va3MucHVzaCh0aGlzLnJlbmRlcmVyLmxpc3Rlbih0aGlzLmRvY3VtZW50LCAndG91Y2hzdGFydCcsICgpID0+IHRoaXMuY2xvc2VMaXN0KCkpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNsb3NlTGlzdCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuc2hvd0NoaWxkcmVuKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dDaGlsZHJlbiA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVycygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzc05hbWUnKVxuICAgIHB1YmxpYyBnZXQgY2xhc3NOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgZGlyZWN0aW9uLSR7dGhpcy5kaXJlY3Rpb259YDtcbiAgICB9XG59Il19