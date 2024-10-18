import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/sales/pre-orders/routes';

const PreOrderModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/sales/pre-orders'} memory />;
};

export default PreOrderModule;
