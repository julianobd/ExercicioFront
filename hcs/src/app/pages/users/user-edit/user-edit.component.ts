import { User } from './../../../core/models/user.model';
import { Router } from '@angular/router';
import { UsersService } from './../../../core/services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  user: User;

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  updateUser(id: string): void {
    this.usersService.updateUser(this.user).subscribe(data => {
    console.log('produto criado')
    console.log(data)
    this.router.navigate(['/users'])
    })
  }

  cancelar(): void {
    this.router.navigate(['/users'])
  }

}
