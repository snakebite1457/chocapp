import {Http, Response, Headers} from '@angular/http';
import {User} from './user';
import {Observable} from 'rxjs/Observable';
import {Injectable, Inject} from '@angular/core';
import {Config} from '../config';
import * as FrameModule from "ui/frame";
import * as DialogModule from "ui/dialogs";


@Injectable()
export class UserService {
    public headers: Headers;

    constructor(private _http: Http) { 
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }
    
    /**
     * Provides the functionality to obtain a baerer token for the user.
     * Which gives the user the ability to interact with the server.
     * @param email The email for the user
     * @param password The password from the user
     * @returns An observable form type response
     */
    public login(email: string, password: string) : Observable<Response> {
        var creds = "email=" + email + "&password=" + password;

        return this._http.post(Config.apiEndpoint + "oauth/token", creds, {
            headers: this.headers
            });
    }
}