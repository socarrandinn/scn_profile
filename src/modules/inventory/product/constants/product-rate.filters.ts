import { createdATFilter } from 'modules/common/constants/filters/common.filters';
import { Filter, FilterType } from '@dfl/mui-admin-layout';
import { EmptyFilter, OperatorFilter, TermFilter } from '@dofleini/query-builder';

export const reportFilter: Filter = {
  filter: 'rate:fields:report',
  translate: true,
  type: FilterType.NUMBER,
  key: 'report',
  field: 'report.count',
};

/* export const voteFilter: Filter = {
  filter: 'rate:fields:vote',
  translate: true,
  type: FilterType.RATING,
  key: 'vote',
  labelKey: 'vote',
  field: 'vote',
}; */

export const deleteFilter: Filter = {
  filter: 'rate:fields.deleted',
  translate: true,
  type: FilterType.FIXED_LIST,
  key: 'deleted',
  field: 'deleted',
  transform: (value) => {
    if (Array.isArray(value)) return new EmptyFilter();
    switch (value) {
      case 'false':
        return new OperatorFilter({
          type: 'OR',
          filters: [
            new TermFilter({ field: 'deleted', value: false }),
            new TermFilter({ field: 'deleted', value: null }),
          ],
        }).toQuery();
      case 'true': {
        return new TermFilter({ field: 'deleted', value: true }).toQuery();
      }
    }
  },
  options: [
    {
      value: 'true',
      translate: true,
      label: 'rate:rateStatus:deleted',
    },
    {
      value: 'false',
      translate: true,
      label: 'rate:rateStatus:notDeleted',
    },
  ],
};

export const rateFilters = [reportFilter, deleteFilter, createdATFilter];
