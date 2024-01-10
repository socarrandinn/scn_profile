export enum PriceType {
  PERCENT = 'PERCENT',
  FIXED = 'FIXED',
}

export interface IPriceValue {
  type: PriceType;
  value: number;
}

export interface IDistributionPrice {
  cost: IPriceValue;
  otherCost: IPriceValue;
  logistic: IPriceValue;
  shipping: IPriceValue;
  commercial: IPriceValue;
  offer: IPriceValue;
  platform: IPriceValue;
}

export interface IProductPriceDetails {
  distribution?: IDistributionPrice;
}
