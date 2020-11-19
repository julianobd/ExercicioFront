import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  public serverService:ServerService

  readonly apiUrl: string;

  constructor( private http: HttpClient) {
    this.apiUrl = 'http://hcs.dev4.com.br/api/Servers/ListServers';
   }

  getServersList(){
    const getServers = this.serverService.apiUrl;
    return this.http
    .get(`${ this.apiUrl}/id`)
    .pipe(map((res) => res));
   }

}


