import { AppComponent } from './app.component';
import { UserProfileComponent } from './pages/users/user-profile/user-profile.component';
import { UserEditComponent } from './pages/users/user-edit/user-edit.component';
import { UserCreateComponent } from './pages/users/user-create/user-create.component';
import { UsersComponent } from './pages/users/users.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddExpTableComponent } from './pages/servers/add-exp-table/add-exp-table.component';
import { ServersCreateComponent } from './pages/servers/servers-create/servers-create.component';
import { LoginComponent } from './pages/login/login.component';
import { GetServerComponent } from './pages/servers/get-server/get-server.component';
import { AddExpTableFormComponent } from './pages/servers/add-exp-table-form/add-exp-table-form.component';
import { AvatarEditComponent } from './pages/avatar/avatar-edit/avatar-edit.component';
import { AvatarListComponent } from './pages/avatar/avatar-list/avatar-list.component';
import { ServersListComponent } from './pages/servers/servers-list/servers-list.component';

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: 'avatar', component: AvatarListComponent},
  {path: 'itensServidor', component: ServersListComponent},
  {path: 'updateAvatar', component: AvatarEditComponent},
  {path: "users", component: UsersComponent},
  {path: "users/create", component: UserCreateComponent},
  {path: "users/edit/:name", component: UserEditComponent},
  {path: "users/profile/:name", component: UserProfileComponent},
  {path: 'login', component: LoginComponent},
  {path: 'serverCreate', component:ServersCreateComponent},
  {path: 'addExpTable', component:AddExpTableComponent},
  {path: 'getServer', component:GetServerComponent},
  {path: 'expTabForm', component:AddExpTableFormComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
