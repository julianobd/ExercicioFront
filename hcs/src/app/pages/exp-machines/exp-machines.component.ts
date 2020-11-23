import { SelectionModel } from '@angular/cdk/collections';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { ExpMachines } from 'src/app/core/models/expMachines';
import { ExpMachinesService } from 'src/app/core/services/exp-machines.service';
import { EditMachinesComponent } from './edit-machines/edit-machines.component';




@Component({
  selector: 'app-exp-machines',
  templateUrl: './exp-machines.component.html',
  styleUrls: ['./exp-machines.component.scss']
})

export class ExpMachinesComponent implements OnInit {

  displayedColumns = ['select', 'description', 'expEachMinute', 'automaticStart', 'hourStart', 'hourEnds', 'enabled', 'edit'];

  expMachines: ExpMachines[];
  dataSource = new MatTableDataSource<ExpMachines>();
  selection = new SelectionModel<ExpMachines>(true, []);
  tableIsLoaded: boolean;

constructor(
  private expMachinesService: ExpMachinesService,
  public dialog: MatDialog,
  private changeDetectorRef: ChangeDetectorRef ) { }

  

@ViewChild(MatSort) sort: MatSort;
  

  ngOnInit(): void {
  this.refresh();
  this.tableIsLoaded = false;
  }

  openDialog(expMach, id: string, description: string, expEachMinute: string, automaticStart: boolean, hourStart: number, hourEnds: number, enabled: boolean){
    console.log(expMach);
    const dialogRef = this.dialog.open(EditMachinesComponent, {
      data: {expMach: expMach, id: id, description: description, expEachMinute: expEachMinute, automaticStart: automaticStart, hourStart: hourStart, hourEnds: hourEnds, enabled: enabled},
      panelClass: 'custom-dialog-container' 
      
    });
    dialogRef.afterClosed().subscribe(results => { 
      setTimeout(() =>{
      this.refresh();
        }, 600)
      }
    );
  };

  refresh(){
    this.expMachinesService.getAll()
    .subscribe(data =>  {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.changeDetectorRef.detectChanges();
      this.tableIsLoaded = true;
    });
  };

  
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  };

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(i => this.selection.select(i));
  };

  /** The label for the checkbox on the passed row */
  checkboxLabel(i?): string {
    if (!i) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(i) ? 'deselect' : 'select'} row ${i}`;
  }

  
}
