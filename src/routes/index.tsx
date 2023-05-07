import { memo, Suspense } from 'react';
import { PageLoader } from '@dfl/mui-react-common';
import { RouteLoader } from '@dfl/react-security';
import { routes } from './main.routes';
import { BreadcrumbsProvider } from '@dfl/mui-admin-layout';

const Routes = () => {
  return (
    <Suspense fallback={<PageLoader size={'screen'} />}>
      <BreadcrumbsProvider>
        <RouteLoader routes={routes} />
      </BreadcrumbsProvider>
    </Suspense>
  );
};

export default memo(Routes);
