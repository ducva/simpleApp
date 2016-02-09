import {Injectable} from 'angular2/core';

import {User} from "../model/user";
import {ServiceResult} from '../model/service_result';

import * as Firebase from 'firebase';

@Injectable()
export class LoginService{
  private firebaseUrl = "https://luminous-torch-5124.firebaseio.com";

  login(login:User): Promise{
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
