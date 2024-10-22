import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/sales/pre-order/routes';

const PreOrderModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/sales/pre-order'} memory />;
};

export default PreOrderModule;
