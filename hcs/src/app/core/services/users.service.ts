import { User } from './../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private token: string = '37094a58-b07d-47ff-a6d0-13076d2d0d10-5bcbeb03-72c4-4077-83b6-8b1c32769123'

  constructor(private http: HttpClient) { }



  getUsers() : Observable<User[]> {
    return this.http.get<User[]>(`http://hcs.dev4.com.br/api/Users/GetUsers/${this.token}`)
  }

  addUser(user: User) : Observable<User> {
    return this.http.post<User>(`http://hcs.dev4.com.br/api/Users/AddUser/${this.token}`, user)
  }

  deleteUser(id: string) : Observable<User> {
    return this.http.delete<User>(`http://hcs.dev4.com.br/api/Users/DelUser/${this.token}/${id}`)
  }

  updateUser(user: User) : Observable<any> {
    return this.http.put(`http://hcs.dev4.com.br/api/Users/EditUser/${this.token}/${user.id}`, user)
  }
}


