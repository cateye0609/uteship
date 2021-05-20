import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../_models/user.model';
import { catchError, map } from 'rxjs/operators';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private commonService: CommonService
  ) { }

  login(username: string, password: string) {
    const body = {
      username,
      password
    };
    return this.http.post<User>(`${environment.api_url}/User/login`, body)
      .pipe(
        map(res => {
          localStorage.setItem('token', res.jwtToken);
          return res;
        }),
        catchError(err => this.commonService.handleError(err))
      );
  }
}
