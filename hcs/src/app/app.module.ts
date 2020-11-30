

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './pages/login/login.component';
<<<<<<< HEAD
import { MaterialModule } from './modules/material.module';
=======
import { MaterialModule } from './material/material.module';
>>>>>>> 7243523a1b2181ce7ee0961c952cc75a09e2c1c2
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { UsersComponent } from './pages/users/users.component';
<<<<<<< HEAD
import { UserCreateComponent } from './pages/users/user-create/user-create.component';
import { UserEditComponent } from './pages/users/user-edit/user-edit.component';
import { UserProfileComponent } from './pages/users/user-profile/user-profile.component';
import { UserDeleteComponent } from './pages/users/user-delete/user-delete.component';
=======
import { ExpMachinesComponent } from './pages/exp-machines/exp-machines.component';
import { EditMachinesComponent } from './pages/exp-machines/edit-machines/edit-machines.component';
>>>>>>> 7243523a1b2181ce7ee0961c952cc75a09e2c1c2



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
<<<<<<< HEAD
    UsersComponent,
    UserCreateComponent,
    UserEditComponent,
    UserProfileComponent,
    UserDeleteComponent
=======
    // UsersComponent,
    ExpMachinesComponent,
    EditMachinesComponent
>>>>>>> 7243523a1b2181ce7ee0961c952cc75a09e2c1c2

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [UserDeleteComponent]
})
export class AppModule { }
