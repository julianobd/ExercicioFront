import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServersCreateServiceService } from './../../../core/services/servers-create-service.service';
import { ServerIdService } from './../../../core/services/server-id.service';
import { Router } from '@angular/router';
import { LoginService } from './../../../core/services/login.service';



@Component({
  selector: 'app-servers-create',
  templateUrl: './servers-create.component.html',
  styleUrls: ['./servers-create.component.scss']
})
export class ServersCreateComponent implements OnInit {

  form:FormGroup

  constructor(private serversCreateServiceService:ServersCreateServiceService,private fb:FormBuilder, private serverIdService:ServerIdService,private router: Router, private loginService:LoginService) {
      this.form = this.fb.group({

        name:['',Validators.required],
        shared:['',Validators.required],
        hasDisease:['',Validators.required],
        initialMoney:['',Validators.required],
        initialStatsPoints:['',Validators.required]
      })
   }

  ngOnInit(): void {

  }
  createServers(){

  return this.serversCreateServiceService.saveServer(this.form.value)
  .subscribe(
  (res:any) =>
  {
    this.serverIdService.setServerId(res);
    this.router.navigate(['../addExpTable']);
  }
  );
}

}
