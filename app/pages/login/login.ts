import {Page, NavController} from 'ionic-framework/ionic';

import {User} from "./../../model/user";
import {ServiceResult} from '../../model/service_result';

import {LoginService} from '../../service/login.service';
import {DashboardPage} from '../dashboard/dashboard';

@Page({
  templateUrl: 'build/pages/login/login.html',
  providers: [LoginService]
})
export class LoginPage {
  public loginData: User = {username:'', password:''};

  constructor(private _loginService: LoginService,  private navigator: NavController) {

  }

  login(){
    var result:ServiceResult = this._loginService.login(this.loginData);
    if(result && result.isOk){
      this.navigator.push(DashboardPage, {'data':result.data});
    }
    else{
      console.debug('Login failed');
    }
  }
}