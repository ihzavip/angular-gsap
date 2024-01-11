import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(
    private http: HttpClient,
  ) { }

  private url = "http://localhost:8081";

  getUsers() {
    return this.http.get(`${this.url}/users`);
  }

  createUser(user: any): Observable<any> {
    return this.http.post(`${this.url}/register`, user);
  }

  login(user: any): Observable<any> {
    return this.http.post(`${this.url}/login`, user);
  }
}
