import { Filter, FilterType } from '@dfl/mui-admin-layout';
import { OperatorFilter, TermFilter } from '@dofleini/query-builder';
import { createdATFilter } from 'modules/common/constants';
import { TAG_NAMES, TAG_TYPE_ENUM } from '../interfaces';
import { TAG_TYPES } from './tags-status';

export const typeFilter: Filter = {
  filter: 'tags:fields.type',
  type: FilterType.FIXED_LIST,
  translate: true,
  key: 'tag-type-filter',
  field: 'type',
  transform: (value: TAG_TYPE_ENUM) => {
    return new TermFilter({ field: 'type', value });
  },
  options: Object.keys(TAG_TYPES).map((key) => ({
    value: TAG_TYPES[key],
    translate: true,
    label: `tags:TAG_TYPE.${key}`,
  })),
};

export const requiredInFilter: Filter = {
  filter: 'tags:requiredIn',
  type: FilterType.FIXED_LIST,
  translate: true,
  key: 'rules-filter',
  field: 'type',
  transform: (keys: string | string[]) => {
    if (Array.isArray(keys)) {
      return new OperatorFilter({
        type: 'OR',
        filters: keys.map((key) => ({
          type: 'TERM',
          field: `rules.${key}.required`,
          value: true,
        })),
      }).toQuery();
    }
    return new TermFilter({ field: `rules.${keys}.required`, value: true });
  },
  options: Object.entries(TAG_NAMES).map(([key, value]) => ({
    value,
    translate: true,
    label: `tags:fields.rules.${key.toLowerCase()}`,
  })),
};

export const tagsFilters = [typeFilter, requiredInFilter, createdATFilter];
