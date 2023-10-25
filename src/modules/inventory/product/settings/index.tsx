import { RouteLoader } from '@dfl/react-security';
import JobPositionModule from 'modules/inventory/product/settings/job-position';
import ReasonForJobChangeModule from 'modules/inventory/product/settings/reason-for-job-change';
import ReasonForCompensationChangeModule from 'modules/inventory/product/settings/reason-for-compensation-change';
import { RRHHSettingMenuPage } from 'modules/inventory/product/settings/setting-menu';
import WorkLocationModule from 'modules/inventory/product/settings/work-location';
import CategoryModule from 'modules/inventory/product/settings/category';
import TimeOffPoliciesModule from 'modules/inventory/product/settings/time-off-policies';

const routes = {
  JobPosition: {
    path: '/job-positions/*',
    component: JobPositionModule,
  },
  ReasonForJobChange: {
    path: '/reason-for-job-change/*',
    component: ReasonForJobChangeModule,
  },
  ReasonForCompensationChange: {
    path: '/reason-for-compensation-change/*',
    component: ReasonForCompensationChangeModule,
  },
  WorkLocationModule: {
    path: '/work-locations/*',
    component: WorkLocationModule,
  },
  CategoryModule: {
    path: '/categories/*',
    component: CategoryModule,
  },
  TimeOffPoliciesModule: {
    path: '/time-off-policies/*',
    component: TimeOffPoliciesModule,
  },
  settings: {
    path: '/',
    component: RRHHSettingMenuPage,
  },
};

const SettingsModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/rrhh/settings'} memory />;
};

export default SettingsModule;
