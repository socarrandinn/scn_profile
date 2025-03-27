import { EditLink, HeadCell } from '@dfl/mui-admin-layout';
import { IIncidence } from 'modules/sales/incidence/interfaces';
import NumericFieldCell from 'modules/sales/incidence/components/NumericFieldCell/NumericFieldCell';

export const actionProductColumn: HeadCell<IIncidence> = {
  field: 'product',
  headerName: 'incidence:actions.fields.product',
  disablePadding: false,
  renderCell: (name: string, data?: IIncidence) => <EditLink entityId={data?._id as string}>{name}</EditLink>,
};

export const actionPriceColumn: HeadCell<IIncidence> = {
  field: 'price',
  headerName: 'incidence:actions.fields.price',
};

export const actionQuantityColumn: HeadCell<IIncidence> = {
  field: 'quantity',
  headerName: 'incidence:actions.fields.quantity',
};

export const actionReimbursementColumn: HeadCell<IIncidence> = {
  field: 'reimbursement',
  headerName: 'incidence:actions.fields.reimbursement',
  renderCell: (value: number) => <NumericFieldCell value={value} />,
};

export const actionInventoryColumn: HeadCell<IIncidence> = {
  field: 'inventory',
  headerName: 'incidence:actions.fields.inventory',
  renderCell: (value: number) => <NumericFieldCell value={value} />,
};

export const incidenceReimbursementsColumns: Array<HeadCell<any>> = [
  actionProductColumn,
  actionPriceColumn,
  actionQuantityColumn,
  actionReimbursementColumn,
  actionInventoryColumn,
];
