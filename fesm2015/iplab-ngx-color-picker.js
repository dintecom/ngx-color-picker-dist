import { __decorate, __metadata, __param } from 'tslib';
import { EventEmitter, Input, Output, ViewChild, ElementRef, HostBinding, HostListener, Component, ChangeDetectionStrategy, Inject, Renderer2, ChangeDetectorRef, Directive, Pipe, NgModule } from '@angular/core';
import { DOCUMENT, CommonModule } from '@angular/common';
import { Subject, of, BehaviorSubject } from 'rxjs';
import { map, delay, takeUntil, distinctUntilChanged } from 'rxjs/operators';
import { trigger, state, style, transition, animate, query, stagger } from '@angular/animations';

class BaseColor {
}

/**
 * CMYK color space
 *
 * Cyan = ranges from 0 to 100%
 * Magenta = ranges from 0 to 100%
 * Yellow = ranges from 0 to 100%
 * blacK = ranges from 0 to 100%
 */
class Cmyk extends BaseColor {
    constructor(cyan, magenta, yellow, black) {
        super();
        this.cyan = cyan;
        this.magenta = magenta;
        this.yellow = yellow;
        this.black = black;
    }
    toString() {
        return `cmyk(${this.getCyan()}%, ${this.getMagenta()}%, ${this.getYellow()}%, ${this.getBlack()}%)`;
    }
    getCyan() {
        return Math.round(this.cyan);
    }
    getMagenta() {
        return Math.round(this.magenta);
    }
    getYellow() {
        return Math.round(this.yellow);
    }
    getBlack() {
        return Math.round(this.black);
    }
}

/**
 * HSL and HSI are the same
 *
 * Hue = ranges from 0 to 360°
 * Saturation = ranges from 0 to 100%
 * Lightness or Intensity = ranges from 0 to 100%
 * Alpha = range from 0-1
 */
