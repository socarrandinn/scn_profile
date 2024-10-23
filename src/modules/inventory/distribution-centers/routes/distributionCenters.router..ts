import { RouteConfig } from '@dfl/react-security';
import UserDistributionCenters from 'modules/inventory/distribution-centers/components/DistributionCentersStore/UserDistributionCenters';
import StoreProductsListComponent from 'modules/inventory/warehouse/components/storeProductsList/storeProductsList';
import { DistributionCentersGeneralPage } from '../pages/tabs';
import DistributionCentersHistoryChangeContainer from '../containers/DistributionCentersHistoryChangeContainer';
import DistributionCentersStoresPage from '../pages/tabs/DistributionCentersStoresPage';

const distributionCentersRoutes: RouteConfig = {
  general: {
    path: '/general',
    component: DistributionCentersGeneralPage,
  },
  users: {
    path: '/users',
    component: UserDistributionCenters,
  },
  security: {
    path: '/products',
    component: StoreProductsListComponent,
  },
  stores: {
    path: '/stores',
    component: DistributionCentersStoresPage,
  },
  history_change: {
    path: '/history_change',
    component: DistributionCentersHistoryChangeContainer,
  },
};

export default distributionCentersRoutes;
