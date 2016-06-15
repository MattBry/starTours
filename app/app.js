import {Component, ViewChild} from '@angular/core';
import {ionicBootstrap, Platform, MenuController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {LoginPage} from './pages/log-in/log-in';
import {ListPage} from './pages/list/list';
import { HTTP_PROVIDERS } from '@angular/http';
import { HTTP_BINDINGS } from '@angular/http';
import { PlanetService } from './services/planet.service';

@Component({
  templateUrl: 'build/app.html',
  queries: {
    nav: new ViewChild('content')
  }
})
class MyApp {
  static get parameters() {
    return [[Platform], [MenuController]];
  }

  constructor(platform, menu) {
    this.platform = platform;
    this.menu = menu;
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Log out', component: LoginPage },
      { title: 'Destination list', component: ListPage }
    ];

    // make HelloIonicPage the root (or first) page
    this.rootPage = LoginPage;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}

ionicBootstrap(MyApp, [HTTP_PROVIDERS, HTTP_BINDINGS, PlanetService]);
