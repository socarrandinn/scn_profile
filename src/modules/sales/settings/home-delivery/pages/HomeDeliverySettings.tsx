import { memo } from 'react';
import { PageLayout } from 'layouts/index';
import HomeDeliverySettingsContainer from '../containers/HomeDeliverySettingsContainer';
import { ShippingHomeSettingsProvider } from '../contexts';

const HomeDeliverySettings = () => {
  return (
    <PageLayout mt={0}>
      <ShippingHomeSettingsProvider>
        <HomeDeliverySettingsContainer />
      </ShippingHomeSettingsProvider>
    </PageLayout>
  );
};

export default memo(HomeDeliverySettings);
