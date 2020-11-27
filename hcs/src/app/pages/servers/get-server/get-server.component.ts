
import { Component, OnInit } from '@angular/core';
import { GetServerService } from './../../../core/services/get-server.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-get-server',
  templateUrl: './get-server.component.html',
  styleUrls: ['./get-server.component.scss']
})
export class GetServerComponent implements OnInit {
  serveIdNumber: any;
  form:FormGroup

  constructor(private getServerService:GetServerService, private fb:FormBuilder) {
    this.form = this.fb.group({
      serverId:''
    })
   }

  ngOnInit(): void {
  }

  getServerdata(){

    this.getServerService.getServer(this.form.controls.serverId.value).subscribe((res:any)=>{
      console.log(res.expTable)
      this.serveIdNumber = res;
    })
  }
}
