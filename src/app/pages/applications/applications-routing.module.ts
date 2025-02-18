import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationsComponent } from './applications.component';
import { ApplicationsCreateComponent } from './applications-create/applications-create.component';

const routes: Routes = [
  {
    path: '',
    component: ApplicationsComponent,
    children: [
      { path: 'students', loadChildren: () => import('./students/students.module').then(m => m.StudentsModule) },
      { path: 'create', component: ApplicationsCreateComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationsRoutingModule { }
