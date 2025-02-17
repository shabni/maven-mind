import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecruitmentAgentRoutingModule } from './recruitment-agent-routing.module';
import { RecruitmentAgentComponent } from './recruitment-agent.component';
import { AgentListComponent } from './agent-list/agent-list.component';
import { AgentFormComponent } from './agent-form/agent-form.component';


@NgModule({
  declarations: [
    RecruitmentAgentComponent,
    AgentListComponent,
    AgentFormComponent
  ],
  imports: [
    CommonModule,
    RecruitmentAgentRoutingModule
  ]
})
export class RecruitmentAgentModule { }
