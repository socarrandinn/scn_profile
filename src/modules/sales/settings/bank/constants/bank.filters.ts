import { Filter, FilterType } from '@dfl/mui-admin-layout';
import { LIST_CURRENCIES } from '../../payment-settings/constants';
import { getVisibleFilter } from 'modules/common/constants';
import { COUNTRIES } from 'constants/COUNTRIES';

export const currencyFilter: Filter = {
  filter: 'order:invoice.currency',
  translate: true,
  type: FilterType.FIXED_LIST,
  key: 'currency',
  field: 'currency',
  options: LIST_CURRENCIES?.map((currency) => ({
    value: currency,
    translate: true,
    label: currency,
  })),
};

export const countryFilter: Filter = {
  filter: 'common:country',
  translate: true,
  type: FilterType.FIXED_LIST,
  key: 'country',
  field: 'address.country',
  options: COUNTRIES?.map((currency) => ({
    value: currency?.code,
    translate: true,
    label: currency?.name,
  })),
};

export const provinceFilter: Filter = {
  filter: 'common:province',
  translate: true,
  type: FilterType.TEXT,
  key: 'pv',
  field: 'address.state',
};

export const cityFilter: Filter = {
  filter: 'common:municipality',
  translate: true,
  type: FilterType.TEXT,
  key: 'city-filter',
  field: 'address.city',
};

export const branchFilter: Filter = {
  filter: 'bank:fields.branch',
  translate: true,
  type: FilterType.TEXT,
  key: 'branch',
  field: 'branch',
};

export const branchHolderFilter: Filter = {
  filter: 'bank:fields.branchHolder',
  translate: true,
  type: FilterType.TEXT,
  key: 'bh',
  field: 'branchHolder',
};

export const aliasFilter: Filter = {
  filter: 'bank:fields.alias',
  translate: true,
  type: FilterType.TEXT,
  key: 'alias',
  field: 'alias',
};

export const ibanNumberFilter: Filter = {
  filter: 'bank:fields.ibanNumber',
  translate: true,
  type: FilterType.TEXT,
  key: 'iban',
  field: 'ibanNumber',
};

export const swiftBICFilter: Filter = {
  filter: 'bank:fields.swiftBIC',
  translate: true,
  type: FilterType.TEXT,
  key: 'swift',
  field: 'swiftBIC',
};

export const bankFilters: Filter[] = [
  currencyFilter,
  getVisibleFilter('enabled', 'common:status'),
  aliasFilter,
  ibanNumberFilter,
  swiftBICFilter,
  branchFilter,
  branchHolderFilter,
  countryFilter,
  provinceFilter,
  cityFilter,
];

export const defaultBankFilters: Filter[] = [
  currencyFilter,
  getVisibleFilter('enabled', 'common:status'),
  countryFilter,
  provinceFilter,
  cityFilter,
];
