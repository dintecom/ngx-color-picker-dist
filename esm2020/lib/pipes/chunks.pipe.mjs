import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class ChunksPipe {
    transform(arr, chunkSize) {
        return arr.reduce((prev, cur, i) => (i % chunkSize) ? prev : prev.concat([arr.slice(i, i + chunkSize)]), []);
    }
}
ChunksPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: ChunksPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
ChunksPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.0.1", ngImport: i0, type: ChunksPipe, name: "chunks" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: ChunksPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'chunks' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9pcGxhYi9uZ3gtY29sb3ItcGlja2VyL3NyYy9saWIvcGlwZXMvY2h1bmtzLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBSXBELE1BQU0sT0FBTyxVQUFVO0lBQ25CLFNBQVMsQ0FBQyxHQUFRLEVBQUUsU0FBaUI7UUFDakMsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2pILENBQUM7O3VHQUhRLFVBQVU7cUdBQVYsVUFBVTsyRkFBVixVQUFVO2tCQUR0QixJQUFJO21CQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5AUGlwZSh7IG5hbWU6ICdjaHVua3MnIH0pXG5leHBvcnQgY2xhc3MgQ2h1bmtzUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAgIHRyYW5zZm9ybShhcnI6IGFueSwgY2h1bmtTaXplOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIGFyci5yZWR1Y2UoKHByZXYsIGN1ciwgaSkgPT4gKGkgJSBjaHVua1NpemUpID8gcHJldiA6IHByZXYuY29uY2F0KFthcnIuc2xpY2UoaSwgaSArIGNodW5rU2l6ZSldKSwgW10pO1xuICAgIH1cbn1cbiJdfQ==