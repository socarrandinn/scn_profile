import { memo } from 'react';
import { DeliveryActiveCheckbox } from 'modules/sales/settings/common/components/DeliveryActiveCheckbox';
import { useTranslation } from 'react-i18next';
import { useShippingHomeSettings } from 'modules/sales/settings/home-delivery/contexts';
import { useShippingHomeStatus } from 'modules/sales/settings/home-delivery/hooks/useShippingHomeStatus';

const HomeDeliveryActiveCheckbox = () => {
  const { t } = useTranslation('homeDelivery');
  const { settings, isLoading } = useShippingHomeSettings();
  const { mutate, isLoading: loadingMutation } = useShippingHomeStatus(settings?.enabled as boolean);
  return (
    <DeliveryActiveCheckbox
      value={settings?.enabled}
      isLoading={isLoading || loadingMutation}
      label={t('common:active')}
      description={t('activeDescription')}
      onCheckboxChange={mutate}
    />
  );
};

export default memo(HomeDeliveryActiveCheckbox);
