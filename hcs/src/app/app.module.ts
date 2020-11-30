

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServersEditComponent } from './pages/servers/servers-edit/servers-edit.component';
import { ServersListComponent } from './pages/servers/servers-list/servers-list.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { ServersCreateComponent } from './pages/servers/servers-create/servers-create.component';
import { AvatarListComponent } from './pages/avatar/avatar-list/avatar-list.component';
import { AvatarEditComponent } from './pages/avatar/avatar-edit/avatar-edit.component'
import { MaterialModule } from './material/material.module';

import { UsersComponent } from './pages/users/users.component';
import { UserCreateComponent } from './pages/users/user-create/user-create.component';
import { UserEditComponent } from './pages/users/user-edit/user-edit.component';
import { UserProfileComponent } from './pages/users/user-profile/user-profile.component';
import { UserDeleteComponent } from './pages/users/user-delete/user-delete.component';
import { ExpMachinesComponent } from './pages/exp-machines/exp-machines.component';
import { EditMachinesComponent } from './pages/exp-machines/edit-machines/edit-machines.component';
import { CustomFormsModule } from 'ngx-custom-validators';
import { NgxPaginationModule } from 'ngx-pagination';
import { UsersDeleteManyComponent } from './pages/users/users-delete-many/users-delete-many.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    UserCreateComponent,
    UserEditComponent,
    UserProfileComponent,
    UserDeleteComponent,
    ExpMachinesComponent,
    EditMachinesComponent,
    UserDeleteComponent,
    UsersDeleteManyComponent,
    ServersEditComponent,
    ServersListComponent,
    HeaderComponent,
    FooterComponent,
    ServersCreateComponent,
    AvatarListComponent,
    AvatarEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CustomFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    UserDeleteComponent,
    UserCreateComponent,
    UserEditComponent
  ]
})
export class AppModule { }
