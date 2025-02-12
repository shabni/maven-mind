import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaseInfoComponent } from './case-info/case-info.component';
import { CaseComponent } from './case.component';

const routes: Routes = [
  { path: '', component: CaseComponent,
    children: [
      { path: '', component: CaseInfoComponent }
    ]
   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaseRoutingModule { }
