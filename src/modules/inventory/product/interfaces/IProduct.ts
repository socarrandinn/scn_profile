import { IProductCreate } from 'modules/inventory/product/interfaces/IProductCreate';

export interface IProductCategory {
  name: string;
  _id: string;
  categoryId: string;
  categoryPath: [string];
}

export interface IProviderDate {
  name: string;
  providerId: string;
}

export interface IProductProviders {
  supplier: IProviderDate;
  manufacturer: IProviderDate;
}

export interface IproductStock {
  store: string;
  logistic: string;
  visible: boolean;
  enable: boolean;
}

export interface IProduct extends Omit<IProductCreate, 'providers' | 'category' | '_id'> {
  _id: string;
  category: IProductCategory;
  providers: IProviderDate;
  stock: IproductStock;
}

export interface IPartialProduct extends Partial<IProduct> {}
