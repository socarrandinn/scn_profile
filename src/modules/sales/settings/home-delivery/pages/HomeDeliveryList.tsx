import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PageLayout, PagePaperLayout } from 'layouts/index';
import { TableProvider } from '@dfl/mui-admin-layout';
import HomeDeliveryListContainer from 'modules/sales/settings/home-delivery/containers/HomeDeliveryListContainer';
import { homeDeliveryFilters } from 'modules/sales/settings/home-delivery/constants/home-delivery.filters';
import { HelperText } from 'modules/inventory/settings/store-area/components/HelperText';
import { Divider, Stack } from '@mui/material';
import HomeDeliveryCreateContainer from 'modules/sales/settings/home-delivery/containers/HomeDeliveryCreateContainer';
import { HomeDeliveryAdditionalCost } from 'modules/sales/settings/home-delivery/components/HomeDeliveryAdditionalCost';
import { HomeDeliveryActiveCheckbox } from 'modules/sales/settings/home-delivery/components/HomeDeliveryActiveCheckbox';

const HomeDeliveryList = () => {
  const { t } = useTranslation('homeDelivery');

  return (
    <PageLayout>
      <HelperText text={t('description')} />

      <PagePaperLayout title={t('list')}>
        <Stack gap={3} paddingY={1.5}>
          <HomeDeliveryActiveCheckbox />
          <HomeDeliveryCreateContainer />

          <TableProvider id={'homeDeliveries'} filters={homeDeliveryFilters}>
            <HomeDeliveryListContainer />
          </TableProvider>

          <Divider />

          <HomeDeliveryAdditionalCost />
        </Stack>
      </PagePaperLayout>
    </PageLayout>
  );
};

export default memo(HomeDeliveryList);
