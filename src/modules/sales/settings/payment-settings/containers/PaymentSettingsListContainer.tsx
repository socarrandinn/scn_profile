import { memo } from 'react';
import PaymentSettingsEditModal from 'modules/sales/settings/payment-settings/containers/PaymentSettingsEditModal';
import { PaymentSettingsCurrency } from '../components/PaymentSettingsCurrency';

const PaymentSettingsListContainer = () => {
  return (
    <>
      <PaymentSettingsCurrency />
      <PaymentSettingsEditModal />
    </>
  );
};

export default memo(PaymentSettingsListContainer);
