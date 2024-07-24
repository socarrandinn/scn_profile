import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PageLayout, PagePaperLayout } from 'layouts/index';
import { HelperText } from 'modules/inventory/settings/store-area/components/HelperText';
import { Divider, Stack } from '@mui/material';
import { ShippingHomeSettingsProvider } from 'modules/sales/settings/home-delivery/contexts';
import { HomeDeliveryActiveCheckbox } from 'modules/sales/settings/home-delivery/components/HomeDeliveryActiveCheckbox';
import { HomeDeliveryAdditionalCost } from 'modules/sales/settings/home-delivery/components/HomeDeliveryAdditionalCost';
import HomeDeliveryListContainer from 'modules/sales/settings/home-delivery/containers/HomeDeliveryListContainer';
import HomeDeliveryCreateContainer from 'modules/sales/settings/home-delivery/containers/HomeDeliveryCreateContainer';

const HomeDeliverySettings = () => {
  const { t } = useTranslation('homeDelivery');

  return (
    <ShippingHomeSettingsProvider>
      <PageLayout>
        <HelperText text={t('description')} />

        <PagePaperLayout title={t('list')}>
          <Stack gap={3} paddingY={1.5}>
            <HomeDeliveryActiveCheckbox />
            <HomeDeliveryAdditionalCost />

            <HomeDeliveryCreateContainer />

            <HomeDeliveryListContainer />

            <Divider />

          </Stack>
        </PagePaperLayout>
      </PageLayout>
    </ShippingHomeSettingsProvider>
  );
};

export default memo(HomeDeliverySettings);
