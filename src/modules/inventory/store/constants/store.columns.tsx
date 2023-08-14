import { StoreRowActions } from 'modules/inventory/store/components/StoreRowActions';
import { CellAlign, HeadCell } from '@dfl/mui-admin-layout';
import { IStore } from 'modules/inventory/store/interfaces';
import { addressColumn, createdATColumn } from 'modules/common/constants/common.columns';
import { STORE_PERMISSIONS } from 'modules/inventory/store/constants/store.permissions';
import { StoreVisiblePicker } from 'modules/inventory/store/components/StoreVisiblePicker';
import StoreCell from 'modules/inventory/store/components/StoreCell/StoreCell';
import StoreProveedorCell from 'modules/inventory/store/components/StorePoveedorCell/StoreProveedorCell';

export const storeNameColumn: HeadCell<IStore> = {
  field: 'name',
  headerName: 'store:fields.name',
  disablePadding: false,
  renderCell: (name: string, data: IStore) => <StoreCell name={name} storeId={data._id as string} />,
};

export const storeLogisticColumn: HeadCell<IStore> = {
  field: 'logistic.name',
  headerName: 'store:fields.logistic',
  renderCell: (logistic: string, data: IStore) => <StoreProveedorCell userid={data?.logistic?._id as string} />,
};

export const storeDescriptionColumn: HeadCell<IStore> = {
  field: 'description',
  headerName: 'store:fields.description',
};

export const storeVisibilityColumn: HeadCell<IStore> = {
  field: 'visible',
  align: CellAlign.CENTER,
  headerName: 'store:fields.visibility',
  component: StoreVisiblePicker,
};

export const storeActionsColumn: HeadCell<IStore> = {
  field: 'actions',
  sortable: false,
  width: 100,
  permissions: STORE_PERMISSIONS.STORE_WRITE,
  headerName: 'common:actions',
  disablePadding: true,
  component: StoreRowActions,
};

export const storeColumns: Array<HeadCell<any>> = [
  storeNameColumn,
  storeLogisticColumn,
  // storeDescriptionColumn,
  addressColumn,
  storeVisibilityColumn,
  createdATColumn,
  storeActionsColumn,
];
