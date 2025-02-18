import { memo } from 'react';
import { DeliveryActiveCheckbox } from 'modules/sales/settings/common/components/DeliveryActiveCheckbox';
import { useShippingHomeStatus } from 'modules/sales/settings/home-delivery/hooks/useShippingHomeStatus';

const HomeDeliveryActiveCheckbox = ({ settings, isLoading }: { settings?: any; isLoading?: boolean }) => {
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
