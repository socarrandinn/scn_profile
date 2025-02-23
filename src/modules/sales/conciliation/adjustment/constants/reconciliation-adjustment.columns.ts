import { CellAlign, HeadCell } from '@dfl/mui-admin-layout';
import { IReconciliationAdjustment } from '../interfaces/IReconciliationAdjustment';
import { ReconciliationAdjustmentActions } from '../components/ReconciliationAdjustmentActions';
import { createdATColumn } from 'modules/common/constants';

export const descriptionAdjustmentColumn: HeadCell<IReconciliationAdjustment> = {
  field: 'description',
  headerName: 'conciliation:adjustment.fields.description',
};
export const providerAdjustmentColumn: HeadCell<IReconciliationAdjustment> = {
  field: 'provider.name',
  headerName: 'conciliation:adjustment.fields.provider',
};
export const totalAmountAdjustmentColumn: HeadCell<IReconciliationAdjustment> = {
  field: 'totalAmount',
  headerName: 'conciliation:adjustment.fields.totalAmount',
};

export const providerTypeAdjustmentColumn: HeadCell<IReconciliationAdjustment> = {
  field: 'providerType',
  headerName: 'conciliation:adjustment.fields.providerType',
  translate: true,
  // renderCell: (value: string) => <RenderType value={value} />,
};
export const causeAdjustmentAdjustmentColumn: HeadCell<IReconciliationAdjustment> = {
  field: 'causeAdjustment.name',
  headerName: 'conciliation:adjustment.fields.causeAdjustment',
  translate: true,
  // renderCell: (value: string) => <RenderType value={value} />,
};

export const adjustmentActionColumn: HeadCell<IReconciliationAdjustment> = {
  field: 'actions',
  headerName: 'common:actions',
  align: CellAlign.CENTER,
  width: 100,
  sortable: false,
  component: ReconciliationAdjustmentActions,
};

export const reconciliationAdjustmentColumns = [
  providerAdjustmentColumn,
  providerTypeAdjustmentColumn,
  descriptionAdjustmentColumn,
  causeAdjustmentAdjustmentColumn,
  totalAmountAdjustmentColumn,
  createdATColumn,
  adjustmentActionColumn,
];
