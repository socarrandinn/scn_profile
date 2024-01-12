import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/sales/settings/order-status/routes';

const OrderStatusModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'sales/settings/order-status'} memory />;
};

export default OrderStatusModule;
