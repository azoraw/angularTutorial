import { Injectable } from '@angular/core';
import { AuthServiceInterface } from '../utils/models';
import { HttpClient } from '@angular/common/http';
import { Api } from '../utils/api';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements AuthServiceInterface {

  private _access: boolean;

  public get access(): boolean {
    return this._access;
  }

  constructor(private http: HttpClient) {
    this.logged();
  }

  logged(): void {
    this.http.get(Api.LOGGED_END_POINT).subscribe((resp) => {
      this._access = true;
    })
  }
  logIn(formData: { username: any; password: any; }): void {
    this.http.post(Api.LOGIN_END_POINT, formData)
      .subscribe((resp) => {
        this._access = true;
      })
  }
  logOut(): void {
    this.http.get(Api.LOGOUT_END_POINT).subscribe(() => {
      this._access = false;
    })
  }

}
