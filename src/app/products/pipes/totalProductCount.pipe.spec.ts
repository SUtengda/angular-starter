import { TotalProductCountPipe } from './totalProductCount.pipe';

const mockCartProducts = [
  {
    "id": 1,
    "productName": "",
    "price": 1.76,
    "quantity": 7,
    "isImported": true,
    "category": "Food",
    "addedQuantity": 1,
    "tax": 0.1,
    "priceWithTax": 1.86
  },
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
  {
    "id": 17,
    "productName": "Muffin Batt - Carrot Spice",
    "price": 3.84,
    "quantity": 5,
    "isImported": true,
    "category": "Food",
    "addedQuantity": 3,
    "tax": 0.2,
    "priceWithTax": 4.04
  },
  {
    "id": 7,
    "productName": "Cheese - Goat",
    "price": 3.81,
    "quantity": 1,
    "isImported": false,
    "category": "Food",
    "addedQuantity": 1,
    "tax": 0,
    "priceWithTax": 3.81
  }
]

describe('Pipe: TotalProductCounte', () => {
  it('should return the total number of products', () => {
    const pipe = new TotalProductCountPipe();
    const count = pipe.transform(mockCartProducts)
    expect(count).toBe(6);
  });

  it('should return O when product list is empty', () => {
    const pipe = new TotalProductCountPipe();
    const count = pipe.transform([])
    expect(count).toBe(0);
  });

});

