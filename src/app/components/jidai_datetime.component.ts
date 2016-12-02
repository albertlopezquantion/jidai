import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'jidai-datetime',
  template: `
  <input type="text" class="jidai-input" [(ngModel)]="selectedDate"/>
  <jidai-picker-container (onSelectedDate)="onSelectedDate($event)"></jidai-picker-container>
  `,
  styleUrls: ['./jidai_datetime.component.css']
})
export class JidaiDateTimeComponent {
  selectedDate: moment.Moment;
  onSelectedDate(date: moment.Moment) {
    this.selectedDate = date;
  }
}
