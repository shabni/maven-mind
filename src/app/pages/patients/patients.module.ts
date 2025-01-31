import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientRoutingModule } from './patient-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';



@NgModule({
  declarations: [

    PatientFormComponent,
    PatientListComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    NgxDatatableModule
  ]
})
export class PatientsModule { }
