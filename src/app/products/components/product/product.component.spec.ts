import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ProductComponent } from './product.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

const mockProduct =   {
  "id": 14,
  "productName": "Apple - Fuji",
  "price": 4.37,
  "quantity": 3,
  "isImported": true,
  "category": "Food"
};

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, NgSelectModule, FormsModule],
      declarations: [ ProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should add button be enable when quantity is greater than 0', () => {
    component.product = mockProduct;
    fixture.detectChanges();
    const addBtn = fixture.debugElement.query(By.css('.btn-add'));
    expect(addBtn.nativeElement.innerHTML).toContain('Add');
  });
  it('should add button be disable when quantity is 0', () => {
    mockProduct.quantity = 0;
    component.product = mockProduct;
    fixture.detectChanges();
    const addBtn = fixture.debugElement.query(By.css('.btn-add'));
    expect(addBtn.nativeElement.disabled).toBeTruthy();
  });
  it('should show Not available when quantity is 0', () => {
    component.product = mockProduct;
    mockProduct.quantity = 0;
    fixture.detectChanges();
    const messageDom = fixture.debugElement.query(By.css('.not-available'));
    expect(messageDom.nativeElement.innerHTML).toBe('Not available');
  });
  it('should show available quantity', () => {
    component.product = mockProduct;
    mockProduct.quantity = 10;
    fixture.detectChanges();
    const btnQuantity = fixture.debugElement.query(By.css('.btn-quantity'));
    expect(btnQuantity).toBeTruthy();
  });
  it('should call addToCart function', () => {
    component.product = mockProduct;
    mockProduct.quantity = 10;
    fixture.detectChanges();
    spyOn(component, "addToCart");

    const addBtn = fixture.debugElement.query(By.css('.btn-add'));
    addBtn.nativeElement.click();
    expect(component.addToCart).toHaveBeenCalled();

  });

  it('should send add event with quantity wanted while add button is clicked', () => {
    component.product = mockProduct;
    mockProduct.quantity = 10;
    component.quantity = 2;
    fixture.detectChanges();
    spyOn(component.addToCartEvent, 'emit');
    const addBtn = fixture.debugElement.query(By.css('.btn-add'));
    addBtn.nativeElement.dispatchEvent(new Event('click'));
    expect(component.addToCartEvent.emit).toHaveBeenCalledWith({
      product: mockProduct,
      quantity: 2
    });
  })
});
