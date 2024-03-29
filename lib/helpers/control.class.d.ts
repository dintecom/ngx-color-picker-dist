import { Color, ColorString } from './color.class';
import { BehaviorSubject } from 'rxjs';
import { Rgba } from './rgba.class';
import { Hsla } from './hsla.class';
import { Hsva } from './hsva.class';
export declare enum ColorType {
    hex = "hex",
    hexa = "hexa",
    rgba = "rgba",
    rgb = "rgb",
    hsla = "hsla",
    hsl = "hsl",
    cmyk = "cmyk"
}
export declare class ColorPickerControl {
    private modelValue;
    private hueValue;
    private initValue;
    private readonly valueChanged;
    readonly presetsVisibilityChanges: BehaviorSubject<boolean>;
    initType: ColorType;
    readonly alphaChannelVisibilityChanges: BehaviorSubject<boolean>;
    readonly valueChanges: import("rxjs").Observable<Color>;
    private colorPresets;
    constructor();
    setValueFrom(color: ColorString | Color | Rgba | Hsla | Hsva): this;
    private setHueColor;
    get hue(): Color;
    /**
     * @internal
     * used for two-way data binding
     */
    set hue(hueColor: Color);
    private setValue;
    get value(): Color;
    /**
     * @internal
     * used for two-way data binding
     */
    set value(value: Color);
    /**
     * reset color to initial
     */
    reset(): this;
    isAlphaChannelEnabled(): boolean;
    showAlphaChannel(): this;
    hideAlphaChannel(): this;
    private finOutInputType;
    setColorPresets(colorPresets: Array<Array<ColorString> | ColorString>): this;
    private setPresets;
    get presets(): (Color | Color[])[];
    hasPresets(): boolean;
    isPresetVisible(): boolean;
    showPresets(): this;
    hidePresets(): this;
}
