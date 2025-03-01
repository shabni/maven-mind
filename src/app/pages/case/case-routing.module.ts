import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaseInfoComponent } from './case-info/case-info.component';
import { CaseComponent } from './case.component';
import { PatientInfoComponent } from './patient-info/patient-info.component';
import { ViewAllComponent } from './view-all/view-all.component';
import { VerifierComponent } from './verifier/verifier.component';
import { DocsComponent } from './docs/docs.component';
import { ReferrerComponent } from './referrer/referrer.component';
import { PreviousInfoComponent } from './previous-info/previous-info.component';
import { DependantsComponent } from './dependants/dependants.component';
import { CaseAddComponent } from './case-add/case-add.component';
import { CaseEditComponent } from './case-edit/case-edit.component';
import { CommentsComponent } from './comments/comments.component';

const routes: Routes = [
  {
    path: '',
    component: CaseComponent,
    children: [
      {
        path: '',
        redirectTo: 'add/info',
        pathMatch: 'full',
      },
      {
        path: 'add',
        component: CaseAddComponent,
        children: [
          { path: 'info', component: CaseInfoComponent },
          { path: 'patient-info', component: PatientInfoComponent },
          { path: 'financial-docs', component: DependantsComponent },
          { path: 'creditability-interview', component: PreviousInfoComponent },
          { path: 'enrollment', component: ReferrerComponent },
          { path: 'general-docs', component: DocsComponent },
          { path: 'verifier', component: VerifierComponent },
          { path: 'view-all', component: ViewAllComponent },
          { path: 'comments', component: CommentsComponent },

        ],
      },
      {
        path: 'edit/:id',
        component: CaseEditComponent,
        children: [
          { path: 'info', component: CaseInfoComponent },
          { path: 'patient-info', component: PatientInfoComponent },
          { path: 'financial-docs', component: DependantsComponent },
          { path: 'creditability-interview', component: PreviousInfoComponent },
          { path: 'enrollment', component: ReferrerComponent },
          { path: 'general-docs', component: DocsComponent },
          { path: 'verifier', component: VerifierComponent },
          { path: 'view-all', component: ViewAllComponent },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaseRoutingModule { }
