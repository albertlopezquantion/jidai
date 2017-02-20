import { Injectable } from '@angular/core';
import { Observer, Observable } from 'rxjs';
import * as moment from 'moment';

import { DateRangeEvent } from '../events/date_range_event';
import { Role } from '../enums/role';

@Injectable()
export class DateTimeService {
  dateRangeSet$: Observable<DateRangeEvent>;
  private _dateRangeSetObserver: Observer<DateRangeEvent> = null;

  constructor() {
    this.dateRangeSet$ = new Observable<DateRangeEvent>(observer => {
      this._dateRangeSetObserver = observer;
    });
  }

  setRangeDate(role: Role, date: moment.Moment) {
    this._dateRangeSetObserver.next(new DateRangeEvent(role, date));
  }
}
