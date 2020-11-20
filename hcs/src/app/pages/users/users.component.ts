import { UserDeleteComponent } from './user-delete/user-delete.component';
import { User } from './../../core/models/user.model';
import { UsersService } from './../../core/services/users.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  showSpinner = false;

  // LISTA DE USUÁRIOS
  users: User[] = [];

  //Título da tabela com seleção
  displayedColumns: string[] = ['select','name', 'email', 'permission', 'actions']
  dataSource = new MatTableDataSource<User>(this.users);
  selection = new SelectionModel<User>(true, []);

  // Se o número de elementos selecionados corresponde ao número total de linhas
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  // Seleciona todas as linhas se nem todas estiverem selecionadas, caso contrário, limpa a seleção
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  // O LABEL para a caixa de seleção na linha passada.
  checkboxLabel( row?: User ): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deslect'}all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.name + 1}`;
  }

  constructor(
    private usersService: UsersService,
    private router: Router,
    public dialog: MatDialog,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  // Carrega todos os usuários
  ngOnInit(): void {
    this.refreshUsers()
  }

  // Atualiza a lista de usuários
  refreshUsers() {
      this.changeDetectorRef.detectChanges();
      this.usersService.getUsers().subscribe(users => {
      this.users = users
      console.log(users, 'dados obtidos')
      console.log(this.users, 'dados armazenados')
    });
  }

  routerToUserCreate(): void {
    this.router.navigate(['/users/create'])
  }

  routerToUserEdit(name: string): void {
    this.router.navigate(['/users/edit/', name])
  }

  routerToUserProfile(name: string): void {
    this.router.navigate(['users/profile/', name])
  }

  // Abre o Dialog
  openDeleteDialog(id: string) {
    const dialogRef = this.dialog.open(UserDeleteComponent, {
      data: {id: id}
    });
    dialogRef.afterClosed().subscribe(res => {
      this.showSpinner = true;
      setTimeout(() => {
      console.log('Excluindo usuário...')
      this.refreshUsers();
      this.showSpinner = false;
    }, 500);
    })
  }

  // openSpinnerDialog() {
  //   this.dialog.open(SpinnderComponent)
  // }

  // Deleta o usuário
  // deleteUser(id: string) {
  //   this.usersService.deleteUser(id).subscribe(data => {
  //     console.log(data)
  //     console.log('usuário deletado')
  //     // let u = this.users.filter((user) => user.id == id);
  //     // this.users.pop();
  //     this.router.navigate(['/users'])
  //   })

  // }

}

// @Component({
//   selector: 'spinner-component',
//   template: '<mat-spinner></mat-spinner>'
// })

// export class SpinnderComponent {}
