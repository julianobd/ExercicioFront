import { Validators, FormControl } from '@angular/forms';
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

  email = new FormControl('', [Validators.required, Validators.email]);

  user: User = {
    name: '',
    email: '',
    password: '',
    permission: 0,
    serverId: '6435FB94-2328-4F34-B590-68441F8BD936'
  }

  constructor(
    private usersService: UsersService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  // Função para adicionar usuário
  addUser(): void {
    // this.usersService.addUser(this.user).subscribe(data => {
    // console.log('produto criado')
    // console.log(data)
    // })
    console.log(this.user)
  }

  // Cancelar a tela de edição de usuário
  cancelar(): void {
    this.router.navigate(['/users'])
  }


  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Preencha o campo'
    }

    return this.email.hasError('email') ? 'Email inválido' : '';
  }

}
