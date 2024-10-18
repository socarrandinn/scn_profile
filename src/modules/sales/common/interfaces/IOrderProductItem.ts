import { IImageMedia } from 'modules/common/interfaces';
import { IProduct } from 'modules/inventory/common/interfaces';

export interface IOrderProductItem {
  deleted: boolean;
  secureSpacePath: any[];
  warehouse: string;
  logistic: string;
  supplier: string;
  product: IProduct;
  productSnapShot: IProductSnapShot;
  quantity: number;
  totalPrice: number;
  unitPrice: number;
  price: number;
  _id: string;
}

export interface IProductSnapShot {
  _id: string;
  id?: string;
  productProvider: string;
  logisticProvider: string;
  offer: IProductOffer;
  shipping: IProductShipping;
  name: string;
  brand: string;
  deleted: boolean;
  visible: boolean;
  enable: boolean;
  media: IImageMedia[];
  code: string;
  price: number;
  finalPrice: number;
  slug: string;
  shopSlug: string;
  likeNew: boolean;
  rules: Rules;
}

export interface Rules {
  freeShipping: boolean;
  limitByAge: boolean;
  needCi: boolean;
  limitByOrder: number;
  deliveryRules: DeliveryRules;
}

export interface DeliveryRules {
  policy: string;
  regions: any[];
}

export interface IProductShipping {
  width: number;
  height: number;
  length: number;
  weight: number;
  free: boolean;
}

export interface IProductOffer {
  discount: number;
  enabled: boolean; // todo
}
