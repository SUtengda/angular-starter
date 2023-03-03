import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceWithTaxPipe } from './pipes/priceWithTax.pipe';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule
  ],
  declarations: [
    PriceWithTaxPipe  
  ],
  exports: [
    PriceWithTaxPipe,
    TranslateModule
  ]
})
export class SharedModule { }
