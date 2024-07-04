import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/sales-offer/product-discount/routes';

const ProductDiscountModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/offers/settings/product-discounts'} memory />;
};

export default ProductDiscountModule;
