import { StoreRowActions } from 'modules/store/store/components/StoreRowActions';
import { EditLink, HeadCell } from '@dfl/mui-admin-layout';
import { IStore } from 'modules/store/store/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { STORE_PERMISSIONS } from 'modules/store/store/constants/store.permissions';

export const storeNameColumn: HeadCell<IStore> = {
  field: 'name',
  headerName: 'store:fields.name',
  disablePadding: false,
  renderCell: (name: string, data: IStore) => (<EditLink entityId={data._id as string}>{name}</EditLink>),
};

export const storeDescriptionColumn: HeadCell<IStore> = {
  field: 'description',
  headerName: 'store:fields.description',
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
  storeDescriptionColumn,
  createdATColumn,
  storeActionsColumn
];
