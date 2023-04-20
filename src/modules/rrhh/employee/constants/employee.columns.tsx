import { EmployeeRowActions } from 'modules/rrhh/employee/components/EmployeeRowActions';
import { EditLink, HeadCell } from '@dfl/mui-admin-layout';
import { IEmployee } from 'modules/rrhh/employee/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { EMPLOYEE_PERMISSIONS } from 'modules/rrhh/employee/constants/employee.permissions';

export const employeeTitleColumn: HeadCell = {
  field: 'title',
  headerName: 'employee:fields.title',
  disablePadding: false,
  renderCell: (title, data: IEmployee) => <EditLink entityId={data._id}>{title}</EditLink>,
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
