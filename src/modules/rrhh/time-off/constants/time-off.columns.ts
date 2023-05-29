import { HeadCell } from '@dfl/mui-admin-layout';
import { IEmployeeTimeOff } from 'modules/rrhh/employee/common/interfaces/IEmployeeTimeOff';
import { renderStatusItem } from '../components/StatusItem/StatusItem';
import { renderTimeOff } from '../components/TimeOffCell/TimeOffCell';
import { format } from 'date-fns';
import { renderEmployeeRowActions } from 'modules/rrhh/time-off/components/TimeOffRowActions';

const renderDate = (date: string) => {
  return format(new Date(date), 'dd-MM-yyyy');
};

export const typeColumn: HeadCell<IEmployeeTimeOff> = {
  field: 'type',
  headerName: 'timeOff:columns.type',
  renderCell: renderTimeOff,
};

export const startDateColumn: HeadCell<IEmployeeTimeOff> = {
  field: 'startDate',
  headerName: 'timeOff:columns.startDate',
  renderCell: renderDate,
};

export const endDateColumn: HeadCell<IEmployeeTimeOff> = {
  field: 'endDate',
  headerName: 'timeOff:columns.endDate',
  renderCell: renderDate,
};

export const statusColumn: HeadCell<IEmployeeTimeOff> = {
  field: 'status',
  headerName: 'timeOff:columns.status',
  disablePadding: false,
  renderCell: renderStatusItem,
};

export const actionColumn: HeadCell<IEmployeeTimeOff> = {
  field: 'actions',
  headerName: 'timeOff:columns.actions',
  disablePadding: false,
  renderCell: renderEmployeeRowActions,
  width: 150,
};

export const historyColumns: Array<HeadCell<any>> = [typeColumn, startDateColumn, endDateColumn, statusColumn];

export const requestColumns: Array<HeadCell<any>> = [...historyColumns, actionColumn];
