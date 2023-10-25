import { WorkLocationRowActions } from 'modules/inventory/product/settings/work-location/components/WorkLocationRowActions';
import { EditLink, HeadCell } from '@dfl/mui-admin-layout';
import { IWorkLocation } from 'modules/inventory/product/settings/work-location/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { WORK_LOCATION_PERMISSIONS } from 'modules/inventory/product/settings/work-location/constants/work-location.permissions';

export const workLocationTitleColumn: HeadCell = {
  field: 'name',
  headerName: 'workLocation:fields.name',
  disablePadding: false,
  renderCell: (name, data: IWorkLocation) => <EditLink entityId={data._id as string}>{name}</EditLink>,
};

export const workLocationDescriptionColumn: HeadCell = {
  field: 'description',
  headerName: 'workLocation:fields.description',
};

export const workLocationActionsColumn: HeadCell = {
  field: 'actions',
  sortable: false,
  width: 100,
  permissions: WORK_LOCATION_PERMISSIONS.WORK_LOCATION_WRITE,
  headerName: 'common:actions',
  disablePadding: true,
  component: WorkLocationRowActions,
};

export const workLocationColumns: HeadCell[] = [
  workLocationTitleColumn,
  workLocationDescriptionColumn,
  createdATColumn,
  workLocationActionsColumn,
];
