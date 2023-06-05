import { ReasonForJobChangeList } from 'modules/rrhh/settings/reason-for-job-change/pages';
import { RouteConfig } from '@dfl/react-security';
import { REASON_FOR_JOB_CHANGE_PERMISSIONS } from 'modules/rrhh/settings/reason-for-job-change/constants/reason-for-job-change.permissions';

const routes: RouteConfig = {
  ReasonForJobChangeList: {
    path: '/',
    permissions: REASON_FOR_JOB_CHANGE_PERMISSIONS.REASON_FOR_JOB_CHANGE_VIEW,
    component: ReasonForJobChangeList,
  },
};

export default routes;
