import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://thedevarg.pythonanywhere.com/login';  

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const body = { username, password };

    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'x-access-token': '123'
    // });

    return this.http.post<any>(this.apiUrl, body);
  }
}
