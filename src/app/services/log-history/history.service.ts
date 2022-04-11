import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  url_api = 'http://localhost:3000/api/history'



  constructor( private http:HttpClient, private logM: LoginService ) { }

  // Getters
  get token(): string {
    return localStorage.getItem('token')  || '';
  }

  get headers() {
    return {
      headers: {
        'x-token': this.token
      }
    }
  }



  // Methods
  getHistory(){
    const idus = this.logM.user._id;
    const url =  `${this.url_api}/${ idus }`;
    return this.http.get(url, this.headers);
  }


}
