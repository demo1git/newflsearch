import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightDetailModule } from './modules/flight-details/flight-detail.module';
import { SearchModule } from './modules/search/search.module';
import { HeaderComponent} from './core/header/header.componet';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './shared/services/data.service';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    FlightDetailModule,
    SearchModule.forRoot()
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
