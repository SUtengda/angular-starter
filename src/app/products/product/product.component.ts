import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from 'src/app/shared/models/product.model';
import { IAddToCartEventData } from '../models/products.interfaces';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: IProduct | undefined;
  @Output() addToCartEvent = new EventEmitter<IAddToCartEventData>();

  quantity = 1;

  addToCart(product: IProduct): void {
    if(product.quantity <= 0) {
      this.quantity = 0;
      return;
    }
    if(product.quantity < this.quantity) {
      this.quantity = product.quantity;
    }
    this.addToCartEvent.emit({
      product,
      quantity: this.quantity
    })
  }
}
