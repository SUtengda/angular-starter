import { IProduct } from "../models/product.model"
import { getProductPriceWithTax, getProductTax, getProductTaxRate } from "./calc-tax"

describe('calcTaxUtils', () => {
  it('should imported food taxed at 5', () => {
    const food: IProduct = {
      id: 14,
      productName: "Apple - Fuji",
      price: 4.37,
      quantity: 3,
      isImported: true,
      category: "Food"
    }
    expect(getProductTaxRate(food)).toBe(0.05);
    expect(getProductTax(food)).toBe(0.25);
    expect(getProductPriceWithTax(food)).toBe(4.62);
  })
  it('should not imported food taxed at 0', () => {
    const food: IProduct =   {
      id: 7,
      productName: "Cheese - Goat",
      price: 3.81,
      quantity: 1,
      isImported: false,
      category: "Food"
    }
    expect(getProductTaxRate(food)).toBe(0);
    expect(getProductTax(food)).toBe(0);
    expect(getProductPriceWithTax(food)).toBe(3.81);
  })
  it('should imported book taxed at 15', () => {
    const books: IProduct = {
      id: 3,
      productName: "The Stranger in the Lifeboat",
      price: 16.38,
      quantity: 7,
      isImported: true,
      category: "Books"
    }
    expect(getProductTaxRate(books)).toBe(0.15)
    expect(getProductTax(books)).toBe(2.5)
    expect(getProductPriceWithTax(books)).toBe(18.88)
  })
  it('should not imported perfume taxed at 20', () => {
    const perfume: IProduct = {
      id: 10,
      productName: "Giorgio Armani Acqua Di Gio 100ml",
      price: 76.32,
      quantity: 8,
      isImported: false,
      category: "Parfum"
    }
    expect(getProductTaxRate(perfume)).toBe(0.2)
    expect(getProductTax(perfume)).toBe(15.3)
    expect(getProductPriceWithTax(perfume)).toBe(91.62)
  })
  it('should imported perfume taxed at 25', () => {
    const perfume: IProduct = {
      id: 10,
      productName: "Giorgio Armani Acqua Di Gio 100ml",
      price: 76.32,
      quantity: 8,
      isImported: true,
      category: "Parfum"
    }
    expect(getProductTaxRate(perfume)).toBe(0.25)
    expect(getProductTax(perfume)).toBe(19.1)
  })
})