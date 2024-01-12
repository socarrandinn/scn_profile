import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/orders/settings/order-status/routes';

const OrderStatusModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'orders/settings/order-status'} memory />;
};

export default OrderStatusModule;
