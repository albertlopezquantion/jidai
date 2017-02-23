import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { CalendarService } from '../services/calendar.service';

import { JidaiDatePickerComponent } from './jidai_datepicker.component';
import { JidaiTimePickerComponent } from './jidai_timepicker.component';
import { PickerContainerComponent } from './picker_container.component';

import * as moment from 'moment';

describe('PickerContainerComponent UT', () => {
  let component: PickerContainerComponent,
      fixture: ComponentFixture<PickerContainerComponent>,
      datePickerDebugElement: DebugElement,
      timePickerDebugElement: DebugElement;

  beforeEach( async(() => {
    TestBed.overrideComponent(JidaiTimePickerComponent, {
      set: {
        template: `<div> #Fake Template </div>`
      }
    }).overrideComponent(JidaiDatePickerComponent, {
      set: {
        template: `<div> #Fake Template </div>`
      }
    })
    .configureTestingModule({
      declarations: [
        PickerContainerComponent,
        JidaiTimePickerComponent,
        JidaiDatePickerComponent
      ],
      providers: [
        CalendarService
      ]
    });

    fixture = TestBed.createComponent(PickerContainerComponent);
    component = fixture.componentInstance;

  }));

  beforeEach(() => {
    fixture.detectChanges();
  });

  describe('PickerContainerComponent.constructor', () => {
    it('Should be initialize all variables of the component.', () => {
      datePickerDebugElement = fixture.debugElement.query(By.css('jidai-date-picker'));
      timePickerDebugElement = fixture.debugElement.query(By.css('jidai-timepicker'));
      expect (component).toBeDefined();
      expect(datePickerDebugElement).not.toBe(null);
      expect(timePickerDebugElement).toBe(null);
    });
  });

  describe('PickerContainerComponent select day and then select time', () => {
    it('Should enable the time selection and set the selected day. Then should ' +
    'set the selected time and enable the date selection', () => {

      let selectedDay = moment('20170201');
      component.onDaySelected(selectedDay);

      fixture.detectChanges();

      datePickerDebugElement = fixture.debugElement.query(By.css('jidai-date-picker'));
      timePickerDebugElement = fixture.debugElement.query(By.css('jidai-timepicker'));
      expect(component.dateTime).toEqual(selectedDay);
      expect(datePickerDebugElement).toBe(null);
      expect(timePickerDebugElement).not.toBe(null);

      let selectedTime = moment();
      selectedTime.hour(15);
      selectedTime.minute(30);
      spyOn(component.onSelectedDate, 'emit');
      component.onTimeSelected(selectedTime);

      fixture.detectChanges();

      datePickerDebugElement = fixture.debugElement.query(By.css('jidai-date-picker'));
      timePickerDebugElement = fixture.debugElement.query(By.css('jidai-timepicker'));
      expect(component.dateTime.hour()).toEqual(selectedTime.hour());
      expect(component.dateTime.minute()).toEqual(selectedTime.minute());
      expect(datePickerDebugElement).not.toBe(null);
      expect(timePickerDebugElement).toBe(null);
      expect(component.onSelectedDate.emit).toHaveBeenCalledWith(component.dateTime);
    });
  });
});
