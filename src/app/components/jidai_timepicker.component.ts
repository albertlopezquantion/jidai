import { Component, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'jidai-timepicker',
  template: `
  <ul class="clock" *ngIf="isHourSelection">
    <li *ngFor="let hour of hours" (click)="selectHour(hour)">{{hour}}</li>
  </ul>
  <div *ngIf="isMerideanSelection">
    <span *ngFor="let meridean of merideans" (click)="selectMeridean(meridean)">{{meridean}}</span>
  </div>
  <div class="clock" *ngIf="isMinuteSelection">
    <li *ngFor="let minute of minutes" (click)="selectMinute(minute)">{{minute}}</li>
  </div>

  `,
  styleUrls: ['./jidai_timepicker.component.css']
})
export class JidaiTimePickerComponent {
  isHourSelection: boolean = true;
  isMerideanSelection: boolean = false;
  isMinuteSelection: boolean = false;
  hours: number[] = Array.from(Array(12).keys()).map(n => n + 1);
  minutes: number[] = Array.from(Array(12).keys()).map(n => (n + 1) * 5);
  merideans: string[] = ['AM', 'PM'];
  time: moment.Moment = moment();
  @Output() onTimeSelected: EventEmitter<moment.Moment> = new EventEmitter<moment.Moment>();

  selectHour(hour) {
    this.time.hour(hour - 1);
    this.isHourSelection = false;
    this.isMerideanSelection = true;
  }

  selectMeridean(meridean) {
    let hour = (meridean === 'AM') ? this.time.hour() : this.time.hour() + 12;
    this.time.hour(hour);
    this.isMerideanSelection = false;
    this.isMinuteSelection = true;
  }

  selectMinute(minute) {
    this.time.minute(minute);
    this.isMinuteSelection = false;
    this.isHourSelection = true;
    this.onTimeSelected.emit(this.time);
  }
}
