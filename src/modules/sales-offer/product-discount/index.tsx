import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/sales-offer/product-discount/routes';

const ProductDiscountModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/sales/offers/settings/product_discounts'} memory />;
};

export default ProductDiscountModule;
