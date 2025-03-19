import { BankRowActions } from 'modules/sales/settings/bank/components/BankRowActions';
import { EditLink, HeadCell } from '@dfl/mui-admin-layout';
import { IBank } from 'modules/sales/settings/bank/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { BANK_PERMISSIONS } from 'modules/sales/settings/bank/constants/bank.permissions';
import { BankStatusPicker } from '../components/BankStatusPicker';
import { VISIBILITY_STATUS_MAP } from 'modules/inventory/common/constants/visibility-status';
import { IStatus } from '@dfl/mui-react-common';

export const bankNameColumn: HeadCell<IBank> = {
  field: 'name',
  headerName: 'bank:fields.name',
  disablePadding: false,
  renderCell: (name: string, data?: IBank) => (<EditLink entityId={data?._id as string}>{name}</EditLink>),
};

export const bankDescriptionColumn: HeadCell<IBank> = {
  field: 'description',
  headerName: 'bank:fields.description',
};

export const bankCurrencyColumn: HeadCell<IBank> = {
  field: 'currency',
  headerName: 'bank:fields.currency',
};

export const visibleProductColumn: HeadCell<IBank> = {
  field: 'enabled',
  headerName: 'product:fields:visibility',
  renderCell: (visible, data) => <BankStatusPicker value={visible} bankId={data?._id as string} />,
};

export const bankActionsColumn: HeadCell<IBank> = {
  field: 'actions',
  sortable: false,
  width: 100,
  permissions: BANK_PERMISSIONS.BANK_WRITE,
  headerName: 'common:actions',
  disablePadding: true,
  component: BankRowActions,
};

export const bankColumns: Array<HeadCell<any>> = [
  bankNameColumn,
  bankDescriptionColumn,
  createdATColumn,
  bankActionsColumn
];
