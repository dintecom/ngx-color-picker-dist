import { BaseColor } from './base-color.class';
/**
 * RGB (Red Green Blue)
 *
 * Red = ranges from 0-255
 * Green = ranges from 0-255
 * Blue = ranges from 0-255
 * Alpha = range from 0-1
 */
export declare class Rgba extends BaseColor {
    red: number;
    green: number;
    blue: number;
    alpha: number;
    constructor(red: number, green: number, blue: number, alpha: number);
    toString(showAlphaChannel?: boolean): string;
    getRed(): number;
    getGreen(): number;
    getBlue(): number;
    getAlpha(): number;
}
