
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddExpTableComponent } from './pages/servers/add-exp-table/add-exp-table.component';
import { ServersCreateComponent } from './pages/servers/servers-create/servers-create.component';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'serverCreate',
    component:ServersCreateComponent
  },
  {
    path:'addExpTable',
    component:AddExpTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
