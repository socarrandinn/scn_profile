import { JobPositionRowActions } from 'modules/store/product/settings/job-position/components/JobPositionRowActions';
import { EditLink, HeadCell } from '@dfl/mui-admin-layout';
import { IJobPosition } from 'modules/store/product/settings/job-position/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { JOB_POSITION_PERMISSIONS } from 'modules/store/product/settings/job-position/constants/job-position.permissions';

export const jobPositionTitleColumn: HeadCell = {
  field: 'name',
  headerName: 'jobPosition:fields.name',
  disablePadding: false,
  renderCell: (name, data: IJobPosition) => <EditLink entityId={data._id as string}>{name}</EditLink>,
};

export const jobPositionDescriptionColumn: HeadCell = {
  field: 'description',
  headerName: 'jobPosition:fields.description',
};

export const jobPositionActionsColumn: HeadCell = {
  field: 'actions',
  sortable: false,
  width: 100,
  permissions: JOB_POSITION_PERMISSIONS.JOB_POSITION_WRITE,
  headerName: 'common:actions',
  disablePadding: true,
  component: JobPositionRowActions,
};

export const jobPositionColumns: HeadCell[] = [
  jobPositionTitleColumn,
  jobPositionDescriptionColumn,
  createdATColumn,
  jobPositionActionsColumn,
];
