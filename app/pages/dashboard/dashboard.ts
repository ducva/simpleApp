import {Page, NavParams} from 'ionic-framework/ionic';

import {User} from '../../model/user';

@Page({
  templateUrl:'build/pages/dashboard/dashboard.html'
})

export class DashboardPage {
  public userData : User;
  constructor(private navParams: NavParams){
    this.userData = navParams.get('data');
  }
}
