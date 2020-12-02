import { AuthGuard } from './guards/auth.guard';
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
import { AddExpTableFormComponent } from './pages/servers/add-exp-table/add-exp-table-form/add-exp-table-form.component';
import { EditExpTableComponent } from './pages/servers/add-exp-table/edit-exp-table/edit-exp-table.component';
import { AvatarEditComponent } from './pages/avatar/avatar-edit/avatar-edit.component';
import { AvatarListComponent } from './pages/avatar/avatar-list/avatar-list.component';
import { ServersListComponent } from './pages/servers/servers-list/servers-list.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: "", component: LoginComponent},
  {path: 'avatar', component: AvatarListComponent, canActivate: [AuthGuard]},
  {path: 'itensServidor', component: ServersListComponent, canActivate: [AuthGuard]},
  {path: 'updateAvatar', component: AvatarEditComponent, canActivate: [AuthGuard]},
  {path: "users", component: UsersComponent, canActivate: [AuthGuard]},
  {path: "users/create", component: UserCreateComponent, canActivate: [AuthGuard]},
  {path: "users/edit/:name", component: UserEditComponent, canActivate: [AuthGuard]},
  {path: "users/profile/:name", component: UserProfileComponent, canActivate: [AuthGuard]},
  {path: 'serverCreate', component:ServersCreateComponent, canActivate: [AuthGuard]},
  {path: 'addExpTable', component:AddExpTableComponent, canActivate: [AuthGuard]},
  {path: 'getServer', component:GetServerComponent, canActivate: [AuthGuard]},
  {path: 'expTabForm', component:AddExpTableFormComponent, canActivate: [AuthGuard]},
  {path: 'editExpTab', component:EditExpTableComponent, canActivate: [AuthGuard]}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
