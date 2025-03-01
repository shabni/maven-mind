import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatusFormComponent } from './status-form/status-form.component';
import { StatusListComponent } from './status-list/status-list.component';
const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: StatusListComponent },
  { path: 'add', component: StatusFormComponent },
  { path: 'edit/:id', component: StatusFormComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatusRoutingModule { }
