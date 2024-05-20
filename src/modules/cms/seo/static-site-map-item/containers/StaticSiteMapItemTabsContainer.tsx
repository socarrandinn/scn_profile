import { memo } from 'react';
import { CenterPageLayout } from 'layouts/index';
import { RouteLoader, RouterTab } from '@dfl/react-security';
import staticSiteMapRoutes from '../routes/static-sitemap-item';
import { staticSiteMapItemTabs } from '../constants/static-site-map-item.tabs';
import { Paper } from '@mui/material';

const StaticSiteMapItemTabsContainer = () => {
  return (
    <CenterPageLayout>
      <Paper>
        <RouterTab
          tabs={staticSiteMapItemTabs}
          prefix={'/cms/seo/static_site_map_items'}
          translationNs={'seo'}
          variant='scrollable'
          scrollButtons='auto'
          allowScrollButtonsMobile
        />
      </Paper>
      <RouteLoader routes={staticSiteMapRoutes} notfoundRedirect={'/cms/seo/static_site_map_items/general'} />
    </CenterPageLayout>
  );
};

export default memo(StaticSiteMapItemTabsContainer);
