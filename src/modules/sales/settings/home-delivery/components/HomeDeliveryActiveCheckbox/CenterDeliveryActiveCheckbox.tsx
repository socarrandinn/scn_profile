import { memo } from 'react';
import { DeliveryActiveCheckbox } from 'modules/sales/settings/common/components/DeliveryActiveCheckbox';
import { useShippingCenterStatus } from '../../hooks/useShippingCenterStatus';
import { IDelivery } from 'modules/sales/settings/common/interfaces';

type Props = {
  settings?: IDelivery;
  distributionCenterId: string;
  isLoading?: boolean;
};

const CenterDeliveryActiveCheckbox = ({ settings, isLoading, distributionCenterId }: Props) => {
  const { mutate, isLoading: loadingMutation } = useShippingCenterStatus(
    settings?.enabled as boolean,
    distributionCenterId,
  );

  return (
    <DeliveryActiveCheckbox
      value={settings?.enabled}
      isLoading={isLoading || loadingMutation}
      onCheckboxChange={mutate}
    />
  );
};

export default memo(CenterDeliveryActiveCheckbox);
