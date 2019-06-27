import { Injectable } from '@angular/core';
import { HttpServiceInterface } from '../utils/models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Api } from '../utils/api';


@Injectable({
  providedIn: 'root'
})
export class ItemsService implements HttpServiceInterface {

  constructor(private http: HttpClient) { }

  fetch(params?: any): Observable<any> {
   return this.http.get(Api.ITEMS_END_POINT, {params});
  }
  add(item: any): Observable<any> {
    return this.http.post(Api.ITEMS_END_POINT, item)
  }
  update(item: any): Observable<any> {
    throw new Error("Method not implemented.");
  }
  remove(id: any): Observable<any> {
    return this.http.delete(Api.ITEMS_END_POINT + '/' + id)
  }

  get(id: any): Observable<any> {
    return this.http.get(Api.ITEMS_END_POINT + '/' + id);

  }

}
