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
  codeProductProvider?: string;
  codeLogisticProvider?: string;
  related?: any[];
  offer?: IOffer;
  shippingInfo?: IShippingInfo;
  productPerUnit?: IPriceByUnit;
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
  free: boolean;
  weight?: string;
  rules?: string[];
}

export interface ISize {
  length?: string;
  width?: string;
  height?: string;
}

export interface IPriceByUnit {
  amount: number;
  typeOfMeasure: string | null;
  measurements?: string | null;
  displayMeasure?: string | null;
}
