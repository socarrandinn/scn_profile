import { EditLink, HeadCell } from '@dfl/mui-admin-layout';
import { IReasonForJobChange } from 'modules/store/employee/settings/reason-for-job-change/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { REASON_FOR_JOB_CHANGE_PERMISSIONS } from 'modules/store/employee/settings/reason-for-job-change/constants/reason-for-job-change.permissions';
import { ReasonForJobChangeRowActions } from 'modules/store/employee/settings/reason-for-job-change/components/ReasonForJobChangeRowActions';

export const reasonForJobChangeTitleColumn: HeadCell = {
  field: 'name',
  headerName: 'reasonForJobChange:fields.name',
  disablePadding: false,
  renderCell: (name, data: IReasonForJobChange) => <EditLink entityId={data._id as string}>{name}</EditLink>,
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