class Hsla extends BaseColor {
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

/**
 * HSB and HSV are the same
 *
 * Hue = ranges from 0 to 360°
 * Saturation = ranges from 0 to 100%
 * Brightness or Value = ranges from 0 to 100%
 * Alpha = range from 0-1
 */
class Hsva extends BaseColor {
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

/**
 * RGB (Red Green Blue)
 *
 * Red = ranges from 0-255
 * Green = ranges from 0-255
 * Blue = ranges from 0-255
 * Alpha = range from 0-1
 */
class Rgba extends BaseColor {
    constructor(red, green, blue, alpha) {
        super();
        this.red = red;
        this.green = green;
        this.blue = blue;
        this.alpha = alpha;
    }
    toString(showAlphaChannel = true) {
        return showAlphaChannel
            ? `rgba(${this.getRed()}, ${this.getGreen()}, ${this.getBlue()}, ${this.getAlpha()})`
            : `rgb(${this.getRed()}, ${this.getGreen()}, ${this.getBlue()})`;
    }
    getRed() {
        return Math.round(this.red);
    }
    getGreen() {
        return Math.round(this.green);
    }
    getBlue() {
        return Math.round(this.blue);
    }
    getAlpha() {
        return Math.round(this.alpha * 100) / 100;
    }
}

/**
 * http://www.w3.org/TR/css3-color/
 */
class ColorsTable {
}
ColorsTable.transparent = new Rgba(0, 0, 0, 0);
ColorsTable.aliceblue = new Rgba(240, 248, 255, 1);
ColorsTable.antiquewhite = new Rgba(250, 235, 215, 1);
ColorsTable.aqua = new Rgba(0, 255, 255, 1);
ColorsTable.aquamarine = new Rgba(127, 255, 212, 1);
ColorsTable.azure = new Rgba(240, 255, 255, 1);
ColorsTable.beige = new Rgba(245, 245, 220, 1);
ColorsTable.bisque = new Rgba(255, 228, 196, 1);
ColorsTable.black = new Rgba(0, 0, 0, 1);
ColorsTable.blanchedalmond = new Rgba(255, 235, 205, 1);
ColorsTable.blue = new Rgba(0, 0, 255, 1);
ColorsTable.blueviolet = new Rgba(138, 43, 226, 1);
ColorsTable.brown = new Rgba(165, 42, 42, 1);
ColorsTable.burlywood = new Rgba(222, 184, 135, 1);
ColorsTable.cadetblue = new Rgba(95, 158, 160, 1);
ColorsTable.chartreuse = new Rgba(127, 255, 0, 1);
ColorsTable.chocolate = new Rgba(210, 105, 30, 1);
ColorsTable.coral = new Rgba(255, 127, 80, 1);
ColorsTable.cornflowerblue = new Rgba(100, 149, 237, 1);
ColorsTable.cornsilk = new Rgba(255, 248, 220, 1);
ColorsTable.crimson = new Rgba(220, 20, 60, 1);
ColorsTable.cyan = new Rgba(0, 255, 255, 1);
ColorsTable.darkblue = new Rgba(0, 0, 139, 1);
ColorsTable.darkcyan = new Rgba(0, 139, 139, 1);
ColorsTable.darkgoldenrod = new Rgba(184, 134, 11, 1);
ColorsTable.darkgray = new Rgba(169, 169, 169, 1);
ColorsTable.darkgreen = new Rgba(0, 100, 0, 1);
ColorsTable.darkgrey = ColorsTable.darkgray;
ColorsTable.darkkhaki = new Rgba(189, 183, 107, 1);
ColorsTable.darkmagenta = new Rgba(139, 0, 139, 1);
ColorsTable.darkolivegreen = new Rgba(85, 107, 47, 1);
ColorsTable.darkorange = new Rgba(255, 140, 0, 1);
ColorsTable.darkorchid = new Rgba(153, 50, 204, 1);
ColorsTable.darkred = new Rgba(139, 0, 0, 1);
ColorsTable.darksalmon = new Rgba(233, 150, 122, 1);
ColorsTable.darkseagreen = new Rgba(143, 188, 143, 1);
ColorsTable.darkslateblue = new Rgba(72, 61, 139, 1);
ColorsTable.darkslategray = new Rgba(47, 79, 79, 1);
ColorsTable.darkslategrey = ColorsTable.darkslategray;
ColorsTable.darkturquoise = new Rgba(0, 206, 209, 1);
ColorsTable.darkviolet = new Rgba(148, 0, 211, 1);
ColorsTable.deeppink = new Rgba(255, 20, 147, 1);
ColorsTable.deepskyblue = new Rgba(0, 191, 255, 1);
ColorsTable.dimgray = new Rgba(105, 105, 105, 1);
ColorsTable.dimgrey = ColorsTable.dimgray;
ColorsTable.dodgerblue = new Rgba(30, 144, 255, 1);
ColorsTable.firebrick = new Rgba(178, 34, 34, 1);
ColorsTable.floralwhite = new Rgba(255, 250, 240, 1);
ColorsTable.forestgreen = new Rgba(34, 139, 34, 1);
ColorsTable.fuchsia = new Rgba(255, 0, 255, 1);
ColorsTable.gainsboro = new Rgba(220, 220, 220, 1);
ColorsTable.ghostwhite = new Rgba(248, 248, 255, 1);
ColorsTable.gold = new Rgba(255, 215, 0, 1);
ColorsTable.goldenrod = new Rgba(218, 165, 32, 1);
ColorsTable.gray = new Rgba(128, 128, 128, 1);
ColorsTable.grey = ColorsTable.gray;
ColorsTable.green = new Rgba(0, 128, 0, 1);
ColorsTable.greenyellow = new Rgba(173, 255, 47, 1);
ColorsTable.honeydew = new Rgba(240, 255, 240, 1);
ColorsTable.hotpink = new Rgba(255, 105, 180, 1);
ColorsTable.indianred = new Rgba(205, 92, 92, 1);
ColorsTable.indigo = new Rgba(75, 0, 130, 1);
ColorsTable.ivory = new Rgba(255, 255, 240, 1);
ColorsTable.khaki = new Rgba(240, 230, 140, 1);
ColorsTable.lavender = new Rgba(230, 230, 250, 1);
ColorsTable.lavenderblush = new Rgba(255, 240, 245, 1);
ColorsTable.lawngreen = new Rgba(124, 252, 0, 1);
ColorsTable.lemonchiffon = new Rgba(255, 250, 205, 1);
ColorsTable.lightblue = new Rgba(173, 216, 230, 1);
ColorsTable.lightcoral = new Rgba(240, 128, 128, 1);
ColorsTable.lightcyan = new Rgba(224, 255, 255, 1);
ColorsTable.lightgoldenrodyellow = new Rgba(250, 250, 210, 1);
ColorsTable.lightgray = new Rgba(211, 211, 211, 1);
ColorsTable.lightgreen = new Rgba(144, 238, 144, 1);
ColorsTable.lightgrey = ColorsTable.lightgray;
ColorsTable.lightpink = new Rgba(255, 182, 193, 1);
ColorsTable.lightsalmon = new Rgba(255, 160, 122, 1);
ColorsTable.lightseagreen = new Rgba(32, 178, 170, 1);
ColorsTable.lightskyblue = new Rgba(135, 206, 250, 1);
ColorsTable.lightslategray = new Rgba(119, 136, 153, 1);
ColorsTable.lightslategrey = ColorsTable.lightslategray;
ColorsTable.lightsteelblue = new Rgba(176, 196, 222, 1);
ColorsTable.lightyellow = new Rgba(255, 255, 224, 1);
ColorsTable.lime = new Rgba(0, 255, 0, 1);
ColorsTable.limegreen = new Rgba(50, 205, 50, 1);
ColorsTable.linen = new Rgba(250, 240, 230, 1);
ColorsTable.magenta = new Rgba(255, 0, 255, 1);
ColorsTable.maroon = new Rgba(128, 0, 0, 1);
ColorsTable.mediumaquamarine = new Rgba(102, 205, 170, 1);
ColorsTable.mediumblue = new Rgba(0, 0, 205, 1);
ColorsTable.mediumorchid = new Rgba(186, 85, 211, 1);
ColorsTable.mediumpurple = new Rgba(147, 112, 219, 1);
ColorsTable.mediumseagreen = new Rgba(60, 179, 113, 1);
ColorsTable.mediumslateblue = new Rgba(123, 104, 238, 1);
ColorsTable.mediumspringgreen = new Rgba(0, 250, 154, 1);
ColorsTable.mediumturquoise = new Rgba(72, 209, 204, 1);
ColorsTable.mediumvioletred = new Rgba(199, 21, 133, 1);
ColorsTable.midnightblue = new Rgba(25, 25, 112, 1);
ColorsTable.mintcream = new Rgba(245, 255, 250, 1);
ColorsTable.mistyrose = new Rgba(255, 228, 225, 1);
ColorsTable.moccasin = new Rgba(255, 228, 181, 1);
ColorsTable.navajowhite = new Rgba(255, 222, 173, 1);
ColorsTable.navy = new Rgba(0, 0, 128, 1);
ColorsTable.oldlace = new Rgba(253, 245, 230, 1);
ColorsTable.olive = new Rgba(128, 128, 0, 1);
ColorsTable.olivedrab = new Rgba(107, 142, 35, 1);
ColorsTable.orange = new Rgba(255, 165, 0, 1);
ColorsTable.orangered = new Rgba(255, 69, 0, 1);
ColorsTable.orchid = new Rgba(218, 112, 214, 1);
ColorsTable.palegoldenrod = new Rgba(238, 232, 170, 1);
ColorsTable.palegreen = new Rgba(152, 251, 152, 1);
ColorsTable.paleturquoise = new Rgba(175, 238, 238, 1);
ColorsTable.palevioletred = new Rgba(219, 112, 147, 1);
ColorsTable.papayawhip = new Rgba(255, 239, 213, 1);
ColorsTable.peachpuff = new Rgba(255, 218, 185, 1);
ColorsTable.peru = new Rgba(205, 133, 63, 1);
ColorsTable.pink = new Rgba(255, 192, 203, 1);
ColorsTable.plum = new Rgba(221, 160, 221, 1);
ColorsTable.powderblue = new Rgba(176, 224, 230, 1);
ColorsTable.purple = new Rgba(128, 0, 128, 1);
ColorsTable.red = new Rgba(255, 0, 0, 1);
ColorsTable.rosybrown = new Rgba(188, 143, 143, 1);
ColorsTable.royalblue = new Rgba(65, 105, 225, 1);
ColorsTable.saddlebrown = new Rgba(139, 69, 19, 1);
ColorsTable.salmon = new Rgba(250, 128, 114, 1);
ColorsTable.sandybrown = new Rgba(244, 164, 96, 1);
ColorsTable.seagreen = new Rgba(46, 139, 87, 1);
ColorsTable.seashell = new Rgba(255, 245, 238, 1);
ColorsTable.sienna = new Rgba(160, 82, 45, 1);
ColorsTable.silver = new Rgba(192, 192, 192, 1);
ColorsTable.skyblue = new Rgba(135, 206, 235, 1);
ColorsTable.slateblue = new Rgba(106, 90, 205, 1);
ColorsTable.slategray = new Rgba(112, 128, 144, 1);
ColorsTable.slategrey = ColorsTable.slategray;
ColorsTable.snow = new Rgba(255, 250, 250, 1);
ColorsTable.springgreen = new Rgba(0, 255, 127, 1);
ColorsTable.steelblue = new Rgba(70, 130, 180, 1);
ColorsTable.tan = new Rgba(210, 180, 140, 1);
ColorsTable.teal = new Rgba(0, 128, 128, 1);
ColorsTable.thistle = new Rgba(216, 191, 216, 1);
ColorsTable.tomato = new Rgba(255, 99, 71, 1);
ColorsTable.turquoise = new Rgba(64, 224, 208, 1);
ColorsTable.violet = new Rgba(238, 130, 238, 1);
ColorsTable.wheat = new Rgba(245, 222, 179, 1);
ColorsTable.white = new Rgba(255, 255, 255, 1);
ColorsTable.whitesmoke = new Rgba(245, 245, 245, 1);
ColorsTable.yellow = new Rgba(255, 255, 0, 1);
ColorsTable.yellowgreen = new Rgba(154, 205, 50, 1);

class Color {
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
        let rgba = ColorsTable[colorString] || null;
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

/**
 * because a dynamic directive yet is not implemented,
 * we have a base class which will
 * help us to implement position calculation in our
 * components
 */
class BaseComponent {
    constructor(document, elementRef, renderer) {
        this.document = document;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.eventHooks = [];
        this.window = { pageXOffset: 0, pageYOffset: 0 };
        this.window = document.defaultView;
        this.requestAnimationFrame = this.getRequestAnimationFrame();
    }
    onEventChange(event) {
        this.calculate(event);
        this.eventHooks.push(this.renderer.listen(this.document, 'mouseup', () => this.removeListeners()));
        this.eventHooks.push(this.renderer.listen(this.document, 'touchend', () => this.removeListeners()));
        this.eventHooks.push(this.renderer.listen(this.document, 'mousemove', (e) => this.calculate(e)));
        this.eventHooks.push(this.renderer.listen(this.document, 'touchmove', (e) => this.calculate(e)));
    }
    calculateCoordinates(event) {
        const { width: elWidth, height: elHeight, top: elTop, left: elLeft } = this.elementRef.nativeElement.getBoundingClientRect();
        const pageX = typeof event['pageX'] === 'number' ? event['pageX'] : event['touches'][0].pageX;
        const pageY = typeof event['pageY'] === 'number' ? event['pageY'] : event['touches'][0].pageY;
        const x = Math.max(0, Math.min(pageX - (elLeft + this.window.pageXOffset), elWidth));
        const y = Math.max(0, Math.min(pageY - (elTop + this.window.pageYOffset), elHeight));
        this.movePointer({ x, y, height: elHeight, width: elWidth });
    }
    calculate(event) {
        event.preventDefault();
        if (!this.requestAnimationFrame) {
            return this.calculateCoordinates(event);
        }
        this.requestAnimationFrame(() => this.calculateCoordinates(event));
    }
    getRequestAnimationFrame() {
        return this.window.requestAnimationFrame ||
            this.window.webkitRequestAnimationFrame ||
            this.window.mozRequestAnimationFrame ||
            this.window.oRequestAnimationFrame ||
            this.window.msRequestAnimationFrame;
    }
    removeListeners() {
        this.eventHooks.forEach((cb) => cb());
        this.eventHooks.length = 0;
    }
    ngOnDestroy() {
        this.removeListeners();
    }
}

let SaturationComponent = class SaturationComponent extends BaseComponent {
    constructor(renderer, document, elementRef) {
        super(document, elementRef, renderer);
        this.colorChange = new EventEmitter(false);
    }
    get backgroundColor() {
        return this.hue ? this.hue.toRgbaString() : '';
    }
    onClick(event) {
        this.onEventChange(event);
    }
    ngOnInit() {
        if (!this.hue) {
            this.hue = Color.from(this.color.getHsva());
        }
        this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', this.backgroundColor);
    }
    /**
     * color can be changed through inputs
     * and then we need to move pointer
     */
    ngOnChanges(changes) {
        if (changes.color && changes.color.previousValue !== changes.color.currentValue) {
            const hsva = this.color.getHsva();
            this.changePointerPosition(hsva.saturation, hsva.value);
        }
    }
    movePointer({ x, y, height, width }) {
        const saturation = (x * 100) / width;
        const bright = -((y * 100) / height) + 100;
        this.changePointerPosition(saturation, bright);
        const hsva = this.hue.getHsva();
        const color = this.color.getHsva();
        const newColor = new Color().setHsva(hsva.hue, saturation, bright, color.alpha);
        this.colorChange.emit(newColor);
    }
    changePointerPosition(x, y) {
        this.renderer.setStyle(this.pointer.nativeElement, 'top', `${100 - y}%`);
        this.renderer.setStyle(this.pointer.nativeElement, 'left', `${x}%`);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Color)
], SaturationComponent.prototype, "hue", void 0);
__decorate([
    Input(),
    __metadata("design:type", Color)
], SaturationComponent.prototype, "color", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], SaturationComponent.prototype, "colorChange", void 0);
__decorate([
    ViewChild('pointer', { static: true }),
    __metadata("design:type", ElementRef)
], SaturationComponent.prototype, "pointer", void 0);
__decorate([
    HostBinding('style.backgroundColor'),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], SaturationComponent.prototype, "backgroundColor", null);
__decorate([
    HostListener('mousedown', ['$event']),
    HostListener('touchstart', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SaturationComponent.prototype, "onClick", null);
SaturationComponent = __decorate([
    Component({
        selector: `saturation-component`,
        template: "<div #pointer class=\"pointer\"></div>",
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [":host,:host ::ng-deep *{padding:0;margin:0;-webkit-box-sizing:border-box;box-sizing:border-box}", ":host{display:block;position:relative;overflow:hidden;height:50px;-webkit-background-size:100% 100%;background-size:100% 100%;background-image:url(data:image/png;base64,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)}.pointer{position:absolute;top:15%;left:90%;width:12px;height:12px;border-radius:50%;border:1px solid #fff;margin:-6px 0 0 -6px}"]
    }),
    __param(1, Inject(DOCUMENT)),
    __metadata("design:paramtypes", [Renderer2, Object, ElementRef])
], SaturationComponent);

class ColorPickerConfig {
    constructor() {
        this.indicatorTitle = 'Copy color to clipboard';
        this.presetsTitle = '{0}. Long-click to show alternate shades.';
    }
}

let IndicatorComponent = class IndicatorComponent {
    constructor(pickerConfig, renderer, elementRef, document) {
        this.pickerConfig = pickerConfig;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.document = document;
        this.colorType = 'rgba';
    }
    get title() {
        return this.pickerConfig ? this.pickerConfig.indicatorTitle : '';
    }
    get backgroundColor() {
        return this.color.toRgbaString();
    }
    onClick(event) {
        const input = this.renderer.createElement('input');
        this.renderer.setStyle(input, 'position', 'absolute');
        this.renderer.setStyle(input, 'top', '-100%');
        this.renderer.setStyle(input, 'left', '-100%');
        switch (this.colorType) {
            case 'hsla':
                input.value = this.color.toHslaString();
                break;
            case 'hex':
                input.value = this.color.toHexString();
                break;
            default:
                input.value = this.backgroundColor;
        }
        this.renderer.appendChild(this.elementRef.nativeElement, input);
        input.select();
        this.document.execCommand('copy');
        this.renderer.removeChild(this.elementRef.nativeElement, input);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Color)
], IndicatorComponent.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], IndicatorComponent.prototype, "colorType", void 0);
__decorate([
    HostBinding('attr.title'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], IndicatorComponent.prototype, "title", null);
__decorate([
    HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], IndicatorComponent.prototype, "onClick", null);
IndicatorComponent = __decorate([
    Component({
        selector: `indicator-component`,
        template: "<div [style.backgroundColor]=\"backgroundColor\">\n    <svg viewBox=\"0 0 48 48\">\n        <path d=\"M0 0h48v48h-48z\" fill=\"none\"/>\n        <path d=\"M32 2h-24c-2.21 0-4 1.79-4 4v28h4v-28h24v-4zm6 8h-22c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h22c2.21 0 4-1.79 4-4v-28c0-2.21-1.79-4-4-4zm0 32h-22v-28h22v28z\"/>\n    </svg>\n</div>",
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [":host,:host ::ng-deep *{padding:0;margin:0;-webkit-box-sizing:border-box;box-sizing:border-box}", "@charset \"UTF-8\";:host{display:block;cursor:pointer;text-align:center;border:1px solid #e3e3e3;overflow:hidden;position:relative;height:20px;width:20px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAh0lEQVRYR+2W0QlAMQgD60zdfwOdqa8TmI/wQMr5K0I5bZLIzLOa2nt37VVVbd+dDx5obgCC3KBLwJ2ff4PnVidkf+ucIhw80HQaCLo3DMH3CRK3iFsmAWVl6hPNDwt8EvNE5q+YuEXcMgkonVM6SdyCoEvAnZ8v1Hjx817MilmxSUB5rdLJDycZgUAZUch/AAAAAElFTkSuQmCC)}:host>div{position:absolute;top:0;left:0;height:100%;width:100%;z-index:1}:host:hover:after{display:block;content:\"\u00A0\";position:absolute;top:0;left:0;height:100%;width:100%;background:#000;opacity:.2;z-index:2}:host svg{-webkit-transition:background-color 2s ease-in-out;transition:background-color 2s ease-in-out;opacity:0;fill:#fff;height:46%;vertical-align:-20%}:host:hover svg{opacity:1}"]
    }),
    __param(3, Inject(DOCUMENT)),
    __metadata("design:paramtypes", [ColorPickerConfig,
        Renderer2,
        ElementRef, Object])
], IndicatorComponent);

let HueComponent = class HueComponent extends BaseComponent {
    constructor(renderer, document, elementRef) {
        super(document, elementRef, renderer);
        this.hueChange = new EventEmitter(false);
        this.colorChange = new EventEmitter(false);
        this.isVertical = false;
    }
    onClick(event) {
        this.onEventChange(event);
    }
    set vertical(value) {
        this.isVertical = true;
    }
    /**
     * color can be changed through inputs
     * and then we need to move pointer
     */
    ngOnChanges(changes) {
        if (changes.hue && changes.hue.previousValue !== changes.hue.currentValue) {
            const hsva = this.hue.getHsva();
            this.changePointerPosition(hsva.hue);
        }
    }
    movePointer({ x, y, height, width }) {
        const hue = this.isVertical ? (y / height) * 360 : (x / width) * 360;
        this.changePointerPosition(hue);
        const color = this.color.getHsva();
        const newColor = new Color().setHsva(hue, color.saturation, color.value, color.alpha);
        const newHueColor = new Color().setHsva(hue, 100, 100, color.alpha);
        this.hueChange.emit(newHueColor);
        this.colorChange.emit(newColor);
    }
    /**
     * hue value is in range from 0 to 360°
     */
    changePointerPosition(hue) {
        const x = hue / 360 * 100;
        const orientation = this.isVertical ? 'top' : 'left';
        this.renderer.setStyle(this.pointer.nativeElement, orientation, `${x}%`);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Color)
], HueComponent.prototype, "hue", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], HueComponent.prototype, "hueChange", void 0);
__decorate([
    Input(),
    __metadata("design:type", Color)
], HueComponent.prototype, "color", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], HueComponent.prototype, "colorChange", void 0);
__decorate([
    ViewChild('pointer', { static: true }),
    __metadata("design:type", ElementRef)
], HueComponent.prototype, "pointer", void 0);
__decorate([
    HostListener('mousedown', ['$event']),
    HostListener('touchstart', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], HueComponent.prototype, "onClick", null);
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], HueComponent.prototype, "vertical", null);
HueComponent = __decorate([
    Component({
        selector: `hue-component`,
        template: "<div #pointer class=\"pointer\"></div>",
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [":host,:host ::ng-deep *{padding:0;margin:0;-webkit-box-sizing:border-box;box-sizing:border-box}", ":host{display:block;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwkUFWbCCAAAAFxJREFUaN7t0kEKg0AQAME2x83/n2qu5qCgD1iDhCoYdpnbQC9bbY1qVO/jvc6k3ad91s7/7F1/csgPrujuQ17BDYSFsBAWwgJhISyEBcJCWAgLhIWwEBYIi2f7Ar/1TCgFH2X9AAAAAElFTkSuQmCC);-webkit-background-size:100% 100%;background-size:100% 100%;height:12px;border-radius:2px;position:relative}:host([vertical]){background-image:url(data:image/png;base64,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);width:12px;height:100px}.pointer{background:#fff;height:14px;width:14px;top:-1px;left:0;position:absolute;border-radius:50%;cursor:pointer;margin:0 0 0 -7px}:host([vertical]) .pointer{left:-1px;margin:-7px 0 0}"]
    }),
    __param(1, Inject(DOCUMENT)),
    __metadata("design:paramtypes", [Renderer2, Object, ElementRef])
], HueComponent);

