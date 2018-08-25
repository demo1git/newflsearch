import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders  } from '@angular/core';
import { RoundPipe } from './pipes/round.pipe';

@NgModule({
  declarations: [
    RoundPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [CommonModule, RoundPipe]
})
export class SharedModule {}
