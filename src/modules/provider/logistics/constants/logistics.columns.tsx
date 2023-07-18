import { LogisticsRowActions } from 'modules/provider/logistics/components/LogisticsRowActions';
import { EditLink, HeadCell } from '@dfl/mui-admin-layout';
import { ILogistics } from 'modules/provider/logistics/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { LOGISTICS_PERMISSIONS } from 'modules/provider/logistics/constants/logistics.permissions';

export const logisticsNameColumn: HeadCell<ILogistics> = {
  field: 'name',
  headerName: 'logistics:fields.name',
  disablePadding: false,
  renderCell: (name: string, data: ILogistics) => (<EditLink entityId={data._id as string}>{name}</EditLink>),
};
export const logisticsEmailColumn: HeadCell<ILogistics> = {
  field: 'email',
  headerName: 'logistics:fields.email',
};

export const logisticsCategoryColumn: HeadCell<ILogistics> = {
  field: 'category',
  headerName: 'logistics:fields.category',
};

export const logisticsCommissionColumn: HeadCell<ILogistics> = {
  field: 'commission',
  headerName: 'logistics:fields.commission',
};
export const logisticsActionsColumn: HeadCell<ILogistics> = {
  field: 'actions',
  sortable: false,
  width: 100,
  permissions: LOGISTICS_PERMISSIONS.LOGISTICS_WRITE,
  headerName: 'common:actions',
  disablePadding: true,
  component: LogisticsRowActions,
};

export const logisticsColumns: Array<HeadCell<any>> = [
  logisticsNameColumn,
  logisticsEmailColumn,
  logisticsCategoryColumn,
  logisticsCommissionColumn,
  createdATColumn,
  logisticsActionsColumn
];
