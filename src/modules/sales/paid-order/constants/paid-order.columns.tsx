import { PaidOrderRowActions } from 'modules/sales/paid-order/components/PaidOrderRowActions';
import { EditLink, HeadCell } from '@dfl/mui-admin-layout';
import { IPaidOrder } from 'modules/sales/paid-order/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { PAID_ORDER_PERMISSIONS } from 'modules/sales/paid-order/constants/paid-order.permissions';

export const paidOrderNameColumn: HeadCell<IPaidOrder> = {
  field: 'name',
  headerName: 'paidOrder:fields.name',
  disablePadding: false,
  renderCell: (name: string, data?: IPaidOrder) => (<EditLink entityId={data?._id as string}>{name}</EditLink>),
};

export const paidOrderDescriptionColumn: HeadCell<IPaidOrder> = {
  field: 'description',
  headerName: 'paidOrder:fields.description',
};

export const paidOrderActionsColumn: HeadCell<IPaidOrder> = {
  field: 'actions',
  sortable: false,
  width: 100,
  permissions: PAID_ORDER_PERMISSIONS.PAID_ORDER_WRITE,
  headerName: 'common:actions',
  disablePadding: true,
  component: PaidOrderRowActions,
};

export const paidOrderColumns: Array<HeadCell<any>> = [
  paidOrderNameColumn,
  paidOrderDescriptionColumn,
  createdATColumn,
  paidOrderActionsColumn
];
