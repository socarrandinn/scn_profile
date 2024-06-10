import { Suspense } from 'react';
import { PageTabPaperLayout } from 'layouts/index';
import { PageLoader } from '@dfl/mui-react-common';
import { RouteLoader } from '@dfl/react-security';
import userTabActionRoutes from '../routes/router-tabs';
import { userTabs } from '../constants/tabs.details';

const UserTabList = () => {
  return (
    <PageTabPaperLayout prefix={'/security/users'} tabs={userTabs}>
      <Suspense fallback={<PageLoader size={'screen'} />}>
        <RouteLoader routes={userTabActionRoutes} notfoundRedirect={'/security/users/system'} />
      </Suspense>
    </PageTabPaperLayout>
  );
};
export default UserTabList;
