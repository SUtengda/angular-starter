import { IProduct } from "src/app/shared/models/product.model";

export interface IAddToCartEventData {
  product: IProduct,
  quantity: number,
} 