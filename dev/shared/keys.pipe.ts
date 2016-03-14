import { Pipe, PipeTransform } from "angular2/core";
import { ArcItem } from "../arc/arc-item.model";

@Pipe({name: "keys"})

export class KeysPipe implements PipeTransform {

  transform(value, args: string[]): any {
    let result = [];
    for (let prop in value) {
      result.push(
        new ArcItem(
          value[prop].id,
          value[prop].title,
          value[prop].description,
          value[prop].resourceUrl,
          value[prop].tag
        ));
    }
    return result;
  }
}
