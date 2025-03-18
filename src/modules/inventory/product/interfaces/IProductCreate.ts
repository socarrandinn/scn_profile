import { ImageMedia } from 'modules/cms/banners/interfaces';
import { ICommonDomain, IImageMedia } from 'modules/common/interfaces';
import { IProductPriceDetails } from 'modules/inventory/product/interfaces/IProductPriceDetails';
import { IProductTags, ISummaryTags } from 'modules/inventory/settings/tags/interfaces';

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
  providers?: IProductProviders;
  shippingSettings?: IShippingSettings;
  related?: any[];
  rules?: IRules;
  slug: string;

  // tags
  tags: IProductTags | null;
  otherTags: ISummaryTags[] | null;
  selectedTag?: ISummaryTags[];
}
export interface IProductProviders {
  supplier: ISupplier;
  manufacturer?: any;
}
export interface ISupplier {
  name: string;
  providerId: string;
}
export interface IShippingSettings {
  freeShipping?: boolean;
  estimatedTime?: ITimeRange;
  shippingInfo?: IShippingInfo;
}
export interface ITimeRange {
  from: number;
  to: number;
}
export interface IDeliveryRules {
  policy: POLICY_ENUM;
  regions: IRegion[];
}

export enum POLICY_ENUM {
  DENIED = 'DENIED',
  ALLOW = 'ALLOW',
}
export interface IRegion {
  code: string;
  city: string;
  state: string;
  country: string;
}
export interface ISeo {
  name?: string;
  description?: string;
  image?: IImageMedia;
}
export interface ICategory {
  name?: string;
  _id?: string;
  icon?: string;
  color: string;
  categoryId?: string;
  categoryPath: string[];
  description?: string;
  image?: ImageMedia;
}
export interface IShippingInfo {
  weight?: number;
  length?: number;
  width?: number;
  height?: number;
  fragile?: boolean;
  needRefrigeration?: boolean;
}

export interface IPlace {
  place: IPlaceLocation[];
  via: string;
}
export interface IRules {
  limitByAge?: boolean;
  freeShipping?: boolean;
  limitByOrder?: number;
  needCi?: boolean;
  deliveryRules?: IDeliveryRules;
}

export interface IPlaceLocation {
  code: string;
  municipality: string;
  country: string;
  region: number;
  type: string;
  state: string;
  name: string;
}
