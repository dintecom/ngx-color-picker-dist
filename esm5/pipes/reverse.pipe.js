import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
var ReversePipe = /** @class */ (function () {
    function ReversePipe() {
    }
    ReversePipe.prototype.transform = function (arr, isReversed) {
        if (isReversed === void 0) { isReversed = true; }
        if (isReversed) {
            return arr.slice().reverse();
        }
        return arr;
    };
    ReversePipe = tslib_1.__decorate([
        Pipe({ name: 'reverse' })
    ], ReversePipe);
    return ReversePipe;
}());
export { ReversePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV2ZXJzZS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlwbGFiL25neC1jb2xvci1waWNrZXIvIiwic291cmNlcyI6WyJwaXBlcy9yZXZlcnNlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBSXBEO0lBQUE7SUFRQSxDQUFDO0lBUEcsK0JBQVMsR0FBVCxVQUFVLEdBQWUsRUFBRSxVQUEwQjtRQUExQiwyQkFBQSxFQUFBLGlCQUEwQjtRQUNqRCxJQUFJLFVBQVUsRUFBRTtZQUNaLE9BQU8sR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2hDO1FBRUQsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDO0lBUFEsV0FBVztRQUR2QixJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUM7T0FDYixXQUFXLENBUXZCO0lBQUQsa0JBQUM7Q0FBQSxBQVJELElBUUM7U0FSWSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbkBQaXBlKHsgbmFtZTogJ3JldmVyc2UnIH0pXG5leHBvcnQgY2xhc3MgUmV2ZXJzZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgICB0cmFuc2Zvcm0oYXJyOiBBcnJheTxhbnk+LCBpc1JldmVyc2VkOiBib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBpZiAoaXNSZXZlcnNlZCkge1xuICAgICAgICAgICAgcmV0dXJuIGFyci5zbGljZSgpLnJldmVyc2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhcnI7XG4gICAgfVxufVxuIl19