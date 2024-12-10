import { RouteConfig } from '@dfl/react-security';
import { DistributionCentersGeneralPage } from '../pages/tabs';
import DistributionCentersHistoryChangeContainer from '../containers/DistributionCentersHistoryChangeContainer';
import DistributionCentersWarehousePage from '../pages/tabs/DistributionCentersWarehousePage';
import { DistributionCenterProductsList } from 'modules/inventory/distribution-centers/components/DistributionCenterProductsList';

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
    component: DistributionCentersWarehousePage,
  },
  // users: {
  //   path: '/users/*',
  //   component: DistributionCenterUserTabList,
  // },
  history_change: {
    path: '/history_change',
    component: DistributionCentersHistoryChangeContainer,
  },
};

export default distributionCentersRoutes;
