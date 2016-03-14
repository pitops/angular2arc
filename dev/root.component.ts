import { Component } from "angular2/core";
import { TopNavigationComponent } from "./shared/navigation.component";
import { ArcListComponent } from "./arc/arc-list.component";
import { ArcNewItemComponent } from "./arc/arc-new-item.component";
import { RouteConfig } from "angular2/router";

@Component({
  selector: "ng2-app",
  template: `
    <section class="jumbotron full-height">
      <a class="github-fork-ribbon" href="http://url.to-your.repo" title="Fork me on GitHub">Fork me on GitHub</a>
      <top-navigation></top-navigation>
      <div class="container">
        <router-outlet></router-outlet>
      </div>
    </section>
  `,
  directives: [TopNavigationComponent, ArcListComponent]
})

@RouteConfig([
  {path: "/", name: "Root", component: ArcListComponent, useAsDefault: true},
  {path: "/new", name: "New-item", component: ArcNewItemComponent}
])

export class RootComponent {

}
