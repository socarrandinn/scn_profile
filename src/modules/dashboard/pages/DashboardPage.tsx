import { memo } from 'react';
import { PageLayout } from 'layouts/index';
import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';

const DashboardPage = () => {
  return (
        <PageLayout sx={{ marginY: 3 }}>
            <DetailLayout sx={{ position: 'relative' }}>
                <DetailSummary ghost>
                    --
                </DetailSummary>
                <DetailContent ghost>
                   --
                </DetailContent>
                {/* <Temporal/> */}
            </DetailLayout>
        </PageLayout>
  );
};

export default memo(DashboardPage);
