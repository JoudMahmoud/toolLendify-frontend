import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  private isLoggedSubject: BehaviorSubject<boolean>;
  private url: string = `${environment.apiUrl}`;

  constructor(private httpClient: HttpClient) {
    this.isLoggedSubject = new BehaviorSubject<boolean>(false);
  }

  Register(
    userName: string,
    password: string,
    confirmPassword: string,
    email: string
  ) :Observable<any> {
    const registerDAta = { userName, password, confirmPassword, email };

    return this.httpClient.post<any>(`${this.url}/register`, registerDAta);
  }

  Login(
    email: string,
    password: string,
    rememberMe:boolean
  ):Observable<any>{
    const loginData = { email, password, rememberMe };
    return this.httpClient.post<any>(`${this.url}/login`, loginData);
  }
}
