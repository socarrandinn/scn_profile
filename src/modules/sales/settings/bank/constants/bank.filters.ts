import { Filter, FilterType } from '@dfl/mui-admin-layout';
import { LIST_CURRENCIES } from '../../payment-settings/constants';
import { getVisibleFilter } from 'modules/common/constants';

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

export const bankFilters: Filter[] = [currencyFilter, getVisibleFilter('enabled')];
