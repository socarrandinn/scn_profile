import { ISeo } from 'modules/inventory/product/interfaces/IProductCreate';
import { PAGE_STATUS_ENUM } from '../constants/page-status';

export interface IPage {
  _id?: string;
  createdAt?: Date;
  slug: string;
  seo: ISeo;
  content: string;
  updatedAt?: Date;
}
