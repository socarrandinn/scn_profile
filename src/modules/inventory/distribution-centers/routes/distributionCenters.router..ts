import { RouteConfig } from '@dfl/react-security';
import { DistributionCentersGeneralPage } from '../pages/tabs';
import DistributionCentersHistoryChangeContainer from '../containers/DistributionCentersHistoryChangeContainer';
import DistributionCentersWarehousePage from '../pages/tabs/DistributionCentersWarehousePage';
import { DistributionCenterProductsList } from 'modules/inventory/distribution-centers/components/DistributionCenterProductsList';
import DistributionCenterUserTabList from '../pages/tabs/DistributionCenterUserTabList';
import { DISTRIBUTION_CENTER_PERMISSIONS } from '../constants';
import { PRODUCT_PERMISSIONS } from 'modules/inventory/product/constants';

const distributionCentersRoutes: RouteConfig = {
  general: {
    path: '/general',
    component: DistributionCentersGeneralPage,
    permissions: [DISTRIBUTION_CENTER_PERMISSIONS.DISTRIBUTION_CENTER_VIEW],
  },

  security: {
    path: '/products',
    component: DistributionCenterProductsList,
    permissions: [PRODUCT_PERMISSIONS.PRODUCT_VIEW],
  },
  warehouses: {
    path: '/warehouses',
    component: DistributionCentersWarehousePage,
    permissions: [DISTRIBUTION_CENTER_PERMISSIONS.DISTRIBUTION_CENTER_VIEW],
  },
  users: {
    path: '/users/*',
    component: DistributionCenterUserTabList,
    permissions: ['ADMIN'],
  },
  history_change: {
    path: '/history_change',
    component: DistributionCentersHistoryChangeContainer,
    permissions: ['ADMIN'],
  },
};

export default distributionCentersRoutes;
