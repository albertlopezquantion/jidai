import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'jidai-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dateTime: moment.Moment;
}
