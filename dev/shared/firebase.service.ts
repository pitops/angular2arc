import { Injectable } from "angular2/core";
import { Http } from "angular2/http";
import { ArcItem } from "../arc/arc-item.model";
import "rxjs/Rx";

@Injectable()
export class FirebaseService {

  constructor(private _http: Http) {}

  setResource(id: number, title: string, description: string, resourceUrl: string, tag: string) {
    const body = JSON.stringify({ id: id, title: title, description: description, resourceUrl: resourceUrl, tag: tag});

    return this._http
                     .post("https://<replace-me>.firebaseio.com/resource.json", body)
                     .map(response => response.json());
  }

  getResources() {
    return this._http
                     .get("https://<replace-me>.firebaseio.com/resource.json")
                     .map(response => response.json());

  }
}
