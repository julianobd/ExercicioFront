import { User } from './../../../core/models/user.model';
import { Router } from '@angular/router';
import { UsersService } from './../../../core/services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  user: User = {
    name: '',
    email: '',
    password: '',
    permission: 0,
    serverId: '6435FB94-2328-4F34-B590-68441F8BD936'
  }

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  addUser(): void {
    this.usersService.addUser(this.user).subscribe(data => {
    console.log('produto criado')
    console.log(data)
    this.router.navigate(['/users'])
    })
  }

  cancelar(): void {
    this.router.navigate(['/users'])
  }

}
