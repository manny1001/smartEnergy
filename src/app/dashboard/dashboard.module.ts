import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ModalModule } from '../_modal';

import { MatMenuModule } from '@angular/material/menu';

import { ProjectComponent } from '../dashboard/projects/projects/projects.component';
@NgModule({
  declarations: [DashboardComponent, ProjectComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatMenuModule,
    MatMenuModule,
    ModalModule,
  ],
})
export class DashboardModule {}
