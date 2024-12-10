import { Filter, FilterType } from '@dfl/mui-admin-layout';
import { TermFilter } from '@dofleini/query-builder';
import { createdATFilter } from 'modules/common/constants';
import { TAG_TYPE_ENUM } from '../interfaces';
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

export const tagsFilters = [typeFilter, createdATFilter];