let AlphaComponent = class AlphaComponent extends BaseComponent {
    constructor(renderer, document, elementRef) {
        super(document, elementRef, renderer);
        this.colorChange = new EventEmitter(false);
        this.isVertical = false;
    }
    onClick(event) {
        this.onEventChange(event);
    }
    set vertical(value) {
        this.isVertical = true;
    }
    /**
     * color can be changed through inputs
     * and then we need to move pointer
     */
    ngOnChanges(changes) {
        if (changes.color && changes.color.previousValue !== changes.color.currentValue) {
            const hsva = this.color.getHsva();
            this.changePointerPosition(hsva.alpha);
        }
    }
    movePointer({ x, y, height, width }) {
        const alpha = this.isVertical ? y / height : x / width;
        this.changePointerPosition(alpha);
        const hsva = this.color.getHsva();
        const newColor = new Color().setHsva(hsva.hue, hsva.saturation, hsva.value, alpha);
        this.colorChange.emit(newColor);
    }
    /**
     * hue value is in range from 0 to 360°
     */
    changePointerPosition(alpha) {
        const x = alpha * 100;
        const orientation = this.isVertical ? 'top' : 'left';
        this.renderer.setStyle(this.pointer.nativeElement, orientation, `${x}%`);
    }
    get gradient() {
        const rgba = this.color.getRgba();
        const orientation = this.isVertical ? 'bottom' : 'right';
        return `linear-gradient(to ${orientation}, rgba(${rgba.red}, ${rgba.green}, ${rgba.blue}, 0) 0%, rgb(${rgba.red}, ${rgba.green}, ${rgba.blue}) 100%)`;
    }
};
__decorate([
    Input(),
    __metadata("design:type", Color)
], AlphaComponent.prototype, "color", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], AlphaComponent.prototype, "colorChange", void 0);
__decorate([
    ViewChild('pointer', { static: true }),
    __metadata("design:type", ElementRef)
], AlphaComponent.prototype, "pointer", void 0);
__decorate([
    HostListener('mousedown', ['$event']),
    HostListener('touchstart', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AlphaComponent.prototype, "onClick", null);
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], AlphaComponent.prototype, "vertical", null);
AlphaComponent = __decorate([
    Component({
        selector: `alpha-component`,
        template: "<div #pointer class=\"pointer\"></div>\n<div class=\"gradient-color\" [ngStyle]=\"{ 'background': gradient }\"></div>",
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [":host,:host ::ng-deep *{padding:0;margin:0;-webkit-box-sizing:border-box;box-sizing:border-box}", ":host{display:block;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMUlEQVQ4T2NkYGAQYcAP3uCTZhw1gGGYhAGBZIA/nYDCgBDAm9BGDWAAJyRCgLaBCAAgXwixzAS0pgAAAABJRU5ErkJggg==);background-position:left center;height:12px;border-radius:2px;position:relative}:host([vertical]){width:12px;height:100px;background-position:center 0}.gradient-color{position:absolute;left:0;right:0;top:0;height:100%;z-index:1}.pointer{background:#fff;height:14px;width:14px;top:-1px;left:0;position:absolute;border-radius:50%;cursor:pointer;margin:0 0 0 -7px;z-index:2}:host([vertical]) .pointer{left:-1px;margin:-7px 0 0}"]
    }),
    __param(1, Inject(DOCUMENT)),
    __metadata("design:paramtypes", [Renderer2, Object, ElementRef])
], AlphaComponent);

let RgbaComponent = class RgbaComponent {
    constructor() {
        this.hueChange = new EventEmitter(false);
        this.colorChange = new EventEmitter(false);
        this.isAlphaVisible = true;
    }
    set label(value) {
        this.labelVisible = true;
    }
    set alpha(isVisible) {
        this.isAlphaVisible = isVisible;
    }
    get value() {
        return this.color ? this.color.getRgba() : null;
    }
    onInputChange(newValue, color) {
        const value = this.value;
        const red = color === 'R' ? newValue : value.red;
        const green = color === 'G' ? newValue : value.green;
        const blue = color === 'B' ? newValue : value.blue;
        const alpha = color === 'A' ? newValue : value.alpha;
        const newColor = new Color().setRgba(red, green, blue, alpha);
        const hue = new Color().setHsva(newColor.getHsva().hue);
        this.hueChange.emit(hue);
        this.colorChange.emit(newColor);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Color)
], RgbaComponent.prototype, "hue", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], RgbaComponent.prototype, "hueChange", void 0);
__decorate([
    Input(),
    __metadata("design:type", Color)
], RgbaComponent.prototype, "color", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], RgbaComponent.prototype, "colorChange", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], RgbaComponent.prototype, "label", null);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], RgbaComponent.prototype, "alpha", null);
RgbaComponent = __decorate([
    Component({
        selector: `rgba-input-component`,
        template: "<div class=\"column\">\n    <input type=\"text\" pattern=\"[0-9]*\" min=\"0\" max=\"255\" [value]=\"value?.getRed()\" (inputChange)=\"onInputChange($event, 'R')\" />\n    <span *ngIf=\"labelVisible\">R</span>\n</div>\n<div class=\"column\">\n    <input type=\"text\" pattern=\"[0-9]*\" min=\"0\" max=\"255\" [value]=\"value?.getGreen()\" (inputChange)=\"onInputChange($event, 'G')\" />\n    <span *ngIf=\"labelVisible\">G</span>\n</div>\n<div class=\"column\">\n    <input type=\"text\" pattern=\"[0-9]*\" min=\"0\" max=\"255\" [value]=\"value?.getBlue()\" (inputChange)=\"onInputChange($event, 'B')\" />\n    <span *ngIf=\"labelVisible\">B</span>\n</div>\n<div class=\"column\" *ngIf=\"isAlphaVisible\">\n    <input type=\"text\" pattern=\"[0-9]+([\\.,][0-9]{1,2})?\" min=\"0\" max=\"1\" [value]=\"value?.getAlpha()\" (inputChange)=\"onInputChange($event, 'A')\" />\n    <span *ngIf=\"labelVisible\">A</span>\n</div>",
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [":host,:host ::ng-deep *{padding:0;margin:0;-webkit-box-sizing:border-box;box-sizing:border-box}", ":host{display:table;width:100%;text-align:center;color:#b4b4b4;font-size:11px}.column{display:table-cell;padding:0 2px}input{width:100%;border:1px solid #dadada;color:#272727;text-align:center;font-size:12px;-webkit-appearance:none;border-radius:0;margin:0 0 6px;height:26px;outline:0}", ""]
    })
], RgbaComponent);

let HslaComponent = class HslaComponent {
    constructor() {
        this.hueChange = new EventEmitter(false);
        this.colorChange = new EventEmitter(false);
        this.isAlphaVisible = true;
    }
    set label(value) {
        this.labelVisible = true;
    }
    set alpha(isVisible) {
        this.isAlphaVisible = isVisible;
    }
    get value() {
        return this.color ? this.color.getHsla() : null;
    }
    onInputChange(newValue, color) {
        const value = this.value;
        const hue = color === 'H' ? newValue : value.hue;
        const saturation = color === 'S' ? newValue : value.saturation;
        const lightness = color === 'L' ? newValue : value.lightness;
        const alpha = color === 'A' ? newValue : value.alpha;
        const newColor = new Color().setHsla(hue, saturation, lightness, alpha);
        const hueColor = new Color().setHsva(newColor.getHsva().hue);
        this.hueChange.emit(hueColor);
        this.colorChange.emit(newColor);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Color)
], HslaComponent.prototype, "hue", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], HslaComponent.prototype, "hueChange", void 0);
__decorate([
    Input(),
    __metadata("design:type", Color)
], HslaComponent.prototype, "color", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], HslaComponent.prototype, "colorChange", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], HslaComponent.prototype, "label", null);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], HslaComponent.prototype, "alpha", null);
HslaComponent = __decorate([
    Component({
        selector: `hsla-input-component`,
        template: "<div class=\"column\">\n    <input type=\"text\" pattern=\"[0-9]*\" min=\"0\" max=\"360\" [value]=\"value?.getHue()\" (inputChange)=\"onInputChange($event, 'H')\" />\n    <span *ngIf=\"labelVisible\">H</span>\n</div>\n<div class=\"column\">\n    <input type=\"text\" pattern=\"[0-9]*\" min=\"0\" max=\"100\" [value]=\"value?.getSaturation() + '%'\" (inputChange)=\"onInputChange($event, 'S')\" />\n    <span *ngIf=\"labelVisible\">S</span>\n</div>\n<div class=\"column\">\n    <input type=\"text\" pattern=\"[0-9]*\" min=\"0\" max=\"100\" [value]=\"value?.getLightness() + '%'\" (inputChange)=\"onInputChange($event, 'L')\" />\n    <span *ngIf=\"labelVisible\">L</span>\n</div>\n<div class=\"column\" *ngIf=\"isAlphaVisible\">\n    <input type=\"text\" pattern=\"[0-9]+([\\.,][0-9]{1,2})?\" min=\"0\" max=\"1\" [value]=\"value?.getAlpha()\" (inputChange)=\"onInputChange($event, 'A')\" />\n    <span *ngIf=\"labelVisible\">A</span>\n</div>",
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [":host,:host ::ng-deep *{padding:0;margin:0;-webkit-box-sizing:border-box;box-sizing:border-box}", ":host{display:table;width:100%;text-align:center;color:#b4b4b4;font-size:11px}.column{display:table-cell;padding:0 2px}input{width:100%;border:1px solid #dadada;color:#272727;text-align:center;font-size:12px;-webkit-appearance:none;border-radius:0;margin:0 0 6px;height:26px;outline:0}", ""]
    })
], HslaComponent);

let HexComponent = class HexComponent {
    constructor() {
        this.hueChange = new EventEmitter(false);
        this.colorChange = new EventEmitter(false);
        this.prefixValue = '';
    }
    set label(value) {
        this.labelVisible = true;
    }
    set prefix(value) {
        this.prefixValue = value;
    }
    get value() {
        return this.prefixValue + (this.color ? this.color.toHexString().replace('#', '') : '');
    }
    onInputChange(inputValue) {
        const value = inputValue.toLowerCase().replace('#', '');
        if (value.length === 3 || value.length === 6 || value.length === 8) {
            const hex = parseInt(value, 16);
            /**
             * if value is valid
             * change color else do nothing
             */
            if (hex.toString(16) === value && this.value !== value) {
                const newColor = new Color(`#${value}`);
                const hue = new Color().setHsva(newColor.getHsva().hue);
                this.hueChange.emit(hue);
                this.colorChange.emit(newColor);
            }
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", Color)
], HexComponent.prototype, "hue", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], HexComponent.prototype, "hueChange", void 0);
__decorate([
    Input(),
    __metadata("design:type", Color)
], HexComponent.prototype, "color", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], HexComponent.prototype, "colorChange", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], HexComponent.prototype, "label", null);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], HexComponent.prototype, "prefix", null);
HexComponent = __decorate([
    Component({
        selector: `hex-input-component`,
        template: "<div class=\"column\">\n    <input #elRef type=\"text\" [value]=\"value\" (keyup)=\"onInputChange(elRef.value)\" />\n    <span *ngIf=\"labelVisible\">HEX</span>\n</div>",
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [":host,:host ::ng-deep *{padding:0;margin:0;-webkit-box-sizing:border-box;box-sizing:border-box}", ":host{display:table;width:100%;text-align:center;color:#b4b4b4;font-size:11px}.column{display:table-cell;padding:0 2px}input{width:100%;border:1px solid #dadada;color:#272727;text-align:center;font-size:12px;-webkit-appearance:none;border-radius:0;margin:0 0 6px;height:26px;outline:0}", ""]
    })
], HexComponent);

