import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddExpTableService } from './../../../core/services/addExpTable.service';


@Component({
  selector: 'app-add-exp-table',
  templateUrl: './add-exp-table.component.html',
  styleUrls: ['./add-exp-table.component.scss']
})
export class AddExpTableComponent implements OnInit {

  //serverId:any;*/
  experience = [
    {title:"Level 0", level:0, exp:1},
    {title:"Level 0", level:0, exp:1}
  ];


  constructor() {
   /* this.form = this.fb.group({
      title:['',Validators.required],
      level:['',Validators.required],
      exp:['',Validators.required],
    })*/

  }


  ngOnInit(): void {
  }

  //  saveExpTable(){
  //       return this.addExpTable.editExpTable(this.form.value.title,this.form.value.level,this.form.value.exp).subscribe(res=>console.log(res)) }
  model: any={};
  addrowTable(){
    this.experience.push(this.model);
  }
}
