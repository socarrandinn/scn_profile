import { memo } from 'react';
import { PageLayout } from 'layouts/index';
import { ShippingHomeSettingsProvider } from 'modules/sales/settings/home-delivery/contexts';
import HomeDeliverySettingsContainer from '../containers/HomeDeliverySettingsContainer';

const HomeDeliverySettings = () => {
  return (
    <PageLayout mt={1}>
      <ShippingHomeSettingsProvider>
        <HomeDeliverySettingsContainer />
      </ShippingHomeSettingsProvider>
    </PageLayout>
  );
};

export default memo(HomeDeliverySettings);