let ColorPresetsComponent = class ColorPresetsComponent {
    constructor() {
        this.columns = 8;
        this.hueChange = new EventEmitter(false);
        this.colorChange = new EventEmitter(false);
        this.direction = 'up';
    }
    onSelectionChange(color) {
        const selectedRgbaColor = color.getRgba();
        const selectedHsvaColor = color.getHsva();
        const newColor = new Color().setRgba(selectedRgbaColor.red, selectedRgbaColor.green, selectedRgbaColor.blue, selectedRgbaColor.alpha);
        const hueColor = new Color().setHsva(selectedHsvaColor.hue);
        this.hueChange.emit(hueColor);
        this.colorChange.emit(newColor);
    }
    isList(colorPreset) {
        return Array.isArray(colorPreset);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Number)
], ColorPresetsComponent.prototype, "columns", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], ColorPresetsComponent.prototype, "colorPresets", void 0);
__decorate([
    Input(),
    __metadata("design:type", Color)
], ColorPresetsComponent.prototype, "hue", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ColorPresetsComponent.prototype, "hueChange", void 0);
__decorate([
    Input(),
    __metadata("design:type", Color)
], ColorPresetsComponent.prototype, "color", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ColorPresetsComponent.prototype, "colorChange", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ColorPresetsComponent.prototype, "direction", void 0);
ColorPresetsComponent = __decorate([
    Component({
        selector: `color-presets-component`,
        template: "<div class=\"row\" *ngFor=\"let chunk of colorPresets | chunks: columns; let first = first; let last = last;\" [ngClass]=\"{ 'first': first, 'last': last }\">\n    <ng-template ngFor let-preset let-first=\"first\" let-last=\"last\" [ngForOf]=\"chunk\">\n        <color-preset-sublist \n            [list]=\"preset\" \n            *ngIf=\"isList(preset); else colorPreset\" \n            [direction]=\"direction\"\n            [activeColor]=\"color\"\n            [ngClass]=\"{ 'first': first, 'last': last }\"\n            (selectionChange)=\"onSelectionChange($event)\"></color-preset-sublist>\n\n        <ng-template #colorPreset>\n            <color-preset \n                [ngClass]=\"{ 'first': first, 'last': last }\"\n                [color]=\"preset\" \n                [activeColor]=\"color\" \n                (selectionChange)=\"onSelectionChange($event)\"></color-preset>\n        </ng-template>\n    </ng-template>\n</div>",
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [":host,:host ::ng-deep *{padding:0;margin:0;-webkit-box-sizing:border-box;box-sizing:border-box}", ":host{display:block;font-size:0}:host .row:first-child{padding:0}color-preset-sublist:first-child,color-preset:first-child{margin:0}"]
    })
], ColorPresetsComponent);

let ColorPresetComponent = class ColorPresetComponent {
    constructor(pickerConfig) {
        this.pickerConfig = pickerConfig;
        this.selectionChange = new EventEmitter(false);
        this.longPress = new EventEmitter(false);
        this.mouseup = new Subject();
        this.showDepthText = false;
    }
    set depth(showDepthText) {
        this.showDepthText = !!showDepthText;
    }
    ngOnDestroy() {
        this.mouseup.next();
        this.mouseup.complete();
    }
    get bgColor() {
        return this.color.toRgbaString();
    }
    get title() {
        const color = this.color ? this.color.toHexString() : '';
        if (this.showDepthText) {
            return this.pickerConfig.presetsTitle.replace(/\{\s*(.+?)\s*\}/g, (match, firstMatch) => color);
        }
        return color;
    }
    get className() {
        return this.activeColor ? this.color.toRgbaString() === this.activeColor.toRgbaString() : false;
    }
    onTouch(event) {
        of(event)
            .pipe(map((e) => e.timeStamp || new Date().getTime()), delay(350), takeUntil(this.mouseup))
            .subscribe(() => this.longPress.next(true));
        this.selectionChange.emit(this.color);
    }
    onTouchEnd(event) {
        this.mouseup.next(event);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Color)
], ColorPresetComponent.prototype, "activeColor", void 0);
__decorate([
    Input(),
    __metadata("design:type", Color)
], ColorPresetComponent.prototype, "color", void 0);
__decorate([
    Input('show-depth-title'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], ColorPresetComponent.prototype, "depth", null);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ColorPresetComponent.prototype, "selectionChange", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ColorPresetComponent.prototype, "longPress", void 0);
__decorate([
    HostBinding('style.backgroundColor'),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], ColorPresetComponent.prototype, "bgColor", null);
