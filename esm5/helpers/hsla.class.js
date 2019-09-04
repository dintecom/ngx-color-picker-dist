import * as tslib_1 from "tslib";
import { BaseColor } from './base-color.class';
/**
 * HSL and HSI are the same
 *
 * Hue = ranges from 0 to 360°
 * Saturation = ranges from 0 to 100%
 * Lightness or Intensity = ranges from 0 to 100%
 * Alpha = range from 0-1
 */
var Hsla = /** @class */ (function (_super) {
    tslib_1.__extends(Hsla, _super);
    function Hsla(hue, saturation, lightness, alpha) {
        var _this = _super.call(this) || this;
        _this.hue = hue;
        _this.saturation = saturation;
        _this.lightness = lightness;
        _this.alpha = alpha;
        return _this;
    }
    Hsla.prototype.toString = function (showAlphaChannel) {
        if (showAlphaChannel === void 0) { showAlphaChannel = true; }
        return showAlphaChannel
            ? "hsla(" + this.getHue() + ", " + this.getSaturation() + "%, " + this.getLightness() + "%, " + this.getAlpha() + ")"
            : "hsl(" + this.getHue() + ", " + this.getSaturation() + "%, " + this.getLightness() + "%)";
    };
    Hsla.prototype.getHue = function () {
        return Math.round(this.hue);
    };
    Hsla.prototype.getSaturation = function () {
        return Math.round(this.saturation);
    };
    Hsla.prototype.getLightness = function () {
        return Math.round(this.lightness);
    };
    Hsla.prototype.getAlpha = function () {
        return Math.round(this.alpha * 100) / 100;
    };
    return Hsla;
}(BaseColor));
export { Hsla };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHNsYS5jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BpcGxhYi9uZ3gtY29sb3ItcGlja2VyLyIsInNvdXJjZXMiOlsiaGVscGVycy9oc2xhLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFL0M7Ozs7Ozs7R0FPRztBQUNIO0lBQTBCLGdDQUFTO0lBRS9CLGNBQW1CLEdBQVcsRUFBUyxVQUFrQixFQUFTLFNBQWlCLEVBQVMsS0FBYTtRQUF6RyxZQUNJLGlCQUFPLFNBQ1Y7UUFGa0IsU0FBRyxHQUFILEdBQUcsQ0FBUTtRQUFTLGdCQUFVLEdBQVYsVUFBVSxDQUFRO1FBQVMsZUFBUyxHQUFULFNBQVMsQ0FBUTtRQUFTLFdBQUssR0FBTCxLQUFLLENBQVE7O0lBRXpHLENBQUM7SUFFTSx1QkFBUSxHQUFmLFVBQWdCLGdCQUFnQztRQUFoQyxpQ0FBQSxFQUFBLHVCQUFnQztRQUM1QyxPQUFPLGdCQUFnQjtZQUNuQixDQUFDLENBQUMsVUFBUSxJQUFJLENBQUMsTUFBTSxFQUFFLFVBQUssSUFBSSxDQUFDLGFBQWEsRUFBRSxXQUFNLElBQUksQ0FBQyxZQUFZLEVBQUUsV0FBTSxJQUFJLENBQUMsUUFBUSxFQUFFLE1BQUc7WUFDakcsQ0FBQyxDQUFDLFNBQU8sSUFBSSxDQUFDLE1BQU0sRUFBRSxVQUFLLElBQUksQ0FBQyxhQUFhLEVBQUUsV0FBTSxJQUFJLENBQUMsWUFBWSxFQUFFLE9BQUksQ0FBQztJQUNyRixDQUFDO0lBRU0scUJBQU0sR0FBYjtRQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVNLDRCQUFhLEdBQXBCO1FBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRU0sMkJBQVksR0FBbkI7UUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFTSx1QkFBUSxHQUFmO1FBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQzlDLENBQUM7SUFDTCxXQUFDO0FBQUQsQ0FBQyxBQTNCRCxDQUEwQixTQUFTLEdBMkJsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VDb2xvciB9IGZyb20gJy4vYmFzZS1jb2xvci5jbGFzcyc7XG5cbi8qKlxuICogSFNMIGFuZCBIU0kgYXJlIHRoZSBzYW1lXG4gKiBcbiAqIEh1ZSA9IHJhbmdlcyBmcm9tIDAgdG8gMzYwwrBcbiAqIFNhdHVyYXRpb24gPSByYW5nZXMgZnJvbSAwIHRvIDEwMCVcbiAqIExpZ2h0bmVzcyBvciBJbnRlbnNpdHkgPSByYW5nZXMgZnJvbSAwIHRvIDEwMCVcbiAqIEFscGhhID0gcmFuZ2UgZnJvbSAwLTFcbiAqL1xuZXhwb3J0IGNsYXNzIEhzbGEgZXh0ZW5kcyBCYXNlQ29sb3Ige1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGh1ZTogbnVtYmVyLCBwdWJsaWMgc2F0dXJhdGlvbjogbnVtYmVyLCBwdWJsaWMgbGlnaHRuZXNzOiBudW1iZXIsIHB1YmxpYyBhbHBoYTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKHNob3dBbHBoYUNoYW5uZWw6IGJvb2xlYW4gPSB0cnVlKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHNob3dBbHBoYUNoYW5uZWwgXG4gICAgICAgICAgICA/IGBoc2xhKCR7dGhpcy5nZXRIdWUoKX0sICR7dGhpcy5nZXRTYXR1cmF0aW9uKCl9JSwgJHt0aGlzLmdldExpZ2h0bmVzcygpfSUsICR7dGhpcy5nZXRBbHBoYSgpfSlgXG4gICAgICAgICAgICA6IGBoc2woJHt0aGlzLmdldEh1ZSgpfSwgJHt0aGlzLmdldFNhdHVyYXRpb24oKX0lLCAke3RoaXMuZ2V0TGlnaHRuZXNzKCl9JSlgO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRIdWUoKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHRoaXMuaHVlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0U2F0dXJhdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQodGhpcy5zYXR1cmF0aW9uKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0TGlnaHRuZXNzKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh0aGlzLmxpZ2h0bmVzcyk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEFscGhhKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHRoaXMuYWxwaGEgKiAxMDApIC8gMTAwO1xuICAgIH1cbn1cbiJdfQ==