import {Page, NavController, Alert} from 'ionic-framework/ionic';

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
      this.navigator.setRoot(DashboardPage, {'data':result.data});
    }
    else{
      let alert = Alert.create({
        title: 'Login!',
        subTitle: 'Invalid username/password',
        buttons: ['Ok']
      });
      this.navigator.present(alert);
      console.debug('Login failed');
    }
  }
}
