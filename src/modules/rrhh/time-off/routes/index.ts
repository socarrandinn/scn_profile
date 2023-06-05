import { TimeOffRequestsList } from '../pages';
import { RouteConfig } from '@dfl/react-security';
import { TIME_OFF_PERMISSIONS } from '../constants';

const routes: RouteConfig = {
  TimeOffList: {
    path: '/requests/*',
    permissions: TIME_OFF_PERMISSIONS.TIME_OFF_VIEW,
    component: TimeOffRequestsList,
  },
};

export default routes;
