import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/order-status/routes';

const OrderStatusModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/order-statuses'} memory />;
};

export default OrderStatusModule;
