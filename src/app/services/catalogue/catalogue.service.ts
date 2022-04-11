import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { loadPage } from 'src/app/interfaces/loadPage';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  url_api = 'http://localhost:3000/api/product'

  constructor( private http:HttpClient ) { }

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
  getAllProducts( desde: number = 0 ): Observable<any> {
    const url =  `${this.url_api}?desde=${ desde }`;
    return this.http.get<loadPage>(url, this.headers);

  }


}
