import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/sales/payment-agreement/routes';

const PaymentAgreementModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/sales/payment-agreements'} memory />;
};

export default PaymentAgreementModule;
