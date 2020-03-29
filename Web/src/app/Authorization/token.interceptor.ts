import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { AuthService } from './Auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public auth: AuthService, private router: Router) {
  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.router.url.includes('auth')) {
      request = request.clone({
        setHeaders: {
          Authorization: localStorage.getItem('mda-token')
        }
      });
      return next.handle(request);
    }
    else{
      return next.handle(request);
    }
  }
}
