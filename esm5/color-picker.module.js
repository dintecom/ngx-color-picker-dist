import * as tslib_1 from "tslib";
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
var ColorPickerModule = /** @class */ (function () {
    function ColorPickerModule() {
    }
    ColorPickerModule_1 = ColorPickerModule;
    ColorPickerModule.forRoot = function (configuration) {
        return {
            ngModule: ColorPickerModule_1,
            providers: [
                { provide: ColorPickerConfig, useClass: configuration || ColorPickerConfig }
            ]
        };
    };
    var ColorPickerModule_1;
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
    return ColorPickerModule;
}());
export { ColorPickerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3ItcGlja2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BpcGxhYi9uZ3gtY29sb3ItcGlja2VyLyIsInNvdXJjZXMiOlsiY29sb3ItcGlja2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HO0FBQ0gsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DOztHQUVHO0FBQ0gsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDekYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDdEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDMUYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUN2RixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUNqRyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUM5RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3RUFBd0UsQ0FBQztBQUU1Rzs7R0FFRztBQUNILE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBRXRGOztHQUVHO0FBQ0gsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVuRDs7R0FFRztBQUNILE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQzlGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBRS9FOztHQUVHO0FBQ0gsT0FBTyxFQUFFLGlCQUFpQixFQUFzQixNQUFNLGlDQUFpQyxDQUFDO0FBRXhGOztHQUVHO0FBQ0gsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzlDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzdELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQTREM0Q7SUFBQTtJQVVBLENBQUM7MEJBVlksaUJBQWlCO0lBRVoseUJBQU8sR0FBckIsVUFBc0IsYUFBa0M7UUFDcEQsT0FBTztZQUNILFFBQVEsRUFBRSxtQkFBaUI7WUFDM0IsU0FBUyxFQUFFO2dCQUNQLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxhQUFhLElBQUksaUJBQWlCLEVBQUU7YUFDL0U7U0FDSixDQUFDO0lBQ04sQ0FBQzs7SUFUUSxpQkFBaUI7UUF6RDdCLFFBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxZQUFZO2FBQ2Y7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AsaUJBQWlCO2FBQ3BCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLG1CQUFtQjtnQkFDbkIsa0JBQWtCO2dCQUNsQixZQUFZO2dCQUNaLGNBQWM7Z0JBRWQsYUFBYTtnQkFDYixhQUFhO2dCQUNiLFlBQVk7Z0JBRVoscUJBQXFCO2dCQUNyQixvQkFBb0I7Z0JBQ3BCLGtCQUFrQjtnQkFFbEIseUJBQXlCO2dCQUN6QixVQUFVO2dCQUNWLFdBQVc7Z0JBRVg7O21CQUVHO2dCQUNILHFCQUFxQjtnQkFDckIscUJBQXFCO2dCQUNyQix1QkFBdUI7Z0JBQ3ZCLHFCQUFxQjtnQkFDckIsc0JBQXNCO2dCQUN0QixpQkFBaUI7YUFDcEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsbUJBQW1CO2dCQUNuQixrQkFBa0I7Z0JBQ2xCLFlBQVk7Z0JBQ1osY0FBYztnQkFFZCxhQUFhO2dCQUNiLGFBQWE7Z0JBQ2IsWUFBWTtnQkFFWixxQkFBcUI7Z0JBRXJCLHFCQUFxQjtnQkFDckIscUJBQXFCO2dCQUNyQix1QkFBdUI7Z0JBQ3ZCLHFCQUFxQjtnQkFDckIsc0JBQXNCO2dCQUN0QixpQkFBaUI7YUFDcEI7WUFDRCxlQUFlLEVBQUUsRUFDaEI7U0FDSixDQUFDO09BQ1csaUJBQWlCLENBVTdCO0lBQUQsd0JBQUM7Q0FBQSxBQVZELElBVUM7U0FWWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogbmd4LWNvbG9yLXBpY2tlclxuICogXG4gKiBCeSBJdmFuIFBpbnRhciwgaHR0cDovL3d3dy5waW50YXItaXZhbi5jb21cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZVxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9wSXZhbi9uZ3gtY29sb3ItcGlja2VyL2Jsb2IvbWFzdGVyL1JFQURNRS5tZFxuICovXG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuLyoqXG4gKiBwYXJ0c1xuICovXG5pbXBvcnQgeyBTYXR1cmF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3BhcnRzL3NhdHVyYXRpb24vc2F0dXJhdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW5kaWNhdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3BhcnRzL2luZGljYXRvci9pbmRpY2F0b3IuY29tcG9uZW50JztcbmltcG9ydCB7IEh1ZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wYXJ0cy9odWUvaHVlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBbHBoYUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wYXJ0cy9hbHBoYS9hbHBoYS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmdiYUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wYXJ0cy9pbnB1dHMvcmdiYS1pbnB1dC9yZ2JhLWlucHV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIc2xhQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3BhcnRzL2lucHV0cy9oc2xhLWlucHV0L2hzbGEtaW5wdXQuY29tcG9uZW50JztcbmltcG9ydCB7IEhleENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wYXJ0cy9pbnB1dHMvaGV4LWlucHV0L2hleC1pbnB1dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29sb3JQcmVzZXRzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3BhcnRzL2NvbG9yLXByZXNldHMvY29sb3ItcHJlc2V0cy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29sb3JQcmVzZXRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcGFydHMvY29sb3ItcHJlc2V0L2NvbG9yLXByZXNldC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29sb3JQcmVzZXRTdWJsaXN0IH0gZnJvbSAnLi9jb21wb25lbnRzL3BhcnRzL2NvbG9yLXByZXNldC1zdWJsaXN0L2NvbG9yLXByZXNldC1zdWJsaXN0LmNvbXBvbmVudCc7XG5cbi8qKlxuICogZGlyZWN0aXZlc1xuICovXG5pbXBvcnQgeyBDb2xvclBpY2tlcklucHV0RGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2NvbG9yLXBpY2tlci1pbnB1dC5kaXJlY3RpdmUnO1xuXG4vKipcbiAqIHBpcGVzXG4gKi9cbmltcG9ydCB7IENodW5rc1BpcGUgfSBmcm9tICcuL3BpcGVzL2NodW5rcy5waXBlJztcbmltcG9ydCB7IFJldmVyc2VQaXBlIH0gZnJvbSAnLi9waXBlcy9yZXZlcnNlLnBpcGUnO1xuXG4vKipcbiAqIHBpY2tlcnNcbiAqL1xuaW1wb3J0IHsgQ2hyb21lUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Nocm9tZS1waWNrZXIvY2hyb21lLXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2tldGNoUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3NrZXRjaC1waWNrZXIvc2tldGNoLXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tcGFjdFBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jb21wYWN0LXBpY2tlci9jb21wYWN0LXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgR2l0aHViUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2dpdGh1Yi1waWNrZXIvZ2l0aHViLXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3dhdGNoZXNQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc3dhdGNoZXMtcGlja2VyL3N3YXRjaGVzLXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgSXBQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaXAtcGlja2VyL2lwLXBpY2tlci5jb21wb25lbnQnO1xuXG4vKipcbiAqIHNlcnZpY2VzXG4gKi9cbmltcG9ydCB7IENvbG9yUGlja2VyQ29uZmlnLCBJQ29sb3JQaWNrZXJDb25maWcgfSBmcm9tICcuL3NlcnZpY2VzL2NvbG9yLXBpY2tlci5zZXJ2aWNlJztcblxuLyoqXG4gKiBleHBvcnRzXG4gKi9cbmV4cG9ydCB7IENvbG9yIH0gZnJvbSAnLi9oZWxwZXJzL2NvbG9yLmNsYXNzJztcbmV4cG9ydCB7IENvbG9yUGlja2VyQ29udHJvbCB9IGZyb20gJy4vaGVscGVycy9jb250cm9sLmNsYXNzJztcbmV4cG9ydCB7IENvbG9yc1RhYmxlIH0gZnJvbSAnLi9oZWxwZXJzL2NvbG9ycy10YWJsZS5jbGFzcyc7XG5leHBvcnQgeyBJQ29sb3JQaWNrZXJDb25maWcgfSBmcm9tICcuL3NlcnZpY2VzL2NvbG9yLXBpY2tlci5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZVxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIENvbG9yUGlja2VyQ29uZmlnXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgU2F0dXJhdGlvbkNvbXBvbmVudCxcbiAgICAgICAgSW5kaWNhdG9yQ29tcG9uZW50LFxuICAgICAgICBIdWVDb21wb25lbnQsXG4gICAgICAgIEFscGhhQ29tcG9uZW50LFxuXG4gICAgICAgIFJnYmFDb21wb25lbnQsXG4gICAgICAgIEhzbGFDb21wb25lbnQsXG4gICAgICAgIEhleENvbXBvbmVudCxcblxuICAgICAgICBDb2xvclByZXNldHNDb21wb25lbnQsXG4gICAgICAgIENvbG9yUHJlc2V0Q29tcG9uZW50LFxuICAgICAgICBDb2xvclByZXNldFN1Ymxpc3QsXG5cbiAgICAgICAgQ29sb3JQaWNrZXJJbnB1dERpcmVjdGl2ZSxcbiAgICAgICAgQ2h1bmtzUGlwZSxcbiAgICAgICAgUmV2ZXJzZVBpcGUsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIHByZXBhcmVkIGNvbXBvbmVudHNcbiAgICAgICAgICovXG4gICAgICAgIENocm9tZVBpY2tlckNvbXBvbmVudCxcbiAgICAgICAgU2tldGNoUGlja2VyQ29tcG9uZW50LFxuICAgICAgICBTd2F0Y2hlc1BpY2tlckNvbXBvbmVudCxcbiAgICAgICAgR2l0aHViUGlja2VyQ29tcG9uZW50LFxuICAgICAgICBDb21wYWN0UGlja2VyQ29tcG9uZW50LFxuICAgICAgICBJcFBpY2tlckNvbXBvbmVudFxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBTYXR1cmF0aW9uQ29tcG9uZW50LFxuICAgICAgICBJbmRpY2F0b3JDb21wb25lbnQsXG4gICAgICAgIEh1ZUNvbXBvbmVudCxcbiAgICAgICAgQWxwaGFDb21wb25lbnQsXG5cbiAgICAgICAgUmdiYUNvbXBvbmVudCxcbiAgICAgICAgSHNsYUNvbXBvbmVudCxcbiAgICAgICAgSGV4Q29tcG9uZW50LFxuXG4gICAgICAgIENvbG9yUHJlc2V0c0NvbXBvbmVudCxcblxuICAgICAgICBDaHJvbWVQaWNrZXJDb21wb25lbnQsXG4gICAgICAgIFNrZXRjaFBpY2tlckNvbXBvbmVudCxcbiAgICAgICAgU3dhdGNoZXNQaWNrZXJDb21wb25lbnQsXG4gICAgICAgIEdpdGh1YlBpY2tlckNvbXBvbmVudCxcbiAgICAgICAgQ29tcGFjdFBpY2tlckNvbXBvbmVudCxcbiAgICAgICAgSXBQaWNrZXJDb21wb25lbnRcbiAgICBdLFxuICAgIGVudHJ5Q29tcG9uZW50czogW1xuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQ29sb3JQaWNrZXJNb2R1bGUge1xuXG4gICAgcHVibGljIHN0YXRpYyBmb3JSb290KGNvbmZpZ3VyYXRpb24/OiBJQ29sb3JQaWNrZXJDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5nTW9kdWxlOiBDb2xvclBpY2tlck1vZHVsZSxcbiAgICAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogQ29sb3JQaWNrZXJDb25maWcsIHVzZUNsYXNzOiBjb25maWd1cmF0aW9uIHx8IENvbG9yUGlja2VyQ29uZmlnIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfTtcbiAgICB9XG59XG4iXX0=