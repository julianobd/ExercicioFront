

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './pages/login/login.component';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
    UsersDeleteManyComponent
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
