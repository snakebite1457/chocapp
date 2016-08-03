import {User} from './user/user';
import {getString, setString} from "application-settings";

export class Config {
  
  static user: User;
  static apiEndpoint: string = "https://localhost:433/" 

  static get token():string {
    return getString("token");
  }
  static set token(theToken: string) {
    setString("token", theToken);
  }
  static hasActiveToken() {
    return !!getString("token");
  }
  static invalidateToken() {
    Config.token = "";
  }
}