import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class MoviesApiService {

  constructor( private http: HttpClient ) {}

  getMovies() {
    const url_api = 'http://www.mocky.io/v2/5dc3c053300000540034757b';
    return this.http.get(url_api);
  }

}
