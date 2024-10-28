import { Suspense } from 'react';
import { PageTabPaperLayout } from 'layouts/index';
import { PageLoader } from '@dfl/mui-react-common';
import { RouteLoader } from '@dfl/react-security';
import { logisticUsersTabs } from '../../constants/logistic-users-tabs.details';
import logisticUserTabRoutes from '../../routes/usres-router-tabs';
import { useLogisticsDetailContext } from '../../context/LogisticDetail';

const LogisticUserTabList = () => {
  const { logisticId } = useLogisticsDetailContext();
  return (
    <PageTabPaperLayout prefix={`/inventory/settings/logistics/${logisticId as string}/users`} tabs={logisticUsersTabs}>
      <Suspense fallback={<PageLoader size={'screen'} />}>
        <RouteLoader
          routes={logisticUserTabRoutes}
          notfoundRedirect={`/inventory/settings/logistics/${logisticId as string}/users/users`}
        />
      </Suspense>
    </PageTabPaperLayout>
  );
};
export default LogisticUserTabList;
