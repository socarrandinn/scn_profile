import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindStaticSiteMapItems } from 'modules/cms/seo/static-site-map-item/hooks/useFindStaticSiteMapItems';
import { staticSiteMapItemColumns } from 'modules/cms/seo/static-site-map-item/constants/static-site-map-item.columns';
import { StaticSiteMapItemListToolbar } from 'modules/cms/seo/static-site-map-item/components/StaticSiteMapItemListToolbar';
import StaticSiteMapItemEditModal from 'modules/cms/seo/static-site-map-item/containers/StaticSiteMapItemEditModal';

const StaticSiteMapItemListContainer = () => {
  const { isLoading, error, data } = useFindStaticSiteMapItems();
  return (
    <Box>
      <StaticSiteMapItemListToolbar />
      <Table
        columns={staticSiteMapItemColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
        select
      />
      <StaticSiteMapItemEditModal />
    </Box>
  );
};

export default memo(StaticSiteMapItemListContainer);
