import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'patients', loadChildren: () => import('./patients/patients.module').then(m => m.PatientsModule) },
      { path: 'agents', loadChildren: () => import('./recruitment-agent/recruitment-agent.module').then(m => m.RecruitmentAgentModule) },
      { path: 'case', loadChildren: () => import('./case/case.module').then(m => m.CaseModule) },
      { path: 'applications', loadChildren: () => import('./applications/applications.module').then(m => m.ApplicationsModule) }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
