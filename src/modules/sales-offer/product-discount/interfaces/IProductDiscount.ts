import { IProduct } from 'modules/inventory/common/interfaces';
import { DISCOUNT_STATUS, DISCOUNT_TYPE } from '../constants/product-discount.constant';

export interface IProductDiscount {
  _id?: string;
  name: string;
  discountType: DISCOUNT_TYPE;
  discount: number;
  startDate: Date | null;
  endDate: Date | null;
  count?: number;
  status?: DISCOUNT_STATUS;
  enabled?: boolean;
  products?: IProduct[];
  filters?: any;
}

export interface IProductDiscountAdd {
  productDiscount?: string | null;
  filters?: any;
  _id?: string;
}
