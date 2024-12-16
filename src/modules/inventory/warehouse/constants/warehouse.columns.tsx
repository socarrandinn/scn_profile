import { StoreRowActions } from 'modules/inventory/warehouse/components/StoreRowActions';
import { CellAlign, HeadCell } from '@dfl/mui-admin-layout';
import { IWarehouse } from 'modules/inventory/warehouse/interfaces';
import { addressColumn, createdATColumn } from 'modules/common/constants/common.columns';
import { WAREHOUSE_PERMISSIONS } from 'modules/inventory/warehouse/constants/warehouse.permissions';
import { StoreVisiblePicker } from 'modules/inventory/warehouse/components/StoreVisiblePicker';
import StoreCell from 'modules/inventory/warehouse/components/StoreCell/StoreCell';
import ProviderLogCell from 'modules/inventory/provider/logistics/components/ProviderLogCell/ProviderLogCell';
import { DistributionCenterWarehouseRowActions } from 'modules/inventory/distribution-centers/components/DistributionCenterWarehouseRowActions';
import { DISTRIBUTION_CENTER_PERMISSIONS } from 'modules/inventory/distribution-centers/constants';
// import { StoreDistributionZone } from '../components/StoreDistributionZone';

export const warehouseNameColumn: HeadCell<IWarehouse> = {
  field: 'name',
  headerName: 'warehouse:fields.name',
  disablePadding: false,
  renderCell: (name: string, data: IWarehouse) => <StoreCell name={name} warehouseId={data._id as string} />,
};

export const storeLogisticColumn: HeadCell<IWarehouse> = {
  field: 'logistic.name',
  headerName: 'warehouse:fields.logistic',
  renderCell: (name: string, data: IWarehouse) => (
    <ProviderLogCell ProviderLogisticId={data?.logistic?._id as string} name={name} hideImage />
  ),
};

export const storeDescriptionColumn: HeadCell<IWarehouse> = {
  field: 'description',
  headerName: 'warehouse:fields.description',
};

export const storeVisibilityColumn: HeadCell<IWarehouse> = {
  field: 'visible',
  align: CellAlign.CENTER,
  headerName: 'warehouse:fields.visibility',
  component: StoreVisiblePicker,
  permissions: DISTRIBUTION_CENTER_PERMISSIONS.DISTRIBUTION_CENTER_WRITE,
};

// export const storeLocationsColumn: HeadCell<IWarehouse> = {
//   field: 'locations',
//   align: CellAlign.CENTER,
//   headerName: 'warehouse:fields.locations',
//   component: StoreDistributionZone,
// };

export const storeActionsColumn: HeadCell<IWarehouse> = {
  field: 'actions',
  sortable: false,
  width: 100,
  headerName: 'common:actions',
  disablePadding: true,
  component: StoreRowActions,
  permissions: WAREHOUSE_PERMISSIONS.WAREHOUSE_WRITE,
};

// inventory/warehouses/:warehouseId/inventory
export const warehouseColumns: Array<HeadCell<any>> = [
  warehouseNameColumn,
  storeLogisticColumn,
  addressColumn,
  storeVisibilityColumn,
  createdATColumn,
  storeActionsColumn,
];

export const logisticWarehouseColumns: Array<HeadCell<any>> = [
  warehouseNameColumn,
  addressColumn,
  storeVisibilityColumn,
  createdATColumn,
  storeActionsColumn,
];

// inventory/distribution-centers/:id/warehouses
export const distributionCenterWarehouseActionsColumn: HeadCell<IWarehouse> = {
  field: 'actions',
  sortable: false,
  width: 100,
  permissions: DISTRIBUTION_CENTER_PERMISSIONS.DISTRIBUTION_CENTER_WRITE,
  headerName: 'common:actions',
  disablePadding: true,
  component: DistributionCenterWarehouseRowActions,
};

export const distributionCenterWarehouseColumns: Array<HeadCell<any>> = [
  warehouseNameColumn,
  storeLogisticColumn,
  addressColumn,
  storeVisibilityColumn,
  createdATColumn,
  distributionCenterWarehouseActionsColumn,
];
