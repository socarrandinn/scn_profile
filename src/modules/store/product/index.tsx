import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/store/product/routes';

const ProductModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/product'} memory />;
};

export default ProductModule;
