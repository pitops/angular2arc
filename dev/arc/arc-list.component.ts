import { SortPipe } from "./../shared/sort.pipe";
import { Component, OnInit } from "angular2/core";
import { FirebaseService } from "../shared/firebase.service";
import { ArcItem } from "./arc-item.model";
import { Observable } from "rxjs/Observable";
import { KeysPipe } from "../shared/keys.pipe";
import { NgClass } from "angular2/common";
import { SearchPipe } from "../shared/search.pipe";

@Component({
    selector: "arc-list",
    template: `
    <div class="form-group search-wrapper">
      <input type="text" class="form-control search-input" placeholder="search ..." #filter (keyup)="0">
    </div>

    <ul class="arc-list">
      <li *ngFor="#item of listItems | async | keys | sort | search: filter.value" class="arc-item">
        <h3>{{ item.name }} <span class="tag" [ngClass]="{resource: item.tag === 'Resource', tutorial: item.tag === 'Tutorial'}">{{ item.tag }}</span></h3>
        <a [href]="item.resourceUrl" target="_blank" class="btn btn-success pull-right"><span>Go</span></a>
        <span class="date">{{ item.id | date }}</span>
        <hr>
        <blockquote>{{ item.description }}</blockquote>
        <hr>
      </li>
    </ul>
    `,
    pipes: [KeysPipe, SortPipe, SearchPipe],
    directives: [NgClass]
})

export class ArcListComponent implements OnInit {
  listItems: Observable<any[]>;

  constructor(private _firebaseService: FirebaseService) {}

  ngOnInit(): any {
    this.listItems = this._firebaseService.getResources();
  }

}
