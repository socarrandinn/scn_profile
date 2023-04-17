import { JobPositionRowActions } from 'modules/rrhh/settings/job-position/components/JobPositionRowActions';
import { EditLink, HeadCell } from '@dfl/mui-admin-layout';
import { IJobPosition } from 'modules/rrhh/settings/job-position/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { JOB_POSITION_PERMISSIONS } from 'modules/rrhh/settings/job-position/constants/job-position.permissions';

export const jobPositionTitleColumn: HeadCell = {
  field: 'title',
  headerName: 'jobPosition:fields.title',
  disablePadding: false,
  renderCell: (title, data: IJobPosition) => (<EditLink entityId={data._id as string}>{title}</EditLink>),
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
  jobPositionActionsColumn
];
