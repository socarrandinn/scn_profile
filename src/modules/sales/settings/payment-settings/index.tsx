import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/sales/settings/payment-settings/routes';

const PaymentSettingsModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/sales/settings/payment-settings'} memory />;
};

export default PaymentSettingsModule;
