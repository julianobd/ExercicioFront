
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ServersCreateServiceService } from './../../../core/services/servers-create-service.service';
import { ServerIdService } from './../../../core/services/server-id.service';


@Component({
  selector: 'app-servers-create',
  templateUrl: './servers-create.component.html',
  styleUrls: ['./servers-create.component.scss']
})
export class ServersCreateComponent implements OnInit {

  form:FormGroup

  constructor(private serversCreateServiceService:ServersCreateServiceService,private fb:FormBuilder, private serverIdService:ServerIdService) {
      this.form = this.fb.group({

        name:'',
        shared:'',
        hasDisease:'',
        initialMoney:'',
        initialStatsPoints:''
      })
   }

  ngOnInit(): void {
  }
  createServers(){

  return this.serversCreateServiceService.saveServer(this.form.value).subscribe((res:any)=>this.serverIdService.setServerId(res))

  }

}
