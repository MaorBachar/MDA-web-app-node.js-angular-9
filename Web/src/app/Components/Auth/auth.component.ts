import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../Services/data.service';
import { RequestService } from '../../Services/ApiRequests/RequestService';
import { UserDataModel } from '../../DataModels/UserDataModel';
import {MatSnackBar} from '@angular/material/snack-bar';



@Component({
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})

export class AuthComponent implements OnInit {
  auth: number; // 0 === register , 1 === login
  constructor(public requestService: RequestService, public snackBar: MatSnackBar, private route: ActivatedRoute, private router: Router) {
    this.route.snapshot.paramMap.get('auth') === 'register' ? this.auth = 0 : this.auth = 1;
  }
  error: string;

  user: UserDataModel = new UserDataModel();

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    if (this.auth) {
      this.requestService.loginUser(this.user).then((res) => {
        if (res.token) {
          localStorage.setItem('mda-token', 'Bearer ' + res.token);
          this.router.navigateByUrl('/');
        }
      }).catch((err) => {
        this.error = err.error.error;
      });
    } else {
      this.requestService.registerUser(this.user).then((res) => {
        form.reset();
        this.snackBar.open('הבקשה נרשמה במערכת', 'סגור', { duration: 2000 });
        console.log(res);
        this.router.navigateByUrl('/auth/login');
        this.auth =1;
    
      }).catch((err) => {
        this.error = err.error.error;
      });
    }
  }

  routeRegister() {
    this.router.navigateByUrl('/auth/register');
    this.auth = 0;

  }
}
