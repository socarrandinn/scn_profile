import { memo, Suspense } from 'react';
import { LogisticDetailProvider } from 'modules/inventory/provider/logistics/context/LogisticDetail';
import LogisticsDetailContent from '../components/LogisticDetailsContent/LogisticsDetailContent';
import { ProviderLogisticHeaderDetails } from '../components/ProviderLogisticHeaderDetails';
import { PageLayout } from 'layouts/index';
import { PageLoader } from '@dfl/mui-react-common';

const logisticDetailsContainer = () => {
  return (
    <PageLayout>
      <LogisticDetailProvider>
        <ProviderLogisticHeaderDetails />
        <Suspense fallback={<PageLoader size='page' />}>
          <LogisticsDetailContent />
        </Suspense>
      </LogisticDetailProvider>
    </PageLayout>
  );
};

export default memo(logisticDetailsContainer);
