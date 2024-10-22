import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/sales/paid-order/routes';

const PaidOrderModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/sales/orders'} memory />;
};

export default PaidOrderModule;
