import { MatTableDataSource } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServersListComponent } from './pages/servers/servers-list/servers-list.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    AppComponent,
    ServersListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [
    MatTableDataSource
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
