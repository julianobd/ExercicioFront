import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestServer, ResponseServerUpdate, ServerListRsponse } from '../models/server-list.model';

@Injectable({
  providedIn: 'root'
})
export class ServicesEditService {

  private url = 'http://hcs.dev4.com.br/api/Servers/GetServer';

  userToken: string = '20b314e0-6589-4738-8bf8-ca9cdf57f45e-ecb9ee4f-d890-49b0-9a64-ecf5d45390ce';

  serverId: string = '00c0808b-cb1c-4802-92dd-1500833bc264';

  constructor(private http: HttpClient) { }

  getServer(): Observable<ServerListRsponse>{
    return this.http.get<ServerListRsponse>(this.url + '/' + `${this.userToken}` + '/' + `${this.serverId}`);
  }

  updateServer(serverId: string , request: RequestServer): Observable<ResponseServerUpdate>{
    const _url = `http://hcs.dev4.com.br/api/Servers/EditAvailableItems/${this.userToken}/${serverId}`;

    return this.http.put<ResponseServerUpdate>(_url, request);
  }
}
