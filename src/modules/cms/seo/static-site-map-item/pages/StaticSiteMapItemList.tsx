import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { TableProvider } from '@dfl/mui-admin-layout';
import StaticSiteMapItemListContainer from 'modules/cms/seo/static-site-map-item/containers/StaticSiteMapItemListContainer';
import { staticSiteMapItemFilters } from 'modules/cms/seo/static-site-map-item/constants/static-site-map-item.filters';

const StaticSiteMapItemList = () => {
  const { t } = useTranslation('staticSiteMapItem');

  return (
    <PagePaperLayout title={t('list')}>
      <TableProvider id={'staticSiteMapItems'} filters={staticSiteMapItemFilters}>
        <StaticSiteMapItemListContainer />
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(StaticSiteMapItemList);
