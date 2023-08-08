import { IProductCreate } from 'modules/store/product/interfaces/IProductCreate';
import { PriceType } from 'modules/store/product/interfaces/IProductPriceDetails';

export interface IPriceMetadata {
  commercial: number;
  platform: number;
  logistic: number;
  cost: number;
  otherCost: number;
  shipping: number;
  offer: number;
}

export interface IProductOffer {
  discountType: PriceType;
  enabled: boolean;
  discount: number;
}

export interface IProductFormValues extends Omit<IProductCreate, 'priceDetails'> {
  priceMeta: IPriceMetadata;
  offer: IProductOffer;
}
