import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { cartProduct } from '../shared/models/product.model';
import { CartService } from '../shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  cartProducts$!: Observable<cartProduct[]>;

  constructor(
    private cartService: CartService
  ) { 
    this.cartProducts$ = this.cartService.cartProducts$;
  }

  decreaseQuantity(product: cartProduct) {
    this.cartService.decreaseQuantityFromCart(product);
  }

}
