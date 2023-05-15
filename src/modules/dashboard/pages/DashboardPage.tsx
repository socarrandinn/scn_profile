import { memo } from 'react';
import { PageLayout } from 'layouts/index';
import { Advertisements } from 'modules/dashboard/components/Advertisements';
import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';

const DashboardPage = () => {
  return (
    <PageLayout sx={{ marginY: 3 }}>
      <DetailLayout>
        <DetailSummary ghost>
          <Advertisements />
        </DetailSummary>

        <DetailContent ghost>Content</DetailContent>
      </DetailLayout>
    </PageLayout>
  );
};

export default memo(DashboardPage);
