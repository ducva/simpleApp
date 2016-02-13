import {App, Platform, Storage, LocalStorage} from 'ionic-framework/ionic';

import {LoginPage} from './pages/login/login';
import {DashboardPage} from './pages/dashboard/dashboard';
import {AppSettings} from './app.settings';

// https://angular.io/docs/ts/latest/api/core/Type-interface.html

import {Type} from 'angular2/core';


@App({
  templateUrl: 'build/app.html',
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
  rootPage: Type = LoginPage;
  storage: Storage = new Storage(LocalStorage);

  constructor(platform: Platform) {
    if(this.storage.get(AppSettings.HAS_LOGGED_IN)){
      this.rootPage = DashboardPage;
    }
    platform.ready().then(() => {
      // The platform is now ready. Note: if this callback fails to fire, follow
      // the Troubleshooting guide for a number of possible solutions:
      //
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //
      // First, let's hide the keyboard accessory bar (only works natively) since
      // that's a better default:
      //
      // Keyboard.setAccessoryBarVisible(false);
      //
      // For example, we might change the StatusBar color. This one below is
      // good for dark backgrounds and light text:
      // StatusBar.setStyle(StatusBar.LIGHT_CONTENT)
    });
  }
}
