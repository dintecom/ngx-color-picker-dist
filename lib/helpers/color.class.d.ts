import { Cmyk } from './cmyk.class';
import { Hsla } from './hsla.class';
import { Hsva } from './hsva.class';
import { Rgba } from './rgba.class';
export declare type ColorString = string;
export declare class Color {
    /**
     * base color used to calculate other
     * default color
     * rgb(255, 0, 0)
     * hsl(0, 100%, 50%)
     * #ff0000
     */
    private hsva;
    private rgba;
    constructor(colorString?: ColorString);
    static from(color: ColorString | Color | Hsva | Rgba | Hsla): Color;
    /**
     * make from existing color new color object
     */
    clone(): Color;
    /**
     * define Color from hex, rgb, rgba, hsl, hsla or cmyk string
     */
    setFromString(color: ColorString): this;
    /**
     * define Color from HSV values
     */
    setHsva(hue?: number, saturation?: number, brightness?: number, alpha?: number): this;
    /**
     * define Color from RGBa
     */
    setRgba(red?: number, green?: number, blue?: number, alpha?: number): this;
    /**
     * define Color from HSLa
     */
    setHsla(hue: number, saturation: number, lightness: number, alpha?: number): this;
    /**
     * return hexadecimal value formatted as '#341d2a' or '#341d2aFF' if alhpa channel is enabled
     */
    toHexString(alpha?: boolean): ColorString;
    /**
     * return rgba string formatted as rgba(52, 29, 42, 1)
     */
    toRgbaString(): ColorString;
    /**
     * return rgb string formatted as rgb(52, 29, 42)
     */
    toRgbString(): ColorString;
    /**
     * return hsla string formatted as hsla(327, 29%, 16%, 1)
     */
    toHslaString(): ColorString;
    /**
     * return hsl string formatted as hsl(327, 29%, 16%)
     */
    toHslString(): ColorString;
    /**
     * return hsva string formatted as hsva(327, 29%, 16%, 100%)
     */
    toHsvaString(): ColorString;
    /**
     * return hsv string formatted as hsv(327, 29%, 16%)
     */
    toHsvString(): ColorString;
    /**
     * return Cmyk string formatted as cmyk(100%, 100%, 100%, 100%)
     */
    toCmykString(): ColorString;
    getHsva(): Hsva;
    getRgba(): Rgba;
    getHsla(): Hsla;
    getCmyk(): Cmyk;
    private hsvaToHsla;
    private hslaToHsva;
    private rgbaToHsva;
    private hsvaToRgba;
    private rgbaToHsla;
    /**
     * convert rgb color from HSLa
     *
     * hue = 0 => 360
     * saturation = 0 => 1
     * lightness = 0 => 1
     */
    private hslaToRgba;
    private hueToRgb;
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
    private cmykToRgba;
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
    private rgbaToCmyk;
    private roundNumber;
    private stringToColor;
}
