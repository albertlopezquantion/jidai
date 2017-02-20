import * as moment from 'moment';
import { Role } from '../enums/role';

export class DateRangeEvent {
  role: Role;
  date: moment.Moment;

  constructor(role, date) {
    this.role = role;
    this.date = date;
  }
}
