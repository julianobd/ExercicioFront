import { AddExpTableFormComponent } from './../add-exp-table-form/add-exp-table-form.component';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddExpTabFormService } from './../../../core/services/add-exp-tab-form.service';

export interface PeriodicElement {
  exp: number;
  level: number;
  title: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {exp: 1, level: 1, title: 'Level 0'},
  {exp: 2, level: 2, title: 'Level 1'},
  {exp: 3, level: 3, title: 'Level 2'},

];

@Component({
  selector: 'app-add-exp-table',
  templateUrl: './add-exp-table.component.html',
  styleUrls: ['./add-exp-table.component.scss']
})
export class AddExpTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['exp', 'level', 'title'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(private dialog:MatDialog, private addexptabform: AddExpTabFormService){

  }
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  onCreate(){
    this.addexptabform.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(AddExpTableFormComponent, dialogConfig);
  }
}






