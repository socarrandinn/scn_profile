import { Suspense, memo } from 'react';
import PageTabPaperLayout from 'layouts/PageLayouts/PageTabPaperLayout';
import { PageLoader } from '@dfl/mui-react-common';
import { RouteLoader } from '@dfl/react-security';
import tabActionRoutes from 'modules/security/roles/routes/tabActionRoutes';
import { rolesTabs } from 'modules/security/roles/constants/tabs.details';

const RoleTabContianer = () => {
  return (
    <PageTabPaperLayout prefix={'/security/roles'} tabs={rolesTabs}>
      <Suspense fallback={<PageLoader size={'screen'} />}>
        <RouteLoader routes={tabActionRoutes} notfoundRedirect={'/security/roles/system'} memory />
      </Suspense>
    </PageTabPaperLayout>
  );
};
export default memo(RoleTabContianer);
