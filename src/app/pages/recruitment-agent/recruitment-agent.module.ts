import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecruitmentAgentRoutingModule } from './recruitment-agent-routing.module';
import { RecruitmentAgentComponent } from './recruitment-agent.component';
import { AgentListComponent } from './agent-list/agent-list.component';
import { AgentFormComponent } from './agent-form/agent-form.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ReactiveFormsModule } from '@angular/forms';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    RecruitmentAgentComponent,
    AgentListComponent,
    AgentFormComponent
  ],
  imports: [
    CommonModule,
    RecruitmentAgentRoutingModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    NgSelectModule,
    CollapseModule.forRoot()
  ]
})
export class RecruitmentAgentModule { }
