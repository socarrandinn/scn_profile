import { Filter, FilterType } from '@dfl/mui-admin-layout';
import { transformWhitObjectId } from 'modules/common/constants/object-id';
import { WarehouseAreaService } from 'modules/inventory/settings/warehouse-area/services';
import { stockStoreFilter } from './product.filters';
import { WAREHOUSE_AREAS_LIST_KEY } from 'modules/inventory/settings/warehouse-area/constants';
import { getVisibleFilter } from 'modules/common/constants';

export const stockWarehouseAreaFilter: Filter = {
  filter: 'warehouseArea:select',
  translate: true,
  type: FilterType.DYNAMIC_LIST,
  key: 'area',
  labelKey: 'name',
  field: 'stock.warehouseArea.areaId',
  fetchFunc: WarehouseAreaService.searchClean,
  fetchOption: { size: 10 },
  queryKey: WAREHOUSE_AREAS_LIST_KEY,
  transform: (value) => transformWhitObjectId(value, 'stock.warehouseArea.areaId'),
};

export const availableFilter: Filter = {
  filter: 'product:section.inventory.available',
  translate: true,
  type: FilterType.NUMBER,
  key: 'available',
  field: 'available',
};

export const reservationFilter: Filter = {
  filter: 'product:section.inventory.reservation',
  translate: true,
  type: FilterType.NUMBER,
  key: 'reservation',
  field: 'reservation',
};

export const allStockFilter: Filter = {
  filter: 'report:report.inventory.table.stock',
  translate: true,
  type: FilterType.NUMBER,
  key: 'stock',
  field: 'allStock',
};

export const visibleFilter: Filter = getVisibleFilter('stock.visible');

export const productStockFilters = [
  stockStoreFilter,
  stockWarehouseAreaFilter,
  availableFilter,
  reservationFilter,
  allStockFilter,
  visibleFilter,
];
