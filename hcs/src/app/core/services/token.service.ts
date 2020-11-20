import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private token:string;

  constructor(private http:HttpClient) {

  }
  getToken(){
    return this.token;
  }
  setToken(token:string){
    this.token = token;
  }

}



