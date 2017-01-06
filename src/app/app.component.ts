import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Page1;

  pages: Array<{title: string, component: any, isRoot: boolean}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: Page1 , isRoot: true},
      { title: 'History', component: Page2, isRoot: false }
    ];

    console.log("Page1 :: ",Page1);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    console.log('open');
    this.nav.setRoot(page.component);
  }
  openPageNew(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if(page.isRoot){
      console.log('isRoot');
     // this.nav.setRoot(page.component);  
     console.log(this.nav.length());
     if(this.nav.length() > 1)
       this.nav.popToRoot(); 
    }
    else{
      console.log('!isRoot');
      // this.nav.setRoot(page.component);
      this.nav.push(page.component);  
    }
  }
}
