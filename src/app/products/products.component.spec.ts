import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ProductsComponent } from './products.component';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { UniqueCategoriesPipe } from './pipes/uniqueCategories.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { TotalProductCountPipe } from './pipes/totalProductCount.pipe';
import { RouterTestingModule } from '@angular/router/testing';
import { CartComponent } from '../cart/cart.component';
import { CartService } from '../shared/services/cart.service';
import { ProductsService } from '../shared/services/products.service';
import { of } from 'rxjs';
import { ProductComponent } from './product/product.component';
import { SharedModule } from '../shared/shared.module';
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

const mockProducts = [
  {
    "id": 14,
    "productName": "Apple - Fuji",
    "price": 4.37,
    "quantity": 3,
    "isImported": true,
    "category": "Food",
    "addedQuantity": 1,
    "tax": 0.25,
    "priceWithTax": 4.62
  },
]
describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let cartService: CartService;
  let location: Location;
  const cartServiceStub = {
    cartProducts$: of([mockCartProducts]),
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    addToCart: () => { }
  };
  const productsServiceStub = {
    products$: of(mockProducts)
  };
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProductsComponent,
        ProductComponent,
        UniqueCategoriesPipe,
        FilterPipe,
        TotalProductCountPipe
      ],
      imports: [
        HttpClientModule,
        NgSelectModule,
        FormsModule,
        SharedModule,
        RouterTestingModule.withRoutes([
          { path: 'cart', component: CartComponent }
        ])
      ],
      providers: [
        {
          provide: CartService,
          useValue: cartServiceStub
        },
        {
          provide: ProductsService,
          useValue: productsServiceStub
        },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    location = TestBed.inject(Location);
    cartService = TestBed.inject(CartService);
    fixture.detectChanges();
  });


  it('should call addToCart function while product component dispatch addToCartEvent', () => {
    spyOn(component, 'addToCart');
    const product = fixture.debugElement.query(By.css('app-product'));
    product.nativeElement.dispatchEvent(new Event('addToCartEvent'));
    expect(component.addToCart).toHaveBeenCalled();
  });

  it('should call cartService addToCart', () => {
    const addToCart = spyOn(cartService, "addToCart");
    component.addToCart({
      product: mockProducts[0],
      quantity: 1
    })
    expect(addToCart).toHaveBeenCalled();
  });

  it('should display product counter', () => {
    const counter = fixture.debugElement.query(By.css('#product-counter'));
    expect(counter).toBeTruthy();
  });
  
  it('should redirect to cart when we click on cart anchor', fakeAsync(() => {

    const anchor = fixture.debugElement.query(By.css('#btn-cart'));
    anchor.nativeElement.click();
    tick();
    expect(location.path()).toBe('/cart');
  }));
});
