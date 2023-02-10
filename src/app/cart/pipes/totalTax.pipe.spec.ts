/* tslint:disable:no-unused-variable */

import { TotalTaxPipe } from './totalTax.pipe';

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
]
describe('Pipe: TotalTaxe', () => {
  it('should return 0 when product list are empty', () => {
    const pipe = new TotalTaxPipe();
    const priceSum = pipe.transform([]); 
    expect(priceSum).toBe(0);
  });
  it('should return price sum with tax', () => {
    const pipe = new TotalTaxPipe();
    const priceSum = pipe.transform(mockCartProducts); 
    expect(priceSum).toBe(0.6);
  });
});

