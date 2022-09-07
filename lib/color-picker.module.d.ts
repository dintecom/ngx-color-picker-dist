import { ModuleWithProviders } from '@angular/core';
/**
 * services
 */
import { IColorPickerConfig } from './services/color-picker.service';
import * as i0 from "@angular/core";
import * as i1 from "./components/parts/saturation/saturation.component";
import * as i2 from "./components/parts/indicator/indicator.component";
import * as i3 from "./components/parts/hue/hue.component";
import * as i4 from "./components/parts/alpha/alpha.component";
import * as i5 from "./components/parts/inputs/rgba-input/rgba-input.component";
import * as i6 from "./components/parts/inputs/hsla-input/hsla-input.component";
import * as i7 from "./components/parts/inputs/hex-input/hex-input.component";
import * as i8 from "./components/parts/color-presets/color-presets.component";
import * as i9 from "./components/parts/color-preset/color-preset.component";
import * as i10 from "./components/parts/color-preset-sublist/color-preset-sublist.component";
import * as i11 from "./directives/color-picker-input.directive";
import * as i12 from "./pipes/chunks.pipe";
import * as i13 from "./pipes/reverse.pipe";
import * as i14 from "./components/chrome-picker/chrome-picker.component";
import * as i15 from "./components/sketch-picker/sketch-picker.component";
import * as i16 from "./components/swatches-picker/swatches-picker.component";
import * as i17 from "./components/github-picker/github-picker.component";
import * as i18 from "./components/compact-picker/compact-picker.component";
import * as i19 from "./components/ip-picker/ip-picker.component";
import * as i20 from "@angular/common";
export { SaturationComponent } from './components/parts/saturation/saturation.component';
export { IndicatorComponent } from './components/parts/indicator/indicator.component';
export { HueComponent } from './components/parts/hue/hue.component';
export { AlphaComponent } from './components/parts/alpha/alpha.component';
export { RgbaComponent } from './components/parts/inputs/rgba-input/rgba-input.component';
export { HslaComponent } from './components/parts/inputs/hsla-input/hsla-input.component';
export { HexComponent } from './components/parts/inputs/hex-input/hex-input.component';
export { ColorPresetsComponent } from './components/parts/color-presets/color-presets.component';
export { ColorPresetComponent } from './components/parts/color-preset/color-preset.component';
export { ColorPresetSublist } from './components/parts/color-preset-sublist/color-preset-sublist.component';
export { ChromePickerComponent } from './components/chrome-picker/chrome-picker.component';
export { SketchPickerComponent } from './components/sketch-picker/sketch-picker.component';
export { CompactPickerComponent } from './components/compact-picker/compact-picker.component';
export { GithubPickerComponent } from './components/github-picker/github-picker.component';
export { SwatchesPickerComponent } from './components/swatches-picker/swatches-picker.component';
export { IpPickerComponent } from './components/ip-picker/ip-picker.component';
/**
 * exports
 */
export { Color } from './helpers/color.class';
export { ColorPickerControl } from './helpers/control.class';
export { ColorsTable } from './helpers/colors-table.class';
export { IColorPickerConfig } from './services/color-picker.service';
export declare class ColorPickerModule {
    static forRoot<T extends IColorPickerConfig>(configuration?: T): ModuleWithProviders<ColorPickerModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ColorPickerModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ColorPickerModule, [typeof i1.SaturationComponent, typeof i2.IndicatorComponent, typeof i3.HueComponent, typeof i4.AlphaComponent, typeof i5.RgbaComponent, typeof i6.HslaComponent, typeof i7.HexComponent, typeof i8.ColorPresetsComponent, typeof i9.ColorPresetComponent, typeof i10.ColorPresetSublist, typeof i11.ColorPickerInputDirective, typeof i12.ChunksPipe, typeof i13.ReversePipe, typeof i14.ChromePickerComponent, typeof i15.SketchPickerComponent, typeof i16.SwatchesPickerComponent, typeof i17.GithubPickerComponent, typeof i18.CompactPickerComponent, typeof i19.IpPickerComponent], [typeof i20.CommonModule], [typeof i1.SaturationComponent, typeof i2.IndicatorComponent, typeof i3.HueComponent, typeof i4.AlphaComponent, typeof i5.RgbaComponent, typeof i6.HslaComponent, typeof i7.HexComponent, typeof i8.ColorPresetsComponent, typeof i14.ChromePickerComponent, typeof i15.SketchPickerComponent, typeof i16.SwatchesPickerComponent, typeof i17.GithubPickerComponent, typeof i18.CompactPickerComponent, typeof i19.IpPickerComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ColorPickerModule>;
}