__decorate([
    HostBinding('attr.title'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], ColorPresetComponent.prototype, "title", null);
__decorate([
    HostBinding('class.selected'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [])
], ColorPresetComponent.prototype, "className", null);
__decorate([
    HostListener('mousedown', ['$event']),
    HostListener('touchstart', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ColorPresetComponent.prototype, "onTouch", null);
__decorate([
    HostListener('mouseup', ['$event']),
    HostListener('touchend', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ColorPresetComponent.prototype, "onTouchEnd", null);
ColorPresetComponent = __decorate([
    Component({
        selector: `color-preset`,
        template: ``,
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [":host,:host ::ng-deep *{padding:0;margin:0;-webkit-box-sizing:border-box;box-sizing:border-box}", ":host{display:inline-block;height:12px;width:12px;position:relative;cursor:pointer;-webkit-transition:.2s;transition:.2s}"]
    }),
    __metadata("design:paramtypes", [ColorPickerConfig])
], ColorPresetComponent);

const OpacityAnimation = trigger('opacityAnimation', [
    state('true', style({ opacity: 1 })),
    transition('void => *', [
        style({ opacity: 0 }),
        animate('.08s ease-in')
    ])
]);
const ListAnimation = trigger('listAnimation', [
    transition('* => up', [
        query(':enter', [
            style({ opacity: 0, height: 0 }),
            stagger(-10, [
                animate('.08s', style({ opacity: 1, height: '*' }))
            ])
        ], { optional: true })
    ]),
    transition('* => right', [
        query(':enter', [
            style({ opacity: 0, height: 0 }),
            stagger(-10, [
                animate('.08s', style({ opacity: 1, height: '*' }))
            ])
        ], { optional: true })
    ]),
    transition('* => down', [
        query(':enter', [
            style({ opacity: 0, height: 0 }),
            stagger(10, [
                animate('.08s', style({ opacity: 1, height: '*' }))
            ])
        ], { optional: true })
    ]),
    transition('* => left', [
        query(':enter', [
            style({ opacity: 0, height: 0 }),
            stagger(10, [
                animate('.08s', style({ opacity: 1, height: '*' }))
            ])
        ], { optional: true })
    ])
]);

let ColorPresetSublist = class ColorPresetSublist {
    constructor(renderer, document, cdr) {
        this.renderer = renderer;
        this.document = document;
        this.cdr = cdr;
        this.selectionChange = new EventEmitter(false);
        this.direction = 'up';
        this.showChildren = false;
        this.hooks = [];
    }
    ngOnDestroy() {
        this.removeListeners();
        this.cdr.detach();
    }
    removeListeners() {
        this.hooks.forEach((callback) => callback());
        this.hooks.length = 0;
    }
    /**
     * emit color change
     */
    onSelectionChange(color) {
        this.selectionChange.next(color);
    }
    onLongPress() {
        this.showChildren = true;
        this.listenDocumentClick();
    }
    listenDocumentClick() {
        this.hooks.push(this.renderer.listen(this.document, 'mousedown', () => this.closeList()));
        this.hooks.push(this.renderer.listen(this.document, 'touchstart', () => this.closeList()));
    }
    closeList() {
        if (this.showChildren) {
            this.showChildren = false;
            this.cdr.markForCheck();
            this.removeListeners();
        }
    }
    get className() {
        return `direction-${this.direction}`;
    }
};
__decorate([
    Input(),
    __metadata("design:type", Array)
], ColorPresetSublist.prototype, "list", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ColorPresetSublist.prototype, "selectionChange", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ColorPresetSublist.prototype, "direction", void 0);
__decorate([
    Input(),
    __metadata("design:type", Color)
], ColorPresetSublist.prototype, "activeColor", void 0);
__decorate([
    HostBinding('className'),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], ColorPresetSublist.prototype, "className", null);
ColorPresetSublist = __decorate([
    Component({
        selector: `color-preset-sublist`,
        template: "<color-preset [show-depth-title]=\"list.length > 1\" [color]=\"list[0]\" [activeColor]=\"activeColor\" (longPress)=\"onLongPress()\" (selectionChange)=\"onSelectionChange($event)\"></color-preset>\n<div class=\"reflection\" [style.backgroundColor]=\"list[0].toRgbaString()\"></div>\n<div class=\"reflection\" [style.backgroundColor]=\"list[0].toRgbaString()\"></div>\n\n<div class=\"sublist\" *ngIf=\"showChildren\" [@opacityAnimation]=\"showChildren\" [@listAnimation]=\"direction\">\n    <color-preset \n        *ngFor=\"let preset of list | reverse : (direction == 'up' || direction == 'right')\"\n        [color]=\"preset\"\n        [activeColor]=\"activeColor\"\n        (selectionChange)=\"onSelectionChange($event)\"></color-preset>\n</div>",
        changeDetection: ChangeDetectionStrategy.OnPush,
        animations: [OpacityAnimation, ListAnimation],
        styles: [":host,:host ::ng-deep *{padding:0;margin:0;-webkit-box-sizing:border-box;box-sizing:border-box}", ":host{position:relative;display:inline-block}color-preset{position:relative;z-index:3}.reflection{display:none;position:absolute;height:100%;width:100%;z-index:2;right:-2px;top:-2px;opacity:.5}.reflection+.reflection{opacity:.2;right:-4px;top:-4px;z-index:1}color-preset:hover+.reflection,color-preset:hover+.reflection+.reflection{display:block}.sublist{position:absolute;bottom:-8px;left:-8px;right:-8px;background:#fff;border-radius:2px;-webkit-box-shadow:rgba(0,0,0,.3) 0 0 2px,rgba(0,0,0,.3) 0 2px 4px;box-shadow:rgba(0,0,0,.3) 0 0 2px,rgba(0,0,0,.3) 0 2px 4px;padding:8px 5px;text-align:center;z-index:1000}.sublist color-preset{margin:8px 0 0}.sublist color-preset:first-child{margin:0}:host(.direction-down) .sublist{bottom:auto;top:-8px}"]
    }),
    __param(1, Inject(DOCUMENT)),
    __metadata("design:paramtypes", [Renderer2, Object, ChangeDetectorRef])
], ColorPresetSublist);

let ColorPickerInputDirective = class ColorPickerInputDirective {
    constructor() {
        this.inputChange = new EventEmitter();
    }
    inputChanges(event) {
        const element = event.target || event.srcElement;
        const value = element.value;
        const numeric = parseFloat(value);
        if (!isNaN(numeric) && numeric >= parseInt(this.min, 10) &&
            numeric <= parseInt(this.max, 10)) {
            this.inputChange.emit(numeric);
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], ColorPickerInputDirective.prototype, "min", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ColorPickerInputDirective.prototype, "max", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ColorPickerInputDirective.prototype, "inputChange", void 0);
__decorate([
    HostListener('input', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ColorPickerInputDirective.prototype, "inputChanges", null);
ColorPickerInputDirective = __decorate([
    Directive({
        selector: '[inputChange]'
    })
], ColorPickerInputDirective);

let ChunksPipe = class ChunksPipe {
    transform(arr, chunkSize) {
        return arr.reduce((prev, cur, i) => (i % chunkSize) ? prev : prev.concat([arr.slice(i, i + chunkSize)]), []);
    }
};
ChunksPipe = __decorate([
    Pipe({ name: 'chunks' })
], ChunksPipe);

let ReversePipe = class ReversePipe {
    transform(arr, isReversed = true) {
        if (isReversed) {
            return arr.slice().reverse();
        }
        return arr;
    }
};
ReversePipe = __decorate([
    Pipe({ name: 'reverse' })
], ReversePipe);

var ColorType;
(function (ColorType) {
    ColorType["hex"] = "hex";
    ColorType["hexa"] = "hexa";
    ColorType["rgba"] = "rgba";
    ColorType["rgb"] = "rgb";
    ColorType["hsla"] = "hsla";
    ColorType["hsl"] = "hsl";
    ColorType["cmyk"] = "cmyk";
})(ColorType || (ColorType = {}));
class ColorPickerControl {
    constructor() {
        this.modelValue = null;
        this.hueValue = null;
        this.initValue = null;
        this.valueChanged = new Subject();
        this.presetsVisibilityChanges = new BehaviorSubject(true);
        this.initType = null;
        this.alphaChannelVisibilityChanges = new BehaviorSubject(true);
        this.valueChanges = this.valueChanged.asObservable().pipe(distinctUntilChanged((x, y) => x.toRgbaString() == y.toRgbaString()));
        this.colorPresets = [];
        const color = Color.from(new Rgba(255, 0, 0, 1));
        this.setValue(color);
        this.setHueColor(color);
    }
    setValueFrom(color) {
        const newColor = Color.from(color);
        if (!this.initValue) {
            this.initValue = Color.from(color);
        }
        if (typeof color === 'string') {
            this.finOutInputType(color);
        }
        this.setHueColor(newColor);
        this.setValue(newColor);
        return this;
    }
    setHueColor(color) {
        if (this.hueValue && color.getHsva().hue > 0 || !this.hueValue) {
            this.hueValue = new Color().setHsva(color.getHsva().hue);
        }
    }
    get hue() {
        return this.hueValue;
    }
    /**
     * @internal
     * used for two-way data binding
     */
    set hue(hueColor) {
        this.hueValue = hueColor;
    }
    setValue(value) {
        this.modelValue = value;
        this.valueChanged.next(value);
        return this;
    }
    get value() {
        return this.modelValue;
    }
    /**
     * @internal
     * used for two-way data binding
     */
    set value(value) {
        this.setValue(value);
    }
    /**
     * reset color to initial
     */
    reset() {
        let color;
        if (!this.initValue) {
            color = Color.from(new Rgba(255, 0, 0, 1));
            this.hueValue = new Color().setHsva(color.getHsva().hue);
        }
        else {
            color = this.initValue.clone();
            this.setHueColor(color);
        }
        this.setValue(color);
        return this;
    }
    isAlphaChannelEnabled() {
        return this.alphaChannelVisibilityChanges.value;
    }
    showAlphaChannel() {
        this.alphaChannelVisibilityChanges.next(true);
        return this;
    }
    hideAlphaChannel() {
        this.alphaChannelVisibilityChanges.next(false);
        return this;
    }
    finOutInputType(colorString) {
        const str = colorString.replace(/ /g, '').toLowerCase();
        if (str[0] === '#') {
            this.initType = ColorType.hex;
            if (str.length > 7) {
                this.initType = ColorType.hexa;
            }
        }
        const OpenParenthesis = str.indexOf('(');
        const colorTypeName = str.substr(0, OpenParenthesis);
        switch (colorTypeName) {
            case ColorType.rgba:
                this.initType = ColorType.rgba;
                break;
            case ColorType.rgb:
                this.initType = ColorType.rgb;
                break;
            case ColorType.hsla:
                this.initType = ColorType.hsla;
                break;
            case ColorType.hsl:
                this.initType = ColorType.hsl;
                break;
            case ColorType.cmyk:
                this.initType = ColorType.cmyk;
                break;
        }
    }
    setColorPresets(colorPresets) {
        this.colorPresets = this.setPresets(colorPresets);
        return this;
    }
    setPresets(colorPresets) {
        const presets = [];
        for (const color of colorPresets) {
            if (Array.isArray(color)) {
                presets.push(this.setPresets(color));
            }
            else {
                presets.push(new Color(color));
            }
        }
        return presets;
    }
    get presets() {
        return this.colorPresets;
    }
    hasPresets() {
        return this.colorPresets.length > 0;
    }
    isPresetVisible() {
        return this.presetsVisibilityChanges.value;
    }
    showPresets() {
        this.presetsVisibilityChanges.next(true);
        return this;
    }
    hidePresets() {
        this.presetsVisibilityChanges.next(false);
        return this;
    }
    /**
     * complete emit on all observers
     */
    unsubscribe() {
        this.valueChanged.complete();
        this.presetsVisibilityChanges.complete();
    }
}

function getValueByType(color, type) {
    switch (type) {
        case ColorType.hex:
            return color.toHexString();
        case ColorType.hexa:
            return color.toHexString(true);
        case ColorType.rgb:
            return color.toRgbString();
        case ColorType.rgba:
            return color.toRgbaString();
        case ColorType.hsl:
            return color.toHslString();
        case ColorType.hsla:
            return color.toHslaString();
        default:
            return color.toRgbaString();
    }
}

let ChromePickerComponent = class ChromePickerComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.selectedPresentation = 0;
        this.presentations = ['rgba', 'hsla', 'hex'];
        this.colorChange = new EventEmitter(false);
    }
    ngOnInit() {
        if (!this.control) {
            this.control = new ColorPickerControl();
        }
        if (this.color) {
            this.control.setValueFrom(this.color);
        }
        /**
         * set color presets
         * defined by this chrome color picker component
         */
        if (!this.control.hasPresets()) {
            this.control
                .setColorPresets([
                ['#f44336', '#ffebee', '#ffcdd2', '#EF9A9A', '#E57373', '#EF5350', '#F44336', '#E53935', '#D32F2F', '#C62828', '#B71C1C'],
                ['#E91E63', '#fce4ec', '#f8bbd0', '#f48fb1', '#f06292', '#ec407a', '#e91e63', '#d81b60', '#c2185b', '#ad1457', '#880e4f'],
                ['#9C27B0', '#F3e5f5', '#e1bee7', '#ce93d8', '#ba68c8', '#ab47bc', '#9c27b0', '#8e24aa', '#7b1fa2', '#6a1b9a', '#4a148c'],
                ['#673AB7', '#ede7f6', '#d1c4e9', '#b39ddb', '#9575cd', '#7e57c2', '#673ab7', '#5e35b1', '#512da8', '#4527a0', '#311b92'],
                ['#3F51B5', '#e8eaf6', '#c5cae9', '#9fa8da', '#7986cb', '#5c6bc0', '#3f51b5', '#3949ab', '#303f9f', '#283593', '#1a237e'],
                ['#2196F3', '#e3f2fd', '#bbdefb', '#90caf9', '#64b5f6', '#42a5f5', '#2196f3', '#1e88e5', '#1976d2', '#1565c0', '#0D47a1'],
                ['#03A9F4', '#e1f5fe', '#b3e5fc', '#81d4fa', '#4fc3f7', '#29b6f6', '#03a9f4', '#039be5', '#0288d1', '#0277bd', '#01579b'],
                ['#00BCD4', '#e0f7fa', '#b2ebf2', '#80deea', '#4dd0e1', '#26c6da', '#00bcd4', '#00acc1', '#0097a7', '#00838f', '#006064'],
                ['#009688', '#E0F2f1', '#b2dfdb', '#80cbc4', '#4db6ac', '#26a69a', '#009688', '#00897b', '#00796b', '#00695c', '#004d40'],
                ['#4CAF50', '#e8f5e9', '#c8e6c9', '#a5d6a7', '#81c784', '#66bb6a', '#4caf50', '#43a047', '#388e3c', '#2e7d32', '#1b5e20'],
                ['#8BC34A', '#f1f8e9', '#dcedc8', '#c5e1a5', '#aed581', '#9ccc65', '#8bc34a', '#7cb342', '#689f38', '#558b2f', '#33691e'],
                ['#cddc39', '#f9fbe7', '#f0f4c3', '#e6ee9c', '#dce775', '#d4e157', '#c0dc39', '#c0ca33', '#afb42b', '#9e9d24', '#827717'],
                ['#ffeb3b', '#fffde7', '#fff9c4', '#fff59d', '#fff176', '#ffee58', '#ffeb3b', '#fdd835', '#fbc02d', '#f9a825', '#f57f17'],
                ['#ffc107', '#fff8e1', '#ffecb3', '#ffe082', '#ffd54f', '#ffca28', '#ffc107', '#ffb300', '#ffa000', '#ff8f00', '#ff6f00'],
                ['#ff9800', '#fff3e0', '#ffe0b2', '#ffcc80', '#ffb74d', '#ffa726', '#ff9800', '#fb8c00', '#f57c00', '#ef6c00', '#e65100'],
                ['#ff5722', '#fbe9e7', '#ffccbc', '#ffab91', '#ff8a65', '#ff7043', '#ff5722', '#f4511e', '#e64a19', '#d84315', '#bf360c'],
                ['#795548', '#efebe9', '#d7ccc8', '#bcaaa4', '#a1887f', '#8d6e63', '#795548', '#6d4c41', '#5d4037', '#4e342e', '#3e2723'],
                ['#9e9e9e', '#fafafa', '#f5f5f5', '#eee', '#e0e0e0', '#bdbdbd', '#9e9e9e', '#757575', '#616161', '#424242', '#212121'],
                ['#607d8b', '#eceff1', '#cfd8dc', '#b0bec5', '#90a4ae', '#78909c', '#60708b', '#546e7a', '#455a64', '#37474f', '#263238']
            ]);
        }
        this.control.valueChanges.subscribe((value) => {
            this.cdr.markForCheck();
            this.colorChange.emit(getValueByType(value, this.control.initType));
        });
    }
    ngOnDestroy() {
        this.control.unsubscribe();
        this.cdr.detach();
    }
    ngOnChanges(changes) {
        if (this.color && this.control && getValueByType(this.control.value, this.control.initType) !== this.color) {
            this.control.setValueFrom(this.color);
        }
    }
    changePresentation() {
        this.selectedPresentation =
            this.selectedPresentation === this.presentations.length - 1 ? 0 : this.selectedPresentation + 1;
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], ChromePickerComponent.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", ColorPickerControl)
], ChromePickerComponent.prototype, "control", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], ChromePickerComponent.prototype, "colorChange", void 0);
ChromePickerComponent = __decorate([
    Component({
        selector: `chrome-picker`,
        template: "<saturation-component [hue]=\"control.hue\" [(color)]=\"control.value\"></saturation-component>\n\n<div class=\"controls\">\n    <div class=\"controls-row hue-alpha\">\n        <div class=\"column\">\n            <indicator-component [colorType]=\"presentations[selectedPresentation]\" [color]=\"control.value\"></indicator-component>\n        </div>\n        <div class=\"column\">\n            <hue-component [(hue)]=\"control.hue\" [(color)]=\"control.value\"></hue-component>\n            <alpha-component *ngIf=\"control.alphaChannelVisibilityChanges | async\" [(color)]=\"control.value\"></alpha-component>\n        </div>\n    </div>\n    <div class=\"controls-row presentation\">\n        <div class=\"column\" [ngSwitch]=\"presentations[selectedPresentation]\">\n            <rgba-input-component *ngSwitchCase=\"'rgba'\" [alpha]=\"control.alphaChannelVisibilityChanges | async\" label [(color)]=\"control.value\" [(hue)]=\"control.hue\"></rgba-input-component>\n            <hsla-input-component *ngSwitchCase=\"'hsla'\" [alpha]=\"control.alphaChannelVisibilityChanges | async\" label [(color)]=\"control.value\" [(hue)]=\"control.hue\"></hsla-input-component>\n            <hex-input-component *ngSwitchCase=\"'hex'\" label prefix=\"#\" [(color)]=\"control.value\" [(hue)]=\"control.hue\"></hex-input-component>\n        </div>\n        <div class=\"column type-column\">\n            <span class=\"type-btn\" (click)=\"changePresentation()\"></span>\n        </div>\n    </div>\n</div>\n\n<color-presets-component *ngIf=\"control.presetsVisibilityChanges | async\" [(color)]=\"control.value\" [colorPresets]=\"control.presets\" [(hue)]=\"control.hue\"></color-presets-component>",
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [":host,:host ::ng-deep *{padding:0;margin:0;-webkit-box-sizing:border-box;box-sizing:border-box}", ":host{display:block;width:230px;border-radius:2px;background:#fff;-webkit-box-shadow:rgba(0,0,0,.3) 0 0 2px,rgba(0,0,0,.3) 0 1px 4px;box-shadow:rgba(0,0,0,.3) 0 0 2px,rgba(0,0,0,.3) 0 1px 4px}saturation-component{height:120px}.controls{padding:15px 15px 10px}.controls-row{display:table;width:100%}.column{display:table-cell;vertical-align:middle}.hue-alpha .column:first-child{width:42px;padding:0 10px 0 0}:host ::ng-deep .controls .pointer{-webkit-box-shadow:rgba(0,0,0,.3) 0 0 2px,rgba(0,0,0,.3) 0 1px 4px;box-shadow:rgba(0,0,0,.3) 0 0 2px,rgba(0,0,0,.3) 0 1px 4px}indicator-component{height:32px;width:32px;border-radius:50%}alpha-component{margin-top:8px}color-presets-component{border-top:1px solid #d0d0d0;padding:12px}color-presets-component ::ng-deep .row{padding:12px 0 0}.type-btn{display:inline-block;height:20px;width:20px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAgCAYAAAAffCjxAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAACewAAAnsB01CO3AAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAIASURBVEiJ7ZY9axRRFIafsxMStrLQJpAgpBFhi+C9w1YSo00I6RZ/g9vZpBf/QOr4GyRgkSKNSrAadsZqQGwCkuAWyRZJsySwvhZ7N/vhzrgbLH3Ld8597jlzz50zJokyxXH8DqDVar0qi6v8BbItqSGpEcfxdlmsFWXkvX8AfAVWg3UKPEnT9GKujMzsAFgZsVaCN1VTQd77XUnrgE1kv+6935268WRpzrnHZvYRWC7YvC3pRZZl3wozqtVqiyH9IgjAspkd1Gq1xUJQtVrdB9ZKIAOthdg/Qc65LUk7wNIMoCVJO865rYFhkqjX6/d7vV4GPJwBMqofURS5JEk6FYBer/eeYb/Mo9WwFnPOvQbeAvfuAAK4BN4sAJtAG/gJIElmNuiJyba3EGNmZiPeZuEVmVell/Y/6N+CzDn3AXhEOOo7Hv/3BeAz8IzQkMPnJbuPx1wC+yYJ7/0nYIP5S/0FHKdp+rwCEEXRS/rf5Hl1Gtb2M0iSpCOpCZzPATmX1EySpHMLAsiy7MjMDoHrGSDXZnaYZdnRwBh7J91utwmczAA6CbG3GgPleX4jqUH/a1CktqRGnuc3hSCAMB32gKspkCtgb3KCQMmkjeP4WNJThrNNZval1WptTIsv7JtQ4tmIdRa8qSoEpWl6YWZNoAN0zKxZNPehpLSBZv2t+Q0CJ9lLnARQLAAAAABJRU5ErkJggg==) center/6px 12px no-repeat;-webkit-background-size:6px 12px}.type-btn:hover{background-color:#eee}.type-column{width:25px;text-align:right}.presentation{padding:12px 0 0}:host ::ng-deep .reflection,:host ::ng-deep color-preset{border-radius:2px}:host ::ng-deep .row>color-preset,:host ::ng-deep .row>color-preset-sublist{margin:0 0 0 12px}:host ::ng-deep .row>color-preset-sublist:first-child,:host ::ng-deep .row>color-preset:first-child{margin:0}:host ::ng-deep color-preset{-webkit-box-shadow:inset rgba(0,0,0,.3) 0 0 2px;box-shadow:inset rgba(0,0,0,.3) 0 0 2px}:host ::ng-deep .row>color-preset:hover,:host ::ng-deep .sublist color-preset:hover{-webkit-transform:scale(1.18,1.18);-ms-transform:scale(1.18,1.18);transform:scale(1.18,1.18)}"]
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef])
], ChromePickerComponent);

let SketchPickerComponent = class SketchPickerComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.colorChange = new EventEmitter(false);
    }
    ngOnInit() {
        if (!this.control) {
            this.control = new ColorPickerControl();
        }
        if (this.color) {
            this.control.setValueFrom(this.color);
        }
        if (!this.control.hasPresets()) {
            /**
             * set color presets
             * defined by sketch color picker component
             */
            this.control
                .setColorPresets([
                '#d0041b', '#8b572a', '#f5a623', '#f8e71c', '#7ed321', '#417506', '#bd10e0', '#9013fe',
                '#4a90e2', '#50e3c2', '#b8e986', '#030303', '#4a4a4a', '#9b9b9b', '#fff'
            ]);
        }
        this.control.valueChanges.subscribe((value) => {
            this.cdr.markForCheck();
            this.colorChange.emit(getValueByType(value, this.control.initType));
        });
    }
    ngOnDestroy() {
        this.control.unsubscribe();
        this.cdr.detach();
    }
    ngOnChanges(changes) {
        if (this.color && this.control && getValueByType(this.control.value, this.control.initType) !== this.color) {
            this.control.setValueFrom(this.color);
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], SketchPickerComponent.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", ColorPickerControl)
], SketchPickerComponent.prototype, "control", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], SketchPickerComponent.prototype, "colorChange", void 0);
SketchPickerComponent = __decorate([
    Component({
        selector: `sketch-picker`,
        template: "<saturation-component [hue]=\"control.hue\" [(color)]=\"control.value\"></saturation-component>\n\n<div class=\"controls\">\n    <div class=\"controls-row hue-alpha\">\n        <div class=\"column\">\n            <hue-component [(hue)]=\"control.hue\" [(color)]=\"control.value\"></hue-component>\n            <alpha-component *ngIf=\"control.alphaChannelVisibilityChanges | async\" [(color)]=\"control.value\"></alpha-component>\n        </div>\n        <div class=\"column indicator-column\">\n            <indicator-component colorType=\"rgba\" [color]=\"control.value\"></indicator-component>\n        </div>\n    </div>\n    <div class=\"controls-row presentation\">\n        <div class=\"column\">\n            <hex-input-component label [(color)]=\"control.value\" [(hue)]=\"control.hue\"></hex-input-component>\n        </div>\n        <div class=\"column\">\n            <rgba-input-component [alpha]=\"control.alphaChannelVisibilityChanges | async\" label [(color)]=\"control.value\" [(hue)]=\"control.hue\"></rgba-input-component>\n        </div>\n    </div>\n</div>\n\n<color-presets-component *ngIf=\"control.presetsVisibilityChanges | async\" [(color)]=\"control.value\" [colorPresets]=\"control.presets\" [(hue)]=\"control.hue\"></color-presets-component>",
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [":host,:host ::ng-deep *{padding:0;margin:0;-webkit-box-sizing:border-box;box-sizing:border-box}", ":host{display:block;padding:9px;width:220px;border-radius:4px;background:#fff;-webkit-box-shadow:rgba(0,0,0,.3) 0 0 2px,rgba(0,0,0,.3) 0 1px 4px;box-shadow:rgba(0,0,0,.3) 0 0 2px,rgba(0,0,0,.3) 0 1px 4px}saturation-component{height:146px;border-radius:2px;-webkit-box-shadow:inset rgba(0,0,0,.6) 0 0 2px;box-shadow:inset rgba(0,0,0,.6) 0 0 2px}saturation-component ::ng-deep .pointer{border-width:2px;-webkit-box-shadow:rgba(0,0,0,.6) 0 0 2px;box-shadow:rgba(0,0,0,.6) 0 0 2px;width:10px;height:10px}.controls{padding:4px 0 0}alpha-component,hue-component{height:10px;border-radius:2px;-webkit-box-shadow:inset rgba(0,0,0,.6) 0 0 2px;box-shadow:inset rgba(0,0,0,.6) 0 0 2px}hue-component{margin-bottom:4px}.controls-row{display:table;width:100%}.column{display:table-cell;vertical-align:middle}.indicator-column{width:25px}indicator-component{height:24px;width:100%;-webkit-box-shadow:inset rgba(0,0,0,.6) 0 0 2px;box-shadow:inset rgba(0,0,0,.6) 0 0 2px;border-radius:2px}color-presets-component{border-top:1px solid #e0e0e0;padding:10px 9px 0;margin:8px -9px 0}color-presets-component ::ng-deep .row{padding:10px 0 0}:host indicator-component ::ng-deep svg{vertical-align:5%}.controls-row.hue-alpha{padding-bottom:9px}.controls-row.hue-alpha .column:first-child{padding-right:5px}.hue-alpha ::ng-deep .pointer{width:6px;margin:0 0 0 -3px;height:100%;top:0;border-radius:2px;border:1px solid #898989}.presentation .column:first-child{width:56px}.presentation ::ng-deep input{height:20px;font-size:11px}:host ::ng-deep .reflection,:host ::ng-deep color-preset{height:16px;width:16px;border-radius:2px}:host ::ng-deep color-preset{-webkit-box-shadow:inset rgba(0,0,0,.4) 0 0 2px;box-shadow:inset rgba(0,0,0,.4) 0 0 2px}:host ::ng-deep color-preset.selected{-webkit-box-shadow:inset rgba(0,0,0,.4) 0 1px 4px;box-shadow:inset rgba(0,0,0,.4) 0 1px 4px}:host ::ng-deep .row>color-preset,:host ::ng-deep .row>color-preset-sublist{margin:0 0 0 10px}:host ::ng-deep .row>color-preset-sublist:first-child,:host ::ng-deep .row>color-preset:first-child{margin:0}"]
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef])
], SketchPickerComponent);

let CompactPickerComponent = class CompactPickerComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.colorChange = new EventEmitter(false);
    }
    ngOnInit() {
        if (!this.control) {
            this.control = new ColorPickerControl();
        }
        if (this.color) {
            this.control.setValueFrom(this.color);
        }
        /**
         * set color presets
         * defined by compact color picker component
         */
        if (!this.control.hasPresets()) {
            this.control
                .setColorPresets([
                '#6da6e8', '#74c283', '#f9d948', '#f5943f', '#f66c6c', '#ef8ab8', '#696cd4', '#6c6c6c', '#f6f5f5'
            ]);
        }
        this.control.valueChanges.subscribe((value) => {
            this.cdr.markForCheck();
            this.colorChange.emit(getValueByType(value, this.control.initType));
        });
    }
    ngOnDestroy() {
        this.control.unsubscribe();
        this.cdr.detach();
    }
    ngOnChanges(changes) {
        if (this.color && this.control && getValueByType(this.control.value, this.control.initType) !== this.color) {
            this.control.setValueFrom(this.color);
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], CompactPickerComponent.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", ColorPickerControl)
], CompactPickerComponent.prototype, "control", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], CompactPickerComponent.prototype, "colorChange", void 0);
CompactPickerComponent = __decorate([
    Component({
        selector: `compact-picker`,
        template: "<color-presets-component \n    *ngIf=\"control.presetsVisibilityChanges | async\" \n    direction=\"down\"\n    [columns]=\"9\" \n    [(color)]=\"control.value\" \n    [colorPresets]=\"control.presets\" \n    [(hue)]=\"control.hue\"></color-presets-component>\n\n<div class=\"controls\">\n    <div class=\"controls-row saturation-hue\">\n        <div class=\"column\">\n            <saturation-component [hue]=\"control.hue\" [(color)]=\"control.value\"></saturation-component>\n        </div>\n        <div class=\"column hue-column\">\n            <hue-component vertical [(hue)]=\"control.hue\" [(color)]=\"control.value\"></hue-component>\n        </div>\n    </div>\n    <div class=\"controls-row presentation\">\n        <div class=\"column\">\n            <svg class=\"pencil\" viewBox=\"0 0 1024 1024\">\n                <path d=\"M639.77,121.045l-48.598,84.2l112.215,64.8l48.6-84.205L639.77,121.045z M558.773,261.354\n                    L315.78,682.206l112.215,64.795L670.99,326.15L558.773,261.354z M690.816,75.691l74.922,43.286\n                    c41.682,24.045,55.52,76.564,31.725,117.784l-37.967,65.68l-32.398,56.11L451.706,835.594L282.452,947.303\n                    c-40.961,27.004-70.24,9.027-67.329-38.894l12.149-202.411l275.395-477.041l32.398-56.11l37.883-65.686\n                    C596.824,65.946,649.473,51.857,690.816,75.691z M274.689,883.015l120.908-79.818l-112.218-64.8L274.689,883.015z\"/>\n            </svg>\n            <hex-input-component prefix=\"#\" [(color)]=\"control.value\" [(hue)]=\"control.hue\"></hex-input-component>\n        </div>\n        <div class=\"column\">\n            <indicator-component colorType=\"hex\" [color]=\"control.value\"></indicator-component>\n        </div>\n    </div>\n</div>",
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [":host,:host ::ng-deep *{padding:0;margin:0;-webkit-box-sizing:border-box;box-sizing:border-box}", ":host{display:block;width:240px;border-radius:3px;background:#fff;-webkit-box-shadow:rgba(0,0,0,.3) 0 0 2px,rgba(0,0,0,.3) 0 0 4px;box-shadow:rgba(0,0,0,.3) 0 0 2px,rgba(0,0,0,.3) 0 0 4px}color-presets-component{border-bottom:1px solid #e4e4e6;padding:9px 12px}color-presets-component ::ng-deep .row{padding:10px 0 0}.controls{padding:10px 12px 12px}.controls-row{display:table;width:100%}.column{display:table-cell;vertical-align:middle}.controls-row.saturation-hue{padding-bottom:9px}.controls-row.saturation-hue .column:first-child{width:178px}saturation-component{height:178px;-webkit-box-shadow:inset rgba(0,0,0,.6) 0 0 2px;box-shadow:inset rgba(0,0,0,.6) 0 0 2px}saturation-component ::ng-deep .pointer{border-width:2px;-webkit-box-shadow:rgba(0,0,0,.6) 0 0 2px;box-shadow:rgba(0,0,0,.6) 0 0 2px}.hue-column{padding-left:14px}:host hue-component{width:100%;height:178px;-webkit-box-shadow:inset rgba(0,0,0,.6) 0 0 2px;box-shadow:inset rgba(0,0,0,.6) 0 0 2px}:host hue-component[vertical] ::ng-deep .pointer{width:auto;height:9px;left:-3px;right:-3px;margin:-4.5px 0 0;background:0 0;border:3px solid #fff;border-radius:5px;-webkit-box-shadow:rgba(0,0,0,.6) 0 0 2px;box-shadow:rgba(0,0,0,.6) 0 0 2px}.controls-row.presentation{border:1px solid #e4e4e6;border-radius:3px;padding:6px 6px 6px 26px;position:relative}indicator-component{height:18px;width:18px;-webkit-box-shadow:inset rgba(0,0,0,.6) 0 0 2px;box-shadow:inset rgba(0,0,0,.6) 0 0 2px;border-radius:50%}:host indicator-component ::ng-deep svg{vertical-align:25%}hex-input-component ::ng-deep input{border:0;color:#817e81;margin:0;text-align:left;height:18px}.pencil{position:absolute;height:14px;width:14px;left:6px;top:50%;margin:-7px 0 0}.pencil svg{fill:#000}:host ::ng-deep .reflection{display:none}:host ::ng-deep color-preset{height:18px;width:18px;border-radius:50%;-webkit-box-shadow:inset rgba(0,0,0,.6) 0 1px 1px;box-shadow:inset rgba(0,0,0,.6) 0 1px 1px}:host ::ng-deep .row>color-preset,:host ::ng-deep .row>color-preset-sublist{margin:0 0 0 6px}:host ::ng-deep .row>color-preset-sublist:first-child,:host ::ng-deep .row>color-preset:first-child{margin:0}:host ::ng-deep .row>color-preset:hover,:host ::ng-deep .sublist color-preset:hover,:host ::ng-deep color-preset.selected{-webkit-box-shadow:inset rgba(0,0,0,.6) 0 1px 6px;box-shadow:inset rgba(0,0,0,.6) 0 1px 6px}"]
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef])
], CompactPickerComponent);

