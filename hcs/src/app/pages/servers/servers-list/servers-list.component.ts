import { ServerListing } from './../../../core/services/server.model';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ServerService } from 'src/app/core/services/server.service';


@Component({
  selector: 'app-servers-list',
  templateUrl: './servers-list.component.html',
  styleUrls: ['./servers-list.component.scss']
})
export class ServersListComponent implements OnInit {

  pages:number = 1;
  totalPages: number;
  serversListing=[];


  public labels: any = {
    previousLabel: 'Anterior',
    nextLabel:'Próximo'
  }
  constructor(
    private serverService: ServerService
  ){

    this.serverService.listServers().subscribe(data =>{
      console.log(data)
      this.serversListing = data
      this.totalPages = data.length
    })

  }

  ngOnInit(): void {

  }

  }

