
import { Injectable } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';
import { Router } from '@angular/router';
import { RequestService } from './ApiRequests/RequestService';




//


@Injectable()
export class DataService {
  currentMessage: string;
  toggleMenu = false;

  //
  // ─── MEMBERS ────────────────────────────────────────────────────────────────────
  //


  constructor(private _cookieService: CookieService, private router: Router, private requesService: RequestService) {


 // ─── INIT SHARED DATA ────────────────────────────────────────────────────────────────
//
  }


  

  //
  // ─── REQUESTS ───────────────────────────────────────────────────────────────────
  //


  //
  // ───────────────────────────────────────────────────────────────── REQUESTS ─────
  //


  //Error
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


  //
  // ─── LOCAL STORAGE ──────────────────────────────────────────────────────────────
  //


  /**
   * recive a key and return the data from storage
   * @param {string} key 
   * @returns {any}
   */
  private getDataFromStorage(key: string): any {
    let data = localStorage.getItem(key);
    return data;
  }
  /**
   * Recive key and data. save it to storage
   * @param {string} key 
   * @param {any} data 
   */
  private setDataToStorage(key: string, data: any): any {
    localStorage.removeItem(key);
    localStorage.setItem(key, JSON.stringify(data));
  }


}
