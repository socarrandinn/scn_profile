import { CauseCancellationRowActions } from 'modules/sales/settings/cause-cancellation/components/CauseCancellationRowActions';
import { EditLink, HeadCell } from '@dfl/mui-admin-layout';
import { ICauseCancellation } from 'modules/sales/settings/cause-cancellation/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { CAUSE_CANCELLATION_PERMISSIONS } from 'modules/sales/settings/cause-cancellation/constants/cause-cancellation.permissions';

export const causeCancellationTypeColumn: HeadCell<ICauseCancellation> = {
  field: 'type',
  headerName: 'causeCancellation:fields.type',
  disablePadding: false,
  renderCell: (type: string, data: ICauseCancellation) => <EditLink entityId={data._id as string}>{type}</EditLink>,
};

export const causeCancellationDescriptionColumn: HeadCell<ICauseCancellation> = {
  field: 'description',
  headerName: 'causeCancellation:fields.description',
};
export const causeCancellationVisibilityColumn: HeadCell<ICauseCancellation> = {
  field: 'visibility',
  headerName: 'causeCancellation:fields.visibility',
};

export const causeCancellationActionsColumn: HeadCell<ICauseCancellation> = {
  field: 'actions',
  sortable: false,
  width: 100,
  permissions: CAUSE_CANCELLATION_PERMISSIONS.CAUSE_CANCELLATION_WRITE,
  headerName: 'common:actions',
  disablePadding: true,
  component: CauseCancellationRowActions,
};

export const causeCancellationColumns: Array<HeadCell<any>> = [
  causeCancellationTypeColumn,
  causeCancellationDescriptionColumn,
  causeCancellationVisibilityColumn,
  createdATColumn,
  causeCancellationActionsColumn,
];
