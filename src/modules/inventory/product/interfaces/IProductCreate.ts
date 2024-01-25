import { ICommonDomain, IImageMedia } from 'modules/common/interfaces';
import { IProductPriceDetails } from 'modules/inventory/product/interfaces/IProductPriceDetails';

export interface IProductCreate extends ICommonDomain {
  name?: string;
  description?: string;
  brand?: string;
  code?: string;
  category?: string | ICategory;
  visible?: boolean;
  keywords?: string[];
  productProvider?: string;
  media?: IImageMedia[];
  score?: number;
  priceDetails?: IProductPriceDetails;
  seo?: Seo;
  providers?: IProviders;
}

export interface IProviders {
  supplier: ISupplier;
}
export interface ISupplier {
  name: string;
  providerId: string;
}

export interface Seo {
  name?: string;
  description?: string;
}

export interface ICategory {
  name?: string;
  categoryId?: string;
  categoryPath: string[];
  // description?: string;
  // image?: string;
  // id?: string;
}
