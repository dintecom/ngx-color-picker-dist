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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY215ay5jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2lwbGFiL25neC1jb2xvci1waWNrZXIvc3JjL2xpYi9oZWxwZXJzL2NteWsuY2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRS9DOzs7Ozs7O0dBT0c7QUFDSCxNQUFNLE9BQU8sSUFBSyxTQUFRLFNBQVM7SUFFL0IsWUFBbUIsSUFBWSxFQUFTLE9BQWUsRUFBUyxNQUFjLEVBQVMsS0FBYTtRQUNoRyxLQUFLLEVBQUUsQ0FBQztRQURPLFNBQUksR0FBSixJQUFJLENBQVE7UUFBUyxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFTLFVBQUssR0FBTCxLQUFLLENBQVE7SUFFcEcsQ0FBQztJQUVNLFFBQVE7UUFDWCxPQUFPLFFBQVEsSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLElBQUksQ0FBQyxVQUFVLEVBQUUsTUFBTSxJQUFJLENBQUMsU0FBUyxFQUFFLE1BQU0sSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUM7SUFDeEcsQ0FBQztJQUVNLE9BQU87UUFDVixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFTSxVQUFVO1FBQ2IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRU0sU0FBUztRQUNaLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVNLFFBQVE7UUFDWCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VDb2xvciB9IGZyb20gJy4vYmFzZS1jb2xvci5jbGFzcyc7XG5cbi8qKlxuICogQ01ZSyBjb2xvciBzcGFjZVxuICpcbiAqIEN5YW4gPSByYW5nZXMgZnJvbSAwIHRvIDEwMCVcbiAqIE1hZ2VudGEgPSByYW5nZXMgZnJvbSAwIHRvIDEwMCVcbiAqIFllbGxvdyA9IHJhbmdlcyBmcm9tIDAgdG8gMTAwJVxuICogYmxhY0sgPSByYW5nZXMgZnJvbSAwIHRvIDEwMCVcbiAqL1xuZXhwb3J0IGNsYXNzIENteWsgZXh0ZW5kcyBCYXNlQ29sb3Ige1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGN5YW46IG51bWJlciwgcHVibGljIG1hZ2VudGE6IG51bWJlciwgcHVibGljIHllbGxvdzogbnVtYmVyLCBwdWJsaWMgYmxhY2s6IG51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYGNteWsoJHt0aGlzLmdldEN5YW4oKX0lLCAke3RoaXMuZ2V0TWFnZW50YSgpfSUsICR7dGhpcy5nZXRZZWxsb3coKX0lLCAke3RoaXMuZ2V0QmxhY2soKX0lKWA7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEN5YW4oKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHRoaXMuY3lhbik7XG4gICAgfVxuXG4gICAgcHVibGljIGdldE1hZ2VudGEoKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHRoaXMubWFnZW50YSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFllbGxvdygpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQodGhpcy55ZWxsb3cpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRCbGFjaygpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQodGhpcy5ibGFjayk7XG4gICAgfVxufVxuIl19