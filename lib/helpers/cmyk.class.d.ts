import { BaseColor } from './base-color.class';
/**
 * CMYK color space
 *
 * Cyan = ranges from 0 to 100%
 * Magenta = ranges from 0 to 100%
 * Yellow = ranges from 0 to 100%
 * blacK = ranges from 0 to 100%
 */
export declare class Cmyk extends BaseColor {
    cyan: number;
    magenta: number;
    yellow: number;
    black: number;
    constructor(cyan: number, magenta: number, yellow: number, black: number);
    toString(): string;
    getCyan(): number;
    getMagenta(): number;
    getYellow(): number;
    getBlack(): number;
}
