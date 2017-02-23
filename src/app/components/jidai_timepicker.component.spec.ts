import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { ComponentEmulator } from '../test/component_emulator';

import { CalendarService } from '../services/calendar.service';

import { JidaiTimePickerComponent } from './jidai_timepicker.component';

import * as moment from 'moment';

describe('JidaiTimePickerComponent UT', () => {
  let component: JidaiTimePickerComponent,
      fixture: ComponentFixture<JidaiTimePickerComponent>,
      hourDebugElements: Array<DebugElement>,
      minuteDebugElements: Array<DebugElement>,
      meridiemDebugElements: Array<DebugElement>,
      el: HTMLElement;

  beforeEach( async(() => {
    TestBed.configureTestingModule({
      declarations: [
        JidaiTimePickerComponent,
      ],
      providers: [
        CalendarService
      ]
    });

    fixture = TestBed.createComponent(JidaiTimePickerComponent);
    component = fixture.componentInstance;

  }));

  beforeEach(() => {
    fixture.detectChanges();
  });

  describe('JidaiTimePickerComponent time selection process.', () => {
    it('Should be offering the correct inputs and concluding the correct time.', () => {

      // HOUR SELECTION.
      hourDebugElements = fixture.debugElement.queryAll(By.css('li'));
      let expectedHoursArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

      expect (component).toBeDefined();
      expect(component.hours).toEqual(expectedHoursArray);

      component.hours.forEach( hour => {
        el = hourDebugElements[component.hours.indexOf(hour)].nativeElement;
        expect(el.textContent).toEqual(hour.toString());
      });

      ComponentEmulator.click(hourDebugElements[0]);
      fixture.detectChanges();

      expect(component.time.hour()).toEqual(0);

      // MERIDIEM SELECTION.
      meridiemDebugElements = fixture.debugElement.queryAll(By.css('.meridiem'));
      let expectedMeridiemArray = ['AM', 'PM'];

      expect(component.meridiems).toEqual(expectedMeridiemArray);

      component.meridiems.forEach( meridiem => {
        el = meridiemDebugElements[component.meridiems.indexOf(meridiem)].nativeElement;
        expect(el.textContent).toEqual(meridiem.toString());
      });

      ComponentEmulator.click(meridiemDebugElements[1]);
      fixture.detectChanges();

      expect(component.time.hour()).toEqual(12);

      // MINUTE SELECTION.
      spyOn(component.onTimeSelected, 'emit');
      minuteDebugElements = fixture.debugElement.queryAll(By.css('li'));
      let expectedMinutesArray = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60];

      expect(component.minutes).toEqual(expectedMinutesArray);

      component.minutes.forEach( minute => {
        el = minuteDebugElements[component.minutes.indexOf(minute)].nativeElement;
        expect(el.textContent).toEqual(minute.toString());
      });

      ComponentEmulator.click(minuteDebugElements[5]);
      fixture.detectChanges();

      expect(component.time.minute()).toEqual(30);
      expect(component.isHourSelection).toBe(true);
      expect(component.onTimeSelected.emit).toHaveBeenCalledWith(component.time);

    });
  });
});
