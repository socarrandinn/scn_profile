import { dispatchDetailTabs } from '../constants/dispatch-details.tabs';
import { useDispatchDetail } from '../contexts/dispatchContext';
import { DISPATCH_ROUTE } from '../constants/dispatch-route';
import { RouteLoader } from '@dfl/react-security';
import dispatchDetailRoutes from '../routes/details-tabs';
import { PageTabPaperLayout } from 'layouts/index';
import { Suspense } from 'react';
import { PageLoader } from '@dfl/mui-react-common';

const DispatchDetailsTabs = () => {
  const { dispatch } = useDispatchDetail();

  return (
    <PageTabPaperLayout
      prefix={DISPATCH_ROUTE.DETAIL(dispatch?._id as string)}
      tabs={dispatchDetailTabs}
      paddingTop={1}
    >
      <Suspense fallback={<PageLoader size={'screen'} />}>
        <RouteLoader
          routes={dispatchDetailRoutes}
          notfoundRedirect={`${DISPATCH_ROUTE.DETAIL(dispatch?._id as string)}/all`}
        />
      </Suspense>
    </PageTabPaperLayout>
  );
};

export default DispatchDetailsTabs;
