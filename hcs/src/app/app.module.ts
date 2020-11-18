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
import { UserListComponent } from './pages/users/user-list/user-list.component';
import { UserEditComponent } from './pages/users/user-edit/user-edit.component';
import { UserCreateComponent } from './pages/users/user-create/user-create.component';
import { UserProfileComponent } from './pages/users/user-profile/user-profile.component';
import { ServersCreateComponent } from './pages/servers/servers-create/servers-create.component';
import { AvatarListComponent } from './pages/avatar/avatar-list/avatar-list.component';
import { AvatarEditComponent } from './pages/avatar/avatar-edit/avatar-edit.component'
import { MaterialModule } from './pages/material.module';

@NgModule({
  declarations: [
    AppComponent,
    ServersEditComponent,
    ServersListComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    UserListComponent,
    UserEditComponent,
    UserCreateComponent,
    UserProfileComponent,
    ServersCreateComponent,
    AvatarListComponent,
    AvatarEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }