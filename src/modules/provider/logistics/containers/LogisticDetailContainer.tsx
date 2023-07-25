import { memo } from 'react';
import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import { LogisticDetailProvider } from 'modules/provider/logistics/context/LogisticDetail';
import LogisticsDetailSummary from 'modules/provider/logistics/components/LogistcDetailSumamary/LogisticsDetailSummary';
import LogisticsDetailContent from '../components/LogisticDetailsContent/LogisticsDetailContent';
const logisticDetailsContainer = () => (
    <LogisticDetailProvider>
    <DetailLayout marginTop={2}>
      <DetailSummary>
        <LogisticsDetailSummary />
      </DetailSummary>
      <DetailContent ghost>
        <LogisticsDetailContent/>
      </DetailContent>
    </DetailLayout>
    </LogisticDetailProvider>
);

export default memo(logisticDetailsContainer);
