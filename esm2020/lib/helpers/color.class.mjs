import { Cmyk } from './cmyk.class';
import { Hsla } from './hsla.class';
import { Hsva } from './hsva.class';
import { Rgba } from './rgba.class';
import { ColorsTable } from './colors-table.class';
export class Color {
    constructor(colorString) {
        /**
         * base color used to calculate other
         * default color
         * rgb(255, 0, 0)
         * hsl(0, 100%, 50%)
         * #ff0000
         */
        this.hsva = new Hsva(0, 1, 1, 1);
        this.rgba = new Rgba(255, 0, 0, 1);
        if (colorString) {
            this.stringToColor(colorString);
        }
    }
    static from(color) {
        if (typeof color === 'string') {
            return new Color(color);
        }
        else if (color instanceof Color) {
            return color.clone();
        }
        else if (color instanceof Rgba) {
            return new Color().setRgba(color.red, color.green, color.blue, color.alpha);
        }
        else if (color instanceof Hsva) {
            return new Color().setHsva(color.hue, color.saturation, color.value, color.alpha);
        }
        else if (color instanceof Hsla) {
            return new Color().setHsla(color.hue, color.saturation, color.lightness, color.alpha);
        }
        return null;
    }
    /**
     * make from existing color new color object
     */
    clone() {
        return Color.from(this.getRgba());
    }
    /**
     * define Color from hex, rgb, rgba, hsl, hsla or cmyk string
     */
    setFromString(color) {
        return this.stringToColor(color);
    }
    /**
     * define Color from HSV values
     */
    setHsva(hue = null, saturation = 100, brightness = 100, alpha = 1) {
        if (hue != null) {
            this.hsva.hue = hue;
        }
        if (saturation != null) {
            this.hsva.saturation = saturation;
        }
        if (brightness != null) {
            this.hsva.value = brightness;
        }
        if (alpha != null) {
            alpha = alpha > 1 ? 1 : alpha < 0 ? 0 : alpha;
            this.hsva.alpha = alpha;
        }
        this.rgba = this.hsvaToRgba(this.hsva);
        return this;
    }
    /**
     * define Color from RGBa
     */
    setRgba(red = null, green = null, blue = null, alpha = 1) {
        if (red != null) {
            this.rgba.red = red;
        }
        if (green != null) {
            this.rgba.green = green;
        }
        if (blue != null) {
            this.rgba.blue = blue;
        }
        if (alpha != null) {
            alpha = alpha > 1 ? 1 : alpha < 0 ? 0 : alpha;
            this.rgba.alpha = alpha;
        }
        this.hsva = this.rgbaToHsva(this.rgba);
        return this;
    }
    /**
     * define Color from HSLa
     */
    setHsla(hue, saturation, lightness, alpha = 1) {
        if (alpha != null) {
            alpha = alpha > 1 ? 1 : alpha < 0 ? 0 : alpha;
            this.rgba.alpha = alpha;
        }
        const hsla = new Hsla(hue, saturation, lightness, alpha);
        this.rgba = this.hslaToRgba(hsla);
        this.hsva = this.rgbaToHsva(this.rgba);
        return this;
    }
    /**
     * return hexadecimal value formatted as '#341d2a' or '#341d2aFF' if alhpa channel is enabled
     */
    toHexString(alpha = false) {
        /* tslint:disable:no-bitwise */
        let hex = '#' + ((1 << 24) | (this.rgba.getRed() << 16) | (this.rgba.getGreen() << 8) | this.rgba.getBlue()).toString(16).substr(1);
        if (alpha) {
            hex += ((1 << 8) | Math.round(this.rgba.alpha * 255)).toString(16).substr(1);
        }
        /* tslint:enable:no-bitwise */
        return hex.toUpperCase();
    }
    /**
     * return rgba string formatted as rgba(52, 29, 42, 1)
     */
    toRgbaString() {
        return this.rgba.toString();
    }
    /**
     * return rgb string formatted as rgb(52, 29, 42)
     */
    toRgbString() {
        return this.rgba.toString(false);
    }
    /**
     * return hsla string formatted as hsla(327, 29%, 16%, 1)
     */
    toHslaString() {
        return this.getHsla().toString();
    }
    /**
     * return hsl string formatted as hsl(327, 29%, 16%)
     */
    toHslString() {
        return this.getHsla().toString(false);
    }
    /**
     * return hsva string formatted as hsva(327, 29%, 16%, 100%)
     */
    toHsvaString() {
        return this.hsva.toString();
    }
    /**
     * return hsv string formatted as hsv(327, 29%, 16%)
     */
    toHsvString() {
        return this.hsva.toString(false);
    }
    /**
     * return Cmyk string formatted as cmyk(100%, 100%, 100%, 100%)
     */
    toCmykString() {
        return this.getCmyk().toString();
    }
    getHsva() {
        return new Hsva(this.hsva.hue, this.hsva.saturation, this.hsva.value, this.hsva.alpha);
    }
    getRgba() {
        return new Rgba(this.rgba.red, this.rgba.green, this.rgba.blue, this.rgba.alpha);
    }
    getHsla() {
        return this.rgbaToHsla(this.rgba);
    }
    getCmyk() {
        return this.rgbaToCmyk(this.rgba);
    }
    hsvaToHsla(color) {
        const hue = color.hue;
        const s = color.saturation / 100;
        const v = color.value / 100;
        const lightness = ((2 - s) * color.value) / 2;
        const saturation = (s * v) / ((lightness <= 1) ? lightness : 2 - lightness) || 0;
        return new Hsla(hue, lightness * 100, saturation * 100, color.alpha);
    }
    hslaToHsva(color) {
        const hue = color.hue;
        const l = (color.lightness / 100) * 2;
        const s = (color.saturation / 100) * (l <= 1 ? l : 2 - l);
        const value = (l + s) / 2;
        const saturation = (2 * s) / (l + s) || 0;
        return new Hsva(hue, saturation, value, color.alpha);
    }
    rgbaToHsva(color) {
        const red = color.red / 255;
        const green = color.green / 255;
        const blue = color.blue / 255;
        const alpha = color.alpha;
        const Cmax = Math.max(red, green, blue);
        const Cmin = Math.min(red, green, blue);
        const delta = Cmax - Cmin;
        let hue = 0;
        let saturation = Cmax === 0 ? 0 : delta / Cmax;
        let brightness = Cmax;
        if (Cmax !== Cmin) {
            switch (Cmax) {
                case red:
                    hue = (green - blue) / delta + (green < blue ? 6 : 0);
                    break;
                case green:
                    hue = 2 + (blue - red) / delta;
                    break;
                case blue:
                    hue = 4 + (red - green) / delta;
                    break;
            }
            hue /= 6;
        }
        hue = hue * 360;
        saturation = saturation * 100;
        brightness = brightness * 100;
        return new Hsva(hue, saturation, brightness, alpha);
    }
    hsvaToRgba(color) {
        let red = 1;
        let green = 0;
        let blue = 0;
        const saturation = color.saturation / 100;
        const brightness = color.value / 100;
        const alpha = color.alpha;
        const hex = color.hue / 60;
        const primary = Math.floor(hex);
        const secoundary = hex - primary;
        const a = (1 - saturation) * brightness;
        const b = (1 - (saturation * secoundary)) * brightness;
        const c = (1 - (saturation * (1 - secoundary))) * brightness;
        switch (primary) {
            case 6:
            case 0:
                red = brightness;
                green = c;
                blue = a;
                break;
            case 1:
                red = b;
                green = brightness;
                blue = a;
                break;
            case 2:
                red = a;
                green = brightness;
                blue = c;
                break;
            case 3:
                red = a;
                green = b;
                blue = brightness;
                break;
            case 4:
                red = c;
                green = a;
                blue = brightness;
                break;
            case 5:
                red = brightness;
                green = a;
                blue = b;
                break;
        }
        red = red * 255;
        green = green * 255;
        blue = blue * 255;
        return new Rgba(red, green, blue, alpha);
    }
    rgbaToHsla(color) {
        // based on CamanJS
        const red = color.red / 255;
        const green = color.green / 255;
        const blue = color.blue / 255;
        const alpha = color.alpha;
        const max = Math.max(red, green, blue);
        const min = Math.min(red, green, blue);
        let hue = 0;
        let saturation = 0;
        let luminance = (max + min) / 2;
        const delta = max - min;
        if (max !== min) {
            saturation = luminance > 0.5 ? delta / (2.0 - max - min) : delta / (max + min);
            switch (max) {
                case red:
                    hue = (green - blue) / delta + (green < blue ? 6 : 0);
                    break;
                case green:
                    hue = (blue - red) / delta + 2;
                    break;
                case blue:
                    hue = (red - green) / delta + 4;
                    break;
            }
            hue /= 6;
        }
        hue = hue * 360;
        saturation = saturation * 100;
        luminance = luminance * 100;
        return new Hsla(hue, saturation, luminance, alpha);
    }
    /**
     * convert rgb color from HSLa
     *
     * hue = 0 => 360
     * saturation = 0 => 1
     * lightness = 0 => 1
     */
    hslaToRgba(color) {
        const hue = color.hue / 360;
        const saturation = color.saturation / 100;
        const lightness = color.lightness / 100;
        const alpha = color.alpha;
        let red = lightness;
        let green = lightness;
        let blue = lightness;
        if (saturation !== 0) {
            const q = lightness < 0.5 ? lightness * (1 + saturation) : lightness + saturation - (lightness * saturation);
            const p = 2 * lightness - q;
            red = this.hueToRgb(p, q, hue + (1 / 3));
            green = this.hueToRgb(p, q, hue);
            blue = this.hueToRgb(p, q, hue - (1 / 3));
        }
        red = red * 255;
        green = green * 255;
        blue = blue * 255;
        return new Rgba(red, green, blue, alpha);
    }
    hueToRgb(p, q, t) {
        // based on CamanJS
        if (t < 0) {
            t += 1;
        }
        if (t > 1) {
            t -= 1;
        }
        if (t < 1 / 6) {
            return p + (q - p) * 6 * t;
        }
        if (t < 1 / 2) {
            return q;
        }
        if (t < 2 / 3) {
            return p + (q - p) * (2 / 3 - t) * 6;
        }
        return p;
    }
    /**
     * The Red, Green, Blue values are given in the range of 0..255,
     *
     * the red color(R) is calculated from the cyan(C) and black(K) colors,
     * the green color(G) is calculated from the magenta(M) and black(K) colors,
     * The blue color(B) is calculated from the yellow(Y) and black(K) colors.
     *
     * Below is the formula of CMYK to RGB convertion
     *
     * Red = 255 × 1 - min( (1 - Cyan ÷ 100) × (1 - Black) )
     * Green = 255 × 1 - min(1 - Magenta ÷ 100) × (1 - Black)
     * Blue = 255 × 1 - min(1 - Yellow ÷ 100) × (1 - Black)
     */
    cmykToRgba(color) {
        const black = color.black / 100;
        const cyan = color.cyan / 100;
        const magenta = color.magenta / 100;
        const yellow = color.yellow / 100;
        let red = Math.min(1, (1 - cyan) * (1 - black));
        let green = Math.min(1, (1 - magenta) * (1 - black));
        let blue = Math.min(1, (1 - yellow) * (1 - black));
        red = red * 255;
        green = green * 255;
        blue = blue * 255;
        return new Rgba(red, green, blue, 1);
    }
    /**
     * The max number of R, G, B values are 255, first of all, we divided them by 255 to become the number
     * of 0~1, this ratio will be used in the calculation.
     * Rc = R ÷ 255
     * Gc = G ÷ 255
     * Bc = B ÷ 255
     * The black key(K) color could be many result, when we assume a black key value,
     * the other three colors(cyan, magenta, yellow) can be calculated.
     * we can calculate it from the red, green and blue colors, the max number of black key should be :
     * K = 1 - min(Rc, Gc, Bc);
     *
     * or we can assume we run out of the black ink, need use the remaining other three color inks to finish the printing job.
     * K = 0;
     *
     * The cyan color(C) is calculated from the red and black colors:
     * C = (1 - Rc - K) ÷ (1 - K)
     *
     * The magenta color (M) is calculated from the green and black colors:
     * M = (1 - Gr - K) ÷ (1 - K)
     *
     * The yellow color(Y) is calculated from the blue and black colors:
     * Y = (1 - Bc - K) ÷ ( 1 - K)
     */
    rgbaToCmyk(color) {
        const red = color.red / 255;
        const green = color.green / 255;
        const blue = color.blue / 255;
        let cyan = 1 - red;
        let magenta = 1 - green;
        let yellow = 1 - blue;
        let black = Math.min(cyan, magenta, yellow);
        if (black === 1) {
            return new Cmyk(0, 0, 0, 1);
        }
        cyan = (cyan - black) / (1 - black);
        magenta = (magenta - black) / (1 - black);
        yellow = (yellow - black) / (1 - black);
        black = black * 100;
        cyan = cyan * 100;
        magenta = magenta * 100;
        yellow = yellow * 100;
        return new Cmyk(cyan, magenta, yellow, black);
    }
    roundNumber(n) {
        return Math.round(n * 100) / 100;
    }
    stringToColor(colorString) {
        const str = colorString.replace(/ /g, '').toLowerCase();
        /**
         * try to find color by name in table
         */
        let rgba = ColorsTable[str] || null;
        /**
         * hex find
         */
        if (str[0] === '#') {
            let hex = str.substr(1);
            const length = hex.length;
            let a = 1;
            let hexArray = [];
            if (length === 3) {
                hexArray = hex.split('').map((value) => value + value);
            }
            else if (length === 6) {
                hexArray = hex.match(/.{2}/g);
            }
            else if (length === 8) {
                const alpha = hex.substr(-2);
                hex = hex.substr(0, length - 2);
                a = this.roundNumber(parseInt(alpha || 'FF', 16) / 255);
                hexArray = hex.match(/.{2}/g);
            }
            if (hexArray.length === 3) {
                rgba = new Rgba(parseInt(hexArray[0], 16), parseInt(hexArray[1], 16), parseInt(hexArray[2], 16), a);
            }
        }
        const OpenParenthesis = str.indexOf('(');
        const CloseParenthesis = str.indexOf(')');
        if (OpenParenthesis !== -1 && CloseParenthesis + 1 === str.length) {
            const colorTypeName = str.substr(0, OpenParenthesis);
            const params = str.substr(OpenParenthesis + 1, CloseParenthesis - (OpenParenthesis + 1)).split(',');
            let alpha = 1;
            switch (colorTypeName) {
                case 'rgba':
                    alpha = parseFloat(params.pop());
                // Fall through.
                case 'rgb':
                    rgba = new Rgba(parseInt(params[0], 10), parseInt(params[1], 10), parseInt(params[2], 10), alpha);
                    break;
                case 'hsla':
                    alpha = parseFloat(params.pop());
                case 'hsl':
                    const hsla = new Hsla(parseInt(params[0], 10), parseInt(params[1], 10), parseInt(params[2], 10), alpha);
                    rgba = this.hslaToRgba(hsla);
                    break;
                case 'cmyk':
                    const cmyk = new Cmyk(parseInt(params[0], 10), parseInt(params[1], 10), parseInt(params[2], 10), parseInt(params[3], 10));
                    rgba = this.cmykToRgba(cmyk);
                    break;
            }
        }
        if (rgba) {
            this.rgba = rgba;
            this.hsva = this.rgbaToHsva(rgba);
        }
        return this;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3IuY2xhc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9pcGxhYi9uZ3gtY29sb3ItcGlja2VyL3NyYy9saWIvaGVscGVycy9jb2xvci5jbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDcEMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNwQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUluRCxNQUFNLE9BQU8sS0FBSztJQVlkLFlBQVksV0FBeUI7UUFWckM7Ozs7OztXQU1HO1FBQ0ssU0FBSSxHQUFTLElBQUksSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLFNBQUksR0FBUyxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUd4QyxJQUFJLFdBQVcsRUFBRTtZQUNiLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDbkM7SUFDTCxDQUFDO0lBRU0sTUFBTSxDQUFDLElBQUksQ0FBQyxLQUErQztRQUM5RCxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUMzQixPQUFPLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzNCO2FBQU0sSUFBSSxLQUFLLFlBQVksS0FBSyxFQUFFO1lBQy9CLE9BQU8sS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3hCO2FBQU0sSUFBSSxLQUFLLFlBQVksSUFBSSxFQUFFO1lBQzlCLE9BQU8sSUFBSSxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQy9FO2FBQU0sSUFBSSxLQUFLLFlBQVksSUFBSSxFQUFFO1lBQzlCLE9BQU8sSUFBSSxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3JGO2FBQU0sSUFBSSxLQUFLLFlBQVksSUFBSSxFQUFFO1lBQzlCLE9BQU8sSUFBSSxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3pGO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVEOztPQUVHO0lBQ0ksS0FBSztRQUNSLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQ7O09BRUc7SUFDSSxhQUFhLENBQUMsS0FBa0I7UUFDbkMsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRDs7T0FFRztJQUNJLE9BQU8sQ0FBQyxNQUFjLElBQUksRUFBRSxhQUFxQixHQUFHLEVBQUUsYUFBcUIsR0FBRyxFQUFFLFFBQWdCLENBQUM7UUFDcEcsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO1lBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1NBQ3ZCO1FBRUQsSUFBSSxVQUFVLElBQUksSUFBSSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztTQUNyQztRQUVELElBQUksVUFBVSxJQUFJLElBQUksRUFBRTtZQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUM7U0FDaEM7UUFFRCxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7WUFDZixLQUFLLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7U0FDM0I7UUFFRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRDs7T0FFRztJQUNJLE9BQU8sQ0FBQyxNQUFjLElBQUksRUFBRSxRQUFnQixJQUFJLEVBQUUsT0FBZSxJQUFJLEVBQUUsUUFBZ0IsQ0FBQztRQUMzRixJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7WUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7U0FDdkI7UUFFRCxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7WUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7U0FDM0I7UUFFRCxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7U0FDekI7UUFFRCxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7WUFDZixLQUFLLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7U0FDM0I7UUFFRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRDs7T0FFRztJQUNJLE9BQU8sQ0FBQyxHQUFXLEVBQUUsVUFBa0IsRUFBRSxTQUFpQixFQUFFLFFBQWdCLENBQUM7UUFDaEYsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFO1lBQ2YsS0FBSyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1NBQzNCO1FBRUQsTUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVEOztPQUVHO0lBQ0ksV0FBVyxDQUFDLFFBQWlCLEtBQUs7UUFDckMsK0JBQStCO1FBQy9CLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEksSUFBSSxLQUFLLEVBQUU7WUFDUCxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNoRjtRQUNELDhCQUE4QjtRQUM5QixPQUFPLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQ7O09BRUc7SUFDSSxZQUFZO1FBQ2YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFRDs7T0FFRztJQUNJLFdBQVc7UUFDZCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRDs7T0FFRztJQUNJLFlBQVk7UUFDZixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRUQ7O09BRUc7SUFDSSxXQUFXO1FBQ2QsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRDs7T0FFRztJQUNJLFlBQVk7UUFDZixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVEOztPQUVHO0lBQ0ksV0FBVztRQUNkLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVEOztPQUVHO0lBQ0ksWUFBWTtRQUNmLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFFTSxPQUFPO1FBQ1YsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNGLENBQUM7SUFFTSxPQUFPO1FBQ1YsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JGLENBQUM7SUFFTSxPQUFPO1FBQ1YsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRU0sT0FBTztRQUNWLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVPLFVBQVUsQ0FBQyxLQUFXO1FBQzFCLE1BQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDdEIsTUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7UUFDakMsTUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDNUIsTUFBTSxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlDLE1BQU0sVUFBVSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVqRixPQUFPLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxTQUFTLEdBQUcsR0FBRyxFQUFFLFVBQVUsR0FBRyxHQUFHLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFTyxVQUFVLENBQUMsS0FBVztRQUMxQixNQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ3RCLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDMUQsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLE1BQU0sVUFBVSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUxQyxPQUFPLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRU8sVUFBVSxDQUFDLEtBQVc7UUFDMUIsTUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDNUIsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDaEMsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7UUFDOUIsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUUxQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxD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UyxHQUFHLFNBQVMsR0FBRyxHQUFHLENBQUM7UUFFNUIsT0FBTyxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ssVUFBVSxDQUFDLEtBQVc7UUFDMUIsTUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDNUIsTUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7UUFDMUMsTUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7UUFDeEMsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUUxQixJQUFJLEdBQUcsR0FBRyxTQUFTLENBQUM7UUFDcEIsSUFBSSxLQUFLLEdBQUcsU0FBUyxDQUFDO1FBQ3RCLElBQUksSUFBSSxHQUFHLFNBQVMsQ0FBQztRQUVyQixJQUFJLFVBQVUsS0FBSyxDQUFDLEVBQUU7WUFDbEIsTUFBTSxDQUFDLEdBQUcsU0FBUyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsVUFBVSxHQUFHLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxDQUFDO1lBQzdHLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1lBRTVCLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNqQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FB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InNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENteWsgfSBmcm9tICcuL2NteWsuY2xhc3MnO1xuaW1wb3J0IHsgSHNsYSB9IGZyb20gJy4vaHNsYS5jbGFzcyc7XG5pbXBvcnQgeyBIc3ZhIH0gZnJvbSAnLi9oc3ZhLmNsYXNzJztcbmltcG9ydCB7IFJnYmEgfSBmcm9tICcuL3JnYmEuY2xhc3MnO1xuaW1wb3J0IHsgQ29sb3JzVGFibGUgfSBmcm9tICcuL2NvbG9ycy10YWJsZS5jbGFzcyc7XG5cbmV4cG9ydCB0eXBlIENvbG9yU3RyaW5nID0gc3RyaW5nO1xuXG5leHBvcnQgY2xhc3MgQ29sb3Ige1xuXG4gICAgLyoqXG4gICAgICogYmFzZSBjb2xvciB1c2VkIHRvIGNhbGN1bGF0ZSBvdGhlclxuICAgICAqIGRlZmF1bHQgY29sb3JcbiAgICAgKiByZ2IoMjU1LCAwLCAwKVxuICAgICAqIGhzbCgwLCAxMDAlLCA1MCUpXG4gICAgICogI2ZmMDAwMFxuICAgICAqL1xuICAgIHByaXZhdGUgaHN2YTogSHN2YSA9IG5ldyBIc3ZhKDAsIDEsIDEsIDEpO1xuICAgIHByaXZhdGUgcmdiYTogUmdiYSA9IG5ldyBSZ2JhKDI1NSwgMCwgMCwgMSk7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb2xvclN0cmluZz86IENvbG9yU3RyaW5nKSB7XG4gICAgICAgIGlmIChjb2xvclN0cmluZykge1xuICAgICAgICAgICAgdGhpcy5zdHJpbmdUb0NvbG9yKGNvbG9yU3RyaW5nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbShjb2xvcjogQ29sb3JTdHJpbmcgfCBDb2xvciB8IEhzdmEgfCBSZ2JhIHwgSHNsYSk6IENvbG9yIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjb2xvciA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoY29sb3IpO1xuICAgICAgICB9IGVsc2UgaWYgKGNvbG9yIGluc3RhbmNlb2YgQ29sb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBjb2xvci5jbG9uZSgpO1xuICAgICAgICB9IGVsc2UgaWYgKGNvbG9yIGluc3RhbmNlb2YgUmdiYSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcigpLnNldFJnYmEoY29sb3IucmVkLCBjb2xvci5ncmVlbiwgY29sb3IuYmx1ZSwgY29sb3IuYWxwaGEpO1xuICAgICAgICB9IGVsc2UgaWYgKGNvbG9yIGluc3RhbmNlb2YgSHN2YSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcigpLnNldEhzdmEoY29sb3IuaHVlLCBjb2xvci5zYXR1cmF0aW9uLCBjb2xvci52YWx1ZSwgY29sb3IuYWxwaGEpO1xuICAgICAgICB9IGVsc2UgaWYgKGNvbG9yIGluc3RhbmNlb2YgSHNsYSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcigpLnNldEhzbGEoY29sb3IuaHVlLCBjb2xvci5zYXR1cmF0aW9uLCBjb2xvci5saWdodG5lc3MsIGNvbG9yLmFscGhhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIG1ha2UgZnJvbSBleGlzdGluZyBjb2xvciBuZXcgY29sb3Igb2JqZWN0XG4gICAgICovXG4gICAgcHVibGljIGNsb25lKCk6IENvbG9yIHtcbiAgICAgICAgcmV0dXJuIENvbG9yLmZyb20odGhpcy5nZXRSZ2JhKCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGRlZmluZSBDb2xvciBmcm9tIGhleCwgcmdiLCByZ2JhLCBoc2wsIGhzbGEgb3IgY215ayBzdHJpbmdcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0RnJvbVN0cmluZyhjb2xvcjogQ29sb3JTdHJpbmcpOiB0aGlzIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RyaW5nVG9Db2xvcihjb2xvcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZGVmaW5lIENvbG9yIGZyb20gSFNWIHZhbHVlc1xuICAgICAqL1xuICAgIHB1YmxpYyBzZXRIc3ZhKGh1ZTogbnVtYmVyID0gbnVsbCwgc2F0dXJhdGlvbjogbnVtYmVyID0gMTAwLCBicmlnaHRuZXNzOiBudW1iZXIgPSAxMDAsIGFscGhhOiBudW1iZXIgPSAxKTogdGhpcyB7XG4gICAgICAgIGlmIChodWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5oc3ZhLmh1ZSA9IGh1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzYXR1cmF0aW9uICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuaHN2YS5zYXR1cmF0aW9uID0gc2F0dXJhdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChicmlnaHRuZXNzICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuaHN2YS52YWx1ZSA9IGJyaWdodG5lc3M7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYWxwaGEgIT0gbnVsbCkge1xuICAgICAgICAgICAgYWxwaGEgPSBhbHBoYSA+IDEgPyAxIDogYWxwaGEgPCAwID8gMCA6IGFscGhhO1xuICAgICAgICAgICAgdGhpcy5oc3ZhLmFscGhhID0gYWxwaGE7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJnYmEgPSB0aGlzLmhzdmFUb1JnYmEodGhpcy5oc3ZhKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZGVmaW5lIENvbG9yIGZyb20gUkdCYVxuICAgICAqL1xuICAgIHB1YmxpYyBzZXRSZ2JhKHJlZDogbnVtYmVyID0gbnVsbCwgZ3JlZW46IG51bWJlciA9IG51bGwsIGJsdWU6IG51bWJlciA9IG51bGwsIGFscGhhOiBudW1iZXIgPSAxKTogdGhpcyB7XG4gICAgICAgIGlmIChyZWQgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5yZ2JhLnJlZCA9IHJlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChncmVlbiAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnJnYmEuZ3JlZW4gPSBncmVlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChibHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMucmdiYS5ibHVlID0gYmx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhbHBoYSAhPSBudWxsKSB7XG4gICAgICAgICAgICBhbHBoYSA9IGFscGhhID4gMSA/IDEgOiBhbHBoYSA8IDAgPyAwIDogYWxwaGE7XG4gICAgICAgICAgICB0aGlzLnJnYmEuYWxwaGEgPSBhbHBoYTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaHN2YSA9IHRoaXMucmdiYVRvSHN2YSh0aGlzLnJnYmEpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBkZWZpbmUgQ29sb3IgZnJvbSBIU0xhXG4gICAgICovXG4gICAgcHVibGljIHNldEhzbGEoaHVlOiBudW1iZXIsIHNhdHVyYXRpb246IG51bWJlciwgbGlnaHRuZXNzOiBudW1iZXIsIGFscGhhOiBudW1iZXIgPSAxKTogdGhpcyB7XG4gICAgICAgIGlmIChhbHBoYSAhPSBudWxsKSB7XG4gICAgICAgICAgICBhbHBoYSA9IGFscGhhID4gMSA/IDEgOiBhbHBoYSA8IDAgPyAwIDogYWxwaGE7XG4gICAgICAgICAgICB0aGlzLnJnYmEuYWxwaGEgPSBhbHBoYTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGhzbGEgPSBuZXcgSHNsYShodWUsIHNhdHVyYXRpb24sIGxpZ2h0bmVzcywgYWxwaGEpO1xuICAgICAgICB0aGlzLnJnYmEgPSB0aGlzLmhzbGFUb1JnYmEoaHNsYSk7XG4gICAgICAgIHRoaXMuaHN2YSA9IHRoaXMucmdiYVRvSHN2YSh0aGlzLnJnYmEpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiByZXR1cm4gaGV4YWRlY2ltYWwgdmFsdWUgZm9ybWF0dGVkIGFzICcjMzQxZDJhJyBvciAnIzM0MWQyYUZGJyBpZiBhbGhwYSBjaGFubmVsIGlzIGVuYWJsZWRcbiAgICAgKi9cbiAgICBwdWJsaWMgdG9IZXhTdHJpbmcoYWxwaGE6IGJvb2xlYW4gPSBmYWxzZSk6IENvbG9yU3RyaW5nIHtcbiAgICAgICAgLyogdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSAqL1xuICAgICAgICBsZXQgaGV4ID0gJyMnICsgKCgxIDw8IDI0KSB8ICh0aGlzLnJnYmEuZ2V0UmVkKCkgPDwgMTYpIHwgKHRoaXMucmdiYS5nZXRHcmVlbigpIDw8IDgpIHwgdGhpcy5yZ2JhLmdldEJsdWUoKSkudG9TdHJpbmcoMTYpLnN1YnN0cigxKTtcbiAgICAgICAgaWYgKGFscGhhKSB7XG4gICAgICAgICAgICBoZXggKz0gKCgxIDw8IDgpIHwgTWF0aC5yb3VuZCh0aGlzLnJnYmEuYWxwaGEgKiAyNTUpKS50b1N0cmluZygxNikuc3Vic3RyKDEpO1xuICAgICAgICB9XG4gICAgICAgIC8qIHRzbGludDplbmFibGU6bm8tYml0d2lzZSAqL1xuICAgICAgICByZXR1cm4gaGV4LnRvVXBwZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcmV0dXJuIHJnYmEgc3RyaW5nIGZvcm1hdHRlZCBhcyByZ2JhKDUyLCAyOSwgNDIsIDEpXG4gICAgICovXG4gICAgcHVibGljIHRvUmdiYVN0cmluZygpOiBDb2xvclN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnJnYmEudG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiByZXR1cm4gcmdiIHN0cmluZyBmb3JtYXR0ZWQgYXMgcmdiKDUyLCAyOSwgNDIpXG4gICAgICovXG4gICAgcHVibGljIHRvUmdiU3RyaW5nKCk6IENvbG9yU3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmdiYS50b1N0cmluZyhmYWxzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcmV0dXJuIGhzbGEgc3RyaW5nIGZvcm1hdHRlZCBhcyBoc2xhKDMyNywgMjklLCAxNiUsIDEpXG4gICAgICovXG4gICAgcHVibGljIHRvSHNsYVN0cmluZygpOiBDb2xvclN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEhzbGEoKS50b1N0cmluZygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHJldHVybiBoc2wgc3RyaW5nIGZvcm1hdHRlZCBhcyBoc2woMzI3LCAyOSUsIDE2JSlcbiAgICAgKi9cbiAgICBwdWJsaWMgdG9Ic2xTdHJpbmcoKTogQ29sb3JTdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRIc2xhKCkudG9TdHJpbmcoZmFsc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHJldHVybiBoc3ZhIHN0cmluZyBmb3JtYXR0ZWQgYXMgaHN2YSgzMjcsIDI5JSwgMTYlLCAxMDAlKVxuICAgICAqL1xuICAgIHB1YmxpYyB0b0hzdmFTdHJpbmcoKTogQ29sb3JTdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5oc3ZhLnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcmV0dXJuIGhzdiBzdHJpbmcgZm9ybWF0dGVkIGFzIGhzdigzMjcsIDI5JSwgMTYlKVxuICAgICAqL1xuICAgIHB1YmxpYyB0b0hzdlN0cmluZygpOiBDb2xvclN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmhzdmEudG9TdHJpbmcoZmFsc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHJldHVybiBDbXlrIHN0cmluZyBmb3JtYXR0ZWQgYXMgY215aygxMDAlLCAxMDAlLCAxMDAlLCAxMDAlKVxuICAgICAqL1xuICAgIHB1YmxpYyB0b0NteWtTdHJpbmcoKTogQ29sb3JTdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRDbXlrKCkudG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0SHN2YSgpOiBIc3ZhIHtcbiAgICAgICAgcmV0dXJuIG5ldyBIc3ZhKHRoaXMuaHN2YS5odWUsIHRoaXMuaHN2YS5zYXR1cmF0aW9uLCB0aGlzLmhzdmEudmFsdWUsIHRoaXMuaHN2YS5hbHBoYSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFJnYmEoKTogUmdiYSB7XG4gICAgICAgIHJldHVybiBuZXcgUmdiYSh0aGlzLnJnYmEucmVkLCB0aGlzLnJnYmEuZ3JlZW4sIHRoaXMucmdiYS5ibHVlLCB0aGlzLnJnYmEuYWxwaGEpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRIc2xhKCk6IEhzbGEge1xuICAgICAgICByZXR1cm4gdGhpcy5yZ2JhVG9Ic2xhKHRoaXMucmdiYSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldENteWsoKTogQ215ayB7XG4gICAgICAgIHJldHVybiB0aGlzLnJnYmFUb0NteWsodGhpcy5yZ2JhKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhzdmFUb0hzbGEoY29sb3I6IEhzdmEpOiBIc2xhIHtcbiAgICAgICAgY29uc3QgaHVlID0gY29sb3IuaHVlO1xuICAgICAgICBjb25zdCBzID0gY29sb3Iuc2F0dXJhdGlvbiAvIDEwMDtcbiAgICAgICAgY29uc3QgdiA9IGNvbG9yLnZhbHVlIC8gMTAwO1xuICAgICAgICBjb25zdCBsaWdodG5lc3MgPSAoKDIgLSBzKSAqIGNvbG9yLnZhbHVlKSAvIDI7XG4gICAgICAgIGNvbnN0IHNhdHVyYXRpb24gPSAocyAqIHYpIC8gKChsaWdodG5lc3MgPD0gMSkgPyBsaWdodG5lc3MgOiAyIC0gbGlnaHRuZXNzKSB8fCAwO1xuXG4gICAgICAgIHJldHVybiBuZXcgSHNsYShodWUsIGxpZ2h0bmVzcyAqIDEwMCwgc2F0dXJhdGlvbiAqIDEwMCwgY29sb3IuYWxwaGEpO1xuICAgIH1cblxuICAgIHByaXZhdGUgaHNsYVRvSHN2YShjb2xvcjogSHNsYSk6IEhzdmEge1xuICAgICAgICBjb25zdCBodWUgPSBjb2xvci5odWU7XG4gICAgICAgIGNvbnN0IGwgPSAoY29sb3IubGlnaHRuZXNzIC8gMTAwKSAqIDI7XG4gICAgICAgIGNvbnN0IHMgPSAoY29sb3Iuc2F0dXJhdGlvbiAvIDEwMCkgKiAobCA8PSAxID8gbCA6IDIgLSBsKTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSAobCArIHMpIC8gMjtcbiAgICAgICAgY29uc3Qgc2F0dXJhdGlvbiA9ICgyICogcykgLyAobCArIHMpIHx8IDA7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBIc3ZhKGh1ZSwgc2F0dXJhdGlvbiwgdmFsdWUsIGNvbG9yLmFscGhhKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJnYmFUb0hzdmEoY29sb3I6IFJnYmEpOiBIc3ZhIHtcbiAgICAgICAgY29uc3QgcmVkID0gY29sb3IucmVkIC8gMjU1O1xuICAgICAgICBjb25zdCBncmVlbiA9IGNvbG9yLmdyZWVuIC8gMjU1O1xuICAgICAgICBjb25zdCBibHVlID0gY29sb3IuYmx1ZSAvIDI1NTtcbiAgICAgICAgY29uc3QgYWxwaGEgPSBjb2xvci5hbHBoYTtcblxuICAgICAgICBjb25zdCBDbWF4ID0gTWF0aC5tYXgocmVkLCBncmVlbiwgYmx1ZSk7XG4gICAgICAgIGNvbnN0IENtaW4gPSBNYXRoLm1pbihyZWQsIGdyZWVuLCBibHVlKTtcbiAgICAgICAgY29uc3QgZGVsdGEgPSBDbWF4IC0gQ21pbjtcblxuICAgICAgICBsZXQgaHVlID0gMDtcbiAgICAgICAgbGV0IHNhdHVyYXRpb246IG51bWJlciA9IENtYXggPT09IDAgPyAwIDogZGVsdGEgLyBDbWF4O1xuICAgICAgICBsZXQgYnJpZ2h0bmVzczogbnVtYmVyID0gQ21heDtcblxuICAgICAgICBpZiAoQ21heCAhPT0gQ21pbikge1xuICAgICAgICAgICAgc3dpdGNoIChDbWF4KSB7XG4gICAgICAgICAgICAgICAgY2FzZSByZWQ6XG4gICAgICAgICAgICAgICAgICAgIGh1ZSA9IChncmVlbiAtIGJsdWUpIC8gZGVsdGEgKyAoZ3JlZW4gPCBibHVlID8gNiA6IDApO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGdyZWVuOlxuICAgICAgICAgICAgICAgICAgICBodWUgPSAyICsgKGJsdWUgLSByZWQpIC8gZGVsdGE7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgYmx1ZTpcbiAgICAgICAgICAgICAgICAgICAgaHVlID0gNCArIChyZWQgLSBncmVlbikgLyBkZWx0YTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBodWUgLz0gNjtcbiAgICAgICAgfVxuXG4gICAgICAgIGh1ZSA9IGh1ZSAqIDM2MDtcbiAgICAgICAgc2F0dXJhdGlvbiA9IHNhdHVyYXRpb24gKiAxMDA7XG4gICAgICAgIGJyaWdodG5lc3MgPSBicmlnaHRuZXNzICogMTAwO1xuXG4gICAgICAgIHJldHVybiBuZXcgSHN2YShodWUsIHNhdHVyYXRpb24sIGJyaWdodG5lc3MsIGFscGhhKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhzdmFUb1JnYmEoY29sb3I6IEhzdmEpOiBSZ2JhIHtcbiAgICAgICAgbGV0IHJlZCA9IDE7XG4gICAgICAgIGxldCBncmVlbiA9IDA7XG4gICAgICAgIGxldCBibHVlID0gMDtcbiAgICAgICAgY29uc3Qgc2F0dXJhdGlvbiA9IGNvbG9yLnNhdHVyYXRpb24gLyAxMDA7XG4gICAgICAgIGNvbnN0IGJyaWdodG5lc3MgPSBjb2xvci52YWx1ZSAvIDEwMDtcbiAgICAgICAgY29uc3QgYWxwaGEgPSBjb2xvci5hbHBoYTtcbiAgICAgICAgY29uc3QgaGV4ID0gY29sb3IuaHVlIC8gNjA7XG5cbiAgICAgICAgY29uc3QgcHJpbWFyeSA9IE1hdGguZmxvb3IoaGV4KTtcbiAgICAgICAgY29uc3Qgc2Vjb3VuZGFyeSA9IGhleCAtIHByaW1hcnk7XG4gICAgICAgIGNvbnN0IGEgPSAoMSAtIHNhdHVyYXRpb24pICogYnJpZ2h0bmVzcztcbiAgICAgICAgY29uc3QgYiA9ICgxIC0gKHNhdHVyYXRpb24gKiBzZWNvdW5kYXJ5KSkgKiBicmlnaHRuZXNzO1xuICAgICAgICBjb25zdCBjID0gKDEgLSAoc2F0dXJhdGlvbiAqICgxIC0gc2Vjb3VuZGFyeSkpKSAqIGJyaWdodG5lc3M7XG5cbiAgICAgICAgc3dpdGNoIChwcmltYXJ5KSB7XG4gICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICBjYXNlIDA6IHJlZCA9IGJyaWdodG5lc3M7IGdyZWVuID0gYzsgYmx1ZSA9IGE7IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOiByZWQgPSBiOyBncmVlbiA9IGJyaWdodG5lc3M7IGJsdWUgPSBhOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjogcmVkID0gYTsgZ3JlZW4gPSBicmlnaHRuZXNzOyBibHVlID0gYzsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6IHJlZCA9IGE7IGdyZWVuID0gYjsgYmx1ZSA9IGJyaWdodG5lc3M7IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0OiByZWQgPSBjOyBncmVlbiA9IGE7IGJsdWUgPSBicmlnaHRuZXNzOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNTogcmVkID0gYnJpZ2h0bmVzczsgZ3JlZW4gPSBhOyBibHVlID0gYjsgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZWQgPSByZWQgKiAyNTU7XG4gICAgICAgIGdyZWVuID0gZ3JlZW4gKiAyNTU7XG4gICAgICAgIGJsdWUgPSBibHVlICogMjU1O1xuXG4gICAgICAgIHJldHVybiBuZXcgUmdiYShyZWQsIGdyZWVuLCBibHVlLCBhbHBoYSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZ2JhVG9Ic2xhKGNvbG9yOiBSZ2JhKTogSHNsYSB7XG4gICAgICAgIC8vIGJhc2VkIG9uIENhbWFuSlNcbiAgICAgICAgY29uc3QgcmVkID0gY29sb3IucmVkIC8gMjU1O1xuICAgICAgICBjb25zdCBncmVlbiA9IGNvbG9yLmdyZWVuIC8gMjU1O1xuICAgICAgICBjb25zdCBibHVlID0gY29sb3IuYmx1ZSAvIDI1NTtcbiAgICAgICAgY29uc3QgYWxwaGEgPSBjb2xvci5hbHBoYTtcblxuICAgICAgICBjb25zdCBtYXggPSBNYXRoLm1heChyZWQsIGdyZWVuLCBibHVlKTtcbiAgICAgICAgY29uc3QgbWluID0gTWF0aC5taW4ocmVkLCBncmVlbiwgYmx1ZSk7XG5cbiAgICAgICAgbGV0IGh1ZSA9IDA7XG4gICAgICAgIGxldCBzYXR1cmF0aW9uID0gMDtcbiAgICAgICAgbGV0IGx1bWluYW5jZSA9IChtYXggKyBtaW4pIC8gMjtcbiAgICAgICAgY29uc3QgZGVsdGEgPSBtYXggLSBtaW47XG5cbiAgICAgICAgaWYgKG1heCAhPT0gbWluKSB7XG4gICAgICAgICAgICBzYXR1cmF0aW9uID0gbHVtaW5hbmNlID4gMC41ID8gZGVsdGEgLyAoMi4wIC0gbWF4IC0gbWluKSA6IGRlbHRhIC8gKG1heCArIG1pbik7XG4gICAgICAgICAgICBzd2l0Y2ggKG1heCkge1xuICAgICAgICAgICAgICAgIGNhc2UgcmVkOlxuICAgICAgICAgICAgICAgICAgICBodWUgPSAoZ3JlZW4gLSBibHVlKSAvIGRlbHRhICsgKGdyZWVuIDwgYmx1ZSA/IDYgOiAwKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBncmVlbjpcbiAgICAgICAgICAgICAgICAgICAgaHVlID0gKGJsdWUgLSByZWQpIC8gZGVsdGEgKyAyO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGJsdWU6XG4gICAgICAgICAgICAgICAgICAgIGh1ZSA9IChyZWQgLSBncmVlbikgLyBkZWx0YSArIDQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBodWUgLz0gNjtcbiAgICAgICAgfVxuXG4gICAgICAgIGh1ZSA9IGh1ZSAqIDM2MDtcbiAgICAgICAgc2F0dXJhdGlvbiA9IHNhdHVyYXRpb24gKiAxMDA7XG4gICAgICAgIGx1bWluYW5jZSA9IGx1bWluYW5jZSAqIDEwMDtcblxuICAgICAgICByZXR1cm4gbmV3IEhzbGEoaHVlLCBzYXR1cmF0aW9uLCBsdW1pbmFuY2UsIGFscGhhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBjb252ZXJ0IHJnYiBjb2xvciBmcm9tIEhTTGFcbiAgICAgKlxuICAgICAqIGh1ZSA9IDAgPT4gMzYwXG4gICAgICogc2F0dXJhdGlvbiA9IDAgPT4gMVxuICAgICAqIGxpZ2h0bmVzcyA9IDAgPT4gMVxuICAgICAqL1xuICAgIHByaXZhdGUgaHNsYVRvUmdiYShjb2xvcjogSHNsYSk6IFJnYmEge1xuICAgICAgICBjb25zdCBodWUgPSBjb2xvci5odWUgLyAzNjA7XG4gICAgICAgIGNvbnN0IHNhdHVyYXRpb24gPSBjb2xvci5zYXR1cmF0aW9uIC8gMTAwO1xuICAgICAgICBjb25zdCBsaWdodG5lc3MgPSBjb2xvci5saWdodG5lc3MgLyAxMDA7XG4gICAgICAgIGNvbnN0IGFscGhhID0gY29sb3IuYWxwaGE7XG5cbiAgICAgICAgbGV0IHJlZCA9IGxpZ2h0bmVzcztcbiAgICAgICAgbGV0IGdyZWVuID0gbGlnaHRuZXNzO1xuICAgICAgICBsZXQgYmx1ZSA9IGxpZ2h0bmVzcztcblxuICAgICAgICBpZiAoc2F0dXJhdGlvbiAhPT0gMCkge1xuICAgICAgICAgICAgY29uc3QgcSA9IGxpZ2h0bmVzcyA8IDAuNSA/IGxpZ2h0bmVzcyAqICgxICsgc2F0dXJhdGlvbikgOiBsaWdodG5lc3MgKyBzYXR1cmF0aW9uIC0gKGxpZ2h0bmVzcyAqIHNhdHVyYXRpb24pO1xuICAgICAgICAgICAgY29uc3QgcCA9IDIgKiBsaWdodG5lc3MgLSBxO1xuXG4gICAgICAgICAgICByZWQgPSB0aGlzLmh1ZVRvUmdiKHAsIHEsIGh1ZSArICgxIC8gMykpO1xuICAgICAgICAgICAgZ3JlZW4gPSB0aGlzLmh1ZVRvUmdiKHAsIHEsIGh1ZSk7XG4gICAgICAgICAgICBibHVlID0gdGhpcy5odWVUb1JnYihwLCBxLCBodWUgLSAoMSAvIDMpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlZCA9IHJlZCAqIDI1NTtcbiAgICAgICAgZ3JlZW4gPSBncmVlbiAqIDI1NTtcbiAgICAgICAgYmx1ZSA9IGJsdWUgKiAyNTU7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBSZ2JhKHJlZCwgZ3JlZW4sIGJsdWUsIGFscGhhKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGh1ZVRvUmdiKHAsIHEsIHQpOiBudW1iZXIge1xuICAgICAgICAvLyBiYXNlZCBvbiBDYW1hbkpTXG4gICAgICAgIGlmICh0IDwgMCkgeyB0ICs9IDE7IH1cbiAgICAgICAgaWYgKHQgPiAxKSB7IHQgLT0gMTsgfVxuICAgICAgICBpZiAodCA8IDEgLyA2KSB7IHJldHVybiBwICsgKHEgLSBwKSAqIDYgKiB0OyB9XG4gICAgICAgIGlmICh0IDwgMSAvIDIpIHsgcmV0dXJuIHE7IH1cbiAgICAgICAgaWYgKHQgPCAyIC8gMykgeyByZXR1cm4gcCArIChxIC0gcCkgKiAoMiAvIDMgLSB0KSAqIDY7IH1cbiAgICAgICAgcmV0dXJuIHA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIFJlZCwgR3JlZW4sIEJsdWUgdmFsdWVzIGFyZSBnaXZlbiBpbiB0aGUgcmFuZ2Ugb2YgMC4uMjU1LFxuICAgICAqXG4gICAgICogdGhlIHJlZCBjb2xvcihSKSBpcyBjYWxjdWxhdGVkIGZyb20gdGhlIGN5YW4oQykgYW5kIGJsYWNrKEspIGNvbG9ycyxcbiAgICAgKiB0aGUgZ3JlZW4gY29sb3IoRykgaXMgY2FsY3VsYXRlZCBmcm9tIHRoZSBtYWdlbnRhKE0pIGFuZCBibGFjayhLKSBjb2xvcnMsXG4gICAgICogVGhlIGJsdWUgY29sb3IoQikgaXMgY2FsY3VsYXRlZCBmcm9tIHRoZSB5ZWxsb3coWSkgYW5kIGJsYWNrKEspIGNvbG9ycy5cbiAgICAgKlxuICAgICAqIEJlbG93IGlzIHRoZSBmb3JtdWxhIG9mIENNWUsgdG8gUkdCIGNvbnZlcnRpb25cbiAgICAgKlxuICAgICAqIFJlZCA9IDI1NSDDlyAxIC0gbWluKCAoMSAtIEN5YW4gw7cgMTAwKSDDlyAoMSAtIEJsYWNrKSApXG4gICAgICogR3JlZW4gPSAyNTUgw5cgMSAtIG1pbigxIC0gTWFnZW50YSDDtyAxMDApIMOXICgxIC0gQmxhY2spXG4gICAgICogQmx1ZSA9IDI1NSDDlyAxIC0gbWluKDEgLSBZZWxsb3cgw7cgMTAwKSDDlyAoMSAtIEJsYWNrKVxuICAgICAqL1xuICAgIHByaXZhdGUgY215a1RvUmdiYShjb2xvcjogQ215ayk6IFJnYmEge1xuICAgICAgICBjb25zdCBibGFjayA9IGNvbG9yLmJsYWNrIC8gMTAwO1xuICAgICAgICBjb25zdCBjeWFuID0gY29sb3IuY3lhbiAvIDEwMDtcbiAgICAgICAgY29uc3QgbWFnZW50YSA9IGNvbG9yLm1hZ2VudGEgLyAxMDA7XG4gICAgICAgIGNvbnN0IHllbGxvdyA9IGNvbG9yLnllbGxvdyAvIDEwMDtcblxuICAgICAgICBsZXQgcmVkID0gTWF0aC5taW4oMSwgKDEgLSBjeWFuKSAqICgxIC0gYmxhY2spKTtcbiAgICAgICAgbGV0IGdyZWVuID0gTWF0aC5taW4oMSwgKDEgLSBtYWdlbnRhKSAqICgxIC0gYmxhY2spKTtcbiAgICAgICAgbGV0IGJsdWUgPSBNYXRoLm1pbigxLCAoMSAtIHllbGxvdykgKiAoMSAtIGJsYWNrKSk7XG5cbiAgICAgICAgcmVkID0gcmVkICogMjU1O1xuICAgICAgICBncmVlbiA9IGdyZWVuICogMjU1O1xuICAgICAgICBibHVlID0gYmx1ZSAqIDI1NTtcblxuICAgICAgICByZXR1cm4gbmV3IFJnYmEocmVkLCBncmVlbiwgYmx1ZSwgMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIG1heCBudW1iZXIgb2YgUiwgRywgQiB2YWx1ZXMgYXJlIDI1NSwgZmlyc3Qgb2YgYWxsLCB3ZSBkaXZpZGVkIHRoZW0gYnkgMjU1IHRvIGJlY29tZSB0aGUgbnVtYmVyXG4gICAgICogb2YgMH4xLCB0aGlzIHJhdGlvIHdpbGwgYmUgdXNlZCBpbiB0aGUgY2FsY3VsYXRpb24uXG4gICAgICogUmMgPSBSIMO3IDI1NVxuICAgICAqIEdjID0gRyDDtyAyNTVcbiAgICAgKiBCYyA9IEIgw7cgMjU1XG4gICAgICogVGhlIGJsYWNrIGtleShLKSBjb2xvciBjb3VsZCBiZSBtYW55IHJlc3VsdCwgd2hlbiB3ZSBhc3N1bWUgYSBibGFjayBrZXkgdmFsdWUsXG4gICAgICogdGhlIG90aGVyIHRocmVlIGNvbG9ycyhjeWFuLCBtYWdlbnRhLCB5ZWxsb3cpIGNhbiBiZSBjYWxjdWxhdGVkLlxuICAgICAqIHdlIGNhbiBjYWxjdWxhdGUgaXQgZnJvbSB0aGUgcmVkLCBncmVlbiBhbmQgYmx1ZSBjb2xvcnMsIHRoZSBtYXggbnVtYmVyIG9mIGJsYWNrIGtleSBzaG91bGQgYmUgOlxuICAgICAqIEsgPSAxIC0gbWluKFJjLCBHYywgQmMpO1xuICAgICAqXG4gICAgICogb3Igd2UgY2FuIGFzc3VtZSB3ZSBydW4gb3V0IG9mIHRoZSBibGFjayBpbmssIG5lZWQgdXNlIHRoZSByZW1haW5pbmcgb3RoZXIgdGhyZWUgY29sb3IgaW5rcyB0byBmaW5pc2ggdGhlIHByaW50aW5nIGpvYi5cbiAgICAgKiBLID0gMDtcbiAgICAgKlxuICAgICAqIFRoZSBjeWFuIGNvbG9yKEMpIGlzIGNhbGN1bGF0ZWQgZnJvbSB0aGUgcmVkIGFuZCBibGFjayBjb2xvcnM6XG4gICAgICogQyA9ICgxIC0gUmMgLSBLKSDDtyAoMSAtIEspXG4gICAgICpcbiAgICAgKiBUaGUgbWFnZW50YSBjb2xvciAoTSkgaXMgY2FsY3VsYXRlZCBmcm9tIHRoZSBncmVlbiBhbmQgYmxhY2sgY29sb3JzOlxuICAgICAqIE0gPSAoMSAtIEdyIC0gSykgw7cgKDEgLSBLKVxuICAgICAqXG4gICAgICogVGhlIHllbGxvdyBjb2xvcihZKSBpcyBjYWxjdWxhdGVkIGZyb20gdGhlIGJsdWUgYW5kIGJsYWNrIGNvbG9yczpcbiAgICAgKiBZID0gKDEgLSBCYyAtIEspIMO3ICggMSAtIEspXG4gICAgICovXG4gICAgcHJpdmF0ZSByZ2JhVG9DbXlrKGNvbG9yOiBSZ2JhKTogQ215ayB7XG4gICAgICAgIGNvbnN0IHJlZCA9IGNvbG9yLnJlZCAvIDI1NTtcbiAgICAgICAgY29uc3QgZ3JlZW4gPSBjb2xvci5ncmVlbiAvIDI1NTtcbiAgICAgICAgY29uc3QgYmx1ZSA9IGNvbG9yLmJsdWUgLyAyNTU7XG5cbiAgICAgICAgbGV0IGN5YW4gPSAxIC0gcmVkO1xuICAgICAgICBsZXQgbWFnZW50YSA9IDEgLSBncmVlbjtcbiAgICAgICAgbGV0IHllbGxvdyA9IDEgLSBibHVlO1xuICAgICAgICBsZXQgYmxhY2sgPSBNYXRoLm1pbihjeWFuLCBtYWdlbnRhLCB5ZWxsb3cpO1xuXG4gICAgICAgIGlmIChibGFjayA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBDbXlrKDAsIDAsIDAsIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgY3lhbiA9IChjeWFuIC0gYmxhY2spIC8gKDEgLSBibGFjayk7XG4gICAgICAgIG1hZ2VudGEgPSAobWFnZW50YSAtIGJsYWNrKSAvICgxIC0gYmxhY2spO1xuICAgICAgICB5ZWxsb3cgPSAoeWVsbG93IC0gYmxhY2spIC8gKDEgLSBibGFjayk7XG5cbiAgICAgICAgYmxhY2sgPSBibGFjayAqIDEwMDtcbiAgICAgICAgY3lhbiA9IGN5YW4gKiAxMDA7XG4gICAgICAgIG1hZ2VudGEgPSBtYWdlbnRhICogMTAwO1xuICAgICAgICB5ZWxsb3cgPSB5ZWxsb3cgKiAxMDA7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBDbXlrKGN5YW4sIG1hZ2VudGEsIHllbGxvdywgYmxhY2spO1xuICAgIH1cblxuICAgIHByaXZhdGUgcm91bmROdW1iZXIobjogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQobiAqIDEwMCkgLyAxMDA7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdHJpbmdUb0NvbG9yKGNvbG9yU3RyaW5nOiBDb2xvclN0cmluZyk6IHRoaXMge1xuICAgICAgICBjb25zdCBzdHIgPSBjb2xvclN0cmluZy5yZXBsYWNlKC8gL2csICcnKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAvKipcbiAgICAgICAgICogdHJ5IHRvIGZpbmQgY29sb3IgYnkgbmFtZSBpbiB0YWJsZVxuICAgICAgICAgKi9cbiAgICAgICAgbGV0IHJnYmE6IFJnYmEgPSBDb2xvcnNUYWJsZVtzdHJdIHx8IG51bGw7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGhleCBmaW5kXG4gICAgICAgICAqL1xuICAgICAgICBpZiAoc3RyWzBdID09PSAnIycpIHtcbiAgICAgICAgICAgIGxldCBoZXggPSBzdHIuc3Vic3RyKDEpO1xuICAgICAgICAgICAgY29uc3QgbGVuZ3RoID0gaGV4Lmxlbmd0aDtcbiAgICAgICAgICAgIGxldCBhID0gMTtcbiAgICAgICAgICAgIGxldCBoZXhBcnJheSA9IFtdO1xuXG4gICAgICAgICAgICBpZiAobGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICAgICAgaGV4QXJyYXkgPSBoZXguc3BsaXQoJycpLm1hcCgodmFsdWUpID0+IHZhbHVlICsgdmFsdWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChsZW5ndGggPT09IDYpIHtcbiAgICAgICAgICAgICAgICBoZXhBcnJheSA9IGhleC5tYXRjaCgvLnsyfS9nKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobGVuZ3RoID09PSA4KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWxwaGEgPSBoZXguc3Vic3RyKC0yKTtcbiAgICAgICAgICAgICAgICBoZXggPSBoZXguc3Vic3RyKDAsIGxlbmd0aCAtIDIpO1xuICAgICAgICAgICAgICAgIGEgPSB0aGlzLnJvdW5kTnVtYmVyKHBhcnNlSW50KGFscGhhIHx8ICdGRicsIDE2KSAvIDI1NSk7XG4gICAgICAgICAgICAgICAgaGV4QXJyYXkgPSBoZXgubWF0Y2goLy57Mn0vZyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChoZXhBcnJheS5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgICAgICByZ2JhID0gbmV3IFJnYmEocGFyc2VJbnQoaGV4QXJyYXlbMF0sIDE2KSwgcGFyc2VJbnQoaGV4QXJyYXlbMV0sIDE2KSwgcGFyc2VJbnQoaGV4QXJyYXlbMl0sIDE2KSwgYSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBPcGVuUGFyZW50aGVzaXMgPSBzdHIuaW5kZXhPZignKCcpO1xuICAgICAgICBjb25zdCBDbG9zZVBhcmVudGhlc2lzID0gc3RyLmluZGV4T2YoJyknKTtcblxuICAgICAgICBpZiAoT3BlblBhcmVudGhlc2lzICE9PSAtMSAmJiBDbG9zZVBhcmVudGhlc2lzICsgMSA9PT0gc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgY29sb3JUeXBlTmFtZSA9IHN0ci5zdWJzdHIoMCwgT3BlblBhcmVudGhlc2lzKTtcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IHN0ci5zdWJzdHIoT3BlblBhcmVudGhlc2lzICsgMSwgQ2xvc2VQYXJlbnRoZXNpcyAtIChPcGVuUGFyZW50aGVzaXMgKyAxKSkuc3BsaXQoJywnKTtcbiAgICAgICAgICAgIGxldCBhbHBoYSA9IDE7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoY29sb3JUeXBlTmFtZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3JnYmEnOlxuICAgICAgICAgICAgICAgICAgICBhbHBoYSA9IHBhcnNlRmxvYXQocGFyYW1zLnBvcCgpKTtcbiAgICAgICAgICAgICAgICAvLyBGYWxsIHRocm91Z2guXG4gICAgICAgICAgICAgICAgY2FzZSAncmdiJzpcbiAgICAgICAgICAgICAgICAgICAgcmdiYSA9IG5ldyBSZ2JhKHBhcnNlSW50KHBhcmFtc1swXSwgMTApLCBwYXJzZUludChwYXJhbXNbMV0sIDEwKSwgcGFyc2VJbnQocGFyYW1zWzJdLCAxMCksIGFscGhhKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnaHNsYSc6XG4gICAgICAgICAgICAgICAgICAgIGFscGhhID0gcGFyc2VGbG9hdChwYXJhbXMucG9wKCkpO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2hzbCc6XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhzbGEgPSBuZXcgSHNsYShwYXJzZUludChwYXJhbXNbMF0sIDEwKSwgcGFyc2VJbnQocGFyYW1zWzFdLCAxMCksIHBhcnNlSW50KHBhcmFtc1syXSwgMTApLCBhbHBoYSk7XG4gICAgICAgICAgICAgICAgICAgIHJnYmEgPSB0aGlzLmhzbGFUb1JnYmEoaHNsYSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2NteWsnOlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjbXlrID0gbmV3IENteWsoXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludChwYXJhbXNbMF0sIDEwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KHBhcmFtc1sxXSwgMTApLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQocGFyYW1zWzJdLCAxMCksXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludChwYXJhbXNbM10sIDEwKSk7XG4gICAgICAgICAgICAgICAgICAgIHJnYmEgPSB0aGlzLmNteWtUb1JnYmEoY215ayk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJnYmEpIHtcbiAgICAgICAgICAgIHRoaXMucmdiYSA9IHJnYmE7XG4gICAgICAgICAgICB0aGlzLmhzdmEgPSB0aGlzLnJnYmFUb0hzdmEocmdiYSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbn1cbiJdfQ==