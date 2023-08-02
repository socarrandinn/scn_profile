import { ICommonDomain } from 'modules/common/interfaces';
import { IEstimateTime } from 'modules/store/common/interfaces/index';

export interface IProduct extends ICommonDomain {
  name?: string;
  description?: string;
  brand?: string;
  order?: number;
  category?: string | ICategory;
  costPrice?: number;
  finalPrice?: number;
  visible?: boolean;
  enable?: boolean;
  price?: number;
  createdAt?: string;
  likeNew?: boolean;
  deletedAt?: string;
  categoryPath?: string[];
  keywords?: string[];
  related?: any[];
  productProvider?: string;
  code?: string;
  media?: IMedum[];
  slug?: string;
  shopSlug?: string;
  storeCategories?: any[];
  stores?: IStore[];
  offer?: IOffer;
  rules?: IRules;
  shipping?: IShipping;
  estimateTime?: IEstimateTime;
  rating?: IRating;
  priceMedatada?: IPriceMedatada;
  priceDistribution?: IPriceDistribution;
  seo?: Seo;
}

export interface IProductCreate extends Omit<IProduct, '_id'> {}

export interface IOffer {
  enabled?: boolean;
  discountType?: string;
  startDate?: any;
  expiration?: any;
  discount?: number;
}

export interface IRules {
  limitByAge?: boolean;
  limitByOrder?: number;
}

export interface IShipping {
  free?: boolean;
  weight?: number;
  width?: number;
  length?: number;
  height?: number;
}

export interface IRules2 {
  place?: any[];
  via?: string;
}

export interface IRating {
  rate?: number;
  votes?: number;
  star5?: number;
  star4?: number;
  star3?: number;
  star2?: number;
  star1?: number;
}

export interface IPriceMedatada {
  commercial?: ICommercial | number;
  platform?: IPlatform | number;
  providers?: IProviders | number;
  price?: number;
  extra?: number;
  // price?: number,
  // extra?: number,
  // commissionLogistic?: number,
  // commissionShipping?: number,
  // commercialMargin?: number
}

export interface ICommercial {
  _type?: string;
  _value?: number;
}

export interface IPlatform {
  _type?: string;
  _value?: number;
}

export interface IProviders {
  logistic?: ILogistic;
  product?: IProductCommision;
  carrier?: ICarrier;
}

export interface ILogistic {
  distribution?: {
    _type?: string;
    _value?: number;
  };
}

export interface ICommission {
  _type?: string;
  _value?: number;
}

export interface ICarrier {
  _type?: string;
  _value?: number;
}

export interface IPriceDistribution {
  providers?: IProviders2;
  commercial?: number;
  extra?: number;
  platform?: number;
  price?: number;
}

export interface IProviders2 {
  logistic?: ILogistic2;
  product?: IProductCommision;
  carrier?: number;
}

export interface ILogistic2 {
  distribution?: number;
}

export interface IProductCommision {
  commission?: number;
}

export interface Seo {
  name?: string;
  description?: string;
}

export interface ICategory {
  name?: string;
  description?: string;
  _id?: string;
  image?: string;
  id?: string;
}

export interface IMedum {
  type?: string;
  _id?: string;
  thumb?: string;
  url?: string;
}

export interface IStore {
  visible?: boolean;
  enable?: boolean;
  hidden?: boolean;
  locations?: string[];
  _id?: string;
  store?: string;
  logistic?: string;
}
