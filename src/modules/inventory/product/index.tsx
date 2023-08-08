import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/inventory/product/routes';

const ProductModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/inventory/product'} memory />;
};

export default ProductModule;
