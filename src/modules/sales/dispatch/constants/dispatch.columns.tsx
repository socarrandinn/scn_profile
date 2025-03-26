import { DispatchRowActions } from 'modules/sales/dispatch/components/DispatchRowActions';
import { CellType, HeadCell } from '@dfl/mui-admin-layout';
import { IDispatch } from 'modules/sales/dispatch/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { DISPATCH_PERMISSIONS } from 'modules/sales/dispatch/constants/dispatch.permissions';
import DispatchStateListCell from '../components/Cell/DispatchStateListCell';
import { ReactLink } from '@dfl/react-security';
import { DISPATCH_ROUTE } from './dispatch-route';
import DispatchSubOrderRowActions from '../components/DispatchRowActions/DispatchSubOrderRowActions';

export const dispatchNameColumn: HeadCell<IDispatch> = {
  field: 'name',
  headerName: 'dispatch:fields.name',
  disablePadding: false,
  renderCell: (name: string, data?: IDispatch) => (
    <ReactLink to={DISPATCH_ROUTE.DETAIL(data?._id as string)} underline='hover'>
      {name}
    </ReactLink>
  ),
};

export const dispatchSuborderCountColumn: HeadCell<IDispatch> = {
  field: 'metrics.suborderCount',
  headerName: 'dispatch:fields.metrics.suborderCount',
  type: CellType.NUMBER,
};
export const dispatchSubordersByRegionColumn: HeadCell<IDispatch> = {
  field: 'metrics.subordersByRegion',
  headerName: 'dispatch:fields.metrics.subordersByRegion',
  component: DispatchStateListCell,
};
export const dispatchMinDateColumn: HeadCell<any> = {
  field: 'metrics.minDate',
  headerName: 'dispatch:fields.metrics.minDate',
  type: CellType.DATE,
};

export const dispatchMaxDateColumn: HeadCell<any> = {
  field: 'metrics.maxDate',
  headerName: 'dispatch:fields.metrics.maxDate',
  type: CellType.DATE,
};

export const dispatchActionsColumn: HeadCell<IDispatch> = {
  field: 'actions',
  sortable: false,
  width: 100,
  permissions: DISPATCH_PERMISSIONS.DISPATCH_WRITE,
  headerName: 'common:actions',
  disablePadding: true,
  component: DispatchRowActions,
};

export const dispatchColumns: Array<HeadCell<any>> = [
  dispatchNameColumn,
  dispatchSuborderCountColumn,
  dispatchSubordersByRegionColumn,
  dispatchMinDateColumn,
  dispatchMaxDateColumn,
  createdATColumn,
  dispatchActionsColumn,
];

export const dispatchSubOrderActionsColumn: HeadCell<IDispatch> = {
  field: 'actions',
  sortable: false,
  width: 100,
  permissions: DISPATCH_PERMISSIONS.DISPATCH_WRITE,
  headerName: 'common:actions',
  disablePadding: true,
  component: DispatchSubOrderRowActions,
};

// by details payment agreement suborder list
export const dispatchSubOrderColumn = (subOrderColumn: any[]) => [...subOrderColumn, dispatchSubOrderActionsColumn];
