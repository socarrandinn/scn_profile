import { EmployeeRowActions } from 'modules/rrhh/employee/management/components/EmployeeRowActions';
import { CellType, HeadCell } from '@dfl/mui-admin-layout';
import { IEmployee } from 'modules/rrhh/employee/common/interfaces';
import { EMPLOYEE_PERMISSIONS } from 'modules/rrhh/employee/management/constants/employee.permissions';
import EmployeeCell from 'modules/rrhh/employee/management/components/EmployeeCell/EmployeeCell';
import { EmployeePositionCell } from 'modules/rrhh/employee/management/components/EmployeePositionCell';
import { IJobPosition } from 'modules/rrhh/settings/job-position/interfaces';
import { CompensationPaymentTypeCell } from 'modules/rrhh/employee/employee-detail/job-information/components/CompensationPaymentTypeCell';
import { PaymentType } from 'modules/rrhh/employee/management/constants/compensation';
import { ITeam } from 'modules/rrhh/team/interfaces';
import { TeamCell } from 'modules/rrhh/team/components/TeamCell';

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

// export const employeeAddressColumn: HeadCell = {
//   field: 'address',
//   headerName: 'employee:fields.address.address',
//   renderCell: (text, data: IEmployeeCreate) => <EmployeeAddressCell address={data?.address}/>,
// };

export const employeeCategoryColumn: HeadCell = {
  field: 'category.name',
  headerName: 'employee:fields.category',
};

export const employeePositionColumn: HeadCell = {
  field: 'jobInformation.position',
  headerName: 'employee:fields.jobInformation.position',
  renderCell: (position: IJobPosition) => <EmployeePositionCell
        position={position}/>,
};

export const employeeTeamColumn: HeadCell = {
  field: 'jobInformation.team',
  headerName: 'employee:fields.jobInformation.team',
  renderCell: (team: ITeam) => <TeamCell data={team} hideIcon external/>,
};

export const employeeCompensationColumn: HeadCell = {
  field: 'compensation.paymentType',
  headerName: 'employee:fields.compensation.type',
  renderCell: (paymentType: PaymentType) => <CompensationPaymentTypeCell
        type={paymentType}/>,
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
export const hiredATColumn: HeadCell<any> = {
  field: 'hiring.date',
  type: CellType.DATE,
  headerName: 'employee:fields.hiring.date',
};

export const employeeColumns: HeadCell[] = [
  employeeTitleColumn,
  employeeCIColumn,
  employeePositionColumn,
  employeeCategoryColumn,
  employeeTeamColumn,
  employeeCompensationColumn,
  // employeeAddressColumn,
  hiredATColumn,
  employeeActionsColumn,
];
