import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { MaterialModule } from '../app/material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServersCreateComponent } from './pages/servers/servers-create/servers-create.component';
import { AddExpTableComponent } from './pages/servers/add-exp-table/add-exp-table.component';
import { GetServerComponent } from './pages/servers/get-server/get-server.component';
import { AddExpTableFormComponent } from './pages/servers/add-exp-table-form/add-exp-table-form.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ServersCreateComponent,
    AddExpTableComponent,
    GetServerComponent,
    AddExpTableFormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,


  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[AddExpTableFormComponent]
})
export class AppModule { }
