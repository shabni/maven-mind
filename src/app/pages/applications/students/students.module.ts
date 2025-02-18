import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { StudentsCreateComponent } from './students-create/students-create.component';


@NgModule({
  declarations: [
    StudentsComponent,
    StudentsListComponent,
    StudentsCreateComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    NgSelectModule,
    CollapseModule.forRoot()
  ]
})
export class StudentsModule { }
