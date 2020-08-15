import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './auth.model';

interface SetLoginData {
  success: string;
}
interface GetUserData {
  success: true;
  data: User;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  setLogin({ email, password }): Observable<SetLoginData> {
    return this.http.post<SetLoginData>(
      'http://localhost:5000/api/auth/login',
      { email, password },
      { withCredentials: true }
    );
  }

  getUser(): Observable<GetUserData> {
    return this.http.get<GetUserData>('http://localhost:5000/api/auth/me', {
      withCredentials: true,
    });
  }
}
