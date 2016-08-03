import {RouterConfig} from "@angular/router";
import {nsProvideRouter} from "nativescript-angular/router"
import {LoginPageComponent} from "./pages/login/login.component";
import {AuthGuard} from "./auth.guard";

export const routes: RouterConfig = [
  { path: "", component: LoginPageComponent }
];

export const APP_ROUTER_PROVIDERS = [
  nsProvideRouter(routes, { enableTracing: false }),
  AuthGuard
];