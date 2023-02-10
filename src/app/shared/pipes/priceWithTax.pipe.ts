import { Pipe, PipeTransform } from '@angular/core';
import { ProductTaxCal } from '../models/product.model';
import { getProductPriceWithTax } from '../utils/calc-tax';

@Pipe({
  name: 'priceWithTax'
})
export class PriceWithTaxPipe implements PipeTransform {

  transform(product: ProductTaxCal, quantity = 1): number {
    return getProductPriceWithTax(product) * quantity;
  }

}
