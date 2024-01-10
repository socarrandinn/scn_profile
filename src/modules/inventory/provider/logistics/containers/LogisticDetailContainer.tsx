import { memo } from 'react';
import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import { LogisticDetailProvider } from 'modules/inventory/provider/logistics/context/LogisticDetail';
import LogisticsDetailSummary from 'modules/inventory/provider/logistics/components/LogistcDetailSummary/LogisticsDetailSummary';
import LogisticsDetailContent from '../components/LogisticDetailsContent/LogisticsDetailContent';
import { ProviderLogisticHeaderDetails } from '../components/ProviderLogisticHeaderDetails';

const logisticDetailsContainer = () => {
  return (
    <LogisticDetailProvider>
      <ProviderLogisticHeaderDetails />
      <DetailLayout marginTop={{ xs: 2, md: 3 }}>
        <DetailSummary>
          <LogisticsDetailSummary />
        </DetailSummary>
        <DetailContent ghost sx={{ '& .MuiBox-root': { paddingTop: 0 } }}>
          <LogisticsDetailContent />
        </DetailContent>
      </DetailLayout>
    </LogisticDetailProvider>
  );
};

export default memo(logisticDetailsContainer);
