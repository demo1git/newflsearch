import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { RequestOptions, Request, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SearchService {
  constructor(private http: HttpClient) { }
  ROOT_URL = './assets/data/flight-search-data.json';

  getFlightSearchData(values): Observable<any> {
    return this.http
      .get(this.ROOT_URL)
      .map((res: Response) => {
        const flights = res['flights'];
        return this.filterSearch(flights, function (a) {
          return (String(a.date) === String(values.date) &&
            String(a.origin) === String(values.origin) &&
            String(a.destination) === String(values.destination));
        });
      });
  }

  filterSearch(flights, fun) {
    const returnArry = [];
    for (let i = 0; i < flights.length; i++) {
      if (fun(flights[i])) {
        returnArry.push(flights[i]);
      }
    }
    return returnArry;
  }
}
