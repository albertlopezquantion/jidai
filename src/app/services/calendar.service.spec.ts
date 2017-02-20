import { inject, TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting }
  from '@angular/platform-browser-dynamic/testing';

import * as moment from 'moment';

import { CalendarService } from './calendar.service';

fdescribe('CalendarService UT', () => {

  beforeEach(() => {
    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting())
      .configureTestingModule({
        providers: [
          CalendarService,
        ]
    });
  });

  describe('CalendarService.constructor(http)', () => {
    it('Creates a new CalendarService instance',
    inject([CalendarService],
    (calendarService: CalendarService) => {
      expect(calendarService).toBeDefined();
    }));
  });

  describe('CalendarService.generateCalendar', () => {
    it('Should generate all the days that visually fill a month in the calendar.',
      inject([CalendarService],
      (calendarService: CalendarService) => {
        let expectedCalendarDays: moment.Moment[] = [];

        // expectedCalendarDays.push(moment('20170129', 'YYYYMMDD'));
        expectedCalendarDays.push(moment('20170130', 'YYYYMMDD'));
        expectedCalendarDays.push(moment('20170131', 'YYYYMMDD'));

        let februaryStart = 20170201;
        for (let i = 0; i <= 27; i++) {
          let newDate = februaryStart + i;
          expectedCalendarDays.push(moment(newDate.toString(), 'YYYYMMDD'));
        }

        let marchStart = 20170301;
        for (let i = 0; i <= 11; i++) {
          let newDate = marchStart + i;
          expectedCalendarDays.push(moment(newDate.toString(), 'YYYYMMDD'));
        }

        expectedCalendarDays = expectedCalendarDays.map(expectedDay => expectedDay.utc());
        let fakeDate: moment.Moment = moment('20170201', 'YYYYMMDD');
        let result = calendarService.generateCalendar(fakeDate).map(day => day.utc());

        expect(JSON.stringify(result)).toEqual(JSON.stringify(expectedCalendarDays));
    }));
  });
});
