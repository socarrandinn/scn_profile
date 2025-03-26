import { EditLink, HeadCell } from '@dfl/mui-admin-layout';
import { IIncidence } from 'modules/sales/incidence/interfaces';
import { INCIDENCE_PERMISSIONS } from 'modules/sales/incidence/constants/incidence.permissions';
import { ComparativeRowActions } from 'modules/sales/incidence/components/ComparativeRowActions';

export const actionProductColumn: HeadCell<IIncidence> = {
  field: 'product',
  headerName: 'incidence:actions.fields.product',
  disablePadding: false,
  renderCell: (name: string, data?: IIncidence) => <EditLink entityId={data?._id as string}>{name}</EditLink>,
  width: 2,
};

export const actionPriceColumn: HeadCell<IIncidence> = {
  field: 'price',
  headerName: 'incidence:actions.fields.price',
  width: 1,
};

export const actionQuantityColumn: HeadCell<IIncidence> = {
  field: 'quantity',
  headerName: 'incidence:actions.fields.quantity',
  width: 1,
};

export const replacementsActionsColumn: HeadCell<IIncidence> = {
  field: 'actions',
  sortable: false,
  permissions: INCIDENCE_PERMISSIONS.INCIDENCE_WRITE,
  headerName: 'common:actions',
  disablePadding: true,
  component: ComparativeRowActions,
  width: 1,
};

export const incidenceBeforeColumns: Array<HeadCell<any>> = [
  actionProductColumn,
  actionPriceColumn,
  actionQuantityColumn,
];

export const incidenceReplacementColumns: Array<HeadCell<any>> = [
  actionProductColumn,
  actionPriceColumn,
  actionQuantityColumn,
  replacementsActionsColumn,
];
