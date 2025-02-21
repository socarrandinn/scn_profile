import { Filter, FilterType } from '@dfl/mui-admin-layout';
import { createdATFilter } from 'modules/common/constants';
import { DISCOUNT_TYPE } from './product-discount.constant';
import { OFFER_STATUS } from 'modules/sales-offer/common/constants/offer.enum';

const statusFilter: Filter = {
  field: 'status',
  filter: 'status',
  key: 'status-filters',
  translate: true,
  type: FilterType.FIXED_LIST,
  options: Object.values(OFFER_STATUS)?.map((value) => ({
    value,
    translate: true,
    label: `productDiscount:status.${value}`,
  })),
};

export const typeFilter: Filter = {
  filter: 'productDiscount:fields.discountType',
  translate: true,
  type: FilterType.FIXED_LIST,
  key: 'discountConfig.type',
  field: 'discountConfig.type',
  options: Object.values(DISCOUNT_TYPE).map((value) => ({
    label: `productDiscount:discountTypes.${value}`,
    translate: true,
    value,
  })),
};

export const startDateFilter: Filter = {
  filter: 'productDiscount:fields.fromDate',
  translate: true,
  type: FilterType.DATE,
  key: 'fromDate',
  field: 'fromDate',
};

export const endDateFilter: Filter = {
  filter: 'productDiscount:fields.toDate',
  translate: true,
  type: FilterType.DATE,
  key: 'toDate',
  field: 'toDate',
};

export const productDiscountFilters = [statusFilter, typeFilter, startDateFilter, endDateFilter, createdATFilter];
