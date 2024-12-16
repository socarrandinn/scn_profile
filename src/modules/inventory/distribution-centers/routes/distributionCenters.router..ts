import { RouteConfig } from '@dfl/react-security';
import { DistributionCentersGeneralPage } from '../pages/tabs';
import DistributionCentersHistoryChangeContainer from '../containers/DistributionCentersHistoryChangeContainer';
import DistributionCentersWarehousePage from '../pages/tabs/DistributionCentersWarehousePage';
import { DistributionCenterProductsList } from 'modules/inventory/distribution-centers/components/DistributionCenterProductsList';
import DistributionCenterUserTabList from '../pages/tabs/DistributionCenterUserTabList';
import { DISTRIBUTION_CENTER_PERMISSIONS } from '../constants';

const distributionCentersRoutes: RouteConfig = {
  general: {
    path: '/general',
    component: DistributionCentersGeneralPage,
    permissions: DISTRIBUTION_CENTER_PERMISSIONS.DISTRIBUTION_CENTER_VIEW, 
  },

  security: {
    path: '/products',
    component: DistributionCenterProductsList,
  },
  warehouses: {
    path: '/warehouses',
    component: DistributionCentersWarehousePage,
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
