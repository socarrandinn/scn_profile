import { memo, Suspense } from 'react';
import { RouteLoader } from '@dfl/react-security';
import appRoutes from './app.routes';
import { PageLoader } from '@dfl/mui-react-common';
import { MainLayout } from 'layouts';
import { UserControl } from 'modules/authentication/components/UserControl';
import { MapContext } from 'modules/dashboard/contexts/SelectItemContext';

const MainApp = () => {
  return (
    <UserControl>
      <MapContext>
        <MainLayout>
          <Suspense fallback={<PageLoader />}>
            <RouteLoader routes={appRoutes} notfoundRedirect={'/'} />
          </Suspense>
        </MainLayout>
      </MapContext>
    </UserControl>
  );
};

export default memo(MainApp);
