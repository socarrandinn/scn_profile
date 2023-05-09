import { TeamRowActions } from 'modules/rrhh/team/components/TeamRowActions';
import { EditLink, HeadCell } from '@dfl/mui-admin-layout';
import { ITeam } from 'modules/rrhh/team/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { TEAM_PERMISSIONS } from 'modules/rrhh/team/constants/team.permissions';

export const teamNameColumn: HeadCell<ITeam> = {
  field: 'name',
  headerName: 'team:fields.name',
  disablePadding: false,
  renderCell: (name: string, data: ITeam) => (<EditLink entityId={data._id as string}>{name}</EditLink>),
};

export const teamDescriptionColumn: HeadCell<ITeam> = {
  field: 'description',
  headerName: 'team:fields.description',
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
  teamDescriptionColumn,
  createdATColumn,
  teamActionsColumn
];
