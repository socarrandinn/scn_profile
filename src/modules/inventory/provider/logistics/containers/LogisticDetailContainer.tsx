import { memo } from 'react';
import { LogisticDetailProvider } from 'modules/inventory/provider/logistics/context/LogisticDetail';
import LogisticsDetailContent from '../components/LogisticDetailsContent/LogisticsDetailContent';
import { ProviderLogisticHeaderDetails } from '../components/ProviderLogisticHeaderDetails';
import { PageLayout } from 'layouts/index';

const logisticDetailsContainer = () => {
  return (
    <LogisticDetailProvider>
      <ProviderLogisticHeaderDetails />
      <PageLayout>
        <LogisticsDetailContent />
      </PageLayout>
    </LogisticDetailProvider>
  );
};

export default memo(logisticDetailsContainer);
