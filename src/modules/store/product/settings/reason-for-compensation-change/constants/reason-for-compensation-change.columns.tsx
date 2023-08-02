import { EditLink, HeadCell } from '@dfl/mui-admin-layout';
import { IReasonForCompensationChange } from 'modules/store/product/settings/reason-for-compensation-change/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { REASON_FOR_COMPENSATION_CHANGE_PERMISSIONS } from 'modules/store/product/settings/reason-for-compensation-change/constants/reason-for-compensation-change.permissions';
import { ReasonForCompensationChangeRowActions } from 'modules/store/product/settings/reason-for-compensation-change/components/ReasonForCompensationChangeRowActions';

export const reasonForCompensationChangeTitleColumn: HeadCell = {
  field: 'name',
  headerName: 'reasonForCompensationChange:fields.name',
  disablePadding: false,
  renderCell: (name, data: IReasonForCompensationChange) => <EditLink entityId={data._id as string}>{name}</EditLink>,
};

export const reasonForCompensationChangeDescriptionColumn: HeadCell = {
  field: 'description',
  headerName: 'reasonForCompensationChange:fields.description',
};

export const reasonForCompensationChangeActionsColumn: HeadCell = {
  field: 'actions',
  sortable: false,
  width: 100,
  permissions: REASON_FOR_COMPENSATION_CHANGE_PERMISSIONS.REASON_FOR_COMPENSATION_CHANGE_WRITE,
  headerName: 'common:actions',
  disablePadding: true,
  component: ReasonForCompensationChangeRowActions,
};

export const reasonForCompensationChangeColumns: HeadCell[] = [
  reasonForCompensationChangeTitleColumn,
  reasonForCompensationChangeDescriptionColumn,
  createdATColumn,
  reasonForCompensationChangeActionsColumn,
];
