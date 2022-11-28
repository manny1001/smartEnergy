import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ProjectComponent } from './projects/projects/projects.component';
import { ProfileComponent } from './Profile/Profile.component';
import { SupportComponent } from './Support/Support.component';
import { ModalModule } from '../_modal';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },

  {
    path: 'home',
    component: DashboardComponent,
  },
  {
    path: 'projects',
    component: ProjectComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'support',
    component: SupportComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes),ModalModule],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
