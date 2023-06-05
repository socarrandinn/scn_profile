import { memo } from 'react';
import { PageLayout } from 'layouts/index';
import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import { AdvertisementCardList } from 'modules/rrhh/advertisement/components/AdvertisementCardList';
import { ImportantNotification } from 'modules/dashboard/components/ImportantNotification';
import { CurrentTask } from 'modules/dashboard/components/CurrentTask';
import Temporal from 'modules/dashboard/components/Temporal/Temporal';

const DashboardPage = () => {
  return (
        <PageLayout sx={{ marginY: 3 }}>
            <DetailLayout sx={{ position: 'relative' }}>
                <DetailSummary ghost>
                    <AdvertisementCardList/>
                </DetailSummary>

                <DetailContent ghost>
                    <ImportantNotification/>
                    <CurrentTask/>
                    <CurrentTask/>
                </DetailContent>
                <Temporal/>
            </DetailLayout>
        </PageLayout>
  );
};

export default memo(DashboardPage);
