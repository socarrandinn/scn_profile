import { memo } from 'react';
import PaymentSettingsEditModal from 'modules/sales/settings/payment-settings/containers/PaymentSettingsEditModal';
import { PaymentSettingsCurrency } from '../components/PaymentSettingsCurrency';
import { PaymentSettingsProvider } from '../contexts/PaymentSettingsDetail';
import PaymentMethodsContainer from './PaymentMethodsContainer';

const PaymentSettingsListContainer = () => {
  return (
    <PaymentSettingsProvider>
      <PaymentSettingsCurrency />
      <PaymentMethodsContainer />
      <PaymentSettingsEditModal />
    </PaymentSettingsProvider>
  );
};

export default memo(PaymentSettingsListContainer);
