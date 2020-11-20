import { Router } from '@angular/router';
import { UsersService } from './../../../core/services/users.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.scss']
})
export class UserDeleteComponent implements OnInit {

  constructor(
    private usersService: UsersService,
    private router: Router,
    @Inject (MAT_DIALOG_DATA) public user: any
  ) { }

  ngOnInit(): void {  }

  // Deleta o usuário
  deleteUser(id: string) {
    this.usersService.deleteUser(id).subscribe(data => {
      console.log(data)
      console.log('usuário deletado')
    })
  }

}
