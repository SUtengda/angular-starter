/* tslint:disable:no-unused-variable */
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ProductsService } from './products.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('Service: Products', () => {
  let service: ProductsService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductsService]
    });
  });

  beforeEach(() => {
    service= TestBed.inject(ProductsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should have request for init product list', fakeAsync(() => {
    const req = httpTestingController.expectOne(service._mockProductsURL);
    req.flush([
      {
        "id": 19,
        "productName": "the power of habit",
        "price": 11.84,
        "quantity": 4,
        "isImported": false,
        "category": "Books"
      }
    ]);
    service.initProducts();
    tick();
    expect(req.request.method).toEqual("GET");
    expect(service.products.length).toBe(1)
  }));
});
