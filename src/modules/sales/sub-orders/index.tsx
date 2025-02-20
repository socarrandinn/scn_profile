import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/sales/sub-orders/routes';

const SubOrderModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/sales/sub-orders'} memory />;
};

export default SubOrderModule;
