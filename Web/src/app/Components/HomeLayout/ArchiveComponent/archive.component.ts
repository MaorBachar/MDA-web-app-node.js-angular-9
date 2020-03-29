import { Component, OnInit , ViewChild , ElementRef } from '@angular/core';
import { RequestService } from '../../../Services/ApiRequests/RequestService';
import { DataService } from '../../../Services/data.service';
import { Router } from '@angular/router';
import * as moment from 'moment';
@Component({
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})

export class ArchiveComponent implements OnInit {
  @ViewChild('test') private test: ElementRef;

  constructor(public requestService: RequestService, public dataService: DataService,  private router: Router) {
  }
  messages: any = [];
  messageArr: any = [];
  ngOnInit(): void {
    this.requestService.getAllMessages().then((res) => {
      console.log(res);
      this.messages = res;
      this.messages = this.messages.reverse();
      console.log(this.messages);
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.scrollToBottom();
    }, 1000);

  }

  scrollToBottom(): void {
    try {
      window.scrollTo(0, this.test.nativeElement.scrollHeight);
    } catch (err) { }
}

  selectMessage(index: number) {
    if (this.messageArr.indexOf(index) !== -1) {
      this.messageArr.splice(this.messageArr.indexOf(index), 1);
      this.messages[index].selected = false;
    } else {
      this.messageArr.push(index);
      this.messages[index].selected = true;

    }
  }

  mergeMessages() {
    this.dataService.currentMessage = '';
    this.messageArr.forEach((index: number) => {
      this.dataService.currentMessage = this.dataService.currentMessage.concat(this.messages[index].sms_message);
    });
    this.router.navigate(['/']);
    this.dataService.toggleMenu = false;
  }

  dateFormat(date: any){
    date = moment(date).toDate();
    return moment(date).format('HH:mm:ss DD-MM-YYYY');

  }


}
