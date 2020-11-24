import { TokenService } from './token.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServersCreateServiceService {

  //token:string = '2b8fcec6-6477-412a-a000-b05acbcb3dd0-440ad0f8-9257-4236-9db4-207704fddc9a'
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
