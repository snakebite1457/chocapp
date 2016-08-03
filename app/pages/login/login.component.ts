import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Observable} from "data/observable";
import {Router} from "@angular/router";
import {Page} from "ui/page";
import {Config} from '../../shared/config';
import {connectionType, getConnectionType} from "connectivity";
import {Inject} from '@angular/core';
import * as FrameModule from "ui/frame";
import * as DialogModule from "ui/dialogs";
import {User} from "../../shared/user/user";

@Component({
    moduleId: module.id,
    selector: "chocapp",
    templateUrl: "login.html"
})
export class LoginPageComponent implements OnInit {
    user: User;
    isLoggingIn = true;
    isAuthenticating = false;

    @ViewChild("password") password: ElementRef;
    
    constructor(private _router: Router, private page: Page) {
        this.user = new User();
    }

    ngOnInit() {
        this.page.actionBarHidden = true;
    }

    focusPassword() {
        this.password.nativeElement.focus();
    }

    login() {
        if (!this.user.isValidEmail()) {
            alert("Enter a valid email address.");
            return;
        }

        if (getConnectionType() == connectionType.none) {
        alert("Es wird eine Internetverbindung benötigt.");
        return;
        }

        this.isAuthenticating = true;
       
    }
}