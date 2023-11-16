import { IProductCreate } from 'modules/inventory/product/interfaces/IProductCreate';

export interface IProductCategory {
  name: string;
  categoryId: string;
  categoryPath: [string];
}

export interface IProviderDate {
  name: string;
  providerId: string;
}

export interface IProductProviders {
  supplier: IProviderDate;
}

export interface IProduct extends Omit<IProductCreate, 'providers' | 'category' | '_id'> {
  _id: string;
  category: IProductCategory;
  providers: IProviderDate;
}

export interface IPartialProduct extends Partial<IProduct> {

}
