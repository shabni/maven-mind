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
      { path: 'users', loadChildren: () => import('./master/users/users.module').then(m => m.UsersModule) },
      { path: 'courses', loadChildren: () => import('./master/courses/courses.module').then(m => m.CoursesModule) },
      { path: 'status', loadChildren: () => import('./master/status/status.module').then(m => m.StatusModule) },
      { path: 'task', loadChildren: () => import('./task/task.module').then(m => m.TaskModule) }



    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
