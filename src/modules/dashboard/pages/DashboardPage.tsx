import { memo } from 'react';
import { PageLayout } from 'layouts/index';
import { DetailLayout } from '@dfl/mui-form-layout';
import ContainerMap from 'modules/dashboard/components/ContainerMap/ContainerMap';

const DashboardPage = () => {
  return (
    <PageLayout sx={{ marginY: 3 }}>
      <DetailLayout sx={{ position: 'relative' }}>
        {/* <DetailSummary ghost>--</DetailSummary> */}
        {/* <DetailContent ghost>--</DetailContent> */}
        <ContainerMap />
        {/* <Temporal/> */}
      </DetailLayout>
    </PageLayout>
  );
};

export default memo(DashboardPage);
