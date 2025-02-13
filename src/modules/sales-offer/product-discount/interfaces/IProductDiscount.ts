import { IProduct } from 'modules/inventory/common/interfaces';
import { DISCOUNT_STATUS, DISCOUNT_TYPE } from '../constants/product-discount.constant';

export interface IProductDiscount {
  _id?: string;
  name: string;
  fromDate: Date | null;
  toDate: Date | null;
  count?: number;
  status?: DISCOUNT_STATUS;
  enabled?: boolean;
  products?: IProduct[];
  filters?: any;
  discountConfig: {
    type: DISCOUNT_TYPE;
    value: number;
  };
}

export interface IProductDiscountAdd {
  productDiscount?: string | null;
  filters?: any;
  _id?: string;
}
