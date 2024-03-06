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
  seo?: ISeo;
  providers?: IProviders;
  shippingSettings?: IShippingSettings;
  related?: any[];
  shippingInfo?: IShippingInfo;
  rules?: IRules;
  slug: string;
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
export interface ISeo {
  name?: string;
  description?: string;
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
export interface IShippingInfo {
  size?: ISize;
  weight?: string;
  rules: IPlace;
  province: string; // to be able to update the values in the update of the general tab
  municipality: string; // to be able to update the values in the update of the general tab
}

export interface IPlace {
  place: any[];
  via: string;
}
export interface ISize {
  length?: string;
  width?: string;
  height?: string;
}

export interface IRules {
  limitByAge?: boolean;
  freeShipping?: boolean;
  limitByOrder?: number;
}
