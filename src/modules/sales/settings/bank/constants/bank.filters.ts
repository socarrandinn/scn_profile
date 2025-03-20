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
  key: 'country-filter',
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
  key: 'province-filter',
  field: 'address.state',
};

export const cityFilter: Filter = {
  filter: 'common:municipality',
  translate: true,
  type: FilterType.TEXT,
  key: 'city-filter',
  field: 'address.city',
};

export const bankFilters: Filter[] = [
  currencyFilter,
  getVisibleFilter('enabled', 'common:status'),
  countryFilter,
  provinceFilter,
  cityFilter,
];
