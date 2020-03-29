import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { RequestService } from '../Services/ApiRequests/RequestService';

@Injectable()
export class AuthService {
  jwtHelper: JwtHelperService = new JwtHelperService;
  token: string;
  isLoggedIn: boolean = false;
  isError: boolean = false;
  // store the URL so we can redirect after logging in
  constructor(private router: Router, public requestService: RequestService, ) {
  }

  // ...
  public isAuthenticated(): boolean {
    this.token = localStorage.getItem('mda-token');
    // Check whether the token is expired and return
    // true or false
    return !this.jwtHelper.isTokenExpired(this.token);
  }

}