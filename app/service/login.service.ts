import {Injectable} from 'angular2/core';

import {User} from "../model/user";
import {ServiceResult} from '../model/service_result';

@Injectable()
export class LoginService{
  login(loginData: User): ServiceResult{
    var result: ServiceResult = {isOk:false};
    if(loginData && loginData.username==='admin' && loginData.password==='admin'){
      result.isOk = true;
      result.data = loginData;
      return result;
    }
    return result;
  }
}
