import { memo } from 'react';
import { TableProvider } from '@dfl/mui-admin-layout';
import StaticSiteMapItemFormContent from '../components/StaticSiteMapItemForm/StaticSiteMapItemFormContent';

const StaticSiteMapItemList = () => {
  return (
    <TableProvider id={'static-site-map'}>
      <StaticSiteMapItemFormContent />
    </TableProvider>
  );
};

export default memo(StaticSiteMapItemList);
