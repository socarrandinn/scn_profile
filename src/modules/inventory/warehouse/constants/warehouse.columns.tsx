import { StoreRowActions } from 'modules/inventory/warehouse/components/StoreRowActions';
import { CellAlign, HeadCell } from '@dfl/mui-admin-layout';
import { IStore } from 'modules/inventory/warehouse/interfaces';
import { addressColumn, createdATColumn } from 'modules/common/constants/common.columns';
import { WAREHOUSE_PERMISSIONS } from 'modules/inventory/warehouse/constants/warehouse.permissions';
import { StoreVisiblePicker } from 'modules/inventory/warehouse/components/StoreVisiblePicker';
import StoreCell from 'modules/inventory/warehouse/components/StoreCell/StoreCell';
import ProviderLogCell from 'modules/inventory/provider/logistics/components/ProviderLogCell/ProviderLogCell';
// import { StoreDistributionZone } from '../components/StoreDistributionZone';

export const warehouseNameColumn: HeadCell<IStore> = {
  field: 'name',
  headerName: 'warehouse:fields.name',
  disablePadding: false,
  renderCell: (name: string, data: IStore) => <StoreCell name={name} warehouseId={data._id as string} />,
};

export const storeLogisticColumn: HeadCell<IStore> = {
  field: 'logistic.name',
  headerName: 'warehouse:fields.logistic',
  renderCell: (name: string, data: IStore) => (
    <ProviderLogCell ProviderLogisticId={data?.logistic?._id as string} name={name} hideImage />
  ),
};

export const storeDescriptionColumn: HeadCell<IStore> = {
  field: 'description',
  headerName: 'warehouse:fields.description',
};

export const storeVisibilityColumn: HeadCell<IStore> = {
  field: 'visible',
  align: CellAlign.CENTER,
  headerName: 'warehouse:fields.visibility',
  component: StoreVisiblePicker,
};

// export const storeLocationsColumn: HeadCell<IStore> = {
//   field: 'locations',
//   align: CellAlign.CENTER,
//   headerName: 'warehouse:fields.locations',
//   component: StoreDistributionZone,
// };

export const storeActionsColumn: HeadCell<IStore> = {
  field: 'actions',
  sortable: false,
  width: 100,
  permissions: WAREHOUSE_PERMISSIONS.WAREHOUSE_WRITE,
  headerName: 'common:actions',
  disablePadding: true,
  component: StoreRowActions,
};

// inventory/stores/:warehouseId/inventory
export const warehouseColumns: Array<HeadCell<any>> = [
  warehouseNameColumn,
  storeLogisticColumn,
  // storeLocationsColumn,
  addressColumn,
  storeVisibilityColumn,
  createdATColumn,
  storeActionsColumn,
];

export const logisticWarehouseColumns: Array<HeadCell<any>> = [
  warehouseNameColumn,
  // storeLocationsColumn,
  addressColumn,
  storeVisibilityColumn,
  createdATColumn,
  storeActionsColumn,
];
