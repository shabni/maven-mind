import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaseRoutingModule } from './case-routing.module';
import { CaseComponent } from './case.component';
import { CaseInfoComponent } from './case-info/case-info.component';
import { CaseNavBarComponent } from './case-nav-bar/case-nav-bar.component';
import { PatientInfoComponent } from './patient-info/patient-info.component';
import { DependantsComponent } from './dependants/dependants.component';
import { PreviousInfoComponent } from './previous-info/previous-info.component';
import { ReferrerComponent } from './referrer/referrer.component';
import { DocsComponent } from './docs/docs.component';
import { VerifierComponent } from './verifier/verifier.component';
import { ViewAllComponent } from './view-all/view-all.component';
import { CaseAddComponent } from './case-add/case-add.component';
import { CaseEditComponent } from './case-edit/case-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    CaseComponent,
    CaseInfoComponent,
    CaseNavBarComponent,
    PatientInfoComponent,
    DependantsComponent,
    PreviousInfoComponent,
    ReferrerComponent,
    DocsComponent,
    VerifierComponent,
    ViewAllComponent,
    CaseAddComponent,
    CaseEditComponent,

    ],
  imports: [
    CommonModule,
    CaseRoutingModule,
    ReactiveFormsModule,
    NgSelectModule
  ]
})
export class CaseModule { }
