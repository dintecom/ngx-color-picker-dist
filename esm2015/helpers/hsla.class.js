import { BaseColor } from './base-color.class';
/**
 * HSL and HSI are the same
 *
 * Hue = ranges from 0 to 360°
 * Saturation = ranges from 0 to 100%
 * Lightness or Intensity = ranges from 0 to 100%
 * Alpha = range from 0-1
 */
export class Hsla extends BaseColor {
    constructor(hue, saturation, lightness, alpha) {
        super();
        this.hue = hue;
        this.saturation = saturation;
        this.lightness = lightness;
        this.alpha = alpha;
    }
    toString(showAlphaChannel = true) {
        return showAlphaChannel
            ? `hsla(${this.getHue()}, ${this.getSaturation()}%, ${this.getLightness()}%, ${this.getAlpha()})`
            : `hsl(${this.getHue()}, ${this.getSaturation()}%, ${this.getLightness()}%)`;
    }
    getHue() {
        return Math.round(this.hue);
    }
    getSaturation() {
        return Math.round(this.saturation);
    }
    getLightness() {
        return Math.round(this.lightness);
    }
    getAlpha() {
        return Math.round(this.alpha * 100) / 100;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHNsYS5jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BpcGxhYi9uZ3gtY29sb3ItcGlja2VyLyIsInNvdXJjZXMiOlsiaGVscGVycy9oc2xhLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUvQzs7Ozs7OztHQU9HO0FBQ0gsTUFBTSxPQUFPLElBQUssU0FBUSxTQUFTO0lBRS9CLFlBQW1CLEdBQVcsRUFBUyxVQUFrQixFQUFTLFNBQWlCLEVBQVMsS0FBYTtRQUNyRyxLQUFLLEVBQUUsQ0FBQztRQURPLFFBQUcsR0FBSCxHQUFHLENBQVE7UUFBUyxlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQVMsY0FBUyxHQUFULFNBQVMsQ0FBUTtRQUFTLFVBQUssR0FBTCxLQUFLLENBQVE7SUFFekcsQ0FBQztJQUVNLFFBQVEsQ0FBQyxtQkFBNEIsSUFBSTtRQUM1QyxPQUFPLGdCQUFnQjtZQUNuQixDQUFDLENBQUMsUUFBUSxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssSUFBSSxDQUFDLGFBQWEsRUFBRSxNQUFNLElBQUksQ0FBQyxZQUFZLEVBQUUsTUFBTSxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUc7WUFDakcsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLElBQUksQ0FBQyxhQUFhLEVBQUUsTUFBTSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQztJQUNyRixDQUFDO0lBRU0sTUFBTTtRQUNULE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVNLGFBQWE7UUFDaEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRU0sWUFBWTtRQUNmLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVNLFFBQVE7UUFDWCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDOUMsQ0FBQztDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZUNvbG9yIH0gZnJvbSAnLi9iYXNlLWNvbG9yLmNsYXNzJztcblxuLyoqXG4gKiBIU0wgYW5kIEhTSSBhcmUgdGhlIHNhbWVcbiAqIFxuICogSHVlID0gcmFuZ2VzIGZyb20gMCB0byAzNjDCsFxuICogU2F0dXJhdGlvbiA9IHJhbmdlcyBmcm9tIDAgdG8gMTAwJVxuICogTGlnaHRuZXNzIG9yIEludGVuc2l0eSA9IHJhbmdlcyBmcm9tIDAgdG8gMTAwJVxuICogQWxwaGEgPSByYW5nZSBmcm9tIDAtMVxuICovXG5leHBvcnQgY2xhc3MgSHNsYSBleHRlbmRzIEJhc2VDb2xvciB7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaHVlOiBudW1iZXIsIHB1YmxpYyBzYXR1cmF0aW9uOiBudW1iZXIsIHB1YmxpYyBsaWdodG5lc3M6IG51bWJlciwgcHVibGljIGFscGhhOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoc2hvd0FscGhhQ2hhbm5lbDogYm9vbGVhbiA9IHRydWUpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gc2hvd0FscGhhQ2hhbm5lbCBcbiAgICAgICAgICAgID8gYGhzbGEoJHt0aGlzLmdldEh1ZSgpfSwgJHt0aGlzLmdldFNhdHVyYXRpb24oKX0lLCAke3RoaXMuZ2V0TGlnaHRuZXNzKCl9JSwgJHt0aGlzLmdldEFscGhhKCl9KWBcbiAgICAgICAgICAgIDogYGhzbCgke3RoaXMuZ2V0SHVlKCl9LCAke3RoaXMuZ2V0U2F0dXJhdGlvbigpfSUsICR7dGhpcy5nZXRMaWdodG5lc3MoKX0lKWA7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEh1ZSgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQodGhpcy5odWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRTYXR1cmF0aW9uKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh0aGlzLnNhdHVyYXRpb24pO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRMaWdodG5lc3MoKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHRoaXMubGlnaHRuZXNzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0QWxwaGEoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQodGhpcy5hbHBoYSAqIDEwMCkgLyAxMDA7XG4gICAgfVxufVxuIl19