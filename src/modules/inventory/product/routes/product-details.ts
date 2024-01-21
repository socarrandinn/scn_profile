import { RouteConfig } from '@dfl/react-security';
// import SupplierGeneralPage from 'modules/inventory/provider/supplier/pages/tabs/SupplierGeneralPage';
import ProductGeneralContainer from 'modules/inventory/product/containers/ProductGeneralContainer';
import ProductInventoryContainer from 'modules/inventory/product/containers/ProductInventoryContainer';
import ProductPriceContainer from 'modules/inventory/product/containers/ProductPriceContainer';
import ProductSEOContainer from 'modules/inventory/product/containers/ProductSEOContainer';
import ProductHistoryChangeContainer from '../containers/ProductHistoryChangeContainer';

const productDetailsRoutes: RouteConfig = {
  general: {
    path: '/general',
    component: ProductGeneralContainer,
    data: { tab: 'GENERAL' },
  },
  inventory: {
    path: '/inventory',
    component: ProductInventoryContainer,
    data: { tab: 'ALMACENES' },
  },
  prices: {
    path: '/price',
    component: ProductPriceContainer,
    data: { tab: 'PRECIO' },
  },
  seo: {
    path: '/seo',
    component: ProductSEOContainer,
    data: { tab: 'SEO' },
  },
  history_change: {
    path: '/history_change',
    component: ProductHistoryChangeContainer,
    data: { tab: 'HISTORIAL DE CAMBIOS' },
  },
  // address: {
  //   path: '/work',
  //   component: SupplierGeneralPage,
  //   data: { tab: 'TRABAJO' },
  // },
  // contacts: {
  //   path: '/free_time',
  //   component: SupplierGeneralPage,
  //   data: { tab: 'TIEMPO LIBRE' },
  // },
};

export default productDetailsRoutes;
