import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {ForgotpasswordComponent} from './forgotpassword/forgotpassword.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },

  {
    path: 'login',
    component: LoginComponent,
  },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgotPassword', component: ForgotpasswordComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
