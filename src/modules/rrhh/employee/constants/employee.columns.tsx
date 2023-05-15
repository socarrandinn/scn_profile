import { EmployeeRowActions } from 'modules/rrhh/employee/components/EmployeeRowActions';
import { HeadCell } from '@dfl/mui-admin-layout';
import { IEmployee, IEmployeeCreate } from 'modules/rrhh/employee/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { EMPLOYEE_PERMISSIONS } from 'modules/rrhh/employee/constants/employee.permissions';
import EmployeeCell from 'modules/rrhh/employee/components/EmployeeCell/EmployeeCell';
import { EmployeePositionCell } from 'modules/rrhh/employee/components/EmployeePositionCell';
import { EmployeeAddressCell } from 'modules/rrhh/employee/components/EmployeeAddressCell';

export const employeeTitleColumn: HeadCell = {
  field: 'general.firstName',
  headerName: 'employee:fields.name',
  disablePadding: false,
  renderCell: (text, data: IEmployee) => (
    <EmployeeCell
      avatar={data?.general?.avatar}
      employeeId={data._id}
      name={`${data?.general?.firstName} ${data?.general?.lastName}`}
      email={data?.contacts?.mainEmail}
    />
  ),
};

export const employeeCIColumn: HeadCell = {
  field: 'general.ci',
  headerName: 'employee:fields.general.ci',
};

export const employeeAddressColumn: HeadCell = {
  field: 'address',
  headerName: 'employee:fields.address.address',
  renderCell: (text, data: IEmployeeCreate) => <EmployeeAddressCell address={data?.address} />,
};

export const employeeCategoryColumn: HeadCell = {
  field: 'category.name',
  headerName: 'employee:fields.category',
};

export const employeePositionColumn: HeadCell = {
  field: 'jobInformation.position',
  headerName: 'employee:fields.jobInformation.position',
  renderCell: (text, data: IEmployeeCreate) => <EmployeePositionCell position={data?.jobInformation?.position} />,
};

export const employeeCompensationColumn: HeadCell = {
  field: 'compensation.type.name',
  headerName: 'employee:fields.compensation.type',
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
  employeeCategoryColumn,
  employeePositionColumn,
  employeeCompensationColumn,
  createdATColumn,
  employeeActionsColumn,
];
