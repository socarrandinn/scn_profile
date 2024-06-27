import { Filter, FilterType } from "@dfl/mui-admin-layout";
import { createdATFilter } from "modules/common/constants";
import { PriceType } from "modules/inventory/product/interfaces/IProductPriceDetails";

export const typeFilter: Filter = {
  filter: 'productDiscount:fields.discountType',
  translate: true,
  type: FilterType.FIXED_LIST,
  key: 'discountType',
  field: 'discountType',
  options: Object.values(PriceType).map(value => ({
    label: `productDiscount:discountTypes.${value}`,
    translate: true,
    value
  }))
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

export const productDiscountFilters = [typeFilter, startDateFilter, endDateFilter, createdATFilter];
