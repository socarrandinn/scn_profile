import { LogisticProductPage, LogisticStoreAreasPage, LogisticStoresPage } from '../pages';

const routes = {
  Stores: {
    path: '/warehouses',
    component: LogisticStoresPage,
    exact: true,
  },
  StoreAreas: {
    path: '/warehouseAreas',
    component: LogisticStoreAreasPage,
    exact: true,
  },
  Products: {
    path: '/products',
    component: LogisticProductPage,
    exact: true,
  },
};

export default routes;
