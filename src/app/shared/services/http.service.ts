import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PhotoInterface } from '../types/photo.interface';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  login(payload: { email: string; password: string }): Observable<any> {
    return this.http.post<any>(`auth`, payload);
  }

  findPhotos(): Observable<PhotoInterface[]> {
    return this.http.get<PhotoInterface[]>(`photo/list`);
  }

  uploadFile(payload: FormData): Observable<PhotoInterface> {
    return this.http.post<any>(`photo`, payload);
  }
}
