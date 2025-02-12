import { Filter, FilterType } from '@dfl/mui-admin-layout';
import { TermFilter } from '@dofleini/query-builder';
import { createdATFilter } from 'modules/common/constants';
import { transformWhitObjectId } from 'modules/common/constants/object-id';
import { OPERATION_STOCK } from 'modules/reports/components/common/constants/enums';
import WarehouseStockFilter from './WarehouseStockFilter';

export const operationFilter: Filter = {
  filter: 'report:report.inventory.activity.operation',
  type: FilterType.FIXED_LIST,
  translate: true,
  key: 'operation',
  field: 'operation',
  transform: (value: any) => {
    if (Array.isArray(value)) return undefined;
    return new TermFilter({ field: 'operation', value });
  },
  options: Object.keys(OPERATION_STOCK).map((key) => ({
    value: key,
    translate: true,
    label: `stock:operation.${key}`,
  })),
};

export const warehouseStockFilter: Filter = {
  filter: 'warehouse:name',
  translate: true,
  type: FilterType.FIXED_LIST,
  key: 'warehouse',
  labelKey: 'warehouseName',
  field: 'warehouse',
  transform: (value) => transformWhitObjectId(value, 'warehouse'),
  Component: WarehouseStockFilter,
};

export const stockQuantityFilter: Filter = {
  filter: 'report:report.inventory.activity.quantity',
  translate: true,
  type: FilterType.NUMBER,
  key: 'quantity',
  field: 'quantity',
  transform: (value) => {
    if (!value) return undefined;
    return new TermFilter({ field: 'quantity', value });
  },
};

export const reportStockActivityFilters = [operationFilter, stockQuantityFilter, warehouseStockFilter];
export const reportProductInventoryFilters = [warehouseStockFilter, createdATFilter];
