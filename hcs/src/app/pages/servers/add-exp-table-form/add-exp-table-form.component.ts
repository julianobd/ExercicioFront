import { MatDialogRef } from '@angular/material/dialog';

import { Component, OnInit } from '@angular/core';
import { AddExpTabFormService } from './../../../core/services/add-exp-tab-form.service';


@Component({
  selector: 'app-add-exp-table-form',
  templateUrl: './add-exp-table-form.component.html',
  styleUrls: ['./add-exp-table-form.component.scss']
})
export class AddExpTableFormComponent implements OnInit {

  constructor(
    public addExpTabFormService:AddExpTabFormService,
    public dialogRef:MatDialogRef<AddExpTableFormComponent> ) { }

  ngOnInit(): void {
  }
  onClear(){
    this.addExpTabFormService.form.reset();
    this.addExpTabFormService.initializeFormGroup();
  }

}
