
import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import { LoginService } from './../../core/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;




  constructor(private loginService:LoginService, private fb:FormBuilder) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password:''
    })
   }

  ngOnInit(): void {

  }
  save(){

    this.loginService.postLogin(this.form.value).subscribe(res=>console.log(res));
  }

 // emailFormControl = new FormControl('', [
   // Validators.required,
    //Validators.email,
  //]);
}
