import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatTableModule,
    MatDialogModule,
    MatSnackBarModule

  ],
  exports: [
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatTableModule,
    MatDialogModule,
    MatSnackBarModule
  ]
})
export class MaterialModule { }
