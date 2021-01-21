import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

// Routing  of components:
const routes: Routes = [
 {
  path:'',
  component : HomeComponent
 },

 {
  path:'login',
  component : LoginComponent
 },

 {
  path:'registration',
  component : RegistrationComponent
 },

 {
   path:'dashboard',
   component : DashboardComponent
 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
