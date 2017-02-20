import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Role } from '../enums/role';
import { DateTimeService } from '../services/datetime.service';

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
export class JidaiDateTimeComponent implements OnInit {
  @Input() dateTime: string;
  @Input() role: Role;
  complementaryRangeDate: moment.Moment;
  popupVisible: boolean = true;

  constructor(private dateTimeService: DateTimeService) { }

  ngOnInit() {
    this.dateTimeService.dateRangeSet$
      .filter(event => event.role === this.role)
      .subscribe(event => this.complementaryRangeDate = event.date);
  }

  togglePopup() {
    this.popupVisible = !this.popupVisible;
  }

  onSelectedDate(date: moment.Moment) {
    this.dateTime = date.format('dddd, MMMM Do YYYY, h:mm:ss a');
  }
}
