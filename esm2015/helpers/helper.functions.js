import { ColorType } from './control.class';
export function getValueByType(color, type) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVyLmZ1bmN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BpcGxhYi9uZ3gtY29sb3ItcGlja2VyLyIsInNvdXJjZXMiOlsiaGVscGVycy9oZWxwZXIuZnVuY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUc1QyxNQUFNLFVBQVUsY0FBYyxDQUFDLEtBQVksRUFBRSxJQUFlO0lBQ3hELFFBQU8sSUFBSSxFQUFFO1FBQ1QsS0FBSyxTQUFTLENBQUMsR0FBRztZQUNkLE9BQU8sS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQy9CLEtBQUssU0FBUyxDQUFDLElBQUk7WUFDZixPQUFPLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkMsS0FBSyxTQUFTLENBQUMsR0FBRztZQUNkLE9BQU8sS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQy9CLEtBQUssU0FBUyxDQUFDLElBQUk7WUFDZixPQUFPLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNoQyxLQUFLLFNBQVMsQ0FBQyxHQUFHO1lBQ2QsT0FBTyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDL0IsS0FBSyxTQUFTLENBQUMsSUFBSTtZQUNmLE9BQU8sS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ2hDO1lBQ0ksT0FBTyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7S0FDbkM7QUFDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sb3IgfSBmcm9tICcuL2NvbG9yLmNsYXNzJztcbmltcG9ydCB7IENvbG9yVHlwZSB9IGZyb20gJy4vY29udHJvbC5jbGFzcyc7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFZhbHVlQnlUeXBlKGNvbG9yOiBDb2xvciwgdHlwZTogQ29sb3JUeXBlKTogc3RyaW5nIHtcbiAgICBzd2l0Y2godHlwZSkge1xuICAgICAgICBjYXNlIENvbG9yVHlwZS5oZXg6XG4gICAgICAgICAgICByZXR1cm4gY29sb3IudG9IZXhTdHJpbmcoKTtcbiAgICAgICAgY2FzZSBDb2xvclR5cGUuaGV4YTpcbiAgICAgICAgICAgIHJldHVybiBjb2xvci50b0hleFN0cmluZyh0cnVlKTtcbiAgICAgICAgY2FzZSBDb2xvclR5cGUucmdiOlxuICAgICAgICAgICAgcmV0dXJuIGNvbG9yLnRvUmdiU3RyaW5nKCk7XG4gICAgICAgIGNhc2UgQ29sb3JUeXBlLnJnYmE6XG4gICAgICAgICAgICByZXR1cm4gY29sb3IudG9SZ2JhU3RyaW5nKCk7XG4gICAgICAgIGNhc2UgQ29sb3JUeXBlLmhzbDpcbiAgICAgICAgICAgIHJldHVybiBjb2xvci50b0hzbFN0cmluZygpO1xuICAgICAgICBjYXNlIENvbG9yVHlwZS5oc2xhOlxuICAgICAgICAgICAgcmV0dXJuIGNvbG9yLnRvSHNsYVN0cmluZygpO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIGNvbG9yLnRvUmdiYVN0cmluZygpO1xuICAgIH1cbn1cbiJdfQ==