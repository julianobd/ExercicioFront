import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { User } from './../../../core/models/user.model';
import { Router } from '@angular/router';
import { UsersService } from './../../../core/services/users.service';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);

  user: User;

  constructor(private usersService: UsersService,
     private router: Router,
     @Inject (MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.user = this.data
  }

  updateUser(): void {
    this.usersService.updateUser(this.user).subscribe(data => {
    console.log('usuário atualizado')
    console.log(data)
    this.router.navigate(['/users'])
    })
  }

  cancelar(): void {
    this.router.navigate(['/users'])
  }

  getErrorMsg() {
    if (this.email.hasError('required')) {
      return 'Preencha o campo'
    }

    return this.email.hasError('email') ? 'Email inválido' : '';
  }

}
