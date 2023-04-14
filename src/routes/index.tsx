import { memo, Suspense } from 'react';
import { PageLoader } from '@dfl/mui-react-common';
import { RouteLoader } from '@dfl/react-security';
import { routes } from './main.routes';

const Routes = () => {
  return (
    <Suspense fallback={<PageLoader size={'screen'} />}>
      <RouteLoader routes={routes} />
    </Suspense>
  );
};

export default memo(Routes);
