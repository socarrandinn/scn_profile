import { CreateProduct, ProductDetails, ProductList } from 'modules/inventory/product/pages';
import { RouteConfig } from '@dfl/react-security';
import { PRODUCT_PERMISSIONS } from 'modules/inventory/product/constants/product.permissions';

const routes: RouteConfig = {
  ProductList: {
    path: '/',
    permissions: PRODUCT_PERMISSIONS.PRODUCT_VIEW,
    component: ProductList,
  },
  CreateProduct: {
    path: '/create',
    permissions: PRODUCT_PERMISSIONS.PRODUCT_WRITE,
    component: CreateProduct,
  },
  MyProductDetail: {
    path: '/me/*',
    component: ProductDetails,
  },
  ProductDetail: {
    path: '/:id/*',
    permissions: PRODUCT_PERMISSIONS.PRODUCT_VIEW,
    component: ProductDetails,
  },
};

export default routes;
