import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { MomentPipe } from '../pipes/moment.pipe';

import { CalendarService } from '../services/calendar.service';

import { JidaiDatePickerComponent } from './jidai_datepicker.component';

import * as moment from 'moment';

fdescribe('JidaiDatePickerComponent UT', () => {
  let component: JidaiDatePickerComponent,
      fixture: ComponentFixture<JidaiDatePickerComponent>,
      calendarService: CalendarService,
      yearDebugElement: DebugElement,
      monthDebugElement: DebugElement,
      weekdayDebugElements: Array<DebugElement>,
      dayDebugElements: Array<DebugElement>,
      yearEl: HTMLElement,
      monthEl: HTMLElement,
      weekdayEl: HTMLElement,
      dayEl: HTMLElement,
      expectedDayNames: Array<string>,
      fakeCalendarDays: Array<moment.Moment>;

  beforeEach( async(() => {
    TestBed.configureTestingModule({
      declarations: [
        JidaiDatePickerComponent,
        MomentPipe
      ],
      providers: [
        // { provide: CalendarService, useValue: { generateCalendar: function() { }} }
        CalendarService
      ],
      imports: [  ]
    });

    fixture = TestBed.createComponent(JidaiDatePickerComponent);
    component = fixture.componentInstance;

    calendarService = fixture.debugElement.injector.get(CalendarService);
  }));

  beforeEach(() => {
    expectedDayNames = ['lun.', 'mar.', 'mié.', 'jue.', 'vie.', 'sáb.', 'dom.'];
    fakeCalendarDays = [moment('20170101', 'YYYYMMDD')];
    spyOn(moment, 'locale');
    spyOn(calendarService, 'generateCalendar').and.returnValue(fakeCalendarDays);
    component.calendarDate = fakeCalendarDays[0];
    component.locale = 'fake_locale';

    component.constructor(calendarService);
    fixture.detectChanges();

    yearDebugElement = fixture.debugElement.query(By.css('.jidai-year'));
    monthDebugElement = fixture.debugElement.query(By.css('.jidai-month'));
    weekdayDebugElements = fixture.debugElement.queryAll(By.css('.jidai-weekday'));
    dayDebugElements = fixture.debugElement.queryAll(By.css('.jidai-day'));

    yearEl = yearDebugElement.nativeElement;
    monthEl = monthDebugElement.nativeElement;
    weekdayEl = weekdayDebugElements[0].nativeElement;
    dayEl = dayDebugElements[0].nativeElement;
  });

  describe('JidaiDatePickerComponent.constructor', () => {
    it('Should be called when JidaiDatePickerComponent is initialized', () => {
      expect (component).toBeDefined();
      expect (component.constructor).toBeDefined();
      expect (moment.locale).toHaveBeenCalledWith('fake_locale');
      expect(component.dayNames).toEqual(expectedDayNames);
      expect(component.calendarDays).toEqual(fakeCalendarDays);
      expect(yearEl.textContent).toEqual('2017');
      expect(monthEl.textContent).toEqual('febrero');
      // expect(dayEl.textContent).toEqual('1');
    });
  });
});
