import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/inventory/provider/products/routes';

const ProductProviderModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/inventory/settings/suppliers'} memory />;
};

export default ProductProviderModule;
