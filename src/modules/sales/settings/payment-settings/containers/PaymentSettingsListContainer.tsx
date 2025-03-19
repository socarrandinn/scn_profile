import { memo } from 'react';
import PaymentMethodEditModal from 'modules/sales/settings/payment-settings/containers/PaymentMethodEditModal';
import { PaymentSettingsCurrency } from '../components/PaymentSettingsCurrency';
import { PaymentSettingsProvider } from '../contexts/PaymentSettingsDetail';
import PaymentMethodsContainer from './PaymentMethodsContainer';
import PaymentMethodHistorialModal from './PaymentMethodHistorialModal';

const PaymentSettingsListContainer = () => {
  return (
    <PaymentSettingsProvider>
      <PaymentSettingsCurrency />
      <PaymentMethodsContainer />
      <PaymentMethodEditModal />
      <PaymentMethodHistorialModal />
    </PaymentSettingsProvider>
  );
};

export default memo(PaymentSettingsListContainer);
