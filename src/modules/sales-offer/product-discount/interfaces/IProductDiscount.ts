import { PriceType } from "modules/inventory/product/interfaces/IProductPriceDetails";

export interface IProductDiscount {
  _id?: string;
  name: string;
  description: string;
  offer: {
    type: PriceType,
    value: number,
  }
  from: Date | null;
  to: Date | null;
}
