import { Filter, FilterType } from "@dfl/mui-admin-layout";
import { PriceType } from "modules/inventory/product/interfaces/IProductPriceDetails";

export const typeFilter: Filter = {
  filter: 'productDiscount:fields.type',
  translate: true,
  type: FilterType.FIXED_LIST,
  key: 'type',
  field: 'type',
  options: Object.values(PriceType).map(value => ({
    label: `productDiscount:discountTypes.${value}`,
    translate: true,
    value
  }))
};

export const valueFilter: Filter = {
  filter: 'productDiscount:fields.value',
  translate: true,
  type: FilterType.NUMBER,
  key: 'value',
  field: 'value',
};

export const fromFilter: Filter = {
  filter: 'productDiscount:fields.from',
  translate: true,
  type: FilterType.DATE,
  key: 'from',
  field: 'from',
};

export const toFilter: Filter = {
  filter: 'productDiscount:fields.to',
  translate: true,
  type: FilterType.DATE,
  key: 'to',
  field: 'to',
};

export const productDiscountFilters = [typeFilter, valueFilter, fromFilter, toFilter];
