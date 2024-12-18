import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/inventory/settings/product-features/routes';
const ProductFeatureModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/inventory/settings/product-features'} memory />;
};

export default ProductFeatureModule;
