import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatePickerComponent } from '../components/datepicker.component';
import { DateTimeService } from '../services/datetime.service';
import { MomentPipe } from '../pipes/moment.pipe';
import { PickerContainerComponent } from '../components/picker_container.component';
import { JidaiDateTimeComponent } from '../components/jidai_datetime.component';


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
    DatePickerComponent,
    MomentPipe,
    JidaiDateTimeComponent
  ],
  exports: [
    PickerContainerComponent,
    DatePickerComponent,
    MomentPipe,
    JidaiDateTimeComponent
  ]
})
export class JidaiModule {}
