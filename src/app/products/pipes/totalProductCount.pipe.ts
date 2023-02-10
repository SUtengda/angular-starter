import { Pipe, PipeTransform } from '@angular/core';
import { cartProduct } from 'src/app/shared/models/product.model';

@Pipe({
  name: 'totalProductCount'
})
export class TotalProductCountPipe implements PipeTransform {

  transform(products: cartProduct[]): number {
    const count = products.reduce(
      (accumulator, product) => accumulator + product.addedQuantity,
      0
    ) ;
    return count;
  }
}
