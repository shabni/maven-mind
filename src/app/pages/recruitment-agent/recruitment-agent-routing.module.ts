import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentListComponent } from './agent-list/agent-list.component';
import { AgentFormComponent } from './agent-form/agent-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: AgentListComponent },
  { path: 'add', component: AgentFormComponent },
  { path: 'edit/:id', component: AgentFormComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecruitmentAgentRoutingModule { }
