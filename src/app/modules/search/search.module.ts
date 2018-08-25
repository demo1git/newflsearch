import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule, ModuleWithProviders  } from '@angular/core';

import { SearchComponent } from './component/search.component';
import { SearchService } from './search.service';

@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [CommonModule, FormsModule, SearchComponent]
})
export class SearchModule {
  static forRoot(): ModuleWithProviders  {
    return {
      ngModule: SearchModule,
      providers: [SearchService]
    };
  }
 }
