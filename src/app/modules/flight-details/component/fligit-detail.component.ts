import { Component, Input } from '@angular/core';
import { DataService } from './../../../shared/services/data.service';
import { FlightDetails } from '../model/flight-details';
import { RoundPipe } from './../../../shared/pipes/round.pipe';

@Component({
  selector: 'app-flight-detail',
  templateUrl: './flight-detail.component.html',
  styleUrls: ['./flight-detail.component.css', '../../../app.component.css'],
  providers: [RoundPipe]
})
export class FlightDetailComponent {

  @Input() flightDetail: FlightDetails[];
  @Input() breadcrumb: Object;
  isSpinner: boolean;
  constructor() {
  }
  title = 'app';
}
