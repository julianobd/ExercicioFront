import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { RequestAvatar, ResponseAvatar, ResponseAvatarUpdate } from '../models/avatar.model';


@Injectable({
  providedIn: 'root'
})
export class AvatarListService {

  private url = 'http://hcs.dev4.com.br/api/Avatar/ListAvatars';

  userToken: string = '20b314e0-6589-4738-8bf8-ca9cdf57f45e-ecb9ee4f-d890-49b0-9a64-ecf5d45390ce';

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
