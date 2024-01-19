import { RouteConfig } from '@dfl/react-security';
import SupplierGeneralPage from 'modules/inventory/provider/supplier/pages/tabs/SupplierGeneralPage';
// import ProductGeneralContainer from 'modules/inventory/product/containers/ProductGeneralContainer';
// import ProductInventoryContainer from 'modules/inventory/product/containers/ProductInventoryContainer';
// import ProductPriceContainer from 'modules/inventory/product/containers/ProductPriceContainer';
import ProductSEOContainer from 'modules/inventory/product/containers/ProductSEOContainer';

const productDetailsRoutes: RouteConfig = {
  general: {
    path: '/general',
    component: ProductSEOContainer,
    data: { tab: 'GENERAL' },
  },
  inventory: {
    path: '/inventory',
    component: ProductSEOContainer,
    data: { tab: 'INVENTARIO' },
  },
  prices: {
    path: '/price',
    component: ProductSEOContainer,
    data: { tab: 'PRECIO' },
  },
  seo: {
    path: '/seo',
    component: ProductSEOContainer,
    data: { tab: 'SEO' },
  },
  address: {
    path: '/work',
    component: SupplierGeneralPage,
    data: { tab: 'TRABAJO' },
  },
  contacts: {
    path: '/free_time',
    component: SupplierGeneralPage,
    data: { tab: 'TIEMPO LIBRE' },
  },
};

export default productDetailsRoutes;
