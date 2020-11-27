import { UsersDeleteManyComponent } from './users-delete-many/users-delete-many.component';
import { SnackbarService } from './../../core/services/snackbar.service';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { User } from './../../core/models/user.model';
import { UsersService } from './../../core/services/users.service';
import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator,{static:false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static:false}) sort: MatSort;

  // Variável para ativar o spinner
  showSpinner = false;

  allSelected = false;

  // LISTA DE USUÁRIOS
  users: User[] = [];


  pageSize = 4;
  p: number = 1;

  //Título da tabela com seleção
  displayedColumns: string[] = ['select', 'name', 'email', 'permission', 'actions'];
  // dataSource = new MatTableDataSource(this.users)
  selection = new SelectionModel<User>(true, []);

  // Se o número de elementos selecionados corresponde ao número total de linhas
  // isAllSelected() {
  //   const numSelected = this.selection.selected.length;
  //   const numRows = this.users.length;
  //   return numSelected === numRows;
  // }

  // Seleciona todas as linhas se nem todas estiverem selecionadas, caso contrário, limpa a seleção
  masterToggle() {
    if (!this.allSelected) {
      this.users.forEach(row => this.selection.select(row));
      this.allSelected = true;
    } else {
      this.selection.clear();
      this.allSelected = false;
    }
    // this.isAllSelected() ?
    //     this.selection.clear() :
    //     this.users.forEach(row => this.selection.select(row));
  }

  // O LABEL para a caixa de seleção na linha passada.
  checkboxLabel(row?: User): any {
    if (!row) {
      return `${this.allSelected ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  // método para trocar de página
  pageChanged(event) {
    this.p = event;
  }

  constructor(
    private usersService: UsersService,
    private router: Router,
    private dialog: MatDialog,
    private changeDetectorRef: ChangeDetectorRef,
    private snackBar: SnackbarService
  ) { }

  // Carrega todos os usuários
  ngOnInit(): void {
    this.refreshUsers()
    // this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit() {
      // this.dataSource.paginator = this.paginator
      // this.dataSource.sort = this.sort
  }

  // Atualiza a lista de usuários
  refreshUsers() {
      this.selection.clear();
      this.showSpinner = true;
      this.changeDetectorRef.detectChanges();
      this.usersService.getUsers().subscribe((data) => {
        this.users = data;
        console.log(data, 'dados obtidos');
        console.log(this.users, 'dados armazenados');

        this.showSpinner = false;
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

  // Abre o Dialog de deletar usuário
  openDeleteDialog(id: string) {
    const dialogRef = this.dialog.open(UserDeleteComponent, {
      data: {id: id}
    });
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.showSpinner = true;
          setTimeout(() => {
          console.log('Excluindo usuário...')
          this.refreshUsers();
          this.snackBar.showMessage('Usuário deletado!')
        }, 500);
      }
    })
  }

  // Exclui vários usuários ao mesmo tempo
  openDeleteManyDialog(users: any) {
    if (users.length == 0) {
      this.snackBar.showMessage('Nenhum usuário selecionado')
    } else {
      const cont = users.length
      let i = 1
      const dialogRef = this.dialog.open(UsersDeleteManyComponent, {
        data: {cont: cont}
      });
      dialogRef.afterClosed().subscribe(res => {
        if (res) {
          this.showSpinner = true;



          // users.forEach(user => {
          //     this.usersService.deleteUser(user.id).subscribe(data => {
          //       console.log(data)
          //       console.log(`usuário ${i} deletado`)
          //       i++
          //     })
          //   })
          //   setTimeout(() => {
          //   console.log('Excluindo usuários...')
          //   this.refreshUsers();
          //   if (cont <= 1) {
          //         this.snackBar.showMessage(`${cont} usuário deletado`)
          //       } else {
          //         this.snackBar.showMessage(`${cont} usuários deletados`)
          //       }
          // }, (cont * 300));

          users.forEach((val, key, arr) => {
            this.usersService.deleteUser(val.id).subscribe(data => {
              console.log(data);
              console.log(`usuário ${i} deletado`);
              i++;
              if (Object.is(arr.length-1, key)) {
                this.refreshUsers();
              }
            });
          });

        }
      })
    }
  }

  // Abre o Dialog para adicionar um usuário
  openAddDialog() {
    const dialogRef = this.dialog.open(UserCreateComponent, {
      panelClass: 'custom-dialog'
    });
    dialogRef.afterClosed().subscribe(res => {
      if (res == true) {
        this.showSpinner = true;
          setTimeout(() => {
          console.log('Adicionando usuário...')
          this.refreshUsers();
          this.snackBar.showMessage('Usuário adicionado!')
        }, 500);
      }
    })
  }

  // Abre o Dialog para editar o usuário
  openEditDialog(id: string, name: string, email: string, password: string, permission: number, serverId: string) {
    const dialogRef = this.dialog.open(UserEditComponent, {
      data: {id: id, name: name, email: email, password: password, permission: permission, serverId: serverId}
    });
    dialogRef.afterClosed().subscribe(res => {
      if (res == true) {
        this.showSpinner = true;
          setTimeout(() => {
          console.log('Atualizando usuário...')
          this.refreshUsers();
          this.snackBar.showMessage('Usuário atualizado!')
        }, 500);
      }
    })
  }

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
