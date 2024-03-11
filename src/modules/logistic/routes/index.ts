import { LogisticProductPage, LogisticStoreAreasPage, LogisticStoresPage } from '../pages';

const routes = {
  Stores: {
    path: '/stores',
    component: LogisticStoresPage,
    exact: true,
  },
  StoreAreas: {
    path: '/storeAreas',
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
