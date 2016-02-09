import {Page, NavParams, Storage, LocalStorage} from 'ionic-framework/ionic';

import {User} from '../../model/user';
@Page({
  templateUrl: 'build/pages/home/home.html',
})
export class HomePage {
  public userData;
  private storage = new Storage(LocalStorage);
  constructor(private navParams: NavParams) {
    this.storage.getJson('userInfo').then(data => {
      this.userData = data[0];
    });
  }
}
