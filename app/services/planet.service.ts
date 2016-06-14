import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class PlanetService {
  constructor(public http: Http){}
  getPlanets() {
    this.http.get('http://swapi.co/api/planets');
  }
}