import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
//import { getServers } from 'dns';
import { ServerService } from 'src/app/core/services/server.service';


@Component({
  selector: 'app-servers-list',
  templateUrl: './servers-list.component.html',
  styleUrls: ['./servers-list.component.scss']
})
export class ServersListComponent implements OnInit {

  srvs: ServerService[];

  id:string;
  name:string;
  token:string;
  shared:boolean;
  hasDisease:boolean;
  initialMoney:number;
  initialStatsPoints:number;


  constructor(
    private serverService: ServerService
  ){}

  ngOnInit(): void {
    this.serverService.getServerstoken()
    .subscribe(servers =>{
      console.log(servers)
    })
  }

}