let GithubPickerComponent = class GithubPickerComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.columns = 8;
        this.colorChange = new EventEmitter(false);
    }
    get widht() {
        return this.columns === 'auto' ? `auto` : `${25 * this.columns + 12}px`;
    }
    get columnsCount() {
        return this.columns === 'auto' ? this.control.presets.length : this.columns;
    }
    ngOnInit() {
        if (!this.control) {
            this.control = new ColorPickerControl();
        }
        if (this.color) {
            this.control.setValueFrom(this.color);
        }
        if (!this.control.hasPresets()) {
            /**
             * set color presets
             * defined by github color picker component
             */
            this.control
                .setColorPresets([
                '#b80000', '#db3e00', '#fccb00', '#008b02', '#006b76', '#1273de', '#004dcf', '#5300eb',
                '#eb9694', '#fad0c3', '#fef3bd', '#c1e1c5', '#bedadc', '#c4def6', '#bed3f3', '#d4c4fb'
            ]);
        }
        this.control.valueChanges.subscribe((value) => {
            this.cdr.markForCheck();
            this.colorChange.emit(getValueByType(value, this.control.initType));
        });
    }
    ngOnDestroy() {
        this.control.unsubscribe();
        this.cdr.detach();
    }
    ngOnChanges(changes) {
        if (this.color && this.control && getValueByType(this.control.value, this.control.initType) !== this.color) {
            this.control.setValueFrom(this.color);
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], GithubPickerComponent.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", ColorPickerControl)
], GithubPickerComponent.prototype, "control", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], GithubPickerComponent.prototype, "columns", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], GithubPickerComponent.prototype, "colorChange", void 0);
__decorate([
    HostBinding('style.width'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], GithubPickerComponent.prototype, "widht", null);
GithubPickerComponent = __decorate([
    Component({
        selector: `github-picker`,
        template: "<color-presets-component \n    direction=\"down\"\n    [columns]=\"columnsCount\"\n    [(color)]=\"control.value\" \n    [colorPresets]=\"control.presets\"></color-presets-component>",
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [":host,:host ::ng-deep *{padding:0;margin:0;-webkit-box-sizing:border-box;box-sizing:border-box}", "@charset \"UTF-8\";:host{display:block;background:#fff;border:1px solid rgba(0,0,0,.2);-webkit-box-shadow:rgba(0,0,0,.15) 0 3px 12px;box-shadow:rgba(0,0,0,.15) 0 3px 12px;border-radius:4px;padding:5px}:host ::ng-deep color-preset,:host ::ng-deep color-preset-sublist{width:25px;height:25px}:host ::ng-deep color-preset.selected:after,:host ::ng-deep color-preset:hover:after{display:block;content:\"\u00A0\";position:absolute;left:-1px;top:-1px;bottom:-1px;right:-1px;z-index:10;border:2px solid #fff;-webkit-box-shadow:rgba(0,0,0,.2) 0 0 5px 2px;box-shadow:rgba(0,0,0,.2) 0 0 5px 2px}"]
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef])
], GithubPickerComponent);

let SwatchesPickerComponent = class SwatchesPickerComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.colorChange = new EventEmitter(false);
        this.control = new ColorPickerControl();
        this.childControl = new ColorPickerControl();
        this.mapColors = {
            '#E6315B': [
                '#fc8da7', '#fa7d9a', '#f56484', '#f04a71', '#e82c58', '#e31746', '#de0235',
                '#d60234', '#d10232', '#c70230', '#b8022c', '#ab0229', '#9c0225', '#8f0122',
                '#8c0122', '#82011f', '#78011b', '#690117', '#5c0012', '#4f0010', '#42000c'
            ],
            '#793183': [
                '#ef8dfc', '#eb7dfa', '#e664f5', '#dc4af0', '#d22ce8', '#cb17e3', '#c402de',
                '#c002d9', '#bb02d4', '#b002c7', '#a202b8', '#9702ab', '#8a029c', '#7e018f',
                '#7a018a', '#730182', '#6c0178', '#5e0169', '#54015c', '#49014f', '#3d0142'
            ],
            '#009DE7': [
                '#8dd9fc', '#7dd2fa', '#64c7f5', '#4abbf0', '#2cade8', '#17a2e3', '#0298de',
                '#0295d9', '#0291d4', '#0289c7', '#027eb8', '#0275ab', '#026b9c', '#01628f',
                '#015f8a', '#015982', '#015278', '#014869', '#013f5c', '#01364f', '#012e42'
            ],
            '#00B59C': [
                '#8dfeea', '#7dfbe4', '#63f4db', '#4befd2', '#2de7c6', '#16e2be', '#03deb7',
                '#01ddb6', '#01d4ae', '#01c7a4', '#01b897', '#01aa8b', '#019b80', '#019076',
                '#018c73', '#01836c', '#017763', '#016857', '#005c4e', '#005044', '#004239'
            ],
            '#FFCE00': [
                '#fce68d', '#fae17d', '#f5da64', '#f0cf4a', '#e8c22c', '#e5bc17', '#deb202',
                '#deb100', '#d4aa02', '#c7a002', '#b89302', '#ab8902', '#9c7d02', '#8f7301',
                '#8c7001', '#826801', '#786201', '#695601', '#5c4b00', '#4f4100', '#423700'
            ],
            '#FF4A21': [
                '#fca28d', '#fa947d', '#f57f64', '#f0694a', '#e84f2c', '#e33c17', '#de2a02',
                '#d92a02', '#d42902', '#c72602', '#b82302', '#ab2102', '#9c1e02', '#8f1b01',
                '#8a1a01', '#821901', '#781701', '#691300', '#5c1100', '#4f0e00', '#420c00'
            ],
            '#D6D5D6': [
                '#fff', '#f2f2f2', '#e5e5e5', '#d9d9d9', '#cccccc', '#bfbfbf', '#b3b3b3',
                '#a6a6a6', '#999999', '#8c8c8c', '#808080', '#737373', '#666666', '#595959',
                '#4d4d4d', '#424242', '#363636', '#262626', '#1a1a1a', '#0f0f0f', '#000'
            ]
        };
    }
    ngOnInit() {
        if (this.color) {
            this.childControl.setValueFrom(this.color);
        }
        else {
            this.control.setValueFrom('#E6315B');
        }
        /**
         * set color presets
         * defined by swatches color picker component
         */
        this.control.setColorPresets([
            '#e6315b', '#793183', '#009de7', '#00b59c', '#ffce00', '#ff4a21', '#d6d5d6'
        ]);
        /**
         * initially open first group
         */
        this.childControl.setColorPresets(this.mapColors['#E6315B']);
        this.childControl.valueChanges.subscribe((value) => {
            this.colorChange.emit(getValueByType(value, this.childControl.initType));
        });
        this.control.valueChanges.subscribe((value) => {
            this.cdr.markForCheck();
            const presets = this.mapColors[value.toHexString()];
            if (presets) {
                this.childControl.setColorPresets(presets);
            }
            this.colorChange.emit(getValueByType(this.childControl.value, this.childControl.initType));
        });
    }
    ngOnDestroy() {
        this.control.unsubscribe();
        this.childControl.unsubscribe();
        this.cdr.detach();
    }
    ngOnChanges(changes) {
        if (this.color && this.control && getValueByType(this.control.value, this.control.initType) !== this.color) {
            this.childControl.setValueFrom(this.color);
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], SwatchesPickerComponent.prototype, "color", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], SwatchesPickerComponent.prototype, "colorChange", void 0);
SwatchesPickerComponent = __decorate([
    Component({
        selector: `swatches-picker`,
        template: "<color-presets-component \n    [columns]=\"7\"\n    direction=\"down\"\n    [(color)]=\"control.value\" \n    [colorPresets]=\"control.presets\"></color-presets-component>\n<color-presets-component\n    class=\"child-list\"\n    *ngIf=\"childControl.presets.length\"\n    [columns]=\"7\"\n    direction=\"down\"\n    [(color)]=\"childControl.value\" \n    [colorPresets]=\"childControl.presets\"></color-presets-component>",
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [":host,:host ::ng-deep *{padding:0;margin:0;-webkit-box-sizing:border-box;box-sizing:border-box}", "@charset \"UTF-8\";:host{display:block;background:#fff;width:224px;border:1px solid rgba(0,0,0,.2);-webkit-box-shadow:rgba(0,0,0,.3) 0 0 2px;box-shadow:rgba(0,0,0,.3) 0 0 2px;border-radius:4px;padding:6px}:host ::ng-deep color-preset,:host ::ng-deep color-preset-sublist{width:30px;height:30px}:host ::ng-deep color-preset.selected:after,:host ::ng-deep color-preset:hover:after{display:block;content:\"\u00A0\";position:absolute;left:3px;top:3px;bottom:3px;right:3px;z-index:10;border:3px solid #fff;-webkit-box-shadow:rgba(0,0,0,.2) 0 0 5px 2px;box-shadow:rgba(0,0,0,.2) 0 0 5px 2px}:host ::ng-deep .row:first-child color-preset-sublist:first-child,:host ::ng-deep .row:first-child color-preset:first-child{border-radius:4px 0 0 4px}:host ::ng-deep .row.last color-preset-sublist.last,:host ::ng-deep .row.last color-preset.last{border-radius:0 4px 4px 0}:host ::ng-deep .child-list .row.first color-preset-sublist.first,:host ::ng-deep .child-list .row.first color-preset.first{border-radius:4px 0 0}:host ::ng-deep .child-list .row.first color-preset-sublist.last,:host ::ng-deep .child-list .row.first color-preset.last{border-radius:0 4px 0 0}:host ::ng-deep .child-list .row.last color-preset-sublist.first,:host ::ng-deep .child-list .row.last color-preset.first{border-radius:0 0 0 4px}:host ::ng-deep .child-list .row.last color-preset-sublist.last,:host ::ng-deep .child-list .row.last color-preset.last{border-radius:0 0 4px}:host ::ng-deep .child-list{margin-top:6px;border-top:1px solid #e5e5e5;padding:6px 0 0}:host ::ng-deep .child-list color-preset.selected:after,:host ::ng-deep .child-list color-preset:hover:after{content:\"\u2714\";font-size:18px;color:#fff;border:0;left:0;top:0;bottom:0;right:0;line-height:30px;-webkit-box-shadow:none;box-shadow:none;text-align:center}"]
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef])
], SwatchesPickerComponent);

