import { Product } from "../models/Product";

export interface loadPage {
  total: number;
  products: Product[];
}
