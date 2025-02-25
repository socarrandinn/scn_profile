import { memo } from 'react';
import { DeliveryActiveCheckbox } from 'modules/sales/settings/common/components/DeliveryActiveCheckbox';
import { useShippingExpressStatus } from '../../hooks/useShippingExpressStatus';

const ExpressDeliveryActiveCheckbox = ({ settings, isLoading }: { settings?: any; isLoading?: boolean }) => {
  const { mutate, isLoading: loadingMutation } = useShippingExpressStatus(settings?.enabled as boolean);

  return (
    <DeliveryActiveCheckbox
      value={settings?.enabled}
      isLoading={isLoading || loadingMutation}
      onCheckboxChange={mutate}
    />
  );
};

export default memo(ExpressDeliveryActiveCheckbox);
