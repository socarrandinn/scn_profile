import { EditLink, HeadCell } from '@dfl/mui-admin-layout';
import { IReasonForJobChange } from 'modules/rrhh/settings/reason-for-job-change/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { REASON_FOR_JOB_CHANGE_PERMISSIONS } from 'modules/rrhh/settings/reason-for-job-change/constants/reason-for-job-change.permissions';
import { ReasonForJobChangeRowActions } from 'modules/rrhh/settings/reason-for-job-change/components/ReasonForJobChangeRowActions';

export const reasonForJobChangeTitleColumn: HeadCell = {
  field: 'title',
  headerName: 'reasonForJobChange:fields.title',
  disablePadding: false,
  renderCell: (title, data: IReasonForJobChange) => <EditLink entityId={data._id as string}>{title}</EditLink>,
};

export const reasonForJobChangeDescriptionColumn: HeadCell = {
  field: 'description',
  headerName: 'reasonForJobChange:fields.description',
};

export const reasonForJobChangeActionsColumn: HeadCell = {
  field: 'actions',
  sortable: false,
  width: 100,
  permissions: REASON_FOR_JOB_CHANGE_PERMISSIONS.REASON_FOR_JOB_CHANGE_WRITE,
  headerName: 'common:actions',
  disablePadding: true,
  component: ReasonForJobChangeRowActions,
};

export const reasonForJobChangeColumns: HeadCell[] = [
  reasonForJobChangeTitleColumn,
  reasonForJobChangeDescriptionColumn,
  createdATColumn,
  reasonForJobChangeActionsColumn,
];
