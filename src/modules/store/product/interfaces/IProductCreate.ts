import { IProduct } from 'modules/store/product/interfaces/IProduct';

export interface IPriceMedatada {
  commercial: number;
  platform: number;
  logistic: number;
  cost: number;
  otherCost: number;
  shipping: number;
  offer: number;
}

export interface IProductCreate extends Omit<IProduct, 'priceDetails'> {
  priceMeta: IPriceMedatada;
}
