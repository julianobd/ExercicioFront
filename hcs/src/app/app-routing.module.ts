import { ServersCreateComponent } from './pages/servers/servers-create/servers-create.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'serverCreate',
    component:ServersCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
