import {Page, Storage, LocalStorage} from 'ionic-framework/ionic';

import {User} from '../../model/user';
@Page({
  templateUrl: 'build/pages/home/home.html',
})
export class HomePage {
  public userData;
  private storage = new Storage(LocalStorage);
  constructor() {
    this.storage.getJson('userInfo').then(data => {
      this.userData = data[0];
    });
  }
}
