import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentsCreateComponent } from './students-create/students-create.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: StudentsListComponent },
  { path: 'add', component: StudentsCreateComponent },
  { path: 'edit/:id', component: StudentsCreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
