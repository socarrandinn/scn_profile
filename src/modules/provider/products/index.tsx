import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/provider/products/routes';

const ProductsModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/provider/products'} memory />;
};

export default ProductsModule;
