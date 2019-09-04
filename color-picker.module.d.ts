import { ModuleWithProviders } from '@angular/core';
/**
 * services
 */
import { IColorPickerConfig } from './services/color-picker.service';
/**
 * exports
 */
export { Color } from './helpers/color.class';
export { ColorPickerControl } from './helpers/control.class';
export { ColorsTable } from './helpers/colors-table.class';
export { IColorPickerConfig } from './services/color-picker.service';
export declare class ColorPickerModule {
    static forRoot(configuration?: IColorPickerConfig): ModuleWithProviders;
}
