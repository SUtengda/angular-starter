/* tslint:disable:no-unused-variable */

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, inject } from '@angular/core/testing';
import { CartService } from './cart.service';

const mockProductBook = {
  "id": 19,
  "productName": "the power of habit",
  "price": 11.84,
  "quantity": 4,
  "isImported": false,
  "category": "Books"
}
const mockProductElectric = {
  "id": 16,
  "productName": "USB Flash Drive 64GB",
  "price": 9.18,
  "quantity": 8,
  "isImported": true,
  "category": "Electric"
}

describe('Service: Cart', () => {
  let cartService: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CartService],
    });
  });

  beforeEach(() => {
    cartService = TestBed.inject(CartService);
  });

  it('should ...', inject([CartService], (service: CartService) => {
    expect(service).toBeTruthy();
  }));

  it('should add one new items to cart', () => {
    cartService.addToCart(mockProductBook)
    expect(cartService.cartProducts.length).toBe(1);
    expect(cartService.cartProducts[0].addedQuantity).toBe(1);
  });
  it('should add two books to cart ', () => {
    cartService.addToCart(mockProductBook, 2)
    expect(cartService.cartProducts.length).toBe(1);
    expect(cartService.cartProducts[0].addedQuantity).toBe(2);
  });
  it('should add two different items to cart', () => {
    cartService.addToCart(mockProductBook)
    cartService.addToCart(mockProductElectric)
    expect(cartService.cartProducts.length).toBe(2);
  });
  it('should decrease quantity', () => {
    cartService.cartProducts = [
      {
        "id": 1,
        "productName": "",
        "price": 1,
        "quantity": 7,
        "isImported": true,
        "category": "Food",
        "addedQuantity": 3,
        "tax": 0.1,
        "priceWithTax": 1
      }
    ]
    cartService.decreaseQuantityFromCart(cartService.cartProducts[0])
    expect(cartService.cartProducts[0].addedQuantity).toBe(2);

  });

  it('should remove product from cart when addedQuantity is 0', () => {
    cartService.cartProducts = [
      {
        "id": 1,
        "productName": "",
        "price": 1,
        "quantity": 7,
        "isImported": true,
        "category": "Food",
        "addedQuantity": 2,
        "tax": 0.1,
        "priceWithTax": 1
      }
    ]
    cartService.decreaseQuantityFromCart(cartService.cartProducts[0])
    cartService.decreaseQuantityFromCart(cartService.cartProducts[0])
    expect(cartService.cartProducts.length).toBe(0);

  });
});
