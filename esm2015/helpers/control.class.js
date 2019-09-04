import { Color } from './color.class';
import { Subject, BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { Rgba } from './rgba.class';
export var ColorType;
(function (ColorType) {
    ColorType["hex"] = "hex";
    ColorType["hexa"] = "hexa";
    ColorType["rgba"] = "rgba";
    ColorType["rgb"] = "rgb";
    ColorType["hsla"] = "hsla";
    ColorType["hsl"] = "hsl";
    ColorType["cmyk"] = "cmyk";
})(ColorType || (ColorType = {}));
export class ColorPickerControl {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BpcGxhYi9uZ3gtY29sb3ItcGlja2VyLyIsInNvdXJjZXMiOlsiaGVscGVycy9jb250cm9sLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQWUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDaEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUlwQyxNQUFNLENBQU4sSUFBWSxTQVFYO0FBUkQsV0FBWSxTQUFTO0lBQ2pCLHdCQUFXLENBQUE7SUFDWCwwQkFBYSxDQUFBO0lBQ2IsMEJBQWEsQ0FBQTtJQUNiLHdCQUFXLENBQUE7SUFDWCwwQkFBYSxDQUFBO0lBQ2Isd0JBQVcsQ0FBQTtJQUNYLDBCQUFhLENBQUE7QUFDakIsQ0FBQyxFQVJXLFNBQVMsS0FBVCxTQUFTLFFBUXBCO0FBRUQsTUFBTSxPQUFPLGtCQUFrQjtJQWMzQjtRQVpRLGVBQVUsR0FBVSxJQUFJLENBQUM7UUFDekIsYUFBUSxHQUFVLElBQUksQ0FBQztRQUN2QixjQUFTLEdBQVUsSUFBSSxDQUFDO1FBQ2YsaUJBQVksR0FBbUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUU5Qyw2QkFBd0IsR0FBNkIsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEYsYUFBUSxHQUFjLElBQUksQ0FBQztRQUNsQixrQ0FBNkIsR0FBNkIsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEYsaUJBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxZ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QztJQUVNLFdBQVc7UUFDZCxJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFDLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRDs7T0FFRztJQUNJLFdBQVc7UUFDZCxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2xvciwgQ29sb3JTdHJpbmcgfSBmcm9tICcuL2NvbG9yLmNsYXNzJztcbmltcG9ydCB7IFN1YmplY3QsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBSZ2JhIH0gZnJvbSAnLi9yZ2JhLmNsYXNzJztcbmltcG9ydCB7IEhzbGEgfSBmcm9tICcuL2hzbGEuY2xhc3MnO1xuaW1wb3J0IHsgSHN2YSB9IGZyb20gJy4vaHN2YS5jbGFzcyc7XG5cbmV4cG9ydCBlbnVtIENvbG9yVHlwZSB7XG4gICAgaGV4ID0gJ2hleCcsXG4gICAgaGV4YSA9ICdoZXhhJyxcbiAgICByZ2JhID0gJ3JnYmEnLFxuICAgIHJnYiA9ICdyZ2InLFxuICAgIGhzbGEgPSAnaHNsYScsXG4gICAgaHNsID0gJ2hzbCcsXG4gICAgY215ayA9ICdjbXlrJ1xufVxuXG5leHBvcnQgY2xhc3MgQ29sb3JQaWNrZXJDb250cm9sIHtcblxuICAgIHByaXZhdGUgbW9kZWxWYWx1ZTogQ29sb3IgPSBudWxsO1xuICAgIHByaXZhdGUgaHVlVmFsdWU6IENvbG9yID0gbnVsbDtcbiAgICBwcml2YXRlIGluaXRWYWx1ZTogQ29sb3IgPSBudWxsO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgdmFsdWVDaGFuZ2VkOiBTdWJqZWN0PENvbG9yPiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgcHJlc2V0c1Zpc2liaWxpdHlDaGFuZ2VzOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRydWUpO1xuICAgIHB1YmxpYyBpbml0VHlwZTogQ29sb3JUeXBlID0gbnVsbDtcbiAgICBwdWJsaWMgcmVhZG9ubHkgYWxwaGFDaGFubmVsVmlzaWJpbGl0eUNoYW5nZXM6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3QodHJ1ZSk7XG4gICAgcHVibGljIHJlYWRvbmx5IHZhbHVlQ2hhbmdlcyA9IHRoaXMudmFsdWVDaGFuZ2VkLmFzT2JzZXJ2YWJsZSgpLnBpcGUoZGlzdGluY3RVbnRpbENoYW5nZWQoKHgsIHkpID0+IHgudG9SZ2JhU3RyaW5nKCkgPT0geS50b1JnYmFTdHJpbmcoKSkpO1xuXG4gICAgcHJpdmF0ZSBjb2xvclByZXNldHM6IEFycmF5PEFycmF5PENvbG9yPiB8IENvbG9yPiA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGNvbnN0IGNvbG9yID0gQ29sb3IuZnJvbShuZXcgUmdiYSgyNTUsIDAsIDAsIDEpKTtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZShjb2xvcik7XG4gICAgICAgIHRoaXMuc2V0SHVlQ29sb3IoY29sb3IpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRWYWx1ZUZyb20oY29sb3I6IENvbG9yU3RyaW5nIHwgQ29sb3IgfCBSZ2JhIHwgSHNsYSB8IEhzdmEpOiB0aGlzIHtcbiAgICAgICAgY29uc3QgbmV3Q29sb3IgPSBDb2xvci5mcm9tKGNvbG9yKTtcbiAgICAgICAgaWYgKCF0aGlzLmluaXRWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5pbml0VmFsdWUgPSBDb2xvci5mcm9tKGNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgY29sb3IgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0aGlzLmZpbk91dElucHV0VHlwZShjb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRIdWVDb2xvcihuZXdDb2xvcik7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUobmV3Q29sb3IpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEh1ZUNvbG9yKGNvbG9yOiBDb2xvcikge1xuICAgICAgICBpZiAodGhpcy5odWVWYWx1ZSAmJiBjb2xvci5nZXRIc3ZhKCkuaHVlID4gMCB8fCAhdGhpcy5odWVWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5odWVWYWx1ZSA9IG5ldyBDb2xvcigpLnNldEhzdmEoY29sb3IuZ2V0SHN2YSgpLmh1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGh1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHVlVmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGludGVybmFsXG4gICAgICogdXNlZCBmb3IgdHdvLXdheSBkYXRhIGJpbmRpbmdcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IGh1ZShodWVDb2xvcjogQ29sb3IpIHtcbiAgICAgICAgdGhpcy5odWVWYWx1ZSA9IGh1ZUNvbG9yO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0VmFsdWUodmFsdWU6IENvbG9yKTogdGhpcyB7XG4gICAgICAgIHRoaXMubW9kZWxWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlZC5uZXh0KHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCB2YWx1ZSgpOiBDb2xvciB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGVsVmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGludGVybmFsXG4gICAgICogdXNlZCBmb3IgdHdvLXdheSBkYXRhIGJpbmRpbmdcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IHZhbHVlKHZhbHVlOiBDb2xvcikge1xuICAgICAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiByZXNldCBjb2xvciB0byBpbml0aWFsXG4gICAgICovXG4gICAgcHVibGljIHJlc2V0KCk6IHRoaXMge1xuICAgICAgICBsZXQgY29sb3I7XG4gICAgICAgIGlmICghdGhpcy5pbml0VmFsdWUpIHtcbiAgICAgICAgICAgIGNvbG9yID0gQ29sb3IuZnJvbShuZXcgUmdiYSgyNTUsIDAsIDAsIDEpKTtcbiAgICAgICAgICAgIHRoaXMuaHVlVmFsdWUgPSBuZXcgQ29sb3IoKS5zZXRIc3ZhKGNvbG9yLmdldEhzdmEoKS5odWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29sb3IgPSB0aGlzLmluaXRWYWx1ZS5jbG9uZSgpO1xuICAgICAgICAgICAgdGhpcy5zZXRIdWVDb2xvcihjb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFZhbHVlKGNvbG9yKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIGlzQWxwaGFDaGFubmVsRW5hYmxlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWxwaGFDaGFubmVsVmlzaWJpbGl0eUNoYW5nZXMudmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIHNob3dBbHBoYUNoYW5uZWwoKTogdGhpcyB7XG4gICAgICAgIHRoaXMuYWxwaGFDaGFubmVsVmlzaWJpbGl0eUNoYW5nZXMubmV4dCh0cnVlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIGhpZGVBbHBoYUNoYW5uZWwoKTogdGhpcyB7XG4gICAgICAgIHRoaXMuYWxwaGFDaGFubmVsVmlzaWJpbGl0eUNoYW5nZXMubmV4dChmYWxzZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHByaXZhdGUgZmluT3V0SW5wdXRUeXBlKGNvbG9yU3RyaW5nOiBDb2xvclN0cmluZykge1xuICAgICAgICBjb25zdCBzdHIgPSBjb2xvclN0cmluZy5yZXBsYWNlKC8gL2csICcnKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAoc3RyWzBdID09PSAnIycpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdFR5cGUgPSBDb2xvclR5cGUuaGV4O1xuICAgICAgICAgICAgaWYgKHN0ci5sZW5ndGggPiA3KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0VHlwZSA9IENvbG9yVHlwZS5oZXhhO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgT3BlblBhcmVudGhlc2lzID0gc3RyLmluZGV4T2YoJygnKTtcbiAgICAgICAgY29uc3QgY29sb3JUeXBlTmFtZSA9IHN0ci5zdWJzdHIoMCwgT3BlblBhcmVudGhlc2lzKTtcbiAgICAgICAgc3dpdGNoIChjb2xvclR5cGVOYW1lKSB7XG4gICAgICAgICAgICBjYXNlIENvbG9yVHlwZS5yZ2JhOlxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdFR5cGUgPSBDb2xvclR5cGUucmdiYTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQ29sb3JUeXBlLnJnYjpcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRUeXBlID0gQ29sb3JUeXBlLnJnYjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQ29sb3JUeXBlLmhzbGE6XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0VHlwZSA9IENvbG9yVHlwZS5oc2xhO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBDb2xvclR5cGUuaHNsOlxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdFR5cGUgPSBDb2xvclR5cGUuaHNsO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBDb2xvclR5cGUuY215azpcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRUeXBlID0gQ29sb3JUeXBlLmNteWs7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0Q29sb3JQcmVzZXRzKGNvbG9yUHJlc2V0czogQXJyYXk8QXJyYXk8Q29sb3JTdHJpbmc+IHwgQ29sb3JTdHJpbmc+KTogdGhpcyB7XG4gICAgICAgIHRoaXMuY29sb3JQcmVzZXRzID0gdGhpcy5zZXRQcmVzZXRzKGNvbG9yUHJlc2V0cyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0UHJlc2V0cyhjb2xvclByZXNldHM6IEFycmF5PEFycmF5PENvbG9yU3RyaW5nPiB8IENvbG9yU3RyaW5nPik6IEFycmF5PENvbG9yPiB7XG4gICAgICAgIGNvbnN0IHByZXNldHMgPSBbXTtcblxuICAgICAgICBmb3IgKGNvbnN0IGNvbG9yIG9mIGNvbG9yUHJlc2V0cykge1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY29sb3IpKSB7XG4gICAgICAgICAgICAgICAgcHJlc2V0cy5wdXNoKHRoaXMuc2V0UHJlc2V0cyhjb2xvcikpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcmVzZXRzLnB1c2gobmV3IENvbG9yKGNvbG9yKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByZXNldHM7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBwcmVzZXRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xvclByZXNldHM7XG4gICAgfVxuXG4gICAgcHVibGljIGhhc1ByZXNldHMoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbG9yUHJlc2V0cy5sZW5ndGggPiAwO1xuICAgIH1cblxuICAgIHB1YmxpYyBpc1ByZXNldFZpc2libGUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnByZXNldHNWaXNpYmlsaXR5Q2hhbmdlcy52YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2hvd1ByZXNldHMoKTogdGhpcyB7XG4gICAgICAgIHRoaXMucHJlc2V0c1Zpc2liaWxpdHlDaGFuZ2VzLm5leHQodHJ1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBoaWRlUHJlc2V0cygpOiB0aGlzIHtcbiAgICAgICAgdGhpcy5wcmVzZXRzVmlzaWJpbGl0eUNoYW5nZXMubmV4dChmYWxzZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGNvbXBsZXRlIGVtaXQgb24gYWxsIG9ic2VydmVyc1xuICAgICAqL1xuICAgIHB1YmxpYyB1bnN1YnNjcmliZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy52YWx1ZUNoYW5nZWQuY29tcGxldGUoKTtcbiAgICAgICAgdGhpcy5wcmVzZXRzVmlzaWJpbGl0eUNoYW5nZXMuY29tcGxldGUoKTtcbiAgICB9XG59XG4iXX0=