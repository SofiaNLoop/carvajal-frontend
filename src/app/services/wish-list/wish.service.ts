import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service';
import { User } from '../../models/User';

@Injectable({
  providedIn: 'root'
})
export class WishService {

  url_api = 'http://localhost:3000/api/wishlist'

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
  getProductsWish (  ): Observable<any> {
    const idus = this.logM.user._id;
    const url =  `${this.url_api}/${ idus }`;
    return this.http.get(url, this.headers);

  }

  postProducts( idprod: any ): Observable<any> {
    const idus = this.logM.user._id;

    const url =  `${this.url_api}/${ idus }/${ idprod }`;
    return this.http.post(url, this.headers);
  }

  deleteProducts( idprod: any ): Observable<any> {
    const idus = this.logM.user._id;
    const url =  `${this.url_api}/${ idus }/${ idprod }`;
    return this.http.delete(url, this.headers);
  }


}
