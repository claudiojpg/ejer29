import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl: string = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) { }

  obtenerPersonajes(): Observable<any> {
    return this.http.get(`${this.baseUrl}/character`);
  }
}
