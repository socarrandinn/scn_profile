import { TableProvider } from '@dfl/mui-admin-layout';
import { ShippingHomeSettingsProvider } from 'modules/sales/settings/home-delivery/contexts';
import { memo } from 'react';
import DistributionCenterLocationsContainer from '../../containers/DistributionCenterLocationsContainer';
import { DeliverySettingsGlobal } from 'modules/sales/settings/home-delivery/components/DeliverySettingsGlobal';
import { PagePaperLayout } from 'layouts/index';

const DistributionCenterDelivery = () => {
  return (
    <ShippingHomeSettingsProvider>
      <DeliverySettingsGlobal />
      <PagePaperLayout>
        <TableProvider id={'home-deliveries-cd'}>
          <DistributionCenterLocationsContainer />
        </TableProvider>
      </PagePaperLayout>
    </ShippingHomeSettingsProvider>
  );
};

export default memo(DistributionCenterDelivery);
