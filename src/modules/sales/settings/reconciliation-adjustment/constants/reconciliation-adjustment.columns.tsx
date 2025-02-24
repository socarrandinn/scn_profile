import { CellAlign, HeadCell } from '@dfl/mui-admin-layout';
import { IReconciliationAdjustment } from '../interfaces/IReconciliationAdjustment';
import { ReconciliationAdjustmentActions } from '../components/ReconciliationAdjustmentActions';
import { createdATColumn } from 'modules/common/constants';
import { LongText } from '@dfl/mui-react-common';
import { ReconciliationAdjustmentProviderType } from '../components/ReconciliationAdjustmentProviderType';
import ReconciliationAdjustmentAmount from '../components/ReconciliationAdjustmentAmount/ReconciliationAdjustmentAmount';
import { IUser } from 'modules/security/users/interfaces/IUser';

export const descriptionAdjustmentColumn: HeadCell<IReconciliationAdjustment> = {
  field: 'description',
  headerName: 'reconciliationAdjustment:fields.description',
  width: 200,
  renderCell: (value: string) => <LongText text={value} lineClamp={3} />,
};
export const providerAdjustmentColumn: HeadCell<IReconciliationAdjustment> = {
  field: 'provider.name',
  headerName: 'reconciliationAdjustment:fields.provider',
};

export const ownerColumn: HeadCell<IReconciliationAdjustment> = {
  field: 'owner',
  headerName: 'reconciliationAdjustment:fields.owner',
  renderCell: (owner: Pick<IUser, 'firstName' | 'lastName'>) => `${owner?.firstName} ${owner?.lastName}`,
};

export const totalAmountAdjustmentColumn: HeadCell<IReconciliationAdjustment> = {
  field: 'totalAmount',
  headerName: 'reconciliationAdjustment:fields.totalAmount',
  align: CellAlign.CENTER,
  component: ReconciliationAdjustmentAmount,
};

export const providerTypeAdjustmentColumn: HeadCell<IReconciliationAdjustment> = {
  field: 'providerType',
  headerName: 'reconciliationAdjustment:fields.providerType',
  translate: true,
  component: ReconciliationAdjustmentProviderType,
};
export const causeAdjustmentAdjustmentColumn: HeadCell<IReconciliationAdjustment> = {
  field: 'causeAdjustment.name',
  headerName: 'reconciliationAdjustment:fields.causeAdjustment',

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
  ownerColumn,
  createdATColumn,
  adjustmentActionColumn,
];
