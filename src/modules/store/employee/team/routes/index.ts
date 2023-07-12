import { TeamList, TeamDetails } from 'modules/store/employee/team/pages';
import { RouteConfig } from '@dfl/react-security';
import { TEAM_PERMISSIONS } from 'modules/store/employee/team/constants/team.permissions';

const routes: RouteConfig = {
  TeamList: {
    path: '/',
    permissions: TEAM_PERMISSIONS.TEAM_VIEW,
    component: TeamList,
  },
  TeamDetails: {
    path: '/:id',
    permissions: TEAM_PERMISSIONS.TEAM_VIEW,
    component: TeamDetails,
  },
};

export default routes;
