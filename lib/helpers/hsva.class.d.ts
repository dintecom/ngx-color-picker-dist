import { BaseColor } from './base-color.class';
/**
 * HSB and HSV are the same
 *
 * Hue = ranges from 0 to 360°
 * Saturation = ranges from 0 to 100%
 * Brightness or Value = ranges from 0 to 100%
 * Alpha = range from 0-1
 */
export declare class Hsva extends BaseColor {
    hue: number;
    saturation: number;
    value: number;
    alpha: number;
    constructor(hue: number, saturation: number, value: number, alpha: number);
    toString(showAlphaChannel?: boolean): string;
    getHue(): number;
    getSaturation(): number;
    getValue(): number;
    getAlpha(): number;
}
