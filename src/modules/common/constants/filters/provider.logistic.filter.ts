import { Filter, FilterType } from '@dfl/mui-admin-layout';
import { OperatorFilter, TermFilter } from '@dofleini/query-builder';
import { LOGISTICS_LIST_KEY } from 'modules/inventory/provider/logistics/constants';
import { LogisticsService } from 'modules/inventory/provider/logistics/services';

export const getProviderLogisticFilter = (field?: string): Filter => ({
  filter: 'common:logisticProvider',
  translate: true,
  type: FilterType.DYNAMIC_LIST,
  key: 'logistic',
  labelKey: 'name',
  field: field || 'logistic',
  fetchFunc: LogisticsService.search,
  fetchOption: { size: 10 },
  queryKey: LOGISTICS_LIST_KEY,
  transform: (value) => {
    if (Array.isArray(value)) {
      return new OperatorFilter({
        type: 'OR',
        filters: value?.map((v) => new TermFilter({ field, value: v, objectId: true })),
      }).toQuery();
    }
    return new TermFilter({ field, value, objectId: true });
  },
});
