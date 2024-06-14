import { RouteConfig } from '@dfl/react-security';
import { PRODUCT_DISCOUNT_PERMISSIONS } from 'modules/sales-offer/product-discount/constants/product-discount.permissions';
import { CreateProductDiscount, ProductDiscountList } from 'modules/sales-offer/product-discount/pages';

const routes: RouteConfig = {
  ProductDiscountList: {
    path: '/',
    permissions: PRODUCT_DISCOUNT_PERMISSIONS.PRODUCT_DISCOUNT_VIEW,
    component: ProductDiscountList,
  },
  CreateProductDiscount: {
    path: '/create',
    permissions: PRODUCT_DISCOUNT_PERMISSIONS.PRODUCT_DISCOUNT_WRITE,
    component: CreateProductDiscount,
  },
};

export default routes;
