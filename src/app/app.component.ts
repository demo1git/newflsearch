import { Component } from '@angular/core';
import { DataService } from './shared/services/data.service';
import { FlightDetails } from './modules/flight-details/model/flight-details';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  flightDetails: FlightDetails[];
  breadcrumb: object;

  constructor(private dataService: DataService) {
    this.dataService.data$.subscribe(data => {
      this.flightDetails = undefined;
      this.breadcrumb = {
        origin: data.origin,
        destination: data.destination
      };
      // this.flightDetails = data.data;
      data.data.sort(this.sortArray('fare'));
      this.flightDetails = data.data;
    });
  }

  sortArray (prop) {
    return function (x, y) {
        return ((x[prop] === y[prop]) ? 0 : (( parseInt(x[prop], 10) > parseInt(y[prop], 10)) ? 1 : -1));
    };
  }
}
