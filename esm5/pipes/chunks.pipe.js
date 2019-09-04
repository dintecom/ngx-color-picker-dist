import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
var ChunksPipe = /** @class */ (function () {
    function ChunksPipe() {
    }
    ChunksPipe.prototype.transform = function (arr, chunkSize) {
        return arr.reduce(function (prev, cur, i) { return (i % chunkSize) ? prev : prev.concat([arr.slice(i, i + chunkSize)]); }, []);
    };
    ChunksPipe = tslib_1.__decorate([
        Pipe({ name: 'chunks' })
    ], ChunksPipe);
    return ChunksPipe;
}());
export { ChunksPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaXBsYWIvbmd4LWNvbG9yLXBpY2tlci8iLCJzb3VyY2VzIjpbInBpcGVzL2NodW5rcy5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUlwRDtJQUFBO0lBSUEsQ0FBQztJQUhHLDhCQUFTLEdBQVQsVUFBVSxHQUFRLEVBQUUsU0FBaUI7UUFDakMsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBbkUsQ0FBbUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNqSCxDQUFDO0lBSFEsVUFBVTtRQUR0QixJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUM7T0FDWixVQUFVLENBSXRCO0lBQUQsaUJBQUM7Q0FBQSxBQUpELElBSUM7U0FKWSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbkBQaXBlKHsgbmFtZTogJ2NodW5rcycgfSlcbmV4cG9ydCBjbGFzcyBDaHVua3NQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gICAgdHJhbnNmb3JtKGFycjogYW55LCBjaHVua1NpemU6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gYXJyLnJlZHVjZSgocHJldiwgY3VyLCBpKSA9PiAoaSAlIGNodW5rU2l6ZSkgPyBwcmV2IDogcHJldi5jb25jYXQoW2Fyci5zbGljZShpLCBpICsgY2h1bmtTaXplKV0pLCBbXSk7XG4gICAgfVxufVxuIl19