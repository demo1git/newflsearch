import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlightDetailComponent } from './component/fligit-detail.component';
import { BreadcrumbComponent } from './component/breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [
    FlightDetailComponent,
    BreadcrumbComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CommonModule, FlightDetailComponent, BreadcrumbComponent]
})
export class FlightDetailModule { }
