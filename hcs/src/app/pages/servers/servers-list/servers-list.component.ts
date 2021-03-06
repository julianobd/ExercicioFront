import { Component, OnInit } from '@angular/core';
import { ServicesEditService } from 'src/app/core/services/services-edit.service';

@Component({
  selector: 'app-servers-list',
  templateUrl: './servers-list.component.html',
  styleUrls: ['./servers-list.component.scss']
})
export class ServersListComponent implements OnInit {

  itens: any;

  displayedColumns: string[] = [
    'select',
    'imageId',
    'name',
    'health',
    'vest',
    'experience',
    'hungry',
    'money',
    'statusPoint',
    'isInitial',
    'quantityInitial',
    'action'
  ]

  constructor(private ServicesEditService: ServicesEditService) { }

  ngOnInit(): void {
    this.ServicesEditService
      .getServer()
      .subscribe(itens => this.itens = itens.availableItems)

  }

}
