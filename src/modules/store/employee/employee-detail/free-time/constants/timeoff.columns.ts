import { CellType, HeadCell } from '@dfl/mui-admin-layout';
import { IEmployeeTimeOff } from 'modules/store/employee/common/interfaces/IEmployeeTimeOff';
import { renderStatusItem } from '../components/StatusItem/StatusItem';
import { renderTimeOff } from '../components/TimeOffCell/TimeOffCell';

export const timeOffPolicyTypeColumn: HeadCell<IEmployeeTimeOff> = {
  field: 'type',
  headerName: 'employee:fields.freeTime.type',
  renderCell: renderTimeOff,
};

export const startDateColumn: HeadCell<IEmployeeTimeOff> = {
  field: 'startDate',
  headerName: 'employee:fields.freeTime.startDate',
  type: CellType.DATE
};

export const endDateColumn: HeadCell<IEmployeeTimeOff> = {
  field: 'endDate',
  headerName: 'employee:fields.freeTime.endDate',
  type: CellType.DATE
};

export const statusColumn: HeadCell<IEmployeeTimeOff> = {
  field: 'status',
  headerName: 'employee:fields.freeTime.status',
  disablePadding: false,
  renderCell: renderStatusItem,
};

export const columns: Array<HeadCell<any>> = [timeOffPolicyTypeColumn, startDateColumn, endDateColumn, statusColumn];
