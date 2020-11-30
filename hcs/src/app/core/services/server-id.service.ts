import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerIdService {
  private id:string;
  constructor() { }

  setServerId(serverId:string){
    this.id = serverId;

  }
  getServerId(){
    return this.id;
  }
}
