import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class DataService {
  data$: Observable<any>;
  private dataSubject = new Subject<any>();

  constructor() {
    this.data$ = this.dataSubject.asObservable();
  }

  /**
   * @param data
   * Pass data to data service which get subscribe by component
   */
  flightData(data) {
    this.dataSubject.next(data);
  }
}
