import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
let ReversePipe = class ReversePipe {
    transform(arr, isReversed = true) {
        if (isReversed) {
            return arr.slice().reverse();
        }
        return arr;
    }
};
ReversePipe = tslib_1.__decorate([
    Pipe({ name: 'reverse' })
], ReversePipe);
export { ReversePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV2ZXJzZS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlwbGFiL25neC1jb2xvci1waWNrZXIvIiwic291cmNlcyI6WyJwaXBlcy9yZXZlcnNlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBSXBELElBQWEsV0FBVyxHQUF4QixNQUFhLFdBQVc7SUFDcEIsU0FBUyxDQUFDLEdBQWUsRUFBRSxhQUFzQixJQUFJO1FBQ2pELElBQUksVUFBVSxFQUFFO1lBQ1osT0FBTyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDaEM7UUFFRCxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7Q0FDSixDQUFBO0FBUlksV0FBVztJQUR2QixJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUM7R0FDYixXQUFXLENBUXZCO1NBUlksV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5AUGlwZSh7IG5hbWU6ICdyZXZlcnNlJyB9KVxuZXhwb3J0IGNsYXNzIFJldmVyc2VQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gICAgdHJhbnNmb3JtKGFycjogQXJyYXk8YW55PiwgaXNSZXZlcnNlZDogYm9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgaWYgKGlzUmV2ZXJzZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBhcnIuc2xpY2UoKS5yZXZlcnNlKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXJyO1xuICAgIH1cbn1cbiJdfQ==