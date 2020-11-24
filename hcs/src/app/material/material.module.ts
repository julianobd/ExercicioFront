import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//material imports
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    MatDialogModule,
    MatSelectModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatRadioModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

  ],
  exports: [
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    MatDialogModule,
    MatSelectModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatRadioModule,
    MatTableModule,

  ]
})
export class MaterialModule { }
