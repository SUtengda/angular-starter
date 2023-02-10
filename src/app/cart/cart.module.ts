import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { TotalPriceWithTaxPipe } from './pipes/totalPriceWithTax.pipe';
import { TotalTaxPipe } from './pipes/totalTax.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  declarations: [CartComponent, TotalPriceWithTaxPipe, TotalTaxPipe]
})
export class CartModule { }
