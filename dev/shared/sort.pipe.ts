import { Pipe, PipeTransform } from "angular2/core";
import {ArcItem} from "../arc/arc-item.model";

@Pipe({
  name: "sort",
  pure: false
})
export class SortPipe implements PipeTransform {
  transform(array: ArcItem[], args: any): ArcItem[] {

    if (array.length === 0) return null;
    array.sort((a, b) => {
      if (a.id > b.id) {
        return -1;
    } else if (a.id < b.id) {
        return 1;
      } else {
        return 0;
      }
    });

    return array;
  }
}
