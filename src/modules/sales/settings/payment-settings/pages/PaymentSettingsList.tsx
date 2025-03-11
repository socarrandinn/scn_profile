import { memo } from 'react';
import { PageLayout } from 'layouts/index';
import PaymentSettingsListContainer from '../containers/PaymentSettingsListContainer';
import PaymentMethodsContainer from '../containers/PaymentMethodsContainer';

const PaymentSettingsList = () => {
  return (
    <PageLayout mt={0}>
      <PaymentSettingsListContainer />
      <PaymentMethodsContainer />
    </PageLayout>
  );
};

export default memo(PaymentSettingsList);
