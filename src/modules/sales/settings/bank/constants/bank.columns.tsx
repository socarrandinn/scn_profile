import { BankRowActions } from 'modules/sales/settings/bank/components/BankRowActions';
import { EditLink, HeadCell } from '@dfl/mui-admin-layout';
import { IBank } from 'modules/sales/settings/bank/interfaces';
import { BANK_PERMISSIONS } from 'modules/sales/settings/bank/constants/bank.permissions';
import { BankStatusPicker } from '../components/BankStatusPicker';

export const bankNameColumn: HeadCell<IBank> = {
  field: 'name',
  headerName: 'bank:fields.name',
  disablePadding: false,
  renderCell: (name: string, data?: IBank) => (<EditLink entityId={data?._id as string}>{name}</EditLink>),
};

export const bankCurrencyColumn: HeadCell<IBank> = {
  field: 'currency',
  headerName: 'bank:fields.currency',
};

export const bankStatusColumn: HeadCell<IBank> = {
  field: 'enabled',
  headerName: 'product:fields:visibility',
  renderCell: (visible, data) => <BankStatusPicker value={visible} bankId={data?._id as string} />,
};

export const bankAliasColumn: HeadCell<IBank> = {
  field: 'alias',
  headerName: 'bank:fields.alias',
};

export const bankIbanNumberColumn: HeadCell<IBank> = {
  field: 'ibanNumber',
  headerName: 'bank:fields.ibanNumber',
};

export const bankSwiftColumn: HeadCell<IBank> = {
  field: 'swiftBIC',
  headerName: 'bank:fields.swiftBIC',
};

export const bankBranchColumn: HeadCell<IBank> = {
  field: 'branch',
  headerName: 'bank:fields.branch',
};

export const bankBranchHolderColumn: HeadCell<IBank> = {
  field: 'branchHolder',
  headerName: 'bank:fields.branchHolder',
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
  bankCurrencyColumn,
  bankStatusColumn,
  bankAliasColumn,
  bankIbanNumberColumn,
  bankSwiftColumn,
  bankBranchColumn,
  bankBranchHolderColumn,
  bankActionsColumn
];
