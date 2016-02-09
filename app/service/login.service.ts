import {Injectable} from 'angular2/core';

import {Events, Storage, LocalStorage} from 'ionic-framework/ionic';
import {User} from "../model/user";
import {ServiceResult} from '../model/service_result';

import * as Firebase from 'firebase';

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

  private firebaseUrl = "https://luminous-torch-5124.firebaseio.com";

  onLoggedOut(){
    this.storage.remove(this.HAS_LOGGED_IN);
    this.storage.remove(this.USER);
  }
  onLoggedIn(userInfo){
    this.storage.set(this.HAS_LOGGED_IN, true);
    this.storage.setJson(this.USER, userInfo);
  }

  login(login:User){
    var result: ServiceResult = {isOk:false};
    var ref = new Firebase(this.firebaseUrl);
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
