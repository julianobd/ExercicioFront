import { Component, OnInit } from '@angular/core';
import { AddExpTabFormService } from '../../../../core/services/add-exp-tab-form.service'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { ExperienceTable } from '../add-exp-table.component';

@Component({
  selector: 'app-edit-exp-table',
  templateUrl: './edit-exp-table.component.html',
  styleUrls: ['./edit-exp-table.component.scss']
})
export class EditExpTableComponent implements OnInit {

  constructor( public addExpTabFormService:AddExpTabFormService,
    public dialogRef:MatDialogRef<EditExpTableComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ExperienceTable) {
    }
    formArray:any;

    form:FormGroup = new FormGroup({
      title: new FormControl('', Validators.required),
      level: new FormControl('',Validators.required),
      exp: new FormControl('',Validators.required)
    });

    initializeFormGroup(){
      this.form.setValue({
        title:'',
        level:'',
        exp:''
      })
    }


  ngOnInit(): void {
      this.form.setValue({
        title:this.data.title,
        level:this.data.level,
        exp:this.data.exp
      })

  }
  onClear(){
    this.form.reset();
    this.initializeFormGroup();
  }
  addExpTable(){
    this.dialogRef.close(this.form.value);
  }
  close() {
    this.dialogRef.close();
}


}
