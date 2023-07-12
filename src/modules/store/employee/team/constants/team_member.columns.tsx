import { HeadCell } from '@dfl/mui-admin-layout';
import { IEmployee } from 'modules/store/employee/common/interfaces';
import EmployeeCell from 'modules/store/employee/management/components/EmployeeCell/EmployeeCell';
import { EmployeePositionCell } from 'modules/store/employee//management/components/EmployeePositionCell';
import { IJobPosition } from 'modules/store/employee/settings/job-position/interfaces';
import { TeamMemberRowActions } from 'modules/store/employee/team/components/TeamMemberRowActions';
import { TEAM_PERMISSIONS } from 'modules/store/employee/team/constants/team.permissions';
import { getFullName } from 'utils';

export const employeeTitleColumn: HeadCell = {
  field: 'general.firstName',
  headerName: 'employee:fields.name',
  disablePadding: false,
  renderCell: (text, data: IEmployee) => (
    <EmployeeCell
      avatar={data?.general?.avatar}
      employeeId={data._id}
      name={getFullName(data?.general?.firstName, data?.general?.lastName)}
      email={data?.contacts?.mainEmail}
    />
  ),
};

export const employeeCategoryColumn: HeadCell = {
  field: 'category.name',
  headerName: 'employee:fields.category',
};

export const employeePositionColumn: HeadCell = {
  field: 'jobInformation.position',
  headerName: 'employee:fields.jobInformation.position',
  renderCell: (position: IJobPosition) => <EmployeePositionCell position={position} />,
};

export const employeeActionsColumn: HeadCell = {
  field: 'actions',
  sortable: false,
  width: 100,
  permissions: TEAM_PERMISSIONS.TEAM_WRITE,
  headerName: 'common:actions',
  disablePadding: true,
  component: TeamMemberRowActions,
};

export const teamMemberColumns: HeadCell[] = [
  employeeTitleColumn,
  employeePositionColumn,
  employeeCategoryColumn,
  employeeActionsColumn,
];
