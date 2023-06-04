import { memo } from 'react';
import { PageLayout } from 'layouts/index';
import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import { AdvertisementCardList } from 'modules/rrhh/advertisement/components/AdvertisementCardList';
import { ImportantNotification } from 'modules/dashboard/components/ImportantNotification';
import { CurrentTask } from 'modules/dashboard/components/CurrentTask';

const DashboardPage = () => {
  return (
    <PageLayout sx={{ marginY: 3 }}>
      <DetailLayout>
        <DetailSummary ghost>
          <AdvertisementCardList />
        </DetailSummary>

        <DetailContent ghost>
            <ImportantNotification/>
            <CurrentTask/>
        </DetailContent>
      </DetailLayout>
    </PageLayout>
  );
};

export default memo(DashboardPage);