let IpPickerComponent = class IpPickerComponent {
    constructor() {
        this.colorChange = new EventEmitter(false);
    }
    ngOnInit() {
        if (!this.control) {
            this.control = new ColorPickerControl();
        }
        /**
         * set color presets
         * defined by this chrome color picker component
         */
        if (!this.control.hasPresets()) {
            this.control.setColorPresets([
                ['#f44336', '#ffebee', '#ffcdd2', '#EF9A9A', '#E57373', '#EF5350', '#F44336', '#E53935', '#D32F2F', '#C62828', '#B71C1C'],
                ['#E91E63', '#fce4ec', '#f8bbd0', '#f48fb1', '#f06292', '#ec407a', '#e91e63', '#d81b60', '#c2185b', '#ad1457', '#880e4f'],
                ['#9C27B0', '#F3e5f5', '#e1bee7', '#ce93d8', '#ba68c8', '#ab47bc', '#9c27b0', '#8e24aa', '#7b1fa2', '#6a1b9a', '#4a148c'],
                ['#673AB7', '#ede7f6', '#d1c4e9', '#b39ddb', '#9575cd', '#7e57c2', '#673ab7', '#5e35b1', '#512da8', '#4527a0', '#311b92'],
                ['#3F51B5', '#e8eaf6', '#c5cae9', '#9fa8da', '#7986cb', '#5c6bc0', '#3f51b5', '#3949ab', '#303f9f', '#283593', '#1a237e'],
                ['#2196F3', '#e3f2fd', '#bbdefb', '#90caf9', '#64b5f6', '#42a5f5', '#2196f3', '#1e88e5', '#1976d2', '#1565c0', '#0D47a1'],
                ['#03A9F4', '#e1f5fe', '#b3e5fc', '#81d4fa', '#4fc3f7', '#29b6f6', '#03a9f4', '#039be5', '#0288d1', '#0277bd', '#01579b'],
                ['#00BCD4', '#e0f7fa', '#b2ebf2', '#80deea', '#4dd0e1', '#26c6da', '#00bcd4', '#00acc1', '#0097a7', '#00838f', '#006064'],
                ['#009688', '#E0F2f1', '#b2dfdb', '#80cbc4', '#4db6ac', '#26a69a', '#009688', '#00897b', '#00796b', '#00695c', '#004d40'],
                ['#4CAF50', '#e8f5e9', '#c8e6c9', '#a5d6a7', '#81c784', '#66bb6a', '#4caf50', '#43a047', '#388e3c', '#2e7d32', '#1b5e20'],
                ['#8BC34A', '#f1f8e9', '#dcedc8', '#c5e1a5', '#aed581', '#9ccc65', '#8bc34a', '#7cb342', '#689f38', '#558b2f', '#33691e'],
                ['#cddc39', '#f9fbe7', '#f0f4c3', '#e6ee9c', '#dce775', '#d4e157', '#c0dc39', '#c0ca33', '#afb42b', '#9e9d24', '#827717'],
                ['#ffeb3b', '#fffde7', '#fff9c4', '#fff59d', '#fff176', '#ffee58', '#ffeb3b', '#fdd835', '#fbc02d', '#f9a825', '#f57f17'],
                ['#ffc107', '#fff8e1', '#ffecb3', '#ffe082', '#ffd54f', '#ffca28', '#ffc107', '#ffb300', '#ffa000', '#ff8f00', '#ff6f00'],
                ['#ff9800', '#fff3e0', '#ffe0b2', '#ffcc80', '#ffb74d', '#ffa726', '#ff9800', '#fb8c00', '#f57c00', '#ef6c00', '#e65100'],
                ['#ff5722', '#fbe9e7', '#ffccbc', '#ffab91', '#ff8a65', '#ff7043', '#ff5722', '#f4511e', '#e64a19', '#d84315', '#bf360c'],
                ['#795548', '#efebe9', '#d7ccc8', '#bcaaa4', '#a1887f', '#8d6e63', '#795548', '#6d4c41', '#5d4037', '#4e342e', '#3e2723'],
                ['#9e9e9e', '#fafafa', '#f5f5f5', '#eee', '#e0e0e0', '#bdbdbd', '#9e9e9e', '#757575', '#616161', '#424242', '#212121'],
                ['#607d8b', '#eceff1', '#cfd8dc', '#b0bec5', '#90a4ae', '#78909c', '#60708b', '#546e7a', '#455a64', '#37474f', '#263238']
            ]);
        }
        if (this.color) {
            this.control.setValueFrom(this.color);
        }
        this.control.valueChanges.subscribe((value) => {
            this.colorChange.emit(getValueByType(value, this.control.initType));
        });
    }
    ngOnDestroy() {
        this.control.unsubscribe();
    }
    ngOnChanges(changes) {
        if (this.color && this.control && getValueByType(this.control.value, this.control.initType) !== this.color) {
            this.control.setValueFrom(this.color);
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], IpPickerComponent.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", ColorPickerControl)
], IpPickerComponent.prototype, "control", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], IpPickerComponent.prototype, "colorChange", void 0);
IpPickerComponent = __decorate([
    Component({
        selector: `ip-picker`,
        template: "<div class=\"controls\">\n    <div class=\"controls-row presentation\">\n        <indicator-component colorType=\"hex\" [color]=\"control.value\"></indicator-component>\n        <hex-input-component [(color)]=\"control.value\" [(hue)]=\"control.hue\"></hex-input-component>\n    </div>\n\n    <div class=\"controls-row saturation-hue-alpha\">\n        <div class=\"column\">\n            <saturation-component [hue]=\"control.hue\" [(color)]=\"control.value\"></saturation-component>\n            <alpha-component [(color)]=\"control.value\"></alpha-component>\n        </div>\n        <div class=\"column hue-column\">\n            <hue-component vertical [(hue)]=\"control.hue\" [(color)]=\"control.value\"></hue-component>\n        </div>\n    </div>\n</div>\n<color-presets-component \n    *ngIf=\"control.presetsVisibilityChanges | async\" \n    [columns]=\"8\" \n    [(color)]=\"control.value\" \n    [colorPresets]=\"control.presets\" \n    [(hue)]=\"control.hue\"></color-presets-component>",
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [":host,:host ::ng-deep *{padding:0;margin:0;-webkit-box-sizing:border-box;box-sizing:border-box}", "@charset \"UTF-8\";:host{display:block;width:240px;border-radius:3px;background:#fff;-webkit-box-shadow:rgba(0,0,0,.3) 0 0 2px,rgba(0,0,0,.3) 0 0 4px;box-shadow:rgba(0,0,0,.3) 0 0 2px,rgba(0,0,0,.3) 0 0 4px}.controls{padding:6px}.controls-row{display:table;width:100%}.column{display:table-cell;vertical-align:middle}.controls-row.saturation-hue-alpha .column:first-child{width:178px}saturation-component{height:178px;-webkit-box-shadow:inset rgba(0,0,0,.6) 0 0 2px;box-shadow:inset rgba(0,0,0,.6) 0 0 2px;margin-bottom:16px}.controls-row.presentation{border:1px solid #e4e4e6;border-radius:3px;padding:6px 6px 6px 36px;position:relative;margin:0 0 6px}.controls-row.saturation-hue-alpha{padding:0 0 6px}indicator-component{height:22px;width:22px;-webkit-box-shadow:inset rgba(0,0,0,.6) 0 0 2px;box-shadow:inset rgba(0,0,0,.6) 0 0 2px;position:absolute;left:4px;top:50%;border-radius:50%;margin-top:-11px}:host indicator-component ::ng-deep svg{vertical-align:15%}hex-input-component ::ng-deep input{border:0;color:#817e81;margin:0;text-align:left;height:18px}.hue-column{vertical-align:top;padding:0 10px 0 16px}:host hue-component{width:100%;height:178px;-webkit-box-shadow:inset rgba(0,0,0,.6) 0 0 2px;box-shadow:inset rgba(0,0,0,.6) 0 0 2px}:host hue-component[vertical] ::ng-deep .pointer{width:auto;height:0;left:0;right:0;margin:0;background:0 0}:host alpha-component ::ng-deep .pointer{width:0;height:auto;top:0;bottom:0;margin:0;background:0 0}:host hue-component[vertical] ::ng-deep .pointer:after,:host hue-component[vertical] ::ng-deep .pointer:before{top:-5.5px;display:block;content:\"\u00A0\";position:absolute;height:0;width:0;border-top:5px solid transparent;border-bottom:5px solid transparent}:host hue-component[vertical] ::ng-deep .pointer:after{border-left:8px solid #666;left:-8px}:host hue-component[vertical] ::ng-deep .pointer:before{border-right:8px solid #666;right:-8px}:host alpha-component{height:24px}:host alpha-component ::ng-deep .pointer:after,:host alpha-component ::ng-deep .pointer:before{left:-5.5px;display:block;content:\"\u00A0\";position:absolute;height:0;width:0;border-left:5px solid transparent;border-right:5px solid transparent}:host alpha-component ::ng-deep .pointer:after{border-top:8px solid #666;top:-8px}:host alpha-component ::ng-deep .pointer:before{border-bottom:8px solid #666;bottom:-8px}"]
    }),
    __metadata("design:paramtypes", [])
], IpPickerComponent);

