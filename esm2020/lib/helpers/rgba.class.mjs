import { BaseColor } from './base-color.class';
/**
 * RGB (Red Green Blue)
 *
 * Red = ranges from 0-255
 * Green = ranges from 0-255
 * Blue = ranges from 0-255
 * Alpha = range from 0-1
 */
export class Rgba extends BaseColor {
    constructor(red, green, blue, alpha) {
        super();
        this.red = red;
        this.green = green;
        this.blue = blue;
        this.alpha = alpha;
    }
    toString(showAlphaChannel = true) {
        return showAlphaChannel
            ? `rgba(${this.getRed()}, ${this.getGreen()}, ${this.getBlue()}, ${this.getAlpha()})`
            : `rgb(${this.getRed()}, ${this.getGreen()}, ${this.getBlue()})`;
    }
    getRed() {
        return Math.round(this.red);
    }
    getGreen() {
        return Math.round(this.green);
    }
    getBlue() {
        return Math.round(this.blue);
    }
    getAlpha() {
        return Math.round(this.alpha * 100) / 100;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmdiYS5jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2lwbGFiL25neC1jb2xvci1waWNrZXIvc3JjL2xpYi9oZWxwZXJzL3JnYmEuY2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRS9DOzs7Ozs7O0dBT0c7QUFDSCxNQUFNLE9BQU8sSUFBSyxTQUFRLFNBQVM7SUFFL0IsWUFBbUIsR0FBVyxFQUFTLEtBQWEsRUFBUyxJQUFZLEVBQVMsS0FBYTtRQUMzRixLQUFLLEVBQUUsQ0FBQztRQURPLFFBQUcsR0FBSCxHQUFHLENBQVE7UUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQVMsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUFTLFVBQUssR0FBTCxLQUFLLENBQVE7SUFFL0YsQ0FBQztJQUVNLFFBQVEsQ0FBQyxtQkFBNEIsSUFBSTtRQUM1QyxPQUFPLGdCQUFnQjtZQUNuQixDQUFDLENBQUMsUUFBUSxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUc7WUFDckYsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztJQUN6RSxDQUFDO0lBRU0sTUFBTTtRQUNULE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVNLFFBQVE7UUFDWCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFTSxPQUFPO1FBQ1YsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRU0sUUFBUTtRQUNYLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUM5QyxDQUFDO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlQ29sb3IgfSBmcm9tICcuL2Jhc2UtY29sb3IuY2xhc3MnO1xuXG4vKipcbiAqIFJHQiAoUmVkIEdyZWVuIEJsdWUpXG4gKlxuICogUmVkID0gcmFuZ2VzIGZyb20gMC0yNTVcbiAqIEdyZWVuID0gcmFuZ2VzIGZyb20gMC0yNTVcbiAqIEJsdWUgPSByYW5nZXMgZnJvbSAwLTI1NVxuICogQWxwaGEgPSByYW5nZSBmcm9tIDAtMVxuICovXG5leHBvcnQgY2xhc3MgUmdiYSBleHRlbmRzIEJhc2VDb2xvciB7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVkOiBudW1iZXIsIHB1YmxpYyBncmVlbjogbnVtYmVyLCBwdWJsaWMgYmx1ZTogbnVtYmVyLCBwdWJsaWMgYWxwaGE6IG51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZyhzaG93QWxwaGFDaGFubmVsOiBib29sZWFuID0gdHJ1ZSk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBzaG93QWxwaGFDaGFubmVsXG4gICAgICAgICAgICA/IGByZ2JhKCR7dGhpcy5nZXRSZWQoKX0sICR7dGhpcy5nZXRHcmVlbigpfSwgJHt0aGlzLmdldEJsdWUoKX0sICR7dGhpcy5nZXRBbHBoYSgpfSlgXG4gICAgICAgICAgICA6IGByZ2IoJHt0aGlzLmdldFJlZCgpfSwgJHt0aGlzLmdldEdyZWVuKCl9LCAke3RoaXMuZ2V0Qmx1ZSgpfSlgO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRSZWQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQodGhpcy5yZWQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRHcmVlbigpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh0aGlzLmdyZWVuKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Qmx1ZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh0aGlzLmJsdWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRBbHBoYSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh0aGlzLmFscGhhICogMTAwKSAvIDEwMDtcbiAgICB9XG59XG4iXX0=