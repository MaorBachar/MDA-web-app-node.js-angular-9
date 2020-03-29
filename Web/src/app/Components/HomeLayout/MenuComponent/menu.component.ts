import { Component, OnInit} from '@angular/core';
import { RequestService } from '../../../Services/ApiRequests/RequestService';
import { Router } from '@angular/router';
import { DataService } from '../../../Services/data.service';



@Component({
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {
  panelOpenState = false;
  constructor(public requestService: RequestService , public dataService: DataService, private router: Router) {
 
  }

  ngOnInit(): void {
  }
  sendCurrentMessageByWhatsApp(){
    window.open('whatsapp://send?text='+encodeURI(this.dataService.currentMessage));
    this.panelOpenState = false;
  }

  changeRoute(route:string){
    this.router.navigateByUrl(route);
  }

}
