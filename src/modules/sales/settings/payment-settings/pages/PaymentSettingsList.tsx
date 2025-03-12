import { memo } from 'react';
import { PageLayout } from 'layouts/index';
import PaymentSettingsListContainer from '../containers/PaymentSettingsListContainer';

const PaymentSettingsList = () => {
  return (
    <PageLayout mt={0}>
      <PaymentSettingsListContainer />
    </PageLayout>
  );
};

export default memo(PaymentSettingsList);
