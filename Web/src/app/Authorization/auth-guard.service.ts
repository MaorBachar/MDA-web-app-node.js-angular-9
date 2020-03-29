import { Injectable } from '@angular/core';
import { Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './Auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthGuardService implements CanActivate {
    jwtHelper: JwtHelperService = new JwtHelperService;
    token: string;

    constructor(public router: Router, private authAService: AuthService) {
    }

    // canActivate(): boolean {
    //     if (!this.token || this.jwtHelper.isTokenExpired(this.token)) {
    //         this.router.navigate(['login']);
    //         return false;
    //     }
    //     return true;
    // }
    canActivate(): boolean {
        return this.checkLogin();
    }

    checkLogin(): boolean {
        if (localStorage.getItem('mda-token')) {
            if (this.authAService.isAuthenticated()) {
                this.authAService.isLoggedIn = true;
                return true;
            }
        }
        this.router.navigate(['/auth/login']);
        return false;
    }
}
