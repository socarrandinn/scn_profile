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
export interface IValuesPrice {
  cost: number;
  otherCost: number;
  logistic: number;
  shipping: number;
  commercial: number;
  offer: number;
  platform: number;
  total: number;
}

export interface IProductPriceDetails {
  distribution?: IDistributionPrice;
  values?: IValuesPrice;
}
