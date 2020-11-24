
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AddExpTableService } from './../../../core/services/addExpTable.service';


@Component({
  selector: 'app-add-exp-table',
  templateUrl: './add-exp-table.component.html',
  styleUrls: ['./add-exp-table.component.scss']
})
export class AddExpTableComponent implements OnInit {
  form:FormGroup;
  serverId:any;

  constructor(private fb: FormBuilder, private addExpTable:AddExpTableService ) {
    this.form = this.fb.group({
      title:'',
      level:'',
      exp:'',
    })
  }

  ngOnInit(): void {
  }


    userId(){
      this.addExpTable.getId(this.form.value).subscribe((res:any)=>{console.log(res)
      this.serverId = res;
      })
    }
    saveExpTable(){
        return this.addExpTable.editExpTable(this.form.value.title,this.form.value.level,this.form.value.exp).subscribe(res=>console.log(res)) }
}
