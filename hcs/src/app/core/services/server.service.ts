import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  public serverService:ServerService

  readonly apiUrl: string;

  constructor( private http: HttpClient, private tokenServices: TokenService) {


    this.apiUrl = 'http://hcs.dev4.com.br/api/ListServers/';
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
   }




