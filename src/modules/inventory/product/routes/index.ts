import { CreateProduct, ProductDetails, ProductList } from 'modules/inventory/product/pages';
import { RouteConfig } from '@dfl/react-security';
import {
  PRODUCT_OFFER_PERMISSIONS,
  PRODUCT_PERMISSIONS,
} from 'modules/inventory/product/constants/product.permissions';
import { COUPON_PERMISSIONS } from 'modules/sales-offer/coupon/constants/coupon.permissions';
import { OFFER_PERMISSIONS } from 'modules/sales-offer/offer/constants';

const ProductPermissions = [
  PRODUCT_PERMISSIONS.PRODUCT_VIEW,
  OFFER_PERMISSIONS.OFFER_VIEW,
  COUPON_PERMISSIONS.COUPON_VIEW,
  PRODUCT_OFFER_PERMISSIONS.VIEW,
];

const routes: RouteConfig = {
  ProductList: {
    path: '/',
    permissions: ProductPermissions,
    component: ProductList,
  },
  CreateProduct: {
    path: '/create',
    permissions: PRODUCT_PERMISSIONS.PRODUCT_WRITE,
    component: CreateProduct,
  },
  ProductDetail: {
    path: '/:id/*',
    permissions: ProductPermissions,
    component: ProductDetails,
  },
};

export default routes;
