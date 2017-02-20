import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MomentPipe } from '../pipes/moment.pipe';

import { CalendarService } from '../services/calendar.service';

import { JidaiDatePickerComponent } from './jidai_datepicker.component';

fdescribe('JidaiDatePickerComponent UT', () => {
  let component: JidaiDatePickerComponent,
      fixture: ComponentFixture<JidaiDatePickerComponent>;

  beforeEach( async(() => {
    TestBed.configureTestingModule({
      declarations: [
        JidaiDatePickerComponent,
        MomentPipe
      ],
      providers: [
        CalendarService
      ],
      imports: [  ]
  });
    fixture = TestBed.createComponent(JidaiDatePickerComponent);
    component = fixture.componentInstance;
    // artworkServiceMock = fixture.debugElement.injector.get(ArtworkService);
  }));

  describe('JidaiDatePickerComponent.constructor', () => {
    it('Should be called when JidaiDatePickerComponent is initialized', () => {

      expect (component).toBeDefined();
      expect (component.constructor).toBeDefined();
    });
  });
});
