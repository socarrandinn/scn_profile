import { memo } from 'react';
import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import SeoHistoryContent from '../../common/components/SeoHistoryContent/SeoHistoryContent';
import { StaticSiteMapItemDetail } from '../components/StaticSiteMapItemDetail';

const StaticSiteMapItemContainer = () => {
  return (
    <DetailLayout mb={8}>
      <DetailContent ghost>
        <StaticSiteMapItemDetail />
      </DetailContent>
      <DetailSummary ghost width={{ md: '50%', lg: '50%', xl: '50%' }}>
        <SeoHistoryContent />
      </DetailSummary>
    </DetailLayout>
  );
};

export default memo(StaticSiteMapItemContainer);
