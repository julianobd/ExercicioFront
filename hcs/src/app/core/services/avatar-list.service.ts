import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Avatar, RequestAvatar, ResponseAvatar, ResponseAvatarUpdate } from '../models/avatar.model';


@Injectable({
  providedIn: 'root'
})
export class AvatarListService {

  private url = 'http://hcs.dev4.com.br/api/Avatar/ListAvatars';

  userToken: string = 'b025d2a9-d4c2-4f43-ae44-7d7fdec96f52-b92bd7ce-ec93-4b10-a916-8beda4181f3f';

  serverId: string = '00c0808b-cb1c-4802-92dd-1500833bc264';

  id: string = '';

  constructor(private http: HttpClient) { }

   getAvatar(): Observable<ResponseAvatar>{
     return this.http.get<ResponseAvatar>(this.url + '/' + `${this.userToken}` + '/' + `${this.serverId}`);
   }

   getAvatarEdit(id: string): Observable<ResponseAvatar>{
    const _url = `http://hcs.dev4.com.br/api/Avatar/EditAvatar/${this.userToken}/${this.id}`;

    return this.http.get<ResponseAvatar>(_url);
  }

   updateAvatar(id: string, request: RequestAvatar): Observable<ResponseAvatarUpdate>{
    const _url = `http://hcs.dev4.com.br/api/Avatar/EditAvatar/${this.userToken}/${id}`;

    return this.http.put<ResponseAvatarUpdate>(_url, request);
  }



}
