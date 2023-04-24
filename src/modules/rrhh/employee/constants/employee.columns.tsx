import { EmployeeRowActions } from 'modules/rrhh/employee/components/EmployeeRowActions';
import { HeadCell } from '@dfl/mui-admin-layout';
import { IEmployee } from 'modules/rrhh/employee/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { EMPLOYEE_PERMISSIONS } from 'modules/rrhh/employee/constants/employee.permissions';
import EmployeeCell from 'modules/rrhh/employee/components/EmployeeCell/EmployeeCell';

export const employeeTitleColumn: HeadCell = {
  field: 'general.firstName',
  headerName: 'employee:fields.name',
  disablePadding: false,
  renderCell: (text, data: IEmployee) => <EmployeeCell
      employeeId={data._id}
      name={`${data?.general?.firstName} ${data?.general?.lastName}`}
      email={data?.contacts?.emails?.find(email => email?.principal)?.value}
  />,
};

export const employeeCIColumn: HeadCell = {
  field: 'general.ci',
  headerName: 'employee:fields.general.ci',
};

export const employeeAddressColumn: HeadCell = {
  field: 'address.address',
  headerName: 'employee:fields.address.address',
};

export const employeeActionsColumn: HeadCell = {
  field: 'actions',
  sortable: false,
  width: 100,
  permissions: EMPLOYEE_PERMISSIONS.EMPLOYEE_WRITE,
  headerName: 'common:actions',
  disablePadding: true,
  component: EmployeeRowActions,
};

export const employeeColumns: HeadCell[] = [
  employeeTitleColumn,
  employeeCIColumn,
  employeeAddressColumn,
  createdATColumn,
  employeeActionsColumn,
];
