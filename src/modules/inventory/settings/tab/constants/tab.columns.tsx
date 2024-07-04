import { TabRowActions } from 'modules/inventory/settings/tab/components/TabRowActions';
import { EditLink, HeadCell } from '@dfl/mui-admin-layout';
import { ITab } from 'modules/inventory/settings/tab/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { TAB_PERMISSIONS } from 'modules/inventory/settings/tab/constants/tab.permissions';

export const tabNameColumn: HeadCell<ITab> = {
  field: 'name',
  headerName: 'tab:fields.name',
  disablePadding: false,
  renderCell: (name: string, data?: ITab) => (<EditLink entityId={data?._id as string}>{name}</EditLink>),
};

export const tabDescriptionColumn: HeadCell<ITab> = {
  field: 'description',
  headerName: 'tab:fields.description',
};

export const tabActionsColumn: HeadCell<ITab> = {
  field: 'actions',
  sortable: false,
  width: 100,
  permissions: TAB_PERMISSIONS.TAB_WRITE,
  headerName: 'common:actions',
  disablePadding: true,
  component: TabRowActions,
};

export const tabColumns: Array<HeadCell<any>> = [
  tabNameColumn,
  tabDescriptionColumn,
  createdATColumn,
  tabActionsColumn
];
