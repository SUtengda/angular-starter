import { getProductPriceWithTax, getProductTax } from "../utils/calc-tax";

export interface IProduct {
  id: number;
  productName: string;
  price: number;
  quantity: number;
  isImported: boolean;
  category: string;
}

export type ProductTaxCal = Pick<IProduct, "category" | "isImported" | "price"> 

export class cartProduct implements IProduct {
  id: number;
  productName: string;
  price: number;
  quantity: number;
  isImported: boolean;
  category: string;
  addedQuantity: number;
  tax: number;
  priceWithTax: number;

  constructor(product: IProduct, quantity = 1) {
    this.id = product.id;
    this.productName = product.productName;
    this.price = product.price;
    this.quantity = product.quantity;
    this.isImported = product.isImported;
    this.category = product.category;
    this.addedQuantity = quantity;
    this.tax = getProductTax(this);
    this.priceWithTax = getProductPriceWithTax(this)
  }

}
