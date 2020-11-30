import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestServer, ResponseServerUpdate, ServerListRsponse } from '../models/server-list.model';

@Injectable({
  providedIn: 'root'
})
export class ServicesEditService {

  private url = 'http://hcs.dev4.com.br/api/Servers/GetServer';

  userToken: string = 'b025d2a9-d4c2-4f43-ae44-7d7fdec96f52-b92bd7ce-ec93-4b10-a916-8beda4181f3f';

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
