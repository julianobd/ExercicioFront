import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


=======
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatRadioModule } from '@angular/material/radio';
>>>>>>> users
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
<<<<<<< HEAD
    MatDialogModule,
    MatSelectModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatRadioModule,
    MatProgressSpinnerModule
    
    

=======
    MatCheckboxModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatRadioModule
>>>>>>> users
  ],
  exports: [
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
<<<<<<< HEAD
    MatDialogModule,
    MatSelectModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatRadioModule,
    MatProgressSpinnerModule
=======
    MatCheckboxModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatRadioModule
>>>>>>> users
  ]
})
export class MaterialModule { }
