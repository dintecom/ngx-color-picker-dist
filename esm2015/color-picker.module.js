import * as tslib_1 from "tslib";
var ColorPickerModule_1;
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
/**
 * exports
 */
export { Color } from './helpers/color.class';
export { ColorPickerControl } from './helpers/control.class';
export { ColorsTable } from './helpers/colors-table.class';
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
ColorPickerModule = ColorPickerModule_1 = tslib_1.__decorate([
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
export { ColorPickerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3ItcGlja2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BpcGxhYi9uZ3gtY29sb3ItcGlja2VyLyIsInNvdXJjZXMiOlsiY29sb3ItcGlja2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7R0FNRztBQUNILE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQzs7R0FFRztBQUNILE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUMxRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seURBQXlELENBQUM7QUFDdkYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDakcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDOUYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0VBQXdFLENBQUM7QUFFNUc7O0dBRUc7QUFDSCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUV0Rjs7R0FFRztBQUNILE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFbkQ7O0dBRUc7QUFDSCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUMzRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUMzRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUM5RixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUMzRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNqRyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUUvRTs7R0FFRztBQUNILE9BQU8sRUFBRSxpQkFBaUIsRUFBc0IsTUFBTSxpQ0FBaUMsQ0FBQztBQUV4Rjs7R0FFRztBQUNILE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUE0RDNELElBQWEsaUJBQWlCLHlCQUE5QixNQUFhLGlCQUFpQjtJQUVuQixNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWtDO1FBQ3BELE9BQU87WUFDSCxRQUFRLEVBQUUsbUJBQWlCO1lBQzNCLFNBQVMsRUFBRTtnQkFDUCxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsYUFBYSxJQUFJLGlCQUFpQixFQUFFO2FBQy9FO1NBQ0osQ0FBQztJQUNOLENBQUM7Q0FDSixDQUFBO0FBVlksaUJBQWlCO0lBekQ3QixRQUFRLENBQUM7UUFDTixPQUFPLEVBQUU7WUFDTCxZQUFZO1NBQ2Y7UUFDRCxTQUFTLEVBQUU7WUFDUCxpQkFBaUI7U0FDcEI7UUFDRCxZQUFZLEVBQUU7WUFDVixtQkFBbUI7WUFDbkIsa0JBQWtCO1lBQ2xCLFlBQVk7WUFDWixjQUFjO1lBRWQsYUFBYTtZQUNiLGFBQWE7WUFDYixZQUFZO1lBRVoscUJBQXFCO1lBQ3JCLG9CQUFvQjtZQUNwQixrQkFBa0I7WUFFbEIseUJBQXlCO1lBQ3pCLFVBQVU7WUFDVixXQUFXO1lBRVg7O2VBRUc7WUFDSCxxQkFBcUI7WUFDckIscUJBQXFCO1lBQ3JCLHVCQUF1QjtZQUN2QixxQkFBcUI7WUFDckIsc0JBQXNCO1lBQ3RCLGlCQUFpQjtTQUNwQjtRQUNELE9BQU8sRUFBRTtZQUNMLG1CQUFtQjtZQUNuQixrQkFBa0I7WUFDbEIsWUFBWTtZQUNaLGNBQWM7WUFFZCxhQUFhO1lBQ2IsYUFBYTtZQUNiLFlBQVk7WUFFWixxQkFBcUI7WUFFckIscUJBQXFCO1lBQ3JCLHFCQUFxQjtZQUNyQix1QkFBdUI7WUFDdkIscUJBQXFCO1lBQ3JCLHNCQUFzQjtZQUN0QixpQkFBaUI7U0FDcEI7UUFDRCxlQUFlLEVBQUUsRUFDaEI7S0FDSixDQUFDO0dBQ1csaUJBQWlCLENBVTdCO1NBVlksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIG5neC1jb2xvci1waWNrZXJcbiAqIFxuICogQnkgSXZhbiBQaW50YXIsIGh0dHA6Ly93d3cucGludGFyLWl2YW4uY29tXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2VcbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vcEl2YW4vbmd4LWNvbG9yLXBpY2tlci9ibG9iL21hc3Rlci9SRUFETUUubWRcbiAqL1xuaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbi8qKlxuICogcGFydHNcbiAqL1xuaW1wb3J0IHsgU2F0dXJhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wYXJ0cy9zYXR1cmF0aW9uL3NhdHVyYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IEluZGljYXRvckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wYXJ0cy9pbmRpY2F0b3IvaW5kaWNhdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIdWVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcGFydHMvaHVlL2h1ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWxwaGFDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcGFydHMvYWxwaGEvYWxwaGEuY29tcG9uZW50JztcbmltcG9ydCB7IFJnYmFDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcGFydHMvaW5wdXRzL3JnYmEtaW5wdXQvcmdiYS1pbnB1dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSHNsYUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wYXJ0cy9pbnB1dHMvaHNsYS1pbnB1dC9oc2xhLWlucHV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIZXhDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcGFydHMvaW5wdXRzL2hleC1pbnB1dC9oZXgtaW5wdXQuY29tcG9uZW50JztcbmltcG9ydCB7IENvbG9yUHJlc2V0c0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wYXJ0cy9jb2xvci1wcmVzZXRzL2NvbG9yLXByZXNldHMuY29tcG9uZW50JztcbmltcG9ydCB7IENvbG9yUHJlc2V0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3BhcnRzL2NvbG9yLXByZXNldC9jb2xvci1wcmVzZXQuY29tcG9uZW50JztcbmltcG9ydCB7IENvbG9yUHJlc2V0U3VibGlzdCB9IGZyb20gJy4vY29tcG9uZW50cy9wYXJ0cy9jb2xvci1wcmVzZXQtc3VibGlzdC9jb2xvci1wcmVzZXQtc3VibGlzdC5jb21wb25lbnQnO1xuXG4vKipcbiAqIGRpcmVjdGl2ZXNcbiAqL1xuaW1wb3J0IHsgQ29sb3JQaWNrZXJJbnB1dERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9jb2xvci1waWNrZXItaW5wdXQuZGlyZWN0aXZlJztcblxuLyoqXG4gKiBwaXBlc1xuICovXG5pbXBvcnQgeyBDaHVua3NQaXBlIH0gZnJvbSAnLi9waXBlcy9jaHVua3MucGlwZSc7XG5pbXBvcnQgeyBSZXZlcnNlUGlwZSB9IGZyb20gJy4vcGlwZXMvcmV2ZXJzZS5waXBlJztcblxuLyoqXG4gKiBwaWNrZXJzXG4gKi9cbmltcG9ydCB7IENocm9tZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jaHJvbWUtcGlja2VyL2Nocm9tZS1waWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFNrZXRjaFBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9za2V0Y2gtcGlja2VyL3NrZXRjaC1waWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IENvbXBhY3RQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY29tcGFjdC1waWNrZXIvY29tcGFjdC1waWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEdpdGh1YlBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9naXRodWItcGlja2VyL2dpdGh1Yi1waWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFN3YXRjaGVzUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3N3YXRjaGVzLXBpY2tlci9zd2F0Y2hlcy1waWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IElwUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2lwLXBpY2tlci9pcC1waWNrZXIuY29tcG9uZW50JztcblxuLyoqXG4gKiBzZXJ2aWNlc1xuICovXG5pbXBvcnQgeyBDb2xvclBpY2tlckNvbmZpZywgSUNvbG9yUGlja2VyQ29uZmlnIH0gZnJvbSAnLi9zZXJ2aWNlcy9jb2xvci1waWNrZXIuc2VydmljZSc7XG5cbi8qKlxuICogZXhwb3J0c1xuICovXG5leHBvcnQgeyBDb2xvciB9IGZyb20gJy4vaGVscGVycy9jb2xvci5jbGFzcyc7XG5leHBvcnQgeyBDb2xvclBpY2tlckNvbnRyb2wgfSBmcm9tICcuL2hlbHBlcnMvY29udHJvbC5jbGFzcyc7XG5leHBvcnQgeyBDb2xvcnNUYWJsZSB9IGZyb20gJy4vaGVscGVycy9jb2xvcnMtdGFibGUuY2xhc3MnO1xuZXhwb3J0IHsgSUNvbG9yUGlja2VyQ29uZmlnIH0gZnJvbSAnLi9zZXJ2aWNlcy9jb2xvci1waWNrZXIuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGVcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBDb2xvclBpY2tlckNvbmZpZ1xuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFNhdHVyYXRpb25Db21wb25lbnQsXG4gICAgICAgIEluZGljYXRvckNvbXBvbmVudCxcbiAgICAgICAgSHVlQ29tcG9uZW50LFxuICAgICAgICBBbHBoYUNvbXBvbmVudCxcblxuICAgICAgICBSZ2JhQ29tcG9uZW50LFxuICAgICAgICBIc2xhQ29tcG9uZW50LFxuICAgICAgICBIZXhDb21wb25lbnQsXG5cbiAgICAgICAgQ29sb3JQcmVzZXRzQ29tcG9uZW50LFxuICAgICAgICBDb2xvclByZXNldENvbXBvbmVudCxcbiAgICAgICAgQ29sb3JQcmVzZXRTdWJsaXN0LFxuXG4gICAgICAgIENvbG9yUGlja2VySW5wdXREaXJlY3RpdmUsXG4gICAgICAgIENodW5rc1BpcGUsXG4gICAgICAgIFJldmVyc2VQaXBlLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBwcmVwYXJlZCBjb21wb25lbnRzXG4gICAgICAgICAqL1xuICAgICAgICBDaHJvbWVQaWNrZXJDb21wb25lbnQsXG4gICAgICAgIFNrZXRjaFBpY2tlckNvbXBvbmVudCxcbiAgICAgICAgU3dhdGNoZXNQaWNrZXJDb21wb25lbnQsXG4gICAgICAgIEdpdGh1YlBpY2tlckNvbXBvbmVudCxcbiAgICAgICAgQ29tcGFjdFBpY2tlckNvbXBvbmVudCxcbiAgICAgICAgSXBQaWNrZXJDb21wb25lbnRcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgU2F0dXJhdGlvbkNvbXBvbmVudCxcbiAgICAgICAgSW5kaWNhdG9yQ29tcG9uZW50LFxuICAgICAgICBIdWVDb21wb25lbnQsXG4gICAgICAgIEFscGhhQ29tcG9uZW50LFxuXG4gICAgICAgIFJnYmFDb21wb25lbnQsXG4gICAgICAgIEhzbGFDb21wb25lbnQsXG4gICAgICAgIEhleENvbXBvbmVudCxcblxuICAgICAgICBDb2xvclByZXNldHNDb21wb25lbnQsXG5cbiAgICAgICAgQ2hyb21lUGlja2VyQ29tcG9uZW50LFxuICAgICAgICBTa2V0Y2hQaWNrZXJDb21wb25lbnQsXG4gICAgICAgIFN3YXRjaGVzUGlja2VyQ29tcG9uZW50LFxuICAgICAgICBHaXRodWJQaWNrZXJDb21wb25lbnQsXG4gICAgICAgIENvbXBhY3RQaWNrZXJDb21wb25lbnQsXG4gICAgICAgIElwUGlja2VyQ29tcG9uZW50XG4gICAgXSxcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIENvbG9yUGlja2VyTW9kdWxlIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgZm9yUm9vdChjb25maWd1cmF0aW9uPzogSUNvbG9yUGlja2VyQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZ01vZHVsZTogQ29sb3JQaWNrZXJNb2R1bGUsXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgICAgICB7IHByb3ZpZGU6IENvbG9yUGlja2VyQ29uZmlnLCB1c2VDbGFzczogY29uZmlndXJhdGlvbiB8fCBDb2xvclBpY2tlckNvbmZpZyB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH07XG4gICAgfVxufVxuIl19