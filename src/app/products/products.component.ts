import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { cartProduct, IProduct } from '../shared/models/product.model';
import { CartService } from '../shared/services/cart.service';
import { ProductsService } from '../shared/services/products.service';
import { IAddToCartEventData } from './models/products.interfaces';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products$!: Observable<IProduct[]>;
  cartProducts$!: Observable<cartProduct[]>;
  selectedCategory: string | null = null ;

  constructor(
    private productsService: ProductsService,
    private cartService: CartService
  ) { 
    this.products$ = this.productsService.products$;
    this.cartProducts$ = this.cartService.cartProducts$;
  }

  addToCart(e: IAddToCartEventData) {
    this.cartService.addToCart(e.product, e.quantity)
  }
}
