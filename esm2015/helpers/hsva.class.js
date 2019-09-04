import { BaseColor } from './base-color.class';
/**
 * HSB and HSV are the same
 *
 * Hue = ranges from 0 to 360°
 * Saturation = ranges from 0 to 100%
 * Brightness or Value = ranges from 0 to 100%
 * Alpha = range from 0-1
 */
export class Hsva extends BaseColor {
    constructor(hue, saturation, value, alpha) {
        super();
        this.hue = hue;
        this.saturation = saturation;
        this.value = value;
        this.alpha = alpha;
    }
    toString(showAlphaChannel = true) {
        return showAlphaChannel ? `hsva(${this.getHue()}, ${this.getSaturation()}%, ${this.getValue()}%, ${this.getAlpha()})`
            : `hsv(${this.getHue()}, ${this.getSaturation()}%, ${this.getValue()}%)`;
    }
    getHue() {
        return Math.round(this.hue);
    }
    getSaturation() {
        return Math.round(this.saturation);
    }
    getValue() {
        return Math.round(this.value);
    }
    getAlpha() {
        return Math.round(this.alpha * 100) / 100;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHN2YS5jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BpcGxhYi9uZ3gtY29sb3ItcGlja2VyLyIsInNvdXJjZXMiOlsiaGVscGVycy9oc3ZhLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUvQzs7Ozs7OztHQU9HO0FBQ0gsTUFBTSxPQUFPLElBQUssU0FBUSxTQUFTO0lBRS9CLFlBQW1CLEdBQVcsRUFBUyxVQUFrQixFQUFTLEtBQWEsRUFBUyxLQUFhO1FBQ2pHLEtBQUssRUFBRSxDQUFDO1FBRE8sUUFBRyxHQUFILEdBQUcsQ0FBUTtRQUFTLGVBQVUsR0FBVixVQUFVLENBQVE7UUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQVMsVUFBSyxHQUFMLEtBQUssQ0FBUTtJQUVyRyxDQUFDO0lBRU0sUUFBUSxDQUFDLG1CQUE0QixJQUFJO1FBQzVDLE9BQU8sZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLFFBQVEsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLElBQUksQ0FBQyxhQUFhLEVBQUUsTUFBTSxJQUFJLENBQUMsUUFBUSxFQUFFLE1BQU0sSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHO1lBQzdGLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxJQUFJLENBQUMsYUFBYSxFQUFFLE1BQU0sSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUM7SUFDckcsQ0FBQztJQUVNLE1BQU07UUFDVCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFTSxhQUFhO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVNLFFBQVE7UUFDWCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFTSxRQUFRO1FBQ1gsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQzlDLENBQUM7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VDb2xvciB9IGZyb20gJy4vYmFzZS1jb2xvci5jbGFzcyc7XG5cbi8qKlxuICogSFNCIGFuZCBIU1YgYXJlIHRoZSBzYW1lXG4gKiBcbiAqIEh1ZSA9IHJhbmdlcyBmcm9tIDAgdG8gMzYwwrBcbiAqIFNhdHVyYXRpb24gPSByYW5nZXMgZnJvbSAwIHRvIDEwMCVcbiAqIEJyaWdodG5lc3Mgb3IgVmFsdWUgPSByYW5nZXMgZnJvbSAwIHRvIDEwMCVcbiAqIEFscGhhID0gcmFuZ2UgZnJvbSAwLTFcbiAqL1xuZXhwb3J0IGNsYXNzIEhzdmEgZXh0ZW5kcyBCYXNlQ29sb3Ige1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGh1ZTogbnVtYmVyLCBwdWJsaWMgc2F0dXJhdGlvbjogbnVtYmVyLCBwdWJsaWMgdmFsdWU6IG51bWJlciwgcHVibGljIGFscGhhOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoc2hvd0FscGhhQ2hhbm5lbDogYm9vbGVhbiA9IHRydWUpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gc2hvd0FscGhhQ2hhbm5lbCA/IGBoc3ZhKCR7dGhpcy5nZXRIdWUoKX0sICR7dGhpcy5nZXRTYXR1cmF0aW9uKCl9JSwgJHt0aGlzLmdldFZhbHVlKCl9JSwgJHt0aGlzLmdldEFscGhhKCl9KWAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYGhzdigke3RoaXMuZ2V0SHVlKCl9LCAke3RoaXMuZ2V0U2F0dXJhdGlvbigpfSUsICR7dGhpcy5nZXRWYWx1ZSgpfSUpYDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0SHVlKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh0aGlzLmh1ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFNhdHVyYXRpb24oKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHRoaXMuc2F0dXJhdGlvbik7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFZhbHVlKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh0aGlzLnZhbHVlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0QWxwaGEoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQodGhpcy5hbHBoYSAqIDEwMCkgLyAxMDA7XG4gICAgfVxufVxuIl19