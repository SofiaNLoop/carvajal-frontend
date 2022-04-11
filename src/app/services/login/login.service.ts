import { Injectable } from '@angular/core';
import { tap, map, catchError } from 'rxjs/operators'


import { HttpClient } from '@angular/common/http';
import { Observable, of  } from 'rxjs';
import { Router } from '@angular/router';
import { LoginForm } from 'src/app/interfaces/loginForm';
import { User } from '../../models/User';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url_api = 'http://localhost:3000/api/user';

  public user: User = new User;

  constructor( private http:HttpClient, private router: Router ) { }


  login( formData: LoginForm ): Observable<any> {
    console.log(formData);
    return this.http.post(this.url_api, formData)
          .pipe(
            tap( (resp: any) => {
              localStorage.setItem('token', resp.token)
            } )
          )
  }


  validateToken(): Observable<boolean> {
    const token = localStorage.getItem('token') || '';

    return this.http.get(`${this.url_api}/renew`, {
      headers: {
        'x-token': token
      }
    }).pipe(
      tap( (resp: any) => {

        const {_id ,name, last_name, email,
          password  } = resp.usLog;

        this.user = new User(  _id,
          name, last_name, email, ''
        );

        localStorage.setItem('token', resp.token)
    }),
    map( resp => true),
    catchError( error  => of(false) )
    );

  }

}
