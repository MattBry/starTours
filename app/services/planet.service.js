import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular.http';
import { PLANETS } from './planets.js';
@Injectable()
export class PlanetService {
  constructor(){  }
  getPlanets() {
	return Promise.resolve(PLANETS);
  }
}