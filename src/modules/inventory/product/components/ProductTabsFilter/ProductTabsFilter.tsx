import { memo } from 'react';
import { TabsFilter } from '@dfl/mui-admin-layout';

const ProductTabsFilter = () => {
  return <TabsFilter translation={'product'} defaultView={'all'} />;
};

export default memo(ProductTabsFilter);
