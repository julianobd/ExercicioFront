
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';
import { ServerIdService } from './server-id.service';

@Injectable({
  providedIn: 'root'
})
export class GetServerService {
  private dataServer:any
  constructor(public http:HttpClient, private tokenService:TokenService, private serverIdService:ServerIdService) {

  }
  getServer(serveIdNumber:string){
    const userToken = this.tokenService.getToken();
    return this.http.get(`http://hcs.dev4.com.br/api/Servers/GetServer/${userToken}/${serveIdNumber}`)
  }
}
