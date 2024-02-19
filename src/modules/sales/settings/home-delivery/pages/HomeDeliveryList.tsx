import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PageLayout, PagePaperLayout } from 'layouts/index';
import { TableProvider } from '@dfl/mui-admin-layout';
import HomeDeliveryListContainer from 'modules/sales/settings/home-delivery/containers/HomeDeliveryListContainer';
import { homeDeliveryFilters } from 'modules/sales/settings/home-delivery/constants/home-delivery.filters';
import { HelperText } from 'modules/inventory/settings/store-area/components/HelperText';

const HomeDeliveryList = () => {
  const { t } = useTranslation('homeDelivery');

  return (
    <PageLayout>
      <HelperText text={t('description')} />

      <PagePaperLayout title={t('list')}>
        <TableProvider id={'homeDeliveries'} filters={homeDeliveryFilters}>
          <HomeDeliveryListContainer />
        </TableProvider>
      </PagePaperLayout>
    </PageLayout>
  );
};

export default memo(HomeDeliveryList);
