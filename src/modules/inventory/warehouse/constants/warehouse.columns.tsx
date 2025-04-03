import { StoreRowActions } from 'modules/inventory/warehouse/components/StoreRowActions';
import { CellAlign, HeadCell } from '@dfl/mui-admin-layout';
import { IWarehouse, WarehouseSupplier } from 'modules/inventory/warehouse/interfaces';
import { addressColumn, createdATColumn } from 'modules/common/constants/common.columns';
import { WAREHOUSE_PERMISSIONS } from 'modules/inventory/warehouse/constants/warehouse.permissions';
import { StoreVisiblePicker } from 'modules/inventory/warehouse/components/StoreVisiblePicker';
import StoreCell from 'modules/inventory/warehouse/components/StoreCell/StoreCell';
import { DistributionCenterWarehouseRowActions } from 'modules/inventory/distribution-centers/components/DistributionCenterWarehouseRowActions';
import { DISTRIBUTION_CENTER_PERMISSIONS } from 'modules/inventory/distribution-centers/constants';
import { AvatarNameCell } from 'modules/common/components/AvatarNameCell';
import { LOGISTICS_PERMISSIONS } from 'modules/inventory/provider/logistics/constants';
import { FormattedAddressCell } from 'components/AddressCell';

export const warehouseNameColumn: HeadCell<IWarehouse> = {
  field: 'name',
  headerName: 'warehouse:fields.name',
  disablePadding: false,
  renderCell: (name: string, data: IWarehouse) => <StoreCell name={name} warehouseId={data._id as string} />,
};

export const supplierWarehouseNameColumn: HeadCell<WarehouseSupplier> = {
  field: 'warehouse.name',
  headerName: 'warehouse:fields.name',
  disablePadding: false,
  renderCell: (name: string, data: WarehouseSupplier) => <StoreCell name={name} warehouseId={data?.warehouse?._id} />,
};

export const storeLogisticColumn = (field?: string, warehouse?: boolean): HeadCell<IWarehouse> => ({
  field: field ?? 'logistic.name',
  headerName: 'warehouse:fields.logistic',
  renderCell: (name: string, data: any) => (
    <AvatarNameCell
      name={name}
      link={`/inventory/settings/logistics/${warehouse ? data?.warehouse?.logistic?._id as string : data?.logistic?._id as string}/general`}
      hideImage
      permissions={LOGISTICS_PERMISSIONS.LOGISTICS_VIEW}
    />
  ),
});

export const supplierAddressColumn: HeadCell<any> = {
  field: 'warehouse.address',
  translate: true,
  headerName: 'common:address',
  width: 350,
  renderCell: (name: string, data: any) => <FormattedAddressCell address={data?.warehouse?.address} />,
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
};

export const supplierStoreVisibilityColumn: HeadCell<IWarehouse> = {
  field: 'visible',
  align: CellAlign.CENTER,
  headerName: 'warehouse:fields.visibility',
  renderCell: (value: boolean, data: any) => <StoreVisiblePicker rowId={data?.warehouse?._id as string} value={value} />,
};

export const storeActionsColumn: HeadCell<IWarehouse> = {
  field: 'actions',
  sortable: false,
  width: 100,
  headerName: 'common:actions',
  disablePadding: true,
  component: StoreRowActions,
  permissions: WAREHOUSE_PERMISSIONS.WAREHOUSE_WRITE,
};

export const supplierStoreActionsColumn: HeadCell<IWarehouse> = {
  field: 'actions',
  sortable: false,
  width: 100,
  headerName: 'common:actions',
  disablePadding: true,
  renderCell: (name: string, data: any) => <StoreRowActions rowId={data?.warehouse?._id as string} />,
  permissions: WAREHOUSE_PERMISSIONS.WAREHOUSE_WRITE,
};

// inventory/warehouses/:warehouseId/inventory
export const warehouseColumns: Array<HeadCell<any>> = [
  warehouseNameColumn,
  storeLogisticColumn(),
  addressColumn,
  storeVisibilityColumn,
  createdATColumn,
  storeActionsColumn,
];

export const supplierWarehouseColumns: Array<HeadCell<any>> = [
  supplierWarehouseNameColumn,
  storeLogisticColumn('warehouse.logistic.name', true),
  supplierAddressColumn,
  supplierStoreVisibilityColumn,
  createdATColumn,
  supplierStoreActionsColumn,
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
  storeLogisticColumn(),
  addressColumn,
  storeVisibilityColumn,
  createdATColumn,
  distributionCenterWarehouseActionsColumn,
];
