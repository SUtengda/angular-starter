import { CALCULATOR_BASE } from "../consts/common";
import { ProductTaxCal } from "../models/product.model";

enum CategoryTaxEnum {
  FOOD = "Food",
  MEDICINE = "Medecine",
  BOOKS = "Books",
}

const IMPORT_PRODUCT_ADDITIONAL_TAX_PERCENTAGE = 5;
const GENERAL_TAX_PERCENTAGE = 20;
const taxRateMap = new Map<string, number>([
  [CategoryTaxEnum.FOOD, 0],
  [CategoryTaxEnum.MEDICINE, 0],
  [CategoryTaxEnum.BOOKS, 10]
])

const roundUpToNextFiveCents = (priceWithoutTax: number): number => {
  const ROUNDING_UP_BY = 20;
  const FRACTION_DIGIT = 2;
  return +(Math.ceil(priceWithoutTax * ROUNDING_UP_BY) / ROUNDING_UP_BY).toFixed(FRACTION_DIGIT)
}

export const getProductTaxRate = (product: ProductTaxCal): number => {
  if (product.price && product.category) {
    let rate = GENERAL_TAX_PERCENTAGE;
    if (taxRateMap.has(product.category)) {
      rate = taxRateMap.get(product.category) as number;
    }
    if (product.isImported) {
      rate += IMPORT_PRODUCT_ADDITIONAL_TAX_PERCENTAGE;
    }
    return rate / 100;
  }
  return 0;
}

export const getProductTax = (product: ProductTaxCal): number => {
  if (product.price && product.category) {
    const tax = product.price * getProductTaxRate(product);
    return roundUpToNextFiveCents(tax);
  }
  return 0;
}

export const getProductPriceWithTax = (product: ProductTaxCal): number => {
  if (product.price && product.category) {
    return (product.price * CALCULATOR_BASE + getProductTax(product) * CALCULATOR_BASE) / CALCULATOR_BASE
  }
  return 0;
}


