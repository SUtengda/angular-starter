import { IProduct } from 'src/app/shared/models/product.model';
import { FilterPipe } from './filter.pipe';

const mockProducts = [
  {
    "id": 2,
    "productName": "Soup Campbells - Italian Wedding",
    "price": 9.1,
    "quantity": 4,
    "isImported": false,
    "category": "Food"
  },
  {
    "id": 12,
    "productName": "codeine",
    "price": 7.86,
    "quantity": 3,
    "isImported": true,
    "category": "Medecine"
  },
  {
    "id": 5,
    "productName": "Asperin",
    "price": 6.85,
    "quantity": 3,
    "isImported": false,
    "category": "Medecine"
  },
]

describe('Pipe: Filtere', () => {
  it('create an instance', () => {
    const pipe = new FilterPipe();
    expect(pipe).toBeTruthy();
  });
  it('should return empty array when products is undefined', ()=> {
    const pipe = new FilterPipe();
    const products = undefined;
    const resultList = pipe.transform(products as unknown as IProduct[], null)
    expect(resultList.length).toBe(0);
  })
  it('should return Foods', ()=> {
    const pipe = new FilterPipe();
    const resultList = pipe.transform(mockProducts, "Food")
    expect(resultList.length).toBe(1);
    expect(resultList[0].category).toBe("Food");
  })
  it('should return all products while category is not defined', ()=> {
    const pipe = new FilterPipe();
    const resultList = pipe.transform(mockProducts, null)
    expect(resultList.length).toBe(mockProducts.length);
  })

});
