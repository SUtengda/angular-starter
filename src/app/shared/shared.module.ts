import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceWithTaxPipe } from './pipes/priceWithTax.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PriceWithTaxPipe  
  ],
  exports: [
    PriceWithTaxPipe
  ]
})
export class SharedModule { }
