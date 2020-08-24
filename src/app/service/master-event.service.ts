import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable( {
  providedIn: 'root'
} )
export class MasterEventService
{

  constructor (
    private http: HttpClient
  ) { }


  getConfig ()
  {
    let url = 'https://api.covid19india.org/data.json';
    return this.http.get( url );
  }
}
