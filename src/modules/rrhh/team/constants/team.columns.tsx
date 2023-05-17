import { TeamRowActions } from 'modules/rrhh/team/components/TeamRowActions';
import { HeadCell } from '@dfl/mui-admin-layout';
import { ITeam } from 'modules/rrhh/team/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { TEAM_PERMISSIONS } from 'modules/rrhh/team/constants/team.permissions';
import { TeamCell } from 'modules/rrhh/team/components/TeamCell';
import { IEmployee } from 'modules/rrhh/employee/interfaces';
import EmployeeCell from 'modules/rrhh/employee/components/EmployeeCell/EmployeeCell';
import { ReactNode } from 'react';

export const teamNameColumn: HeadCell<ITeam> = {
  field: 'name',
  headerName: 'team:fields.name',
  disablePadding: false,
  renderCell: (name: string, data?: ITeam): ReactNode => <TeamCell data={data as ITeam}/>,
};

export const teamDescriptionColumn: HeadCell<ITeam> = {
  field: 'description',
  headerName: 'team:fields.description',
};

export const managerColumn: HeadCell<ITeam> = {
  field: 'manager',
  headerName: 'team:fields.manager',
  renderCell: (manager: IEmployee) => (
        <EmployeeCell
            avatar={manager?.general?.avatar}
            employeeId={manager?._id}
            name={`${manager?.general?.firstName} ${manager?.general?.lastName}`}
            category={manager?.category?.name}
        />
  ),
};

export const teamActionsColumn: HeadCell<ITeam> = {
  field: 'actions',
  sortable: false,
  width: 100,
  permissions: TEAM_PERMISSIONS.TEAM_WRITE,
  headerName: 'common:actions',
  disablePadding: true,
  component: TeamRowActions,
};

export const teamColumns: Array<HeadCell<any>> = [
  teamNameColumn,
  managerColumn,
  teamDescriptionColumn,
  createdATColumn,
  teamActionsColumn
];
