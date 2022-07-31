import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [LoginComponent, HomeComponent],
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}