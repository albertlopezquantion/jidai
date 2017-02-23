import { Component, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'jidai-datetime',
  template: `
  <div style="position: relative" (jidaiClickOutside)="hideDateTimePicker(input)">
    <input type="text" class="jidai-input" [(ngModel)]="dateTime"
      (click)="showDateTimePicker($event)"/>
    <jidai-picker-container
      (onSelectedDate)="onSelectedDate($event)" *ngIf="isVisible" ></jidai-picker-container>
  </div>
  `,
  styleUrls: ['./jidai_datetime.component.css']
})
export class JidaiDateTimeComponent {
  @Input() dateTime: string;
  complementaryRangeDate: moment.Moment;
  isVisible: boolean = false;

  showDateTimePicker(event: Event) {
    this.isVisible = true;
  }

  hideDateTimePicker(event: Event) {
    this.isVisible = false;
  }

  onSelectedDate(date: moment.Moment) {
    this.dateTime = date.format('dddd, MMMM Do YYYY, h:mm:ss a');
    this.isVisible = false;
  }
}