var ColorPickerModule_1;
let ColorPickerModule = ColorPickerModule_1 = class ColorPickerModule {
    static forRoot(configuration) {
        return {
            ngModule: ColorPickerModule_1,
            providers: [
                { provide: ColorPickerConfig, useClass: configuration || ColorPickerConfig }
            ]
        };
    }
};
ColorPickerModule = ColorPickerModule_1 = __decorate([
    NgModule({
        imports: [
            CommonModule
        ],
        providers: [
            ColorPickerConfig
        ],
        declarations: [
            SaturationComponent,
            IndicatorComponent,
            HueComponent,
            AlphaComponent,
            RgbaComponent,
            HslaComponent,
            HexComponent,
            ColorPresetsComponent,
            ColorPresetComponent,
            ColorPresetSublist,
            ColorPickerInputDirective,
            ChunksPipe,
            ReversePipe,
            /**
             * prepared components
             */
            ChromePickerComponent,
            SketchPickerComponent,
            SwatchesPickerComponent,
            GithubPickerComponent,
            CompactPickerComponent,
            IpPickerComponent
        ],
        exports: [
            SaturationComponent,
            IndicatorComponent,
            HueComponent,
            AlphaComponent,
            RgbaComponent,
            HslaComponent,
            HexComponent,
            ColorPresetsComponent,
            ChromePickerComponent,
            SketchPickerComponent,
            SwatchesPickerComponent,
            GithubPickerComponent,
            CompactPickerComponent,
            IpPickerComponent
        ],
        entryComponents: []
    })
], ColorPickerModule);

/**
 * Generated bundle index. Do not edit.
 */

export { Color, ColorPickerControl, ColorPickerModule, ColorsTable, ColorPickerConfig as ɵa, SaturationComponent as ɵb, BaseComponent as ɵc, IndicatorComponent as ɵd, HueComponent as ɵe, AlphaComponent as ɵf, RgbaComponent as ɵg, HslaComponent as ɵh, HexComponent as ɵi, ColorPresetsComponent as ɵj, ColorPresetComponent as ɵk, ColorPresetSublist as ɵl, OpacityAnimation as ɵm, ListAnimation as ɵn, ColorPickerInputDirective as ɵo, ChunksPipe as ɵp, ReversePipe as ɵq, ChromePickerComponent as ɵr, SketchPickerComponent as ɵs, SwatchesPickerComponent as ɵt, GithubPickerComponent as ɵu, CompactPickerComponent as ɵv, IpPickerComponent as ɵw, Rgba as ɵx, BaseColor as ɵy };
//# sourceMappingURL=iplab-ngx-color-picker.js.map
