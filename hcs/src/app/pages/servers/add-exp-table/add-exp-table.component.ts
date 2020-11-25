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
  ];



  constructor(private addExpTable:AddExpTableService) {
   /* this.form = this.fb.group({
      title:['',Validators.required],
      level:['',Validators.required],
      exp:['',Validators.required],
    })*/

  }


  ngOnInit(): void {
  }
  model: any={};
  expTab: any=[];
  addrowTable(){
    this.experience.push(this.model);
    console.log(this.experience)
    this.model = {};
    this.expTab = this.experience;

  }


  saveExpTable(){
  return this.addExpTable.editExpTable(this.expTab).subscribe(res=>console.log(res)) }

  delrowTable(i){
    this.experience.splice(i,1)
    console.log(i);
  }


}
