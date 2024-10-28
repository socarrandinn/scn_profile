import { Suspense } from 'react';
import { PageTabPaperLayout } from 'layouts/index';
import { PageLoader } from '@dfl/mui-react-common';
import { RouteLoader } from '@dfl/react-security';
import { providerTabs } from '../constants/provider-tabs.details';
import providerTabRoutes from '../routes/router-tabs';

const ProviderTabList = () => {
  return (
    <PageTabPaperLayout prefix={'/security/providers-users'} tabs={providerTabs}>
      <Suspense fallback={<PageLoader size={'screen'} />}>
        <RouteLoader routes={providerTabRoutes} notfoundRedirect={'/security/providers-users/users'} />
      </Suspense>
    </PageTabPaperLayout>
  );
};
export default ProviderTabList;
