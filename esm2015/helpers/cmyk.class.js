import { BaseColor } from './base-color.class';
/**
 * CMYK color space
 *
 * Cyan = ranges from 0 to 100%
 * Magenta = ranges from 0 to 100%
 * Yellow = ranges from 0 to 100%
 * blacK = ranges from 0 to 100%
 */
export class Cmyk extends BaseColor {
    constructor(cyan, magenta, yellow, black) {
        super();
        this.cyan = cyan;
        this.magenta = magenta;
        this.yellow = yellow;
        this.black = black;
    }
    toString() {
        return `cmyk(${this.getCyan()}%, ${this.getMagenta()}%, ${this.getYellow()}%, ${this.getBlack()}%)`;
    }
    getCyan() {
        return Math.round(this.cyan);
    }
    getMagenta() {
        return Math.round(this.magenta);
    }
    getYellow() {
        return Math.round(this.yellow);
    }
    getBlack() {
        return Math.round(this.black);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY215ay5jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BpcGxhYi9uZ3gtY29sb3ItcGlja2VyLyIsInNvdXJjZXMiOlsiaGVscGVycy9jbXlrLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUvQzs7Ozs7OztHQU9HO0FBQ0gsTUFBTSxPQUFPLElBQUssU0FBUSxTQUFTO0lBRS9CLFlBQW1CLElBQVksRUFBUyxPQUFlLEVBQVMsTUFBYyxFQUFTLEtBQWE7UUFDaEcsS0FBSyxFQUFFLENBQUM7UUFETyxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQVMsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUFTLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFRO0lBRXBHLENBQUM7SUFFTSxRQUFRO1FBQ1gsT0FBTyxRQUFRLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxJQUFJLENBQUMsVUFBVSxFQUFFLE1BQU0sSUFBSSxDQUFDLFNBQVMsRUFBRSxNQUFNLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDO0lBQ3hHLENBQUM7SUFFTSxPQUFPO1FBQ1YsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRU0sVUFBVTtRQUNiLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVNLFNBQVM7UUFDWixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFTSxRQUFRO1FBQ1gsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlQ29sb3IgfSBmcm9tICcuL2Jhc2UtY29sb3IuY2xhc3MnO1xuXG4vKipcbiAqIENNWUsgY29sb3Igc3BhY2VcbiAqIFxuICogQ3lhbiA9IHJhbmdlcyBmcm9tIDAgdG8gMTAwJVxuICogTWFnZW50YSA9IHJhbmdlcyBmcm9tIDAgdG8gMTAwJVxuICogWWVsbG93ID0gcmFuZ2VzIGZyb20gMCB0byAxMDAlXG4gKiBibGFjSyA9IHJhbmdlcyBmcm9tIDAgdG8gMTAwJVxuICovXG5leHBvcnQgY2xhc3MgQ215ayBleHRlbmRzIEJhc2VDb2xvciB7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgY3lhbjogbnVtYmVyLCBwdWJsaWMgbWFnZW50YTogbnVtYmVyLCBwdWJsaWMgeWVsbG93OiBudW1iZXIsIHB1YmxpYyBibGFjazogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgY215aygke3RoaXMuZ2V0Q3lhbigpfSUsICR7dGhpcy5nZXRNYWdlbnRhKCl9JSwgJHt0aGlzLmdldFllbGxvdygpfSUsICR7dGhpcy5nZXRCbGFjaygpfSUpYDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Q3lhbigpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQodGhpcy5jeWFuKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0TWFnZW50YSgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQodGhpcy5tYWdlbnRhKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0WWVsbG93KCkge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh0aGlzLnllbGxvdyk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEJsYWNrKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh0aGlzLmJsYWNrKTtcbiAgICB9XG59Il19