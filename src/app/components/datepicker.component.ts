import { Component, Input } from '@angular/core';
import { DateTimeService } from '../services/datetime.service';
import * as moment from 'moment';
require('moment/min/locales.min');

@Component({
  selector: 'jidai-date-picker',
  template: `
  <div class="jidai-calendar">
    <div class="jidai-calendar-row">
      <span class="jidai-weekday" *ngFor="let day of dayNames">{{ day }}</span>
    </div>
    <span class="jidai-day"
      *ngFor="let day of calendarDays">
      {{ day | moment: 'D'}}
    </span>
  </div>
  `,
  styleUrls: ['./datepicker.component.css']
})
export class DatePickerComponent {
  @Input() locale: string;
  calendarDate = moment();
  dayNames: string[];
  calendarDays: moment.Moment[];

  constructor(private dateTimeService: DateTimeService) {
    moment.locale(this.locale);
    this.dayNames = moment.weekdaysShort(true);
    this.calendarDays = dateTimeService.generateCalendar(this.calendarDate);
  }
}
