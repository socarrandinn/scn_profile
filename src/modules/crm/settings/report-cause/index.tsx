import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/crm/settings/report-cause/routes';
import ContentLoader from 'components/ContentLoader/ContentLoader';
import { Suspense } from 'react';

const ReportCauseModule = () => {
  return (
    <Suspense fallback={<ContentLoader className='min-h-[85vh]' />}>
      <RouteLoader routes={routes} notfoundRedirect={'/crm/settings/report-causes'} memory />
    </Suspense>
  );
};

export default ReportCauseModule;
