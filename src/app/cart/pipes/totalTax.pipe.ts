import { Pipe, PipeTransform } from '@angular/core';
import { CALCULATOR_BASE } from 'src/app/shared/consts/common';
import { cartProduct } from 'src/app/shared/models/product.model';

@Pipe({
  name: 'totalTax'
})
export class TotalTaxPipe implements PipeTransform {

  transform(products: cartProduct[]): number {
    const totalPrice = products.reduce(
      (accumulator, product) => accumulator + product.tax * CALCULATOR_BASE * product.addedQuantity,
      0
    ) ;
    return totalPrice / CALCULATOR_BASE;
  }
}
