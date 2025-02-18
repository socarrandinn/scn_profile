import { memo } from 'react';
import { DeliveryActiveCheckbox } from 'modules/sales/settings/common/components/DeliveryActiveCheckbox';
import { useShippingHomeSettings } from 'modules/sales/settings/home-delivery/contexts';
import { useShippingHomeStatus } from 'modules/sales/settings/home-delivery/hooks/useShippingHomeStatus';

const HomeDeliveryActiveCheckbox = () => {
  const { settings, isLoading } = useShippingHomeSettings();
  const { mutate, isLoading: loadingMutation } = useShippingHomeStatus(settings?.enabled as boolean);

  return (
    <DeliveryActiveCheckbox
      value={settings?.enabled}
      isLoading={isLoading || loadingMutation}
      onCheckboxChange={mutate}
    />
  );
};

export default memo(HomeDeliveryActiveCheckbox);
