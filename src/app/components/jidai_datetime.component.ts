import { Component, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'jidai-datetime',
  template: `
  <div style="position: relative">
  <input type="text" class="jidai-input" [(ngModel)]="dateTime" (focus)="togglePopup()" (focusout)="togglePopup()" disabled/>
  <jidai-picker-container *ngIf="popupVisible" (onSelectedDate)="onSelectedDate($event)"></jidai-picker-container>
  </div>
  `,
  styleUrls: ['./jidai_datetime.component.css']
})
export class JidaiDateTimeComponent {
  @Input() dateTime: string;
  popupVisible: boolean = true;

  togglePopup() {
    this.popupVisible = !this.popupVisible;
  }

  onSelectedDate(date: moment.Moment) {
    this.dateTime = date.format('dddd, MMMM Do YYYY, h:mm:ss a');
  }
}
