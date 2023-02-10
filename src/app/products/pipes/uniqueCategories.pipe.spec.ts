import { UniqueCategoriesPipe } from './uniqueCategories.pipe';


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
  {
    "id": 19,
    "productName": "the power of habit",
    "price": 11.84,
    "quantity": 4,
    "isImported": false,
    "category": "Books"
  }
]

describe('Pipe: UniqueCategories', () => {
  it('should filter categories', () => {
    const pipe = new UniqueCategoriesPipe();
    const categories = pipe.transform(mockProducts);
    expect(categories.length).toBe(3);
  });
  it('should categories are unique', () => {
    const pipe = new UniqueCategoriesPipe();
    const categories = pipe.transform(mockProducts);
    expect(categories.filter(category => category === "Medecine").length).toBe(1);
  });
});

