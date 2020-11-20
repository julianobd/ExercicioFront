import { UsersService } from './../../core/services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  // LISTA DE USUÁRIOS
  users: any[] = [];
  user: any = {};

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    // this.usersService.getUsers().subscribe(users => {
    //   this.users = users
    //   console.log(users, 'dados obtidos')
    //   console.log(this.users, 'dados armazenados')
    // })
  }

  // addUser(): void {
  //   this.usersService.getAdd(this.user)
  //   console.log('produto criado')
  // }

  // getUsers() {
  //   this.usersService.getUsers().subscribe( data => {
  //     this.users = data;
  //     console.log(data)
  //     console.log(this.users)
  //   })
  // }

  // addUser() {
  //   this.usersService.addUser().subscribe( data => {
  //     this.users = [];
  //   })
  // }

}
