import { DOCUMENT } from '@angular/common';
import { ElementRef, Directive, inject } from '@angular/core';
import { fromEvent, merge, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
export class BaseComponent {
    constructor() {
        this.subscriptions = [];
        this.window = { pageXOffset: 0, pageYOffset: 0 };
        this.mouseup = new Subject();
        this.document = inject(DOCUMENT);
        this.elementRef = inject(ElementRef);
        this.window = document.defaultView;
        this.requestAnimationFrame = this.getRequestAnimationFrame();
        this.addEventListeners();
    }
    addEventListeners() {
        this.subscriptions.push(merge(fromEvent(this.elementRef.nativeElement, 'touchstart', { passive: true }), fromEvent(this.elementRef.nativeElement, 'mousedown'))
            .subscribe((e) => this.onEventChange(e)));
    }
    onEventChange(event) {
        this.calculate(event);
        merge(fromEvent(this.document, 'mouseup'), fromEvent(this.document, 'touchend')).subscribe(() => this.mouseup.next());
        merge(fromEvent(this.document, 'mousemove'), fromEvent(this.document, 'touchmove', { passive: true }))
            .pipe(takeUntil(this.mouseup))
            .subscribe((e) => this.calculate(e));
    }
    calculateCoordinates(event) {
        const { width: elWidth, height: elHeight, top: elTop, left: elLeft } = this.elementRef.nativeElement.getBoundingClientRect();
        const pageX = typeof event.pageX === 'number'
            ? event.pageX : event.touches[0].pageX;
        const pageY = typeof event.pageY === 'number'
            ? event.pageY : event.touches[0].pageY;
        const x = Math.max(0, Math.min(pageX - (elLeft + this.window.pageXOffset), elWidth));
        const y = Math.max(0, Math.min(pageY - (elTop + this.window.pageYOffset), elHeight));
        this.movePointer({ x, y, height: elHeight, width: elWidth });
    }
    calculate(event) {
        if (!event.type.includes('touch')) {
            event.preventDefault();
        }
        if (!this.requestAnimationFrame) {
            return this.calculateCoordinates(event);
        }
        this.requestAnimationFrame(() => this.calculateCoordinates(event));
    }
    getRequestAnimationFrame() {
        return this.window.requestAnimationFrame ||
            this.window.webkitRequestAnimationFrame ||
            this.window.mozRequestAnimationFrame ||
            this.window.oRequestAnimationFrame ||
            this.window.msRequestAnimationFrame;
    }
    ngOnDestroy() {
        this.mouseup.next();
        this.mouseup.complete();
        this.subscriptions.forEach((subscription) => subscription.unsubscribe());
        this.subscriptions.length = 0;
    }
}
BaseComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: BaseComponent, deps: [], target: i0.ɵɵFactoryTarget.Directive });
BaseComponent.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.0.1", type: BaseComponent, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: BaseComponent, decorators: [{
            type: Directive
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9pcGxhYi9uZ3gtY29sb3ItcGlja2VyL3NyYy9saWIvY29tcG9uZW50cy9wYXJ0cy9iYXNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBYSxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDL0QsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUczQyxNQUFNLE9BQWdCLGFBQWE7SUFZL0I7UUFWaUIsa0JBQWEsR0FBbUIsRUFBRSxDQUFDO1FBQzVDLFdBQU0sR0FBUSxFQUFFLFdBQVcsRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBR2pELFlBQU8sR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBRXJCLGFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFMUIsZUFBVSxHQUFlLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUczRCxJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUM7UUFDbkMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBQzdELElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFJTyxpQkFBaUI7UUFDckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQ25CLEtBQUssQ0FDRCxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsWUFBWSxFQUFFLEVBQUUsT0FBTyxF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QkFBcUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRU8sd0JBQXdCO1FBQzVCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUI7WUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQywyQkFBMkI7WUFDdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyx3QkFBd0I7WUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxzQkFBc0I7WUFDbEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQztJQUM1QyxDQUFDO0lBRU0sV0FBVztRQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFlBQVksRUFBRSxFQUFFLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7OzBHQXBGaUIsYUFBYTs4RkFBYixhQUFhOzJGQUFiLGFBQWE7a0JBRGxDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBFbGVtZW50UmVmLCBPbkRlc3Ryb3ksIERpcmVjdGl2ZSwgaW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIG1lcmdlLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQERpcmVjdGl2ZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG4gICAgcHJpdmF0ZSB3aW5kb3c6IGFueSA9IHsgcGFnZVhPZmZzZXQ6IDAsIHBhZ2VZT2Zmc2V0OiAwIH07XG4gICAgcHJpdmF0ZSByZWFkb25seSByZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG5cbiAgICBwcml2YXRlIG1vdXNldXAgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBkb2N1bWVudCA9IGluamVjdChET0NVTUVOVCk7XG5cbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgZWxlbWVudFJlZjogRWxlbWVudFJlZiA9IGluamVjdChFbGVtZW50UmVmKTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLndpbmRvdyA9IGRvY3VtZW50LmRlZmF1bHRWaWV3O1xuICAgICAgICB0aGlzLnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHRoaXMuZ2V0UmVxdWVzdEFuaW1hdGlvbkZyYW1lKCk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWJzdHJhY3QgbW92ZVBvaW50ZXIoY29vcmRpbmF0ZXM6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IGhlaWdodDogbnVtYmVyOyB3aWR0aDogbnVtYmVyOyB9KTogdm9pZDtcblxuICAgIHByaXZhdGUgYWRkRXZlbnRMaXN0ZW5lcnMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKFxuICAgICAgICAgICAgbWVyZ2UoXG4gICAgICAgICAgICAgICAgZnJvbUV2ZW50KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAndG91Y2hzdGFydCcsIHsgcGFzc2l2ZTogdHJ1ZSB9KSxcbiAgICAgICAgICAgICAgICBmcm9tRXZlbnQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtb3VzZWRvd24nKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgoZTogVG91Y2hFdmVudCB8IE1vdXNlRXZlbnQpID0+IHRoaXMub25FdmVudENoYW5nZShlKSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uRXZlbnRDaGFuZ2UoZXZlbnQ6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2FsY3VsYXRlKGV2ZW50KTtcblxuICAgICAgICBtZXJnZShcbiAgICAgICAgICAgIGZyb21FdmVudCh0aGlzLmRvY3VtZW50LCAnbW91c2V1cCcpLFxuICAgICAgICAgICAgZnJvbUV2ZW50KHRoaXMuZG9jdW1lbnQsICd0b3VjaGVuZCcpXG4gICAgICAgICkuc3Vic2NyaWJlKCgpID0+IHRoaXMubW91c2V1cC5uZXh0KCkpO1xuXG4gICAgICAgIG1lcmdlKFxuICAgICAgICAgICAgZnJvbUV2ZW50KHRoaXMuZG9jdW1lbnQsICdtb3VzZW1vdmUnKSxcbiAgICAgICAgICAgIGZyb21FdmVudCh0aGlzLmRvY3VtZW50LCAndG91Y2htb3ZlJywgeyBwYXNzaXZlOiB0cnVlIH0pXG4gICAgICAgIClcbiAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMubW91c2V1cCkpXG4gICAgICAgIC5zdWJzY3JpYmUoKGU6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KSA9PiB0aGlzLmNhbGN1bGF0ZShlKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjYWxjdWxhdGVDb29yZGluYXRlcyhldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgeyB3aWR0aDogZWxXaWR0aCwgaGVpZ2h0OiBlbEhlaWdodCwgdG9wOiBlbFRvcCwgbGVmdDogZWxMZWZ0IH0gPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICBjb25zdCBwYWdlWCA9IHR5cGVvZiAoZXZlbnQgYXMgTW91c2VFdmVudCkucGFnZVggPT09ICdudW1iZXInXG4gICAgICAgICAgICAgICAgICAgICAgICA/IChldmVudCBhcyBNb3VzZUV2ZW50KS5wYWdlWCA6IChldmVudCBhcyBUb3VjaEV2ZW50KS50b3VjaGVzWzBdLnBhZ2VYO1xuICAgICAgICBjb25zdCBwYWdlWSA9IHR5cGVvZiAgKGV2ZW50IGFzIE1vdXNlRXZlbnQpLnBhZ2VZID09PSAnbnVtYmVyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgPyAoZXZlbnQgYXMgTW91c2VFdmVudCkucGFnZVkgOiAoZXZlbnQgYXMgVG91Y2hFdmVudCkudG91Y2hlc1swXS5wYWdlWTtcblxuICAgICAgICBjb25zdCB4ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4ocGFnZVggLSAoZWxMZWZ0ICsgdGhpcy53aW5kb3cucGFnZVhPZmZzZXQpLCBlbFdpZHRoKSk7XG4gICAgICAgIGNvbnN0IHkgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihwYWdlWSAtIChlbFRvcCArIHRoaXMud2luZG93LnBhZ2VZT2Zmc2V0KSwgZWxIZWlnaHQpKTtcblxuICAgICAgICB0aGlzLm1vdmVQb2ludGVyKHsgeCwgeSwgaGVpZ2h0OiBlbEhlaWdodCwgd2lkdGg6IGVsV2lkdGggfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjYWxjdWxhdGUoZXZlbnQ6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KTogdm9pZCB7XG4gICAgICAgIGlmICghZXZlbnQudHlwZS5pbmNsdWRlcygndG91Y2gnKSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMucmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jYWxjdWxhdGVDb29yZGluYXRlcyhldmVudCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLmNhbGN1bGF0ZUNvb3JkaW5hdGVzKGV2ZW50KSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKTogKCkgPT4gdm9pZCB7XG4gICAgICAgIHJldHVybiB0aGlzLndpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICAgIHRoaXMud2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICAgICAgdGhpcy53aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgICAgICB0aGlzLndpbmRvdy5vUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgICAgICB0aGlzLndpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMubW91c2V1cC5uZXh0KCk7XG4gICAgICAgIHRoaXMubW91c2V1cC5jb21wbGV0ZSgpO1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMuZm9yRWFjaCgoc3Vic2NyaXB0aW9uKSA9PiBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKSk7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5sZW5ndGggPSAwO1xuICAgIH1cbn1cbiJdfQ==