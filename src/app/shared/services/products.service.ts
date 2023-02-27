import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  readonly _mockProductsURL = "assets/products.json";
  private _products = new BehaviorSubject<IProduct[]>([]);
  readonly products$: Observable<IProduct[]> = this._products.asObservable();

  get products(): IProduct[] {
    return this._products.value;
  }

  set products(products: IProduct[]) {
    this._products.next(products);
  }

  constructor(
    private httpClient: HttpClient
  ) { 
    this.initProducts();
  }

  initProducts() {
    this.httpClient.get<IProduct[]>(this._mockProductsURL).subscribe(products => this.products = products);
  }

  // initProducts() {
  //   this.getProducts().subscribe(products => this.products = products);
  // }

  // getProducts(): Observable<IProduct[]> {
  //   return this.httpClient.get<IProduct[]>(this._mockProductsURL);
  // }
}
