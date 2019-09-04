import * as tslib_1 from "tslib";
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
var ColorPickerControl = /** @class */ (function () {
    function ColorPickerControl() {
        this.modelValue = null;
        this.hueValue = null;
        this.initValue = null;
        this.valueChanged = new Subject();
        this.presetsVisibilityChanges = new BehaviorSubject(true);
        this.initType = null;
        this.alphaChannelVisibilityChanges = new BehaviorSubject(true);
        this.valueChanges = this.valueChanged.asObservable().pipe(distinctUntilChanged(function (x, y) { return x.toRgbaString() == y.toRgbaString(); }));
        this.colorPresets = [];
        var color = Color.from(new Rgba(255, 0, 0, 1));
        this.setValue(color);
        this.setHueColor(color);
    }
    ColorPickerControl.prototype.setValueFrom = function (color) {
        var newColor = Color.from(color);
        if (!this.initValue) {
            this.initValue = Color.from(color);
        }
        if (typeof color === 'string') {
            this.finOutInputType(color);
        }
        this.setHueColor(newColor);
        this.setValue(newColor);
        return this;
    };
    ColorPickerControl.prototype.setHueColor = function (color) {
        if (this.hueValue && color.getHsva().hue > 0 || !this.hueValue) {
            this.hueValue = new Color().setHsva(color.getHsva().hue);
        }
    };
    Object.defineProperty(ColorPickerControl.prototype, "hue", {
        get: function () {
            return this.hueValue;
        },
        /**
         * @internal
         * used for two-way data binding
         */
        set: function (hueColor) {
            this.hueValue = hueColor;
        },
        enumerable: true,
        configurable: true
    });
    ColorPickerControl.prototype.setValue = function (value) {
        this.modelValue = value;
        this.valueChanged.next(value);
        return this;
    };
    Object.defineProperty(ColorPickerControl.prototype, "value", {
        get: function () {
            return this.modelValue;
        },
        /**
         * @internal
         * used for two-way data binding
         */
        set: function (value) {
            this.setValue(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * reset color to initial
     */
    ColorPickerControl.prototype.reset = function () {
        var color;
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
    };
    ColorPickerControl.prototype.isAlphaChannelEnabled = function () {
        return this.alphaChannelVisibilityChanges.value;
    };
    ColorPickerControl.prototype.showAlphaChannel = function () {
        this.alphaChannelVisibilityChanges.next(true);
        return this;
    };
    ColorPickerControl.prototype.hideAlphaChannel = function () {
        this.alphaChannelVisibilityChanges.next(false);
        return this;
    };
    ColorPickerControl.prototype.finOutInputType = function (colorString) {
        var str = colorString.replace(/ /g, '').toLowerCase();
        if (str[0] === '#') {
            this.initType = ColorType.hex;
            if (str.length > 7) {
                this.initType = ColorType.hexa;
            }
        }
        var OpenParenthesis = str.indexOf('(');
        var colorTypeName = str.substr(0, OpenParenthesis);
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
    };
    ColorPickerControl.prototype.setColorPresets = function (colorPresets) {
        this.colorPresets = this.setPresets(colorPresets);
        return this;
    };
    ColorPickerControl.prototype.setPresets = function (colorPresets) {
        var e_1, _a;
        var presets = [];
        try {
            for (var colorPresets_1 = tslib_1.__values(colorPresets), colorPresets_1_1 = colorPresets_1.next(); !colorPresets_1_1.done; colorPresets_1_1 = colorPresets_1.next()) {
                var color = colorPresets_1_1.value;
                if (Array.isArray(color)) {
                    presets.push(this.setPresets(color));
                }
                else {
                    presets.push(new Color(color));
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (colorPresets_1_1 && !colorPresets_1_1.done && (_a = colorPresets_1.return)) _a.call(colorPresets_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return presets;
    };
    Object.defineProperty(ColorPickerControl.prototype, "presets", {
        get: function () {
            return this.colorPresets;
        },
        enumerable: true,
        configurable: true
    });
    ColorPickerControl.prototype.hasPresets = function () {
        return this.colorPresets.length > 0;
    };
    ColorPickerControl.prototype.isPresetVisible = function () {
        return this.presetsVisibilityChanges.value;
    };
    ColorPickerControl.prototype.showPresets = function () {
        this.presetsVisibilityChanges.next(true);
        return this;
    };
    ColorPickerControl.prototype.hidePresets = function () {
        this.presetsVisibilityChanges.next(false);
        return this;
    };
    /**
     * complete emit on all observers
     */
    ColorPickerControl.prototype.unsubscribe = function () {
        this.valueChanged.complete();
        this.presetsVisibilityChanges.complete();
    };
    return ColorPickerControl;
}());
export { ColorPickerControl };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BpcGxhYi9uZ3gtY29sb3ItcGlja2VyLyIsInNvdXJjZXMiOlsiaGVscGVycy9jb250cm9sLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFlLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFJcEMsTUFBTSxDQUFOLElBQVksU0FRWDtBQVJELFdBQVksU0FBUztJQUNqQix3QkFBVyxDQUFBO0lBQ1gsMEJBQWEsQ0FBQTtJQUNiLDBCQUFhLENBQUE7SUFDYix3QkFBVyxDQUFBO0lBQ1gsMEJBQWEsQ0FBQTtJQUNiLHdCQUFXLENBQUE7SUFDWCwwQkFBYSxDQUFBO0FBQ2pCLENBQUMsRUFSVyxTQUFTLEtBQVQsU0FBUyxRQVFwQjtBQUVEO0lBY0k7UUFaUSxlQUFVLEdBQVUsSUFBSSxDQUFDO1FBQ3pCLGFBQVEsR0FBVSxJQUFJLENBQUM7UUFDdkIsY0FBUyxHQUFVLElBQUksQ0FBQztRQUNmLGlCQUFZLEdBQW1CLElBQUksT0FBTyxFQUFFLENBQUM7UUFFOUMsNkJBQXdCLEdBQTZCLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hGLGFBQVEsR0FBYyxJQUFJLENBQUM7UUFDbEIsa0NBQTZCLEdBQTZCLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BGLGlCQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FB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QjtRQUNJLE9BQU8sSUFBSSxDQUFDLHdCQUF3QixDQUFDLEtBQUssQ0FBQztJQUMvQyxDQUFDO0lBRU0sd0NBQVcsR0FBbEI7UUFDSSxJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pDLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSx3Q0FBVyxHQUFsQjtRQUNJLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUMsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVEOztPQUVHO0lBQ0ksd0NBQVcsR0FBbEI7UUFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0lBQ0wseUJBQUM7QUFBRCxDQUFDLEFBbExELElBa0xDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sb3IsIENvbG9yU3RyaW5nIH0gZnJvbSAnLi9jb2xvci5jbGFzcyc7XG5pbXBvcnQgeyBTdWJqZWN0LCBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUmdiYSB9IGZyb20gJy4vcmdiYS5jbGFzcyc7XG5pbXBvcnQgeyBIc2xhIH0gZnJvbSAnLi9oc2xhLmNsYXNzJztcbmltcG9ydCB7IEhzdmEgfSBmcm9tICcuL2hzdmEuY2xhc3MnO1xuXG5leHBvcnQgZW51bSBDb2xvclR5cGUge1xuICAgIGhleCA9ICdoZXgnLFxuICAgIGhleGEgPSAnaGV4YScsXG4gICAgcmdiYSA9ICdyZ2JhJyxcbiAgICByZ2IgPSAncmdiJyxcbiAgICBoc2xhID0gJ2hzbGEnLFxuICAgIGhzbCA9ICdoc2wnLFxuICAgIGNteWsgPSAnY215aydcbn1cblxuZXhwb3J0IGNsYXNzIENvbG9yUGlja2VyQ29udHJvbCB7XG5cbiAgICBwcml2YXRlIG1vZGVsVmFsdWU6IENvbG9yID0gbnVsbDtcbiAgICBwcml2YXRlIGh1ZVZhbHVlOiBDb2xvciA9IG51bGw7XG4gICAgcHJpdmF0ZSBpbml0VmFsdWU6IENvbG9yID0gbnVsbDtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHZhbHVlQ2hhbmdlZDogU3ViamVjdDxDb2xvcj4gPSBuZXcgU3ViamVjdCgpO1xuXG4gICAgcHVibGljIHJlYWRvbmx5IHByZXNldHNWaXNpYmlsaXR5Q2hhbmdlczogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh0cnVlKTtcbiAgICBwdWJsaWMgaW5pdFR5cGU6IENvbG9yVHlwZSA9IG51bGw7XG4gICAgcHVibGljIHJlYWRvbmx5IGFscGhhQ2hhbm5lbFZpc2liaWxpdHlDaGFuZ2VzOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRydWUpO1xuICAgIHB1YmxpYyByZWFkb25seSB2YWx1ZUNoYW5nZXMgPSB0aGlzLnZhbHVlQ2hhbmdlZC5hc09ic2VydmFibGUoKS5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKCh4LCB5KSA9PiB4LnRvUmdiYVN0cmluZygpID09IHkudG9SZ2JhU3RyaW5nKCkpKTtcblxuICAgIHByaXZhdGUgY29sb3JQcmVzZXRzOiBBcnJheTxBcnJheTxDb2xvcj4gfCBDb2xvcj4gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBjb25zdCBjb2xvciA9IENvbG9yLmZyb20obmV3IFJnYmEoMjU1LCAwLCAwLCAxKSk7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUoY29sb3IpO1xuICAgICAgICB0aGlzLnNldEh1ZUNvbG9yKGNvbG9yKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0VmFsdWVGcm9tKGNvbG9yOiBDb2xvclN0cmluZyB8IENvbG9yIHwgUmdiYSB8IEhzbGEgfCBIc3ZhKTogdGhpcyB7XG4gICAgICAgIGNvbnN0IG5ld0NvbG9yID0gQ29sb3IuZnJvbShjb2xvcik7XG4gICAgICAgIGlmICghdGhpcy5pbml0VmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdFZhbHVlID0gQ29sb3IuZnJvbShjb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGNvbG9yID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGhpcy5maW5PdXRJbnB1dFR5cGUoY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0SHVlQ29sb3IobmV3Q29sb3IpO1xuICAgICAgICB0aGlzLnNldFZhbHVlKG5ld0NvbG9yKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRIdWVDb2xvcihjb2xvcjogQ29sb3IpIHtcbiAgICAgICAgaWYgKHRoaXMuaHVlVmFsdWUgJiYgY29sb3IuZ2V0SHN2YSgpLmh1ZSA+IDAgfHwgIXRoaXMuaHVlVmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuaHVlVmFsdWUgPSBuZXcgQ29sb3IoKS5zZXRIc3ZhKGNvbG9yLmdldEhzdmEoKS5odWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBodWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh1ZVZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqIHVzZWQgZm9yIHR3by13YXkgZGF0YSBiaW5kaW5nXG4gICAgICovXG4gICAgcHVibGljIHNldCBodWUoaHVlQ29sb3I6IENvbG9yKSB7XG4gICAgICAgIHRoaXMuaHVlVmFsdWUgPSBodWVDb2xvcjtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldFZhbHVlKHZhbHVlOiBDb2xvcik6IHRoaXMge1xuICAgICAgICB0aGlzLm1vZGVsVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy52YWx1ZUNoYW5nZWQubmV4dCh2YWx1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgdmFsdWUoKTogQ29sb3Ige1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbFZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqIHVzZWQgZm9yIHR3by13YXkgZGF0YSBiaW5kaW5nXG4gICAgICovXG4gICAgcHVibGljIHNldCB2YWx1ZSh2YWx1ZTogQ29sb3IpIHtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcmVzZXQgY29sb3IgdG8gaW5pdGlhbFxuICAgICAqL1xuICAgIHB1YmxpYyByZXNldCgpOiB0aGlzIHtcbiAgICAgICAgbGV0IGNvbG9yO1xuICAgICAgICBpZiAoIXRoaXMuaW5pdFZhbHVlKSB7XG4gICAgICAgICAgICBjb2xvciA9IENvbG9yLmZyb20obmV3IFJnYmEoMjU1LCAwLCAwLCAxKSk7XG4gICAgICAgICAgICB0aGlzLmh1ZVZhbHVlID0gbmV3IENvbG9yKCkuc2V0SHN2YShjb2xvci5nZXRIc3ZhKCkuaHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbG9yID0gdGhpcy5pbml0VmFsdWUuY2xvbmUoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0SHVlQ29sb3IoY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRWYWx1ZShjb2xvcik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBpc0FscGhhQ2hhbm5lbEVuYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmFscGhhQ2hhbm5lbFZpc2liaWxpdHlDaGFuZ2VzLnZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzaG93QWxwaGFDaGFubmVsKCk6IHRoaXMge1xuICAgICAgICB0aGlzLmFscGhhQ2hhbm5lbFZpc2liaWxpdHlDaGFuZ2VzLm5leHQodHJ1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBoaWRlQWxwaGFDaGFubmVsKCk6IHRoaXMge1xuICAgICAgICB0aGlzLmFscGhhQ2hhbm5lbFZpc2liaWxpdHlDaGFuZ2VzLm5leHQoZmFsc2UpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwcml2YXRlIGZpbk91dElucHV0VHlwZShjb2xvclN0cmluZzogQ29sb3JTdHJpbmcpIHtcbiAgICAgICAgY29uc3Qgc3RyID0gY29sb3JTdHJpbmcucmVwbGFjZSgvIC9nLCAnJykudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKHN0clswXSA9PT0gJyMnKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRUeXBlID0gQ29sb3JUeXBlLmhleDtcbiAgICAgICAgICAgIGlmIChzdHIubGVuZ3RoID4gNykge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdFR5cGUgPSBDb2xvclR5cGUuaGV4YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IE9wZW5QYXJlbnRoZXNpcyA9IHN0ci5pbmRleE9mKCcoJyk7XG4gICAgICAgIGNvbnN0IGNvbG9yVHlwZU5hbWUgPSBzdHIuc3Vic3RyKDAsIE9wZW5QYXJlbnRoZXNpcyk7XG4gICAgICAgIHN3aXRjaCAoY29sb3JUeXBlTmFtZSkge1xuICAgICAgICAgICAgY2FzZSBDb2xvclR5cGUucmdiYTpcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRUeXBlID0gQ29sb3JUeXBlLnJnYmE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIENvbG9yVHlwZS5yZ2I6XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0VHlwZSA9IENvbG9yVHlwZS5yZ2I7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIENvbG9yVHlwZS5oc2xhOlxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdFR5cGUgPSBDb2xvclR5cGUuaHNsYTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQ29sb3JUeXBlLmhzbDpcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRUeXBlID0gQ29sb3JUeXBlLmhzbDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQ29sb3JUeXBlLmNteWs6XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0VHlwZSA9IENvbG9yVHlwZS5jbXlrO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHNldENvbG9yUHJlc2V0cyhjb2xvclByZXNldHM6IEFycmF5PEFycmF5PENvbG9yU3RyaW5nPiB8IENvbG9yU3RyaW5nPik6IHRoaXMge1xuICAgICAgICB0aGlzLmNvbG9yUHJlc2V0cyA9IHRoaXMuc2V0UHJlc2V0cyhjb2xvclByZXNldHMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldFByZXNldHMoY29sb3JQcmVzZXRzOiBBcnJheTxBcnJheTxDb2xvclN0cmluZz4gfCBDb2xvclN0cmluZz4pOiBBcnJheTxDb2xvcj4ge1xuICAgICAgICBjb25zdCBwcmVzZXRzID0gW107XG5cbiAgICAgICAgZm9yIChjb25zdCBjb2xvciBvZiBjb2xvclByZXNldHMpIHtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNvbG9yKSkge1xuICAgICAgICAgICAgICAgIHByZXNldHMucHVzaCh0aGlzLnNldFByZXNldHMoY29sb3IpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJlc2V0cy5wdXNoKG5ldyBDb2xvcihjb2xvcikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcmVzZXRzO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgcHJlc2V0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sb3JQcmVzZXRzO1xuICAgIH1cblxuICAgIHB1YmxpYyBoYXNQcmVzZXRzKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xvclByZXNldHMubGVuZ3RoID4gMDtcbiAgICB9XG5cbiAgICBwdWJsaWMgaXNQcmVzZXRWaXNpYmxlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5wcmVzZXRzVmlzaWJpbGl0eUNoYW5nZXMudmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIHNob3dQcmVzZXRzKCk6IHRoaXMge1xuICAgICAgICB0aGlzLnByZXNldHNWaXNpYmlsaXR5Q2hhbmdlcy5uZXh0KHRydWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgaGlkZVByZXNldHMoKTogdGhpcyB7XG4gICAgICAgIHRoaXMucHJlc2V0c1Zpc2liaWxpdHlDaGFuZ2VzLm5leHQoZmFsc2UpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBjb21wbGV0ZSBlbWl0IG9uIGFsbCBvYnNlcnZlcnNcbiAgICAgKi9cbiAgICBwdWJsaWMgdW5zdWJzY3JpYmUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudmFsdWVDaGFuZ2VkLmNvbXBsZXRlKCk7XG4gICAgICAgIHRoaXMucHJlc2V0c1Zpc2liaWxpdHlDaGFuZ2VzLmNvbXBsZXRlKCk7XG4gICAgfVxufVxuIl19