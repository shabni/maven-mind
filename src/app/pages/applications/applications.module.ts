import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationsRoutingModule } from './applications-routing.module';
import { ApplicationsComponent } from './applications.component';
import { ApplicationsCreateComponent } from './applications-create/applications-create.component';


@NgModule({
  declarations: [
    ApplicationsComponent,
    ApplicationsCreateComponent,
  ],
  imports: [
    CommonModule,
    ApplicationsRoutingModule
  ]
})
export class ApplicationsModule { }
