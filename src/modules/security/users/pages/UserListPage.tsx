import { Suspense } from 'react';
import { PageTabPaperLayout } from 'layouts/index';
import { PageLoader } from '@dfl/mui-react-common';
import { RouteLoader } from '@dfl/react-security';
import { userTypesTabs } from 'modules/security/users/routes/users-types.tabs';
import userTypesRoutes from 'modules/security/users/routes/users-types.routes';

const UserListPage = () => {
  return (
    <PageTabPaperLayout prefix={'/security/users'} tabs={userTypesTabs}>
      <Suspense fallback={<PageLoader size={'screen'} />}>
        <RouteLoader routes={userTypesRoutes} notfoundRedirect={'/security/users/all'} />
      </Suspense>
    </PageTabPaperLayout>
  );
};

export default UserListPage;
