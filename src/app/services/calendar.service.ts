import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class CalendarService {
  generateCalendar(calendarDate: moment.Moment): moment.Moment[] {
    let calendarDays = [];
    let start = 0 - (calendarDate.clone().startOf('month').day() + (7 - moment.localeData().firstDayOfWeek())) % 7;
    let end = 41 + start; // iterator ending point

    for (let i = start; i <= end; i += 1) {
      let day = calendarDate.clone().startOf('month').add(i, 'days');
      calendarDays.push(day);
    }
    return calendarDays;
  }
}
