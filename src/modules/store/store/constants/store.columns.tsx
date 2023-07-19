import { StoreRowActions } from 'modules/store/store/components/StoreRowActions';
import { CellAlign, HeadCell } from '@dfl/mui-admin-layout';
import { IStore } from 'modules/store/store/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { STORE_PERMISSIONS } from 'modules/store/store/constants/store.permissions';
import { StoreVisiblePicker } from 'modules/store/store/components/StoreVisiblePicker';
import { AddressValue } from 'modules/common/components/Address';
import { IAddress } from 'modules/common/interfaces';
import StoreCell from 'modules/store/store/components/StoreCell/StoreCell';
import StoreProveedorCell from 'modules/store/store/components/StorePoveedorCell/StoreProveedorCell';

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

export const storeAddressColumn: HeadCell<IStore> = {
  field: 'address',
  headerName: 'store:fields.address',
  renderCell: (value: IAddress) => <AddressValue value={value} />,
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
  storeAddressColumn,
  storeVisibilityColumn,
  createdATColumn,
  storeActionsColumn,
];
