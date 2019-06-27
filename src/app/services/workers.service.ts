import { Injectable } from '@angular/core';
import { HttpServiceInterface } from '../utils/models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Api } from '../utils/api';

@Injectable({
  providedIn: 'root'
})
export class WorkersService implements HttpServiceInterface {

  constructor(private http: HttpClient) { }

  fetch(params?: any): Observable<any> {
    return this.http.get(Api.WORKERS_END_POINT);
  }
  add(item: any): Observable<any> {
    throw new Error("Method not implemented.");
  }
  update(item: any): Observable<any> {
    throw new Error("Method not implemented.");
  }
  remove(id: any): Observable<any> {
    return this.http.delete(Api.WORKERS_END_POINT + "/" + id);
  }

 

}
