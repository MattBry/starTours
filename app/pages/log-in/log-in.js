import {Component} from "@angular/core";
import {NavController, NavParams} from 'ionic-angular';
import {ListPage} from '../list/list';

@Component({
  templateUrl: 'build/pages/log-in/log-in.html'
})
export class LoginPage {
  static get parameters() {
    	return [[NavController], [NavParams]];
  }
  constructor(nav, NavParams) {
  	this.nav = nav;
  }
  signIn(event) {
     this.nav.push(ListPage);
  }
}
