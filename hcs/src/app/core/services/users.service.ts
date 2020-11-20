import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  token: string = '37094a58-b07d-47ff-a6d0-13076d2d0d10-5bcbeb03-72c4-4077-83b6-8b1c32769123'

  id: string = '3fa85f64-5717-4562-b3fc-2c963f66afa6'


  constructor(
    private http: HttpClient,
    private jsonp: HttpClientJsonpModule
    )
    { }

  // getUsers() : Observable<any[]> {
  //   return this.http.get<any[]>(`http://hcs.dev4.com.br/api/Users/GetUsers/${this.token}`)
  // }

  // getAdd(user: any) : Observable<any> {
  //   return this.http.post<any>(`http://hcs.dev4.com.br/api/Users/AddUser/${this.token}`)
  // }

  // getUsers(){
  //   const token = this.tokenService.getToken();
  //   return this.http
  //     .get(`http://hcs.dev4.com.br/api/Users/GetUsers/`, { token })
  //     .pipe(map((res) => res));
  // }

  // addUser(){
  //   const token = this.tokenService.getToken();
  //   return this.http
  //     .post(`http://hcs.dev4.com.br/api/Users/AddUser/`, { token })
  //     .pipe(map((res) => res));
  // }

  // deleteUser(id: string){
  //   const token = this.tokenService.getToken();
  //   return this.http
  //     .delete(`http://hcs.dev4.com.br/api/Users/DelUser/${token}/${id}`)
  //     .pipe(map((res) => res));
  // }

  // editUser(id: string){
  //   const token = this.tokenService.getToken();
  //   return this.http
  //     .put(`http://hcs.dev4.com.br/api/Users/EditUser/${token}/${id}`)
  //     .pipe(map((res) => res));
  // }

}


