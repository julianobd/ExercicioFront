import { TokenService } from './token.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServersCreateServiceService {

  //token:string = '2141f6cc-412e-4106-af81-bb6409f30701-d89d432b-16e2-4141-ae12-dcb5c05475e3'
  constructor(private http:HttpClient, private tokenService:TokenService) {

  }
  saveServer(data){
      console.log(data)
     const userToken = this.tokenService.getToken();
    const params = {
      name: data.name,
      shared: data.shared,
      hasDisease: data.hasDisease,
      initialMoney: data.initialMoney,
      initialStatsPoints: data.initialStatsPoints

    }

        console.log(userToken);
       return this.http.post(`http://hcs.dev4.com.br/api/Servers/AddServers/${userToken}`,params)




  }


}
