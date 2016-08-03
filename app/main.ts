import {nativeScriptBootstrap} from "nativescript-angular/application";
import {APP_ROUTER_PROVIDERS} from "./app.routes";
import {AppComponent} from "./app.component";

nativeScriptBootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS
]);