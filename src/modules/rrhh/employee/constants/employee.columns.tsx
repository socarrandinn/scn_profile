import { EmployeeRowActions } from 'modules/rrhh/employee/components/EmployeeRowActions';
import { HeadCell } from '@dfl/mui-admin-layout';
import { IEmployee } from 'modules/rrhh/employee/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { EMPLOYEE_PERMISSIONS } from 'modules/rrhh/employee/constants/employee.permissions';
import EmployeeCell from 'modules/rrhh/employee/components/EmployeeCell/EmployeeCell';

export const employeeTitleColumn: HeadCell = {
  field: 'firstName',
  headerName: 'employee:fields.firstName',
  disablePadding: false,
  renderCell: (text, data: IEmployee) => <EmployeeCell
      employeeId={data._id}
      name={`${data?.general?.firstName} ${data?.general?.lastName}`}
      email={data?.contacts?.emails?.find(email => email?.principal)?.value}
  />,
};

export const employeeDescriptionColumn: HeadCell = {
  field: 'description',
  headerName: 'employee:fields.description',
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
  employeeDescriptionColumn,
  createdATColumn,
  employeeActionsColumn,
];
