import { BaseColor } from './base-color.class';
/**
 * HSL and HSI are the same
 *
 * Hue = ranges from 0 to 360°
 * Saturation = ranges from 0 to 100%
 * Lightness or Intensity = ranges from 0 to 100%
 * Alpha = range from 0-1
 */
export declare class Hsla extends BaseColor {
    hue: number;
    saturation: number;
    lightness: number;
    alpha: number;
    constructor(hue: number, saturation: number, lightness: number, alpha: number);
    toString(showAlphaChannel?: boolean): string;
    getHue(): number;
    getSaturation(): number;
    getLightness(): number;
    getAlpha(): number;
}
