import { PipeTransform } from '@angular/core';
export declare class ReversePipe implements PipeTransform {
    transform(arr: Array<any>, isReversed?: boolean): any[];
}
