import { RouteLoader } from '@dfl/react-security';
import ContentLoader from 'components/ContentLoader/ContentLoader';
import { Suspense } from 'react';
import { CrmSettingMenu } from './setting-menu';
import ReportCauseModule from './report-cause';
import DisallowedWordModule from './disallowed-word';

const routes = {
  settings: {
    path: '/',
    component: CrmSettingMenu,
  },
  ReportCauses: {
    path: '/report-causes/*',
    component: ReportCauseModule,
  },
  DisallowedWord: {
    path: '/disallowed-words',
    component: DisallowedWordModule,
  },
};

const CrmSettingsModule = () => {
  return (
    <Suspense fallback={<ContentLoader className='min-h-[85vh]' />}>
      <RouteLoader routes={routes} notfoundRedirect={'/crm/settings'} memory />
    </Suspense>
  );
};

export default CrmSettingsModule;
