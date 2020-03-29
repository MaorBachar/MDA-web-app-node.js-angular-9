import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { RequestService } from '../../../../Services/ApiRequests/RequestService';
import { EmailDataModel } from '../../../../DataModels/EmailDataModel';
import { DataService } from '../../../../Services/data.service';


@Component({
  selector: 'email-component',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})

export class EmailComponent implements OnInit {
  @Output() closeMenu = new EventEmitter();
  @ViewChild("emailsList", { read: ElementRef }) emailsList: ElementRef;
  emailListDetails: EmailDataModel = new EmailDataModel();
  addressID: string[] = ["doaligroups1825", "doaligroups1867", "doaligroups1828", "doaligroups1824", "doaligroups1826", "doaligroups1827", "doaligroups1829", "doaligroups1830", "doaligroups1832", "doaligroups1823", "doaligroups1831", "doaligroups1851", "doaligroups1902", "doaligroups1907", "doaligroups1919", "doaligroups1932"];
  addresseesList: string[] = [];
  constructor(public requestService: RequestService, public dataService: DataService) {
  }

  ngOnInit(): void {
  }
  remove(txt: any, char: any, afterchar: any) {
    while (txt.indexOf(char) !== -1) {
      txt = txt.replace(char, afterchar);
    }
    return txt;
  }
  subject(txt: any) {
    if (this.dataService.currentMessage.indexOf("ת.ד.") !== -1) {
      console.log("ת.ד.");
      txt = this.dataService.currentMessage.replace("ת.ד.", 'תאונת דרכים');
    }
    if (this.dataService.currentMessage.indexOf("ת.ד") !== -1) {
      console.log("ת.ד");
      txt = this.dataService.currentMessage.replace("ת.ד", 'תאונת דרכים');
    }
    return this.remove(txt, "*", "").substring(0, this.remove(txt, "*", "").indexOf(".") + 1);
  }
  submit() {
    this.addresseesList = [];
    let arr = Array.from(this.emailsList.nativeElement.children);
    arr.forEach((element: any, index: number) => {
      if (element.classList[element.classList.length - 1] === 'mat-checkbox-checked') {
        this.addresseesList.push(this.addressID[index] + '@robot.zapier.com;');
      }
    });

    console.log(this.addresseesList);
    location.href = "mailto:?bcc=" + this.addresseesList + "&body=" + this.remove(encodeURI(this.dataService.currentMessage), "*", "") + "&subject=" + this.subject(encodeURI(this.dataService.currentMessage));
    this.closeMenu.emit();

  }

}
