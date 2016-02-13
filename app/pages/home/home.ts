import {Page, Storage, LocalStorage} from 'ionic-framework/ionic';

import {User} from '../../model/user';
import {AppSettings} from '../../app.settings';

@Page({
  templateUrl: 'build/pages/home/home.html',
})
export class HomePage {
  public userData;
  private storage = new Storage(LocalStorage);
  constructor() {
    this.storage.getJson(AppSettings.USER_INFO).then(data => {
      this.userData = data[0];
    });
  }
}
