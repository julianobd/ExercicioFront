import { LoginComponent } from './pages/login/login.component';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './pages/users/user-profile/user-profile.component';
import { UserEditComponent } from './pages/users/user-edit/user-edit.component';
import { UserCreateComponent } from './pages/users/user-create/user-create.component';
import { UsersComponent } from './pages/users/users.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: "",
  component: LoginComponent
}, {
  path: "users",
  component: UsersComponent
}, {
  path: "users/create",
  component: UserCreateComponent
},{
  path: "users/edit/:name",
  component: UserEditComponent
},{
  path: "users/profile/:name",
  component: UserProfileComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
