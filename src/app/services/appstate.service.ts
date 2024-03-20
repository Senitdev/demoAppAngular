import { Injectable } from '@angular/core';
import { Comptes } from '../model/comptes';

@Injectable({
  providedIn: 'root'
})
export class AppstateService {

  constructor() { }
  compte!:Comptes;
}
