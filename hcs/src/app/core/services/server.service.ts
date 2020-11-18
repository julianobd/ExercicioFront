import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  apiUrl: HttpClient;
  constructor( private http: HttpClient) { }
}

/*
getUsers(){
  const token = this.tokenService.getToken();
  return this.http
    .get(`url da api....`, {token} )
    .pipe(map((res) => res));
    */
