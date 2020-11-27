import { Router } from '@angular/router';
import { UsersService } from './../../../core/services/users.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-users-delete-many',
  templateUrl: './users-delete-many.component.html',
  styleUrls: ['./users-delete-many.component.scss']
})
export class UsersDeleteManyComponent implements OnInit {

  constructor(
    private usersService: UsersService,
    private router: Router,
    @Inject (MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {  }

  // Deleta o usuário

}
