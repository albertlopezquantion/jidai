import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CalendarService } from '../services/calendar.service';
import * as moment from 'moment';
require('moment/locale/es');

@Component({
  selector: 'jidai-date-picker',
  template: `
  <div class="jidai-calendar-header">
    <div class="jidai-calendar-header-nav">
      <span class="nav-prev" (click)="prevMonth()"><</span>
    </div>
    <div class="jidai-calendar-header-content">
      <div class="content">
        <span class="jidai-month">{{calendarDate | moment: "MMMM"}}</span>
        <span class="jidai-year">{{calendarDate | moment: "YYYY"}}</span>
      </div>
    </div>
    <div class="jidai-calendar-header-nav">
      <span class="nav-next" (click)="nextMonth()">></span>
    </div>
  </div>
  <div class="jidai-calendar">
    <div class="jidai-calendar-row">
      <span class="jidai-weekday" *ngFor="let day of dayNames">{{ day }}</span>
    </div>
    <span class="jidai-day" *ngFor="let day of calendarDays" (click)="selectDay(day)"
      [ngClass]="{
        'jidai-today': day.isSame(today)
      }">
      {{ day | moment: 'D'}}
    </span>
  </div>
  `,
  styleUrls: ['./jidai_datepicker.component.css']
})
export class JidaiDatePickerComponent {
  @Input() locale: string;
  @Output() onDaySelected: EventEmitter<moment.Moment> = new EventEmitter<moment.Moment>();
  calendarDate = moment();
  dayNames: string[];
  calendarDays: moment.Moment[];
  today: moment.Moment;

  constructor(private calendarService: CalendarService) {
    moment.locale(this.locale);
    this.dayNames = moment.weekdaysShort(true);
    this.calendarDays = this.calendarService.generateCalendar(this.calendarDate);
    this.today = moment().startOf('date');
  }

  generateCalendar() {
    this.calendarDays = this.calendarService.generateCalendar(this.calendarDate);
  }

  prevMonth(): void {
    this.calendarDate = this.calendarDate.clone().subtract(1, 'M');
    this.generateCalendar();
  }

  nextMonth(): void {
    this.calendarDate = this.calendarDate.clone().add(1, 'M');
    this.generateCalendar();
  }

  selectDay(day: moment.Moment): void {
    this.onDaySelected.emit(day);
  }
}
