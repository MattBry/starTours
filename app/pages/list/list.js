import {Component, Inject} from "@angular/core";
import {NavController, NavParams} from 'ionic-angular';
import {ItemDetailsPage} from '../item-details/item-details';
import {PlanetService} from '../../services/planet.service'
import { Http } from '@angular/http';
@Component({
  templateUrl: 'build/pages/list/list.html',
  providers: [PlanetService]
})
export class ListPage {
  static get parameters() {
    return [[NavController], [PlanetService]];
  }
  constructor(nav, planetService) {
    this.nav = nav;
    this.planets = [];
    this.planetService = planetService;
  }

  itemTapped(event, planet) {
    console.log("planet tapped")
     this.nav.push(ItemDetailsPage, {
       planet: planet
     });
  }
  ngOnInit() {
    this.planetService.getPlanets().then(planets => this.planets = planets);
  }
}
