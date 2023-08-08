import { ProductsList, ProvedorProducts } from 'modules/store/provider/products/pages';
import { RouteConfig } from '@dfl/react-security';
import { PRODUCTS_PERMISSIONS } from 'modules/store/provider/products/constants/products.permissions';
import ProdutcsCreate from '../containers/ProdutcsCreate';
import EditProviderProducts from 'modules/store/provider/products/pages/EditProviderProducts';
import { LOGISTICS_PERMISSIONS } from 'modules/store/provider/logistics/constants';

const routes: RouteConfig = {
  ProductsList: {
    path: '/',
    permissions: PRODUCTS_PERMISSIONS.PRODUCTS_VIEW,
    component: ProductsList,
  },
  CreateProviderProducts: {
    path: '/create',
    permissions: PRODUCTS_PERMISSIONS.PRODUCTS_VIEW,
    component: ProdutcsCreate,
  },
  DetailProviderProducts: {
    path: '/:id/*',
    permissions: LOGISTICS_PERMISSIONS.LOGISTICS_WRITE,
    component: ProvedorProducts
  },
  EditProviderProducts: {
    path: '/:id/edit',
    permissions: PRODUCTS_PERMISSIONS.PRODUCTS_VIEW,
    component: EditProviderProducts,
  }
};

export default routes;
