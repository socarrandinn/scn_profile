import { IProductCommision } from './../../common/interfaces/IProduct';
import { IEstimateTime } from 'modules/store/employee/common/interfaces';

import {
  IProductCreate,
  IOffer,
  IRating,
  IRules,
  IShipping,
  IPriceMedatada,
  IPriceDistribution,
  Seo,
  ICommercial,
  IPlatform,
  IProviders,
  ILogistic,
  ICarrier,
} from '../../common/interfaces/IProduct';

export const OfferInitValue: IOffer = {
  enabled: true,
  expiration: '',
  startDate: '',
  discountType: '',
  discount: 0,
};

export const RulesInitValue: IRules = {
  limitByAge: false,
  limitByOrder: 0,
};

export const ShippingInitValue: IShipping = {
  free: false,
  weight: 0,
  width: 0,
  length: 0,
  height: 0,
};

export const EstimateTimeInitValue: IEstimateTime = {
  minTime: 0,
  maxTime: 0,
};

export const RatingInitValue: IRating = {
  rate: 0,
  votes: 0,
  star5: 0,
  star4: 0,
  star3: 0,
  star2: 0,
  star1: 0,
};

export const SeoInitValue: Seo = {
  name: '',
  description: '',
};

export const CommercialInitValue: ICommercial = {
  _type: '',
  _value: 0,
};

export const PlatformInitValue: IPlatform = {
  _type: '',
  _value: 0,
};

export const LogisticInitValue: ILogistic = {
  distribution: {
    _type: '',
    _value: 0,
  },
};

export const CarrierInitValue: ICarrier = {
  _type: '',
  _value: 0,
};

export const ProductCommisionInitValue: IProductCommision = {
  commission: 0,
};

export const ProvidersInitValue: IProviders = {
  logistic: LogisticInitValue,
  product: ProductCommisionInitValue,
  carrier: CarrierInitValue,
};

export const PriceMedatadaInitValue: IPriceMedatada = {
  commercial: CommercialInitValue,
  platform: PlatformInitValue,
  providers: ProvidersInitValue,
  price: 0,
  extra: 0,
};

export const PriceDistributionInitValue: IPriceDistribution = {};

export const productInitValue: IProductCreate = {
  name: '',
  code: '',
  brand: '',
  description: '',
  category: '',
  productProvider: '',
  order: 0,
  costPrice: 0,
  finalPrice: 0,
  visible: false,
  createdAt: '',
  likeNew: true,
  deletedAt: '',
  categoryPath: [],
  keywords: [],
  related: [],
  media: [],
  slug: '',
  shopSlug: '',
  storeCategories: [],
  stores: [],
  rating: {
    rate: 0,
    votes: 0,
    star1: 0,
    star2: 0,
    star3: 0,
    star4: 0,
    star5: 0,
  },
  priceDistribution: {
    price: 0,
    extra: 0,
    commercial: 0,
    platform: 0,
    providers: {
      carrier: 0,
      product: {
        commission: 0,
      },
      logistic: {
        distribution: 0,
      },
    },
  },
  rules: {
    limitByAge: false,
    limitByOrder: 0,
  },
  estimateTime: {
    minTime: 0,
    maxTime: 0,
  },
  priceMedatada: {
    price: 0,
    extra: 0,
    platform: 0,
    providers: 0,
    commercial: 0,
  },
  offer: {
    enabled: false,
    discountType: '',
    startDate: '',
    expiration: '',
    discount: 0,
  },
  shipping: {
    free: false,
    weight: 0,
    width: 0,
    length: 0,
    height: 0,
  },
  seo: {
    name: '',
    description: '',
  },
};
// export const productInitValue: IProductCreate = {
//   name: '',
//   description: '',
//   brand: '',
//   order: 0,
//   category: '',
//   costPrice: 0,
//   finalPrice: 1,
//   visible: false,
//   enable: true,
//   price: 0,
//   createdAt: '',
//   likeNew: true,
//   deletedAt: '',
//   categoryPath: [],
//   keywords: [],
//   related: [],
//   productProvider: '',
//   code: '',
//   media: [],
//   slug: '',
//   shopSlug: '',
//   storeCategories: [],
//   stores: [],
//   offer: OfferInitValue,
//   rules: RulesInitValue,
//   shipping: ShippingInitValue,
//   estimateTime: EstimateTimeInitValue,
//   rating: RatingInitValue,
//   priceMedatada: PriceMedatadaInitValue,
//   priceDistribution: PriceDistributionInitValue,
//   seo: SeoInitValue,
// };
