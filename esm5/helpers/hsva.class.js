import * as tslib_1 from "tslib";
import { BaseColor } from './base-color.class';
/**
 * HSB and HSV are the same
 *
 * Hue = ranges from 0 to 360°
 * Saturation = ranges from 0 to 100%
 * Brightness or Value = ranges from 0 to 100%
 * Alpha = range from 0-1
 */
var Hsva = /** @class */ (function (_super) {
    tslib_1.__extends(Hsva, _super);
    function Hsva(hue, saturation, value, alpha) {
        var _this = _super.call(this) || this;
        _this.hue = hue;
        _this.saturation = saturation;
        _this.value = value;
        _this.alpha = alpha;
        return _this;
    }
    Hsva.prototype.toString = function (showAlphaChannel) {
        if (showAlphaChannel === void 0) { showAlphaChannel = true; }
        return showAlphaChannel ? "hsva(" + this.getHue() + ", " + this.getSaturation() + "%, " + this.getValue() + "%, " + this.getAlpha() + ")"
            : "hsv(" + this.getHue() + ", " + this.getSaturation() + "%, " + this.getValue() + "%)";
    };
    Hsva.prototype.getHue = function () {
        return Math.round(this.hue);
    };
    Hsva.prototype.getSaturation = function () {
        return Math.round(this.saturation);
    };
    Hsva.prototype.getValue = function () {
        return Math.round(this.value);
    };
    Hsva.prototype.getAlpha = function () {
        return Math.round(this.alpha * 100) / 100;
    };
    return Hsva;
}(BaseColor));
export { Hsva };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHN2YS5jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BpcGxhYi9uZ3gtY29sb3ItcGlja2VyLyIsInNvdXJjZXMiOlsiaGVscGVycy9oc3ZhLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFL0M7Ozs7Ozs7R0FPRztBQUNIO0lBQTBCLGdDQUFTO0lBRS9CLGNBQW1CLEdBQVcsRUFBUyxVQUFrQixFQUFTLEtBQWEsRUFBUyxLQUFhO1FBQXJHLFlBQ0ksaUJBQU8sU0FDVjtRQUZrQixTQUFHLEdBQUgsR0FBRyxDQUFRO1FBQVMsZ0JBQVUsR0FBVixVQUFVLENBQVE7UUFBUyxXQUFLLEdBQUwsS0FBSyxDQUFRO1FBQVMsV0FBSyxHQUFMLEtBQUssQ0FBUTs7SUFFckcsQ0FBQztJQUVNLHVCQUFRLEdBQWYsVUFBZ0IsZ0JBQWdDO1FBQWhDLGlDQUFBLEVBQUEsdUJBQWdDO1FBQzVDLE9BQU8sZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLFVBQVEsSUFBSSxDQUFDLE1BQU0sRUFBRSxVQUFLLElBQUksQ0FBQyxhQUFhLEVBQUUsV0FBTSxJQUFJLENBQUMsUUFBUSxFQUFFLFdBQU0sSUFBSSxDQUFDLFFBQVEsRUFBRSxNQUFHO1lBQzdGLENBQUMsQ0FBQyxTQUFPLElBQUksQ0FBQyxNQUFNLEVBQUUsVUFBSyxJQUFJLENBQUMsYUFBYSxFQUFFLFdBQU0sSUFBSSxDQUFDLFFBQVEsRUFBRSxPQUFJLENBQUM7SUFDckcsQ0FBQztJQUVNLHFCQUFNLEdBQWI7UUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFTSw0QkFBYSxHQUFwQjtRQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVNLHVCQUFRLEdBQWY7UUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFTSx1QkFBUSxHQUFmO1FBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQzlDLENBQUM7SUFDTCxXQUFDO0FBQUQsQ0FBQyxBQTFCRCxDQUEwQixTQUFTLEdBMEJsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VDb2xvciB9IGZyb20gJy4vYmFzZS1jb2xvci5jbGFzcyc7XG5cbi8qKlxuICogSFNCIGFuZCBIU1YgYXJlIHRoZSBzYW1lXG4gKiBcbiAqIEh1ZSA9IHJhbmdlcyBmcm9tIDAgdG8gMzYwwrBcbiAqIFNhdHVyYXRpb24gPSByYW5nZXMgZnJvbSAwIHRvIDEwMCVcbiAqIEJyaWdodG5lc3Mgb3IgVmFsdWUgPSByYW5nZXMgZnJvbSAwIHRvIDEwMCVcbiAqIEFscGhhID0gcmFuZ2UgZnJvbSAwLTFcbiAqL1xuZXhwb3J0IGNsYXNzIEhzdmEgZXh0ZW5kcyBCYXNlQ29sb3Ige1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGh1ZTogbnVtYmVyLCBwdWJsaWMgc2F0dXJhdGlvbjogbnVtYmVyLCBwdWJsaWMgdmFsdWU6IG51bWJlciwgcHVibGljIGFscGhhOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoc2hvd0FscGhhQ2hhbm5lbDogYm9vbGVhbiA9IHRydWUpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gc2hvd0FscGhhQ2hhbm5lbCA/IGBoc3ZhKCR7dGhpcy5nZXRIdWUoKX0sICR7dGhpcy5nZXRTYXR1cmF0aW9uKCl9JSwgJHt0aGlzLmdldFZhbHVlKCl9JSwgJHt0aGlzLmdldEFscGhhKCl9KWAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYGhzdigke3RoaXMuZ2V0SHVlKCl9LCAke3RoaXMuZ2V0U2F0dXJhdGlvbigpfSUsICR7dGhpcy5nZXRWYWx1ZSgpfSUpYDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0SHVlKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh0aGlzLmh1ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFNhdHVyYXRpb24oKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHRoaXMuc2F0dXJhdGlvbik7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFZhbHVlKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh0aGlzLnZhbHVlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0QWxwaGEoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQodGhpcy5hbHBoYSAqIDEwMCkgLyAxMDA7XG4gICAgfVxufVxuIl19