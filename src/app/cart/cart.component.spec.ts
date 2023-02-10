/* tslint:disable:no-unused-variable */
import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CartComponent } from '../cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { TotalTaxPipe } from './pipes/totalTax.pipe';
import { TotalPriceWithTaxPipe } from './pipes/totalPriceWithTax.pipe';
import { CartService } from '../shared/services/cart.service';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductsComponent } from '../products/products.component';
import { Location } from '@angular/common';

const mockCartProducts = [
  {
    "id": 1,
    "productName": "",
    "price": 1,
    "quantity": 7,
    "isImported": true,
    "category": "Food",
    "addedQuantity": 1,
    "tax": 0.1,
    "priceWithTax": 1
  },
  {
    "id": 14,
    "productName": "Apple - Fuji",
    "price": 4,
    "quantity": 3,
    "isImported": true,
    "category": "Food",
    "addedQuantity": 2,
    "tax": 0.25,
    "priceWithTax": 4
  }
];

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let cartService: CartService;
  let location: Location
  const cartProductsStub = {
    cartProducts$: of([mockCartProducts]),
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    decreaseQuantityFromCart: () => { }
  }

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CartComponent, TotalTaxPipe, TotalPriceWithTaxPipe],
      imports: [
        HttpClientModule,
        RouterTestingModule.withRoutes([
          {path: 'products', component: ProductsComponent}
        ]),
      ],
      providers: [{
        provide: CartService,
        useValue: cartProductsStub
      }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    location = TestBed.inject(Location);
    cartService = TestBed.inject(CartService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display product list', () => {
    const productTableDom = fixture.debugElement.query(By.css('.product-table-container'));
    expect(productTableDom).toBeTruthy();
  });
  
  it('should display message <<panier vide>>', () => {
    component.cartProducts$ = of([]);
    fixture.detectChanges();
    const messageDom = fixture.debugElement.query(By.css('.empty-cart'));

    expect(messageDom).toBeTruthy();
    expect(messageDom.nativeElement.innerText).toBe("Panier vide");
  });
  it('should call decrease function', () => {

    spyOn(component, "decreaseQuantity");
    const btn = fixture.debugElement.query(By.css('.product-list .btn-remove'));
    btn.nativeElement.click();

    expect(component.decreaseQuantity).toHaveBeenCalled();
  });
  it('should call cartService decreaseQuantityFromCart', () => {
    const decreaseQuantityFromCart = spyOn(cartService, "decreaseQuantityFromCart");
    component.decreaseQuantity(mockCartProducts[0])
    expect(decreaseQuantityFromCart).toHaveBeenCalled();
  })

  it(`should navigate to products page when clicking on button acceuil`, fakeAsync(() => {
    
    const button = fixture.debugElement.query(By.css('#btn-back-to-products'));
    button.nativeElement.click();
    tick();
    expect(location.path()).toBe('/products');

  }));


});


