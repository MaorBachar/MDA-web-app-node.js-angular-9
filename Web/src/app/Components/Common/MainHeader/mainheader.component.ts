import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as myGlobals from '../../../Services/globals';
import { DataService } from '../../../Services/data.service';
import * as io from 'socket.io-client';


@Component({
  selector: 'main-header',
  templateUrl: './mainheader.component.html',
  styleUrls: ['./mainheader.component.scss']
})
export class MainHeaderComponent implements OnInit {
  socket:any;
  numberOfOnlineUsers: number =0;
  globals: any
  constructor(public dataService: DataService, private router: Router) {
    this.socket = io();
  }

  public ngOnInit(): void {
    this.socket.on('numberOfOnlineUsers', (numberOfOnlineUsers:any)=>{
      this.numberOfOnlineUsers = numberOfOnlineUsers
    })
    this.globals = myGlobals;
  }
  toggleMenu(){
    this.dataService.toggleMenu=!this.dataService.toggleMenu;
    this.dataService.toggleMenu ? this.router.navigate(['menu']) : this.router.navigate(['']);
  }
}
