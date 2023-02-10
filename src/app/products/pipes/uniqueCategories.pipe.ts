import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from 'src/app/shared/models/product.model';

@Pipe({
  name: 'uniqueCategories'
})
export class UniqueCategoriesPipe implements PipeTransform {

  transform(products: IProduct[]): string[] {
    return [...new Set(products.map(item => item.category))];
  }
}
