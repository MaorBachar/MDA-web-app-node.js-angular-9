import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../Services/ApiRequests/RequestService';



@Component({
  selector: 'home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss']
})

export class HomeLayoutComponent implements OnInit {
  constructor(public requestService: RequestService) {
  }

  ngOnInit(): void {
  }


}
