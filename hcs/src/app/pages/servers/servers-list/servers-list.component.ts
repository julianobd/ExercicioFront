import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-servers-list',
  templateUrl: './servers-list.component.html',
  styleUrls: ['./servers-list.component.scss']
})
export class ServersListComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  shared:boolean;
  disease:boolean;
  edit:string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', shared: false, disease: false, edit:''},
  {position: 2, name: 'Helium', shared: false, disease: false, edit:''},
  {position: 3, name: 'Lithium', shared: false, disease: false, edit:''},
  {position: 4, name: 'Beryllium', shared: false, disease: false, edit:''},
  {position: 5, name: 'Boron', shared: false, disease: false, edit:''},
  {position: 6, name: 'Carbon', shared: false, disease: false, edit:''},
  {position: 7, name: 'Nitrogen', shared: false, disease: false, edit:''},
  {position: 8, name: 'Oxygen', shared: false, disease: false, edit:''},
  {position: 9, name: 'Fluorine', shared: false, disease: false, edit:''},
  {position: 10, name: 'Neon', shared: false, disease: false, edit:''},
  {position: 11, name: 'Sodium', shared: false, disease: false, edit:''},
  {position: 12, name: 'Magnesium', shared: false, disease: false, edit:''},
  {position: 13, name: 'Aluminum', shared: false, disease: false, edit:''},
  {position: 14, name: 'Silicon', shared: false, disease: false, edit:''},
  {position: 15, name: 'Phosphorus', shared: false, disease: false, edit:''},
  {position: 16, name: 'Sulfur', shared: false, disease: false, edit:''},
  {position: 17, name: 'Chlorine', shared: false, disease: false, edit:''},
  {position: 18, name: 'Argon', shared: false, disease: false, edit:''},
  {position: 19, name: 'Potassium', shared: false, disease: false, edit:''},
  {position: 20, name: 'Calcium', shared: false, disease: false, edit:''},
];
