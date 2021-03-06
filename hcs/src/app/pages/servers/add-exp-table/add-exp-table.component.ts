import { EditExpTableComponent } from './edit-exp-table/edit-exp-table.component';
import { AddExpTableFormComponent } from '../add-exp-table/add-exp-table-form/add-exp-table-form.component';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddExpTableService } from './../../../core/services/addExpTable.service';


export interface ExperienceTable {
  exp: number;
  level: number;
  title: string;
}

@Component({
  selector: 'app-add-exp-table',
  templateUrl: './add-exp-table.component.html',
  styleUrls: ['./add-exp-table.component.scss'],
})
export class AddExpTableComponent implements AfterViewInit {
  ELEMENT_DATA: ExperienceTable[] = [];
  displayedColumns: string[] = ['exp', 'level', 'title', 'actions'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  expTab: ExperienceTable[];

  constructor(
    private dialog: MatDialog,
    private addExpTable: AddExpTableService
  ) {}

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    //dialogConfig.width = "60%";
    const dialogRef = this.dialog.open(AddExpTableFormComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(this.dataSource.sort)
      if (result) {
        this.ELEMENT_DATA.push(result);
        this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
        this.dataSource.sort = this.sort;
      }
    });
  }

  onSave() {
    console.log(this.dataSource.data);
    this.expTab = this.dataSource.data;
    return this.addExpTable
      .editExpTable(this.expTab)
      .subscribe((res) => console.log(res));
  }
  onDelete(element) {
    console.log(element);
    this.dataSource.data.splice(element, 1);
    this.dataSource._updateChangeSubscription();
    console.log(element);
  }
  onEdit(exp, level, title, element) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    //dialogConfig.width = "60%";
    dialogConfig.data = {
      exp: exp,
      level: level,
      title: title,
    };
    console.log(dialogConfig.data);
    const dialogRef = this.dialog.open(EditExpTableComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((data) => {
      console.log('Dialog Output:', data);
      element.exp = data.exp;
      element.level = data.level;
      element.title = data.title;
    });
  }
}
