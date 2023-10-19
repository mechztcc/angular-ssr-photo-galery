import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  api = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  login(payload: { email: string; password: string }): Observable<any> {
    return this.http.post<any>(`${this.api}/auth`, payload);
  }

  findPhotos(): Observable<any> {
    return this.http.get<any>(`${this.api}/photo/list`);
  }
}
