import { memo, Suspense } from 'react';
import { RouteLoader } from '@dfl/react-security';
import appRoutes from './app.routes';
import { PageLoader } from '@dfl/mui-react-common';
import { MainLayout } from 'layouts';
import { UserControl } from 'modules/authentication/components/UserControl';

const MainApp = () => {
  return (
    <UserControl>
      <MainLayout>
        <Suspense fallback={<PageLoader />}>
          <RouteLoader routes={appRoutes} notfoundRedirect={'/'} />
        </Suspense>
      </MainLayout>
    </UserControl>
  );
};

export default memo(MainApp);
