import { apiKey } from "./env.model";
import { environment } from "../environment";

export const endpoints = {
  products: "assets/products.json",
} as const

const APIEntries = Object.entries(endpoints)
  .map(endpoint => [
    endpoint[0] as apiKey, 
    environment.apiBaseUrl + endpoint[1]
  ]);
  
export const APIs: Record<apiKey, string> = Object.fromEntries(APIEntries);