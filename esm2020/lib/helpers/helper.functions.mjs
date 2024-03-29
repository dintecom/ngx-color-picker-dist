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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVyLmZ1bmN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2lwbGFiL25neC1jb2xvci1waWNrZXIvc3JjL2xpYi9oZWxwZXJzL2hlbHBlci5mdW5jdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRzVDLE1BQU0sVUFBVSxjQUFjLENBQUMsS0FBWSxFQUFFLElBQWU7SUFDeEQsUUFBUSxJQUFJLEVBQUU7UUFDVixLQUFLLFNBQVMsQ0FBQyxHQUFHO1lBQ2QsT0FBTyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDL0IsS0FBSyxTQUFTLENBQUMsSUFBSTtZQUNmLE9BQU8sS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQyxLQUFLLFNBQVMsQ0FBQyxHQUFHO1lBQ2QsT0FBTyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDL0IsS0FBSyxTQUFTLENBQUMsSUFBSTtZQUNmLE9BQU8sS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ2hDLEtBQUssU0FBUyxDQUFDLEdBQUc7WUFDZCxPQUFPLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMvQixLQUFLLFNBQVMsQ0FBQyxJQUFJO1lBQ2YsT0FBTyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDaEM7WUFDSSxPQUFPLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUNuQztBQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2xvciB9IGZyb20gJy4vY29sb3IuY2xhc3MnO1xuaW1wb3J0IHsgQ29sb3JUeXBlIH0gZnJvbSAnLi9jb250cm9sLmNsYXNzJztcblxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmFsdWVCeVR5cGUoY29sb3I6IENvbG9yLCB0eXBlOiBDb2xvclR5cGUpOiBzdHJpbmcge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIENvbG9yVHlwZS5oZXg6XG4gICAgICAgICAgICByZXR1cm4gY29sb3IudG9IZXhTdHJpbmcoKTtcbiAgICAgICAgY2FzZSBDb2xvclR5cGUuaGV4YTpcbiAgICAgICAgICAgIHJldHVybiBjb2xvci50b0hleFN0cmluZyh0cnVlKTtcbiAgICAgICAgY2FzZSBDb2xvclR5cGUucmdiOlxuICAgICAgICAgICAgcmV0dXJuIGNvbG9yLnRvUmdiU3RyaW5nKCk7XG4gICAgICAgIGNhc2UgQ29sb3JUeXBlLnJnYmE6XG4gICAgICAgICAgICByZXR1cm4gY29sb3IudG9SZ2JhU3RyaW5nKCk7XG4gICAgICAgIGNhc2UgQ29sb3JUeXBlLmhzbDpcbiAgICAgICAgICAgIHJldHVybiBjb2xvci50b0hzbFN0cmluZygpO1xuICAgICAgICBjYXNlIENvbG9yVHlwZS5oc2xhOlxuICAgICAgICAgICAgcmV0dXJuIGNvbG9yLnRvSHNsYVN0cmluZygpO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIGNvbG9yLnRvUmdiYVN0cmluZygpO1xuICAgIH1cbn1cbiJdfQ==