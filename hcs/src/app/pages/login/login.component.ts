import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder} from '@angular/forms';
import { LoginService } from './../../core/services/login.service';
import { TokenService } from './../../core/services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  numberToken: string;
  data: any;
  currentUser:any;



  constructor(private loginService:LoginService, private fb:FormBuilder, private tokenService:TokenService,private router:Router) {
    this.form = this.fb.group({
      email: ['', [Validators.required]],
      password:['',[Validators.required]]
    })
   }

  ngOnInit(): void {

  }
  save(){
    this.loginService.postLogin(this.form.value).subscribe((res:any)=>{
      // this.tokenService.setToken(res.token);
      sessionStorage.setItem('user', JSON.stringify(res));
      // this.currentUser = JSON.parse(sessionStorage.getItem('user'));
      // this.loginService.setUserdata(this.currentUser);
      // console.log('usuario salvo', this.currentUser)
      this.router.navigate(['../getServer']);
    });
  }



 // emailFormControl = new FormControl('', [
   // Validators.required,
    //Validators.email,
  //]);
}
