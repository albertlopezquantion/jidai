import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'jidai-picker-container',
  template: `
  <div class="jidai-container">
  <div class="jidai-container-arrow"></div>
    <div class="jidai-container-content">
      <jidai-date-picker locale="es" *ngIf="isDateSelection" (onDaySelected)="onDaySelected($event)">
      </jidai-date-picker>
      <jidai-timepicker locale="es" *ngIf="isTimeSelection" (onTimeSelected)="onTimeSelected($event)">
      </jidai-timepicker>
    </div>
  </div>
  `,
  styleUrls: ['./picker_container.component.css']
})
export class PickerContainerComponent {
  @Input() locale: string;
  @Output() onSelectedDate: EventEmitter<moment.Moment> = new EventEmitter<moment.Moment>();
  dateTime: moment.Moment;
  isDateSelection: boolean = true;
  isTimeSelection: boolean = false;
  onDaySelected(date: moment.Moment) {
    this.dateTime = date;
    this.isDateSelection = false;
    this.isTimeSelection = true;
  }
  onTimeSelected(time: moment.Moment) {
    this.dateTime.hour(time.hour());
    this.dateTime.minute(time.minute());
    this.onSelectedDate.emit(this.dateTime);
    this.isTimeSelection = false;
    this.isDateSelection = true;
  }
}
