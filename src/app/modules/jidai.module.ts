import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JidaiDatePickerComponent } from '../components/jidai_datepicker.component';
import { PickerContainerComponent } from '../components/picker_container.component';
import { JidaiDateTimeComponent } from '../components/jidai_datetime.component';
import { JidaiTimePickerComponent } from '../components/jidai_timepicker.component';
import { CalendarService } from '../services/calendar.service';
import { MomentPipe } from '../pipes/moment.pipe';
import { ClickOutsideDirective } from '../directives/click_outside.directive';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    CalendarService
  ],
  declarations: [
    PickerContainerComponent,
    JidaiDatePickerComponent,
    MomentPipe,
    JidaiDateTimeComponent,
    JidaiTimePickerComponent,
    ClickOutsideDirective
  ],
  exports: [
    PickerContainerComponent,
    JidaiDatePickerComponent,
    MomentPipe,
    JidaiDateTimeComponent,
    JidaiTimePickerComponent,
    ClickOutsideDirective
  ]
})
export class JidaiModule {}
