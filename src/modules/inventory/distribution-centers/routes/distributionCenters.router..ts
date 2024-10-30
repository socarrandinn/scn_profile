import { RouteConfig } from '@dfl/react-security';
import { DistributionCentersGeneralPage } from '../pages/tabs';
import DistributionCentersHistoryChangeContainer from '../containers/DistributionCentersHistoryChangeContainer';
import DistributionCentersStoresPage from '../pages/tabs/DistributionCentersStoresPage';
import { DistributionCenterProductsList } from 'modules/inventory/distribution-centers/components/DistributionCenterProductsList';
import DistributionCenterUserTabList from '../pages/tabs/DistributionCenterUserTabList';

const distributionCentersRoutes: RouteConfig = {
  general: {
    path: '/general',
    component: DistributionCentersGeneralPage,
  },

  security: {
    path: '/products',
    component: DistributionCenterProductsList,
  },
  warehouses: {
    path: '/warehouses',
    component: DistributionCentersStoresPage,
  },
  users: {
    path: '/users/*',
    component: DistributionCenterUserTabList,
  },
  history_change: {
    path: '/history_change',
    component: DistributionCentersHistoryChangeContainer,
  },
};

export default distributionCentersRoutes;
