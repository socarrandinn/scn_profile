import { RouteConfig } from '@dfl/react-security';
import ProductGeneralContainer from 'modules/inventory/product/containers/ProductGeneralContainer';
import ProductInventoryContainer from 'modules/inventory/product/containers/ProductInventoryContainer';
import ProductPriceContainer from 'modules/inventory/product/containers/ProductPriceContainer';
import ProductSEOContainer from 'modules/inventory/product/containers/ProductSEOContainer';
import ProductHistoryChangeContainer from 'modules/inventory/product/containers/ProductHistoryChangeContainer';
import ReleatedProductsContainer from 'modules/inventory/product/containers/ReleatedProductsContainer';
import ProductDetailRateList from '../containers/ProductTabs/ProductDetailRateList';

const productDetailsRoutes: RouteConfig = {
  general: {
    path: '/general',
    component: ProductGeneralContainer,
  },
  inventory: {
    path: '/inventory',
    component: ProductInventoryContainer,
  },
  prices: {
    path: '/price',
    component: ProductPriceContainer,
  },
  relatedProduct: {
    path: '/related-product',
    component: ReleatedProductsContainer,
  },
  seo: {
    path: '/seo',
    component: ProductSEOContainer,
  },
  history_change: {
    path: '/history_change',
    component: ProductHistoryChangeContainer,
  },
  reviews: {
    path: '/rate',
    component: ProductDetailRateList,
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
