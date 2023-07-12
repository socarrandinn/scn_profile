import { HeadCell } from '@dfl/mui-admin-layout';
import { IEmployeeTimeOff } from 'modules/store/employee/common/interfaces/IEmployeeTimeOff';
import { renderEmployeeRowActions } from 'modules/store/employee/time-off/components/TimeOffRowActions';
import {
  endDateColumn,
  startDateColumn,
  statusColumn,
  timeOffPolicyTypeColumn
} from 'modules/store/employee/employee-detail/free-time/constants/timeoff.columns';
import EmployeeCell from 'modules/store/employee/management/components/EmployeeCell/EmployeeCell';
import { IEmployee } from 'modules/store/employee/common/interfaces';
import { ConsumptionValue } from 'modules/store/employee/time-off/components/ConsumptionValue';

export const employeeColumn: HeadCell = {
  field: 'employee',
  headerName: 'timeOff:columns.employee',
  renderCell: (employee: IEmployee) => (
        <EmployeeCell
            avatar={employee?.general?.avatar}
            employeeId={employee?._id}
            name={`${employee?.general?.firstName} ${employee?.general?.lastName}`}
            position={employee?.jobInformation?.position?.name}
            category={employee?.category?.name}
        />
  ),
};

export const consumptionColumn: HeadCell<IEmployeeTimeOff> = {
  field: 'consumption',
  headerName: 'timeOff:columns.consumption',
  renderCell: (consumption: number) => <ConsumptionValue value={consumption}/>
};

export const handleByColumn: HeadCell<IEmployeeTimeOff> = {
  ...employeeColumn,
  headerName: 'timeOff:columns.handleBy',
  field: 'handleBy'
};

export const actionColumn: HeadCell<IEmployeeTimeOff> = {
  field: 'actions',
  headerName: 'timeOff:columns.actions',
  disablePadding: false,
  renderCell: renderEmployeeRowActions,
  width: 150,
};

export const requestColumns: Array<HeadCell<IEmployeeTimeOff>> = [
  employeeColumn,
  timeOffPolicyTypeColumn,
  consumptionColumn,
  startDateColumn,
  endDateColumn,
  statusColumn,
  handleByColumn,
  actionColumn
];
