import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { TotalPriceWithTaxPipe } from './pipes/totalPriceWithTax.pipe';
import { TotalTaxPipe } from './pipes/totalTax.pipe';
import { CartRoutingModule } from './cart-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CartRoutingModule,
    SharedModule
  ],
  declarations: [CartComponent, TotalPriceWithTaxPipe, TotalTaxPipe]
})
export class CartModule { }
