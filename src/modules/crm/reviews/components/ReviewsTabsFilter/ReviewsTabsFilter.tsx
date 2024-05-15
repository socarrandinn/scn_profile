import { memo } from 'react';
import { TabsFilter } from '@dfl/mui-admin-layout';

const ReviewsTabsFilter = () => {
  return <TabsFilter translation={'reviews'} defaultView={'all'} />;
};

export default memo(ReviewsTabsFilter);
