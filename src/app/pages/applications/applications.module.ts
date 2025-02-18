import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationsRoutingModule } from './applications-routing.module';
import { ApplicationsComponent } from './applications.component';
import { ApplicationsCreateComponent } from './applications-create/applications-create.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { CollapseModule } from 'ngx-bootstrap/collapse';


@NgModule({
  declarations: [
    ApplicationsComponent,
    ApplicationsCreateComponent,
  ],
  imports: [
    CommonModule,
    ApplicationsRoutingModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    NgSelectModule,
    CollapseModule.forRoot()
  ]
})
export class ApplicationsModule { }
