import { Observable } from 'rxjs';
import { TokenService } from './token.service';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServersCreateServiceService {

  token:any ='4f27a4e6-13aa-46ab-b32c-230b80f03167-642b8cd5-2b4d-45e5-bf67-57bbcf5e8520'
  constructor(private http:HttpClient, private tokenService:TokenService) {

  }
  postServer(data){
      console.log(data)
    const params = {
      name: data.name,
      shared: data.shared,
      initialMoney: data.initialMoney,
      initialStatsPoints: data.initialStatsPoints
    }
      return this.http.post(`http://hcs.dev4.com.br/api/Servers/AddServers/${this.token}`,params)


  }
}
