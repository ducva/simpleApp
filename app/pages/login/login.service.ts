import {Injectable} from 'angular2/core';

import {Events, Storage, LocalStorage} from 'ionic-framework/ionic';
import {User} from "../../model/user";
import {ServiceResult} from '../../model/service_result';
import {AppSettings} from '../../app.settings';

// Tell TypeScript that Firebase is a global object.
declare var Firebase;


@Injectable()
export class LoginService{
  private storage = new Storage(LocalStorage);
  private HAS_LOGGED_IN = 'hasLoggedIn';
  private USER ='userInfo';

  constructor(private events: Events){
    var userLoggedInHandler = (userInfo) => {
      this.onLoggedIn(userInfo);
    };
    events.subscribe('user:login', userLoggedInHandler);

    var userLoggedOutHandler = () => {
      this.onLoggedOut();
    }
    events.subscribe('user:logout', userLoggedOutHandler);

  }

  onLoggedOut(){
    this.storage.remove(AppSettings.HAS_LOGGED_IN);
    this.storage.remove(AppSettings.USER_INFO);
  }
  onLoggedIn(userInfo){
    this.storage.set(AppSettings.HAS_LOGGED_IN, true);
    this.storage.setJson(AppSettings.USER_INFO, userInfo);
  }

  login(login:User){
    var result: ServiceResult = {isOk:false};
    var ref = new Firebase(AppSettings.FIREBASE_ENDPOINT);
    return ref.authWithPassword({
       email    : login.username,
       password : login.password
     }, function(error, authData){
       if(error){
         return result;
       }
       else{
         return authData;
       }
     });
  }
}
