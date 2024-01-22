import { createdATFilter } from 'modules/common/constants/common.filters';
import { Filter, FilterType } from '@dfl/mui-admin-layout';
import { TermFilter } from '@dofleini/query-builder';
import { STATUS } from './status.filter';
import { escapeRegExp } from 'utils/search.utils';

export const BrandFilter: Filter = {
  filter: 'common:brand',
  translate: true,
  type: FilterType.TEXT,
  key: 'br',
  field: 'brand',
  transform: (value: any) => {
    if (!value) return undefined;
    const queryText = escapeRegExp(value).replace(/ +/g, '|');

    return new TermFilter({
      field: 'brand',
      value: {
        $regex: queryText,
        $options: 'i',
      },
    });
  },
};

const statusFilter: Filter = {
  filter: 'manufacture:fields:state',
  type: FilterType.FIXED_LIST,
  translate: true,
  key: 'state',
  field: 'state',
  transform: (value: any) => {
    if (Array.isArray(value)) return undefined;
    return new TermFilter({ field: 'state', value });
  },
  options: Object.keys(STATUS).map((key) => ({
    value: STATUS[key],
    translate: true,
    label: `manufacture:${key}`,
  })),
};

export const manufactureFilters = [statusFilter, BrandFilter, createdATFilter];
