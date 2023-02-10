import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { cartProduct, IProduct } from '../models/product.model';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _cartProducts = new BehaviorSubject<cartProduct[]>([])
  readonly cartProducts$: Observable<cartProduct[]> = this._cartProducts.asObservable();

  get cartProducts(): cartProduct[] {
    return this._cartProducts.value;
  }

  set cartProducts(products: cartProduct[]) {
    this._cartProducts.next(products);
  }

  constructor(
    private productsService: ProductsService
  ) {  }

  addToCart(product: IProduct, quantity = 1): void {
    const productAdded = this.cartProducts.find(item => product.id === item.id);
    if(productAdded) {
      productAdded.addedQuantity += quantity;
      this.cartProducts = [...this.cartProducts];
    } else {
      const productToAdd = new cartProduct(product, quantity);
      this.cartProducts = [...this.cartProducts, productToAdd];
    }
    product.quantity -= quantity;
  }
  
  decreaseQuantityFromCart(product: cartProduct): void {
    const targetCartProductIndex = this.cartProducts.findIndex(item => product.id === item.id);
    const targetCartProduct = this.cartProducts[targetCartProductIndex];
    const targetProduct = this.productsService.products.find(item => product.id === item.id)
  
    if(targetCartProductIndex != -1) {
      if(targetCartProduct.addedQuantity > 0) {
        targetCartProduct.addedQuantity --;
      } 
      if(targetCartProduct.addedQuantity === 0) {
        this.cartProducts.splice(targetCartProductIndex, 1);
      }
      this.cartProducts = [...this.cartProducts]
      targetProduct && targetProduct.quantity++;
    }
    

  }

}
