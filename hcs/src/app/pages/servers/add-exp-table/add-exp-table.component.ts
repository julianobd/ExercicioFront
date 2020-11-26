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
  model2: any={};
  expTab: any=[];
  msg:any="";
  addrowTable(){
    this.experience.push(this.model);
    console.log(this.experience)
    this.model = {};
    this.expTab = this.experience;
    this.msg = "Item adicionado com sucesso"

  }
  saveExpTable(){
  return this.addExpTable.editExpTable(this.expTab).subscribe(res=>console.log(res));

 }

  delrowTable(i){
    this.experience.splice(i,1)
    console.log(i);
    this.msg = "Item deletado com sucesso"
  }
  myValue;
  editrowTable(k){
    this.model2.title = this.experience[k].title;
    this.model2.level = this.experience[k].level;
    this.model2.exp = this.experience[k].exp;
    this.myValue = k;

  }
  updateRow(){
    let k= this.myValue;
    for(let i=0; i<this.experience.length; i++){
          if(i==k){
            this.experience[i]=this.model2;
            this.model2 ={};
          }
    }
    this.msg = "Item atualizado com sucesso"
  }

  clickme(){
    this.msg="";
  }
}
