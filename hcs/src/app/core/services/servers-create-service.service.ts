
import { TokenService } from './token.service';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServersCreateServiceService {


  constructor(private http:HttpClient, private tokenService:TokenService) {

  }
  saveServer(data){
      console.log(data)
      const token = this.tokenService.getToken();

    const params = {
      name: data.name,
      shared: data.shared,
      hasDisease: data.hasDisease,
      initialMoney: data.initialMoney,
      initialStatsPoints: data.initialStatsPoints

    }

      return this.http.post(`http://hcs.dev4.com.br/api/Servers/AddServers/${token}`,params).pipe(map((res:string) => res))


  }
}
