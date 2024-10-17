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
  offers: IOffer[];
  _id: string;
}

export interface IOffer {
  offer: string;
  offerType: string;
  discount: number;
  _id: string;
}

export interface IFinancial {
  value: number;
  taxes: ITaxes2;
  _id: string;
}

export interface ITaxes2 {
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
  taxes: ITaxes;
  _id: string;
}

export interface ITaxes {
  weight: number;
  volume: number;
  fragile: number;
  specialTransportation: number;
  express: number;
  _id: string;
}
