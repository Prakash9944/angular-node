import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { GetusersComponent } from './getusers/getusers.component';
import { EditusersComponent } from './editusers/editusers.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "", component: DashboardComponent},
  {path: "register", component: RegisterComponent},
  {path: "edit-emlployee/:id", component: EditusersComponent},
  {path: "empoyee-list", component: GetusersComponent},
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
