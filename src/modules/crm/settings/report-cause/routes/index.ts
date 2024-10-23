import { ReportCauseList } from 'modules/crm/settings/report-cause/pages';
import { RouteConfig } from '@dfl/react-security';
import { REPORT_CAUSE_PERMISSIONS } from 'modules/crm/settings/report-cause/constants/report-cause.permissions';

const routes: RouteConfig = {
  ReportCauseList: {
    path: '/',
    permissions: REPORT_CAUSE_PERMISSIONS.REPORT_CAUSE_VIEW,
    component: ReportCauseList,
  },
};

export default routes;
