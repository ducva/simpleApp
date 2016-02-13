import {Page, NavParams, NavController, Events} from 'ionic-framework/ionic';

import {User} from '../../model/user';

import {LoginPage} from '../login/login';

import {HomePage} from '../home/home';
import {OrdersPage} from '../orders/orders';

@Page({
  templateUrl:'build/pages/dashboard/dashboard.html'
})

export class DashboardPage {
  userData : User;
  homeTabRoot;
  orderTabRoot;
  constructor(private navParams : NavParams, private navController: NavController, private events: Events){
    this.homeTabRoot = HomePage;
    this.orderTabRoot = OrdersPage;
  }

  logout(){
    this.events.publish('user:logout');
    this.navController.setRoot(LoginPage);
  }
}
