///<reference path="../typings/browser.d.ts"/>

import { bootstrap } from "angular2/platform/browser";
import { RootComponent } from "./root.component";
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from "angular2/router";
import { PLATFORM_DIRECTIVES, provide, enableProdMode } from "angular2/core";
import { HTTP_PROVIDERS } from "angular2/http";
import { FirebaseService } from "./shared/firebase.service";
import { Environment } from "./config/environment";

if (Environment === "production") {
  enableProdMode();
}


bootstrap(RootComponent, [
  FirebaseService,
  ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  provide(PLATFORM_DIRECTIVES, {useValue: [ROUTER_DIRECTIVES], multi: true})
])
  .catch(err => console.error(err));
