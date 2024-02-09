import { Filter, FilterType } from '@dfl/mui-admin-layout';
import { LOGISTICS_LIST_KEY } from 'modules/inventory/provider/logistics/constants';
import { LogisticsService } from 'modules/inventory/provider/logistics/services';

export const getProviderLogisticFilter = (filed?: string): Filter => ({
  filter: 'product:fields.category',
  translate: true,
  type: FilterType.DYNAMIC_LIST,
  key: 'logistic',
  labelKey: 'name',
  field: filed || 'logistic',
  fetchFunc: LogisticsService.search,
  fetchOption: { size: 10 },
  queryKey: LOGISTICS_LIST_KEY,
});
