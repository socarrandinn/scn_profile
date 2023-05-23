import { HeadCell } from '@dfl/mui-admin-layout';
import { IEmployeeTimeOff } from 'modules/rrhh/employee/common/interfaces/IEmployeeTimeOff';
import { renderStatusItem } from 'modules/rrhh/employee/employee-detail/free-time/components/StatusItem/StatusItem';
import { renderTimeOff } from 'modules/rrhh/employee/employee-detail/free-time/components/TimeOffCell/TimeOffCell';
import { format } from 'date-fns';

const renderDate = (date: string) => {
  return format(new Date(date), 'dd-MM-yyyy');
};

export const typeColumn: HeadCell<IEmployeeTimeOff> = {
  field: 'type',
  headerName: 'employee:fields.freeTime.type',
  renderCell: renderTimeOff,
};

export const startDateColumn: HeadCell<IEmployeeTimeOff> = {
  field: 'startDate',
  headerName: 'employee:fields.freeTime.startDate',
  renderCell: renderDate,
};

export const endDateColumn: HeadCell<IEmployeeTimeOff> = {
  field: 'endDate',
  headerName: 'employee:fields.freeTime.endDate',
  renderCell: renderDate,
};

export const statusColumn: HeadCell<IEmployeeTimeOff> = {
  field: 'status',
  headerName: 'employee:fields.freeTime.status',
  disablePadding: false,
  renderCell: renderStatusItem,
};

export const columns: Array<HeadCell<any>> = [typeColumn, startDateColumn, endDateColumn, statusColumn];
