import { RouteConfig } from '@dfl/react-security';
import UserDistributionCenters from 'modules/inventory/distribution-centers/components/DistributionCentersStore/UserDistributionCenters';
import { DistributionCentersGeneralPage } from '../pages/tabs';
import DistributionCentersHistoryChangeContainer from '../containers/DistributionCentersHistoryChangeContainer';
import DistributionCentersStoresPage from '../pages/tabs/DistributionCentersStoresPage';
import { DistributionCenterProductsList } from 'modules/inventory/distribution-centers/components/DistributionCenterProductsList';

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
    component: DistributionCenterProductsList,
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
