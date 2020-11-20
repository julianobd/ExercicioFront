import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { ExpMachines } from '../models/expMachines';

@Injectable({
  providedIn: 'root'
})
export class ExpMachinesService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  token: string = '37094a58-b07d-47ff-a6d0-13076d2d0d10-5bcbeb03-72c4-4077-83b6-8b1c32769123'
  serverId: string = "00c0808b-cb1c-4802-92dd-1500833bc264"

  constructor(private http: HttpClient) { }


  getAll() : Observable<ExpMachines[]> { // get data from server
    return this.http.get<ExpMachines[]>(`http://hcs.dev4.com.br/api/ExpMachines/GetExpMachines/${this.token}/${this.serverId}`)
    .pipe(
      catchError(this.handleError<ExpMachines[]>('getAll', []))
    )
  }

  edit(expMachines: ExpMachines, id: string): Observable<any>{
    return this.http.put(`http://hcs.dev4.com.br/api/ExpMachines/EditExpMachine/${this.token}/${id}`, expMachines, this.httpOptions)
    .pipe(
      catchError(this.handleError<any>('editMachine'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
}
}