import { Pipe, PipeTransform } from "angular2/core";
import { ArcItem } from "../arc/arc-item.model";

@Pipe({
  name: "search"
})

export class SearchPipe implements PipeTransform {

  transform(value: ArcItem[], args: string[]): any {
    if (!value) {
      return null;
    }

    let resultArray = [];
    for (let item of value) {
      if (item.name.match("^.*" + args[0] + ".*$")) {
        resultArray.push(item);
      }
    }

    return resultArray;
  }
}
