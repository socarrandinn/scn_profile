import { memo } from 'react';
import { TabsFilter } from '@dfl/mui-admin-layout';

const UserTabsFilter = () => {
  return <TabsFilter translation={'users'} defaultView={'all'} />;
};

export default memo(UserTabsFilter);
