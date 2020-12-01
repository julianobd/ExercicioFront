import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerIdService } from './server-id.service';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AddExpTableService {
 // token:string = '635b2714-b006-491c-b985-10888a2c098b-7a817d90-96bd-4c78-8d3d-8229fef5b4c6';
  id:string;
  constructor(private http:HttpClient, private tokenService:TokenService, private serverIdService:ServerIdService ) {

   }


  getId(id:string){
    const userToken = this.tokenService.getToken();
    const serverId = this.serverIdService.getServerId();
    return this.http.get(`http://hcs.dev4.com.br/api/Servers/GetServer/${userToken}/${serverId}`)
  }

  editExpTable(experience){
    const userToken = this.tokenService.getToken();
    const serverId = this.serverIdService.getServerId();
    return this.http.put(`http://hcs.dev4.com.br/api/Servers/EditExpTable/${userToken}/${serverId}`,experience)
  }


}
