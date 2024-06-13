import { ProductDiscountList } from 'modules/sales-offer/product-discount/pages';
import { RouteConfig } from '@dfl/react-security';
import { PRODUCT_DISCOUNT_PERMISSIONS } from 'modules/sales-offer/product-discount/constants/product-discount.permissions';

const routes: RouteConfig = {
  ProductDiscountList: {
    path: '/',
    permissions: PRODUCT_DISCOUNT_PERMISSIONS.PRODUCT_DISCOUNT_VIEW,
    component: ProductDiscountList,
  },
};

export default routes;
