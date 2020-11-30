import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//material imports
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';

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
    MatPaginatorModule,
    MatCheckboxModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatFormFieldModule,
    MatSnackBarModule,
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
    MatPaginatorModule,
    MatCheckboxModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatFormFieldModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class MaterialModule { }
