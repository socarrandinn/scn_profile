import { JobPositionList } from 'modules/store/employee/settings/job-position/pages';
import { RouteConfig } from '@dfl/react-security';
import { JOB_POSITION_PERMISSIONS } from 'modules/store/employee/settings/job-position/constants/job-position.permissions';

const routes: RouteConfig = {
  JobPositionList: {
    path: '/',
    permissions: JOB_POSITION_PERMISSIONS.JOB_POSITION_VIEW,
    component: JobPositionList,
  },
};

export default routes;
