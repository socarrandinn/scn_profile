import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/store/provider/products/routes';

const ProductProviderModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/store/settings/suppliers'} memory />;
};

export default ProductProviderModule;
