import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'jidai-datetime',
  template: `
  <div style="position: relative" (clickOutside)="hideDateTimePicker(input)"
    [clickOutsideExceptions]="[input, nativeElement]">
    <input type="text" class="jidai-input" [(ngModel)]="dateTime"
    (focus)="showDateTimePicker($event)" #input/>
    <jidai-picker-container
     (onSelectedDate)="onSelectedDate($event)" #dateTimePicker></jidai-picker-container>
  </div>
  `,
  styleUrls: ['./jidai_datetime.component.css']
})
export class JidaiDateTimeComponent implements AfterViewInit {
  @ViewChild('dateTimePicker') dateTimePicker;
  @Input() dateTime: string;
  complementaryRangeDate: moment.Moment;
  isVisible: boolean = true;
  nativeElement;

  ngAfterViewInit() {
    this.nativeElement = this.dateTimePicker.nativeElement;
  }

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
