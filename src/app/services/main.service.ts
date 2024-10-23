import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  
  private apiUrl = 'https://thedevarg.pythonanywhere.com/index'; 

  constructor(private http: HttpClient) { }

  index(token: string): Observable<any> {
    const headers = new HttpHeaders({
      'x-access-token': `${token}`,
      'Content-Type': 'application/json'
    });

    return this.http.get<any>(this.apiUrl, { headers });
  }
}