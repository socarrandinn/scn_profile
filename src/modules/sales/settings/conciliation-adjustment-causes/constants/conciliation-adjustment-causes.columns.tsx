import { ConciliationAdjustmentCausesRowActions } from 'modules/sales/settings/conciliation-adjustment-causes/components/ConciliationAdjustmentCausesRowActions';
import { EditLink, HeadCell } from '@dfl/mui-admin-layout';
import { IConciliationAdjustmentCauses } from 'modules/sales/settings/conciliation-adjustment-causes/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { CONCILIATION_ADJUSTMENT_CAUSES_PERMISSIONS } from 'modules/sales/settings/conciliation-adjustment-causes/constants/conciliation-adjustment-causes.permissions';

export const conciliationAdjustmentCausesNameColumn: HeadCell<IConciliationAdjustmentCauses> = {
  field: 'name',
  headerName: 'conciliationAdjustmentCauses:fields.name',
  disablePadding: false,
  renderCell: (name: string, data?: IConciliationAdjustmentCauses) => (
    <EditLink entityId={data?._id as string}>{name}</EditLink>
  ),
};

export const conciliationAdjustmentCausesDescriptionColumn: HeadCell<IConciliationAdjustmentCauses> = {
  field: 'description',
  headerName: 'conciliationAdjustmentCauses:fields.description',
};

export const conciliationAdjustmentCausesActionsColumn: HeadCell<IConciliationAdjustmentCauses> = {
  field: 'actions',
  sortable: false,
  width: 100,
  permissions: CONCILIATION_ADJUSTMENT_CAUSES_PERMISSIONS.CONCILIATION_ADJUSTMENT_CAUSES_WRITE,
  headerName: 'common:actions',
  disablePadding: true,
  component: ConciliationAdjustmentCausesRowActions,
};

export const conciliationAdjustmentCausesColumns: Array<HeadCell<any>> = [
  conciliationAdjustmentCausesNameColumn,
  conciliationAdjustmentCausesDescriptionColumn,
  createdATColumn,
  conciliationAdjustmentCausesActionsColumn,
];
