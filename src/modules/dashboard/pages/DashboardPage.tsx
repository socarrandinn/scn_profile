import { memo } from 'react';
import { PageLayout } from 'layouts/index';
import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import { AdvertisementCardList } from 'modules/rrhh/advertisement/components/AdvertisementCardList';

const DashboardPage = () => {
  return (
    <PageLayout sx={{ marginY: 3 }}>
      <DetailLayout>
        <DetailSummary ghost>
          <AdvertisementCardList />
        </DetailSummary>

        <DetailContent ghost>Content</DetailContent>
      </DetailLayout>
    </PageLayout>
  );
};

export default memo(DashboardPage);
