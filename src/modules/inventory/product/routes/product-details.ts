import { RouteConfig } from '@dfl/react-security';
import ProductGeneralContainer from 'modules/inventory/product/containers/ProductGeneralContainer';
import ProductInventoryContainer from 'modules/inventory/product/containers/ProductInventoryContainer';
import ProductPriceContainer from 'modules/inventory/product/containers/ProductPriceContainer';
import ProductSEOContainer from 'modules/inventory/product/containers/ProductSEOContainer';
import ProductHistoryChangeContainer from 'modules/inventory/product/containers/ProductHistoryChangeContainer';
import ProductDetailRateList from '../containers/ProductTabs/ProductDetailRateList';
import RelatedProductsContainer from '../containers/RelatedProductsContainer';
import { PRODUCT_PERMISSIONS } from '../constants';
import { STOCK_PERMISSIONS } from 'modules/inventory/product-stock/constants/stock.permissions';
import { CLIENTS_PERMISSIONS } from 'modules/crm/clients/constants';

const productDetailsRoutes: RouteConfig = {
  general: {
    path: '/general',
    component: ProductGeneralContainer,
    permissions: [PRODUCT_PERMISSIONS.PRODUCT_VIEW],
  },
  inventory: {
    path: '/inventory',
    component: ProductInventoryContainer,
    permissions: STOCK_PERMISSIONS.VIEW,
  },
  prices: {
    path: '/price',
    component: ProductPriceContainer,
    permissions: PRODUCT_PERMISSIONS.PRODUCT_PRICE,
  },
  relatedProduct: {
    path: '/related-product',
    component: RelatedProductsContainer,
  },
  seo: {
    path: '/seo',
    component: ProductSEOContainer,
  },
  reviews: {
    path: '/rate',
    component: ProductDetailRateList,
    permissions: [CLIENTS_PERMISSIONS.REVIEW],
  },
  history_change: {
    path: '/history_change',
    component: ProductHistoryChangeContainer,
    permissions: ['ADMIN'],
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
