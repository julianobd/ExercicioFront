import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private token:string;


  constructor(private http:HttpClient) {

  }

  setToken(token:string){

    this.token = token;
    console.log(token)
  }

  getToken(){

    return this.token;

  }



}



