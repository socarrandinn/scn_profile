import { StoreAreaRowActions } from 'modules/store/settings/store-area/components/StoreAreaRowActions';
import { HeadCell } from '@dfl/mui-admin-layout';
import { IStoreArea } from 'modules/store/settings/store-area/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { STORE_AREA_PERMISSIONS } from 'modules/store/settings/store-area/constants/store-area.permissions';

export const storeAreaNameColumn: HeadCell<IStoreArea> = {
  field: 'name',
  headerName: 'storeArea:fields.name',
  disablePadding: false,
};

export const storeAreaDescriptionColumn: HeadCell<IStoreArea> = {
  field: 'description',
  headerName: 'storeArea:fields.description',
};

export const storeAreaActionsColumn: HeadCell<IStoreArea> = {
  field: 'actions',
  sortable: false,
  width: 100,
  permissions: STORE_AREA_PERMISSIONS.STORE_AREA_WRITE,
  headerName: 'common:actions',
  disablePadding: true,
  component: StoreAreaRowActions,
};

export const storeAreaColumns: Array<HeadCell<any>> = [
  storeAreaNameColumn,
  storeAreaDescriptionColumn,
  createdATColumn,
  storeAreaActionsColumn
];
