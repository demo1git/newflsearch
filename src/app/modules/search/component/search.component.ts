import { Component,  ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SearchService } from './../search.service';
import { DataService } from './../../../shared/services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css', '../../../app.component.css']
})
export class SearchComponent implements AfterViewInit {
  title = 'app';
  form: NgForm;
  public values: object = {};

  // To get pricerance and  outputrange HTML elements
  @ViewChild('pricerange') rangeInput: ElementRef;
  @ViewChild('outputrange') outputrange: ElementRef;

  constructor(private searchService: SearchService, private dataService: DataService) {
  }
  ngAfterViewInit() {
     console.log(this.rangeInput.nativeElement.value);
  }

  resetSearchRange() {
    this.rangeInput.nativeElement.value = this.rangeInput.nativeElement.min;
    this.outputrange.nativeElement.innerHTML = ' ' + this.rangeInput.nativeElement.min;
  }

  // Get all flight details of selected date
  getSearchData(f: NgForm) {
    this.resetSearchRange();
    this.form = f;
    this.values = {
      origin: f.value.from,
      destination: f.value.to,
      date: f.value.depart,
      passenger: f.value.passenger
    };
    this.searchService.getFlightSearchData(this.values).subscribe(data => {
      const fldata = {
        origin: f.value.from,
        destination: f.value.to,
        data: data
      };
      this.dataService.flightData(fldata);
    });
  }

  // Filter flight details on basis of price range
  getFlightsByPrice(evnet, price) {
      const fare = { fare: price };
      const myValues = this.values;
      Object.assign(myValues, fare);

      this.searchService.getFlightSearchData(this.values).subscribe(data => {
        const newAry = this.searchService.filterSearch(data, function(a) {
          return Number(a.fare) <= Number(price);
        });

        const fldata = {
          origin: this.form.value.from,
          destination: this.form.value.to,
          data: newAry
        };
        this.dataService.flightData(fldata);
    });
  }
}
