import { Cmyk } from './cmyk.class';
import { Hsla } from './hsla.class';
import { Hsva } from './hsva.class';
import { Rgba } from './rgba.class';
import { ColorsTable } from './colors-table.class';
var Color = /** @class */ (function () {
    function Color(colorString) {
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
    Color.from = function (color) {
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
    };
    /**
     * make from existing color new color object
     */
    Color.prototype.clone = function () {
        return Color.from(this.getRgba());
    };
    /**
     * define Color from hex, rgb, rgba, hsl, hsla or cmyk string
     */
    Color.prototype.setFromString = function (color) {
        return this.stringToColor(color);
    };
    /**
     * define Color from HSV values
     */
    Color.prototype.setHsva = function (hue, saturation, brightness, alpha) {
        if (hue === void 0) { hue = null; }
        if (saturation === void 0) { saturation = 100; }
        if (brightness === void 0) { brightness = 100; }
        if (alpha === void 0) { alpha = 1; }
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
    };
    /**
     * define Color from RGBa
     */
    Color.prototype.setRgba = function (red, green, blue, alpha) {
        if (red === void 0) { red = null; }
        if (green === void 0) { green = null; }
        if (blue === void 0) { blue = null; }
        if (alpha === void 0) { alpha = 1; }
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
    };
    /**
     * define Color from HSLa
     */
    Color.prototype.setHsla = function (hue, saturation, lightness, alpha) {
        if (alpha === void 0) { alpha = 1; }
        if (alpha != null) {
            alpha = alpha > 1 ? 1 : alpha < 0 ? 0 : alpha;
            this.rgba.alpha = alpha;
        }
        var hsla = new Hsla(hue, saturation, lightness, alpha);
        this.rgba = this.hslaToRgba(hsla);
        this.hsva = this.rgbaToHsva(this.rgba);
        return this;
    };
    /**
     * return hexadecimal value formatted as '#341d2a' or '#341d2aFF' if alhpa channel is enabled
     */
    Color.prototype.toHexString = function (alpha) {
        if (alpha === void 0) { alpha = false; }
        /* tslint:disable:no-bitwise */
        var hex = '#' + ((1 << 24) | (this.rgba.getRed() << 16) | (this.rgba.getGreen() << 8) | this.rgba.getBlue()).toString(16).substr(1);
        if (alpha) {
            hex += ((1 << 8) | Math.round(this.rgba.alpha * 255)).toString(16).substr(1);
        }
        /* tslint:enable:no-bitwise */
        return hex.toUpperCase();
    };
    /**
     * return rgba string formatted as rgba(52, 29, 42, 1)
     */
    Color.prototype.toRgbaString = function () {
        return this.rgba.toString();
    };
    /**
     * return rgb string formatted as rgb(52, 29, 42)
     */
    Color.prototype.toRgbString = function () {
        return this.rgba.toString(false);
    };
    /**
     * return hsla string formatted as hsla(327, 29%, 16%, 1)
     */
    Color.prototype.toHslaString = function () {
        return this.getHsla().toString();
    };
    /**
     * return hsl string formatted as hsl(327, 29%, 16%)
     */
    Color.prototype.toHslString = function () {
        return this.getHsla().toString(false);
    };
    /**
     * return hsva string formatted as hsva(327, 29%, 16%, 100%)
     */
    Color.prototype.toHsvaString = function () {
        return this.hsva.toString();
    };
    /**
     * return hsv string formatted as hsv(327, 29%, 16%)
     */
    Color.prototype.toHsvString = function () {
        return this.hsva.toString(false);
    };
    /**
     * return Cmyk string formatted as cmyk(100%, 100%, 100%, 100%)
     */
    Color.prototype.toCmykString = function () {
        return this.getCmyk().toString();
    };
    Color.prototype.getHsva = function () {
        return new Hsva(this.hsva.hue, this.hsva.saturation, this.hsva.value, this.hsva.alpha);
    };
    Color.prototype.getRgba = function () {
        return new Rgba(this.rgba.red, this.rgba.green, this.rgba.blue, this.rgba.alpha);
    };
    Color.prototype.getHsla = function () {
        return this.rgbaToHsla(this.rgba);
    };
    Color.prototype.getCmyk = function () {
        return this.rgbaToCmyk(this.rgba);
    };
    Color.prototype.hsvaToHsla = function (color) {
        var hue = color.hue;
        var s = color.saturation / 100;
        var v = color.value / 100;
        var lightness = ((2 - s) * color.value) / 2;
        var saturation = (s * v) / ((lightness <= 1) ? lightness : 2 - lightness) || 0;
        return new Hsla(hue, lightness * 100, saturation * 100, color.alpha);
    };
    Color.prototype.hslaToHsva = function (color) {
        var hue = color.hue;
        var l = (color.lightness / 100) * 2;
        var s = (color.saturation / 100) * (l <= 1 ? l : 2 - l);
        var value = (l + s) / 2;
        var saturation = (2 * s) / (l + s) || 0;
        return new Hsva(hue, saturation, value, color.alpha);
    };
    Color.prototype.rgbaToHsva = function (color) {
        var red = color.red / 255;
        var green = color.green / 255;
        var blue = color.blue / 255;
        var alpha = color.alpha;
        var Cmax = Math.max(red, green, blue);
        var Cmin = Math.min(red, green, blue);
        var delta = Cmax - Cmin;
        var hue = 0;
        var saturation = Cmax === 0 ? 0 : delta / Cmax;
        var brightness = Cmax;
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
    };
    Color.prototype.hsvaToRgba = function (color) {
        var red = 1;
        var green = 0;
        var blue = 0;
        var saturation = color.saturation / 100;
        var brightness = color.value / 100;
        var alpha = color.alpha;
        var hex = color.hue / 60;
        var primary = Math.floor(hex);
        var secoundary = hex - primary;
        var a = (1 - saturation) * brightness;
        var b = (1 - (saturation * secoundary)) * brightness;
        var c = (1 - (saturation * (1 - secoundary))) * brightness;
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
    };
    Color.prototype.rgbaToHsla = function (color) {
        // based on CamanJS
        var red = color.red / 255;
        var green = color.green / 255;
        var blue = color.blue / 255;
        var alpha = color.alpha;
        var max = Math.max(red, green, blue);
        var min = Math.min(red, green, blue);
        var hue = 0;
        var saturation = 0;
        var luminance = (max + min) / 2;
        var delta = max - min;
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
    };
    /**
     * convert rgb color from HSLa
     *
     * hue = 0 => 360
     * saturation = 0 => 1
     * lightness = 0 => 1
     */
    Color.prototype.hslaToRgba = function (color) {
        var hue = color.hue / 360;
        var saturation = color.saturation / 100;
        var lightness = color.lightness / 100;
        var alpha = color.alpha;
        var red = lightness;
        var green = lightness;
        var blue = lightness;
        if (saturation !== 0) {
            var q = lightness < 0.5 ? lightness * (1 + saturation) : lightness + saturation - (lightness * saturation);
            var p = 2 * lightness - q;
            red = this.hueToRgb(p, q, hue + (1 / 3));
            green = this.hueToRgb(p, q, hue);
            blue = this.hueToRgb(p, q, hue - (1 / 3));
        }
        red = red * 255;
        green = green * 255;
        blue = blue * 255;
        return new Rgba(red, green, blue, alpha);
    };
    Color.prototype.hueToRgb = function (p, q, t) {
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
    };
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
    Color.prototype.cmykToRgba = function (color) {
        var black = color.black / 100;
        var cyan = color.cyan / 100;
        var magenta = color.magenta / 100;
        var yellow = color.yellow / 100;
        var red = Math.min(1, (1 - cyan) * (1 - black));
        var green = Math.min(1, (1 - magenta) * (1 - black));
        var blue = Math.min(1, (1 - yellow) * (1 - black));
        red = red * 255;
        green = green * 255;
        blue = blue * 255;
        return new Rgba(red, green, blue, 1);
    };
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
    Color.prototype.rgbaToCmyk = function (color) {
        var red = color.red / 255;
        var green = color.green / 255;
        var blue = color.blue / 255;
        var cyan = 1 - red;
        var magenta = 1 - green;
        var yellow = 1 - blue;
        var black = Math.min(cyan, magenta, yellow);
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
    };
    Color.prototype.roundNumber = function (number) {
        return Math.round(number * 100) / 100;
    };
    Color.prototype.stringToColor = function (colorString) {
        var str = colorString.replace(/ /g, '').toLowerCase();
        /**
         * try to find color by name in table
         */
        var rgba = ColorsTable[colorString] || null;
        /**
         * hex find
         */
        if (str[0] === '#') {
            var hex = str.substr(1);
            var length_1 = hex.length;
            var a = 1;
            var hexArray = void 0;
            if (length_1 === 3) {
                hexArray = hex.split('').map(function (value) { return value + value; });
            }
            else if (length_1 === 6) {
                hexArray = hex.match(/.{2}/g);
            }
            else if (length_1 === 8) {
                var alpha = hex.substr(-2);
                hex = hex.substr(0, length_1 - 2);
                a = this.roundNumber(parseInt(alpha || 'FF', 16) / 255);
                hexArray = hex.match(/.{2}/g);
            }
            if (hexArray.length === 3) {
                rgba = new Rgba(parseInt(hexArray[0], 16), parseInt(hexArray[1], 16), parseInt(hexArray[2], 16), a);
            }
        }
        var OpenParenthesis = str.indexOf('(');
        var CloseParenthesis = str.indexOf(')');
        if (OpenParenthesis !== -1 && CloseParenthesis + 1 === str.length) {
            var colorTypeName = str.substr(0, OpenParenthesis);
            var params = str.substr(OpenParenthesis + 1, CloseParenthesis - (OpenParenthesis + 1)).split(',');
            var alpha = 1;
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
                    var hsla = new Hsla(parseInt(params[0], 10), parseInt(params[1], 10), parseInt(params[2], 10), alpha);
                    rgba = this.hslaToRgba(hsla);
                    break;
                case 'cmyk':
                    var cmyk = new Cmyk(parseInt(params[0], 10), parseInt(params[1], 10), parseInt(params[2], 10), parseInt(params[3], 10));
                    rgba = this.cmykToRgba(cmyk);
                    break;
            }
        }
        if (rgba) {
            this.rgba = rgba;
            this.hsva = this.rgbaToHsva(rgba);
        }
        return this;
    };
    return Color;
}());
export { Color };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3IuY2xhc3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaXBsYWIvbmd4LWNvbG9yLXBpY2tlci8iLCJzb3VyY2VzIjpbImhlbHBlcnMvY29sb3IuY2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNwQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDcEMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNwQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFJbkQ7SUFZSSxlQUFZLFdBQXlCO1FBVnJDOzs7Ozs7V0FNRztRQUNLLFNBQUksR0FBUyxJQUFJLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNsQyxTQUFJLEdBQVMsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFHeEMsSUFBSSxXQUFXLEVBQUU7WUFDYixJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ25DO0lBQ0wsQ0FBQztJQUVhLFVBQUksR0FBbEIsVUFBbUIsS0FBK0M7UUFDOUQsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDM0IsT0FBTyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMzQjthQUFNLElBQUcsS0FBSyxZQUFZLEtBQUssRUFBRTtZQUM5QixPQUFPLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN4QjthQUFNLElBQUcsS0FBSyxZQUFZLElBQUksRUFBRTtZQUM3QixPQUFPLElBQUksS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEtB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QUFDO1FBQzVCLElBQU0sU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5QyxJQUFNLFVBQVUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFakYsT0FBTyxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsU0FBUyxHQUFHLEdBQUcsRUFBRSxVQUFVLEdBQUcsR0FBRyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRU8sMEJBQVUsR0FBbEIsVUFBbUIsS0FBVztRQUMxQixJQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ3RCLElBQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEMsSUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDMUQsSUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLElBQU0sVUFBVSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUxQyxPQUFPLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRU8sMEJBQVUsR0FBbEIs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Q0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQ3ZCLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDekMsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzdCLE1BQU07YUFDYjtTQUNKO1FBRUQsSUFBSSxJQUFJLEVBQUU7WUFDTixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDckM7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUwsWUFBQztBQUFELENBQUMsQUFwZ0JELElBb2dCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENteWsgfSBmcm9tICcuL2NteWsuY2xhc3MnO1xuaW1wb3J0IHsgSHNsYSB9IGZyb20gJy4vaHNsYS5jbGFzcyc7XG5pbXBvcnQgeyBIc3ZhIH0gZnJvbSAnLi9oc3ZhLmNsYXNzJztcbmltcG9ydCB7IFJnYmEgfSBmcm9tICcuL3JnYmEuY2xhc3MnO1xuaW1wb3J0IHsgQ29sb3JzVGFibGUgfSBmcm9tICcuL2NvbG9ycy10YWJsZS5jbGFzcyc7XG5cbmV4cG9ydCB0eXBlIENvbG9yU3RyaW5nID0gc3RyaW5nO1xuXG5leHBvcnQgY2xhc3MgQ29sb3Ige1xuXG4gICAgLyoqXG4gICAgICogYmFzZSBjb2xvciB1c2VkIHRvIGNhbGN1bGF0ZSBvdGhlclxuICAgICAqIGRlZmF1bHQgY29sb3JcbiAgICAgKiByZ2IoMjU1LCAwLCAwKVxuICAgICAqIGhzbCgwLCAxMDAlLCA1MCUpXG4gICAgICogI2ZmMDAwMFxuICAgICAqL1xuICAgIHByaXZhdGUgaHN2YTogSHN2YSA9IG5ldyBIc3ZhKDAsIDEsIDEsIDEpO1xuICAgIHByaXZhdGUgcmdiYTogUmdiYSA9IG5ldyBSZ2JhKDI1NSwgMCwgMCwgMSk7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb2xvclN0cmluZz86IENvbG9yU3RyaW5nKXtcbiAgICAgICAgaWYgKGNvbG9yU3RyaW5nKSB7XG4gICAgICAgICAgICB0aGlzLnN0cmluZ1RvQ29sb3IoY29sb3JTdHJpbmcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBmcm9tKGNvbG9yOiBDb2xvclN0cmluZyB8IENvbG9yIHwgSHN2YSB8IFJnYmEgfCBIc2xhKTogQ29sb3Ige1xuICAgICAgICBpZiAodHlwZW9mIGNvbG9yID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihjb2xvcik7XG4gICAgICAgIH0gZWxzZSBpZihjb2xvciBpbnN0YW5jZW9mIENvbG9yKSB7XG4gICAgICAgICAgICByZXR1cm4gY29sb3IuY2xvbmUoKTtcbiAgICAgICAgfSBlbHNlIGlmKGNvbG9yIGluc3RhbmNlb2YgUmdiYSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcigpLnNldFJnYmEoY29sb3IucmVkLCBjb2xvci5ncmVlbiwgY29sb3IuYmx1ZSwgY29sb3IuYWxwaGEpO1xuICAgICAgICB9IGVsc2UgaWYoY29sb3IgaW5zdGFuY2VvZiBIc3ZhKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKCkuc2V0SHN2YShjb2xvci5odWUsIGNvbG9yLnNhdHVyYXRpb24sIGNvbG9yLnZhbHVlLCBjb2xvci5hbHBoYSk7XG4gICAgICAgIH0gZWxzZSBpZihjb2xvciBpbnN0YW5jZW9mIEhzbGEpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoKS5zZXRIc2xhKGNvbG9yLmh1ZSwgY29sb3Iuc2F0dXJhdGlvbiwgY29sb3IubGlnaHRuZXNzLCBjb2xvci5hbHBoYSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBtYWtlIGZyb20gZXhpc3RpbmcgY29sb3IgbmV3IGNvbG9yIG9iamVjdFxuICAgICAqL1xuICAgIHB1YmxpYyBjbG9uZSgpOiBDb2xvciB7XG4gICAgICAgIHJldHVybiBDb2xvci5mcm9tKHRoaXMuZ2V0UmdiYSgpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBkZWZpbmUgQ29sb3IgZnJvbSBoZXgsIHJnYiwgcmdiYSwgaHNsLCBoc2xhIG9yIGNteWsgc3RyaW5nXG4gICAgICovXG4gICAgcHVibGljIHNldEZyb21TdHJpbmcoY29sb3I6IENvbG9yU3RyaW5nKTogdGhpcyB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0cmluZ1RvQ29sb3IoY29sb3IpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGRlZmluZSBDb2xvciBmcm9tIEhTViB2YWx1ZXNcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0SHN2YShodWU6IG51bWJlciA9IG51bGwsIHNhdHVyYXRpb246IG51bWJlciA9IDEwMCwgYnJpZ2h0bmVzczogbnVtYmVyID0gMTAwLCBhbHBoYTogbnVtYmVyID0gMSk6IHRoaXMge1xuICAgICAgICBpZiAoaHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuaHN2YS5odWUgPSBodWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2F0dXJhdGlvbiAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmhzdmEuc2F0dXJhdGlvbiA9IHNhdHVyYXRpb247XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYnJpZ2h0bmVzcyAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmhzdmEudmFsdWUgPSBicmlnaHRuZXNzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFscGhhICE9IG51bGwpIHtcbiAgICAgICAgICAgIGFscGhhID0gYWxwaGEgPiAxID8gMSA6IGFscGhhIDwgMCA/IDAgOiBhbHBoYTtcbiAgICAgICAgICAgIHRoaXMuaHN2YS5hbHBoYSA9IGFscGhhO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZ2JhID0gdGhpcy5oc3ZhVG9SZ2JhKHRoaXMuaHN2YSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGRlZmluZSBDb2xvciBmcm9tIFJHQmFcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0UmdiYShyZWQ6IG51bWJlciA9IG51bGwsIGdyZWVuOiBudW1iZXIgPSBudWxsLCBibHVlOiBudW1iZXIgPSBudWxsLCBhbHBoYTogbnVtYmVyID0gMSk6IHRoaXMge1xuICAgICAgICBpZiAocmVkICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMucmdiYS5yZWQgPSByZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZ3JlZW4gIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5yZ2JhLmdyZWVuID0gZ3JlZW47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYmx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnJnYmEuYmx1ZSA9IGJsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYWxwaGEgIT0gbnVsbCkge1xuICAgICAgICAgICAgYWxwaGEgPSBhbHBoYSA+IDEgPyAxIDogYWxwaGEgPCAwID8gMCA6IGFscGhhO1xuICAgICAgICAgICAgdGhpcy5yZ2JhLmFscGhhID0gYWxwaGE7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmhzdmEgPSB0aGlzLnJnYmFUb0hzdmEodGhpcy5yZ2JhKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZGVmaW5lIENvbG9yIGZyb20gSFNMYVxuICAgICAqL1xuICAgIHB1YmxpYyBzZXRIc2xhKGh1ZTogbnVtYmVyLCBzYXR1cmF0aW9uOiBudW1iZXIsIGxpZ2h0bmVzczogbnVtYmVyLCBhbHBoYTogbnVtYmVyID0gMSk6IHRoaXMge1xuICAgICAgICBpZiAoYWxwaGEgIT0gbnVsbCkge1xuICAgICAgICAgICAgYWxwaGEgPSBhbHBoYSA+IDEgPyAxIDogYWxwaGEgPCAwID8gMCA6IGFscGhhO1xuICAgICAgICAgICAgdGhpcy5yZ2JhLmFscGhhID0gYWxwaGE7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBoc2xhID0gbmV3IEhzbGEoaHVlLCBzYXR1cmF0aW9uLCBsaWdodG5lc3MsIGFscGhhKTtcbiAgICAgICAgdGhpcy5yZ2JhID0gdGhpcy5oc2xhVG9SZ2JhKGhzbGEpO1xuICAgICAgICB0aGlzLmhzdmEgPSB0aGlzLnJnYmFUb0hzdmEodGhpcy5yZ2JhKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcmV0dXJuIGhleGFkZWNpbWFsIHZhbHVlIGZvcm1hdHRlZCBhcyAnIzM0MWQyYScgb3IgJyMzNDFkMmFGRicgaWYgYWxocGEgY2hhbm5lbCBpcyBlbmFibGVkXG4gICAgICovXG4gICAgcHVibGljIHRvSGV4U3RyaW5nKGFscGhhOiBib29sZWFuID0gZmFsc2UpOiBDb2xvclN0cmluZyB7XG4gICAgICAgIC8qIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgKi9cbiAgICAgICAgbGV0IGhleCA9ICcjJyArICgoMSA8PCAyNCkgfCAodGhpcy5yZ2JhLmdldFJlZCgpIDw8IDE2KSB8ICh0aGlzLnJnYmEuZ2V0R3JlZW4oKSA8PCA4KSB8IHRoaXMucmdiYS5nZXRCbHVlKCkpLnRvU3RyaW5nKDE2KS5zdWJzdHIoMSk7XG4gICAgICAgIGlmIChhbHBoYSkge1xuICAgICAgICAgICAgaGV4ICs9ICgoMSA8PCA4KSB8IE1hdGgucm91bmQodGhpcy5yZ2JhLmFscGhhICogMjU1KSkudG9TdHJpbmcoMTYpLnN1YnN0cigxKTtcbiAgICAgICAgfVxuICAgICAgICAvKiB0c2xpbnQ6ZW5hYmxlOm5vLWJpdHdpc2UgKi9cbiAgICAgICAgcmV0dXJuIGhleC50b1VwcGVyQ2FzZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHJldHVybiByZ2JhIHN0cmluZyBmb3JtYXR0ZWQgYXMgcmdiYSg1MiwgMjksIDQyLCAxKVxuICAgICAqL1xuICAgIHB1YmxpYyB0b1JnYmFTdHJpbmcoKTogQ29sb3JTdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5yZ2JhLnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcmV0dXJuIHJnYiBzdHJpbmcgZm9ybWF0dGVkIGFzIHJnYig1MiwgMjksIDQyKVxuICAgICAqL1xuICAgIHB1YmxpYyB0b1JnYlN0cmluZygpOiBDb2xvclN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnJnYmEudG9TdHJpbmcoZmFsc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHJldHVybiBoc2xhIHN0cmluZyBmb3JtYXR0ZWQgYXMgaHNsYSgzMjcsIDI5JSwgMTYlLCAxKVxuICAgICAqL1xuICAgIHB1YmxpYyB0b0hzbGFTdHJpbmcoKTogQ29sb3JTdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRIc2xhKCkudG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiByZXR1cm4gaHNsIHN0cmluZyBmb3JtYXR0ZWQgYXMgaHNsKDMyNywgMjklLCAxNiUpXG4gICAgICovXG4gICAgcHVibGljIHRvSHNsU3RyaW5nKCk6IENvbG9yU3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SHNsYSgpLnRvU3RyaW5nKGZhbHNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiByZXR1cm4gaHN2YSBzdHJpbmcgZm9ybWF0dGVkIGFzIGhzdmEoMzI3LCAyOSUsIDE2JSwgMTAwJSlcbiAgICAgKi9cbiAgICBwdWJsaWMgdG9Ic3ZhU3RyaW5nKCk6IENvbG9yU3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHN2YS50b1N0cmluZygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHJldHVybiBoc3Ygc3RyaW5nIGZvcm1hdHRlZCBhcyBoc3YoMzI3LCAyOSUsIDE2JSlcbiAgICAgKi9cbiAgICBwdWJsaWMgdG9Ic3ZTdHJpbmcoKTogQ29sb3JTdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5oc3ZhLnRvU3RyaW5nKGZhbHNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiByZXR1cm4gQ215ayBzdHJpbmcgZm9ybWF0dGVkIGFzIGNteWsoMTAwJSwgMTAwJSwgMTAwJSwgMTAwJSlcbiAgICAgKi9cbiAgICBwdWJsaWMgdG9DbXlrU3RyaW5nKCk6IENvbG9yU3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q215aygpLnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEhzdmEoKTogSHN2YSB7XG4gICAgICAgIHJldHVybiBuZXcgSHN2YSh0aGlzLmhzdmEuaHVlLCB0aGlzLmhzdmEuc2F0dXJhdGlvbiwgdGhpcy5oc3ZhLnZhbHVlLCB0aGlzLmhzdmEuYWxwaGEpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRSZ2JhKCk6IFJnYmEge1xuICAgICAgICByZXR1cm4gbmV3IFJnYmEodGhpcy5yZ2JhLnJlZCwgdGhpcy5yZ2JhLmdyZWVuLCB0aGlzLnJnYmEuYmx1ZSwgdGhpcy5yZ2JhLmFscGhhKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0SHNsYSgpOiBIc2xhIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmdiYVRvSHNsYSh0aGlzLnJnYmEpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRDbXlrKCk6IENteWsge1xuICAgICAgICByZXR1cm4gdGhpcy5yZ2JhVG9DbXlrKHRoaXMucmdiYSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoc3ZhVG9Ic2xhKGNvbG9yOiBIc3ZhKTogSHNsYSB7XG4gICAgICAgIGNvbnN0IGh1ZSA9IGNvbG9yLmh1ZTtcbiAgICAgICAgY29uc3QgcyA9IGNvbG9yLnNhdHVyYXRpb24gLyAxMDA7XG4gICAgICAgIGNvbnN0IHYgPSBjb2xvci52YWx1ZSAvIDEwMDtcbiAgICAgICAgY29uc3QgbGlnaHRuZXNzID0gKCgyIC0gcykgKiBjb2xvci52YWx1ZSkgLyAyO1xuICAgICAgICBjb25zdCBzYXR1cmF0aW9uID0gKHMgKiB2KSAvICgobGlnaHRuZXNzIDw9IDEpID8gbGlnaHRuZXNzIDogMiAtIGxpZ2h0bmVzcykgfHwgMDtcblxuICAgICAgICByZXR1cm4gbmV3IEhzbGEoaHVlLCBsaWdodG5lc3MgKiAxMDAsIHNhdHVyYXRpb24gKiAxMDAsIGNvbG9yLmFscGhhKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhzbGFUb0hzdmEoY29sb3I6IEhzbGEpOiBIc3ZhIHtcbiAgICAgICAgY29uc3QgaHVlID0gY29sb3IuaHVlO1xuICAgICAgICBjb25zdCBsID0gKGNvbG9yLmxpZ2h0bmVzcyAvIDEwMCkgKiAyO1xuICAgICAgICBjb25zdCBzID0gKGNvbG9yLnNhdHVyYXRpb24gLyAxMDApICogKGwgPD0gMSA/IGwgOiAyIC0gbCk7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gKGwgKyBzKSAvIDI7XG4gICAgICAgIGNvbnN0IHNhdHVyYXRpb24gPSAoMiAqIHMpIC8gKGwgKyBzKSB8fCAwO1xuXG4gICAgICAgIHJldHVybiBuZXcgSHN2YShodWUsIHNhdHVyYXRpb24sIHZhbHVlLCBjb2xvci5hbHBoYSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZ2JhVG9Ic3ZhKGNvbG9yOiBSZ2JhKTogSHN2YSB7XG4gICAgICAgIGNvbnN0IHJlZCA9IGNvbG9yLnJlZCAvIDI1NTtcbiAgICAgICAgY29uc3QgZ3JlZW4gPSBjb2xvci5ncmVlbiAvIDI1NTtcbiAgICAgICAgY29uc3QgYmx1ZSA9IGNvbG9yLmJsdWUgLyAyNTU7XG4gICAgICAgIGNvbnN0IGFscGhhID0gY29sb3IuYWxwaGE7XG5cbiAgICAgICAgY29uc3QgQ21heCA9IE1hdGgubWF4KHJlZCwgZ3JlZW4sIGJsdWUpO1xuICAgICAgICBjb25zdCBDbWluID0gTWF0aC5taW4ocmVkLCBncmVlbiwgYmx1ZSk7XG4gICAgICAgIGNvbnN0IGRlbHRhID0gQ21heCAtIENtaW47XG5cbiAgICAgICAgbGV0IGh1ZSA9IDA7XG4gICAgICAgIGxldCBzYXR1cmF0aW9uOiBudW1iZXIgPSBDbWF4ID09PSAwID8gMCA6IGRlbHRhIC8gQ21heDtcbiAgICAgICAgbGV0IGJyaWdodG5lc3M6IG51bWJlciA9IENtYXg7XG5cbiAgICAgICAgaWYgKENtYXggIT09IENtaW4pIHtcbiAgICAgICAgICAgIHN3aXRjaCAoQ21heCkge1xuICAgICAgICAgICAgICAgIGNhc2UgcmVkOlxuICAgICAgICAgICAgICAgICAgICBodWUgPSAoZ3JlZW4gLSBibHVlKSAvIGRlbHRhICsgKGdyZWVuIDwgYmx1ZSA/IDYgOiAwKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBncmVlbjpcbiAgICAgICAgICAgICAgICAgICAgaHVlID0gMiArIChibHVlIC0gcmVkKSAvIGRlbHRhO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGJsdWU6XG4gICAgICAgICAgICAgICAgICAgIGh1ZSA9IDQgKyAocmVkIC0gZ3JlZW4pIC8gZGVsdGE7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaHVlIC89IDY7XG4gICAgICAgIH1cblxuICAgICAgICBodWUgPSBodWUgKiAzNjA7XG4gICAgICAgIHNhdHVyYXRpb24gPSBzYXR1cmF0aW9uICogMTAwO1xuICAgICAgICBicmlnaHRuZXNzID0gYnJpZ2h0bmVzcyAqIDEwMDtcblxuICAgICAgICByZXR1cm4gbmV3IEhzdmEoaHVlLCBzYXR1cmF0aW9uLCBicmlnaHRuZXNzLCBhbHBoYSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoc3ZhVG9SZ2JhKGNvbG9yOiBIc3ZhKTogUmdiYSB7XG4gICAgICAgIGxldCByZWQgPSAxO1xuICAgICAgICBsZXQgZ3JlZW4gPSAwO1xuICAgICAgICBsZXQgYmx1ZSA9IDA7XG4gICAgICAgIGNvbnN0IHNhdHVyYXRpb24gPSBjb2xvci5zYXR1cmF0aW9uIC8gMTAwO1xuICAgICAgICBjb25zdCBicmlnaHRuZXNzID0gY29sb3IudmFsdWUgLyAxMDA7XG4gICAgICAgIGNvbnN0IGFscGhhID0gY29sb3IuYWxwaGE7XG4gICAgICAgIGNvbnN0IGhleCA9IGNvbG9yLmh1ZSAvIDYwO1xuXG4gICAgICAgIGNvbnN0IHByaW1hcnkgPSBNYXRoLmZsb29yKGhleCk7XG4gICAgICAgIGNvbnN0IHNlY291bmRhcnkgPSBoZXggLSBwcmltYXJ5O1xuICAgICAgICBjb25zdCBhID0gKDEgLSBzYXR1cmF0aW9uKSAqIGJyaWdodG5lc3M7XG4gICAgICAgIGNvbnN0IGIgPSAoMSAtIChzYXR1cmF0aW9uICogc2Vjb3VuZGFyeSkpICogYnJpZ2h0bmVzcztcbiAgICAgICAgY29uc3QgYyA9ICgxIC0gKHNhdHVyYXRpb24gKiAoMSAtIHNlY291bmRhcnkpKSkgKiBicmlnaHRuZXNzO1xuXG4gICAgICAgIHN3aXRjaCAocHJpbWFyeSkge1xuICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgY2FzZSAwOiByZWQgPSBicmlnaHRuZXNzOyBncmVlbiA9IGM7IGJsdWUgPSBhOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTogcmVkID0gYjsgZ3JlZW4gPSBicmlnaHRuZXNzOyBibHVlID0gYTsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6IHJlZCA9IGE7IGdyZWVuID0gYnJpZ2h0bmVzczsgYmx1ZSA9IGM7IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOiByZWQgPSBhOyBncmVlbiA9IGI7IGJsdWUgPSBicmlnaHRuZXNzOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDogcmVkID0gYzsgZ3JlZW4gPSBhOyBibHVlID0gYnJpZ2h0bmVzczsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDU6IHJlZCA9IGJyaWdodG5lc3M7IGdyZWVuID0gYTsgYmx1ZSA9IGI7IGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVkID0gcmVkICogMjU1O1xuICAgICAgICBncmVlbiA9IGdyZWVuICogMjU1O1xuICAgICAgICBibHVlID0gYmx1ZSAqIDI1NTtcblxuICAgICAgICByZXR1cm4gbmV3IFJnYmEocmVkLCBncmVlbiwgYmx1ZSwgYWxwaGEpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZ2JhVG9Ic2xhKGNvbG9yOiBSZ2JhKTogSHNsYSB7XG4gICAgICAgIC8vIGJhc2VkIG9uIENhbWFuSlNcbiAgICAgICAgY29uc3QgcmVkID0gY29sb3IucmVkIC8gMjU1O1xuICAgICAgICBjb25zdCBncmVlbiA9IGNvbG9yLmdyZWVuIC8gMjU1O1xuICAgICAgICBjb25zdCBibHVlID0gY29sb3IuYmx1ZSAvIDI1NTtcbiAgICAgICAgY29uc3QgYWxwaGEgPSBjb2xvci5hbHBoYTtcblxuICAgICAgICBjb25zdCBtYXggPSBNYXRoLm1heChyZWQsIGdyZWVuLCBibHVlKTtcbiAgICAgICAgY29uc3QgbWluID0gTWF0aC5taW4ocmVkLCBncmVlbiwgYmx1ZSk7XG5cbiAgICAgICAgbGV0IGh1ZSA9IDA7XG4gICAgICAgIGxldCBzYXR1cmF0aW9uID0gMDtcbiAgICAgICAgbGV0IGx1bWluYW5jZSA9IChtYXggKyBtaW4pIC8gMjtcbiAgICAgICAgY29uc3QgZGVsdGEgPSBtYXggLSBtaW47XG5cbiAgICAgICAgaWYgKG1heCAhPT0gbWluKSB7XG4gICAgICAgICAgICBzYXR1cmF0aW9uID0gbHVtaW5hbmNlID4gMC41ID8gZGVsdGEgLyAoMi4wIC0gbWF4IC0gbWluKSA6IGRlbHRhIC8gKG1heCArIG1pbik7XG4gICAgICAgICAgICBzd2l0Y2ggKG1heCkge1xuICAgICAgICAgICAgICAgIGNhc2UgcmVkOlxuICAgICAgICAgICAgICAgICAgICBodWUgPSAoZ3JlZW4gLSBibHVlKSAvIGRlbHRhICsgKGdyZWVuIDwgYmx1ZSA/IDYgOiAwKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBncmVlbjpcbiAgICAgICAgICAgICAgICAgICAgaHVlID0gKGJsdWUgLSByZWQpIC8gZGVsdGEgKyAyO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGJsdWU6XG4gICAgICAgICAgICAgICAgICAgIGh1ZSA9IChyZWQgLSBncmVlbikgLyBkZWx0YSArIDQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBodWUgLz0gNjtcbiAgICAgICAgfVxuXG4gICAgICAgIGh1ZSA9IGh1ZSAqIDM2MDtcbiAgICAgICAgc2F0dXJhdGlvbiA9IHNhdHVyYXRpb24gKiAxMDA7XG4gICAgICAgIGx1bWluYW5jZSA9IGx1bWluYW5jZSAqIDEwMDtcblxuICAgICAgICByZXR1cm4gbmV3IEhzbGEoaHVlLCBzYXR1cmF0aW9uLCBsdW1pbmFuY2UsIGFscGhhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBjb252ZXJ0IHJnYiBjb2xvciBmcm9tIEhTTGFcbiAgICAgKlxuICAgICAqIGh1ZSA9IDAgPT4gMzYwXG4gICAgICogc2F0dXJhdGlvbiA9IDAgPT4gMVxuICAgICAqIGxpZ2h0bmVzcyA9IDAgPT4gMVxuICAgICAqL1xuICAgIHByaXZhdGUgaHNsYVRvUmdiYShjb2xvcjogSHNsYSk6IFJnYmEge1xuICAgICAgICBjb25zdCBodWUgPSBjb2xvci5odWUgLyAzNjA7XG4gICAgICAgIGNvbnN0IHNhdHVyYXRpb24gPSBjb2xvci5zYXR1cmF0aW9uIC8gMTAwO1xuICAgICAgICBjb25zdCBsaWdodG5lc3MgPSBjb2xvci5saWdodG5lc3MgLyAxMDA7XG4gICAgICAgIGNvbnN0IGFscGhhID0gY29sb3IuYWxwaGE7XG5cbiAgICAgICAgbGV0IHJlZCA9IGxpZ2h0bmVzcztcbiAgICAgICAgbGV0IGdyZWVuID0gbGlnaHRuZXNzO1xuICAgICAgICBsZXQgYmx1ZSA9IGxpZ2h0bmVzcztcblxuICAgICAgICBpZihzYXR1cmF0aW9uICE9PSAwKSB7XG4gICAgICAgICAgICBjb25zdCBxID0gbGlnaHRuZXNzIDwgMC41ID8gbGlnaHRuZXNzICogKDEgKyBzYXR1cmF0aW9uKSA6IGxpZ2h0bmVzcyArIHNhdHVyYXRpb24gLSAobGlnaHRuZXNzICogc2F0dXJhdGlvbik7XG4gICAgICAgICAgICBjb25zdCBwID0gMiAqIGxpZ2h0bmVzcyAtIHE7XG5cbiAgICAgICAgICAgIHJlZCA9IHRoaXMuaHVlVG9SZ2IocCwgcSwgaHVlICsgKDEgLyAzKSk7XG4gICAgICAgICAgICBncmVlbiA9IHRoaXMuaHVlVG9SZ2IocCwgcSwgaHVlKTtcbiAgICAgICAgICAgIGJsdWUgPSB0aGlzLmh1ZVRvUmdiKHAsIHEsIGh1ZSAtICgxIC8gMykpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVkID0gcmVkICogMjU1O1xuICAgICAgICBncmVlbiA9IGdyZWVuICogMjU1O1xuICAgICAgICBibHVlID0gYmx1ZSAqIDI1NTtcblxuICAgICAgICByZXR1cm4gbmV3IFJnYmEocmVkLCBncmVlbiwgYmx1ZSwgYWxwaGEpO1xuICAgIH1cblxuICAgIHByaXZhdGUgaHVlVG9SZ2IocCwgcSwgdCk6IG51bWJlciB7XG4gICAgICAgIC8vIGJhc2VkIG9uIENhbWFuSlNcbiAgICAgICAgaWYgKHQgPCAwKSB7IHQgKz0gMTsgfVxuICAgICAgICBpZiAodCA+IDEpIHsgdCAtPSAxOyB9XG4gICAgICAgIGlmICh0IDwgMSAvIDYpIHsgcmV0dXJuIHAgKyAocSAtIHApICogNiAqIHQ7IH1cbiAgICAgICAgaWYgKHQgPCAxIC8gMikgeyByZXR1cm4gcTsgfVxuICAgICAgICBpZiAodCA8IDIgLyAzKSB7IHJldHVybiBwICsgKHEgLSBwKSAqICgyIC8gMyAtIHQpICogNjsgfVxuICAgICAgICByZXR1cm4gcDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgUmVkLCBHcmVlbiwgQmx1ZSB2YWx1ZXMgYXJlIGdpdmVuIGluIHRoZSByYW5nZSBvZiAwLi4yNTUsXG4gICAgICpcbiAgICAgKiB0aGUgcmVkIGNvbG9yKFIpIGlzIGNhbGN1bGF0ZWQgZnJvbSB0aGUgY3lhbihDKSBhbmQgYmxhY2soSykgY29sb3JzLFxuICAgICAqIHRoZSBncmVlbiBjb2xvcihHKSBpcyBjYWxjdWxhdGVkIGZyb20gdGhlIG1hZ2VudGEoTSkgYW5kIGJsYWNrKEspIGNvbG9ycyxcbiAgICAgKiBUaGUgYmx1ZSBjb2xvcihCKSBpcyBjYWxjdWxhdGVkIGZyb20gdGhlIHllbGxvdyhZKSBhbmQgYmxhY2soSykgY29sb3JzLlxuICAgICAqXG4gICAgICogQmVsb3cgaXMgdGhlIGZvcm11bGEgb2YgQ01ZSyB0byBSR0IgY29udmVydGlvblxuICAgICAqXG4gICAgICogUmVkID0gMjU1IMOXIDEgLSBtaW4oICgxIC0gQ3lhbiDDtyAxMDApIMOXICgxIC0gQmxhY2spIClcbiAgICAgKiBHcmVlbiA9IDI1NSDDlyAxIC0gbWluKDEgLSBNYWdlbnRhIMO3IDEwMCkgw5cgKDEgLSBCbGFjaylcbiAgICAgKiBCbHVlID0gMjU1IMOXIDEgLSBtaW4oMSAtIFllbGxvdyDDtyAxMDApIMOXICgxIC0gQmxhY2spXG4gICAgICovXG4gICAgcHJpdmF0ZSBjbXlrVG9SZ2JhKGNvbG9yOiBDbXlrKTogUmdiYSB7XG4gICAgICAgIGNvbnN0IGJsYWNrID0gY29sb3IuYmxhY2sgLyAxMDA7XG4gICAgICAgIGNvbnN0IGN5YW4gPSBjb2xvci5jeWFuIC8gMTAwO1xuICAgICAgICBjb25zdCBtYWdlbnRhID0gY29sb3IubWFnZW50YSAvIDEwMDtcbiAgICAgICAgY29uc3QgeWVsbG93ID0gY29sb3IueWVsbG93IC8gMTAwO1xuXG4gICAgICAgIGxldCByZWQgPSBNYXRoLm1pbigxLCAoMSAtIGN5YW4pICogKDEgLSBibGFjaykpO1xuICAgICAgICBsZXQgZ3JlZW4gPSBNYXRoLm1pbigxLCAoMSAtIG1hZ2VudGEpICogKDEgLSBibGFjaykpO1xuICAgICAgICBsZXQgYmx1ZSA9IE1hdGgubWluKDEsICgxIC0geWVsbG93KSAqICgxIC0gYmxhY2spKTtcblxuICAgICAgICByZWQgPSByZWQgKiAyNTU7XG4gICAgICAgIGdyZWVuID0gZ3JlZW4gKiAyNTU7XG4gICAgICAgIGJsdWUgPSBibHVlICogMjU1O1xuXG4gICAgICAgIHJldHVybiBuZXcgUmdiYShyZWQsIGdyZWVuLCBibHVlLCAxKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbWF4IG51bWJlciBvZiBSLCBHLCBCIHZhbHVlcyBhcmUgMjU1LCBmaXJzdCBvZiBhbGwsIHdlIGRpdmlkZWQgdGhlbSBieSAyNTUgdG8gYmVjb21lIHRoZSBudW1iZXJcbiAgICAgKiBvZiAwfjEsIHRoaXMgcmF0aW8gd2lsbCBiZSB1c2VkIGluIHRoZSBjYWxjdWxhdGlvbi5cbiAgICAgKiBSYyA9IFIgw7cgMjU1XG4gICAgICogR2MgPSBHIMO3IDI1NVxuICAgICAqIEJjID0gQiDDtyAyNTVcbiAgICAgKiBUaGUgYmxhY2sga2V5KEspIGNvbG9yIGNvdWxkIGJlIG1hbnkgcmVzdWx0LCB3aGVuIHdlIGFzc3VtZSBhIGJsYWNrIGtleSB2YWx1ZSxcbiAgICAgKiB0aGUgb3RoZXIgdGhyZWUgY29sb3JzKGN5YW4sIG1hZ2VudGEsIHllbGxvdykgY2FuIGJlIGNhbGN1bGF0ZWQuXG4gICAgICogd2UgY2FuIGNhbGN1bGF0ZSBpdCBmcm9tIHRoZSByZWQsIGdyZWVuIGFuZCBibHVlIGNvbG9ycywgdGhlIG1heCBudW1iZXIgb2YgYmxhY2sga2V5IHNob3VsZCBiZSA6XG4gICAgICogSyA9IDEgLSBtaW4oUmMsIEdjLCBCYyk7XG4gICAgICpcbiAgICAgKiBvciB3ZSBjYW4gYXNzdW1lIHdlIHJ1biBvdXQgb2YgdGhlIGJsYWNrIGluaywgbmVlZCB1c2UgdGhlIHJlbWFpbmluZyBvdGhlciB0aHJlZSBjb2xvciBpbmtzIHRvIGZpbmlzaCB0aGUgcHJpbnRpbmcgam9iLlxuICAgICAqIEsgPSAwO1xuICAgICAqXG4gICAgICogVGhlIGN5YW4gY29sb3IoQykgaXMgY2FsY3VsYXRlZCBmcm9tIHRoZSByZWQgYW5kIGJsYWNrIGNvbG9yczpcbiAgICAgKiBDID0gKDEgLSBSYyAtIEspIMO3ICgxIC0gSylcbiAgICAgKlxuICAgICAqIFRoZSBtYWdlbnRhIGNvbG9yIChNKSBpcyBjYWxjdWxhdGVkIGZyb20gdGhlIGdyZWVuIGFuZCBibGFjayBjb2xvcnM6XG4gICAgICogTSA9ICgxIC0gR3IgLSBLKSDDtyAoMSAtIEspXG4gICAgICpcbiAgICAgKiBUaGUgeWVsbG93IGNvbG9yKFkpIGlzIGNhbGN1bGF0ZWQgZnJvbSB0aGUgYmx1ZSBhbmQgYmxhY2sgY29sb3JzOlxuICAgICAqIFkgPSAoMSAtIEJjIC0gSykgw7cgKCAxIC0gSylcbiAgICAgKi9cbiAgICBwcml2YXRlIHJnYmFUb0NteWsoY29sb3I6IFJnYmEpOiBDbXlrIHtcbiAgICAgICAgY29uc3QgcmVkID0gY29sb3IucmVkIC8gMjU1O1xuICAgICAgICBjb25zdCBncmVlbiA9IGNvbG9yLmdyZWVuIC8gMjU1O1xuICAgICAgICBjb25zdCBibHVlID0gY29sb3IuYmx1ZSAvIDI1NTtcblxuICAgICAgICBsZXQgY3lhbiA9IDEgLSByZWQ7XG4gICAgICAgIGxldCBtYWdlbnRhID0gMSAtIGdyZWVuO1xuICAgICAgICBsZXQgeWVsbG93ID0gMSAtIGJsdWU7XG4gICAgICAgIGxldCBibGFjayA9IE1hdGgubWluKGN5YW4sIG1hZ2VudGEsIHllbGxvdyk7XG5cbiAgICAgICAgaWYgKGJsYWNrID09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ215aygwLCAwLCAwLCAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGN5YW4gPSAoY3lhbiAtIGJsYWNrKSAvICgxIC0gYmxhY2spO1xuICAgICAgICBtYWdlbnRhID0gKG1hZ2VudGEgLSBibGFjaykgLyAoMSAtIGJsYWNrKTtcbiAgICAgICAgeWVsbG93ID0gKHllbGxvdyAtIGJsYWNrKSAvICgxIC0gYmxhY2spO1xuXG4gICAgICAgIGJsYWNrID0gIGJsYWNrICogMTAwO1xuICAgICAgICBjeWFuID0gIGN5YW4gKiAxMDA7XG4gICAgICAgIG1hZ2VudGEgPSAgbWFnZW50YSAqIDEwMDtcbiAgICAgICAgeWVsbG93ID0gIHllbGxvdyAqIDEwMDtcblxuICAgICAgICByZXR1cm4gbmV3IENteWsoY3lhbiwgbWFnZW50YSwgeWVsbG93LCBibGFjayk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByb3VuZE51bWJlcihudW1iZXI6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKG51bWJlciAqIDEwMCkgLyAxMDA7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdHJpbmdUb0NvbG9yKGNvbG9yU3RyaW5nOiBDb2xvclN0cmluZyk6IHRoaXMge1xuICAgICAgICBjb25zdCBzdHIgPSBjb2xvclN0cmluZy5yZXBsYWNlKC8gL2csICcnKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAvKipcbiAgICAgICAgICogdHJ5IHRvIGZpbmQgY29sb3IgYnkgbmFtZSBpbiB0YWJsZVxuICAgICAgICAgKi9cbiAgICAgICAgbGV0IHJnYmE6IFJnYmEgPSBDb2xvcnNUYWJsZVtjb2xvclN0cmluZ10gfHwgbnVsbDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogaGV4IGZpbmRcbiAgICAgICAgICovXG4gICAgICAgIGlmIChzdHJbMF0gPT09ICcjJykge1xuICAgICAgICAgICAgbGV0IGhleCA9IHN0ci5zdWJzdHIoMSk7XG4gICAgICAgICAgICBjb25zdCBsZW5ndGggPSBoZXgubGVuZ3RoO1xuICAgICAgICAgICAgbGV0IGEgPSAxO1xuICAgICAgICAgICAgbGV0IGhleEFycmF5O1xuXG4gICAgICAgICAgICBpZiAobGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICAgICAgaGV4QXJyYXkgPSBoZXguc3BsaXQoJycpLm1hcCgodmFsdWUpID0+IHZhbHVlICsgdmFsdWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChsZW5ndGggPT09IDYpIHtcbiAgICAgICAgICAgICAgICBoZXhBcnJheSA9IGhleC5tYXRjaCgvLnsyfS9nKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobGVuZ3RoID09PSA4KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWxwaGEgPSBoZXguc3Vic3RyKC0yKTtcbiAgICAgICAgICAgICAgICBoZXggPSBoZXguc3Vic3RyKDAsIGxlbmd0aCAtIDIpO1xuICAgICAgICAgICAgICAgIGEgPSB0aGlzLnJvdW5kTnVtYmVyKHBhcnNlSW50KGFscGhhIHx8ICdGRicsIDE2KSAvIDI1NSk7XG4gICAgICAgICAgICAgICAgaGV4QXJyYXkgPSBoZXgubWF0Y2goLy57Mn0vZyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChoZXhBcnJheS5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgICAgICByZ2JhID0gbmV3IFJnYmEocGFyc2VJbnQoaGV4QXJyYXlbMF0sIDE2KSwgcGFyc2VJbnQoaGV4QXJyYXlbMV0sIDE2KSwgcGFyc2VJbnQoaGV4QXJyYXlbMl0sIDE2KSwgYSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBPcGVuUGFyZW50aGVzaXMgPSBzdHIuaW5kZXhPZignKCcpO1xuICAgICAgICBjb25zdCBDbG9zZVBhcmVudGhlc2lzID0gc3RyLmluZGV4T2YoJyknKTtcblxuICAgICAgICBpZiAoT3BlblBhcmVudGhlc2lzICE9PSAtMSAmJiBDbG9zZVBhcmVudGhlc2lzICsgMSA9PT0gc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgY29sb3JUeXBlTmFtZSA9IHN0ci5zdWJzdHIoMCwgT3BlblBhcmVudGhlc2lzKTtcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IHN0ci5zdWJzdHIoT3BlblBhcmVudGhlc2lzICsgMSwgQ2xvc2VQYXJlbnRoZXNpcyAtIChPcGVuUGFyZW50aGVzaXMgKyAxKSkuc3BsaXQoJywnKTtcbiAgICAgICAgICAgIGxldCBhbHBoYSA9IDE7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoY29sb3JUeXBlTmFtZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3JnYmEnOlxuICAgICAgICAgICAgICAgICAgICBhbHBoYSA9IHBhcnNlRmxvYXQocGFyYW1zLnBvcCgpKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gRmFsbCB0aHJvdWdoLlxuICAgICAgICAgICAgICAgIGNhc2UgJ3JnYic6XG4gICAgICAgICAgICAgICAgICAgIHJnYmEgPSBuZXcgUmdiYShwYXJzZUludChwYXJhbXNbMF0sIDEwKSwgcGFyc2VJbnQocGFyYW1zWzFdLCAxMCksIHBhcnNlSW50KHBhcmFtc1syXSwgMTApLCBhbHBoYSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2hzbGEnOlxuICAgICAgICAgICAgICAgICAgICBhbHBoYSA9IHBhcnNlRmxvYXQocGFyYW1zLnBvcCgpKTtcbiAgICAgICAgICAgICAgICBjYXNlICdoc2wnOlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBoc2xhID0gbmV3IEhzbGEocGFyc2VJbnQocGFyYW1zWzBdLCAxMCksIHBhcnNlSW50KHBhcmFtc1sxXSwgMTApLCBwYXJzZUludChwYXJhbXNbMl0sIDEwKSwgYWxwaGEpO1xuICAgICAgICAgICAgICAgICAgICByZ2JhID0gdGhpcy5oc2xhVG9SZ2JhKGhzbGEpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdjbXlrJzpcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY215ayA9IG5ldyBDbXlrKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQocGFyYW1zWzBdLCAxMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludChwYXJhbXNbMV0sIDEwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KHBhcmFtc1syXSwgMTApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQocGFyYW1zWzNdLCAxMCkpO1xuICAgICAgICAgICAgICAgICAgICByZ2JhID0gdGhpcy5jbXlrVG9SZ2JhKGNteWspO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZ2JhKSB7XG4gICAgICAgICAgICB0aGlzLnJnYmEgPSByZ2JhO1xuICAgICAgICAgICAgdGhpcy5oc3ZhID0gdGhpcy5yZ2JhVG9Ic3ZhKHJnYmEpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG59XG4iXX0=