import {Page, NavController, Alert, Storage, LocalStorage, Events} from 'ionic-framework/ionic';

import {User} from "./../../model/user";
import {ServiceResult} from '../../model/service_result';

import {LoginService} from './login.service';
import {DashboardPage} from '../dashboard/dashboard';

@Page({
  templateUrl: 'build/pages/login/login.html',
  providers: [LoginService]
})
export class LoginPage {
  // declare login interface for login data.
  public login: User = {};
  private submitted = false;

  constructor(private _loginService: LoginService,  private navigator: NavController, private events: Events) {
  }

  onLogin(form){
    this.submitted = true;
    if(form.valid){
      this.login = form.value;
      var result = this._loginService.login(this.login);
      var that = this;
      result.then(function(response){
        if(response){
            response.username = that.login.username;

            that.events.publish('user:login', response);
            that.navigator.setRoot(DashboardPage, {'data':response});
        }
      }, function(error){
        let alert = Alert.create({
          title: 'Login!',
          subTitle: 'Invalid username/password',
          buttons: ['Ok']
        });
        that.navigator.present(alert);
      });
    }
  }
}
