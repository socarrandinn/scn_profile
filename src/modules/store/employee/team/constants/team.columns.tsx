import { TeamRowActions } from 'modules/store/employee/team/components/TeamRowActions';
import { HeadCell } from '@dfl/mui-admin-layout';
import { ITeam } from 'modules/store/employee/team/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { TEAM_PERMISSIONS } from 'modules/store/employee/team/constants/team.permissions';
import { TeamCell } from 'modules/store/employee/team/components/TeamCell';
import { IEmployee } from 'modules/store/employee/common/interfaces';
import EmployeeCell from 'modules/store/employee/management/components/EmployeeCell/EmployeeCell';
import { ReactNode } from 'react';
import { getFullName } from 'utils/index';
import { TagList } from '@dfl/mui-react-common';

export const teamNameColumn: HeadCell<ITeam> = {
  field: 'name',
  headerName: 'team:fields.name',
  disablePadding: false,
  renderCell: (name: string, data?: ITeam): ReactNode => <TeamCell data={data as ITeam} link />,
};

export const teamDescriptionColumn: HeadCell<ITeam> = {
  field: 'description',
  headerName: 'team:fields.description',
};

export const teamTagsColumn: HeadCell<ITeam> = {
  field: 'tags',
  headerName: 'team:fields.tags',
  renderCell: (tags?: string[]) => {
    if (tags) {
      return <TagList value={tags} limit={3} />;
    }
    return <></>;
  },
};

export const managerColumn: HeadCell<ITeam> = {
  field: 'manager',
  headerName: 'team:fields.manager',
  renderCell: (manager: IEmployee) => (
    <EmployeeCell
      avatar={manager?.general?.avatar}
      employeeId={manager?._id}
      name={getFullName(manager?.general?.firstName, manager?.general?.lastName)}
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
  teamTagsColumn,
  createdATColumn,
  teamActionsColumn,
];
