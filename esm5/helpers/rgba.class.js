import * as tslib_1 from "tslib";
import { BaseColor } from './base-color.class';
/**
 * RGB (Red Green Blue)
 *
 * Red = ranges from 0-255
 * Green = ranges from 0-255
 * Blue = ranges from 0-255
 * Alpha = range from 0-1
 */
var Rgba = /** @class */ (function (_super) {
    tslib_1.__extends(Rgba, _super);
    function Rgba(red, green, blue, alpha) {
        var _this = _super.call(this) || this;
        _this.red = red;
        _this.green = green;
        _this.blue = blue;
        _this.alpha = alpha;
        return _this;
    }
    Rgba.prototype.toString = function (showAlphaChannel) {
        if (showAlphaChannel === void 0) { showAlphaChannel = true; }
        return showAlphaChannel
            ? "rgba(" + this.getRed() + ", " + this.getGreen() + ", " + this.getBlue() + ", " + this.getAlpha() + ")"
            : "rgb(" + this.getRed() + ", " + this.getGreen() + ", " + this.getBlue() + ")";
    };
    Rgba.prototype.getRed = function () {
        return Math.round(this.red);
    };
    Rgba.prototype.getGreen = function () {
        return Math.round(this.green);
    };
    Rgba.prototype.getBlue = function () {
        return Math.round(this.blue);
    };
    Rgba.prototype.getAlpha = function () {
        return Math.round(this.alpha * 100) / 100;
    };
    return Rgba;
}(BaseColor));
export { Rgba };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmdiYS5jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BpcGxhYi9uZ3gtY29sb3ItcGlja2VyLyIsInNvdXJjZXMiOlsiaGVscGVycy9yZ2JhLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFL0M7Ozs7Ozs7R0FPRztBQUNIO0lBQTBCLGdDQUFTO0lBRS9CLGNBQW1CLEdBQVcsRUFBUyxLQUFhLEVBQVMsSUFBWSxFQUFTLEtBQWE7UUFBL0YsWUFDSSxpQkFBTyxTQUNWO1FBRmtCLFNBQUcsR0FBSCxHQUFHLENBQVE7UUFBUyxXQUFLLEdBQUwsS0FBSyxDQUFRO1FBQVMsVUFBSSxHQUFKLElBQUksQ0FBUTtRQUFTLFdBQUssR0FBTCxLQUFLLENBQVE7O0lBRS9GLENBQUM7SUFFTSx1QkFBUSxHQUFmLFVBQWdCLGdCQUFnQztRQUFoQyxpQ0FBQSxFQUFBLHVCQUFnQztRQUM1QyxPQUFPLGdCQUFnQjtZQUNuQixDQUFDLENBQUMsVUFBUSxJQUFJLENBQUMsTUFBTSxFQUFFLFVBQUssSUFBSSxDQUFDLFFBQVEsRUFBRSxVQUFLLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBSyxJQUFJLENBQUMsUUFBUSxFQUFFLE1BQUc7WUFDckYsQ0FBQyxDQUFDLFNBQU8sSUFBSSxDQUFDLE1BQU0sRUFBRSxVQUFLLElBQUksQ0FBQyxRQUFRLEVBQUUsVUFBSyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQUcsQ0FBQztJQUN6RSxDQUFDO0lBRU0scUJBQU0sR0FBYjtRQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVNLHVCQUFRLEdBQWY7UUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFTSxzQkFBTyxHQUFkO1FBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRU0sdUJBQVEsR0FBZjtRQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUM5QyxDQUFDO0lBQ0wsV0FBQztBQUFELENBQUMsQUEzQkQsQ0FBMEIsU0FBUyxHQTJCbEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlQ29sb3IgfSBmcm9tICcuL2Jhc2UtY29sb3IuY2xhc3MnO1xuXG4vKipcbiAqIFJHQiAoUmVkIEdyZWVuIEJsdWUpXG4gKiBcbiAqIFJlZCA9IHJhbmdlcyBmcm9tIDAtMjU1XG4gKiBHcmVlbiA9IHJhbmdlcyBmcm9tIDAtMjU1XG4gKiBCbHVlID0gcmFuZ2VzIGZyb20gMC0yNTVcbiAqIEFscGhhID0gcmFuZ2UgZnJvbSAwLTFcbiAqL1xuZXhwb3J0IGNsYXNzIFJnYmEgZXh0ZW5kcyBCYXNlQ29sb3Ige1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIHJlZDogbnVtYmVyLCBwdWJsaWMgZ3JlZW46IG51bWJlciwgcHVibGljIGJsdWU6IG51bWJlciwgcHVibGljIGFscGhhOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoc2hvd0FscGhhQ2hhbm5lbDogYm9vbGVhbiA9IHRydWUpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gc2hvd0FscGhhQ2hhbm5lbCBcbiAgICAgICAgICAgID8gYHJnYmEoJHt0aGlzLmdldFJlZCgpfSwgJHt0aGlzLmdldEdyZWVuKCl9LCAke3RoaXMuZ2V0Qmx1ZSgpfSwgJHt0aGlzLmdldEFscGhhKCl9KWBcbiAgICAgICAgICAgIDogYHJnYigke3RoaXMuZ2V0UmVkKCl9LCAke3RoaXMuZ2V0R3JlZW4oKX0sICR7dGhpcy5nZXRCbHVlKCl9KWA7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFJlZCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh0aGlzLnJlZCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEdyZWVuKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHRoaXMuZ3JlZW4pO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRCbHVlKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHRoaXMuYmx1ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEFscGhhKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHRoaXMuYWxwaGEgKiAxMDApIC8gMTAwO1xuICAgIH1cbn1cbiJdfQ==