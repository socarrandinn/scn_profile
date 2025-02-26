import { memo } from 'react';
import { PageLayout } from 'layouts/index';
import { ShippingExpressSettingsProvider } from '../contexts/ShippingExpressDetail';
import ExpressDeliverySettingsContainer from '../containers/ExpressDeliverySettingsContainer';

const ExpressDeliverySettings = () => {
  return (
    <PageLayout mt={0}>
      <ShippingExpressSettingsProvider>
        <ExpressDeliverySettingsContainer />
      </ShippingExpressSettingsProvider>
    </PageLayout>
  );
};

export default memo(ExpressDeliverySettings);
