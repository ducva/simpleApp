import {Page, NavController, NavParams} from 'ionic-framework/ionic';

import {User} from '../../model/user';

import {LoginPage} from '../login/login';

@Page({
  templateUrl:'build/pages/dashboard/dashboard.html'
})

export class DashboardPage {
  public userData : User;
  constructor(private navParams: NavParams, private navController: NavController){
    this.userData = navParams.get('data');
  }

  logout(){
    this.navController.setRoot(LoginPage);
  }
}
