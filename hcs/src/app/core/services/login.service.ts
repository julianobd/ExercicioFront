import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  readonly apiURL : string;

  constructor(private http:HttpClient) {
    this.apiURL = 'http://hcs.dev4.com.br/api/Login/Login';
   }

   postLogin(login){
     const dados = {
       email: login.email,
       password: login.password
     }
     return this.http.post(`${this.apiURL}`,dados)
   }
}
