import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'jidai-picker-container',
  template: `
  <div class="jidai-container">
    <jidai-date-picker locale="es" (onDaySelected)="onDaySelected($event)">
    </jidai-date-picker>
  </div>
  `,
  styleUrls: ['./picker_container.component.css']
})
export class PickerContainerComponent {
  @Input() locale: string;
  @Output() onSelectedDate: EventEmitter<moment.Moment> = new EventEmitter<moment.Moment>();
  onDaySelected(day: moment.Moment) {
    this.onSelectedDate.emit(day);
  }
}
