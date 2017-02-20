import { ViewEncapsulation } from '@angular/core';
import { async, ComponentFixture, fakeAsync, inject, TestBed, tick } from '@angular/core/testing';
import { BaseRequestOptions, Http, Response } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { JidaiDatePickerComponent } from './jidai_datepicker.component';

describe('ArtworkPreviewComponent UT', () => {
  let component: JidaiDatePickerComponent,
      fixture: ComponentFixture<JidaiDatePickerComponent>;

  beforeEach( async(() => {
    TestBed.configureTestingModule({
      declarations: [ JidaiDatePickerComponent ],
      providers: [

      ],
      imports: [  ]
  });
    fixture = TestBed.createComponent(JidaiDatePickerComponent);
    component = fixture.componentInstance;
    // artworkServiceMock = fixture.debugElement.injector.get(ArtworkService);
  }));

  describe('ArtworkPreviewComponent.constructor():', () => {
    it('Should be called when an ArtworkPreviewComponent is initialized', () => {

      expect (component).toBeDefined();
      expect (component.constructor).toBeDefined();
    });
  });
});
