import { ISeo } from 'modules/inventory/product/interfaces/IProductCreate';

export interface IPage {
  _id?: string;
  createdAt?: Date;
  slug: string;
  seo: ISeo;
  content: string;
  updatedAt?: Date;
}
