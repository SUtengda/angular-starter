import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from 'src/app/shared/models/product.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(products: IProduct[], category: string | null): IProduct[] {
    if (!products) return [];
    if (!category) return products;
    return products.filter(product => product.category?.toLowerCase() === category?.toLowerCase())
  }
}
