import * as tslib_1 from "tslib";
import { BaseColor } from './base-color.class';
/**
 * CMYK color space
 *
 * Cyan = ranges from 0 to 100%
 * Magenta = ranges from 0 to 100%
 * Yellow = ranges from 0 to 100%
 * blacK = ranges from 0 to 100%
 */
var Cmyk = /** @class */ (function (_super) {
    tslib_1.__extends(Cmyk, _super);
    function Cmyk(cyan, magenta, yellow, black) {
        var _this = _super.call(this) || this;
        _this.cyan = cyan;
        _this.magenta = magenta;
        _this.yellow = yellow;
        _this.black = black;
        return _this;
    }
    Cmyk.prototype.toString = function () {
        return "cmyk(" + this.getCyan() + "%, " + this.getMagenta() + "%, " + this.getYellow() + "%, " + this.getBlack() + "%)";
    };
    Cmyk.prototype.getCyan = function () {
        return Math.round(this.cyan);
    };
    Cmyk.prototype.getMagenta = function () {
        return Math.round(this.magenta);
    };
    Cmyk.prototype.getYellow = function () {
        return Math.round(this.yellow);
    };
    Cmyk.prototype.getBlack = function () {
        return Math.round(this.black);
    };
    return Cmyk;
}(BaseColor));
export { Cmyk };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY215ay5jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BpcGxhYi9uZ3gtY29sb3ItcGlja2VyLyIsInNvdXJjZXMiOlsiaGVscGVycy9jbXlrLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFL0M7Ozs7Ozs7R0FPRztBQUNIO0lBQTBCLGdDQUFTO0lBRS9CLGNBQW1CLElBQVksRUFBUyxPQUFlLEVBQVMsTUFBYyxFQUFTLEtBQWE7UUFBcEcsWUFDSSxpQkFBTyxTQUNWO1FBRmtCLFVBQUksR0FBSixJQUFJLENBQVE7UUFBUyxhQUFPLEdBQVAsT0FBTyxDQUFRO1FBQVMsWUFBTSxHQUFOLE1BQU0sQ0FBUTtRQUFTLFdBQUssR0FBTCxLQUFLLENBQVE7O0lBRXBHLENBQUM7SUFFTSx1QkFBUSxHQUFmO1FBQ0ksT0FBTyxVQUFRLElBQUksQ0FBQyxPQUFPLEVBQUUsV0FBTSxJQUFJLENBQUMsVUFBVSxFQUFFLFdBQU0sSUFBSSxDQUFDLFNBQVMsRUFBRSxXQUFNLElBQUksQ0FBQyxRQUFRLEVBQUUsT0FBSSxDQUFDO0lBQ3hHLENBQUM7SUFFTSxzQkFBTyxHQUFkO1FBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRU0seUJBQVUsR0FBakI7UUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFTSx3QkFBUyxHQUFoQjtRQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVNLHVCQUFRLEdBQWY7UUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFDTCxXQUFDO0FBQUQsQ0FBQyxBQXpCRCxDQUEwQixTQUFTLEdBeUJsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VDb2xvciB9IGZyb20gJy4vYmFzZS1jb2xvci5jbGFzcyc7XG5cbi8qKlxuICogQ01ZSyBjb2xvciBzcGFjZVxuICogXG4gKiBDeWFuID0gcmFuZ2VzIGZyb20gMCB0byAxMDAlXG4gKiBNYWdlbnRhID0gcmFuZ2VzIGZyb20gMCB0byAxMDAlXG4gKiBZZWxsb3cgPSByYW5nZXMgZnJvbSAwIHRvIDEwMCVcbiAqIGJsYWNLID0gcmFuZ2VzIGZyb20gMCB0byAxMDAlXG4gKi9cbmV4cG9ydCBjbGFzcyBDbXlrIGV4dGVuZHMgQmFzZUNvbG9yIHtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBjeWFuOiBudW1iZXIsIHB1YmxpYyBtYWdlbnRhOiBudW1iZXIsIHB1YmxpYyB5ZWxsb3c6IG51bWJlciwgcHVibGljIGJsYWNrOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGBjbXlrKCR7dGhpcy5nZXRDeWFuKCl9JSwgJHt0aGlzLmdldE1hZ2VudGEoKX0lLCAke3RoaXMuZ2V0WWVsbG93KCl9JSwgJHt0aGlzLmdldEJsYWNrKCl9JSlgO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRDeWFuKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh0aGlzLmN5YW4pO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRNYWdlbnRhKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh0aGlzLm1hZ2VudGEpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRZZWxsb3coKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHRoaXMueWVsbG93KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0QmxhY2soKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHRoaXMuYmxhY2spO1xuICAgIH1cbn0iXX0=