import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FactsService {
  factsUrl = 'https://api.api-ninjas.com/v1/facts?limit=1';  // URL to web api
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'X-Api-Key': 'Mh9swz2FAT2yWOB9TMYr6A==bNViZFDaoV4t1MUV'
    })
  }

 /** GET heroes from the server */
 getFacts(): Observable<any> {

  return this.http.get<any>(this.factsUrl, {headers: this.httpOptions.headers})

}

}
