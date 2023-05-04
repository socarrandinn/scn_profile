import { memo } from 'react';
import { PageLayout } from 'layouts/index';
import FontIconPicker from 'components/libs/FontIconPicker';

const DashboardPage = () => {
  return <PageLayout sx={{ marginY: 3 }}>
    dashboard demo
    <FontIconPicker />
  </PageLayout>;
};

export default memo(DashboardPage);
