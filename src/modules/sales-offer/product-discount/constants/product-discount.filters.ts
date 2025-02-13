import { Filter, FilterType } from '@dfl/mui-admin-layout';
import { createdATFilter } from 'modules/common/constants';
import { DISCOUNT_STATUS, DISCOUNT_TYPE } from './product-discount.constant';

const statusFilter: Filter = {
  field: 'status',
  filter: 'status',
  key: 'status-filters',
  translate: true,
  type: FilterType.FIXED_LIST,
  options: Object.values(DISCOUNT_STATUS)?.map((value) => ({
    value,
    translate: true,
    label: `productDiscount:status.${value}`,
  })),
};

export const typeFilter: Filter = {
  filter: 'productDiscount:fields.discountType',
  translate: true,
  type: FilterType.FIXED_LIST,
  key: 'discountType',
  field: 'discountType',
  options: Object.values(DISCOUNT_TYPE).map((value) => ({
    label: `productDiscount:discountTypes.${value}`,
    translate: true,
    value,
  })),
};

export const startDateFilter: Filter = {
  filter: 'productDiscount:fields.startDate',
  translate: true,
  type: FilterType.DATE,
  key: 'startDate',
  field: 'startDate',
};

export const endDateFilter: Filter = {
  filter: 'productDiscount:fields.endDate',
  translate: true,
  type: FilterType.DATE,
  key: 'endDate',
  field: 'endDate',
};

export const productDiscountFilters = [statusFilter, typeFilter, startDateFilter, endDateFilter, createdATFilter];
