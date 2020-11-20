import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ResponseAvatar } from '../models/avatar.model';


@Injectable({
  providedIn: 'root'
})
export class AvatarListService {

  private url = 'http://hcs.dev4.com.br/api/Avatar/ListAvatars';

  userToken: string = 'c46e7330-aac7-41f3-8049-789461e91e8f-9f44feb8-e1a8-4ad8-938a-af97a6e4d23b';

  serverId: string = '00c0808b-cb1c-4802-92dd-1500833bc264';

  constructor(private http: HttpClient) { }

   getAvatar(): Observable<ResponseAvatar>{
     return this.http.get<ResponseAvatar>(this.url + '/' + `${this.userToken}` + '/' + `${this.serverId}`);
   }

   getAvatarEdit(): Observable<ResponseAvatar>{
    return this.http.get<ResponseAvatar>(this.url + '/' + `${this.userToken}` + '/' + `${this.serverId}`);
  }
}
