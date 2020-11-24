import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  token: string = '37094a58-b07d-47ff-a6d0-13076d2d0d10-5bcbeb03-72c4-4077-83b6-8b1c32769123'

  public serverService:ServerService


  readonly apiUrl: string;

  constructor( private http: HttpClient, private tokenServices: TokenService) {


    this.apiUrl = `http://hcs.dev4.com.br/api/Servers/ListServers/${this.token}`;



   }

  getServerstoken(){
    const token = this.tokenServices.getToken();
    return this.http
    .get(this.apiUrl)
    .pipe(map((res) => res));
   }

   getServersList() : Observable<any[]> {
      return this.http.get<any[]>(this.apiUrl)
    }

    listServers(){
      return this.http.get(this.apiUrl)
    }
   }




