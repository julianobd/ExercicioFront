import { Component, OnInit } from '@angular/core';
import { AddExpTabFormService } from '../../../../core/services/add-exp-tab-form.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-add-exp-table-form',
  templateUrl: './add-exp-table-form.component.html',
  styleUrls: ['./add-exp-table-form.component.scss']
})
export class AddExpTableFormComponent implements OnInit {

  constructor(
    public addExpTabFormService:AddExpTabFormService,
    public dialogRef:MatDialogRef<AddExpTableFormComponent>) { }
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
