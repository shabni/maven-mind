import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { LayOutComponent } from './lay-out/lay-out.component';
import { HeaderComponent } from './lay-out/header/header.component';
import { SideBarComponent } from './lay-out/side-bar/side-bar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CaseModule } from './case/case.module';

@NgModule({
  declarations: [
    PagesComponent,
    LayOutComponent,
    HeaderComponent,
    SideBarComponent,
    BreadcrumbsComponent,

  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    RouterModule,
    NgbModule,
    CaseModule
  ]
})
export class PagesModule { }
