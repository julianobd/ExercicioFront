import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddExpTableComponent } from './pages/servers/add-exp-table/add-exp-table.component';
import { ServersCreateComponent } from './pages/servers/servers-create/servers-create.component';
import { LoginComponent } from './pages/login/login.component';
import { GetServerComponent } from './pages/servers/get-server/get-server.component';
import { AddExpTableFormComponent } from './pages/servers/add-exp-table-form/add-exp-table-form.component';

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
  },
  {
    path:'getServer',
    component:GetServerComponent
  },
  {
    path:'expTabForm',
    component:AddExpTableFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
