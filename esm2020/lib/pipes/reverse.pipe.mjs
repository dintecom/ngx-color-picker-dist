import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class ReversePipe {
    transform(arr, isReversed = true) {
        if (isReversed) {
            return arr.slice().reverse();
        }
        return arr;
    }
}
ReversePipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: ReversePipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
ReversePipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.0.1", ngImport: i0, type: ReversePipe, name: "reverse" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: ReversePipe, decorators: [{
            type: Pipe,
            args: [{ name: 'reverse' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV2ZXJzZS5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaXBsYWIvbmd4LWNvbG9yLXBpY2tlci9zcmMvbGliL3BpcGVzL3JldmVyc2UucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7QUFJcEQsTUFBTSxPQUFPLFdBQVc7SUFDcEIsU0FBUyxDQUFDLEdBQWUsRUFBRSxhQUFzQixJQUFJO1FBQ2pELElBQUksVUFBVSxFQUFFO1lBQ1osT0FBTyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDaEM7UUFFRCxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7O3dHQVBRLFdBQVc7c0dBQVgsV0FBVzsyRkFBWCxXQUFXO2tCQUR2QixJQUFJO21CQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5AUGlwZSh7IG5hbWU6ICdyZXZlcnNlJyB9KVxuZXhwb3J0IGNsYXNzIFJldmVyc2VQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gICAgdHJhbnNmb3JtKGFycjogQXJyYXk8YW55PiwgaXNSZXZlcnNlZDogYm9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgaWYgKGlzUmV2ZXJzZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBhcnIuc2xpY2UoKS5yZXZlcnNlKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXJyO1xuICAgIH1cbn1cbiJdfQ==