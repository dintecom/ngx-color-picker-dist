/*
 * ngx-color-picker
 *
 * By Ivan Pintar, http://www.pintar-ivan.com
 * Licensed under the MIT License
 * See https://github.com/pIvan/ngx-color-picker/blob/master/README.md
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/**
 * parts
 */
import { SaturationComponent } from './components/parts/saturation/saturation.component';
import { IndicatorComponent } from './components/parts/indicator/indicator.component';
import { HueComponent } from './components/parts/hue/hue.component';
import { AlphaComponent } from './components/parts/alpha/alpha.component';
import { RgbaComponent } from './components/parts/inputs/rgba-input/rgba-input.component';
import { HslaComponent } from './components/parts/inputs/hsla-input/hsla-input.component';
import { HexComponent } from './components/parts/inputs/hex-input/hex-input.component';
import { ColorPresetsComponent } from './components/parts/color-presets/color-presets.component';
import { ColorPresetComponent } from './components/parts/color-preset/color-preset.component';
import { ColorPresetSublist } from './components/parts/color-preset-sublist/color-preset-sublist.component';
/**
 * directives
 */
import { ColorPickerInputDirective } from './directives/color-picker-input.directive';
/**
 * pipes
 */
import { ChunksPipe } from './pipes/chunks.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
/**
 * pickers
 */
import { ChromePickerComponent } from './components/chrome-picker/chrome-picker.component';
import { SketchPickerComponent } from './components/sketch-picker/sketch-picker.component';
import { CompactPickerComponent } from './components/compact-picker/compact-picker.component';
import { GithubPickerComponent } from './components/github-picker/github-picker.component';
import { SwatchesPickerComponent } from './components/swatches-picker/swatches-picker.component';
import { IpPickerComponent } from './components/ip-picker/ip-picker.component';
/**
 * services
 */
import { ColorPickerConfig } from './services/color-picker.service';
import * as i0 from "@angular/core";
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
export class ColorPickerModule {
    static forRoot(configuration) {
        return {
            ngModule: ColorPickerModule,
            providers: [
                { provide: ColorPickerConfig, useValue: configuration || new ColorPickerConfig() }
            ]
        };
    }
}
ColorPickerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: ColorPickerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ColorPickerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.1", ngImport: i0, type: ColorPickerModule, declarations: [SaturationComponent,
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
        IpPickerComponent], imports: [CommonModule], exports: [SaturationComponent,
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
        IpPickerComponent] });
ColorPickerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: ColorPickerModule, providers: [
        ColorPickerConfig
    ], imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: ColorPickerModule, decorators: [{
            type: NgModule,
            args: [{
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
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3ItcGlja2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2lwbGFiL25neC1jb2xvci1waWNrZXIvc3JjL2xpYi9jb2xvci1waWNrZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUNILE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQzs7R0FFRztBQUNILE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUMxRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seURBQXlELENBQUM7QUFDdkYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDakcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDOUYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0VBQXdFLENBQUM7QUFZNUc7O0dBRUc7QUFDSCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUV0Rjs7R0FFRztBQUNILE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFbkQ7O0dBRUc7QUFDSCxPQUFPLEVB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QixzQkFBc0I7UUFDdEIsaUJBQWlCOytHQUdaLGlCQUFpQixhQW5EZjtRQUNQLGlCQUFpQjtLQUNwQixZQUpHLFlBQVk7MkZBcURQLGlCQUFpQjtrQkF2RDdCLFFBQVE7bUJBQUM7b0JBQ04sT0FBTyxFQUFFO3dCQUNMLFlBQVk7cUJBQ2Y7b0JBQ0QsU0FBUyxFQUFFO3dCQUNQLGlCQUFpQjtxQkFDcEI7b0JBQ0QsWUFBWSxFQUFFO3dCQUNWLG1CQUFtQjt3QkFDbkIsa0JBQWtCO3dCQUNsQixZQUFZO3dCQUNaLGNBQWM7d0JBRWQsYUFBYTt3QkFDYixhQUFhO3dCQUNiLFlBQVk7d0JBRVoscUJBQXFCO3dCQUNyQixvQkFBb0I7d0JBQ3BCLGtCQUFrQjt3QkFFbEIseUJBQXlCO3dCQUN6QixVQUFVO3dCQUNWLFdBQVc7d0JBRVg7OzJCQUVHO3dCQUNILHFCQUFxQjt3QkFDckIscUJBQXFCO3dCQUNyQix1QkFBdUI7d0JBQ3ZCLHFCQUFxQjt3QkFDckIsc0JBQXNCO3dCQUN0QixpQkFBaUI7cUJBQ3BCO29CQUNELE9BQU8sRUFBRTt3QkFDTCxtQkFBbUI7d0JBQ25CLGtCQUFrQjt3QkFDbEIsWUFBWTt3QkFDWixjQUFjO3dCQUVkLGFBQWE7d0JBQ2IsYUFBYTt3QkFDYixZQUFZO3dCQUVaLHFCQUFxQjt3QkFFckIscUJBQXFCO3dCQUNyQixxQkFBcUI7d0JBQ3JCLHVCQUF1Qjt3QkFDdkIscUJBQXFCO3dCQUNyQixzQkFBc0I7d0JBQ3RCLGlCQUFpQjtxQkFDcEI7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogbmd4LWNvbG9yLXBpY2tlclxuICpcbiAqIEJ5IEl2YW4gUGludGFyLCBodHRwOi8vd3d3LnBpbnRhci1pdmFuLmNvbVxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3BJdmFuL25neC1jb2xvci1waWNrZXIvYmxvYi9tYXN0ZXIvUkVBRE1FLm1kXG4gKi9cbmltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG4vKipcbiAqIHBhcnRzXG4gKi9cbmltcG9ydCB7IFNhdHVyYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcGFydHMvc2F0dXJhdGlvbi9zYXR1cmF0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJbmRpY2F0b3JDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcGFydHMvaW5kaWNhdG9yL2luZGljYXRvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgSHVlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3BhcnRzL2h1ZS9odWUuY29tcG9uZW50JztcbmltcG9ydCB7IEFscGhhQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3BhcnRzL2FscGhhL2FscGhhLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZ2JhQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3BhcnRzL2lucHV0cy9yZ2JhLWlucHV0L3JnYmEtaW5wdXQuY29tcG9uZW50JztcbmltcG9ydCB7IEhzbGFDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcGFydHMvaW5wdXRzL2hzbGEtaW5wdXQvaHNsYS1pbnB1dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSGV4Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3BhcnRzL2lucHV0cy9oZXgtaW5wdXQvaGV4LWlucHV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb2xvclByZXNldHNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcGFydHMvY29sb3ItcHJlc2V0cy9jb2xvci1wcmVzZXRzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb2xvclByZXNldENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wYXJ0cy9jb2xvci1wcmVzZXQvY29sb3ItcHJlc2V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb2xvclByZXNldFN1Ymxpc3QgfSBmcm9tICcuL2NvbXBvbmVudHMvcGFydHMvY29sb3ItcHJlc2V0LXN1Ymxpc3QvY29sb3ItcHJlc2V0LXN1Ymxpc3QuY29tcG9uZW50JztcblxuZXhwb3J0IHsgU2F0dXJhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wYXJ0cy9zYXR1cmF0aW9uL3NhdHVyYXRpb24uY29tcG9uZW50JztcbmV4cG9ydCB7IEluZGljYXRvckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wYXJ0cy9pbmRpY2F0b3IvaW5kaWNhdG9yLmNvbXBvbmVudCc7XG5leHBvcnQgeyBIdWVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcGFydHMvaHVlL2h1ZS5jb21wb25lbnQnO1xuZXhwb3J0IHsgQWxwaGFDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcGFydHMvYWxwaGEvYWxwaGEuY29tcG9uZW50JztcbmV4cG9ydCB7IFJnYmFDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcGFydHMvaW5wdXRzL3JnYmEtaW5wdXQvcmdiYS1pbnB1dC5jb21wb25lbnQnO1xuZXhwb3J0IHsgSHNsYUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wYXJ0cy9pbnB1dHMvaHNsYS1pbnB1dC9oc2xhLWlucHV0LmNvbXBvbmVudCc7XG5leHBvcnQgeyBIZXhDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcGFydHMvaW5wdXRzL2hleC1pbnB1dC9oZXgtaW5wdXQuY29tcG9uZW50JztcbmV4cG9ydCB7IENvbG9yUHJlc2V0c0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wYXJ0cy9jb2xvci1wcmVzZXRzL2NvbG9yLXByZXNldHMuY29tcG9uZW50JztcbmV4cG9ydCB7IENvbG9yUHJlc2V0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3BhcnRzL2NvbG9yLXByZXNldC9jb2xvci1wcmVzZXQuY29tcG9uZW50JztcbmV4cG9ydCB7IENvbG9yUHJlc2V0U3VibGlzdCB9IGZyb20gJy4vY29tcG9uZW50cy9wYXJ0cy9jb2xvci1wcmVzZXQtc3VibGlzdC9jb2xvci1wcmVzZXQtc3VibGlzdC5jb21wb25lbnQnO1xuLyoqXG4gKiBkaXJlY3RpdmVzXG4gKi9cbmltcG9ydCB7IENvbG9yUGlja2VySW5wdXREaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvY29sb3ItcGlja2VyLWlucHV0LmRpcmVjdGl2ZSc7XG5cbi8qKlxuICogcGlwZXNcbiAqL1xuaW1wb3J0IHsgQ2h1bmtzUGlwZSB9IGZyb20gJy4vcGlwZXMvY2h1bmtzLnBpcGUnO1xuaW1wb3J0IHsgUmV2ZXJzZVBpcGUgfSBmcm9tICcuL3BpcGVzL3JldmVyc2UucGlwZSc7XG5cbi8qKlxuICogcGlja2Vyc1xuICovXG5pbXBvcnQgeyBDaHJvbWVQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2hyb21lLXBpY2tlci9jaHJvbWUtcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTa2V0Y2hQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc2tldGNoLXBpY2tlci9za2V0Y2gtcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21wYWN0UGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbXBhY3QtcGlja2VyL2NvbXBhY3QtcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHaXRodWJQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZ2l0aHViLXBpY2tlci9naXRodWItcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTd2F0Y2hlc1BpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zd2F0Y2hlcy1waWNrZXIvc3dhdGNoZXMtcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJcFBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9pcC1waWNrZXIvaXAtcGlja2VyLmNvbXBvbmVudCc7XG5cbmV4cG9ydCB7IENocm9tZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jaHJvbWUtcGlja2VyL2Nocm9tZS1waWNrZXIuY29tcG9uZW50JztcbmV4cG9ydCB7IFNrZXRjaFBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9za2V0Y2gtcGlja2VyL3NrZXRjaC1waWNrZXIuY29tcG9uZW50JztcbmV4cG9ydCB7IENvbXBhY3RQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY29tcGFjdC1waWNrZXIvY29tcGFjdC1waWNrZXIuY29tcG9uZW50JztcbmV4cG9ydCB7IEdpdGh1YlBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9naXRodWItcGlja2VyL2dpdGh1Yi1waWNrZXIuY29tcG9uZW50JztcbmV4cG9ydCB7IFN3YXRjaGVzUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3N3YXRjaGVzLXBpY2tlci9zd2F0Y2hlcy1waWNrZXIuY29tcG9uZW50JztcbmV4cG9ydCB7IElwUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2lwLXBpY2tlci9pcC1waWNrZXIuY29tcG9uZW50JztcblxuLyoqXG4gKiBzZXJ2aWNlc1xuICovXG5pbXBvcnQgeyBDb2xvclBpY2tlckNvbmZpZywgSUNvbG9yUGlja2VyQ29uZmlnIH0gZnJvbSAnLi9zZXJ2aWNlcy9jb2xvci1waWNrZXIuc2VydmljZSc7XG5cbi8qKlxuICogZXhwb3J0c1xuICovXG5leHBvcnQgeyBDb2xvciB9IGZyb20gJy4vaGVscGVycy9jb2xvci5jbGFzcyc7XG5leHBvcnQgeyBDb2xvclBpY2tlckNvbnRyb2wgfSBmcm9tICcuL2hlbHBlcnMvY29udHJvbC5jbGFzcyc7XG5leHBvcnQgeyBDb2xvcnNUYWJsZSB9IGZyb20gJy4vaGVscGVycy9jb2xvcnMtdGFibGUuY2xhc3MnO1xuZXhwb3J0IHsgSUNvbG9yUGlja2VyQ29uZmlnIH0gZnJvbSAnLi9zZXJ2aWNlcy9jb2xvci1waWNrZXIuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGVcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBDb2xvclBpY2tlckNvbmZpZ1xuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFNhdHVyYXRpb25Db21wb25lbnQsXG4gICAgICAgIEluZGljYXRvckNvbXBvbmVudCxcbiAgICAgICAgSHVlQ29tcG9uZW50LFxuICAgICAgICBBbHBoYUNvbXBvbmVudCxcblxuICAgICAgICBSZ2JhQ29tcG9uZW50LFxuICAgICAgICBIc2xhQ29tcG9uZW50LFxuICAgICAgICBIZXhDb21wb25lbnQsXG5cbiAgICAgICAgQ29sb3JQcmVzZXRzQ29tcG9uZW50LFxuICAgICAgICBDb2xvclByZXNldENvbXBvbmVudCxcbiAgICAgICAgQ29sb3JQcmVzZXRTdWJsaXN0LFxuXG4gICAgICAgIENvbG9yUGlja2VySW5wdXREaXJlY3RpdmUsXG4gICAgICAgIENodW5rc1BpcGUsXG4gICAgICAgIFJldmVyc2VQaXBlLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBwcmVwYXJlZCBjb21wb25lbnRzXG4gICAgICAgICAqL1xuICAgICAgICBDaHJvbWVQaWNrZXJDb21wb25lbnQsXG4gICAgICAgIFNrZXRjaFBpY2tlckNvbXBvbmVudCxcbiAgICAgICAgU3dhdGNoZXNQaWNrZXJDb21wb25lbnQsXG4gICAgICAgIEdpdGh1YlBpY2tlckNvbXBvbmVudCxcbiAgICAgICAgQ29tcGFjdFBpY2tlckNvbXBvbmVudCxcbiAgICAgICAgSXBQaWNrZXJDb21wb25lbnRcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgU2F0dXJhdGlvbkNvbXBvbmVudCxcbiAgICAgICAgSW5kaWNhdG9yQ29tcG9uZW50LFxuICAgICAgICBIdWVDb21wb25lbnQsXG4gICAgICAgIEFscGhhQ29tcG9uZW50LFxuXG4gICAgICAgIFJnYmFDb21wb25lbnQsXG4gICAgICAgIEhzbGFDb21wb25lbnQsXG4gICAgICAgIEhleENvbXBvbmVudCxcblxuICAgICAgICBDb2xvclByZXNldHNDb21wb25lbnQsXG5cbiAgICAgICAgQ2hyb21lUGlja2VyQ29tcG9uZW50LFxuICAgICAgICBTa2V0Y2hQaWNrZXJDb21wb25lbnQsXG4gICAgICAgIFN3YXRjaGVzUGlja2VyQ29tcG9uZW50LFxuICAgICAgICBHaXRodWJQaWNrZXJDb21wb25lbnQsXG4gICAgICAgIENvbXBhY3RQaWNrZXJDb21wb25lbnQsXG4gICAgICAgIElwUGlja2VyQ29tcG9uZW50XG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBDb2xvclBpY2tlck1vZHVsZSB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGZvclJvb3Q8VCBleHRlbmRzIElDb2xvclBpY2tlckNvbmZpZz4oY29uZmlndXJhdGlvbj86IFQpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPENvbG9yUGlja2VyTW9kdWxlPiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZ01vZHVsZTogQ29sb3JQaWNrZXJNb2R1bGUsXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgICAgICB7IHByb3ZpZGU6IENvbG9yUGlja2VyQ29uZmlnLCB1c2VWYWx1ZTogY29uZmlndXJhdGlvbiB8fCBuZXcgQ29sb3JQaWNrZXJDb25maWcoKSB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH07XG4gICAgfVxufVxuIl19