import { memo } from 'react';
import { ReportInventoryPage } from '.';

const DashboardPage = () => {
  return <ReportInventoryPage />;
  /* return (
    <PageLayout sx={{ marginY: 3 }}>
      <DetailLayout sx={{ position: 'relative' }}>
        <ContainerMap />
      </DetailLayout>
    </PageLayout>
  ); */
};

export default memo(DashboardPage);
