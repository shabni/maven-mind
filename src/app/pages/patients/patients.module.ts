import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientRoutingModule } from './patient-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ReactiveFormsModule } from '@angular/forms';
import { CollapseModule } from 'ngx-bootstrap/collapse';



@NgModule({
  declarations: [

    PatientFormComponent,
    PatientListComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    CollapseModule.forRoot()
  ]
})
export class PatientsModule { }
