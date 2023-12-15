import { memo } from 'react';
import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import { LogisticDetailProvider } from 'modules/inventory/provider/logistics/context/LogisticDetail';
import LogisticsDetailSummary from 'modules/inventory/provider/logistics/components/LogistcDetailSummary/LogisticsDetailSummary';
import LogisticsDetailContent from '../components/LogisticDetailsContent/LogisticsDetailContent';

const logisticDetailsContainer = () => {
  return (
    <LogisticDetailProvider>
      <DetailLayout marginTop={2}>
        <DetailSummary>
          <LogisticsDetailSummary />
        </DetailSummary>
        <DetailContent ghost>
          <LogisticsDetailContent />
        </DetailContent>
      </DetailLayout>
    </LogisticDetailProvider>
  );
};

export default memo(logisticDetailsContainer);
