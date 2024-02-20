import { ICommonDomain, IImageMedia } from 'modules/common/interfaces';
import { IProductPriceDetails } from 'modules/inventory/product/interfaces/IProductPriceDetails';

export interface IProductCreate extends ICommonDomain {
  name?: string | any;
  description?: string;
  brand?: string;
  code?: string;
  barcode?: string;
  referenceCode?: string;
  category?: ICategory | string;
  visible?: boolean;
  keywords?: string[];
  productProvider?: string;
  media?: IImageMedia[];
  score?: number;
  priceDetails?: IProductPriceDetails;
  seo?: Seo;
  providers?: IProviders;
  shippingSettings?: IShippingSettings;
  offer?: IOffer;
  shippingInfo?: IShippingInfo;
  productPerUnit?: IUnit;
}

export interface IProviders {
  supplier: ISupplier;
}
export interface ISupplier {
  name: string;
  providerId: string;
}
export interface IShippingSettings {
  freeShipping?: boolean;
  estimatedTime?: ITimeRange;
  deliveryRules?: IDeliveryRules;
}
export interface ITimeRange {
  from: number;
  to: number;
}
export interface IDeliveryRules {
  policy: string;
  regions: string;
}

export interface Seo {
  name?: string;
  description?: string;
  canocicURL?: string;
  slugUrl?: string;
  image?: IImageMedia;
}

export interface ICategory {
  name?: string;
  _id?: string;
  categoryId?: string;
  categoryPath: string[];
  description?: string;
  image?: string;
}
export interface IOffer {
  type?: string;
  offer?: string;
  from?: Date;
  to: Date;
}
export interface IShippingInfo {
  size?: ISize;
  weight?: string;
  rules?: string[];
}
export interface ISize {
  long?: string;
  wide?: string;
  high?: string;
}
export interface IUnit {
  amount?: string;
  measurements?: string;
}
