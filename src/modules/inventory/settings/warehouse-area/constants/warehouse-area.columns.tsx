import { StoreAreaRowActions } from 'modules/inventory/settings/warehouse-area/components/StoreAreaRowActions';
import { HeadCell } from '@dfl/mui-admin-layout';
import { IWarehouseArea } from 'modules/inventory/settings/warehouse-area/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { WAREHOUSE_AREA_PERMISSIONS } from 'modules/inventory/settings/warehouse-area/constants/warehouse-area.permissions';

export const warehouseAreaNameColumn: HeadCell<IWarehouseArea> = {
  field: 'name',
  headerName: 'warehouseArea:fields.name',
  disablePadding: false,
};

export const warehouseAreaDescriptionColumn: HeadCell<IWarehouseArea> = {
  field: 'description',
  headerName: 'warehouseArea:fields.description',
};

export const warehouseAreaActionsColumn: HeadCell<IWarehouseArea> = {
  field: 'actions',
  sortable: false,
  width: 100,
  permissions: WAREHOUSE_AREA_PERMISSIONS.WAREHOUSE_AREA_WRITE,
  headerName: 'common:actions',
  disablePadding: true,
  component: StoreAreaRowActions,
};

export const storeAreaColumns: Array<HeadCell<any>> = [
  warehouseAreaNameColumn,
  warehouseAreaDescriptionColumn,
  createdATColumn,
  warehouseAreaActionsColumn
];
