export interface IProduct {
  id: string;
  name: string;
  description: string;
  brand: string;
  order: number;
  category: string | Category;
  costPrice: number;
  finalPrice: number;
  visible: boolean;
  enable: boolean;
  price: number;
  createdAt: string;
  likeNew: boolean;
  deletedAt: any;
  secureSpacePath: string[];
  categoryPath: string[];
  keywords: string[];
  related: any[];
  productProvider: string;
  code: string;
  media: Medum[];
  owner: string;
  space: string;
  slug: string;
  shopSlug: string;
  storeCategories: any[];
  stores: Store[];
  offer: Offer;
  rules: Rules;
  shipping: Shipping;
  estimateTime: EstimateTime;
  rating: Rating;
  priceMedatada: PriceMedatada;
  priceDistribution: PriceDistribution;
  seo: Seo;
}

type Offer = {
  enabled: boolean;
  discountType: string;
  startDate: any;
  expiration: any;
  discount: number;
};

type Rules = {
  limitByAge: boolean;
  limitByOrder: number;
};

type Shipping = {
  free: boolean;
  weight: number;
  width: number;
  length: number;
  height: number;
};

type Rules2 = {
  place: any[];
  via: string;
};

type EstimateTime = {
  minTime: number;
  maxTime: number;
};

type Rating = {
  rate: number;
  votes: number;
  star5: number;
  star4: number;
  star3: number;
  star2: number;
  star1: number;
};

type PriceMedatada = {
  commercial: Commercial;
  platform: Platform;
  providers: Providers;
  price: number;
  extra: number;
};

type Commercial = {
  _type: string;
  _value: number;
};

type Platform = {
  _type: string;
  _value: number;
};

type Providers = {
  logistic: Logistic;
  product: Product;
  carrier: Carrier;
};

type Logistic = {
  distribution: {
    _type: string;
    _value: number;
  };
};

type Product = {
  commission: Commission;
};

type Commission = {
  _type: string;
  _value: number;
};

type Carrier = {
  _type: string;
  _value: number;
};

type PriceDistribution = {
  providers: Providers2;
  commercial: number;
  extra: number;
  platform: number;
  price: number;
};

type Providers2 = {
  logistic: Logistic2;
  product: Product2;
  carrier: number;
};

type Logistic2 = {
  distribution: number;
};

type Product2 = {
  commission: number;
};

export interface Seo {
  name: string;
  description: string;
}

type Category = {
  name: string;
  description: string;
  _id: string;
  image: string;
  id: string;
};

type Medum = {
  type: string;
  _id: string;
  thumb: string;
  url: string;
};

type Store = {
  visible: boolean;
  enable: boolean;
  hidden: boolean;
  locations: string[];
  _id: string;
  store: string;
  logistic: string;
};
