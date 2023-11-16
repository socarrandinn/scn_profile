import { IProductCreate } from 'modules/inventory/product/interfaces/IProductCreate';

export interface IProductCategory {
  name: string;
  categoryId: string;
  categoryPath: [string];
}

export interface IProduct extends IProductCreate {
  _id: string;
  category?: IProductCategory;
}
