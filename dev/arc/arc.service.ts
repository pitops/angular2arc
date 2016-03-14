import { Injectable, Component } from "angular2/core";
import { ArcVault } from "./mock-arc-items";
import { ArcItem } from "./arc-item.model";

@Injectable()
export class ArcService {
  getAllItems() {
    return ArcVault;
  }

  insertItem(item: ArcItem) {
    ArcVault.push(item);
  }

  deleteItem(item: ArcItem) {
    ArcVault.splice(ArcVault.indexOf(item), 1);
  }
}
