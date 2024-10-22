import { IOffer } from 'modules/sales-offer/offer/interfaces';

export interface IOrderInvoice {
  total: number;
  currency: string;
  details: IDetail;
  changeRate: number;
}

export interface IDetail {
  delivery: IDelivery;
  products: IProducts;
  financial: IFinancial;
  discount: IDiscount;
  total: number;
  _id: string;
}

export interface IDiscount {
  value: number;
  offers: IDiscountOffer[];
  _id: string;
}

export interface IDiscountOffer {
  offer: IOffer;
  offerType: string;
  discount: number;
  _id: string;
}

export interface IFinancial {
  value: number;
  taxes: IFinancialTaxes;
  _id: string;
}

export interface IFinancialTaxes {
  changeRate: number;
  paymentGateway: number;
  _id: string;
}

export interface IProducts {
  value: number;
  _id: string;
}

export interface IDelivery {
  value: number;
  base: number;
  taxes: IDeliveryTaxes;
  _id: string;
}

export interface IDeliveryTaxes {
  weight: number;
  volume: number;
  fragile: number;
  specialTransportation: number;
  express: number;
  _id: string;
}
