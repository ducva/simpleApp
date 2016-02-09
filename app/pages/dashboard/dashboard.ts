import {Page, NavParams, NavController, Events} from 'ionic-framework/ionic';

import {User} from '../../model/user';

import {LoginPage} from '../login/login';

import {HomePage} from '../home/home';

@Page({
  templateUrl:'build/pages/dashboard/dashboard.html'
})

export class DashboardPage {
  public userData : User;
  public homeTabRoot;
  constructor(private navParams : NavParams, private navController: NavController, private events: Events){
    this.homeTabRoot = HomePage;
  }

  logout(){
    this.events.publish('user:logout');
    this.navController.setRoot(LoginPage);
  }
}
