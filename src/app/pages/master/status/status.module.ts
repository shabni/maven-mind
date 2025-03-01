import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusRoutingModule } from './status-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ReactiveFormsModule } from '@angular/forms';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { NgSelectModule } from '@ng-select/ng-select';
import { StatusFormComponent } from './status-form/status-form.component';
import { StatusListComponent } from './status-list/status-list.component';
@NgModule({
  declarations: [
    StatusListComponent,
    StatusFormComponent
  ],
  imports: [
    CommonModule,
    StatusRoutingModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    NgSelectModule,
    CollapseModule.forRoot()
  ]
})
export class StatusModule { }
