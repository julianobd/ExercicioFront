

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './pages/login/login.component';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

<<<<<<< Updated upstream
import { UsersComponent } from './pages/users/users.component';
=======
>>>>>>> Stashed changes



@NgModule({
  declarations: [
    AppComponent,
<<<<<<< Updated upstream
    LoginComponent
    UsersComponent
=======
    LoginComponent,
    ServersCreateComponent,

>>>>>>> Stashed changes

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
  bootstrap: [AppComponent]
})
export class AppModule { }
