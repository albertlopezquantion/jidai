import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JidaiDatePickerComponent } from '../components/jidai_datepicker.component';
import { DateTimeService } from '../services/datetime.service';
import { MomentPipe } from '../pipes/moment.pipe';
import { PickerContainerComponent } from '../components/picker_container.component';
import { JidaiDateTimeComponent } from '../components/jidai_datetime.component';
import { JidaiTimePickerComponent } from '../components/jidai_timepicker.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    DateTimeService
  ],
  declarations: [
    PickerContainerComponent,
    JidaiDatePickerComponent,
    MomentPipe,
    JidaiDateTimeComponent,
    JidaiTimePickerComponent
  ],
  exports: [
    PickerContainerComponent,
    JidaiDatePickerComponent,
    MomentPipe,
    JidaiDateTimeComponent,
    JidaiTimePickerComponent
  ]
})
export class JidaiModule {}
