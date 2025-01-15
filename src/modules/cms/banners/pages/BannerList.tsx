import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { TableProvider } from '@dfl/mui-admin-layout';
import { bannerFilters } from '../constants';
import BannerListContainer from '../containers/BannerListContainer';

const BannerList = () => {
  const { t } = useTranslation('banner');

  return (
    <PagePaperLayout title={t('list')}>
      <TableProvider id={'banners'} filters={bannerFilters}>
        <BannerListContainer />
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(BannerList);
