import { Injectable, Inject } from '@angular/core';
import { PLANETS } from './planets';

@Injectable()
export class PlanetService {
  getPlanets() {
    return Promise.resolve(PLANETS);
  }
}