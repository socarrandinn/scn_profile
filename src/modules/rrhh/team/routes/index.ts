import { TeamList } from 'modules/rrhh/team/pages';
import { RouteConfig } from '@dfl/react-security';
import { TEAM_PERMISSIONS } from 'modules/rrhh/team/constants/team.permissions';

const routes: RouteConfig = {
  TeamList: {
    path: '/',
    permissions: TEAM_PERMISSIONS.TEAM_VIEW,
    component: TeamList,
  },
};

export default routes;
