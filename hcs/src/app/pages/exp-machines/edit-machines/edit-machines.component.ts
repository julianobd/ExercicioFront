import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ExpMachinesService } from 'src/app/core/services/exp-machines.service';
import { ExpMachinesComponent } from '../exp-machines.component';

@Component({
  selector: 'app-edit-machines',
  templateUrl: './edit-machines.component.html',
  styleUrls: ['./edit-machines.component.scss']
})
export class EditMachinesComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditMachinesComponent>,
    @Inject(MAT_DIALOG_DATA) public expMach: any,
    public expMachinesService: ExpMachinesService
    ) { };

  ngOnInit(): void {
  };

  formControl = new FormControl ('', [
    Validators.required
  ]); 

  submit() {
    // emppty stuff
  };

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      this.formControl.hasError('email') ? 'Not a valid email' :
        '';
  };

  cancel(): void {
    this.dialogRef.close();
  }

  save(id: string): void {
    this.expMachinesService.edit(this.expMach, id)
    .subscribe( )
  };


}
