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
        if (black == 1) {
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
    roundNumber(number) {
        return Math.round(number * 100) / 100;
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
            let hexArray;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3IuY2xhc3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaXBsYWIvbmd4LWNvbG9yLXBpY2tlci8iLCJzb3VyY2VzIjpbImhlbHBlcnMvY29sb3IuY2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNwQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDcEMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNwQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFJbkQsTUFBTSxPQUFPLEtBQUs7SUFZZCxZQUFZLFdBQXlCO1FBVnJDOzs7Ozs7V0FNRztRQUNLLFNBQUksR0FBUyxJQUFJLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNsQyxTQUFJLEdBQVMsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFHeEMsSUFBSSxXQUFXLEVBQUU7WUFDYixJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ25DO0lBQ0wsQ0FBQztJQUVNLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBK0M7UUFDOUQsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDM0IsT0FBTyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMzQjthQUFNLElBQUcsS0FBSyxZQUFZLEtBQUssRUFBRTtZQUM5QixPQUFPLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN4QjthQUFNLElBQUcsS0FBSyxZQUFZLElBQUksRUFBRTtZQUM3QixPQUFPLElBQUksS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFH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U0FBUyxHQUFHLEdBQUcsRUFBRSxVQUFVLEdBQUcsR0FBRyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRU8sVUFBVSxDQUFDLEtBQVc7UUFDMUIsTUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUN0QixNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzFELE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxQixNQUFNLFVBQVUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFMUMsT0FBTyxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVPLFVBQVUsQ0FBQyxLQUFXO1FBQzFCLE1BQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQzVCLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ2hDLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1FBQzlCLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFFMUIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3hDLE1BQU0sSUFBSSxH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bSAnLi9jbXlrLmNsYXNzJztcbmltcG9ydCB7IEhzbGEgfSBmcm9tICcuL2hzbGEuY2xhc3MnO1xuaW1wb3J0IHsgSHN2YSB9IGZyb20gJy4vaHN2YS5jbGFzcyc7XG5pbXBvcnQgeyBSZ2JhIH0gZnJvbSAnLi9yZ2JhLmNsYXNzJztcbmltcG9ydCB7IENvbG9yc1RhYmxlIH0gZnJvbSAnLi9jb2xvcnMtdGFibGUuY2xhc3MnO1xuXG5leHBvcnQgdHlwZSBDb2xvclN0cmluZyA9IHN0cmluZztcblxuZXhwb3J0IGNsYXNzIENvbG9yIHtcblxuICAgIC8qKlxuICAgICAqIGJhc2UgY29sb3IgdXNlZCB0byBjYWxjdWxhdGUgb3RoZXJcbiAgICAgKiBkZWZhdWx0IGNvbG9yXG4gICAgICogcmdiKDI1NSwgMCwgMClcbiAgICAgKiBoc2woMCwgMTAwJSwgNTAlKVxuICAgICAqICNmZjAwMDBcbiAgICAgKi9cbiAgICBwcml2YXRlIGhzdmE6IEhzdmEgPSBuZXcgSHN2YSgwLCAxLCAxLCAxKTtcbiAgICBwcml2YXRlIHJnYmE6IFJnYmEgPSBuZXcgUmdiYSgyNTUsIDAsIDAsIDEpO1xuXG4gICAgY29uc3RydWN0b3IoY29sb3JTdHJpbmc/OiBDb2xvclN0cmluZyl7XG4gICAgICAgIGlmIChjb2xvclN0cmluZykge1xuICAgICAgICAgICAgdGhpcy5zdHJpbmdUb0NvbG9yKGNvbG9yU3RyaW5nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbShjb2xvcjogQ29sb3JTdHJpbmcgfCBDb2xvciB8IEhzdmEgfCBSZ2JhIHwgSHNsYSk6IENvbG9yIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjb2xvciA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoY29sb3IpO1xuICAgICAgICB9IGVsc2UgaWYoY29sb3IgaW5zdGFuY2VvZiBDb2xvcikge1xuICAgICAgICAgICAgcmV0dXJuIGNvbG9yLmNsb25lKCk7XG4gICAgICAgIH0gZWxzZSBpZihjb2xvciBpbnN0YW5jZW9mIFJnYmEpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoKS5zZXRSZ2JhKGNvbG9yLnJlZCwgY29sb3IuZ3JlZW4sIGNvbG9yLmJsdWUsIGNvbG9yLmFscGhhKTtcbiAgICAgICAgfSBlbHNlIGlmKGNvbG9yIGluc3RhbmNlb2YgSHN2YSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcigpLnNldEhzdmEoY29sb3IuaHVlLCBjb2xvci5zYXR1cmF0aW9uLCBjb2xvci52YWx1ZSwgY29sb3IuYWxwaGEpO1xuICAgICAgICB9IGVsc2UgaWYoY29sb3IgaW5zdGFuY2VvZiBIc2xhKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKCkuc2V0SHNsYShjb2xvci5odWUsIGNvbG9yLnNhdHVyYXRpb24sIGNvbG9yLmxpZ2h0bmVzcywgY29sb3IuYWxwaGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogbWFrZSBmcm9tIGV4aXN0aW5nIGNvbG9yIG5ldyBjb2xvciBvYmplY3RcbiAgICAgKi9cbiAgICBwdWJsaWMgY2xvbmUoKTogQ29sb3Ige1xuICAgICAgICByZXR1cm4gQ29sb3IuZnJvbSh0aGlzLmdldFJnYmEoKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZGVmaW5lIENvbG9yIGZyb20gaGV4LCByZ2IsIHJnYmEsIGhzbCwgaHNsYSBvciBjbXlrIHN0cmluZ1xuICAgICAqL1xuICAgIHB1YmxpYyBzZXRGcm9tU3RyaW5nKGNvbG9yOiBDb2xvclN0cmluZyk6IHRoaXMge1xuICAgICAgICByZXR1cm4gdGhpcy5zdHJpbmdUb0NvbG9yKGNvbG9yKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBkZWZpbmUgQ29sb3IgZnJvbSBIU1YgdmFsdWVzXG4gICAgICovXG4gICAgcHVibGljIHNldEhzdmEoaHVlOiBudW1iZXIgPSBudWxsLCBzYXR1cmF0aW9uOiBudW1iZXIgPSAxMDAsIGJyaWdodG5lc3M6IG51bWJlciA9IDEwMCwgYWxwaGE6IG51bWJlciA9IDEpOiB0aGlzIHtcbiAgICAgICAgaWYgKGh1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmhzdmEuaHVlID0gaHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNhdHVyYXRpb24gIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5oc3ZhLnNhdHVyYXRpb24gPSBzYXR1cmF0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJyaWdodG5lc3MgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5oc3ZhLnZhbHVlID0gYnJpZ2h0bmVzcztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhbHBoYSAhPSBudWxsKSB7XG4gICAgICAgICAgICBhbHBoYSA9IGFscGhhID4gMSA/IDEgOiBhbHBoYSA8IDAgPyAwIDogYWxwaGE7XG4gICAgICAgICAgICB0aGlzLmhzdmEuYWxwaGEgPSBhbHBoYTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmdiYSA9IHRoaXMuaHN2YVRvUmdiYSh0aGlzLmhzdmEpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBkZWZpbmUgQ29sb3IgZnJvbSBSR0JhXG4gICAgICovXG4gICAgcHVibGljIHNldFJnYmEocmVkOiBudW1iZXIgPSBudWxsLCBncmVlbjogbnVtYmVyID0gbnVsbCwgYmx1ZTogbnVtYmVyID0gbnVsbCwgYWxwaGE6IG51bWJlciA9IDEpOiB0aGlzIHtcbiAgICAgICAgaWYgKHJlZCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnJnYmEucmVkID0gcmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGdyZWVuICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMucmdiYS5ncmVlbiA9IGdyZWVuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJsdWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5yZ2JhLmJsdWUgPSBibHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFscGhhICE9IG51bGwpIHtcbiAgICAgICAgICAgIGFscGhhID0gYWxwaGEgPiAxID8gMSA6IGFscGhhIDwgMCA/IDAgOiBhbHBoYTtcbiAgICAgICAgICAgIHRoaXMucmdiYS5hbHBoYSA9IGFscGhhO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5oc3ZhID0gdGhpcy5yZ2JhVG9Ic3ZhKHRoaXMucmdiYSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGRlZmluZSBDb2xvciBmcm9tIEhTTGFcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0SHNsYShodWU6IG51bWJlciwgc2F0dXJhdGlvbjogbnVtYmVyLCBsaWdodG5lc3M6IG51bWJlciwgYWxwaGE6IG51bWJlciA9IDEpOiB0aGlzIHtcbiAgICAgICAgaWYgKGFscGhhICE9IG51bGwpIHtcbiAgICAgICAgICAgIGFscGhhID0gYWxwaGEgPiAxID8gMSA6IGFscGhhIDwgMCA/IDAgOiBhbHBoYTtcbiAgICAgICAgICAgIHRoaXMucmdiYS5hbHBoYSA9IGFscGhhO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaHNsYSA9IG5ldyBIc2xhKGh1ZSwgc2F0dXJhdGlvbiwgbGlnaHRuZXNzLCBhbHBoYSk7XG4gICAgICAgIHRoaXMucmdiYSA9IHRoaXMuaHNsYVRvUmdiYShoc2xhKTtcbiAgICAgICAgdGhpcy5oc3ZhID0gdGhpcy5yZ2JhVG9Ic3ZhKHRoaXMucmdiYSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHJldHVybiBoZXhhZGVjaW1hbCB2YWx1ZSBmb3JtYXR0ZWQgYXMgJyMzNDFkMmEnIG9yICcjMzQxZDJhRkYnIGlmIGFsaHBhIGNoYW5uZWwgaXMgZW5hYmxlZFxuICAgICAqL1xuICAgIHB1YmxpYyB0b0hleFN0cmluZyhhbHBoYTogYm9vbGVhbiA9IGZhbHNlKTogQ29sb3JTdHJpbmcge1xuICAgICAgICAvKiB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlICovXG4gICAgICAgIGxldCBoZXggPSAnIycgKyAoKDEgPDwgMjQpIHwgKHRoaXMucmdiYS5nZXRSZWQoKSA8PCAxNikgfCAodGhpcy5yZ2JhLmdldEdyZWVuKCkgPDwgOCkgfCB0aGlzLnJnYmEuZ2V0Qmx1ZSgpKS50b1N0cmluZygxNikuc3Vic3RyKDEpO1xuICAgICAgICBpZiAoYWxwaGEpIHtcbiAgICAgICAgICAgIGhleCArPSAoKDEgPDwgOCkgfCBNYXRoLnJvdW5kKHRoaXMucmdiYS5hbHBoYSAqIDI1NSkpLnRvU3RyaW5nKDE2KS5zdWJzdHIoMSk7XG4gICAgICAgIH1cbiAgICAgICAgLyogdHNsaW50OmVuYWJsZTpuby1iaXR3aXNlICovXG4gICAgICAgIHJldHVybiBoZXgudG9VcHBlckNhc2UoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiByZXR1cm4gcmdiYSBzdHJpbmcgZm9ybWF0dGVkIGFzIHJnYmEoNTIsIDI5LCA0MiwgMSlcbiAgICAgKi9cbiAgICBwdWJsaWMgdG9SZ2JhU3RyaW5nKCk6IENvbG9yU3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmdiYS50b1N0cmluZygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHJldHVybiByZ2Igc3RyaW5nIGZvcm1hdHRlZCBhcyByZ2IoNTIsIDI5LCA0MilcbiAgICAgKi9cbiAgICBwdWJsaWMgdG9SZ2JTdHJpbmcoKTogQ29sb3JTdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5yZ2JhLnRvU3RyaW5nKGZhbHNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiByZXR1cm4gaHNsYSBzdHJpbmcgZm9ybWF0dGVkIGFzIGhzbGEoMzI3LCAyOSUsIDE2JSwgMSlcbiAgICAgKi9cbiAgICBwdWJsaWMgdG9Ic2xhU3RyaW5nKCk6IENvbG9yU3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SHNsYSgpLnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcmV0dXJuIGhzbCBzdHJpbmcgZm9ybWF0dGVkIGFzIGhzbCgzMjcsIDI5JSwgMTYlKVxuICAgICAqL1xuICAgIHB1YmxpYyB0b0hzbFN0cmluZygpOiBDb2xvclN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEhzbGEoKS50b1N0cmluZyhmYWxzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcmV0dXJuIGhzdmEgc3RyaW5nIGZvcm1hdHRlZCBhcyBoc3ZhKDMyNywgMjklLCAxNiUsIDEwMCUpXG4gICAgICovXG4gICAgcHVibGljIHRvSHN2YVN0cmluZygpOiBDb2xvclN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmhzdmEudG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiByZXR1cm4gaHN2IHN0cmluZyBmb3JtYXR0ZWQgYXMgaHN2KDMyNywgMjklLCAxNiUpXG4gICAgICovXG4gICAgcHVibGljIHRvSHN2U3RyaW5nKCk6IENvbG9yU3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHN2YS50b1N0cmluZyhmYWxzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcmV0dXJuIENteWsgc3RyaW5nIGZvcm1hdHRlZCBhcyBjbXlrKDEwMCUsIDEwMCUsIDEwMCUsIDEwMCUpXG4gICAgICovXG4gICAgcHVibGljIHRvQ215a1N0cmluZygpOiBDb2xvclN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldENteWsoKS50b1N0cmluZygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRIc3ZhKCk6IEhzdmEge1xuICAgICAgICByZXR1cm4gbmV3IEhzdmEodGhpcy5oc3ZhLmh1ZSwgdGhpcy5oc3ZhLnNhdHVyYXRpb24sIHRoaXMuaHN2YS52YWx1ZSwgdGhpcy5oc3ZhLmFscGhhKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0UmdiYSgpOiBSZ2JhIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZ2JhKHRoaXMucmdiYS5yZWQsIHRoaXMucmdiYS5ncmVlbiwgdGhpcy5yZ2JhLmJsdWUsIHRoaXMucmdiYS5hbHBoYSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEhzbGEoKTogSHNsYSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJnYmFUb0hzbGEodGhpcy5yZ2JhKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Q215aygpOiBDbXlrIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmdiYVRvQ215ayh0aGlzLnJnYmEpO1xuICAgIH1cblxuICAgIHByaXZhdGUgaHN2YVRvSHNsYShjb2xvcjogSHN2YSk6IEhzbGEge1xuICAgICAgICBjb25zdCBodWUgPSBjb2xvci5odWU7XG4gICAgICAgIGNvbnN0IHMgPSBjb2xvci5zYXR1cmF0aW9uIC8gMTAwO1xuICAgICAgICBjb25zdCB2ID0gY29sb3IudmFsdWUgLyAxMDA7XG4gICAgICAgIGNvbnN0IGxpZ2h0bmVzcyA9ICgoMiAtIHMpICogY29sb3IudmFsdWUpIC8gMjtcbiAgICAgICAgY29uc3Qgc2F0dXJhdGlvbiA9IChzICogdikgLyAoKGxpZ2h0bmVzcyA8PSAxKSA/IGxpZ2h0bmVzcyA6IDIgLSBsaWdodG5lc3MpIHx8IDA7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBIc2xhKGh1ZSwgbGlnaHRuZXNzICogMTAwLCBzYXR1cmF0aW9uICogMTAwLCBjb2xvci5hbHBoYSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoc2xhVG9Ic3ZhKGNvbG9yOiBIc2xhKTogSHN2YSB7XG4gICAgICAgIGNvbnN0IGh1ZSA9IGNvbG9yLmh1ZTtcbiAgICAgICAgY29uc3QgbCA9IChjb2xvci5saWdodG5lc3MgLyAxMDApICogMjtcbiAgICAgICAgY29uc3QgcyA9IChjb2xvci5zYXR1cmF0aW9uIC8gMTAwKSAqIChsIDw9IDEgPyBsIDogMiAtIGwpO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IChsICsgcykgLyAyO1xuICAgICAgICBjb25zdCBzYXR1cmF0aW9uID0gKDIgKiBzKSAvIChsICsgcykgfHwgMDtcblxuICAgICAgICByZXR1cm4gbmV3IEhzdmEoaHVlLCBzYXR1cmF0aW9uLCB2YWx1ZSwgY29sb3IuYWxwaGEpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmdiYVRvSHN2YShjb2xvcjogUmdiYSk6IEhzdmEge1xuICAgICAgICBjb25zdCByZWQgPSBjb2xvci5yZWQgLyAyNTU7XG4gICAgICAgIGNvbnN0IGdyZWVuID0gY29sb3IuZ3JlZW4gLyAyNTU7XG4gICAgICAgIGNvbnN0IGJsdWUgPSBjb2xvci5ibHVlIC8gMjU1O1xuICAgICAgICBjb25zdCBhbHBoYSA9IGNvbG9yLmFscGhhO1xuXG4gICAgICAgIGNvbnN0IENtYXggPSBNYXRoLm1heChyZWQsIGdyZWVuLCBibHVlKTtcbiAgICAgICAgY29uc3QgQ21pbiA9IE1hdGgubWluKHJlZCwgZ3JlZW4sIGJsdWUpO1xuICAgICAgICBjb25zdCBkZWx0YSA9IENtYXggLSBDbWluO1xuXG4gICAgICAgIGxldCBodWUgPSAwO1xuICAgICAgICBsZXQgc2F0dXJhdGlvbjogbnVtYmVyID0gQ21heCA9PT0gMCA/IDAgOiBkZWx0YSAvIENtYXg7XG4gICAgICAgIGxldCBicmlnaHRuZXNzOiBudW1iZXIgPSBDbWF4O1xuXG4gICAgICAgIGlmIChDbWF4ICE9PSBDbWluKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKENtYXgpIHtcbiAgICAgICAgICAgICAgICBjYXNlIHJlZDpcbiAgICAgICAgICAgICAgICAgICAgaHVlID0gKGdyZWVuIC0gYmx1ZSkgLyBkZWx0YSArIChncmVlbiA8IGJsdWUgPyA2IDogMCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgZ3JlZW46XG4gICAgICAgICAgICAgICAgICAgIGh1ZSA9IDIgKyAoYmx1ZSAtIHJlZCkgLyBkZWx0YTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBibHVlOlxuICAgICAgICAgICAgICAgICAgICBodWUgPSA0ICsgKHJlZCAtIGdyZWVuKSAvIGRlbHRhO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGh1ZSAvPSA2O1xuICAgICAgICB9XG5cbiAgICAgICAgaHVlID0gaHVlICogMzYwO1xuICAgICAgICBzYXR1cmF0aW9uID0gc2F0dXJhdGlvbiAqIDEwMDtcbiAgICAgICAgYnJpZ2h0bmVzcyA9IGJyaWdodG5lc3MgKiAxMDA7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBIc3ZhKGh1ZSwgc2F0dXJhdGlvbiwgYnJpZ2h0bmVzcywgYWxwaGEpO1xuICAgIH1cblxuICAgIHByaXZhdGUgaHN2YVRvUmdiYShjb2xvcjogSHN2YSk6IFJnYmEge1xuICAgICAgICBsZXQgcmVkID0gMTtcbiAgICAgICAgbGV0IGdyZWVuID0gMDtcbiAgICAgICAgbGV0IGJsdWUgPSAwO1xuICAgICAgICBjb25zdCBzYXR1cmF0aW9uID0gY29sb3Iuc2F0dXJhdGlvbiAvIDEwMDtcbiAgICAgICAgY29uc3QgYnJpZ2h0bmVzcyA9IGNvbG9yLnZhbHVlIC8gMTAwO1xuICAgICAgICBjb25zdCBhbHBoYSA9IGNvbG9yLmFscGhhO1xuICAgICAgICBjb25zdCBoZXggPSBjb2xvci5odWUgLyA2MDtcblxuICAgICAgICBjb25zdCBwcmltYXJ5ID0gTWF0aC5mbG9vcihoZXgpO1xuICAgICAgICBjb25zdCBzZWNvdW5kYXJ5ID0gaGV4IC0gcHJpbWFyeTtcbiAgICAgICAgY29uc3QgYSA9ICgxIC0gc2F0dXJhdGlvbikgKiBicmlnaHRuZXNzO1xuICAgICAgICBjb25zdCBiID0gKDEgLSAoc2F0dXJhdGlvbiAqIHNlY291bmRhcnkpKSAqIGJyaWdodG5lc3M7XG4gICAgICAgIGNvbnN0IGMgPSAoMSAtIChzYXR1cmF0aW9uICogKDEgLSBzZWNvdW5kYXJ5KSkpICogYnJpZ2h0bmVzcztcblxuICAgICAgICBzd2l0Y2ggKHByaW1hcnkpIHtcbiAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgIGNhc2UgMDogcmVkID0gYnJpZ2h0bmVzczsgZ3JlZW4gPSBjOyBibHVlID0gYTsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6IHJlZCA9IGI7IGdyZWVuID0gYnJpZ2h0bmVzczsgYmx1ZSA9IGE7IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOiByZWQgPSBhOyBncmVlbiA9IGJyaWdodG5lc3M7IGJsdWUgPSBjOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzogcmVkID0gYTsgZ3JlZW4gPSBiOyBibHVlID0gYnJpZ2h0bmVzczsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQ6IHJlZCA9IGM7IGdyZWVuID0gYTsgYmx1ZSA9IGJyaWdodG5lc3M7IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA1OiByZWQgPSBicmlnaHRuZXNzOyBncmVlbiA9IGE7IGJsdWUgPSBiOyBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJlZCA9IHJlZCAqIDI1NTtcbiAgICAgICAgZ3JlZW4gPSBncmVlbiAqIDI1NTtcbiAgICAgICAgYmx1ZSA9IGJsdWUgKiAyNTU7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBSZ2JhKHJlZCwgZ3JlZW4sIGJsdWUsIGFscGhhKVxuICAgIH1cblxuICAgIHByaXZhdGUgcmdiYVRvSHNsYShjb2xvcjogUmdiYSk6IEhzbGEge1xuICAgICAgICAvLyBiYXNlZCBvbiBDYW1hbkpTXG4gICAgICAgIGNvbnN0IHJlZCA9IGNvbG9yLnJlZCAvIDI1NTtcbiAgICAgICAgY29uc3QgZ3JlZW4gPSBjb2xvci5ncmVlbiAvIDI1NTtcbiAgICAgICAgY29uc3QgYmx1ZSA9IGNvbG9yLmJsdWUgLyAyNTU7XG4gICAgICAgIGNvbnN0IGFscGhhID0gY29sb3IuYWxwaGE7XG5cbiAgICAgICAgY29uc3QgbWF4ID0gTWF0aC5tYXgocmVkLCBncmVlbiwgYmx1ZSk7XG4gICAgICAgIGNvbnN0IG1pbiA9IE1hdGgubWluKHJlZCwgZ3JlZW4sIGJsdWUpO1xuXG4gICAgICAgIGxldCBodWUgPSAwO1xuICAgICAgICBsZXQgc2F0dXJhdGlvbiA9IDA7XG4gICAgICAgIGxldCBsdW1pbmFuY2UgPSAobWF4ICsgbWluKSAvIDI7XG4gICAgICAgIGNvbnN0IGRlbHRhID0gbWF4IC0gbWluO1xuXG4gICAgICAgIGlmIChtYXggIT09IG1pbikge1xuICAgICAgICAgICAgc2F0dXJhdGlvbiA9IGx1bWluYW5jZSA+IDAuNSA/IGRlbHRhIC8gKDIuMCAtIG1heCAtIG1pbikgOiBkZWx0YSAvIChtYXggKyBtaW4pO1xuICAgICAgICAgICAgc3dpdGNoIChtYXgpIHtcbiAgICAgICAgICAgICAgICBjYXNlIHJlZDpcbiAgICAgICAgICAgICAgICAgICAgaHVlID0gKGdyZWVuIC0gYmx1ZSkgLyBkZWx0YSArIChncmVlbiA8IGJsdWUgPyA2IDogMCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgZ3JlZW46XG4gICAgICAgICAgICAgICAgICAgIGh1ZSA9IChibHVlIC0gcmVkKSAvIGRlbHRhICsgMjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBibHVlOlxuICAgICAgICAgICAgICAgICAgICBodWUgPSAocmVkIC0gZ3JlZW4pIC8gZGVsdGEgKyA0O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaHVlIC89IDY7XG4gICAgICAgIH1cblxuICAgICAgICBodWUgPSBodWUgKiAzNjA7XG4gICAgICAgIHNhdHVyYXRpb24gPSBzYXR1cmF0aW9uICogMTAwO1xuICAgICAgICBsdW1pbmFuY2UgPSBsdW1pbmFuY2UgKiAxMDA7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBIc2xhKGh1ZSwgc2F0dXJhdGlvbiwgbHVtaW5hbmNlLCBhbHBoYSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogY29udmVydCByZ2IgY29sb3IgZnJvbSBIU0xhXG4gICAgICpcbiAgICAgKiBodWUgPSAwID0+IDM2MFxuICAgICAqIHNhdHVyYXRpb24gPSAwID0+IDFcbiAgICAgKiBsaWdodG5lc3MgPSAwID0+IDFcbiAgICAgKi9cbiAgICBwcml2YXRlIGhzbGFUb1JnYmEoY29sb3I6IEhzbGEpOiBSZ2JhIHtcbiAgICAgICAgY29uc3QgaHVlID0gY29sb3IuaHVlIC8gMzYwO1xuICAgICAgICBjb25zdCBzYXR1cmF0aW9uID0gY29sb3Iuc2F0dXJhdGlvbiAvIDEwMDtcbiAgICAgICAgY29uc3QgbGlnaHRuZXNzID0gY29sb3IubGlnaHRuZXNzIC8gMTAwO1xuICAgICAgICBjb25zdCBhbHBoYSA9IGNvbG9yLmFscGhhO1xuXG4gICAgICAgIGxldCByZWQgPSBsaWdodG5lc3M7XG4gICAgICAgIGxldCBncmVlbiA9IGxpZ2h0bmVzcztcbiAgICAgICAgbGV0IGJsdWUgPSBsaWdodG5lc3M7XG5cbiAgICAgICAgaWYoc2F0dXJhdGlvbiAhPT0gMCkge1xuICAgICAgICAgICAgY29uc3QgcSA9IGxpZ2h0bmVzcyA8IDAuNSA/IGxpZ2h0bmVzcyAqICgxICsgc2F0dXJhdGlvbikgOiBsaWdodG5lc3MgKyBzYXR1cmF0aW9uIC0gKGxpZ2h0bmVzcyAqIHNhdHVyYXRpb24pO1xuICAgICAgICAgICAgY29uc3QgcCA9IDIgKiBsaWdodG5lc3MgLSBxO1xuXG4gICAgICAgICAgICByZWQgPSB0aGlzLmh1ZVRvUmdiKHAsIHEsIGh1ZSArICgxIC8gMykpO1xuICAgICAgICAgICAgZ3JlZW4gPSB0aGlzLmh1ZVRvUmdiKHAsIHEsIGh1ZSk7XG4gICAgICAgICAgICBibHVlID0gdGhpcy5odWVUb1JnYihwLCBxLCBodWUgLSAoMSAvIDMpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlZCA9IHJlZCAqIDI1NTtcbiAgICAgICAgZ3JlZW4gPSBncmVlbiAqIDI1NTtcbiAgICAgICAgYmx1ZSA9IGJsdWUgKiAyNTU7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBSZ2JhKHJlZCwgZ3JlZW4sIGJsdWUsIGFscGhhKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGh1ZVRvUmdiKHAsIHEsIHQpOiBudW1iZXIge1xuICAgICAgICAvLyBiYXNlZCBvbiBDYW1hbkpTXG4gICAgICAgIGlmICh0IDwgMCkgeyB0ICs9IDE7IH1cbiAgICAgICAgaWYgKHQgPiAxKSB7IHQgLT0gMTsgfVxuICAgICAgICBpZiAodCA8IDEgLyA2KSB7IHJldHVybiBwICsgKHEgLSBwKSAqIDYgKiB0OyB9XG4gICAgICAgIGlmICh0IDwgMSAvIDIpIHsgcmV0dXJuIHE7IH1cbiAgICAgICAgaWYgKHQgPCAyIC8gMykgeyByZXR1cm4gcCArIChxIC0gcCkgKiAoMiAvIDMgLSB0KSAqIDY7IH1cbiAgICAgICAgcmV0dXJuIHA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIFJlZCwgR3JlZW4sIEJsdWUgdmFsdWVzIGFyZSBnaXZlbiBpbiB0aGUgcmFuZ2Ugb2YgMC4uMjU1LFxuICAgICAqXG4gICAgICogdGhlIHJlZCBjb2xvcihSKSBpcyBjYWxjdWxhdGVkIGZyb20gdGhlIGN5YW4oQykgYW5kIGJsYWNrKEspIGNvbG9ycyxcbiAgICAgKiB0aGUgZ3JlZW4gY29sb3IoRykgaXMgY2FsY3VsYXRlZCBmcm9tIHRoZSBtYWdlbnRhKE0pIGFuZCBibGFjayhLKSBjb2xvcnMsXG4gICAgICogVGhlIGJsdWUgY29sb3IoQikgaXMgY2FsY3VsYXRlZCBmcm9tIHRoZSB5ZWxsb3coWSkgYW5kIGJsYWNrKEspIGNvbG9ycy5cbiAgICAgKlxuICAgICAqIEJlbG93IGlzIHRoZSBmb3JtdWxhIG9mIENNWUsgdG8gUkdCIGNvbnZlcnRpb25cbiAgICAgKlxuICAgICAqIFJlZCA9IDI1NSDDlyAxIC0gbWluKCAoMSAtIEN5YW4gw7cgMTAwKSDDlyAoMSAtIEJsYWNrKSApXG4gICAgICogR3JlZW4gPSAyNTUgw5cgMSAtIG1pbigxIC0gTWFnZW50YSDDtyAxMDApIMOXICgxIC0gQmxhY2spXG4gICAgICogQmx1ZSA9IDI1NSDDlyAxIC0gbWluKDEgLSBZZWxsb3cgw7cgMTAwKSDDlyAoMSAtIEJsYWNrKVxuICAgICAqL1xuICAgIHByaXZhdGUgY215a1RvUmdiYShjb2xvcjogQ215ayk6IFJnYmEge1xuICAgICAgICBjb25zdCBibGFjayA9IGNvbG9yLmJsYWNrIC8gMTAwO1xuICAgICAgICBjb25zdCBjeWFuID0gY29sb3IuY3lhbiAvIDEwMDtcbiAgICAgICAgY29uc3QgbWFnZW50YSA9IGNvbG9yLm1hZ2VudGEgLyAxMDA7XG4gICAgICAgIGNvbnN0IHllbGxvdyA9IGNvbG9yLnllbGxvdyAvIDEwMDtcblxuICAgICAgICBsZXQgcmVkID0gTWF0aC5taW4oMSwgKDEgLSBjeWFuKSAqICgxIC0gYmxhY2spKTtcbiAgICAgICAgbGV0IGdyZWVuID0gTWF0aC5taW4oMSwgKDEgLSBtYWdlbnRhKSAqICgxIC0gYmxhY2spKTtcbiAgICAgICAgbGV0IGJsdWUgPSBNYXRoLm1pbigxLCAoMSAtIHllbGxvdykgKiAoMSAtIGJsYWNrKSk7XG5cbiAgICAgICAgcmVkID0gcmVkICogMjU1O1xuICAgICAgICBncmVlbiA9IGdyZWVuICogMjU1O1xuICAgICAgICBibHVlID0gYmx1ZSAqIDI1NTtcblxuICAgICAgICByZXR1cm4gbmV3IFJnYmEocmVkLCBncmVlbiwgYmx1ZSwgMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIG1heCBudW1iZXIgb2YgUiwgRywgQiB2YWx1ZXMgYXJlIDI1NSwgZmlyc3Qgb2YgYWxsLCB3ZSBkaXZpZGVkIHRoZW0gYnkgMjU1IHRvIGJlY29tZSB0aGUgbnVtYmVyXG4gICAgICogb2YgMH4xLCB0aGlzIHJhdGlvIHdpbGwgYmUgdXNlZCBpbiB0aGUgY2FsY3VsYXRpb24uXG4gICAgICogUmMgPSBSIMO3IDI1NVxuICAgICAqIEdjID0gRyDDtyAyNTVcbiAgICAgKiBCYyA9IEIgw7cgMjU1XG4gICAgICogVGhlIGJsYWNrIGtleShLKSBjb2xvciBjb3VsZCBiZSBtYW55IHJlc3VsdCwgd2hlbiB3ZSBhc3N1bWUgYSBibGFjayBrZXkgdmFsdWUsXG4gICAgICogdGhlIG90aGVyIHRocmVlIGNvbG9ycyhjeWFuLCBtYWdlbnRhLCB5ZWxsb3cpIGNhbiBiZSBjYWxjdWxhdGVkLlxuICAgICAqIHdlIGNhbiBjYWxjdWxhdGUgaXQgZnJvbSB0aGUgcmVkLCBncmVlbiBhbmQgYmx1ZSBjb2xvcnMsIHRoZSBtYXggbnVtYmVyIG9mIGJsYWNrIGtleSBzaG91bGQgYmUgOlxuICAgICAqIEsgPSAxIC0gbWluKFJjLCBHYywgQmMpO1xuICAgICAqXG4gICAgICogb3Igd2UgY2FuIGFzc3VtZSB3ZSBydW4gb3V0IG9mIHRoZSBibGFjayBpbmssIG5lZWQgdXNlIHRoZSByZW1haW5pbmcgb3RoZXIgdGhyZWUgY29sb3IgaW5rcyB0byBmaW5pc2ggdGhlIHByaW50aW5nIGpvYi5cbiAgICAgKiBLID0gMDtcbiAgICAgKlxuICAgICAqIFRoZSBjeWFuIGNvbG9yKEMpIGlzIGNhbGN1bGF0ZWQgZnJvbSB0aGUgcmVkIGFuZCBibGFjayBjb2xvcnM6XG4gICAgICogQyA9ICgxIC0gUmMgLSBLKSDDtyAoMSAtIEspXG4gICAgICpcbiAgICAgKiBUaGUgbWFnZW50YSBjb2xvciAoTSkgaXMgY2FsY3VsYXRlZCBmcm9tIHRoZSBncmVlbiBhbmQgYmxhY2sgY29sb3JzOlxuICAgICAqIE0gPSAoMSAtIEdyIC0gSykgw7cgKDEgLSBLKVxuICAgICAqXG4gICAgICogVGhlIHllbGxvdyBjb2xvcihZKSBpcyBjYWxjdWxhdGVkIGZyb20gdGhlIGJsdWUgYW5kIGJsYWNrIGNvbG9yczpcbiAgICAgKiBZID0gKDEgLSBCYyAtIEspIMO3ICggMSAtIEspXG4gICAgICovXG4gICAgcHJpdmF0ZSByZ2JhVG9DbXlrKGNvbG9yOiBSZ2JhKTogQ215ayB7XG4gICAgICAgIGNvbnN0IHJlZCA9IGNvbG9yLnJlZCAvIDI1NTtcbiAgICAgICAgY29uc3QgZ3JlZW4gPSBjb2xvci5ncmVlbiAvIDI1NTtcbiAgICAgICAgY29uc3QgYmx1ZSA9IGNvbG9yLmJsdWUgLyAyNTU7XG5cbiAgICAgICAgbGV0IGN5YW4gPSAxIC0gcmVkO1xuICAgICAgICBsZXQgbWFnZW50YSA9IDEgLSBncmVlbjtcbiAgICAgICAgbGV0IHllbGxvdyA9IDEgLSBibHVlO1xuICAgICAgICBsZXQgYmxhY2sgPSBNYXRoLm1pbihjeWFuLCBtYWdlbnRhLCB5ZWxsb3cpO1xuXG4gICAgICAgIGlmIChibGFjayA9PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IENteWsoMCwgMCwgMCwgMSk7XG4gICAgICAgIH1cblxuICAgICAgICBjeWFuID0gKGN5YW4gLSBibGFjaykgLyAoMSAtIGJsYWNrKTtcbiAgICAgICAgbWFnZW50YSA9IChtYWdlbnRhIC0gYmxhY2spIC8gKDEgLSBibGFjayk7XG4gICAgICAgIHllbGxvdyA9ICh5ZWxsb3cgLSBibGFjaykgLyAoMSAtIGJsYWNrKTtcblxuICAgICAgICBibGFjayA9ICBibGFjayAqIDEwMDtcbiAgICAgICAgY3lhbiA9ICBjeWFuICogMTAwO1xuICAgICAgICBtYWdlbnRhID0gIG1hZ2VudGEgKiAxMDA7XG4gICAgICAgIHllbGxvdyA9ICB5ZWxsb3cgKiAxMDA7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBDbXlrKGN5YW4sIG1hZ2VudGEsIHllbGxvdywgYmxhY2spO1xuICAgIH1cblxuICAgIHByaXZhdGUgcm91bmROdW1iZXIobnVtYmVyOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChudW1iZXIgKiAxMDApIC8gMTAwO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RyaW5nVG9Db2xvcihjb2xvclN0cmluZzogQ29sb3JTdHJpbmcpOiB0aGlzIHtcbiAgICAgICAgY29uc3Qgc3RyID0gY29sb3JTdHJpbmcucmVwbGFjZSgvIC9nLCAnJykudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIHRyeSB0byBmaW5kIGNvbG9yIGJ5IG5hbWUgaW4gdGFibGVcbiAgICAgICAgICovXG4gICAgICAgIGxldCByZ2JhOiBSZ2JhID0gQ29sb3JzVGFibGVbc3RyXSB8fCBudWxsO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBoZXggZmluZFxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKHN0clswXSA9PT0gJyMnKSB7XG4gICAgICAgICAgICBsZXQgaGV4ID0gc3RyLnN1YnN0cigxKTtcbiAgICAgICAgICAgIGNvbnN0IGxlbmd0aCA9IGhleC5sZW5ndGg7XG4gICAgICAgICAgICBsZXQgYSA9IDE7XG4gICAgICAgICAgICBsZXQgaGV4QXJyYXk7XG5cbiAgICAgICAgICAgIGlmIChsZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgICAgICBoZXhBcnJheSA9IGhleC5zcGxpdCgnJykubWFwKCh2YWx1ZSkgPT4gdmFsdWUgKyB2YWx1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gNikge1xuICAgICAgICAgICAgICAgIGhleEFycmF5ID0gaGV4Lm1hdGNoKC8uezJ9L2cpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChsZW5ndGggPT09IDgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhbHBoYSA9IGhleC5zdWJzdHIoLTIpO1xuICAgICAgICAgICAgICAgIGhleCA9IGhleC5zdWJzdHIoMCwgbGVuZ3RoIC0gMik7XG4gICAgICAgICAgICAgICAgYSA9IHRoaXMucm91bmROdW1iZXIocGFyc2VJbnQoYWxwaGEgfHwgJ0ZGJywgMTYpIC8gMjU1KTtcbiAgICAgICAgICAgICAgICBoZXhBcnJheSA9IGhleC5tYXRjaCgvLnsyfS9nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGhleEFycmF5Lmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgICAgIHJnYmEgPSBuZXcgUmdiYShwYXJzZUludChoZXhBcnJheVswXSwgMTYpLCBwYXJzZUludChoZXhBcnJheVsxXSwgMTYpLCBwYXJzZUludChoZXhBcnJheVsyXSwgMTYpLCBhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IE9wZW5QYXJlbnRoZXNpcyA9IHN0ci5pbmRleE9mKCcoJyk7XG4gICAgICAgIGNvbnN0IENsb3NlUGFyZW50aGVzaXMgPSBzdHIuaW5kZXhPZignKScpO1xuXG4gICAgICAgIGlmIChPcGVuUGFyZW50aGVzaXMgIT09IC0xICYmIENsb3NlUGFyZW50aGVzaXMgKyAxID09PSBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBjb2xvclR5cGVOYW1lID0gc3RyLnN1YnN0cigwLCBPcGVuUGFyZW50aGVzaXMpO1xuICAgICAgICAgICAgY29uc3QgcGFyYW1zID0gc3RyLnN1YnN0cihPcGVuUGFyZW50aGVzaXMgKyAxLCBDbG9zZVBhcmVudGhlc2lzIC0gKE9wZW5QYXJlbnRoZXNpcyArIDEpKS5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgbGV0IGFscGhhID0gMTtcblxuICAgICAgICAgICAgc3dpdGNoIChjb2xvclR5cGVOYW1lKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAncmdiYSc6XG4gICAgICAgICAgICAgICAgICAgIGFscGhhID0gcGFyc2VGbG9hdChwYXJhbXMucG9wKCkpO1xuICAgICAgICAgICAgICAgICAgICAvLyBGYWxsIHRocm91Z2guXG4gICAgICAgICAgICAgICAgY2FzZSAncmdiJzpcbiAgICAgICAgICAgICAgICAgICAgcmdiYSA9IG5ldyBSZ2JhKHBhcnNlSW50KHBhcmFtc1swXSwgMTApLCBwYXJzZUludChwYXJhbXNbMV0sIDEwKSwgcGFyc2VJbnQocGFyYW1zWzJdLCAxMCksIGFscGhhKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnaHNsYSc6XG4gICAgICAgICAgICAgICAgICAgIGFscGhhID0gcGFyc2VGbG9hdChwYXJhbXMucG9wKCkpO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2hzbCc6XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhzbGEgPSBuZXcgSHNsYShwYXJzZUludChwYXJhbXNbMF0sIDEwKSwgcGFyc2VJbnQocGFyYW1zWzFdLCAxMCksIHBhcnNlSW50KHBhcmFtc1syXSwgMTApLCBhbHBoYSk7XG4gICAgICAgICAgICAgICAgICAgIHJnYmEgPSB0aGlzLmhzbGFUb1JnYmEoaHNsYSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2NteWsnOlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjbXlrID0gbmV3IENteWsoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludChwYXJhbXNbMF0sIDEwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KHBhcmFtc1sxXSwgMTApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQocGFyYW1zWzJdLCAxMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludChwYXJhbXNbM10sIDEwKSk7XG4gICAgICAgICAgICAgICAgICAgIHJnYmEgPSB0aGlzLmNteWtUb1JnYmEoY215ayk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJnYmEpIHtcbiAgICAgICAgICAgIHRoaXMucmdiYSA9IHJnYmE7XG4gICAgICAgICAgICB0aGlzLmhzdmEgPSB0aGlzLnJnYmFUb0hzdmEocmdiYSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbn1cbiJdfQ==