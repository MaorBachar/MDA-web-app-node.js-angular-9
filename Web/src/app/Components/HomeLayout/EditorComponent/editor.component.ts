import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { RequestService } from '../../../Services/ApiRequests/RequestService';
import { DataService } from '../../../Services/data.service';
import { hospitalNames, hospitalDictionary } from '../../../Helpers/hospitals';
import { SwPush } from '@angular/service-worker';
import swal from 'sweetalert2';


@Component({
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})

export class EditorComponent implements OnInit {
  readonly VAPID_PUBLIC_KEY =
  'BGWePznjSc7FG0r0HOjYM-TFfzt9mV3Yn-FCajyjCGaZKMTEcDi3sJVL2_e2ocjv3SD_EjMWq34f-jNCTKDGixI';

  @ViewChild('textArea', { read: ElementRef }) textArea: ElementRef;
  constructor(public requestService: RequestService, private swPush: SwPush, public dataService: DataService) {
  }

  ngAfterViewInit(): void {
    if (!this.dataService.currentMessage) {
      this.requestService.getAllMessages().then((res) => {
        this.dataService.currentMessage = res[0].sms_message;
        this.textArea.nativeElement.value = this.dataService.currentMessage;
      });
    } else {
      this.textArea.nativeElement.value = this.dataService.currentMessage;
    }
    this.loadMessageFromCache();
  }

  ngOnInit(): void {
  }

  subscribeToNotifications() {

    this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    })
      .then(sub => this.requestService.addPushSubscriber(sub).then(res => {
      }))
      .catch(err => console.error('Could not subscribe to notifications', err));
  }
  actionButton_1() {
    // tslint:disable-next-line:prefer-const
    let textArea = this.textArea.nativeElement;
    if (textArea.value.indexOf(':') !== -1) {
      const text = '*דוברות מד"א :*';
      textArea.value = text + textArea.value.substring(textArea.value.indexOf(':') + 1, textArea.value.length);
      this.updateText();
      const pos = textArea.value.indexOf(text) + text.length;
      this.setSelectionRange(textArea, pos, pos);
    }
    else if (textArea.value.length === 0) {
      const text = '*דוברות מד"א :* בהמשך לאירוע ';
      textArea.value = text;
      this.updateText();
      const pos = textArea.value.indexOf(text) + text.length;
      this.setSelectionRange(textArea, pos, pos);
    }
  }
  actionButton_2() {
    const textArea = this.textArea.nativeElement;
    if (textArea.value.indexOf(':') !== -1) {
      const text = '*דובר מד"א, זכי הלר :*';
      textArea.value = text + textArea.value.substring(textArea.value.indexOf(':') + 1, textArea.value.length);
      this.updateText();
      const pos = textArea.value.indexOf(text) + text.length;
      this.setSelectionRange(textArea, pos, pos);
    }
    else if (textArea.value.length === 0) {
      const text = '*דובר מד"א, זכי הלר :* בהמשך לאירוע ';
      textArea.value = text;
      this.updateText();
      const pos = textArea.value.indexOf(text) + text.length;
      this.setSelectionRange(textArea, pos, pos);
    }
  }
  actionButton_3() {
    const textArea = this.textArea.nativeElement;
    const text = 'חובשים ופראמדיקים של מד"א מעניקים במקום טיפול רפואי ';
    textArea.value = textArea.value.substring(0, textArea.selectionStart) + text + textArea.value.substring(textArea.selectionEnd);
    this.updateText();
    const pos = textArea.value.indexOf(text) + text.length;
    this.setSelectionRange(textArea, pos, pos);
  }
  actionButton_4() {
    let hospital = '';
    hospitalNames.forEach((hospitalName: string) => {
      if (this.textArea.nativeElement.value.indexOf(hospitalName) !== -1) {
        hospital = hospitalDictionary[hospitalName] || hospitalName;
      }
    });
    const textArea = this.textArea.nativeElement;
    const text = 'חובשים ופראמדיקים של מד"א מעניקים טיפול רפואי ומפנים לבי"ח ';
    textArea.value = textArea.value.substring(0, textArea.selectionStart) + text +
    hospital + textArea.value.substring(textArea.selectionEnd);
    this.updateText();
    const pos = textArea.value.indexOf(hospital) + hospital.length;
    this.setSelectionRange(textArea, pos, pos);
  }

  actionButton_5() {
    const textArea = this.textArea.nativeElement;
    const text = 'עדכון בהמשך ';
    textArea.value = textArea.value.substring(0, textArea.selectionStart) + text + textArea.value.substring(textArea.selectionEnd);
    this.updateText();
    const pos = textArea.value.indexOf(text) + text.length;
    this.setSelectionRange(textArea, pos, pos);
  }

  actionButton_6() {
    const textArea = this.textArea.nativeElement;
    const text = '*מדיווח ראשוני בלבד !!!* ';
    textArea.value = textArea.value.substring(0, textArea.selectionStart) + text + textArea.value.substring(textArea.selectionEnd);
    this.updateText();
    const pos = textArea.value.indexOf(text) + text.length;
    this.setSelectionRange(textArea, pos, pos);
  }
  actionButton_7() {
    const textArea = this.textArea.nativeElement;
    textArea.select();
    document.execCommand('copy');
  }
  actionButton_8() {
    const currentCaret = this.textArea.nativeElement.selectionEnd;
    this.textArea.nativeElement.value = this.textArea.nativeElement.value.substring(0, this.textArea.nativeElement.selectionEnd);
    this.updateText();
  }
  actionButton_9() {
    swal.fire({
      title: 'האם אתה בטוח?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3f51b5',
      cancelButtonColor: '#3f51b5',
      focusConfirm: false,
      focusCancel: false,
      cancelButtonText: 'לא',
      confirmButtonText: 'כן, מחק'
    }).then((res) => {
      if (res.value) {
        this.textArea.nativeElement.value = '';
        this.updateText();
      }
    });

  }
  updateText() {
    this.dataService.currentMessage = this.textArea.nativeElement.value;
    const time = new Date();
    time.setMinutes(time.getMinutes() + 10);
    document.cookie = encodeURI(this.dataService.currentMessage) + '; expires=' + time.toUTCString();
  }
  test() {
    const textArea = this.textArea.nativeElement;
    this.dataService.currentMessage = textArea.nativeElement.value;
  }
  // Set input caret position
  setSelectionRange(input: any, selectionStart: number, selectionEnd: number) {
    if (input.setSelectionRange) {
      input.focus();
      input.setSelectionRange(selectionStart, selectionEnd);
    } else if (input.createTextRange) {
      const range = input.createTextRange();
      range.collapse(true);
      range.moveEnd('character', selectionEnd);
      range.moveStart('character', selectionStart);
      range.select();
    }
  }

  loadMessageFromCache() {
    if (document.cookie !== '') {
      swal.fire({
        title: 'המערכת מזהה שיש הודעה שהתחלת לערוך , מעוניין לשחזר אותה? ',
        text: '(ההודעה תשמר במשך עשר דקות)',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3f51b5',
        cancelButtonColor: '#3f51b5',
        focusConfirm: false,
        focusCancel: false,
        cancelButtonText: 'לא, הצג הודעה חדשה',
        confirmButtonText: 'כן,שחזר'
      }).then((res) => {
        if (res.value) {
          this.textArea.nativeElement.value = decodeURI(document.cookie);
          this.dataService.currentMessage = decodeURI(document.cookie);
        }
      });
    }
  }



}
